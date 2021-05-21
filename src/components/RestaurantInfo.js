import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const RestaurantInfo = ({ restaurants }) => {
  let { id } = useParams();

  return (
    <div>
      <h1>Restaurant Info</h1>
      {restaurants
        .filter((restaurant, index) => id ? restaurant._id === id : restaurant)
        .map((restaurant, index) => {
          return !id ? (
            <div>
                    <Card key={index}>
                  <CardImg
                    top
                    width="20%"
                    src={restaurant.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{restaurant.name}</CardTitle>
                    <Link exact to={`/restaurants/${restaurant._id}`}><button>Read More</button></Link>
                  </CardBody>
                </Card>
                </div>
          ) : (
            <div>
              <div>
                <Card key={index}>
                  <CardImg
                    top
                    width="20%"
                    src={restaurant.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{restaurant.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Deacription:
                    </CardSubtitle>
                    <CardText>{restaurant.description}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantInfo;
