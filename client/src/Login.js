import React from "react";

const Login = () => {
  return (
    <>
      <form className="login">
        <h2 className="login-heading"> Login Page</h2>
        <label> Username :</label>
        <input type="text" placeholder="username" />
        <label>Passwrod :</label>
        <input type="password" placeholder="password" />
        <button>login</button>
      </form>
    </>
  );
};

export default Login;
