import React from "react";
import TextField from "@mui/material/TextField";

type InputProps = {
  name: string;
  type: string;
  icon?: JSX.Element;
  placeholder?: string;
  friendlyName?: string;
};
// const Input = (props: InputProps) => {
//   return (
//     <div>
//       <label htmlFor={props.name} className="sr-only">
//         {props.friendlyName || props.name}
//       </label>
//       <div className="relative">
//         <input
//           type={props.type}
//           name={props.name}
//           className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-gray-700"
//           placeholder={props.placeholder}
//         />
//         {props.icon && (
//           <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-400 dark:text-gray-200">
//             {props.icon}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };
const Input = (props: InputProps) => {
  return (
    <TextField
      id={props.name}
      type={props.type}
      variant="outlined"
      name={props.name}
    />
  );
};

export default Input;
