import logo from './logo.svg';
import './App.css';
import React from 'react';
import Project from './Project.jsx';

const styles = {
  container: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 10,
      marginBottom:20,
  },
}

const App = () => {

  return (
    <div>
      <header style={styles.container}>
        TODO LIST
      </header>
      <Project />
    </div>
  );
}

export default App;


