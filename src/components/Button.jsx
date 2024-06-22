import React from 'react';

const Button = ({ className, icon, ...props }) => {
  return (
    <span className={className} {...props}>
      {icon}
    </span>
  );
};

export default Button;
