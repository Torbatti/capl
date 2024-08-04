import type { Component } from 'solid-js';

import PocketBase from 'pocketbase';
import { PB_IP } from '../utils/pb';
const pb = new PocketBase(PB_IP);

const LeftNav: Component = (props) => {
  return (
    <>
      {pb.authStore.isValid ? 
        <>
          <a href={`/profile`}>رخ نما</a>
          <p>|</p>
          <a href='/auth/logout'>خروج</a>
        </>
        :
        <>
          <a href="/auth/login">ورود</a>
          <p>|</p>
          <a href="/auth/register">ثبت نام</a>
        </>
      }
  </>
  );
};

export default LeftNav;
