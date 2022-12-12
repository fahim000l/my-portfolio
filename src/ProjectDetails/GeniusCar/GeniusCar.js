import React from 'react';
import homePage from '../../assets/GeniusCarHomePage.jpeg';
import serviceIdPage from '../../assets/GeniusCarServiceIdPage.jpeg';
import orderReviewPage from '../../assets/GeniusCarOrderReviewPage.jpeg';
import { FaGithub, FaLink, FaServer } from 'react-icons/fa';

const GeniusCar = () => {
    return (
        <section className="">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">Genius Car</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">A service website</p>
                </div>
                <div className='flex items-center justify-center'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/genius-car-client"><FaGithub className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/genius-car-server"><FaServer className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://genius-car-b743c.web.app/"><FaLink className='text-3xl mx-10' /></a>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Home Page</h3>
                        <p className="mt-3 text-lg text-start">This page contains a carousal, an intro section and "Services" section</p>
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
                                    <h4 className="text-lg font-medium leading-6">Intro Section</h4>
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
                                    <h4 className="text-lg font-medium leading-6">Services Section</h4>
                                    <p className="mt-2">This section contains all of their services visualized in cards.By clicking on the arrow button, user will be redirectied to the route, where he/she can make order.</p>
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
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Service:id Page</h3>
                            <p className="mt-3 text-lg text-start">This is a dynamic protected route, where user can make order for an specific service by providing their necessary information</p>
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
                                        <p className="mt-2">User information fill be accepted from a form in a card, the card contains first Name, last name, user email, phone number, message and the image of that specific service</p>
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
                                        <h4 className="text-lg font-medium leading-6">Confirm order</h4>
                                        <p className="mt-2">By clicking on the "Confirm Order" button, the order will be confirmed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={serviceIdPage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Order review Page</h3>
                        <p className="mt-3 text-lg text-start">This protected route contains all the orders confirmed by the specific user, visualized in a table.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Delete order</h4>
                                    <p className="mt-2">User can delete an specific order by clicking on the cross circle.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Changle Status</h4>
                                    <p className="mt-2">User can change status of an specific order from pending to active and vice versa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={orderReviewPage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeniusCar;