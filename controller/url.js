const {getString} = require('../utils/shortURL');
const URL = require('../models/urlModel');
const { url } = require('inspector');

exports.get = async (req,res)=>{
    const data = await URL.find({});
    res.render('index',{data});
}
exports.addURL = async (req,res)=>{
    const input = req.body.input;
    // console.log(input)
    if(input==='') return res.json({
        "message":"Enter URL"
    })
    const randomString = getString();
    // console.log(randomString)
    try{
        const newURL = new URL({
            shortURL : `http://localhost/${randomString}`,
            originalURL : input
        })
        await newURL.save();
    }catch(error){
        console.log(error);
    }

    return res.json({
        "status": `http://localhost/${randomString}`,
        "redirect": "/"
    });
}
exports.accessURL = async (req, res) => {
    const input = req.body.input;
    // console.log(input)
    if (!input || input.trim() === '') {
        return res.status(400).json({
            message: "Invalid input"
        });
    }
    try {
        
        const urlData = await URL.findOne({ shortURL: input });
        // console.log(urlData)
        if (!urlData) {
            return res.status(404).json({
                message: "Short URL not found"
            });
        }
        // res.json({
        //     originalURL: urlData.originalURL
        // });
        res.redirect(urlData.originalURL)
    } catch (error) {
        console.error('Error accessing URL:', error);
        res.status(500).json({
            message: "An error occurred while retrieving the URL"
        });
    }
};


exports.access = async (req,res)=>{
    const shortID = req.params.shortID;
    // console.log(shortID);
    const redirectURL = await URL.findOne({shortURL:`http://localhost/${shortID}`})
    // console.log(redirectURL)
    res.redirect(redirectURL.originalURL)
}