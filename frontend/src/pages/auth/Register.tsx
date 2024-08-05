import type { Component } from 'solid-js';
import app_style from "./Register.module.css"


import auth_image from "./../../assets/images/reg_auth.jpg"

const Register: Component = () => {
  

  return (
    <>
      <div class={`${app_style.auth_box}`}>
        
        <div class={`${app_style.auth_box__image}`}>
          <img src={auth_image} alt="https://unsplash.com/@eugene_golovesov" />
        </div>

        <div class={`${app_style.auth_box__form}`}>
          <form>
            
            <div>
              <p>نام کاربری</p>
            </div>
            <input
              name="username"
              type="text" 
              required
            />
            
            <div>
              <p>رمز عبور</p>
            </div>
            <input
              name="password"
              type="password"
              required
              minlength="8"
            />

            <div>
              <p>تایید رمز عبور</p>
            </div>
            <input
              name="confirmpassword"
              type="password"
              required
            />

            <button type="submit" class={`${app_style.auth_btn}`}>ثبت نام</button>
          </form>
          <p class={app_style.auth_link}>ثبت نام کرده اید؟ <a href="/auth/register">بخش ورود</a></p>
        </div>

      </div>
    </>
  );
};

export default Register;
