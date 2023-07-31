"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("signUp success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("signUp failed", error.message);
    }
  };
  return (
    <>
      <h1>Sign up</h1>
      <form action='../api/users/signup' method='POST'>
        <input name="username" id="username" type="text" placeholder='username' required value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}></input><br />
        <input name="password" id="password" type="password" placeholder='password' required></input><br />
        <input name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input><br />
        
        <button
        onClick={onSignup}
        >sign up </button>
      </form>
      {/* <label htmlFor="username"></label>
      <input
        type="text"
        className="text-black"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email"></label>
      <input
        type="email"
        value={user.email}
        className="text-black bg-white"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <br /> */}

      {/* <label htmlFor="password"></label>
      <input
        type="password"
        value={user.password}
        className="text-black"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <br />
      <button onClick={onSignup}>signup</button>
      <br />
      <br /> */}

      <Link href={"/login"}>Login</Link>
    </>
  );
}


