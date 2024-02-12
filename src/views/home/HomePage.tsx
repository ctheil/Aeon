import React from "react";

import { BaseProps } from "../../utils/build/renderReact";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import SideMenu from "./SideMenu";
import Dashboard from "./Dashboard";
type HomeProps = {};

const HomePage: React.FC<BaseProps & HomeProps> = (props) => {
  console.log("[react]: home page props:", props);
  return (
    <div className="bg-l-bg dark:bg-d-bg min-h-screen">
      <div className="grid grid-cols-12 gap-4 min-h-screen">
        <SideMenu user={props.user!} />
        {/* Main content */}
        <Dashboard />
      </div>
    </div>
  );
};
// <div className="min-h-screen bg-l-bg dark:bg-d-bg">
// <div className="grid grid-cols-12 gap-4">
// <SideMenu />
// <div className="flex flex-col flex-grow">
// <main className="col-span-9 bg-white p-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10 flex flex-col content-start justify-start "></main>
//
// <h1>Welcome Home {props.user?.firstName}</h1>
// </div>
// </div>
// </div>

export default HomePage;
