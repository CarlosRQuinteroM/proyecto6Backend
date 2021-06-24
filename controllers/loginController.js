const userController = require('./usersController');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "Esto es lo mas dificil del bootcamp";


class LoginController {
    async validate(emailCheck,passwordCheck){

        let user = await userController.findByEmail(emailCheck);
        if(user === null){
            throw new Error(" Wrong password or email");
        } 

        let password = user.password;

        let verificar = await bcryptjs.compare(passwordCheck,password);

        if(!verificar){
               throw new Error(" Wrong password or email ");
        } else { 

            let payload = {
                userId : user.id,
                createdAt: new Date,
                isAdmin : user.isAdmin
            };
            return jwt.sign(payload,secret); // SE CREA EL TOKEN
        }
        

    }
}

let loginController = new LoginController();
module.exports = loginController;