import React from 'react'

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute inset-0  opacity-80 z-0"></div>
      <div className="z-10">
        <img
          src="public/logo/Dhanwis Logo-01 (1).png"
          alt="Team Logo"
          width={200}
          height="auto"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        />
      </div>
    </div>
  )
}

export default Loader
