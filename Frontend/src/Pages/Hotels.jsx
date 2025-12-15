import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HotelsHero from '../Components/HotelsHero.jsx';
import PopularHotels from '../Components/PopularHotels.jsx';

function Hotels() {
  const [searchFilters, setSearchFilters] = useState(null);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <div>
      <Header />
      <HotelsHero onSearch={handleSearch} />
      <PopularHotels searchFilters={searchFilters} />
      <Footer />
    </div>
  );
}

export default Hotels;