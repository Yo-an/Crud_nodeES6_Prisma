import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default{
    
  getUserProfile: (req, res)=> {

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
  }
}
    
    
