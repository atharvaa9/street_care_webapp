import React from "react";
import imgBME from "../../images/imgBME.png";

const BMEofficialCard = ({BMEcardData}) => {

  const { title, eventDate, location, totalSlots, interests, img } = BMEcardData

  return (
    
      <div className=" grow shrink basis-0 bg-sky-100 rounded-3xl flex-col justify-start items-start inline-flex">
        <img className=" self-stretch h-56 rounded-t-3xl" src={img} />
        <div className=" self-stretch px-6 pt-6 pb-3 justify-start items-center gap-2 inline-flex">
          <div className="justify-start items-start gap-px flex">
            <img
              className="w-10 h-10 left-[6.34px] top-[9.19px]"
              src={imgBME}
            />
          </div>
          <div className="text-black text-sm font-normal font-['DM Sans'] leading-snug">
            Bright Mind Official
          </div>
        </div>
        <div className=" h-32 px-6 py-2 flex-col justify-start items-start gap-4 flex">
          <div className=" text-neutral-800 text-2xl font-medium font-['DM Sans'] leading-loose">
            {title}
          </div>
          <div className=" text-cyan-700 text-sm font-medium font-['DM Sans'] leading-tight">
            {eventDate}
          </div>
          <div className=" h-5 flex-col justify-start items-start gap-1 flex">
            <div className=" self-stretch text-zinc-700 text-sm font-normal font-['DM Sans'] leading-snug">
               {location.add1} {location.add2} {location.state} {location.zipcode}
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 px-6 pt-4 pb-6 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <button className="h-10 bg-cyan-200 px-6 py-2.5 rounded-full flex-col justify-center items-center gap-2 inline-flex text-center text-neutral-900 text-sm font-medium font-['DM Sans'] leading-tight">
              RSVP
            </button>
            <div className="grow shrink basis-0 text-right text-zinc-700 text-sm font-normal font-['DM Sans'] leading-snug">
               Open Spots: {totalSlots - interests}/{totalSlots}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default BMEofficialCard;
