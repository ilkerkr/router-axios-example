const Login = ({ isLogged, setIsLogged }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogged(!isLogged);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container login mt-5 bg-dark text-primary border border-primary rounded"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label mt-5">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text text-light">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
