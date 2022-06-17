import { Fragment } from "react";
import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import "../App.css";

export default function Workbook() {
  return (
    
      
        
        <form>
          <div className="question-section bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <div className="question-count ">
              <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <label class="form-label inline-block mb-2 text-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Workbook
                  </h3>
                </label>
              </span>
            </div>
            <div className="question-text mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <textarea
                class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="workbook"
                rows="10"
                placeholder="Workbook"
              />
            </div>
          </div>
        </form>
      
   
   
  );
}
