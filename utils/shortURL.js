const crypto = require('crypto');
exports.getString = ()=>{
    const randomString = crypto.randomBytes(6).toString('hex')
    // console.log(randomString)
    return randomString
}