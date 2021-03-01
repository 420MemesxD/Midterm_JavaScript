import React, { useEffect } from 'react';

const Header = ({ title = "Test Time" }) => {
  useEffect(() => document.title = title);

  return (
    <header className="bg-dark p-5 rounded-lg m-3 text-center">
      <h1 className="text-white">{ title }</h1>
    </header>
  );
}
 
export default Header;