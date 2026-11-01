import { PiSealWarning } from "react-icons/pi";
import { IoCardOutline } from "react-icons/io5";
import { useState } from "react";
import Model from "./Model";

export default function Payment() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="w-full lg:max-w-[427px] h-auto lg:h-[594] bg-[#F7FDFD] flex flex-col justify-between gap-4  mt-10">
      <div className="border border-[#C6E6F9] rounded-sm p-5 flex flex-col gap-10">
        <p className="font-Raleway font-bold text-[24px] text-[#4E5050]">
          Order Summary
        </p>
        <div className="flex flex-col gap-7">
          <div className="flex justify-between">
            <p className="font-Montserrat text-[18px] text-[#4E5050]">
              Subtotal
            </p>
            <p className="font-Montserrat font-bold text-[18px] text-[#001616]">
              N4,000.00
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-Montserrat text-[18px] text-[#4E5050]">
              Delivery
            </p>
            <p className="font-Montserrat font-bold text-[18px] text-[#001616]">
              N1,500.00
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-Montserrat text-[18px] text-[#4E5050]">Zip</p>
            <p className="font-Montserrat font-bold text-[18px] text-[#001616]">
              N1,000.00
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-Montserrat text-[18px] text-[#4E5050]">
              Front &amp; Back Designs
            </p>
            <p className="font-Montserrat font-bold text-[18px] text-[#001616]">
              N1,000.00
            </p>
          </div>
        </div>

        <div className="border-t-1 border-b-1 border-[#EBF2F2] flex items-center justify-between">
          <p className="font-bold text-[24px] font-Raleway text-[#000000] ">
            Total
          </p>
          <p className="font-bold text-[18px] font-Montserrat text-[#001616] ">
            N7,500.00
          </p>
        </div>

        <div className="bg-[#FAFFFF] border border-[#DFDDDC] flex gap-1 rounded-sm p-1">
          <div className="w-[17px] h-[17px] p-1">
            <PiSealWarning className="text-md text-[#4d4f4f]" />
          </div>
          <p className="font-Raleway text-[15px] text-[#3c3d3d]">
            Please your totebag will be delivered in three to five working
            days.
          </p>
        </div>
      </div>

      <button onClick={() => setIsOpen(true)} className="text-[#EBF7F7] bg-[#001616] w-full flex p-3 items-center gap-3 rounded-sm"><p className="font-medium text-[16px] font-Raleway "> Payment option </p>
        <IoCardOutline />
      </button>

      <Model
      isOpen={isOpen}
      onClose={() => setIsOpen(false)} />
    </section>
  );
}
