import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.PNG'

const Header = () => {

    const menu = <>
        <li><Link className='font-bold italic' to={'/'}>Home</Link></li>
        <li><a className='font-bold ml-5 italic' href='#skills'>Skills</a></li>
        <li><a className='font-bold ml-5 italic' href='#tools'>Tools</a></li>
        <li><a className='font-bold ml-5 italic' href='#projects'>Projects</a></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu
                        }
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className='w-[200px] h-[60px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1eXb7YCSAqrtHN3YHUtsuKaik_nBHEzJk/view?usp=sharing" className="btn btn-primary hidden lg:flex">Resume</a>
            </div>
        </div>
    );
};

export default Header;