import SocialLogin from "../component/SocialLogin";
import InputField from "../component/InputField";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-black my-16  overflow-hidden">
      <div className="signup-container">
        <h2 className="form-title">Sign Up</h2>
        {/* <span><center>Please fill in this form  </center></span> */}

        <p className="separator">
          <span>Create an account !!</span>
        </p>

        <form action="#" className="signup-form">
          <InputField type="FirstName" placeholder="First Name" />
          <InputField type="LastName" placeholder="Last Name" />
          <InputField type="email" placeholder="Email address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />
          <InputField
            type="password"
            placeholder="Conform Password"
            icon="lock"
          />
          <input type="checkbox" />{" "}
          <label htmlFor="term">
            I accept the <a href="#">term</a> & <a href="#">Privacy Policy</a>.{" "}
          </label>
          {/* <a href="#" className="term&condition" type="checkbox">I accept the terms of Use & Privacy Policy</a> */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
      </p> */}
      </div>
    </div>
  );
};

export default Signup;
