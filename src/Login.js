import React from 'react';
import './Login.css';
import {loginUrl} from './spotify'

const Login = () => {
    console.log(window.location.hash)
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt=""/>
            {/* spotify Logo */}
            {/* login with spot butoon  */}
           <a href={loginUrl}>LOGIN WITH SPOTIFY </a>
           <nav>
  <ul>
    <li>
      home
      <span></span><span></span><span></span><span></span>
    </li>
  </ul>
</nav>
           
        </div>
    );
}

export default Login;
