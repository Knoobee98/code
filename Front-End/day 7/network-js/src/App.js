import "./App.css";
import { useEffect, useState } from "react";

// import axios
import axios from "axios";
//linkApi
import linkApi from "./supports/constants/linkApi";
function App() {
  const [data, setData] = useState([]);

  let getData = async () => {
    try {
      let response = await axios.get(`${linkApi}/users`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {/* <button onClick={getData}>Get Data</button> */}
      {data.map((value, index) => {
        return (
          <p key={index}>
            {value.username} - {value.email} - {value.password}
          </p>
        );
      })}
    </div>
  );
}

export default App;

//1. rendering ---> masuk conditional statement
//2. didalam conditional statement dia mengecek state data, length === 0 atau >0?
//3. jika length === 0, maka dia akan return loading
