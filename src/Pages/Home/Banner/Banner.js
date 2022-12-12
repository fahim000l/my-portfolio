import React from 'react';
import image from '../../../assets/git_pp.jpg'

const Banner = () => {
    return (
        <section className="bg-white text-black">
            <div className="container flex flex-col-reverse justify-center lg:p-6 lg:mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm">
                    <h1 className="lg:text-5xl text-2xl font-bold leading-none sm:text-6xl text-start">I am
                        <span className="text-primary"> Md Fahim Faisal</span> <br /> MERN Stack Developer
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-start">I am currently studying in International Islamic University, Department of CSE, Honors final year. I am very much passionate about web development and data science. Currently, I am practicing MERN Stack projects and looking forward to be hired.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1eXb7YCSAqrtHN3YHUtsuKaik_nBHEzJk/view?usp=sharing" className="btn btn-primary lg:hidden">Resume</a>
                        <a href="#contactme" className="btn btn-ghost">Contact Me</a>
                        {/* The button to open modal */}
                        <label htmlFor="aboutmeModal" className="btn lg:btn-primary" >About Me</label>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <div className="avatar">
                        <div className="lg:w-96 w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;