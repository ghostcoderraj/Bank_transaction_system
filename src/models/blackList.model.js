const mongoose = require('mongoose');

const blackListSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token is required to blacklist"],
        unique:true
    },
    blacklistedAt:{
        type:Date,
        default:Date.now,
        immutable:true
    }
},{timestamps:true})

tokenBlackListSchema.index({createdAt:1}, {
    expireAfterSeconds:60 * 60 *24 * 3 // 3 days
})


const blackListModel = mongoose.model('blackList',blackListSchema);

module.exports = blackListModel;


