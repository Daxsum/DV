import Dropdown from "./dropdown";

function App() {
  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-cover bg-[url('/home.gif')]">
        <div className=" bg-[#1F3655] rounded w-[84.875rem] h-[7.4375rem] my-[3.1rem] mx-[4.1rem] flex justify-center items-center">
          <img src="/logo.png"></img>
          <Dropdown animation="fade" color="red" />
        </div>
      </div>
    </>
  );
}

export default App;
