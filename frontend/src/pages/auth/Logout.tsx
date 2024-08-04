import type { Component } from 'solid-js';

import PocketBase from 'pocketbase';
import { PB_IP } from '../../utils/pb';
const pb = new PocketBase(PB_IP);

const Logout: Component = () => {
  pb.authStore.clear();
  window.location.replace("/");

  return (
    <></>
  );
};

export default Logout;
