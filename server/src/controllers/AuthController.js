const {User} = require('../models')
//Session token handler
const jwt  = require('jsonwebtoken')
const config = require('../config/config')


function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentification.jwtSecret, {
        expiresIn: ONE_WEEK
    })  
}

module.exports = {
   async register (req, res) {
        try {
            const user = await User.create(req.body)
            // console.log(req.body)
            res.send(user.toJSON())
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
                    error: 'You have entered the wrong information 1'
                })
            }

            const isPasswordValid = password === user.password
            console.log(isPasswordValid)
            if(!isPasswordValid){
               return res.status.send({
                   error: 'You have entered the wrong information 2'
               }) 
            }
            const userJson = user.toJSON
            res.send({
              user: userJson,
              token: jwtSignUser(userJson)
            })
            // console.log(req.body)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'Invalid login information',
                error: 'You have entered the wrong information 3 '
            })
        }  
    }
}