import Navbar from "./components/navbar";

function App() {
  const Timeleft = [
    { value: 27, unit: "DAYS" },
    { value: 24, unit: "HOURS" },
    { value: 60, unit: "MINUTES" },
    { value: 60, unit: "SECONDS" },
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
  return (
    <>
      <div className=" flex flex-col justify-start w-full h-full bg-cover bg-[url('/home.gif')]">
        <Navbar />
        <div className="flex w-64 h-64 flex-col justify-center flex-shrink-0 ml-[4.8rem] mt-[1.56rem]">
          <h1 className="text-green-500 text-6xl not-italic font-bold whitespace-nowrap">
            Win the right to live
          </h1>
          <p className="text-6xl not-italic font-bold text-white whitespace-nowrap">
            in the USA!
          </p>
        </div>
        <div className="flex flex-row ">
          <div className="w-[0.375rem] h-[6.0625rem] bg-gray-400 ml-[5.31rem]"></div>
          <p className=" w-[14.75rem] h-[6.185rem]  ml-[1rem] text-2xl not-italic font-medium text-white">
            The official deadline is running, so hurry up and{" "}
            <span className=" text-2xl not-italic font-medium underline text-white">
              {" "}
              apply here!
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
    </>
  );
}

export default App;
