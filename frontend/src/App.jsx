/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/items');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      
      <div>DATA-Length: {data.length }</div> 
      {
        data.map((value,index) => (
          <div key={value.id}>
            <div>{value.username}</div>
            <div>{value.email}</div>
            <div>{value.password}</div>
            <div>INDEX: {index}</div>
          </div>
        ))
      }
    </div>
  );
};

export default App;
