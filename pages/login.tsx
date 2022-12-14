import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "./../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
  }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div
      className='relative flex h-screen w-screen flex-col bg-black
     md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <meta name='description' content='This is the login page' />
        <title>Login</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Image
        src='https://rb.gy/p2hphi'
        layout='fill'
        className='-z-10 !hidden opacity-60 sm:!inline'
        objectFit='cover'
      />

      <img
        src='https://rb.gy/ulxxee'
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10
       px-6 md:mt-0 md:max-w-md md:px-14'>
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input
              {...register("email", { required: true })}
              type='email'
              placeholder='email...'
              className='input'
            />
            {errors.email && (
              <p className='p-1 text-[13px] font-light text-red-500'>
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className='inline-block w-full'>
            <input
              {...register("password", { required: true })}
              type='password'
              placeholder='password...'
              className='input'
            />
            {errors.password && (
              <p className='p-1 text-[13px] font-light text-red-500'>
                Please enter a valid password.
              </p>
            )}
          </label>
        </div>

        <button
          onClick={() => setLogin(true)}
          type='submit'
          className='w-full rounded bg-[#e50914] py-3 font-semibold'>
          Sign In
        </button>
        <p className='text-gray-300 text-sm'>
          Test Profile: email: test@test.com p: password <br />
          or sign up with a new account
        </p>

        <div className='text-[gray]'>
          New to Netflix?{" "}
          <Link href='/signUp'>
            <button className='text-white hover:underline'>
              Sign up now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default login;
