const connection = require("../Connection/connection");

const allPost = (req, res) => {
/*   SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID; */
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
    inner join users on Post.idUser = users.idUser`;
    connection.query(sql, (err, result) => {
      if (err) {
        res.json(err);
        console.log(err)
      }else{
        res.json(result)
      }
     
    });
};
module.exports = { allPost };
