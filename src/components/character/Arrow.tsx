import React from 'react'

interface Props {
  direction: "left" | "right"
  children: React.ReactNode
  handleDirection: () => void
}

const Arrow = ({ direction, children, handleDirection }: Props) => {

  return (
    <span 
      className={`absolute top-[40%] ${direction === "left" ? "left-[20px]" : "right-[20px]"} text-[40px] cursor-pointer select-none`} 
      onClick={handleDirection} 
    >
      {children}
    </span>
  )
}

export default Arrow