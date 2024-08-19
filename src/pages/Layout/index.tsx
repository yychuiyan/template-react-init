import React from 'react';
import { Outlet } from 'react-router-dom';

const Layou = () => {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layou;
