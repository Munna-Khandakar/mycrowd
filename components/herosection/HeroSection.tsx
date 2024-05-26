
import Image from "next/image";
import DeliveryBoy from "./last-mile-pharmacy-delivery.png";
import {PrescriptionUploadButton} from "@/components/herosection/PrescriptionUploadButton";

export const HeroSection = () => {
    return (
      <section className="bg-gradient-to-r from-white via-sky-200ß to-teal-400">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-lg md:text-3xl font-bold text-slate-800">Order Medicine</h1>
              <p className="text-sm md:text-lg mt-4 text-slate-700">Upload Prescription and tell us what you need. We do the rest</p>
                <PrescriptionUploadButton/>
            </div>
            <div className="flex justify-center">
              <Image
                  src={DeliveryBoy}
                  alt="Hero"
                  className="w-30 md:w-96"
                  objectFit={"contain"}
                  width={400}
              />
            </div>
          </div>
        </div>
      </section>
    );
}