import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';
import Card from '../components/Card';
export default function Home() {
  return (
    <>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className='card-container mt-2' >
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div><Footer /></div>
    </>
  );
}
