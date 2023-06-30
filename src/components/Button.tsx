import React from 'react';

interface ButtonProps {
  name: string;
  width: string;
}

const Button: React.FC<ButtonProps> = ({ name, width }) => {
  return (
    <div className={`rounded-xl ${width} text-white text-xl font-poppins font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:bg-gradient-to-l cursor-pointer transition-colors duration-[400]`}>
      {name}
    </div>
  );
};

export default Button;
