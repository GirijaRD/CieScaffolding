import * as React from "react";

function UsernameIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.001}
      height={30.001}
      viewBox="0 0 30.001 30.001"
      {...props}
    >
      <path
        d="M0 15a15 15 0 1115 15A15.018 15.018 0 010 15zm25.653 6.938a12.719 12.719 0 10-21.306 0C6.4 19.632 10.484 18.2 15 18.2s8.6 1.432 10.653 3.738zm-15.116-9.9a4.516 4.516 0 114.516 4.516 4.516 4.516 0 01-4.516-4.511z"
        fill="#fff"
      />
    </svg>
  );
}

export default UsernameIcon;
