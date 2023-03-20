const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello form the server router.js`)
});


/** Using Promises */




/** Async Await  */

router.post('/signup', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword ) {
        return res.status(422).json({error: "Please fill the field properly"});
    }

    try {

        // Email validation
        const userEmail = await User.findOne({ email: email })

        if(userEmail) {
            return res.status(422).json({error: "Email already exist"});
        }   else if (password != cpassword) {
            return res.status(422).json({error: "password are not matching"});
        }   else {
            const user = new User({name, email, phone, work, password, cpassword});

            // hashing
    
            const userRegister = await user.save();
    
            if(userRegister) {
                res.status(201).json({ message: "User registered successfully"});
            }else {
                res.status(500).json({ error: "Failed to register"});
            }
        }

        // Phone number validation
        const userPhone = await User.findOne({ phone: phone })

        if(userPhone) {
            return res.status(422).json({error: "Phone number already exist"});
        }

    }catch (err) {
        console.log(err);
    }

    

    // console.log(req.body.name);
    // console.log(req.body.email);
    // res.json({ message: req.body });
    // res.send("sign up page");
});


/** Login route */

router.post('/login', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "Done" });
    try {
        let token;
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error:"Please fill the data"})
        }

        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);

        if(userLogin) {
            const isMatch = await bcrypt.compare(password , userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

        if(!isMatch) {
            res.status(400).json({error: "Invalid User"});
        } else {
            res.json({message:"User Login Successfully"});
        }
        }else {
            res.status(400).json({error: "Invalid User"});
        }

        

        

    } catch (err) {
        console.log(err);
    }
});


/** About US  */

router.get('/about', authenticate, (req, res) => {
    console.log(`Hello About`);
    res.send(req.rootUser);
});

// get user data for contact

router.get('/getdata', authenticate, (req, res) => {
    console.log(`Hello get data`);
    res.send(req.rootUser);
})

// contact us page

router.post('/contact', authenticate, async (req, res) => {
    try{
        const {name, email, phone, message} = req.body;

        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({error: "Please fill the contact form"});
        }
        const userContact = await User.findOne({_id: req.userID});

        if(userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({message:"Message send successfully"});
        }

    }catch (error) {
        console.log(error);
    }
});

/** Logout  */

router.get('/logout', authenticate, (req, res) => {
    console.log(`Hello Logout`);
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');
});

module.exports = router;