 const connection = require('../Connection/connection');

 const viewProdect =(req,res) =>{
  let idPost =  req.params.idPost
    let sql = 
    `select 
    users.idUser, 
    users.Image,
    users.Name,
    Post.Name_Post,
    Post.Category_Post,
    Post.Images_Post,
    Post.Country_Post,
    Post.Price_Post,
    Post.Date_Post,
    Post.idPost
    from Post 
    inner join users on Post.idUser = users.idUser where idPost = '${idPost}'`;
    connection.query(sql,(err,result)=>{
        if (err) {
            res.json({ err: "error" });
            console.log(err);
          }
          if (result) {
              const idPost = result[0].idPost
            res.json(result);
          }
    })
 }
 module.exports ={viewProdect}