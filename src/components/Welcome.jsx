import { React, useEffect } from 'react'
import './Welcome.css'

const Welcome = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Clean up the observer when the component is unmounted
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className='text-white '>


            <div className='intro1 h-[100vh] flex justify-center flex-col pl-40 pr-40 pt-5'>
                <div className='flex justify-center items-center gap-8 pb-20'>

                    <p className='text-7xl text-center w-[60%]'>
                        TrueSight -<span className='gradient-text'> Unmasking Reality </span>Detecting Deepfakes
                    </p>
                    <div className="vid w-[40%] ">
                        <video className='rounded-xl' src="vid01.mp4" loop autoPlay muted></video>
                    </div>
                </div>
                {/* <p className='text-xl text-center py-20'>
                TrueSight is an advanced AI-powered tool designed to detect deepfakes with precision. Leveraging cutting-edge algorithms, it analyzes videos and images to identify manipulated content, ensuring the authenticity of digital media.</p> */}
                <div className='flex items-center'>

                    <button className="hover:border hover:border-1 relative overflow-hidden rounded-lg px-20 py-6 max-w-6 mx-auto">
                        <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">Add Video</span>
                        <span aria-hidden className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
                    </button>
                </div>

            </div>
            <div className="intro2 ">
                <div className="img flex justify-center items-center gap-4 ">
                    <img className='h-[200px] rounded-2xl' src='i01.webp' alt="" /><img className='h-[200px] rounded-2xl' src='i02.webp' alt="" /><img className='h-[200px] rounded-2xl' src='i03.webp' alt="" /><img className='h-[200px] rounded-2xl' src='i04.webp' alt="" />
                </div>
            </div>
            <div className='  intro3 h-[100vh] flex flex-col gap-2 justify-between items-center pt-[90vh]'>
                <div className='px-20 pt-20 text-center'>
                    <p className='text-5xl'>Generative AI Architechture</p>
                    <p className="text-3xl">Whether youre building your own models or applying foundation model to your business, data remains the biggest setback to AI</p>
                </div>
                <div className='flex justify-between items-center pb-20'>
                    <div className="right max-w-[50%] pl-20 flex flex-col gap-4">
                        <p className='text-3xl font-bold'>Fine-Tuning & RLHF</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                        <p className='text-3xl font-bold'>Foundation Models</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                        <p className='text-3xl font-bold'>Enterprise Data</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex at quibusdam!</p>
                    </div>
                    <div className="left max-w-[50%] pr-20">
                        <img className='' src="ai.png" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
