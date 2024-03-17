"use client";
import React, { useState } from "react";
import sampleData from "@/data/high_yield_checking.json";
import initialPreferences from "@/data/questions.json";
import Table from "@/components/Table";
import ChatBox from "@/components/ChatBox";
import {
  PreferenceModal,
  PreferenceModalProps,
} from "@/components/PreferenceModal";

export default function VendorAssistedTable() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false); // Start with the modal hidden

  const getType = (t: string) => {
    switch (t) {
      case "Boolean":
        return "toggle";
      case "Range":
        return "slider";
      case "Number":
        return "value";
      default:
        return "";
    }
  };

  const preferenceEntries = initialPreferences.map((question) => ({
    label: question.Question,
    type: getType(question.Type),
    value:
      question.Type === "Boolean"
        ? question.Default === "Yes"
        : Number(question.Default),
    min: question.Min !== undefined ? Number(question.Min) : undefined,
    max:
      question.Max !== undefined
        ? question.Max === "100000+"
          ? 100000
          : Number(question.Max)
        : undefined,
  }));

  return (
    <div className=" justify-between p-10">
      <div className="w-full">
        <button
          className="px-4 py-2 rounded m-4"
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          Show Options{" "}
        </button>
        {isOptionsVisible && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="optionModal"
          >
            <div className="relative top-20 mx-auto p-5 border w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-left">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"></div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Preferences
                </h3>
                <div className="mt-2 py-3">
                  {/* @ts-ignore */}
                  <PreferenceModal {...preferenceEntries} />
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    onClick={() => setIsOptionsVisible(false)}
                    className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="">
          <Table data={sampleData} />
        </div>
      </div>
    </div>
  );
}
