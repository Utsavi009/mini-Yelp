import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import searchBar from "./components/searchbar";
import SearchBar from "./components/searchbar";
import { Router, Route, Link, Switch } from "react-router-dom";
import logo from "./art/logo/logo_long_v01.svg";
import Restaurants from "./components/restaurantpage";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/restaurants`)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App bgimage">
      <h1>Welcome to grubgrub!</h1>
      <img src={logo} width="500" alt="grubgrub" />
      <SearchBar />
      {/*       <Router>
        <Switch>
          <Route exact path = '/restaurants'>
            <Restaurants />
          </Route>
        </Switch>
      </Router> */}
      <div className='restaurant-list'>
      {restaurants &&
        restaurants.map((restaurant, index) => {
          return (
            <div>
              <Card key={index}>
                <CardImg
                  top
                  width="20%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{restaurant.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Located in ..
                  </CardText>
                  <Button>ReadMore</Button>
                </CardBody>
              </Card>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default App;
