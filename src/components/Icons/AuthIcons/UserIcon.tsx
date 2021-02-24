import * as React from "react";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.231}
      height={16}
      viewBox="0 0 17.231 16"
      {...props}
    >
      <path
        d="M9.846 11.127v-1.011a5.5 5.5 0 002.462-4.574c0-3.059 0-5.538-3.692-5.538s-3.692 2.48-3.692 5.538a5.5 5.5 0 002.46 4.574v1.015C3.209 11.469.001 13.516.001 16H17.23c0-2.48-3.21-4.532-7.385-4.873z"
        fill="#c8d4ff"
      />
    </svg>
  );
}

export default UserIcon;
