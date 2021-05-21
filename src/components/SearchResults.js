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
          console.log(data._id)
          
          return !cityName ? 
          (
              <div className='search-result'>
            <div className="single-restaurant">
                <Card key={index}>
                <CardImg
                  top
                  width="30%"
                  src={data.img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{data.name}</CardTitle>
                  <Link exact to={`/restaurants/${data._id}`}>
                      <button className="moreBut">Read More</button>
                      </Link>
                </CardBody>
              </Card>
            </div>
            </div>
        ) :
           (<div>No matches found</div>) 
          
      })}
    </div>
  );
};

export default SearchResults;
