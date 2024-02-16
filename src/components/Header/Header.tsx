"use client"
import { Button } from '@/ui/components/Button'
import React from 'react'
import TurnText from '../TurnText'

const Header = () => {

    return (
        <div className='h-16 flex justify-between fixed w-full text-white z-10' style={{
            background: "linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0.00) 100%)",
        }}>
            <div
                className='h-100 flex justify-center items-center ml-4 text-base font-semibold cursor-pointer'
                style={{
                    color: "var(--color-accent)"
                }}
                onClick={() => {document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}}
            >
                DUY.NGUYEN
            </div>
            <div className='grid grid-cols-2 items-center pr-4' style={{ fontSize: 9 }}>
                <div className='col-start-1 flex justify-center px-4'>
                    <TurnText text="about" onClick={() => document.getElementById("about-me-section")?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })} />
                </div>
                <div className='col-start-2 text-center px-4'>
                    <TurnText text={<>selected<br />works</>} onClick={() => document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" })} />
                </div>
                {/* <div className='col-start-3 col-span-2 flex justify-center px-4'>
                    <Button variant="contained" size='sm' className='w-full' onClick={() => {}}>Hey</Button>
                </div> */}
            </div>
        </div>
    )
}

export default Header