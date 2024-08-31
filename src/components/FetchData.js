// src/components/FetchData.js
import React, { useState } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';

const FetchData = () => {
  const [url, setUrl] = useState(''); // State to store the LinkedIn URL
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!url) {
      setError('Please enter a LinkedIn profile URL.');
      return;
    }

    setLoading(true);
    setError(null);

    const options = {
      method: 'GET',
      url: 'https://linkedin-data-api.p.rapidapi.com/linkedin-to-email',
      params: {
        url: url, // Use the URL from the input field
      },
      headers: {
        'x-rapidapi-key': '55528a03acmshb2db97db01bf2a7p16da1djsn5acb60f6af76',
        'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter LinkedIn profile URL"
        style={styles.input}
      />
      <button onClick={fetchData} style={styles.button}>
        Fetch Data
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {data && <DisplayData data={data} />}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default FetchData;
