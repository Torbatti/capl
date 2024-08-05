import type { Component } from 'solid-js';
import app_style from "./KhaneFehrest.module.css"

const KhaneFehrest: Component = (props) => {
  return (
    <>
      <div id="khane_fehrest" class={`${app_style.khane_fehrest}`}><div class={`${app_style.khane_fehrest__box} box`}>
        <div class={`${app_style.khane_fehrest__bg}`}></div>
        
        <a href="/" class={`${app_style.khane_fehrest__link}`}><div>
          <p>مصورها</p>          
        </div></a>
        <a href="/" class={`${app_style.khane_fehrest__link}`}><div>
          <p>نوشتارگان</p>          
        </div></a>
        <a href="/" class={`${app_style.khane_fehrest__link}`}><div>
          <p>بازی ها</p>          
        </div></a>
        <a href="/" class={`${app_style.khane_fehrest__link}`}><div>
          <p>نماواگان</p>          
        </div></a>
        <a href="/" class={`${app_style.khane_fehrest__link}`}><div>
          <p>نواها</p>          
        </div></a>

      </div></div>
    </>
  );
};

export default KhaneFehrest;
