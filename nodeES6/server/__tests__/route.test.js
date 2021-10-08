import frisby from "frisby";
const Joi = frisby.Joi; // Frisby exposes Joi for convenience

const user = Joi.object({
  id: Joi.number().required(),
  username: Joi.string().required(),
  email: Joi.string().required(),     
  password: Joi.string().required(),  
});
const userCreate ={
  username:"Josh",
  email:"josh"+getRandomInt(1000)+"@gmail.com",
  password:"blabla5"
}

console.log(userCreate);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("/user routes",()=>{
  describe("liste des users",()=>{
    it("retourne et valide la user list",()=>{
      return frisby
        .get("http://localhost:3000/api/user/list")
        .expect("status",201)
        .expect("jsonTypesStrict","*",user);
    });
  });
  describe("selection de 1 user",()=>{
    it("recherche de tout les users puis selection de 1 user",()=>{
      return frisby
        .get("http://localhost:3000/api/user/list")
        .expect("status",201)
        .expect("jsonTypesStrict","*",user)
          .then((res)=>{
            let id = res.json[0].id;
            return frisby
              .post("http://localhost:3000/api/user/get/",{
                id:id
              }) 
              .expect("status",201)
          })
    });
  });
  describe("test sur la route d'ajout de création de user",()=>{
    it("ajoute 1 user",()=>{
      return frisby
      .post("http://localhost:3000/api/user/post/",{
        username:userCreate.username,
        email:userCreate.email,
        password:userCreate.password,
      })
      .expect("status",201)
    })
  })
  describe("suppression de 1 user",()=>{
    it("recherche et suppression de 1 user",()=>{
      return frisby
        .get("http://localhost:3000/api/user/list")
        .expect("status",201)
        .expect("jsonTypesStrict","*",user)
          .then((res)=>{
            let id = res.json[3].id;
            return frisby
              .del('http://localhost:3000/api/user/delete/',{
                id:id
              }) 
              .expect("status",201)
          })
    });
  });
  describe("mise a jour de 1 user",()=>{
    it("recherche et mise a jour de 1 user",()=>{
      return frisby
        .get("http://localhost:3000/api/user/list")
        .expect("status",201)
        .expect("jsonTypesStrict","*",user)
          .then((res)=>{
            let id = res.json[4].id;
            return frisby
              .put('http://localhost:3000/api/user/put/',{
                id:id
              }) 
              .expect("status",201)
          })
    });
  });
});