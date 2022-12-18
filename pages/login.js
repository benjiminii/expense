import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Login() {
  const router = useRouter();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        phoneNumber: "",
        password: "",
      },
      validationSchema: Yup.object({
        phoneNumber: Yup.number()
          .min(10000000, "Утасны дугаар богино байна")
          .max(99999999, "Утасны дугаар урт байна")
          .required("Та утасны дугаараа оруулна уу"),
        password: Yup.string()
          .min(6, "Нууц үг богино байна")
          .required("Нууц үг оруулна уу"),
      }),
      onSubmit: () => {
        const loggedUser = users.find(
          (user) =>
            values.phoneNumber == user.phoneNumber &&
            values.password == user.password
        );
        if (loggedUser) {
          router.push("/");
        }
      },
    });

  return (
    // <form className="my-5" onSubmit={handleSubmit}>
    //   <h2 className="d-flex justify-content-center">Нэвтрэх</h2>
    //   <div className="d-flex flex-column align-items-center">
    //     <div className="col-sm-6">
    //       <div className="mb-3">
    //         <label className="form-label must-valid">Утасны дугаар:</label>
    //         <input
    //           type="text"
    //           className={`form-control ${
    //             errors.phoneNumber && touched.phoneNumber && "is-invalid"
    //           }`}
    //           id="phoneNumber"
    //           placeholder="Таны утасны дугаар"
    //           value={values.phoneNumber}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //         />
    //         {errors.phoneNumber && touched.phoneNumber && (
    //           <p>{errors.phoneNumber}</p>
    //         )}
    //       </div>
    //     </div>

    //     <div className="col-sm-6">
    //       <div className="mb-3">
    //         <label className="form-label must-valid">Нууц үг:</label>
    //         <input
    //           type="password"
    //           className={`form-control ${
    //             errors.password && touched.password && "is-invalid"
    //           }`}
    //           id="password"
    //           placeholder="Таны нууц үг"
    //           value={values.password}
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //         />
    //         {errors.password && touched.password && <p>{errors.password}</p>}
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="d-flex justify-content-center my-3"
    //     style={{ color: "white" }}
    //   >
    //     <button
    //       type="button"
    //       className="btn btn-secondary mx-3"
    //       onClick={() => router.push("/register")}
    //     >
    //       <span>Бүртгүүлэх</span>
    //     </button>
    //     <button
    //       type="button"
    //       className="btn btn-primary mx-3"
    //       onClick={() => handleSubmit()}
    //     >
    //       <span>Нэвтрэх</span>
    //     </button>
    //   </div>
    //   <ToastContainer />
    // </form>

    <form className="bg-gray-50 dark:bg-gray-900" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"
        >
          Нэвтрэх
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="battur@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Мартчихсан уу?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Нэвтрэх
              </button>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => router.push("/register")}
              >
                Бүртгүүлэх
              </button>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
