import { useEffect, useState } from 'react';

const Home = () => {
  const [publicIp, setPublicIp] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublicIp = async () => {
      try {
        const response = await fetch('/api/ip');
        const { ip } = await response.json();
        setPublicIp(ip);
      } catch (error) {
        console.error('Failed to fetch public IP:', error);
      }
    };

    fetchPublicIp();
  }, []);

  return (
    <div>
      <h1>Public IP Address:</h1>
      {publicIp ? <p>{publicIp}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
