import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SearchBar = () => {
  const [tags, setTags] = useState("");
  const [city, setCity] = useState("");
  const [searchData, setSearchData] = useState([]);

  const fetchSearchData = async () => {
    await axios
      .get(`http://localhost:3000/restaurants/${city}`)
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }; 

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by Food"
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by City"
          onChange={(e) => setCity(e.target.value)}
        />
        <Link exact to="/restaurants">
          {" "}
          <button onClick={fetchSearchData}>Search</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
