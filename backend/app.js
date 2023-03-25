const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express()


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})

app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/Example", { useNewUrlParser: true });


const addItemSchema = {
    itemname : String,
    price : Number,
    url : String,
    about: String,
}

const addItem = mongoose.model("addItemSchema", addItemSchema);

app.post('/admin/additem', (req,res) =>{
    const add = new addItem({
        itemname: req.body.itemname,
        price: req.body.price,
        url: req.body.url,
        about: req.body.about
    });
    add.save().then(result => {
        res.status(200).json({
            message: "success",
            result: result
        })
        // .catch(err => {
        //     res.status(500).json({
        //         error: err
        //     })
        // })
    })
})

app.get('/admin/getAddItem', (req,res) => {
    addItem.find().then(documents => {

        res.status(200).json({
            message: 'fetched successfully',
            posts: documents
        });
        // console.log(documents)
    })
})

app.get('/getAddItem/:name', (req,res) => {
    addItem.findOne({itemname: req.params.name}).then(documents =>{
        res.status(200).json({
            message: 'fetched',
            posts: documents
        })
    })
})



const cartItemSchema = {
    itemname : String,
    price : Number,
    url : String,
}

const cartItem = mongoose.model("cartItemSchema", cartItemSchema);

app.post('/user/cart', (req,res) =>{
    const add = new cartItem({
        itemname: req.body.name,
        price: req.body.price,
        url: req.body.url,
    });
    add.save().then(result => {
        res.status(200).json({
            message: "success",
            result: result
        })
    })
})

app.get('/user/getcart', (req,res) => {
    cartItem.find().then(documents => {
        res.status(200).json({
            message: "success",
            posts: documents
        })
    })
})

app.delete('/delete/cart/:id', (req,res,next) => {
    cartItem.deleteOne({itemname: req.params.id}).then(result => {
        // console.log(result);
        res.status(200).json({
            message: 'Successfully deleted.....'
        })
    })
})

app.delete('/delete/cart', (req,res,next) => {
    cartItem.deleteMany().then(result => {
        // console.log(result);
        res.status(200).json({
            message: 'Successfully deleted.....'
        })
    })
})


const orderSchema = {
    itemname : String,
    price : Number,
    url : String,
}

const orderItem = mongoose.model("orderSchema", orderSchema);

app.post('/admin/order', (req,res) =>{
    const add = new orderItem({
        itemname: req.body.name,
        price: req.body.price,
        url: req.body.url,
    });
    add.save().then(result => {
        res.status(200).json({
            message: "success",
            result: result
        })
    })
})

app.get('/admin/getOrderItem', (req,res) => {
    orderItem.find().then(documents => {
        res.status(200).json({
            message: "success",
            posts: documents
        })
        // console.log(documents)
    })
})

app.listen(3000, function() {
	console.log("Server started on port 3000");
});