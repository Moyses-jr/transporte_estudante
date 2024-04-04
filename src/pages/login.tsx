import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import Router from "next/router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataInput = {
      email: email,
      password: password,
    };
    console.log(dataInput);
    try {
      const { data, status } = await axios.post(
        "http://localhost:8080/api/loginStudent",
        dataInput
      );

      console.log(data);
      if (data._id && status === 201) {
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateAccount = () => {
    Router.push("./components/userRegister");
  };
  return (
    <>
      <div className="max-w-sm mx-auto my-24 p-6  bg-white border  border-gray-200 rounded-lg ">
        <form method="post" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="block w-full p-2.5 text-sm rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="block w-full p-2.5 text-sm rounded-lg"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Acessar
            </button>
          </div>
          <button
            onClick={handleCreateAccount}
            className="text-white bg-blue-400 hover:bg-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 flex items-center"
          >
            <p className="pl-20 ">
              <FaUserPlus />
            </p>
            <p className="pl-5">Criar uma conta</p>
          </button>
        </form>
      </div>
    </>
  );
}
