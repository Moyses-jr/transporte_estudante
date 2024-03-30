export default function Login() {
  return (
    <>
      <div className="max-w-sm mx-auto my-24 p-6  bg-white border  border-gray-200 rounded-lg ">
        <form method="post">
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
            />
          </div>
          <hr className="mx-3 dark:border-gray-700 lg:my-8" />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
