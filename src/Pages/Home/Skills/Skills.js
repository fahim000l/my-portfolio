import React from 'react';
import html from '../../../assets/images-removebg-preview.png'
import css from '../../../assets/1200px-CSS3_logo_and_wordmark.svg-removebg-preview.png';
import js from '../../../assets/javascript.png';
import reactJs from '../../../assets/reactJs.png'
import nodeJs from '../../../assets/NodeJs.png'
import expressJs from '../../../assets/expressJs.jfif'
import mongoDb from '../../../assets/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png';
import es6 from '../../../assets/es6.jpg'

const Skills = () => {
    return (
        <div id='skills' className='mt-10 mx-5'>
            <div className='flex flex-col'>
                <p className='text-start font-bold text-3xl'>Skills</p>
                <progress className="progress w-[100px]"></progress>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-24 h-[100px]' src={html} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-24 h-[100px]' src={css} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-24 h-[100px]' src={js} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-24' src={es6} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 80 }}>80%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-28' src={reactJs} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 90 }}>90%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-28' src={nodeJs} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 60 }}>60%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-28' src={expressJs} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 60 }}>60%</div>
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img className='w-28' src={mongoDb} alt="" />
                    <div className="radial-progress text-primary" style={{ "--value": 60 }}>60%</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;