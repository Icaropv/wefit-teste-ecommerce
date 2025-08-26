import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  children: React.ReactNode,
  complementalClassname?: string


}





const Button = ({ children, complementalClassname, ...props }: ButtonProps) => {

  return (
    <button {...props} className={`h-[45px]  text-white flex justify-center items-center gap-4 rounded-[5px] bg-[#009EDD]  ${complementalClassname}`}>
      <p className='font-sans font-bold'>{children}</p>
    </button>
  )
}

export default Button
