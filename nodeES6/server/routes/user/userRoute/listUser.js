import modelUser from '../modelUser';

export default{
  listUser: (req, res)=> {
    
    async function main() {      
      modelUser.getAll()
      .then((allUsers)=>{       
        console.log(allUsers);
        return res.status(201).json(allUsers);
      })
      .catch((err)=>{
        console.log({'error':'Impossible de lister les utilisateurs !'});
        return res.status(500).json({'error':'Impossible de lister les utilisateurs !'});
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