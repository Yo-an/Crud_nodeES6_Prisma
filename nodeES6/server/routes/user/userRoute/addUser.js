import modelUser from '../modelUser';

// password compris entre 4 et 8 caractères et inclure 1 chiffre
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
// email valide
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  addUser: (req, res, data)=>{
    
    if(data.username==null || data.password==null || data.email==null){
      console.log({'error':'Paramètre manquant'});
      return res.status(400).json({'error':'Paramètre manquant'});
    }
    if(!EMAIL_REGEX.test(data.email)){
      console.log({'error':'Cette email est invalide'});
      return res.status(400).json({'error':'Cette email est invalide'});
    }
    if(!PASSWORD_REGEX.test(data.password)){
      console.log({'error':'Le mot de passe est incorrect il doit être compris entre 4 et 8 caractères et inclure 1 chiffre'});
      return res.status(400).json({'error':'Le mot de passe est incorrect il doit être entre 4 et 8 caractère et inclure 1 chiffre'});
    }

    async function main(){
      modelUser.getOne(data.email)
      .then((userFound)=>{                             
        if(!userFound){
          modelUser.create(data)
          .then((newUser)=>{
            console.log(newUser);
            res.status(201).json(newUser);
          })
          .catch((err)=>{
            console.log({'error':'Imposible de sauvegarder cet utilisateur'});
              res.status(500).json({'error':'Imposible de sauvegarder cet utilisateur'});
          })         
        }else{
          console.log({'error':'Cet utilasateur exist déja'});
          res.status(409).json({'error':'Cet utilisateur exist déja'});
        }       
      })
      .catch((err)=>{
        console.log({'error':'Imposible de vérifier cet utilisateur'});
        res.status(500).json({'error':'Imposible de vérifier cet utilisateur'});
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