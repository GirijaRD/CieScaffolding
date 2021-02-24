import * as React from "react";

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.52}
      height={14.016}
      viewBox="0 0 17.52 14.016"
      {...props}
    >
      <path
        d="M15.768 0H1.752A1.75 1.75 0 00.009 1.752L0 12.264a1.757 1.757 0 001.752 1.752h14.016a1.757 1.757 0 001.752-1.752V1.752A1.757 1.757 0 0015.768 0zm0 3.5L8.76 7.88 1.752 3.5V1.752l7.008 4.38 7.008-4.38z"
        fill="#c8d4ff"
      />
    </svg>
  );
}

export default EmailIcon;
