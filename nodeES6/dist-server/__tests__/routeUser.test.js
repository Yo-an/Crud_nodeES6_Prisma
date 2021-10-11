"use strict";

var _frisby = _interopRequireDefault(require("frisby"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
    Test des différentes routes des Users
*/
var Joi = _frisby["default"].Joi;
/*-- 
  Construction de l'object comprenant les variables 
  demandé dans les différentes requettes
---*/

var user = Joi.object({
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

var userCreate = {
  username: "Josh",
  email: "josh" + getRandomInt(100) + "@gmail.com",
  password: "blabla5"
};
var UserId;
describe("Test de l'ensemble des routes /api/user", function () {
  describe("Test de la route de création de user /api/user/post", function () {
    it("Ajoute 1 user", function () {
      return _frisby["default"].post("http://localhost:3000/api/user/post/", {
        username: userCreate.username,
        email: userCreate.email,
        password: userCreate.password
      }).expect("status", 201);
    });
  });
  describe("Test de la route qui liste les users /api/user/list", function () {
    it("Retourne et valide la liste des users", function () {
      return _frisby["default"].get("http://localhost:3000/api/user/list").expect("status", 201).expect("jsonTypesStrict", "*", user);
    });
  });
  describe("Test de la route qui récupére un user /api/user/get", function () {
    it("Selection de 1 user avec son email", function () {
      return _frisby["default"].post("http://localhost:3000/api/user/get/", {
        email: userCreate.email
      }).expect("status", 201).then(function (res) {
        UserId = res.json.id;
      });
    });
  });
  describe("Test de la route de mise a jour de 1 user /api/user/put", function () {
    it("Mise a jour de 1 user", function () {
      return _frisby["default"].put('http://localhost:3000/api/user/put/', {
        id: UserId,
        username: "boby",
        password: "hrtys14"
      }).expect("status", 201);
    });
  });
  describe("Test de la route de suppression de 1 user /api/user/delete", function () {
    it("Suppression de 1 user", function () {
      return _frisby["default"].del('http://localhost:3000/api/user/delete/', {
        id: UserId
      }).expect("status", 201);
    });
  });
});