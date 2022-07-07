/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import "./App.css";
import { Popover } from "@headlessui/react";
import { Routes, Route, Link,  Outlet } from "react-router-dom";

import Nav from "./components/navbar";
import Questions from "./components/questions";
import Workbook from "./components/workbook";
import Discussions from "./components/discussions";
import NewQuiz from "./routes/new_quiz";
import pic from "./images/download.jpg";
export default function Example() {
  return (
    <Popover className=" bg-white">
      <Nav />
     
      <div class="flex">
        <div class="w-1/5 bg-white-500 h-50">

        <img src={pic} width={100} alt='KNEC Logo'/>
        </div>
        <div class="w-3/5 bg-white-500 h-12">
        <Routes>
        <Route path="/routes" element={<NewQuiz />} />
        
      </Routes>
          {/* <Link to="./routes/new_quiz.js">Take me to New Quiz</Link> */}
          <Questions />
          <Workbook />
          <Discussions />
        </div>

        <div class="w-1/5 bg-white-500 h-50"></div>
      </div>
      <hr />
      <Outlet />
    </Popover>
  );
}
