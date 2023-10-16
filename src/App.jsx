import Dropdown from "./dropdown";

function App() {
  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-cover bg-[url('/home.gif')]">
        <div className=" bg-[#1F3655] rw-64 flex-shrink-0 rounded-lg  w-[84.875rem] h-[7.4375rem] my-[3.1rem] mx-[4.1rem] flex justify-between p-[1.56rem] items-center">
          <img src="/logo.png"></img>
          <div className="flex justify-center items-center">
            <Dropdown animation="fade" color="red" />
            <button className="flex w-48 h-16 flex-col justify-center items-center rounded text-white border-2 border-zinc-50  text-center text-base not-italic font-bold">
              LIVE CHAT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
