import React from 'react';
import homePage from '../../assets/CarResaleHomePage.jpeg';
import catIdPage from '../../assets/CarResaleCatIdPage.jpeg';
import buyerDashBoard from '../../assets/CarResaleBuyerDashBoard.jpeg';
import { FaGithub, FaServer, FaLink } from 'react-icons/fa';

const CarResale = () => {
    return (
        <section className="">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">Car Resale</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">A business website</p>
                </div>
                <div className='flex items-center justify-center'>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/Car_resale_Client"><FaGithub className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/fahim000l/Car_Resale_Server"><FaServer className='text-3xl mx-10' /></a>
                    <a target='_blank' rel="noopener noreferrer" href="https://resale-dotcom.web.app/"><FaLink className='text-3xl mx-10' /></a>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Home Page</h3>
                        <p className="mt-3 text-lg text-start">This page contains a carousal, a category section, an advertise section and a banner</p>
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
                                    <p className="mt-2">This section cantains a carousal of four featured car images</p>
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
                                    <h4 className="text-lg font-medium leading-6">Category Section</h4>
                                    <p className="mt-2">This section contains four categories of cars(Family Car, Fancy Car, Truck, Micro Bus). By clicking on any of the category, user will be redirected to the route where all the cars of that specific categogory will be displayed.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Advertise Section</h4>
                                    <p className="mt-2">If an user is loged in as a seller, he/she can advertise his products. That advertise would be added to the advertise section. This section cantains only three advertise, by clicking on the see All button, user will be redirected to the route, where all the advertises will be displayed.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Banner Section</h4>
                                    <p className="mt-2">This section contains a simple banner.</p>
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
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Category:id Page</h3>
                            <p className="mt-3 text-lg text-start">Its a dynamic protected route, which contains all the cars of specific category. User have to be signed in to visit this route</p>
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
                                        <p className="mt-2">All the products are visualized in a card, Each card contains product Name, Resale Price, Original Price, Year of use, Seller Name, location, posted date and an image of that product</p>
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
                                        <h4 className="text-lg font-medium leading-6">Book Now</h4>
                                        <p className="mt-2">By clicking on the Book now button, the product will be booked for the specific user.</p>
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
                                        <h4 className="text-lg font-medium leading-6">Report to Admin</h4>
                                        <p className="mt-2">By clicking on the "Report to Admin", user can report the specific product, to the admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={catIdPage} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Buyer Dashboard</h3>
                        <p className="mt-3 text-lg text-start">This page is for users, who logsin as buyer. This is a dashboard, having an option "My Orders". Here the buyer can see all the products he booked.</p>
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
                                    <h4 className="text-lg font-medium leading-6">Delete Order</h4>
                                    <p className="mt-2">User can delete any order by clicking on the cross circle of for specific product</p>
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
                                    <h4 className="text-lg font-medium leading-6">Make Payment</h4>
                                    <p className="mt-2">User can pay for specific order. by clicking on the pay button</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={buyerDashBoard} alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarResale;