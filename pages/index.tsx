import { TextareaAutosize } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import TRUNG_VU from '../assets/trung_vu.png';
import Layout from '../components/layout/Layout';
import SocialLinks from '../components/common/SocialLinks';
import { SayHelloResponse } from './api/say-hello';

type SayHelloFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    say_hello_name: {
      value: string;
    };
    say_hello_email: {
      value: string;
    };
    say_hello_message: {
      value: string;
    };
  };
};

const Home = () => {
  function handleScrollClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href')?.replace('#', '');

    if (targetId) {
      const jumpTo = document.getElementById(targetId)?.offsetTop;
      window.scrollTo({
        top: jumpTo || 0,
        behavior: 'smooth',
      });
    }
  }

  const submitSayHello = async (event: SayHelloFormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/say-hello', {
      body: JSON.stringify({
        name: event.target.say_hello_name.value,
        email: event.target.say_hello_email.value,
        message: event.target.say_hello_message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const results: SayHelloResponse = await res.json();

    console.log(`Message:`, results.message);
  };

  return (
    <>
      <section className='relative h-[calc(100vh-80px)] hi-there'>
        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-black bg-opacity-10' />

        <div className='relative z-20 flex flex-col items-center content-center justify-center w-full h-full text-center animate-gradient-txt gradient-txt'>
          <h1 className='text-7xl xl:text-8xl'>Hi there!</h1>
          <h3 className='p-2 text-3xl leading- xl:text-4xl'>
            Thanks for visiting my little site.
          </h3>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 10'
          preserveAspectRatio='none'
          className='absolute bottom-0 left-0 z-20 w-full h-32 pointer-events-none fill-current text-black-800'
        >
          <polygon points='0,8 0,10 100,20 100,3' />
        </svg>
      </section>

      <a
        href='#about-me'
        onClick={handleScrollClick}
        className='absolute bottom-0 z-20 transform -translate-x-1/2 left-1/2'
      >
        <svg className='arrows'>
          <polygon
            points='37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 '
            className='arrow-top animate-arrow-pulse'
          />
          <polygon
            points='37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 '
            className='arrow-middle animate-arrow-pulse'
          />
          <polygon
            points='37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 '
            className='arrow-bottom animate-arrow-pulse'
          />
        </svg>
      </a>

      <section
        id='about-me'
        className='relative flex flex-col w-full text-white md:min-h-screen md:flex-row about-me'
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-black opacity-40' />

        <div className='relative z-20 px-[8%] py-5 my-10 bg-opacity-40'>
          <h2 className='w-full mb-5 text-3xl font-semibold font-jost'>
            ABOUT ME
          </h2>

          <div className='p-5 bg-black border-l-2 bg-opacity-60 border-light-orange xl:max-w-2xl'>
            <div className='flex items-center w-full gap-5'>
              <Image
                src={TRUNG_VU}
                width={100}
                height={100}
                alt='trung_vu'
                className='mx-auto rounded-full shadow opacity-80'
              />

              <div className='font-medium'>
                <h3 className='text-3xl'>Trung Vu</h3>
                <h5 className='text-xs text-dark-txt-sec'>Software engineer</h5>
              </div>
            </div>

            <p className='pt-5 text-lg leading-relaxed text-dark-txt-sec'>
              Trung Vu is currently a student at HCMUS, Vietnam. He is
              interested in Web Applications. Hence, he first wants to become a
              fantastic full-stack engineer. In order to achieve this, he
              focuses mainly on JS, Nodejs. Besides, he has also been learned a
              little about something such as React, Redux, TS, databases, etc.
            </p>

            <SocialLinks className='flex items-center justify-end gap-1 mt-1 text-dark-txt-sec list' />
          </div>
        </div>
      </section>

      <div className='w-full h-2 border-0 bg-black-800' />

      <section className='relative flex flex-col items-center justify-center w-full text-white md:min-h-screen md:flex-row md:justify-items-end say-hello'>
        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-black opacity-80' />
        <div className='absolute top-0 left-0 right-0 z-10 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80' />

        <div className='relative z-20 px-[8%] mb-10 w-full py-5 md:justify-end mx-auto md:flex'>
          <div className='w-full max-w-[460px] mx-auto md:mx-0 md:bg-black md:p-16 md:bg-opacity-60 lg:mr-[10%] rounded-xl'>
            <h2 className='text-3xl font-semibold text-center font-jost'>
              SAY HELLO
            </h2>

            <form
              onSubmit={submitSayHello}
              className='flex flex-col w-full gap-5'
            >
              <div className='flex flex-col'>
                <label
                  htmlFor='say_hello_name'
                  className='text-sm text-dark-txt-sec'
                >
                  Name
                </label>
                <input
                  id='say_hello_name'
                  name='say_hello_name'
                  autoComplete='name'
                  type='text'
                  required
                  className='py-1 px-2 border-b border-light-blue h-[30px] bg-black-400'
                />
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='say_hello_email'
                  className='text-sm text-dark-txt-sec'
                >
                  Email
                </label>
                <input
                  id='say_hello_email'
                  type='text'
                  autoComplete='email'
                  className='py-1 px-2 border-b border-light-blue h-[30px] bg-black-400'
                />
              </div>

              <div className='flex flex-col'>
                <label
                  className='text-sm text-dark-txt-sec'
                  htmlFor='say_hello_message'
                >
                  Message
                </label>
                <TextareaAutosize
                  id='say_hello_message'
                  required
                  minRows={4}
                  className='px-2 py-1 border-b border-light-blue bg-black-400'
                />
              </div>

              <button className='p-1 min-h-[30px] text-sm font-bold rounded-2xl btn-primary'>
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function (page: React.ReactElement) {
  return <Layout title='Trung Vu - Home'>{page}</Layout>;
};

export default Home;
