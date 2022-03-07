import React from "react";
import Head from "next/head";

const Login = () => {
  const label = "block mb-3 font-bold text-sm";
  const input = "rounded border border=gray-400 sm:p-3 w-full";
  return (
    <div className="w-5/6 sm:w-3/4 p-8 bg-white rounded shadow-2xl">
      <Head>
        <title>Journal App - Login</title>
        <meta name="description" content="Login Page for journal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-3xl font-bold mb-4 text-purple-800">Login</h2>
      <form className="space-y-3">
        <div className="w-full">
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input type="email" id="email" className={input} />
        </div>

        <div>
          <label htmlFor="password" className={label}>
            Password
          </label>
          <input type="password" id="password" className={input} />
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
