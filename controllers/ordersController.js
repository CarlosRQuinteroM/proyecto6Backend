const { Order } = require("../models");
const router = require("../routes/ordersRouters");

class Pedido {

  async allOrders() {
    return Order.findAll();
  }
  async orderId(id) {
    return Order.findByPk(id);
  }
  async userOrder(idUser) {
    let res = await Order.findAll({where: {idUser: idUser},});
    let prueba = res.length
    if (prueba === 0){
      return (
        "vacio"
      )
    }else {return res}
  }
  async newOrder(body) {
    return Order.create(body);
  }
  async modifyOrder(cuerpoDeDatos) {

    return Order.update(

      //datos que cambiamos
      { idMovie: cuerpoDeDatos.idMovie, rentalDate: cuerpoDeDatos.rentalDate },

      //donde
      
      { where: { id: cuerpoDeDatos.id } }
    );
  }
  async deleteOrder(id) {
    return Order.destroy({ where: { id: id } });
  }
}
let orderController = new Pedido();
module.exports = orderController;
