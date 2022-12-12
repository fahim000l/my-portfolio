import React from 'react';
import homePage from '../../assets/HayDayHomePage.jpeg'
import servicePage from '../../assets/HayDayServicesPage.jpeg';
import serviceDetailsPage from '../../assets/HayDayServiceDetailsPage.jpeg'
import { FaGithub, FaLink, FaServer } from 'react-icons/fa';

const HayDay = () => {
    return (
        <section className="">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">Hay Day</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">A service website</p>
                </div>
                <div className='flex items-center justify-center'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/Hay_Day_Client"><FaGithub className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/Hay_Day_Server"><FaServer className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://hay-day-79076.web.app/"><FaLink className='text-3xl mx-10' /></a>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Home Page</h3>
                        <p className="mt-3 text-lg text-start">This page contains a carousal, an "about me" section, an "intro" section and "Services" section</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Carousal</h4>
                                    <p className="mt-2">This section cantains a carousal of five featured images</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">About Me Section</h4>
                                    <p className="mt-2">This section contains a card clearifying the purpose and visions of the service holder</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Intro Section</h4>
                                    <p className="mt-2">This section contains a card, describing important features of their services</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Services Section</h4>
                                    <p className="mt-2">This section contains three servicess, by clicking on see all button, user will be redirected to a route, where all the servises are displayed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={homePage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Services Page</h3>
                            <p className="mt-3 text-lg text-start">This is the route where all the services are displayed in cards.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start">
                                        <h4 className="text-lg font-medium leading-6">Card Elements</h4>
                                        <p className="mt-2">All the services are visualized in a card, Each card contains service Name, little description, Price, ratings and an image of that service</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-start">
                                        <h4 className="text-lg font-medium leading-6">View details</h4>
                                        <p className="mt-2">By clicking on the "view details" button, user will be redirected to a dynamic route, where all the detail informations are visualized about the specific service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={servicePage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Service Details Page</h3>
                        <p className="mt-3 text-lg text-start">This is a dynamic route, having all the details of the specific service and review section</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Details Card</h4>
                                    <p className="mt-2">details card contains service name, broad description, price, review and an image of that service.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Review visualization</h4>
                                    <p className="mt-2">In this section, all the reviews of the specific service are visualized through a table</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 text-start">
                                    <h4 className="text-lg font-medium leading-6">Add review</h4>
                                    <p className="mt-2">logedin user can add their own review.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={serviceDetailsPage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HayDay;