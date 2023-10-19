import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import FAQ from "./faq";

function App() {
  const [Timeleft, setTimeleft] = useState([
    { value: 27, unit: "DAYS" },
    { value: 24, unit: "HOURS" },
    { value: 60, unit: "MINUTES" },
    // { value: 60, unit: "MINUTES" },
  ]);
  const fileds = [
    "First Name",
    "Last Name",
    "Email address",
    "Your Email Again",
  ];
  const Lists = [
    {
      discription:
        "50,000 people and their families will Live, Work and Study in USA.",
      src: "/people.png",
    },
    {
      discription: "OFFICIAL USA Governmental program.",
      src: "/star.png",
    },
    {
      discription: "Your chance to LIVE, WORK & STUDY in USA.",
      src: "/wallet.png",
    },
    {
      discription: "Simple registration within 5 minutes.",
      src: "/clock.png",
    },
    {
      discription: "Personal support in every step.",
      src: "/message.png",
    },
    {
      discription: "Double chance for married people to win the Green Card..",
      src: "/lovely.png",
    },
  ];
  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 8, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setTimeleft([
        ...Timeleft,
        { value: seconds.toString(), unit: "SECONDS" },
      ]);
    }, 1000);
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-between max-w-full min-w-0 max-h-full bg-cover bg-[url('/home.gif')]">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className=" grid  md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex max-w-64 max-h-64 flex-col justify-center flex-shrink-0 ml-[4.8rem] mt-[1.56rem]">
              <h1 className="text-green-500 text-6xl not-italic font-bold whitespace-nowrap">
                Win the right to live
              </h1>
              <p className="text-6xl not-italic font-bold text-white whitespace-nowrap">
                in the USA!
              </p>
            </div>
            <div className="flex sm:grid-cols-3 ">
              <div className="w-[0.375rem] max-h-[6.0625rem] bg-gray-400 ml-[5.31rem]"></div>
              <p className=" max-w-[14.75rem] max-h-[6.185rem]  ml-[1rem] text-2xl not-italic font-medium text-white">
                The official deadline is running, so hurry up and{" "}
                <span className=" text-2xl not-italic font-medium underline text-white ">
                  {" "}
                  <a href="/">apply here!</a>
                </span>
              </p>
              {Timeleft.map((time) => {
                return (
                  <div className="w-[5.625rem] h-[5.5625rem] rounded-2xl bg-gray-900 ml-[0.88rem] flex justify-center items-center content-around ">
                    <p className="w-16 h-10 flex flex-col flex-shrink-0 text-center justify-center ">
                      <span className="text-4xl not-italic font-black text-white ">
                        {time.value}
                      </span>
                      <span className=" text-blue-200 text-center text-xs not-italic font-light">
                        {time.unit}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="ml-[4.9rem] mt-[3.06rem] mb-[9.94rem] flex flex-col">
              {Lists.map((list) => {
                return (
                  <div className="flex w-64 h-12 flex-row  flex-shrink-0">
                    <img className="w-[1.9rem] h-[1.9rem]" src={list.src} />
                    <p className="ml-[1.06rem] text-base not-italic font-medium text-white whitespace-nowrap">
                      {list.discription}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" ">
            <div className="w-[41.85rem] h-[41.56rem] flex-shrink-0 bg-white rounded-3xl ml-6 mr-[5.1rem] mt-[0.56rem] p-[3.56rem] ">
              <img src="checkout.png" />
              <div className="flex  flex-col justify-center flex-shrink-0">
                <h1 className=" flex-shrink-0 my-[1rem] text-6xl not-italic font-bold whitespace-nowrap text-[#01264A] text-center">
                  Green card eligibility
                </h1>
                <div className="  grid grid-cols-2 gap-4 ">
                  {fileds.map((filed) => {
                    return (
                      <input
                        className=" w-[17.3rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                        placeholder={filed}
                      />
                    );
                  })}
                  <div className="flex flex-col mt-2 gap-4">
                    <select
                      className=" w-[34.75rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                      placeholder=""
                      name="birth"
                      id="birth"
                    >
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="Your country of birth"
                      >
                        Your country of birth
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="canada"
                      >
                        Canada
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="usa"
                      >
                        USA
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="france"
                      >
                        France
                      </option>
                    </select>
                    <select
                      className=" w-[34.75rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                      placeholder=""
                      name="birth"
                      id="birth"
                    >
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="Your country of birth"
                      >
                        Marial Status
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="canada"
                      >
                        single
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="usa"
                      >
                        married
                      </option>
                    </select>
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Yes, I finished high school OR I have qualifying
                        training.
                      </label>
                    </div>
                    <button className="w-[34.4rem] bg-[#4AC97D] h-[3.625rem] rounded-xl text-white">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col justify-start">
        <p className="mt-[5rem] ml-[7.12rem] text-xl font-medium text-gray-900 whitespace-nowrap">
          Find the right visa for you!
        </p>
        <div>
          <FAQ content={false} title={"  Diversity Visa Cost"} />
          <FAQ content={true} title="Diversity Visa FAQs" />
        </div>
      </div>
    </>
  );
}

export default App;
