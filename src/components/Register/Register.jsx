import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
    // reset error
    setRegisterError("");
    //reset successfully message
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and condition");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-3xl mb-2">Please Register</h2>

      <div className="relative">
        <form className=" text-black " onSubmit={handleRegister}>
          <input
            type="email"
            name="email"
            id=""
            required
            className=" border border-black p-2 mb-4 w-3/4 "
            placeholder="Email Address"
          />
          <br />
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className=" border border-black mb-4 p-2 w-3/4 "
              id=""
              required
              placeholder=" Password"
            />
            <span
              className="absolute lg:right-36 mt-3 lg:mr-3 mr-100 text-2xl   "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>

          <br />
          <input
            type="submit"
            value="Register"
            className="btn btn-secondary w-3/4"
          />
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}

        {success && <p className="text-green-700">{success}</p>}

        <p className="mt-6">
          Already have an account? Please
          <Link to="/login" className="text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
