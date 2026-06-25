import { useDispatch } from "react-redux";
import { openLogin } from "../../store/slice/Uislice";

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const SocialButton = ({ icon: Icon, label }) => (
  <button
    type="button"
    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
  >
    <Icon />
    {label}
  </button>
);

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    // KEY CHANGE: max-h-screen + overflow-y-auto on the inner container
    // Your modal shell should be: fixed inset-0 flex items-center justify-center
    // This inner div handles overflow if screen is very short
    <div className="flex max-h-screen flex-col overflow-y-auto py-1">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Create your account
        </h2>
        <p className="mt-0.5 text-xs text-gray-500">
          Start your journey with us
        </p>
      </div>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-medium text-gray-700"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="mb-1 block text-xs font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="mb-1 block text-xs font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="At least 8 characters"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-1 block text-xs font-medium text-gray-700"
          >
            Confirm password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Re-enter your password"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900"
          />
        </div>

        <label className="flex items-start gap-2 text-xs text-gray-500">
          <input
            type="checkbox"
            className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
          />
          <span>
            I agree to the{" "}
            <button
              type="button"
              className="font-medium text-gray-900 hover:underline"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-medium text-gray-900 hover:underline"
            >
              Privacy Policy
            </button>
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-gray-900 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Create account
        </button>
      </form>

      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-400">or sign up with</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="flex gap-2">
        <SocialButton icon={GoogleIcon} label="Google" />
        <SocialButton icon={AppleIcon} label="Apple" />
        <SocialButton icon={FacebookIcon} label="Facebook" />
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => dispatch(openLogin())}
          className="cursor-pointer font-medium text-gray-900 hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignUp;
