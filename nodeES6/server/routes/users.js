import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default{

  getUsers: (req, res)=> {

    async function main() {      
      const allUsers = await prisma.users.findMany();
      console.log(allUsers);
      res.status(201).json(allUsers);
    }  
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  },

  addUser: (req, res)=>{

    //Params
    var username = req.body.username;
    var password = req.body.password;
    var email    = req.body.email;

    async function main(){
      var newUser = await prisma.users.create({
        data: {
          username: username,
          email: email,
          password:password,
        },
      });
      res.status(201).json(newUser);
    }
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  },
  putUser:(req, res)=>{
    
    //params
    var id=req.body.id;
    var username = req.body.username;
    var password = req.body.password;
    var email    = req.body.email;

    async function main(){     
      const updateUser= await prisma.users.update({
        where:{ id:Number(id)},
        data:{
          username: username,
          email: email,
          password:password,
        }
      });
      res.status(201).json(updateUser);
    }
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  },
  deleteUser:(req,res)=>{

    //params
    var id=req.body.id;

    async function main(){ 
      const deleteUser= await prisma.users.delete({
        where:{ id:Number(id)},
      });
      res.status(201).json('bien effacer');
    }
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  }
}
    
    
