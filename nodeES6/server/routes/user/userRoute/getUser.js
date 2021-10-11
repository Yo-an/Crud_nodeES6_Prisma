import modelUser from '../modelUser';

export default{
getUser:(req,res)=>{
    /*#swagger.tags = ['User']
        #swagger.description = 'Endpoint to select one in user'*/

    //Params
    const email = req.body.email;
    
    async function main() {    
        modelUser.getOne(email)
        .then((User)=>{
          if(User!=null){
            console.log(User);
            res.status(201).json(User);
          }
          else{
            console.log({'error':'Imposible de trouver cette utilisateur'});
            res.status(409).json({'error':'Imposible de trouver cette utilisateur'});
          }
        })
        .catch((err)=>{
          console.log({'error':'Impossible de se connecter à la base de donnée!'});
          res.status(500).json({'error':'Impossible de se connecter à la base de donnée!'});
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
