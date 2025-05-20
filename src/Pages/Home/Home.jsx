import React from 'react';
import MiddleUp from './Components/MiddleUp';
import LeftUp from './Components/LeftUp';
import RightUp from './Components/RightUp';
import Politics from './Components/Politics';
import National from './Components/National';
import International from './Components/International';
import Sports from './Components/Sports';
import Binodon from './Components/Binodon';

const Home = () => {
    return (
        <div className="w-11/12 lg:w-8/12 mx-auto">

            <div className="flex flex-col lg:flex-row justify-center gap-5">
                <div className="w-full lg:w-6/12 border-y lg:border-x lg:border-y-0 border-gray-300 px-2 lg:hidden">
                    <MiddleUp />
                </div>
                <div className="w-full lg:w-3/12">
                    <LeftUp />
                </div>
                <div className="hidden lg:block w-full md:w-6/12 border-y md:border-x md:border-y-0 border-gray-300 px-2">
                    <MiddleUp />
                </div>
                <div className="w-full lg:w-3/12">
                    <RightUp />
                </div>
            </div>
            <div className="mt-10">
                <Politics />
            </div>
            <div className="mt-10 flex justify-center">
                <video
                    className="w-full md:w-6/12"
                    controls
                    playsInline
                    webkit-playsinline="true"
                    crossOrigin="anonymous"
                    preload="none"
                    muted
                    autoPlay
                    src="https://content1.avplayer.com/5fd9c7d93f2f4c6ef13a1ec7/videos/673197671a78194d07000933/6731976b7a827fd094002ea3/video.mp4"
                />
            </div>
            <div className="mt-10">
                <National />
            </div>
            <div className="mt-5">
                <International />
            </div>
            <div className="mt-5">
                <img
                    className="mx-auto"
                    src="https://s0.2mdn.net/simgad/2587603031845463405"
                    alt=""

                />
            </div>
            <div className="mt-5">
                <Sports />
            </div>
            <div className="mt-5">
                <img
                    className="mx-auto"
                    src="https://tpc.googlesyndication.com/simgad/3971471824697589924"
                    alt=""
                />
            </div>
            <div className="mt-5">
                <Binodon />
            </div>

        </div>
    );
};

export default Home;
