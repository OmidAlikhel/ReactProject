import React from "react";

const Register = () => {
  return (
    <>
      <form className="register">
        <h2 className="register-heading"> Register Page</h2>
        <label>Username:</label>
        <input type="text" placeholder="username" />
        <label>Password:</label>
        <input type="password" placeholder="password" />
        <button>Regiser</button>
      </form>
    </>
  );
};

export default Register;
