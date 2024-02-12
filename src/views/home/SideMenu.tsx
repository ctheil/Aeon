import { Home, Settings } from "lucide-react";
import React from "react";
type SideMenuProps = {
  user: {
    firstName: string;
  };
};

const items = [
  { title: "Home", path: "/", icon: <Home size={18} strokeWidth={1.5} /> },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings size={18} strokeWidth={1.5} />,
  },
];
const SideMenu = (props: SideMenuProps) => {
  return (
    <div className="col-span-3 bg-l-bg dark:bg-d-bg border-e border-l-bg-a dark:border-d-bg-a p-4 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="text-l-p-500 dark:text-d-p-500 text-3xl font-bold mb-2">
            Somename
          </div>
        </div>
        <div className="flex flex-col gap-3 space-y-1 pl-1">
          {items.map((i, key) => (
            <a
              key={key}
              href={i.path}
              className="text-l-text-a hover:text-l-text dark:text-d-text dark:hover:text-d-text-a font-medium flex gap-3 items-center"
            >
              {i.icon}
              <p>{i.title}</p>
            </a>
          ))}
        </div>
        <div className="mt-auto flex items-center mb-6">
          <div className="rounded-full h-10 w-10 bg-gray-300 mr-2"></div>
          <span className="font-medium">{props.user.firstName}</span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
