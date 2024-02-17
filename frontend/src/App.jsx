import { useState, useEffect } from 'react'


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
        setUserData(data.results[0]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      {userData ? (
        <div className='flex justify-around py-5 px-10 items-center bg-white text-slate-800 rounded-3xl h-[250px] shadow-lg'>
          
          <div className='rounded-full shadow-lg mr-4'>
            <img src={userData.picture.large} alt="" className='rounded-full '/>
          </div>
          
          <div className='flex flex-col justify-center gap-5 border-l-[1px] border-slate-600 pl-5'>
            <p className='font-light text-2xl'>{userData.name.title} {userData.name.first} {userData.name.last}</p>
            <p className='font-light'>Gender: {userData.gender}</p>
            <p className='font-light'>Contact: {userData.phone}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
