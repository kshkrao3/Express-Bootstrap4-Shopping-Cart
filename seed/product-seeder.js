var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true }, function(err) {
    if (err) { console.log('Error occured while connecting to database'); throw err; }
    console.log('Connected to database');
});
var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 10
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/World_of_Warcraft#/media/File:WoW_Box_Art1.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 20
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/M05J-5akzaE/maxresdefault.jpg',
        title: 'Call of Duty Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/716mcbaBxIL._AC_SL1151_.jpg',
        title: 'Minecraft Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcDudWh7h8sN4jQXW4SPC0brPFUulpW5pn_gDNiqVhTDfMNgc6F54BjIyuhiunt0vZCSX0oSSl_ivqry6YmNZi0jyQFkbjSmAvc6yrwJoyii6KysWRkhsJrzB41gyJdvGVfccirFkDtSkqmdOMtdJxSbxTiwtPjSv9VyM8zgvt2_4-&w=200&h=300&format=jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 15
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/M05J-5akzaE/maxresdefault.jpg',
        title: 'Call of Duty Video Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non cupiditate distinctio reprehenderit nesciunt libero adipisci hic odio architecto. Recusandae atque obcaecati harum animi quaerat vero dolor non iusto maxime.',
        price: 10
    }),

];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}