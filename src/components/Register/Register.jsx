const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("form submitting");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <h2 className="text-3xl mb-2">Please Register</h2>

      <div>
        <form className=" text-black" onSubmit={handleRegister}>
          <input
            type="email"
            name="email"
            id=""
            className=" border border-black p-2 mb-4 w-3/4 "
            placeholder="Email Address"
          />
          <br />
          <input
            type="password"
            name="password"
            className=" border border-black mb-4 p-2 w-3/4 "
            id=""
            placeholder=" Password"
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="btn btn-secondary w-3/4"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
