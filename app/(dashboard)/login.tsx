export default function Login() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
        </div>
        <input
          className="block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
          id="email"
          type="email"
          placeholder="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <label> Password</label>
        </div>
        <input
          className="block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label> Remember me</label>
      </div>
      <button className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:w-auto">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}
