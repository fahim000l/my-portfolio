import React from 'react';
import vsCode from '../../../assets/vsCode.png';
import firebase from '../../../assets/firebase.webp'
import figma from '../../../assets/figma.png'

const Tools = () => {
    return (
        <div id='tools' className='mt-10 mx-5'>
            <div className='flex flex-col'>
                <p className='text-start font-bold text-3xl'>Tools</p>
                <progress className="progress w-[100px]"></progress>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img src={vsCode} alt="" />
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img src={firebase} alt="" />
                </div>
                <div className='flex items-center justify-evenly shadow-xl rounded-lg p-5'>
                    <img src={figma} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Tools;