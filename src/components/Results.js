import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";

const Results = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        await axios
          .get(`http://localhost:3000/restaurants`, {
            params: {
              _limit: 5
            }
          })
          .then((res) => setRestaurants(res.data))
          .catch((err) => console.log(err));
      };

    return (
        <>

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
     

                </>
            )
        }
 
export default Results;