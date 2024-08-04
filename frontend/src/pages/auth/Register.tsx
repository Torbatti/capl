import type { Component } from 'solid-js';
import { createStore } from "solid-js/store";

import app_style from "./Register.module.css"


const EMAILS = ["johnsmith@outlook.com", "mary@gmail.com", "djacobs@move.org"];

function fetchUserName(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200);
  });
}

const Register: Component = () => {
  const [fields, setFields] = createStore();
  const fn = (form) => {
    // form.submit()
    console.log("Done");
  };

  const userNameExists = async ({ value }) => {
    const exists = await fetchUserName(value);
    return exists && `${value} is already being used`;
  };

  const matchesPassword = ({ value }) =>
    value === fields.password ? false : "Passwords must Match";


  return (
    <>
      <div class={`${app_style.auth_box}`}>
        <form class={`${app_style.auth_form}`}>

          <div>
            <p>ایمیل</p>
          </div>
          <input type="text" />
          
          <div>
            <p>نام کاربری</p>
          </div>
          <input type="text" />
          
          <div>
            <p>رمز عبور</p>
          </div>
          <input type="text" />

          <div>
            <p>تایید رمز عبور</p>
          </div>
          <input type="text" />

          <button type="submit" class={`${app_style.auth_btn}`}>ثبت نام</button>
        </form>
          <p class={app_style.auth_link}>ثبت نام کرده اید؟ <a href="/auth/register">بخش ورود</a></p>
      </div>
    </>
  );
};

export default Register;
