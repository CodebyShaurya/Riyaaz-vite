import React from 'react'
import Navbar from '../components/Navbar'
import heroimg from '../assets/hero-bg.png.webp'
import brain from '../assets/brain.png.webp'
import pointer from '../assets/pointer.png.webp'
import phone from '../assets/smartphone.png.webp';
import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpeg';
import bullet from '../assets/pointer.webp';
import logo from '../assets/White logo - no background.png'

function Home() {

  return (
    <div>
      <Navbar />
                    {/* <div className="fixed bottom-0 right-0 m-4">
                        {!isOpen && (
                            <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow"
                            onClick={toggleChat}
                            >
                            Chat with Bot
                            </button>
                        )}
                        {isOpen && (
                            <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-80">
                            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
                                <p className="font-semibold">Music Bot</p>
                                <button onClick={handleClose}>
                                <svg
                                    className="h-4 w-4 fill-current text-gray-600 hover:text-gray-800"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </button>
                            </div>
                            <div className="p-4 h-40 overflow-y-auto">
                                {messages.map((message, index) => (
                                <div key={index} className={`mb-2 ${message.fromUser ? 'text-right' : 'text-left'}`}>
                                    <p className={`p-2 rounded-lg ${message.fromUser ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}>
                                    {message.text}
                                    </p>
                                </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-gray-300">
                                <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                    handleSendMessage(e.target.value);
                                    e.target.value = '';
                                    }
                                }}
                                />
                            </div>
                            </div>
                        )}
                        </div> */}
      <div className="bg-[#0a183d] grid grid-cols-2 text-center pt-32 pb-20 text-white">
        <div>
          <h1 className="text-7xl px-8 font-semibold">
            {" "}
            Unleash Your Inner <span className="text-[#fc0254]">
              Musician
            </span>{" "}
            with <br /> AI-Powered Learning{" "}
          </h1>

          <div className="px-32">
            <br />
            Do you dream of achieving proficiency and fluency in your musical
            journey? Look no further - Riyaaz is here to revolutionize your
            practice sessions and propel your skills to new heights!
          </div>
        </div>
        <div>
          <img src={heroimg} alt="Riyaaz" loading="eager" />
        </div>
      </div>

      <div className="grid grid-cols-2 text-center py-32 text-[#0a183d]">
        <div className="text-5xl font-semibold px-24  ">
          <h2>
            Ready to Elevate Your Musical Journey? Why Wait? Experience Riyaaz
            Today
          </h2>
        </div>

        <div className="text-xl pr-24">
          Say goodbye to aimless repetition and hello to purposeful,
          results-driven practice. With Riyaaz, each session is an opportunity
          for growth, guided by real-time feedback and personalized insights.
          Elevate your playing, refine your technique, and ignite your passion
          for music like never before.
          <br />
          <br />
          <a className="bg-[#fc0254] text-white p-5 m-10 rounded-xl" href="#">
            TRY IT NOW
          </a>
        </div>
      </div>

      {/* <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-96 -z-10 transform-gpu overflow-hidden  sm:-top-96"
          aria-hidden="true"
        >
          <img className=" relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
             src='https://pngimg.com/d/music_notes_PNG33.png'/>
          {/* <div
            className=" relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> 
        </div>
        </div> */}

      <div className="bg-[#0a183d]  pt-28 pb-14 text-white">
        <div className="pl-28 text-7xl text-white">How it works</div>
        <div className="grid grid-cols-3 px-32 py-20  content-center">
          <div className="content-center">
            <img src={brain} className="" />
            <div className="font-semibold mt-6 text-3xl">Create an account</div>
            <div className="pr-20 pt-6 text-xl text-gray-500">
              Sign up now to access exclusive features and resources designed to
              enhance your musical journey. Whether you're a beginner or a
              seasoned musician, our platform offers tools to help you learn,
              create, and connect with others who share your passion for music.
            </div>
          </div>

          <div className="">
            <img src={pointer} className="" />
            <div className="font-semibold mt-6 text-3xl">Choose a plan</div>
            <div className="pr-20 pt-6 text-xl text-gray-500">
              Unlock unlimited access to our library of music lessons,
              tutorials, and interactive exercises by choosing a subscription
              plan that fits your needs. Whether you want to master an
              instrument, refine your skills, or explore new genres, we have a
              plan for you.
            </div>
          </div>

          <div className="">
            <img src={phone} />
            <div className="font-semibold mt-6 text-3xl">Collaborate</div>
            <div className="pr-20 pt-6 text-xl text-gray-500">
              Join our community of music enthusiasts today and start
              discovering, creating, and sharing your passion for music. With a
              free account, you'll gain access to personalized recommendations,
              curated playlists, and exclusive content.
            </div>
          </div>
        </div>
      </div>

      


        <div className='text-[#0a183d]  pt-28 pb-14 '>

          <div className='grid grid-cols-2'>
          <div className='pl-28 font-semibold text-7xl '>Our Concept & instruments</div>
          <div className='pr-28 text-lg'>Our concept revolves around leveraging cutting-edge machine learning technology to enhance musical experiences across various instruments. Whether you're a pianist, guitarist, violinist, drummer, or play any other instrument, our ML model is designed to provide personalized feedback and guidance tailored to your specific instrument and skill level.
        </div>
          </div>
         
            
            <div className='grid grid-cols-4 px-32 py-20  content-center'>
                
                  <div className='content-center text-center'>
                      <img src={pic1}  className='rounded-3xl w-[267px] h-[253px]'/>
                      <div className='pr-20 text-xl font-bold'>Guitar</div>
                  </div>
                  <div className='content-center text-center'>
                      <img src={pic2}  className='rounded-3xl w-[267px] h-[253px]'/>
                      <div className='pr-20 text-xl font-bold'>Piano</div>
                  </div>


                  <div className='content-center text-center'>
                      <img src={pic3}  className='rounded-3xl w-[267px] h-[253px]'/>
                      <div className='pr-20 text-xl font-bold'>Djembe</div>
                  </div>

                  <div className='content-center text-center'>
                      <img src={pic4}  className='rounded-3xl w-[267px] h-[253px]'/>
                      <div className='pr-20 text-xl font-bold'>Drums</div>
                  </div>


                  


                  
                
                  </div>  
        </div>
        
        <div className='bg-[#0a183d]  pt-16 pb-10 text-white'>
            
            <div className='grid grid-cols-2 px-32 py-10  content-center'>
              <div>
                <div className='pl-28 text-6xl text-white'>Subscription from ₹15/month</div>
                <div className='pl-28 py-6 text-2xl font-semibold text-[#fc0254]'>Start a free trial now</div>
                <div className='pl-28 pt-6 text-xl text-gray-500'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div className='mx-10 bg-[#1c294a] rounded-3xl pt-16 pb-10 pl-32'>
                <ul>
                  <li className='flex'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>Play any track</div> </li>
                  <li className='flex pt-2'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>Listen offline</div> </li>
                  <li className='flex pt-2'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>No ad interruptions</div> </li>
                  <li className='flex pt-2'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>Unlimited skips</div> </li>
                  <li className='flex pt-2'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>High quality audio</div> </li>
                  <li className='flex pt-2'> <img className='w-6 h-4 mt-4' src={bullet}/> <div className='pl-6 py-2 text-xl'>Shuffle play</div> </li>
                </ul>
              </div>
              
            
                
                  


                  
                
            </div>
        </div>

      {/* 
        <div className='text-[#0a183d]  pt-28 pb-14 '>

          <div className='grid grid-cols-2'>
          <div className='pl-28 font-bold text-7xl '>Why go Premium</div>
          <div className='pr-28 text-lg'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          </div>
            
            <div className='grid grid-cols-4 px-32 py-20  content-center'>
                
                  <div className='content-center text-center'>
                      <img src={pic1}  className='rounded-full'/>
                      <div className='pr-20 text-xl font-bold'>Soul Music</div>
                  </div>
                  <div className='content-center text-center'>
                      <img src={pic2}  className='rounded-full'/>
                      <div className='pr-20 text-xl font-bold'>Live Concert</div>
                  </div>


                  <div className='content-center text-center'>
                      <img src={pic3}  className='rounded-full'/>
                      <div className='pr-20 text-xl font-bold'>Dj Sets</div>
                  </div>

                  <div className='content-center text-center'>
                      <img src={pic4}  className='rounded-full'/>
                      <div className='pr-20 text-xl font-bold'>Live Streams</div>
                  </div>


                  


                  
                
            </div>
        </div> */}

      <hr />

      <footer class="bg-[#0a183d] dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img src={logo} class="h-8 me-3" alt="Riyaaz Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Riyaaz
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" className="hover:underline">
                      Riyaaz
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/CodebyShaurya/Riyaaz-vite"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" class="hover:underline">
                Riyaaz™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
