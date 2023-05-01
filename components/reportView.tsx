import React from "react";

import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { faClose } from "@fortawesome/free-solid-svg-icons";

type propT = {
  closeReportView: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReportView({ closeReportView }: propT) {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center">
      <div className="bg-white w-11/12 rounded-2xl p-10 px-20 flex flex-col justify-between gap-5 pb-5 relative">
        <div className="flex h-full gap-48">
          <div className="w-1/2 h-full flex flex-col gap-3 ">
            <div className="flex items-center gap-3 z-20">
              <FontAwesomeIcon icon={faLightbulb} size={"2x"} />
              <h2 className="text-2xl font-custom font-bold">
                9-Panel STD test
              </h2>
              <div className="h-4 w-0.5 border border-gray-300"></div>
              <p>Genital Swab</p>
            </div>
            <p className="text-gray-400 font-custom">
              *Intermediate: Lorem ipsum dolor sit amet. Adipisicing elit.
              Rerum, consectetur!{" "}
            </p>

            <div className="rounded-2xl shadow flex flex-col justify-between aspect-square">
              <div className="w-full h-full p-4  flex flex-col gap-8 ">
                <div className="flex justify-between text-sm">
                  <button className="border-b-2 border-red-600">
                    Detected(3)
                  </button>
                  <button>Intermediate(2)</button>
                  <button>Not Detected(4)</button>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pr-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">HIV</p>
                      <p className="text-green-600 text-xs ">
                        Know more about HIV
                      </p>
                    </div>
                    <p className="text-xs bg-red-100 text-red-500 rounded-full px-4 font-semibold">
                      Detected
                    </p>
                  </div>

                  <div className="flex justify-between items-center bg-yellow-50 border-l-2 border-red-500 pl-5 py-3 pr-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">Gonorrhea</p>
                      <p className="text-green-600 text-xs ">
                        Know more about Gonorrhea
                      </p>
                    </div>
                    <p className="text-xs bg-red-100 text-red-500 rounded-full px-4 font-semibold">
                      Detected
                    </p>
                  </div>

                  <div className="flex justify-between items-center pr-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">Syphills</p>
                      <p className="text-green-600 text-xs ">
                        Know more about Syphills
                      </p>
                    </div>
                    <p className="text-xs bg-red-100 text-red-500 rounded-full px-4 font-semibold">
                      Detected
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/report.pdf"
                download="report.pdf"
                className="flex items-center justify-center"
              >
                <button className="text-green-700 underline underline-offset-4 text-xs font-bold w-ful rounded-b-2xl p-5 shadow-sm gap-3 flex items-center justify-center shadow-top">
                  <FontAwesomeIcon icon={faDownload} />
                  DOWNLOAD PDF
                </button>
              </a>
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col gap-4">
            <div className="bg-red-100 p-5 rounded border-2 border-red-200 gap-2 flex">
              <img className="emoji-size" src="./emoji.png" />

              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  Hey we are here for you. Schedule a call for help.
                </p>
                <button className="text-green-600 underline underline-offset-4 text-xs font-bold self-start">
                  SCHEDULE NOW
                </button>
              </div>
            </div>

            <h3 className="font-custom font-bold text-lg">
              Gonorrhea: Signs & Symptoms
            </h3>

            <div className="w-full bg-red-100 aspect-video">space for video</div>

            <p className="text-xs text-gray-400">
              Gonorrhea which is a sexually transmitted disease caused by a
              becterium known as nizeria gonorrhea now nizaria gonorrhoeae
              belongs to a group of medically important gram.
            </p>
          </div>
        </div>

        <button
          onClick={() => closeReportView(false)}
          className="bg-green-700 rounded-full text-white px-20 py-4 text-xs font-semibold self-end"
        >
          CONTINUE
        </button>

        <FontAwesomeIcon
          onClick={() => closeReportView(false)}
          icon={faClose}
          className="absolute top-5 right-5"
        />
      </div>
    </div>
  );
}
