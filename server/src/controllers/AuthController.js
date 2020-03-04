const {User} = require('../models')
//Session token handler
const jwt  = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    console.log('user :', user);
    return jwt.sign(user, config.authentification.jwtSecret, {
        expiresIn: ONE_WEEK
    })  
}

module.exports = {
   async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'This email address is not available'
            })
        }
    },

    async login (req, res){
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
               return res.status(403).send({
                    error: 'Wrong login information 1'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            // console.log(password)
            console.log(isPasswordValid)
            if(!isPasswordValid){
               return res.status(403).send({
                   error: 'Wrong login information 2'
               }) 
            }
            const userJson = user.toJSON()
            res.send({
              user: userJson, 
              token: jwtSignUser(userJson)
            })
            // console.log(req.body)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }  
    },
}