var mongoose=require("mongoose")
var cn = require("./db")
var user=require("./models/user")
var express=require("express")
var parser=require("body-parser")
var cors=require("cors")
var multer=require("multer")
var fs=require("fs")
const upload = multer({dest:'tmp'});
var app=express()
app.use(express.static('public')); 
app.use(cors({credentials:true}))
var ue=parser.urlencoded({extended:true})
app.use(parser.json())
var products=require("./models/product")
var Cart=require("./models/cart")

app.post('/createuser',ue,(req,res)=>{
    var record={
        name:req.body.name,
        email:req.body.email,
        mobileno:req.body.mobileno,
        registerno:req.body.registerno,
        password:req.body.password
    }
    user.create(record).then(()=>{
        res.json({'message':'registration successsful'})
    }).catch(()=>{
        res.json({'message':'Problem occured'})
    })
})

app.get('/login/:email/:password',(req,res)=>{
    user.find({email:req.params.email,password:req.params.password}).then((record)=>{
        res.json(record)
    }).catch(()=>{
        res.json({'message':'problem occured'})
    })
})

app.post("/addproduct",upload.single('file'),function(req,res){
    if(req.file)
    {
        fs.readFile(req.file.path,function(err,data){
            fs.writeFile(__dirname+"/public/"+req.file.originalname,data,function(err){

                if(err)
                    res.json({"message":"File not uploaded"})
                else
                {
                    var rec={productid:req.body.productid,productname:req.body.productname,
                        price:req.body.price,productimage:req.file.originalname,
                        description:req.body.description,type:req.body.type}
                        products.create(rec).then((docs)=>{
                            res.json({"message":"Product Uploaded susscesfylly"})
                        })
                }
            } )
        })
    }
})

app.get("/getproduct/:type",(req,res)=>{
    products.find({'type':req.params.type}).then((records)=>{
        res.json(records)
    })
})

app.post("/addcart/:id",ue,(req,res)=>{
    var record={
        emailid:req.body.emailid,
        productid:req.body.productid,
        qty:req.body.qty,
        amt:req.body.amt
    }
    Cart.create(record).then(()=>{
        res.json({'message':'Product added to cart succcessfully'})
    }).catch(()=>{
        res.json({'message':'Error occured on adding to cart'})
    })
})
app.listen(9000,()=>{
    console.log("Server started at http://loacalhost:9000")
}) 

