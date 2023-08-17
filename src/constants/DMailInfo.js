import __dirname from "../util.js"
export default {
    welcome: {
        subject:"¡Bienvenido!",
        attachments: [
            {
                filename:'banner.png',
                path:`${__dirname}/public/images/erp2.png`,
                cid:"banner"
            }
        ]
    },
    restore: {
        subject:"Restaurar contraseña",
        attachments: [
            {
                filename:'banner.png',
                path:`${__dirname}/public/images/erp2.png`,
                cid:"banner"
            }
        ]
    }
}