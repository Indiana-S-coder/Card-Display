import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null);
  const apiUrl = 'https://randomuser.me/api/?page=1&results=1&seed=abc';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data.results[0]); // Assuming data.results is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <div>
            <img src={userData.picture.large} alt="User" />
            <p>Name: {`${userData.name.first} ${userData.name.last}`}</p>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  )
}

export default App
