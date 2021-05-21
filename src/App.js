import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/searchbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./art/logo/logo_long_v01.svg";
import data from "./db.js";
// import Restaurant from "./components/restaurantpage";
// import Results from "./components/resultpage";
// import logo from "./art/logo/logo_long_v01.svg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import RestaurantInfo from "./components/RestaurantInfo";

const App = () => {
  const [restaurants, setRestaurants] = useState(data.restaurants);
  const [city, setCity] = useState(data.city);

  console.log(restaurants);
  console.log(city);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/restaurants?limit=4`, {
        params: {
          _limit: 4,
        },
      })
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };
 
  //   const fetchData = async () => {
  //   await axios
  //     .get(`http://localhost:3000/restaurants`)
  //     .then((res) => setRestaurants(res.data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="App bgimage">
      <Router>
        <Link exact to="/">
          <img src={logo} width="500" alt="grubgrub" />
        </Link>
        <SearchBar />
        <Switch>
          <Route exact path="/restaurants/:id?">
            <RestaurantInfo restaurants={restaurants} />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <div className="restaurant-list">
              {restaurants &&
                restaurants.map((restaurant, index) => {
                  return (
                    <div className="single-restaurant">
                      <Card key={index}>
                        <CardImg className="single-img"
                          top
                          // height=" 30%"
                          width="40%"
                          object-fit="contain"
                          src={restaurant.img}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">{restaurant.name}</CardTitle>

                          <Link exact to={`/restaurants/${restaurant._id}`}>
                            <button className="moreBut">Read More</button>
                          </Link>
                        </CardBody>
                      </Card>
                    </div>
                  );
                })}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const Home = () => {
  <div>
    <h1>Welcome</h1>
  </div>;
};

export default App;
