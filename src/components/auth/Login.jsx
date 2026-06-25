// import { useState } from "react";

import { useDispatch } from "react-redux";
import { openSignUp } from "../../store/slice/Uislice";

const Login = () => {
  const dispatch = useDispatch();
  // const [isSignUp,setIsSignUp] = useState(false)
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
        <p className="mt-1 text-sm text-gray-500">Log in to continue</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <button
              type="button"
              className="text-xs font-medium text-gray-500 hover:text-gray-900"
            >
              Forgot password?
            </button>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gray-900 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Log in
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-400">or continue with</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Continue with Google"
          className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 py-2.5 transition hover:bg-gray-50"
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.4-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.6 7.1 29.6 5 24 5c-7.6 0-14.1 4.3-17.7 9.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 43c5.4 0 10.2-2 13.9-5.4l-6.4-5.4C29.4 33.8 26.8 35 24 35c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.8 38.6 16.3 43 24 43z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.4 5.4C40.9 36.4 44 30.8 44 24c0-1.2-.1-2.4-.4-3.5z"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Continue with Apple"
          className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 py-2.5 transition hover:bg-gray-50"
        >
          <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.2-58.9.9-121.3 45.6-121.3 137 0 27 4.9 54.9 14.7 83.6 13.1 38.3 60.4 132.1 109.6 130.5 25.9-.7 44.1-18.4 77.9-18.4 32.8 0 49.6 18.4 78.5 18.4 49.7-.7 92.6-86.5 105-124.8-66.7-31.4-64.8-92-64.8-98.4zM257.9 70.6c25.5-30.4 23.2-58.1 22.4-68.1-22.5 1.3-48.6 15.4-63.4 33-16.3 18.8-25.9 42-23.8 67.9 24.4-1.9 46.6-13.9 64.8-32.8z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Continue with Facebook"
          className="flex flex-1 items-center justify-center rounded-xl border border-gray-200 py-2.5 transition hover:bg-gray-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.94h-1.5c-1.5 0-1.96.93-1.96 1.89v2.28h3.33l-.53 3.49h-2.8v8.44C19.61 23.07 24 18.07 24 12.07z" />
          </svg>
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => dispatch(openSignUp())}
          className="font-medium text-gray-900 hover:underline cursor-pointer"
        >
          Sign up
        </button>
      </p>
    </>
  );
};

export default Login;
