import React from "react";
import { useRef, useState } from "react";

import Rating from "@mui/material/Rating";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { AiOutlineStar, AiTwotoneStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const starStyle = {
  width: 60,
  height: 60,
};

function CommOutForm() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [value, setValue] = useState(0);
  return (
    <div className="bg-gradient-to-tr from-[#E4EEEA] from-10% via-[#E4EEEA] via-60% to-[#EAEEB5] to-90% bg-fixed">
      <div className="relative flex flex-col items-center ">
        <div className=" w-fit md:w-[930px] mx-2    mt-48 mb-16 rounded-2xl bg-[#F8F9F0] text-black ">
          <div className="items-center justify-center  h-full w-full mx-auto rounded-2xl ">
            {/*  */}
            <div className=" absolute flex mt-[-50px] items-center">
              <IoIosArrowBack className=" w-6 h-6" />{" "}
              <Link
                to={"/profile"}
                className=" font-bricolage text-xl font-bold leading-7"
              >
                Return to Profile
              </Link>
            </div>
            {/*  */}
            <div className="w-fit h-fit md:px-[150px] md:py-[100px] flex-col justify-start items-start gap-16 inline-flex">
              <div className="flex-col justify-start items-start gap-16 flex">
                <div className="w-fit text-neutral-800 text-[57px] font-medium font-bricolage leading-[64px]">
                  Tell us more about who you helped!
                </div>
                <div className="self-stretch h-fit flex-col justify-center items-start gap-[18px] flex">
                  <div className="self-stretch text-neutral-800 text-[22px] font-bold font-bricolage leading-7">
                    Who did you help?
                  </div>
                  {/*  */}
                  <div className="self-stretch w-full h-fit flex-col justify-start items-start flex ">
                    <div className=" absolute w-fit bg-white ml-3 mt-[-5px]  px-1 justify-start items-center inline-flex">
                      <div className="text-zinc-700 text-xs font-normal font-roboto leading-none">
                        Name
                      </div>
                    </div>
                    <div className="self-stretch h-fit  border-collapse     ">
                      <div className=" h-14  justify-center items-start ">
                        <input
                          type="name"
                          id="name"
                          placeholder="Name"
                          className="text-zinc-900 w-full h-full pl-4 rounded-[4px] border border-zinc-500 text-base  font-normal font-roboto leading-normal tracking-wide"
                          // onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="self-stretch h-fit flex-col justify-center items-start gap-[18px] flex">
                  <div className="self-stretch text-neutral-800 text-[22px] font-bold font-bricolage leading-7">
                    Select the community outreach you have attended.
                  </div>
                  {/*  */}
                  <div className="self-stretch w-full h-fit flex-col  flex ">
                    <div className=" absolute w-fit bg-white ml-3 mt-[-5px]  px-1 justify-start items-center inline-flex">
                      <div className="text-zinc-700 text-xs font-normal font-roboto leading-none">
                        Community Outreach
                      </div>
                    </div>
                    <div className="self-stretch h-fit  border-collapse     ">
                      <div className=" h-14 inline-flex w-full">
                        <select
                          className="text-zinc-900  w-full h-full px-4 rounded-[4px] border border-zinc-500 text-base font-normal font-roboto leading-normal tracking-wide"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select Help Request
                          </option>
                          <option className="w-fit" value="outreach">
                            outreach1
                          </option>
                          <option value="outreach2">outreach two</option>
                          <option value="outreach2">outreach two</option>
                          <option value="outreach2">outreach two</option>
                          <option value="outreach2">outreach two</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid */}

                <div className="self-stretch h-fit flex-col justify-center items-start gap-[18px] flex">
                  <div className="self-stretch text-neutral-800 text-[22px] font-bold font-bricolage leading-7">
                    What kind of help did you provide?
                  </div>

                  <div className="self-stretch w-full h-fit grid md:grid-cols-4 grid-cols-3 gap-2 ">
                    {/* Grid Start */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="food-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="food-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6 text-base font-semibold">
                          {" "}
                          Food and Drink
                        </div>
                      </label>
                    </div>
                    {/*  */}

                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="clothing-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="clothing-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6  text-base font-semibold ">
                          Clothing
                        </div>
                      </label>
                    </div>

                    {/*  */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="hygiene-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="hygiene-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6  text-base font-semibold ">
                          Hygiene Products
                        </div>
                      </label>
                    </div>
                    {/*  */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="wellness-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="wellness-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6 text-base font-semibold">
                          Wellness/ Emotional Support
                        </div>
                      </label>
                    </div>
                    {/*  */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="medical-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="medical-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6 text-base font-semibold">
                          {" "}
                          Medical Help
                        </div>
                      </label>
                    </div>
                    {/*  */}

                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="social-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="social-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6  text-base font-semibold ">
                          Social Worker /Psychiatrist
                        </div>
                      </label>
                    </div>

                    {/*  */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="legal-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="legal-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6  text-base font-semibold ">
                          Legal/Lawyer
                        </div>
                      </label>
                    </div>
                    {/*  */}
                    <div className=" justify-end items-end inline-flex ">
                      <input
                        type="checkbox"
                        id="other-option"
                        value=""
                        class="w-[18px] h-[18px] m-5 cursor-pointer accent-[#5F36D6] peer absolute"
                        required=""
                      ></input>
                      <label
                        for="other-option"
                        class="inline-flex items-start justify-between w-full h-[140px] p-3 bg-slate-200 border-4 border-gray-200 rounded-[30px] cursor-pointer  peer-checked:border-[#5F36D6]  peer-checked:text-gray-600 text-neutral-800 text-base font-bold font-bricolage leading-normal"
                      >
                        <div class="w-full h-full mb-6 text-base font-semibold">
                          Other
                        </div>
                      </label>
                    </div>
                    {/*  */}
                  </div>
                </div>
                {/*  */}

                <div className="self-stretch grow shrink basis-0 px-8 pt-[54px] pb-[55px] bg-stone-50 rounded-[30px] border border-stone-300 flex-col justify-start items-center gap-[29px] flex">
                  <div className="self-stretch text-center text-black text-[22px] font-bold font-bricolage leading-7">
                    Rate your Street Care outreach experience
                  </div>
                  <div className=" inline-flex ">
                    <Rating
                      name="star-rating"
                      icon={
                        <AiFillStar className=" w-10 h-10 text-yellow-300 " />
                      }
                      emptyIcon={<AiOutlineStar className=" w-10 h-10" />}
                      value={value}
                      size={"large"}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                </div>
                {/*  */}
                <div className="self-stretch h-fit flex-col justify-center items-start gap-[18px] flex">
                  <div className="self-stretch text-neutral-800 text-[22px] font-bold font-bricolage leading-7">
                    Total number of items donated by you?
                  </div>
                  {/*  */}
                  <div className="self-stretch w-full h-fit flex-col justify-start items-start flex ">
                    <div className=" absolute w-fit bg-white ml-3 mt-[-5px]  px-1 justify-start items-center inline-flex">
                      <div className="text-zinc-700 text-xs font-normal font-roboto leading-none">
                        Number
                      </div>
                    </div>
                    <div className="self-stretch h-fit  border-collapse     ">
                      <div className=" h-14  justify-center items-start ">
                        <input
                          type="number"
                          id="-itemnumber"
                          placeholder="Number"
                          className="text-zinc-900 w-full h-full pl-4 rounded-[4px] border border-zinc-500 text-base  font-normal font-roboto leading-normal tracking-wide"
                          // onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="justify-start items-start gap-4 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="px-8 py-4 bg-violet-700 rounded-[100px] justify-center items-center gap-2.5 flex">
                      <div className="text-center text-stone-100 text-lg font-semibold font-open-sans leading-normal">
                        Done
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommOutForm;