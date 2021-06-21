const { User } = require("../models");
const router = require("../routes/usersRouter");
const bcryptjs = require('bcryptjs');

class Person {
  async findAllUsers() {
    return User.findAll();
  }
  async findByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }
    async findByUserId(id) {
      return User.findByPk(id);

  }
  async newUser(body) {
    let password = body.password;
    let passwordHashed = bcryptjs.hashSync(password, 10);
    body.password = passwordHashed;
    return User.create(body);
  }
  async modifyUser(cuerpoDeDatos) {
    return User.update(
      //datos que cambiamos
      {
        billing_address: cuerpoDeDatos.billing_address,
        shipping_address: cuerpoDeDatos.shipping_address,
        phone: cuerpoDeDatos.phone,
        city: cuerpoDeDatos.city,
        country: cuerpoDeDatos.country,
        birthday: cuerpoDeDatos.birthday
      },
      //donde
      { where: { id: cuerpoDeDatos.idUser } }
    );
  }
  async deleteUser(id) {
    return User.destroy({ where: { id: id } });
  }
}
let usersController = new Person();
module.exports = usersController;
