import React from 'react';
import carResale from '../../../assets/CarResale.PNG';
import hayDay from '../../../assets/hayDay.PNG';
import geniusCar from '../../../assets/geniusCar.PNG'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Projects = () => {
    return (
        <div id='projects' className='mt-10 mx-5'>
            <div className='flex flex-col'>
                <p className='text-start font-bold text-3xl'>Projects</p>
                <progress className="progress w-[100px]"></progress>
                <div className='mt-10 grid grid-cols-1 gap-5'>
                    <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg">
                        <figure className='lg:w-[50%]'><img src={carResale} alt="Album" /></figure>
                        <div className="card-body text-start">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-3xl font-bold">Car Resale</h2>
                                    <h2 className='text-2xl'>Features</h2>
                                </div>
                                <Link to={'/carresale'} className='btn btn-primary hidden lg:flex'>Show details</Link>
                                <Link to={'/carresale'} className='btn btn-primary lg:hidden'><FaArrowRight /></Link>
                            </div>
                            <ul className='list-disc'>
                                <li>
                                    A Business Website
                                </li>
                                <li>
                                    Users can order their preferable cars, they also can report a
                                    specific product .
                                </li>
                                <li>
                                    Users can be logged in as Buyers, Seller and Admin and can see
                                    their dashboard accordingly.
                                </li>
                                <li>
                                    Frontend is covered using React Js and necessary packages.
                                </li>
                                <li>
                                    Used Express Js Server and Mongo db database in backend.
                                </li>
                            </ul>
                            <div className="">
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/Car_resale_Client' className="btn btn-outline btn-primary w-full mt-5">Client Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/Car_resale_Server' className="btn btn-outline btn-primary w-full mt-5">Server Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://resale-dotcom.web.app/' className="btn btn-outline btn-primary w-full mt-5">Live website</a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg">
                        <figure className='lg:w-[50%]'><img src={hayDay} alt="Album" /></figure>
                        <div className="card-body text-start">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-3xl font-bold">Hay Day</h2>
                                    <h2 className='text-2xl'>Features</h2>
                                </div>
                                <Link to={'/hayday'} className='btn btn-primary hidden lg:flex'>Show details</Link>
                                <Link to={'/hayday'} className='btn btn-primary lg:hidden'><FaArrowRight /></Link>
                            </div>
                            <ul className='list-disc'>
                                <li>
                                    A gardening service website
                                </li>
                                <li>
                                    Authentication using firebase.
                                </li>
                                <li>
                                    Add User review after logIn
                                </li>
                                <li>
                                    Users can add their own service
                                </li>
                                <li>
                                    Frontend is covered using React Js and necessary Packages
                                </li>
                                <li>
                                    Used Express Js Server and MongoDb database in Backend
                                </li>
                            </ul>
                            <div className="">
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/Hay_Day_Client' className="btn btn-outline btn-primary w-full mt-5">Client Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/Hay_Day_Server' className="btn btn-outline btn-primary w-full mt-5">Server Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://hay-day-79076.web.app/' className="btn btn-outline btn-primary w-full mt-5">Live website</a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg">
                        <figure className='lg:w-[50%]'><img src={geniusCar} alt="Album" /></figure>
                        <div className="card-body text-start">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-3xl font-bold">Genius Car</h2>
                                    <h2 className='text-2xl'>Features</h2>
                                </div>
                                <Link to={'/geniuscar'} className='btn btn-primary hidden lg:flex'>Show details</Link>
                                <Link to={'/geniuscar'} className='btn btn-primary lg:hidden'><FaArrowRight /></Link>
                            </div>
                            <ul className='list-disc'>
                                <li>
                                    A car service service website
                                </li>
                                <li>
                                    Authentication using firebase.
                                </li>
                                <li>
                                    Add user review after logIn.
                                </li>
                                <li>
                                    Frontend is covered using React Js and necessary Packages
                                </li>
                                <li>
                                    Used Express Js Server and MongoDb database in Backend
                                </li>
                            </ul>
                            <div className="">
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/genius-car-client' className="btn btn-outline btn-primary w-full mt-5">Client Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/fahim000l/genius-car-server' className="btn btn-outline btn-primary w-full mt-5">Server Side Git Repo</a>
                                <a target='_blank' rel="noopener noreferrer" href='https://genius-car-b743c.web.app/' className="btn btn-outline btn-primary w-full mt-5">Live website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;