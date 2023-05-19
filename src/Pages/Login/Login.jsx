import { Link } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../Auth/AuthProvider";

const Login = () => {
  const { signIn } = useContext(UserContext);
  const { googleSignIn } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Todo: sign in using email and password

    signIn(email, password)
      .then((output) => {
        const user = output.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // Todo: sign in using google
  const wraper = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[url(https://i.ibb.co/Xz4f14J/Strike-Gundam-Hector-Trunnec.png)] bg-cover bg-center bg-opacity-20 w-full h-full">
      <div className="card-body flex justify-center items-center">
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
                Email
              </span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input border-2 border-slate-950"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg bg-pink-100 border-2 border-slate-800 px-5 py-1 rounded">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input border-2 border-slate-950"
            />
          </div>
          <>
            <p className="text-xs bg-red-50 font-bold px-3 py-1 my-2 rounded">
              Don't have an account?
              <Link className="text-base link link-hover" to="/signup">
                Sign Up
              </Link>
            </p>
          </>

          <div className="form-control mt-6">
            {/* <button className="btn">Login</button> */}
            <input className="btn" type="submit" value="Log In" />
          </div>
        </form>
      </div>
      <div className="divider text-white font-bold">OR</div>
      {/* sign in with google */}
      <div className="text-center text-lg bg-pink-100 text-dark font-bold py-3">
        Sign In using Google{" "}
        <button onClick={wraper} className="btn btn-circle btn-outline">
          <ImGoogle></ImGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
