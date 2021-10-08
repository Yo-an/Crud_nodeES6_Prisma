"use strict";

var _frisby = _interopRequireDefault(require("frisby"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Joi = _frisby.default.Joi; // Frisby exposes Joi for convenience

/*-- 
  Construction de l'object comprenant les variable 
  demandé dans les différentes requettes
---*/

const user = Joi.object({
  id: Joi.number().required(),
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required()
});
/*--
  Construction d'un user fictif pour les différents tests 
---*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const userCreate = {
  username: "Josh",
  email: "josh" + getRandomInt(1000) + "@gmail.com",
  password: "blabla5"
};
let UserId; // Test de l'ensemble des routes de /api/user

describe("/user routes", () => {
  // Test de l'ajout d'un user /api/user/post
  describe("test sur la route d'ajout de création de user", () => {
    it("ajoute 1 user", () => {
      return _frisby.default.post("http://localhost:3000/api/user/post/", {
        username: userCreate.username,
        email: userCreate.email,
        password: userCreate.password
      }).expect("status", 201);
    });
  }); // Test de la récupération de la list de users /api/user/list 

  describe("liste des users", () => {
    it("retourne et valide la user list", () => {
      return _frisby.default.get("http://localhost:3000/api/user/list").expect("status", 201).expect("jsonTypesStrict", "*", user);
    });
  }); // Test de la récupération de un user /api/user/get

  describe("selection de 1 user", () => {
    it("selection de 1 user", () => {
      return _frisby.default.post("http://localhost:3000/api/user/get/", {
        email: userCreate.email
      }).expect("status", 201).then(res => {
        UserId = res.json.id;
      });
    });
  }); // Test de la mise à jour d'un user api/user/put

  describe("mise a jour de 1 user", () => {
    it("mise a jour de 1 user", () => {
      return _frisby.default.put('http://localhost:3000/api/user/put/', {
        id: UserId,
        username: "boby"
      }).expect("status", 201);
    });
  }); // Test de la suppression d'un user /api/user/delete

  describe("suppression de 1 user", () => {
    it("suppression de 1 user", () => {
      return _frisby.default.del('http://localhost:3000/api/user/delete/', {
        id: UserId
      }).expect("status", 201);
    });
  });
});