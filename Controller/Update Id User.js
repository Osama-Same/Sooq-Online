const connection = require('../Connection/connection');
const {cloudinary} = require("../Upload/cloudinary");
const validate = require("../Middlewares/register");
const updateIdUser = async(req,res)=>{
    let img = null    
    const { error, isValid } = validate(req.body);
    if (!isValid) {
      return res.json(error);
    }else {
    let idUser = req.params.idUser;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Passowrd = req.body.Passowrd;
    let Phone = req.body.Phone;
    let Country = req.body.Country;
    if (req.file) {
      img = await cloudinary.uploader.upload(req.file.path);
    } else {
      res.json("No images Selected");
    }
    
    let Image = img.url;
  
    let sql = `update users set 
    Name = '${Name}',
    Email = '${Email}',
    Passowrd = '${Passowrd}',
    Phone = '${Phone}',
    Country = '${Country}',
    Image = '${Image}'
    where idUser = '${idUser}'`;
    connection.query(sql, (err, result) => {
      if (err) {
        res.json({ err: err });
        console.log(err)
      }
      if (result) {
        res.json(result);
        console.log({result:"successfully"})
      }
    });
  }
}

module.exports = {updateIdUser}