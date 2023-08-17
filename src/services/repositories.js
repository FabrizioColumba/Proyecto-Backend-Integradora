import UserRepository from "./Repositories/UsersRepository.js";
import CompanyRepository from "./Repositories/CompaniesRepository.js";
import MessagesRepository from "./Repositories/MessagesRepository.js";

import UserDao from "../dao/mongo/managers/users.js";
import CompaniesDao from "../dao/mongo/managers/companies.js";
import MessagesDao from "../dao/mongo/managers/messages.js";

export const usersServices = new UserRepository(new UserDao());
export const companiesServices = new CompanyRepository(new CompaniesDao());
export const messagesServices = new MessagesRepository(new MessagesDao());