'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('Users', [
      {
      name: "Mariana",
      last_name1: "Fernandez",
      last_name2: "Sacristan",
      country: "Spain",
      city: "Valencia",
      shipping_address: "Calle 123",
      billing_address: "Calle 456",
      email: "m@gmail.com",
      password: "$2a$10$j1X7cYrrJ2vUEAiqyvNIhe3o/deRog/4EE6.ixTxBtYKKtfpJ/hae",
      phone: "684684684",
      birthday: "2021/05/15",
      dni: "26262626X",
      isAdmin: 1,
      updatedAt: "2021-05-27",
      createdAt: "2021-05-27",
  },
  {
    name: "juanfe",
    last_name1: "Fernandez",
    last_name2: "Sacristan",
    country: "Spain",
    city: "Valencia",
    shipping_address: "Calle 123",
    billing_address: "Calle 456",
    email: "juafe@gmail.com",
    password: "$2a$10$ZQee40hSpQPb1bVp0xAyzOm4NMChPWumVhg8tIS48ph509PK0y3o2",
    phone: "684684684",
    birthday: "2021/05/15",
    dni: "26262626X",
    isAdmin: 0,  
    updatedAt: "2021-05-27",
    createdAt: "2021-05-27",
},
{
  name: "Carlos",
  last_name1: "Quintero",
  last_name2: "Moreno",
  country: "Spain",
  city: "Valencia",
  shipping_address: "Calle 654",
  billing_address: "Calle 896",
  email: "c@gmail.com",
  password: "$2a$10$VGmyyPsPjaBLD9d3S10yq.0S9sXti7fNP3ZKmek84XtpEGdibd0/q",
  phone: "63636363",
  birthday: "2021-05-14",
  dni: "3665847N",
  isAdmin: 1,
  updatedAt: "2021-05-27",
  createdAt: "2021-05-27",
},
{
  name: "Adriana",
  last_name1: "Fayos",
  last_name2: "notiene",
  country: "Spain",
  city: "Valencia",
  shipping_address: "Calle 1",
  billing_address: "Calle 1",
  email: "adriana@gmail.com",
  password: "$2a$10$I6L1BAu4sPILz81RXd31VOhc8XS1UeyrwywbQHkxYlfzN1lWn7YZK",
  phone: "68568565",
  birthday: "2021/02/01",
  dni: "2598745L",
  isAdmin: 0,
  updatedAt: "2021-05-27",
  createdAt: "2021-05-27",
  },

]
    );
 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
