import addUser from "./userRoute/addUser";
import deleteUser from "./userRoute/deleteUser";
import updateUser from "./userRoute/updateUser";
import getUser from "./userRoute/getUser";
import listUser from "./userRoute/listUser";

export default{
    addUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Ajouter un user !' */

        //Params
        const username = req.body.username;
        const password = req.body.password;
        const email    = req.body.email;
        const data={username:username,password:password,email:email};

        addUser.addUser(req,res,data)
    },
    deleteUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Supprimer un user par son id !' */
        
        //params
        const id = req.body.id;

        deleteUser.deleteUser(req,res,id)
    },
    updateUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Mettre à jour un user par son id !' */

        //params
        const id       = req.body.id;
        const username = req.body.username;
        const password = req.body.password;
        const email    = req.body.email;
        const data={username:username,email:email,password:password};

        updateUser.updateUser(req,res,data,id)
    },
    getUser:(req,res)=>{
        /*#swagger.tags = ['User']
        #swagger.description = 'Selectionner un user par son email !'*/

        //Params
        const email = req.body.email;

        getUser.getUser(req,res,email)
    },
    listUser:(req,res)=>{
        /* #swagger.tags = ['User']
        #swagger.description = 'Lister tout les users !' */

        listUser.listUser(req,res)
    }
}