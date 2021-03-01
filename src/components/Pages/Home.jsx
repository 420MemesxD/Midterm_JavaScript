import React from 'react';
import Header from '../shared/Header';
import Instructions from '../shared/Instructions'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Header title="Home Sweet Home"/>
        <Instructions/>
      </div>
    </>
  );
}
  export default Home;
