import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";  // npm i reactstrap
import { Map, TileLayer, Marker, Popup } from "react-leaflet";  // npm react-leaflet@2.7.0
/* import 'leaflet/dist/leaflet.css'; */
import "../App.css";

const RestaurantInfo = ({ restaurants }) => {
  let { id } = useParams();
  console.log(restaurants);

  return (
    <div>
      <h1>Restaurant Info</h1>
      {restaurants
        .filter((restaurant, index) =>
          id ? restaurant._id === id : restaurant
        )
        .map((restaurant, index) => {
          console.log(restaurant.longitude)
          return !id ? (
            <div>
              <Card className="resInfo" key={index}>
                <CardImg
                  className="infoImg"
                  top
                  width="20%"
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
          ) : (
            <div>
              <div>
                <Card key={index} className='card-display'>
                  <CardImg
                    top
                    width="20%"
                    src={restaurant.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h2">{restaurant.name}</CardTitle>
{/*                     <CardSubtitle tag="h6" className="mb-2 text-muted">
                      City
                    </CardSubtitle> */}
                    <CardText className="textcenter">{restaurant.cityId.name}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Description:
                    </CardSubtitle>
                    <CardText className="textcenter">{restaurant.description}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div id="mapid" className="leaflet-container">
                <Map
                  center={[restaurant.latitude, restaurant.longitude]}
                  /* center={[50, 50]} */
                  /* style={{ width: '100%', height: '600px' }} */
                  zoom={14}
                  scrollWheelZoom={false}
                  dragging={true}
                  closePopupOnClick={false}
                >

                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[restaurant.latitude, restaurant.longitude]}>
                    <Popup>
                    <b>{restaurant.name} </b><br /> {restaurant.cityId.name}
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantInfo;
