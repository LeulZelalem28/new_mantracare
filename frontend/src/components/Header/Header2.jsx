/* eslint-disable no-unused-vars */
 
import { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from "react-icons/bi"
import React from 'react'
const navLinks = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctor',
        display:'Find Therapist'
    },
    {
      path: '/session',
      display: 'Mysession'
    },
    {
      path: '/forum',
      display: 'Forum'
    },
    {
      path: '/blog',
      display: 'Blog'
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    }
]

const Header2 = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const heandleStickyHeader = ()=>
        {
            window.addEventListener('scroll', ()=>{
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                    headerRef.current.classList.add('sticky__header')
                } else {
                    headerRef.current.classList.remove('sticky__header')
                }
            })
        }
    useEffect(()=>{
        heandleStickyHeader()
        return ()=> window.removeEventListener('scroll', heandleStickyHeader)
    })

const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            {/* <img src="" alt="hu" /> */}
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

          <div>
            <Link to="/login">
              <button 
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
          </div>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header2;