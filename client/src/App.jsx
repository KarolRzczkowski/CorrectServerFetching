import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backenddata, setBackenddata] = useState([]);

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setBackenddata(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='data'>
      {backenddata.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {backenddata.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
