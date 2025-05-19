import React from 'react'
import BreadcrumbHeader from '../components/BreadcrumbHeader'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <BreadcrumbHeader/>
      <div className='grid lg:grid-cols-2 items-center grid-cols-1'>
      <div className=' flex flex-col  gap-10 flex-wrap px-5 py-10'>
      <div className='space-y-5'>
        <h1 className='text-2xl lg:text-4xl font-bold text-yellow-600'>Searching for <br /> perfect business Solutions?</h1>
        <p>Connect with us for further business enquiries for our services</p>
      </div>

      <div className='space-y-5'>
        <div><h1 className='text-xl font-semibold text-yellow-600 flex gap-2' ><FaLocationDot/> Corporate Office:</h1>
        <p>Dhanwis Techinfo Solutions 1st floor TKH Complex, <br className='hidden lg:block' /> Opp Jawahar Library,Yogasala Road, Kannur, 650001</p>
        </div>
        <div className='flex gap-5 flex-col '>
          <div>
          <h1 className='text-xl font-semibold text-yellow-600 flex gap-2 items-center'><IoIosMail/> Mail Us</h1>
          <p>Connect with us and let’s grow together</p>
          <p className='font-semibold underline'>info@dhanwis.com</p>
          <p className='font-semibold underline'>dhanwistechinfosolutions@gmail.com</p>
          </div>
          <div>
            <h1 className='text-xl font-semibold text-yellow-600 flex gap-2'> <FaPhoneAlt/> We are just one call away</h1>
            <p className='font-semibold'>+91 8086 487 219 | +9961 487 219 <br />
            +9946 487 219</p>
          </div>
        </div>
      </div>
      </div>
      <div className=''>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.82306143901!2d75.36421720688162!3d11.877650092596782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ce1316235134b%3A0x52648ce532c58725!2sDhanwis%20Techinfo%20Solutions%20%7C%20Best%20Website%20Development%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20%7C%20Company%20In%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1704444011945!5m2!1sen!2sin"
        width={`${window.innerWidth <= 500 ? 400 : "100%"}`}
        height={`${window.innerWidth <= 500 ? 300 : "600"}`}
        style={{ border: 0, marginTop: "2em" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
      </div>
    </div>
  )
}

export default ContactUs
