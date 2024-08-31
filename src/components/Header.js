// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>LinkedIn Data Fetcher</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0073b1',
    padding: '10px',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    margin: 0,
  },
};

export default Header;
