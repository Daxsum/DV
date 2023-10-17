import React, { useState } from "react";

export default function FAQ() {
  const [show, setShow] = useState(true);
  const trs = [
    {
      freeType: " Family Sponsorship Form (I-130)",
      cost: "$535",
      costAbroad: "$535",
    },
    {
      freeType: " Green Card Application Form (I-485)",
      cost: "$1140",
      costAbroad: "Not required",
    },
    {
      freeType: " Financial Support Form (I-864)",
      cost: "$0",
      costAbroad: "$120",
    },
    {
      freeType: " Work Permit Application Form (I-765) (optional)",
      cost: "$0",
      costAbroad: "Not required",
    },
    {
      freeType: " Travel Permit Application Form (I-131) (optional)",
      cost: "$85",
      costAbroad: "Not required",
    },
    {
      freeType: "State Department Processing",
      cost: "Not required",
      costAbroad: "$0",
    },
    {
      freeType: "USCIS Immigrant Fee",
      cost: "Not required",
      costAbroad: "$325",
    },
    {
      freeType: "Medical Examination",
      cost: "*Varies",
      costAbroad: "$220",
    },
    {
      freeType: "Total",
      cost: "$1760",
      costAbroad: "$1200",
    },
  ];
  return (
    <div className="m-0">
      {" "}
      <div className="dropdown-wrapper relative m-0">
        <button
          onClick={() => setShow(!show)}
          className={`bg-gray-100mt-[4.37rem]  mb-[3.21rem] ml-[4.95rem] text-5xl not-italic font-light text-[#4AC97D] whitespace-no-wrap rounded transition duration-300`}
        >
          Diversity Visa Cost
        </button>
        <i className=" ml-2 text-white">V</i>
        {show && (
          <div
            className={`bg-gray-100 dropdown-menu  mt-1 rounded absolute z-10 shadow-lg w-full  fade`}
          >
            <div className="ml-[15rem] mr-[18rem] rounded-3xl bg-white">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden p-8">
                      <div className="flex justify-between">
                        <p className="ml-2 text-sm font-medium text-gray-900 whitespace-nowrap">
                          Mandatory Government Fees for Green Cards
                        </p>{" "}
                        <button className="w-[12.75rem] bg-[#FD816B] h-[3.625rem] rounded-xl text-white">
                          Apply now
                        </button>
                      </div>
                      <table class="min-w-full text-center text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" class="px-6 py-4 text-left">
                              Fee Type
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Cost (to Applicat Living in the U.S.)
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Cost (to Applicant Living Abroad)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {trs.map((tr) => {
                            return (
                              <tr class="border-b dark:border-neutral-500">
                                <td class=" text-black text-base not-italic font-light whitespace-nowrap px-6 py-4 text-left">
                                  {tr.freeType}
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                  {" "}
                                  {tr.cost}
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                  {" "}
                                  {tr.costAbroad}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <p className="flex justify-end text-right">
                        Fees are subject to change, please use this calculator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
}