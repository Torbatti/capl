import type { Component } from 'solid-js';
import app_style from "./KhaneFehrest.module.css"

const KhaneFehrest: Component = (props) => {
  return (
    <>
      <div id="khane_fehrest" class={`${app_style.fehrest} box`}>
        <a href="/" class={`${app_style.link}`}><div>
          <p>مصورها</p>          
        </div></a>
        <a href="/" class={`${app_style.link}`}><div>
          <p>نوشتارگان</p>          
        </div></a>
        <a href="/" class={`${app_style.link}`}><div>
          <p>بازی ها</p>          
        </div></a>
        <a href="/" class={`${app_style.link}`}><div>
          <p>نماواگان</p>          
        </div></a>
        <a href="/" class={`${app_style.link}`}><div>
          <p>نواها</p>          
        </div></a>

      </div>
    </>
  );
};

export default KhaneFehrest;
