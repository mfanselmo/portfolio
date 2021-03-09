import React from "react";
import Footer from "./components/Footer";
import MainInformation from "./components/MainInformation";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <div className={"dark:bg-gray-800 transition-colors min-w-full min-h-full"}>
      <div className={"md:pt-16 pt-8 md:mx-auto mx-6 md:max-w-screen-md "}>
        <div className={"md:flex-row md:justify-evenly flex flex-col"}>
          <MainInformation />
          <Scroll />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
