import React from "react";
import SideBar from "../nav/SideBar";
import TopNav from "../nav/TopNav";
type Props = {
  user?: {
    firstName?: string;
  };
};
const Home = (props: Props) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col ml-16 flex-grow">
        <TopNav />
        <main className="flex-grow mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10 flex flex-col content-start justify-start">
          <h1 className="text-6xl font-thin text-l-text dark:text-d-text w-full">
            Hi {props.user?.firstName}
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
