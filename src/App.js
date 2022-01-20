import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/customers").then((response) => {
      setGetData(response.data);
    });
  });
  return (
    <div>
      <div className="App">
        <form className="formField">
          <h3>Customer Details</h3>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Address:</label>
          <input type="text" name="address" />
          <label>Phone Number:</label>
          <input type="tel" name="phone" />
          <input type="Submit" name="name" />
        </form>
        <table style={{ border: "1px solid blue" }}>
          {/* <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
          <tr>
            <td>faith</td>
            <td>royal avenue</td>
            <td>08068838411</td>
          </tr> */}
          {getData === [] ? (
            <h1>No data</h1>
          ) : (
            getData.map((customer) => (
              <tr key={customer.phonenumber}>
                <th>{customer.name}</th>
                <th>{customer.address}</th>
                <th>{customer.phonenumber}</th>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
}

export default App;
