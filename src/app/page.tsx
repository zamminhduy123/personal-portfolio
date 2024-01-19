import Image from 'next/image'
import { clsx } from 'clsx'

export default function Home() {
  return (
    <main className={clsx("flex min-h-screen flex-col items-center justify-between", `bg-[url('../static/background.png')]`, "bg-no-repeat bg-center bg-cover")}>
    </main>
  )
}
