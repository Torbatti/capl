/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, A } from "@solidjs/router";

import "./assets/styles/base.css"

import App from './App';

import NotFound from "./pages/NotFound";
import Khane from './pages/Khane';
import Fehrest from './pages/Fehrest';

import Logout from './pages/auth/Logout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root={App}>
    <Route path="/" component={Khane} />
    <Route path="/fehrest" component={Fehrest} />

    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />

    <Route path="*paramName" component={NotFound} />
  </Router>


), root!);
