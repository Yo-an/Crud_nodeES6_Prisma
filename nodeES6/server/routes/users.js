import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default{

  getUsers: (req, res)=> {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */
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
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */
    //Params
    const username = req.body.username;
    const password = req.body.password;
    const email    = req.body.email;

    async function main(){
      const newUser = await prisma.users.create({
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
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */
    //params
    const id       = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email    = req.body.email;

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
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */
    //params
    const id = req.body.id;

    async function main(){ 
      await prisma.users.delete({
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
    
    
