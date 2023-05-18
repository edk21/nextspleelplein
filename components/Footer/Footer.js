import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='relative bottom-5 my-16 ml-5'>
        <Image width={50} height={50} src="/images/raccoonImage.jpeg" alt="speelplein logo" />
      </div>
    </footer>
  )
}

export default Footer
