import addUser from "./userRoute/addUser";
import deleteUser from "./userRoute/deleteUser";
import updateUser from "./userRoute/updateUser";
import getUser from "./userRoute/getUser";
import listUser from "./userRoute/listUser";

export default{
    addUser:(req,res)=>addUser.addUser(req,res),
    deleteUser:(req,res)=>deleteUser.deleteUser(req,res),
    updateUser:(req,res)=>updateUser.updateUser(req,res),
    getUser:(req,res)=>getUser.getUser(req,res),
    listUser:(req,res)=>listUser.listUser(req,res)
}