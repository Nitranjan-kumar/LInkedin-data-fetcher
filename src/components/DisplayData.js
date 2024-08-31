// src/components/DisplayData.js
import React from 'react';

const DisplayData = ({ data }) => {
  return (
    <div style={styles.dataContainer}>
      <h2>Fetched Data</h2>
      <pre style={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const styles = {
  dataContainer: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
  pre: {
    textAlign: 'left',
  },
};

export default DisplayData;
