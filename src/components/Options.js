import React from 'react'
import bgoption from '../assects/Vector 1.png'
import one from '../assects/one.png'
import two from '../assects/two.png'
import three from '../assects/three.png'
import four from '../assects/four.png'
import five from '../assects/five.png'
import six from '../assects/six.png'


const Options = () => {
    return (
        <div className='flex flex-row flex-wrap w-full gap-[50px] py-[100px] px-[20px] xl:px-[100px] 2xl:px-[144px] bg-black text-white items-center justify-center'>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={one} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Long-Term success and stability</div>
                </div>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={two} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Digital cultural exchange</div>
                </div>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={three} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Empowering Artists</div>
                </div>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={four} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Fostering a global community</div>
                </div>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={five} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Preservation of culture art</div>
                </div>
                <div class="bg-center bg-no-repeat w-[430px] h-[417px] justify-center items-center flex flex-col gap-[30px]"
                    style={{ backgroundImage: `url('${bgoption}')` }}>
                    <img src={six} alt='one'/>
                    <div className='text-[25px] w-[50%] text-center'>Democratizing art globally</div>
                </div>
            
        </div>
    )
}

export default Options