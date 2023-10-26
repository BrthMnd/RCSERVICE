import axios from "../../libs/axios";
export function Register() {
  const url = import.meta.env.VITE_URL_REGISTER;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        password: e.target.password.value,
        userName: e.target.email.value,
      };
      console.log("url ->" + url);
      console.log(formdata);
      const res = await axios.post(url, formdata);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section id="Login">
        <div className="Box">
          <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Chequeate 😉
              </label>
            </div>
            <div className="button__Submit">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
