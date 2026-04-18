import React from 'react'

type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const PrimaryButton = ({ onClick, children }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="min-w-48 min-h-12 border border-black rounded-full cursor-pointer text-xl hover:bg-black hover:text-white transition-all"
    >
      {children}
    </button>
  )
}

export default PrimaryButton