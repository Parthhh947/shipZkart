const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require("multer")
const app = express()
const dotenv=require("dotenv")
const nodeMailer=require("nodemailer")

dotenv.config()

app.use(cors())
app.use(express.json())

app.listen(9000, () => {
    console.log("Server is running");

})

mongoose.connect("mongodb://127.0.0.1:27017/website")

    .then(() => {
        console.log("Mongodb is connected");

    })

    .catch(() => {
        console.log("Mongodb is not connected");

    })

   
//signup model schema api

const signupschema = new mongoose.Schema({
    Name: String,
    Gmail: String,
    Number: Number,
    Password: String,
    ConfirmPass: String,
    Status:String
})

const signupmodel = mongoose.model("SignUp", signupschema, "SignUp")


app.post("/api/signup", async (req, res) => {
    const result = new signupmodel({
        Name: req.body.name,
        Gmail: req.body.mail,
        Number: req.body.num,
        Password: req.body.pass,
        ConfirmPass: req.body.cpass,
        Status:"Inactive"
    })

    const datasave = await result.save()
   
    if (datasave) {
        res.send({ statuscode: 1, msg: "Signup Finished" })
    }
    else {
        res.send({ statuscode: 0 })
    }

})




//login api

app.post("/api/login", async (req, res) => {
    const user = await signupmodel.findOne({ Gmail: req.body.mail })
    if (user.Password == req.body.pass) {
        res.send({ statuscode: 1 })
    }
    else {
        res.send({ statuscode: 0 })
    }
})

//Multer Configration

let pic
const Staorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        pic = Date.now() + file.originalname;
        cb(null, file.fieldname + "-" + pic)
    }

})

let upload = multer({ storage: Staorage })

const AddcatSchema = mongoose.Schema({
    CatName: String,
    Pic: String
})

const AddcatModel = mongoose.model("Category", AddcatSchema, "Category")
app.post("/api/addcat", upload.single("pic"), async (req, res) => {

    if (!req.file) {
        pic = "default.jpg";
    } else {
        pic = req.file.filename;
    }

    let newcat = new AddcatModel({
        CatName: req.body.catname,
        Pic: pic
    });

    let savee = await newcat.save(); // also fixed capital 

    if (savee) {
        res.send({ statuscode: 1 });
    } else {
        res.send({ statuscode: 0 });
    }
});

// get

app.get("/api/getpic", async (req, res) => {

    const data = await AddcatModel.find()

    if (data) {
        res.send({ statuscode: 1, cat: data })
    }

    else {
        res.send({ statuscode: 0 })
    }

})

// post product

const productschema = new mongoose.Schema({
    ProductName: String,
    ProductDetail: String,
    Productprice: Number,
    CatName: String,
    Image: String

})

const productmodel = mongoose.model("Products", productschema, "Products")

app.post('/api/productinfo', upload.single("pic"), async (req, res) => {

    if (!req.file) {
        pic = "default.jpeg"
    }

    else {
        pic = req.file.filename
    }

    const result = new productmodel({

        ProductName: req.body.pname,
        ProductDetail: req.body.pdetail,
        Productprice: req.body.price,
        CatName: req.body.id,
        Image: pic

    })

    const productsave = await result.save()
    if (productsave) {
        res.send({ statuscode: 1, msg: "product info uploaded succesfully" })
    }
    else {
        res.send({ statuscode: 0 })
    }
}
)

// GET PRODUCT -- >

app.get("/apigetdata/", async (req, res) => {
    const getdata = await productmodel.find()

    if (getdata) {
        res.send({ statuscode: 1, product: getdata })
    }
    else {
        res.send({ statuscode: 0 })
    }
})

// PRODUCT LISTING DELETE -->

app.delete("/api/delete/:id", async (req, res) => {
    const data = await productmodel.deleteOne({ _id: req.params.id })

    if (data.deletedCount > 0) {
        res.send({ statuscode: 1 })
    }
    else {

        res.send({ statuscode: 0 })
    }
})


// FORM POST -->

const problemschema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    State: String,
    City: String,
    Contact: Number,
    Problem: String
})

const problemmodel = mongoose.model("Problem", problemschema, "Problem")

app.post("/api/problem", async (req, res) => {
    const result = new problemmodel({
        FirstName: req.body.fname,
        LastName: req.body.lname,
        State: req.body.state,
        City: req.body.city,
        Contact: req.body.num,
        Problem: req.body.prob
    })

    const userdata = await result.save()
    if (userdata) {
        res.send({ statuscode: 1, msg: "User Problem Saved" })
    }

    else {
        res.send({ statuscode: 0 })
    }
})

