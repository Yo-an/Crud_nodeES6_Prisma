import modelUser from '../modelUser';

export default{
  getUser:(req,res,email)=>{
    
    async function main() {    
        modelUser.getOne(email)
        .then((User)=>{
          if(User!=null){
            console.log(User);
            res.status(201).json(User);
          }
          else{
            console.log({'error':'Imposible de trouver cet utilisateur !'});
            res.status(409).json({'error':'Imposible de trouver cet utilisateur !'});
          }
        })
        .catch((err)=>{
          console.log({'error':'Impossible de se connecter à la base de donnée !'});
          res.status(500).json({'error':'Impossible de se connecter à la base de donnée !'});
        })
      } 
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        modelUser.closePrisma;
    })
  },
}
