const scoreSchema = require ('../score')
const express = require ('express')

const router = express.Router()

router.get('/score', async (req,res)=>{
    const rs =await scoreSchema.find()
    return res.send(rs)
})
router.post('/score', async (req,res)=>{
    const rs =await scoreSchema.create(req.body)
    return res.send(rs)
})

module.exports = router