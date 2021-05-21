import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./art/logo/logo_long_v01.svg";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import RestaurantInfo from "./components/RestaurantInfo";
import SearchResults from "./components/SearchResults";
import JumboImage from "./components/JumboImage";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [tags, setTags] = useState("");
  const [cityName, setCityName] = useState("");
  console.log(typeof cityName);

  useEffect(() => {
    fetchData();
  }, []);

  /* const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/restaurants?limit=3`, {
        params: {
          _limit: 3,
        },
      })
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }; */

  const fetchData = async () => {
    await axios
      .get(`https://crossover-yelp.herokuapp.com/restaurants`)
      .then((res) => setRestaurants(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App bgimage">
      <Router>
        {/*   <JumboImage className="topsnap" /> */}
        <div className="bg whiteoverlay">
          <div>
            <Link exact to="/">
              <img
                src={logo}
                className="logosize dropshadow"
                /* width="500"  */ alt="grubgrub"
              />
              {/* <p>Find Good Eats</p>   */}
            </Link>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Food"
              onChange={(e) => setTags(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by City"
              onChange={(e) => setCityName(String(e.target.value))}
            />
            <Link exact to={`/restaurantsList/${cityName}`}>
              {" "}
              <button className="searchBut" onClick={fetchData}>
                Search
              </button>{" "}
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/restaurantsList/:city?">
            <SearchResults searchData={restaurants} />
          </Route>
          <Route exact path="/restaurants/:id?">
            <RestaurantInfo restaurants={restaurants} />
          </Route>
        </Switch>
        <Switch>
                    <Route exact path="/">
            <div className='restaurant-list'>
              {restaurants && restaurants.map((restaurant, index) => {
                return(
                  <div className="single-restaurant" key={index}>
                    <Card>
                  <CardImg
                    top
                    width="30%"
                    src={restaurant.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{restaurant.name}</CardTitle>
                    <Link exact to={`/restaurants/${restaurant._id}`}><button className="moreBut">Read More</button></Link>
                  </CardBody>
                </Card>
                </div>
                )
              })}
            </div>
          </Route>
          {/* <Route exact path="/">
            <div className="restaurant-list">
              {restaurants &&
                restaurants
                  .sort(() => Math.random() - Math.random())
                  .slice(0, 3)
                  .map((restaurant, index) => {
                    return (
                      <div className="single-restaurant" key={index}>
                        <Card>
                          <CardImg
                            className="single-img"
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
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
