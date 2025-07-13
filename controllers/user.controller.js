const express = require('express')
const TokenGenerator = require('uuid-token-generator');
const { v4: uuidv4 } = require('uuid');
const basicAuth = require("basic-auth")
const User = require('../models/user.model')

const signup = async(req, res)=>{

    try{
        const {first_name, last_name, email_address, password, mobile_number} = req.body

    if (!first_name || !last_name || !email_address || !password || !mobile_number) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email:email_address });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    const uuid = uuidv4()


    const user = new User({
        first_name: first_name,
        last_name: last_name,
        email: email_address,
        password: password,
        contact: mobile_number,
        username : first_name+last_name,
        role : "user",
        uuid:uuid
    })
    
    await user.save()
    res.status(200).json({message: 'signed up successfully'})
    }catch(err){
        res.status(500).json({ message: 'Error during signup, please try again' });
    }
}

const login = async(req, res)=>{
    const credentials = basicAuth(req);
    try{
        if (!credentials || !credentials.name || !credentials.pass) {
            return res.status(400).json({ message: 'Missing credentials' });
        }

        const user = await User.findOne({username: credentials.name, password: credentials.pass})
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const newAccessToken = new TokenGenerator()
    
        user.accesstoken = newAccessToken.generate()
        user.isLoggedIn = true
        user.save()
        res.status(200).json({"message": 'Login Successful', "access-token": user.accesstoken, id: user.uuid})
    }catch(err){
        res.status(500).json({ message: "login Unsuccessful" });

    }
}  

const logout = async (req, res) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]; 

        if (!token) {
            return res.status(400).json({ message: 'Token is missing' });
        }

        const user = await User.findOne({ accesstoken: token });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.accesstoken = null;
        user.isLoggedIn = false;
        await user.save();

        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Logout failed' });
    }
};

const bookshow = async(req, res)=>{
    
}
const coupons = async(req, res)=>{
    const couponCode = req.query.code 
    
        const token = req.headers['authorization']?.split(' ')[1]; 
        const user = await User.findOne({accesstoken: token})
        const coupon = user.coupens.find(c => c.id === parseInt(couponCode))
        
        res.json("coupons")
    
}


module.exports= {signup, login, logout, bookshow, coupons}