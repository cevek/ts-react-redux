import React from "react";

export type Props = {
  active: boolean;
  children?: React.ReactChild;
  onClick: () => void;
};

const Link = ({active, children, onClick}: Props) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
