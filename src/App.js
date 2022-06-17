/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import "./App.css";
import { Popover } from "@headlessui/react";

import Nav from "./components/navbar";
import Questions from "./components/questions";
import Workbook from "./components/workbook";
import Discussions from "./components/discussions";

export default function Example() {
  return (
    <Popover className=" bg-white">
 <Nav />
<div class="flex">
        <div class="w-1/5 bg-white-500 h-50"></div>
        <div class="w-3/5 bg-white-500 h-12">
        <Questions />
   
       
    
    <Workbook /> 
<Discussions />
        </div>
  
        <div class="w-1/5 bg-white-500 h-50"></div>
      
</div>
     

     </Popover>
  );
}
