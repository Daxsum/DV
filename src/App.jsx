import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-cover bg-[url('/home.gif')]">
        <Navbar />
        <div className="flex w-64 h-64 flex-col justify-center flex-shrink-0 ml-[4.8rem] mt-[1.56rem]">
          <h1 className="text-green-500 text-6xl not-italic font-bold whitespace-nowrap">
            Win the right to live
          </h1>
          <p className="text-6xl not-italic font-bold text-white whitespace-nowrap">
            in the USA!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
