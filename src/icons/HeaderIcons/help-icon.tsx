import * as React from "react";

function HelpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        data-name="Icon ionic-md-help-circle"
        d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm.808 12.808H7.192v-1.616h1.615zM8.8 10.385H7.2c0-2.577 2.4-2.392 2.4-3.992a1.607 1.607 0 00-1.6-1.6 1.623 1.623 0 00-1.6 1.6H4.8a3.2 3.2 0 016.4 0c0 1.995-2.4 2.222-2.4 3.992z"
        fill="#7c90db"
      />
    </svg>
  );
}

export default HelpIcon;
