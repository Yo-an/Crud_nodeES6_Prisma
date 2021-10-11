import modelUser from '../modelUser';

export default {
  updateUser:(req, res,data,id)=>{
    
    let tempData={};
    for(let index in data){
        if(data[index]!=null){
            tempData[index]=(data[index]);
        }
    }

    async function main(){
      modelUser.update(id,tempData)
      .then((updateUser)=>{
        console.log(updateUser);
        res.status(201).json(updateUser);
      })
      .catch((err)=>{
        console.log({'error':'Impossible de modifier cet utilisateur'});
        res.status(500).json({'error':'Impossible de modifier cet utilisateur'});
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