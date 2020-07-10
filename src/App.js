import React from 'react';
import NavigationBar from './components/header/navigationBar.component';
/* import FilterSideBar from './components/header/filterSideBar.component'; */


// Tailwindcss //
import './styles/main.css';
/* import Search from './components/header/search.component'; */

function App() {
  return (
    <div className=" min-h-screen antialiased xl:flex xl:flex-col xl:h-screen">
      <NavigationBar/>
      {/* <FilterSideBar/> */}
      {/* <Search/> */}
    </div>
  );
}

export default App;
