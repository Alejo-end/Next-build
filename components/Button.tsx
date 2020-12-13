import React from 'react'

interface ButtonProps {
  name: string
  color: string
}

const Button = ({ name }: ButtonProps) => (
        <div className="inline-flex items-center justify-start px-3 py-1 bg-gray-100 shadow-xs border-2 border-gray-700">
            <p className="text-xl tracking-widest leading-10 text-center text-gray-700">{name}</p>
        </div>
)

export default Button