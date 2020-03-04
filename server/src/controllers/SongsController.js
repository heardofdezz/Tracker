const {Song} = require('../models')

module.exports = {
    async SongsIndex (req, res) {
      try{
        const song = await Song.findAll({
            limit: 10
           
        })
        console.log('YOLO SONGS: ', song)
        res.send(song)
      }catch (err){
          res.status(500).send({
              error: 'An error happened trying to get the songs'
          })
      }
    },
    
    async post (req, res) {
        try{
          const song = await Song.create(req.body)
          res.send(song)
          console.log("your song has been added")
        }catch (err){
            console.log(err)
            res.status(500).send({
                error: 'An error happened when trying to create the song'
            })
        }
      }
    
}