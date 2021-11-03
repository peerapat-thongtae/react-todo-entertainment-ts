import InputCustom from 'components/Form/InputCustom';
import Layout from 'components/Layout';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginUser } from 'store/actions/auth';

const Login = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitLogin = async (data: any) => {
    const { email, password } = data;
    props.loginUser({ email, password }, props.history);
  };

  return props.user.isAuthenticated ? (
    <Layout>
      <div className="flex flex-col my-20">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Login
            </h2>

            <form className="mt-10" onSubmit={handleSubmit(submitLogin)}>
              <div className="form-group mb-4">
                {/* <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e-mail address"
                  autoComplete="email"
                  className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                /> */}
                <InputCustom
                  title="Email"
                  type="text"
                  placeholder="Enter email"
                  registerField={register('email', {
                    required: 'Email required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please email pattern (ex: test@mail.com)',
                    },
                  })}
                  errors={errors.email}
                />
              </div>
              <div className="form-group mb-4">
                <InputCustom
                  title="Password"
                  type="password"
                  placeholder="Enter password"
                  registerField={register('password', {
                    required: 'Password required',
                  })}
                  errors={errors.password}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
              >
                Login
              </button>

              <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a href="forgot-password" className="flex-2 underline">
                  Forgot password?
                </a>

                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  or
                </p>

                <a href="register" className="flex-2 underline">
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Redirect to="/movie" />
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
