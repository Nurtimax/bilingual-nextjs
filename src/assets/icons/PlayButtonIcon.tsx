import React, { FC, SVGProps } from 'react';

const playButtonIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="40" cy="40" r="40" fill="white" />
         <path d="M52 40L34 26V54L52 40Z" fill="black" />
      </svg>
   );
};

export default playButtonIcon;
