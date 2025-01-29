import React from "react";
import SocialLogin from "../component/SocialLogin";
import InputField from "../component/InputField";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center text-black bg-neutral">
        <div className="login-container h-[35rem]">
          <h2 className="form-title text-black">Log in with</h2>
          <SocialLogin />

          <p className="separator">
            <span>or</span>
          </p>

          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />

            <a href="#" className="forgot-password-link">
              Forgot password?
            </a>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          <p className="signup-prompt">
            Don&apos;t have an account?{" "}
            <Link to="/signup">
              <a href="#" className="signup-link">
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
