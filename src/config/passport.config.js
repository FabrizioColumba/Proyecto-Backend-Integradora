import { Strategy, ExtractJwt } from 'passport-jwt';
import local from 'passport-local';
import passport from 'passport';

import { usersServices } from '../services/repositories.js';
import { createHash, validatePassword } from '../services/auth.js';

import { cookieExtractor } from '../util.js';
import config from './config.js';
import UserTokenDTO from '../dto/User/TokenDTO.js';
import UserInsertDTO from '../dto/User/InsertDto.js';

const LocalStrategy = local.Strategy;
const JWTStrategy = Strategy;

const initializePassportStrategies = () => {
  passport.use(
    'register',
    new LocalStrategy(
      { passReqToCallback: true, usernameField: 'email' },
      async (req, email, password, done) => {
        try {
            const {firstName,lastName,role} = req.body;
            const exists = await usersServices.getBy({email});
            if(exists)
                return done(null,false,{message:"User already exists"})
            const hashedPassword = await createHash(password);
            const newUser = UserInsertDTO.getFrom({
              firstName,
              lastName,
              role,
              email,
              password:hashedPassword
            });
            const result = await usersServices.create(newUser);
            return done(null,result);
        } catch (error) {
            return done(error);
        }
      }
    )
  );
  passport.use('login', new LocalStrategy({usernameField:'email'},async(email,password,done)=>{
    let resultUser;
    try {
        if(email===config.app.SUPERADMIN_EMAIL&&password===config.app.SUPERADMIN_PASSWORD){
            //Acaba de entrar como SUPER ADMIN
            resultUser = {
                name:"Admin",
                id:0,
                role:'superadmin'
            }
            return done(null,resultUser);
        }
        const user = await usersServices.getBy({email});
        if(!user) return done(null,false,{message:"User not found"});
        const isValidPassword = await validatePassword(password,user.password);
        if(!isValidPassword) return done(null, false,{message:"Incorrect credentials"});
        //El usuario ya existe y sí es la contraseña
        resultUser = UserTokenDTO.getFrom(user);
        return done(null, resultUser);
    } catch (error) {
        return done(error);
    }
  }))

  passport.use('jwt', new JWTStrategy({
    jwtFromRequest:ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: 'jwtSecret'
  },async(payload,done)=>{
    try {
      //Si el token no existe, entonces el payload llega falso o directamente un error
        return done(null,payload);
    } catch (error) {
        return done(error);
    }
  }))

};

export default initializePassportStrategies;
