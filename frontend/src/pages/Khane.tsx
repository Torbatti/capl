import type { Component } from 'solid-js';
import KhaneFehrest from '../components/Khane/KhaneFehrest';
import KhaneJadid from '../components/Khane/KhaneJadid';

const Khane: Component = (props) => {
  return (
    <>
      <KhaneFehrest/>
      <KhaneJadid/>

      <h1>خانه</h1>
    </>
  );
};

export default Khane;
