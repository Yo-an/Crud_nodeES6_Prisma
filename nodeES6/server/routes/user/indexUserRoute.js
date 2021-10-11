import addUser from "./userRoute/addUser";
import deleteUser from "./userRoute/deleteUser";
import updateUser from "./userRoute/updateUser";
import getUser from "./userRoute/getUser";
import listUser from "./userRoute/listUser";

export default{
    addUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to add in user' */

        //Params
        const username = req.body.username;
        const password = req.body.password;
        const email    = req.body.email;
        const data={username:username,password:password,email:email};

        addUser.addUser(req,res,data)
    },
    deleteUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete in a specific user' */
        
        //params
        const id = req.body.id;

        deleteUser.deleteUser(req,res,id)
    },
    updateUser:(req,res)=>{
        /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to update in a specific user' */

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
        #swagger.description = 'Endpoint to select one in user'*/

        //Params
        const email = req.body.email;

        getUser.getUser(req,res,email)
    },
    listUser:(req,res)=>{
        /* #swagger.tags = ['User']
        #swagger.description = 'Endpoint qui fait la liste de tout les users' */

        listUser.listUser(req,res)
    }
}