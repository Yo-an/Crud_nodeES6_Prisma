import modelUser from '../modelUser';

export default{
    listUser: (req, res)=> {
      /* 	#swagger.tags = ['User']
          #swagger.description = 'Endpoint to list in user' */
  
      async function main() {      
        modelUser.getAll()
        .then((allUsers)=>{       
            console.log(allUsers);
            return res.status(201).json(allUsers);
          })
          .catch((err)=>{
            console.log({'error':'Ne peux pas lister les utilisateurs'});
            return res.status(500).json({'error':'Ne peux pas lister les utilisateurs'});
          })
      }  
      main()
        .catch((e) => {
          throw e
        })
        .finally(async () => {
          modelUser.closePrisma
        })
    },
}