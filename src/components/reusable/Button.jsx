import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-white border-0 py-[5px] px-[15px] rounded-[8px] cursor-default'>
      {props.btn}
    </div>
  )
}

export default Button
