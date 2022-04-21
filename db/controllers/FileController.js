let http = require('http');
let formidable = require('formidable');
let fs = require('fs');



module.exports.UploadPostImage = async (req, res) => {
    console.log(req.files);
   
   
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.image;
            //var x =  fs.unlinkSync('images/ProductImages/' + req.body.name + '.jpg');

            //console.log('called');

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('images/PostImages/' + req.body.name + '.jpg');
            console.log(req.files.image);
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports.UploadProfileImage = async (req, res) => {
    console.log(req.files);
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.image;
            //var x =  fs.unlinkSync('images/ProductImages/' + req.body.name + '.jpg');

            //console.log('called');

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('images/Users/' + req.body.name + '.jpg');
            console.log(req.files.image);
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.UploadProductImage = async (req, res) => {
    console.log(req.files);
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.image;
            //var x =  fs.unlinkSync('images/ProductImages/' + req.body.name + '.jpg');

            //console.log('called');

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('images/ProductImages/' + req.body.name + '.jpg');
            console.log(req.files.image);
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
