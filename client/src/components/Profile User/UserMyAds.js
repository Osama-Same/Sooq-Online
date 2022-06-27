import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link ,useParams} from 'react-router-dom';
import NavbarUser from './NavbarUser';

const UserMyAds = () => {
    const [post, setpost] = useState([]);
    useEffect(() => {
      getMyAds();
    },[]);
    let { idUser } = useParams();
    const getMyAds = () => {
      
      axios.get(`MyAds/${idUser}`).then((res) => {
        setpost(res.data);
        console.log(res.data);
      });
    };
    const data = post.map((e, i) => {
      return (
        <div className="col-md-4" key={i}>
          <figure className="card card-product-grid card-lg">
            <span>
              <img src={e.Image} width="40" height="35" className="rounded-circle" alt="" />
              <Link className="card-subtitle mb-2 text-muted" style={{ padding: "5px" }}>
                {e.Name}
              </Link>
            </span>
            <Link to={"#"} className="img-wrap" data-abc="true">
              <img src={e.Images_Post} alt="" />
            </Link>
            <div className="bottom-wrap">
              <ul className="float-right" style={{ listStyleType: "none" }}>
                <li>
                  {" "}
                  Date : <small className="badge bg-warning text-black">{e.Date_Post}</small>
                </li>
                <li>
                  Category :{" "}
                  <Link to={`/Category/${e.Category_Post}`} className="badge bg-primary text-white">
                    {" "}
                    {e.Category_Post}
                  </Link>
                </li>
              </ul>
              <ul className="float-left" style={{ listStyleType: "none", padding: "0px" }}>
                <li>
                  Name : <small className="badge bg-secondary text-white">{e.Name_Post}</small>
                </li>
                <li>
                  Country : <small className="badge bg-success text-white">{e.Country_Post}</small>
                </li>
              </ul>
            </div>
  
            <div className="bottom-wrap">
              <Link to={`/ViewProdect/${e.idPost}`} className="btn  btn-primary float-right" data-abc="true">
                View Prodect
              </Link>
              <div className="price-wrap">
                <span className="price h6">Price : {e.Price_Post}$</span> <br /> 
              </div>
            </div>
          </figure>
        </div>
      );
    });
    return (
      <div>
        <NavbarUser/>
      <div className="container">
        <div className="row">{data}</div>
      </div>
      </div>
    );
}

export default UserMyAds