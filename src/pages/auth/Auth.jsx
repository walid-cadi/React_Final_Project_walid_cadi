import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyAppContext } from "../../context";

export const Auth = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = MyAppContext();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
    
    //console.log(userData);
    
    const handleLogin =  (e) => {
    e.preventDefault();
    const user = userData.find(
      (profile) => profile.email === email && profile.password === password
    );
    if (user) {
        setLoginMessage("Login successful!");
        setTimeout(() => {
            navigate("/")
        }, 3000);
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="mt-[14.5vh] p-20 flex gap-x-8">
      <div className="p-7 border-gray-400 border-2 w-[40vw]">
        <h1 className="text-4xl">New Customer</h1>
        <p className="text-lg font-bold text-gray-500">Register Account</p>
        <p className="text-gray-400">
          By creating an account you will be able to shop faster, be up to date
          on an order's status, and keep track of the orders you have previously
          made.
        </p>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="px-8 py-3 bg-[#292929] text-white mt-3">
          CONTINUE
        </button>
      </div>
      <div className="flex flex-col gap-y-1 p-7 border-gray-400 border-2 w-[40vw]">
        <h1 className="text-4xl">Returning Customer</h1>
        <p className="text-lg font-bold text-gray-500">
          I am a returning customer
        </p>
        {loginMessage && (
          <p
            className={`text-center mb-4 ${
              loginMessage.includes("successful")
                ? "text-green-500"
                : "text-red-500"
            }`}>
            {loginMessage}
          </p>
        )}
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col gap-y-3">
          <label htmlFor="">Email</label>
          <input
            className="border-gray-400 border-2 px-3 py-2"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            className="border-gray-400 border-2 px-3 py-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center gap-1">
            <button className="px-8 py-3 bg-[#292929] text-white mt-3">
              SIGN IN
            </button>
            <p>
              {" "}
              or{" "}
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer hover:text-[#e65540]">
                Return to Store
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
