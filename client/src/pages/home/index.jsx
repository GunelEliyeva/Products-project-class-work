import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

  const getData = async () => {
    let data = await axios.get("http://localhost:8080/productss");
    setProduct(await data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSort = () => {
    axios.get("http://localhost:8080/productss");
    const sortData = product.sort((a, b) => a.price - b.price);
    setProduct([...sortData]);
  };

  const misoutSort = () => {
    axios.get("http://localhost:8080/productss").then((data) => {
      let sort = data.data.sort((a, b) => Number(b.price) - Number(a.price));
      setProduct([...sort]);
    });
  };

  const handleDelete = async (_id) => {
   await axios.delete(`http://localhost:8080/productss/${_id}`)
  };

  return (
    <div id="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="My home page" />
      </Helmet>
      <div className="home-add">
        <div>
          <h1>Products</h1>
        </div>
        <button onClick={() => handleSort()}>min to max</button>
        <button onClick={() => misoutSort()}>max to min</button>
      </div>

      <div className="map-product">
        {product.map((element) => {
          return (
            <div className="all">
              <Link to={`/home-page/${element._id}`}>
                <div className="card">
                  <div className="card-img">
                    <img src={element.imgurl} alt="" />
                  </div>
                  <div className="cardtext">
                    <h4>{element.model}</h4>
                    <h3>{element.name}</h3>
                    <h2>{element.price}$</h2>
                  </div>
                  <div className="delete-btn">
                    <button onClick={() => handleDelete()}>Delete</button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
