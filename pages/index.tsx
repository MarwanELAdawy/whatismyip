import { useEffect, useState } from 'react';

const Home = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('/api/ip')
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Public IP Address:</h1>
      {ipAddress ? <p>{ipAddress}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
