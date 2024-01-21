import Image from 'next/image'
import DUYsvg from '../static/DUY.svg'
import myAvatar from '../static/avatar.png'
import zalobg from '../static/zalobg.png'
import zalotext from '../static/ZALO.png'
import { clsx } from 'clsx'
import useWindowDimensions from '@/hooks/useDimension'

export default function Home() {
  return (
    <main className={clsx("flex min-h-screen flex-col items-center justify-between")}>
      <article className={clsx('w-full h-svh flex items-center justify-center gap-32', `bg-[url('../static/background.png')]`, "bg-no-repeat bg-center bg-cover")}>
        <div className='h-full flex flex-row gap-24 px-8 w-fit flex-1'>
          <div className='flex items-end'>
            <Image alt='DUY' src={DUYsvg} width={120}/>
          </div>
          <div className='flex items-start'>
          <Image alt='DUY' src={DUYsvg} width={120} style={{
            transform: "scaleY(-1)"
          }}/>
          </div>
        </div>
        <div className='flex justify-start items-start flex-1'>
          <div className='flex flex-col items-end text-white text-xl gap-2'>
            <Image src={myAvatar} alt="my-avatar" width={240} height={240}/>
            <div>HEY, I&apos;M <span style={{color: 'var(--color-accent)'}}>DUY</span></div>
          </div>
        </div>
      </article>
      <article className='w-full h-svh flex items-center justify-center'>
        <div id="test" className='w-full h-full text-black flex justify-center items-center absolute' style={{background: 'var(--color-accent)'}}>
          <div className='flex flex-col w-3/4 gap-2'>
            <p className='text-xs'>about me</p>
            <p className='uppercase text-xl'>I&apos;m Duy, your go-to web developer. I create websites so smooth, they make butter jealous. Passionate about crafting awesome user experiences, I&apos;m on a mission to make the internet a better place. Let&apos;s build something cool together! 🚀</p>
          </div>
        </div>
        <div className='w-full h-full bg-black text-white flex justify-center items-center'>
          <div className='flex flex-col w-3/4 gap-2'>
            <p className='text-xs'>about me</p>
            <p className='uppercase text-xl'>I&apos;m Duy, your go-to web developer. I create websites so smooth, they make butter jealous. Passionate about crafting awesome user experiences, I&apos;m on a mission to make the internet a better place. Let&apos;s build something cool together! 🚀</p>
            </div>
        </div>
        <div></div>
      </article>
      <article className='w-full h-fit flex flex-col items-center justify-center bg-black'>
          <div className='grid grid-cols-10 grid-rows-7 w-full gap-5 text-black' style={{height: "70svh"}}>
            <div className='col-start-2 col-end-6 bg-white row-start-1 row-end-3 rounded-xl flex items-center justify-center text-3xl text-[#006AF5]'>
              <Image src="https://stc-zaloprofile.zdn.vn/pc/v1/images/logo.svg" alt="Zalo logo" width={150} height={100}/>
            </div>
            <div className='col-start-2 col-end-6 bg-white row-start-3 row-end-8 rounded-xl flex flex-col justify-end p-4 gap-2'>
              <div className='flex flex-col font-semibold'>
                <p className='text-xl'>2022-2024</p>
                <p className=' text-4xl'>SWE at Zalo</p>
              </div>
              <div className='flex flex-col font-extralight text-xs gap-2' style={{fontFamily: 'MonumentLight'}}>
                <p>#UI/UX #Feature building</p>
                <p>#Core SE logic</p>
              </div>
              <div className='text-3xl font-semibold'>↗</div>
            </div>
            <div className='col-start-6 col-end-10 bg-white row-start-1 row-end-8 rounded-xl flex justify-center relative'>
              <div className='relative w-full'>
                <Image
                  alt='Zalo'
                  src={zalobg}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='absolute w-full h-full opacity-8' style={{zIndex: 1}}>
              <Image
                    alt='Zalo'
                    src={zalotext}
                    layout='fill'
                    objectFit='contain'
                  />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-10 w-full gap-5 mt-4' style={{height: "50svh"}}>
            <div className='col-start-2 col-end-5 h-full bg-white rounded-xl flex justify-center relative'></div>
            <div className='col-start-5 col-end-8 h-full bg-red-50 rounded-xl flex justify-center relative'></div>
            <div className='col-start-8 col-end-10 h-full bg-blue-100 rounded-xl flex justify-center relative'></div>
          </div>
          <div className='grid grid-cols-10 w-full gap-5 mt-4' style={{height: "60svh"}}>
            <div className='col-start-2 col-end-6 row-span-5  h-full bg-white rounded-xl flex justify-center relative'></div>
            <div className='col-start-6 col-end-8 row-span-5 h-full bg-red-50 rounded-xl flex justify-center relative'></div>
            <div className='col-start-8 col-end-10  row-start-1 row-end-3 bg-blue-200 rounded-xl flex justify-center relative'></div>
            <div className='col-start-8 col-end-10 row-start-3 row-end-6 h-full bg-blue-300 rounded-xl flex justify-center relative'></div>
          </div>
      </article>
      <article className='w-full h-svh flex items-center justify-center'>
        <div className='w-full h-full bg-black text-white flex justify-center items-center'>
          <div className='flex flex-col w-3/4 gap-2'>
            <p className='text-xs'>about me</p>
            <p className='uppercase text-xl'>I&apos;m Duy, your go-to web developer. I create websites so smooth, they make butter jealous. Passionate about crafting awesome user experiences, I&apos;m on a mission to make the internet a better place. Let&apos;s build something cool together! 🚀</p>
            </div>
        </div>
        <div></div>
      </article>
    </main>
  )
}
