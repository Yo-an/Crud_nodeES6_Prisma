import modelUser from '../modelUser';

export default {
  deleteUser:(req,res,id)=>{
    
    async function main(){ 
      modelUser.delete(id)
      .then((userDelete)=>{
        console.log({'bien effacer ':userDelete});
        res.status(201).json({'bien effacer ': userDelete});
      })
      .catch((err)=>{
        console.log({'error':'Cet utilisateur ne peut pas être effacé'});
        res.status(500).json({'error':'Cet utilisateur ne peut pas être effacé'});
      })
    }
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        modelUser.closePrisma;
    })
  }
}