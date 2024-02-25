import React, { useState } from 'react';

interface LoginValues {
  username: string;
  password: string;
}

const SigninForms: React.FC = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // form submission by sending login data to API
    //to be handled by jonah
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username or email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              value={loginValues.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={loginValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <p className="text-center">
        Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign Up</a>
      </p>
    </div>
  );
};

export default SigninForms;


// Path: src/_auth/forms/SignupForms.tsx
