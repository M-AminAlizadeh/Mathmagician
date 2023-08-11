import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';

const Quote = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'cwd7G46iynGqOEQ1g+zBbw==5ezDbVZRFlCVb0uD',
      },
    })
      .then((response) => {
        if (response.status >= 400) {
          setError(true);
        }
        return response.json();
      });
    setIsLoading(false);
    setData(response[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Loading
  if (isLoading) {
    return <Loading />;
  }
  // Error
  if (error) {
    return <Error />;
  }
  // Display quote
  return (
    <section className="quote">
      {data.quote}
    </section>
  );
};

export default Quote;
