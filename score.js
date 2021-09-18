const m = require('mongoose')
const scoreSchema = new m.Schema({
    name : {type:String , required: true},
    score : {type:Number , required: true}
})
module.exports = m.model('ScoreSchema', scoreSchema)
