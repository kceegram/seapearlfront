'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import './Navbar.css'
import 'aos/dist/aos.css'
import React from 'react'

const Navbar = () => {

  // aos
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, [])

  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);
  const [sign, setSign] = useState(false);

  const handleShow = () => {
    setHide(!hide)
    setShow(!show)
    setSign(!sign)

  }

  const handleSign = () => {
    setSign(false)
    setShow(true)
    setHide(false)

  }

  return (
    <div>
      
      {/* Big Laptop */}
      <div className='hidden md:hidden lg:hidden xl:block'>

        {/* navbar */}
        <div className="navbar">

          <div className="left">
            <p>SeaPearl</p>
          </div>

          <div className="middle">
            <p>HOME ▾</p>
            <p>ABOUT US</p>
            <p>ROOMS ▾</p>
            <p>SERVICES</p>
            <p>RESTAURANT</p>
            <p>CONTACT</p>
          </div>
        </div>

      </div>

      {/* Small Laptop */}
      <div className='hidden md:hidden lg:block xl:hidden'>

        {/* navbar */}
        <div className="navbar">

          <div className="left">
            <p>SeaPearl</p>
          </div>

          <div className="middle">
            <p>HOME ▾</p>
            <p>ABOUT US</p>
            <p>ROOMS ▾</p>
            <p>SERVICES</p>
            <p>RESTAURANT</p>
            <p>CONTACT</p>
          </div>
        </div>

      </div>

      {/* Tablet */}
      <div className='hidden md:block lg:hidden xl:hidden'>

        {/* navbar */}
        <div className="navbar_tablet">

          <div className="left">
            <p>SeaPearl</p>
          </div>

           
          <div className="right" onClick={handleShow} >
            {show === true &&
            <div>
              <p onClick={handleShow}>≡</p>           
            </div>
            }

            {sign === true && 
            <div onClick={handleSign} className="right">
              <p style={{fontSize:'22px'}}>✖</p>
            </div>
            }
          </div>
                    
        </div>

        {hide === true &&
        <div className="dropdown_tablet">
          <p data-aos="fade-down">HOME +</p>
          <p data-aos="fade-down">ABOUT US</p>
          <p data-aos="fade-down">ROOMS +</p>
          <p data-aos="fade-up">SERVICES</p>
          <p data-aos="fade-up">RESTAURANT</p>
          <p data-aos="fade-up">CONTACT</p>
        </div>
        }

      </div>

      {/* Phone */}
      <div className='block md:hidden lg:hidden xl:hidden'>

        {/* navbar */}
        <div className="navbar_phone">

          <div className="left">
            <p>SeaPearl</p>
          </div>

           
          <div className="right" onClick={handleShow} >
            {show === true &&
            <div>
              <p onClick={handleShow}>≡</p>           
            </div>
            }

            {sign === true && 
            <div onClick={handleSign} className="right">
              <p style={{fontSize:'22px'}}>✖</p>
            </div>
            }
          </div>
                    
        </div>

        {hide === true &&
        <div className="dropdown_phone">
          <p data-aos="fade-down">HOME +</p>
          <p data-aos="fade-down">ABOUT US</p>
          <p data-aos="fade-down">ROOMS +</p>
          <p data-aos="fade-up">SERVICES</p>
          <p data-aos="fade-up">RESTAURANT</p>
          <p data-aos="fade-up">CONTACT</p>
        </div>
        } 

      </div>
    </div>
  )
}

export default Navbar
