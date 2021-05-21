import { useParams } from "react-router";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";
  import { Link } from "react-router-dom";

const SearchResults = ({ searchData }) => {
  let { cityName } = useParams();
  console.log(searchData);
  return (
    <div>
      {searchData && searchData.filter(data=> cityName ? cityName === data.cityId.name : data)
      .map((data, index) => {
          return cityName ? 
           (<div>No matching found</div>) :
           (
            <div>
                <Card key={index}>
                <CardImg
                  top
                  width="30%"
                  src={data.img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{data.name}</CardTitle>
                  <Link exact to={`/restaurants/${data._id}`}><button>Read More</button></Link>
                </CardBody>
              </Card>
            </div>
        ) 
      })}
    </div>
  );
};

export default SearchResults;
