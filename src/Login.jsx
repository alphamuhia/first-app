import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateCredentials = (username, email, password) => {
    return (
      username === "alpha" &&
      email === "alpha@gmail.com" &&
      password === "alpha"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateCredentials(username, email, password)) {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid username, email, or password");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="box-border border border-blue-500 h-70 w-60 p-4 m-10 bg-gray-900 space-y-4"
      >
        <div>
          <label className="text-white">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="input your username"
            className="px-2 bg-white-900 text-gray"
          />
        </div>
        <div>
          <label className="text-white">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            className="px-2 bg-white-900 text-gray"
          />
        </div>
        <div>
          <label className="text-white">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="input correct password"
            className="px-2 bg-white-900 text-gray"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
