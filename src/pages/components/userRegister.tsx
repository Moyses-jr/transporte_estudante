import axios from "axios";
import React, { useState } from "react";

export default function UserRegister() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [nome, setNome] = useState<String>("");
  const [sobrenome, setSobrenome] = useState<String>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let name = `${nome} ${sobrenome}`;

    const data = {
      name: name,
      login: {
        password: password,
        email: email,
      },
    };

    try {
      const response = axios.post(
        "http://localhost:8080/api/createStudent",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="isolate px-1 py-1 sm:py-6 lg:px-6">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="mx-auto mt-5 max-w-xl sm:mt-5"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Nome:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  onChange={(e) => setNome(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Sobrenome:
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  onChange={(e) => setSobrenome(e.target.value)}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-black"
              >
                E-mail
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Senha:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
