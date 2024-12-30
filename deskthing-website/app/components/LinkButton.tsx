import React from "react";

interface LinkButtonProps {
    className: string;
    link: string
    children: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
  }
  
  const LinkButton: React.FC<LinkButtonProps> = ({ className, link, children, onClick }) => {
    
    return (
      <a
        className={`border p-3 rounded-xl text-white flex items-center gap-2 ` + className}
        target="_blank"
        href={link}
        rel="noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  export default LinkButton