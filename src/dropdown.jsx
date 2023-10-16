import React, { useState } from "react";

export default function dropdown({ color, animation }) {
  const [show, setShow] = useState(false);

  const cars = ["English", "Spanish", "French"];
  return (
    <div className="dropdown-wrapper relative m-8">
      <button
        onClick={() => setShow(!show)}
        className={`bg-${color}-500 text-white font-bold py-2 px-4 flex gap-2 whitespace-no-wrap rounded transition duration-300`}
      >
        <img src="/US.svg" alt="" /> English{" "}
        <i className="fas fa-chevron-down ml-2"></i>
      </button>
      {show && (
        <div
          className={`bg-${color}-500 dropdown-menu text-white mt-1 rounded absolute z-10 shadow-lg w-40 max-w-xs ${animation}`}
        >
          <ul className="list-none overflow-hidden rounded">
            {cars.map((car, index) => (
              <li key={index}>
                <a
                  href=""
                  className={`flex py-2 px-4  transition duration-300 theme-${color}`}
                >
                  {car}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
