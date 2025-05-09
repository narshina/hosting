import user from "../Models/user.js";

const add = async (req, res) => {
    let newuser = new user(req.body)
    let response = await newuser.save()
    res.json(response)
    console.log(response);

}
const view =async(req,res)=>{
    let response=await user.find()
    res.json(response)
}

export{add,view}