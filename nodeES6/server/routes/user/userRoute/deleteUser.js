import modelUser from '../modelUser';

export default {
deleteUser:(req,res)=>{
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete in a specific user' */
        
    //params
    const id = req.body.id;

    async function main(){ 
      modelUser.delete(id)
      .then((userDelete)=>{
        console.log({'bien effacer ':userDelete});
        res.status(201).json({'bien effacer ': userDelete});
      })
      .catch((err)=>{
        console.log({'error':'Cette utilisateur ne peu pas être effacé'});
        res.status(500).json({'error':'Cette utilisateur ne peu pas être effacé'});
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