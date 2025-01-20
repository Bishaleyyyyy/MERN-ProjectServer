import { Request, Response } from "express";
import User from "../database/models/UserModel";
import bcrypt from 'bcrypt'

class UserController {
  static async registerUser(req: Request, res: Response) {
    //incoming user data services
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({
        message: "Please provide username,email and password",
      });

      return;
    }

    await User.create({
      username,
      email,
      password : bcrypt.hashSync(password,8),
    });

    res.status(200).json({
      message: "User resistered successfully.",
    });
  }

 static async login(req:Request, res:Response){

       //accept incoming data
       const{email,password } = req.body
       if(!email || !password){
        res.status(400).json({
          message:"Please provide email and password"
        })
        return
       }
       //check email exist or not at first
      const user = await User.findAll({
        where:{
        email: email
        }
       })
      
      
       if(user.length == 0){
        res.status(404).json({
          message:"Not found user with that email 😔"
        })

       }
        //if yes---> email exist --> check password too
        else{
          const isEqual = bcrypt.compareSync(password,user[0].password)
          if(!isEqual){
            res.status(400).json({
              message:"Invalid password"
            })
          }
          else{
            res.status(200).json({
              message:"Logged in success."
            })
          }
        }
       //if password is correct then generate jwt token

  }

}

export default UserController;
