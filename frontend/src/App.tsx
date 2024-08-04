import type { Component } from 'solid-js';
import { A } from "@solidjs/router";

import app_style from "./App.module.css"
import LeftNav from "./components/LeftNav"

const App: Component = (props) => {
  return (
    <>

    <nav class={app_style.nav}>
    <div class={`${app_style.nav__box} box`}>

      <div class={`${app_style.nav__box__div}`}>
        <A href="/">کاپل</A>
        <p>|</p>
        <A href="/fehrest">فهرست</A>
      </div>

      <div class={`${app_style.nav__box__div}`}>
        <LeftNav />
      </div>

    </div>
    </nav>
    
    {props.children}
    
  </>
  );
};

export default App;
