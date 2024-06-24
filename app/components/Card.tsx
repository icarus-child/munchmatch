import Image from 'next/image'
import testImage from '@/public/this-diner-in-storms.jpg'
import SwipeButton from '@/app/components/SwipeButton'
import { CgCloseO } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";

export default function Card() {
  return (
    <div className="bg-tile-bg rounded-3xl shadow-2xl shadow-blue-500/40 w-[323px] flex flex-col items-center pt-5 pb-2"
      style={{
        boxShadow: "0px 10px 30px 5px #00000050"
      }}
    >
      <h1 className="text-light-text text-2xl">Burger Place</h1>
      <Image className="object-cover w-[273px] h-[329px] rounded-3xl mt-5 mb-3"
        src={testImage}
        alt="Image of [restaurant-name]"
      />
      <div className="space-x-12">
        <SwipeButton className="text-reject">
          <CgCloseO />
        </SwipeButton>
        <SwipeButton className="text-accept">
          <CgCheckO />
        </SwipeButton>
      </div>
    </div>
  )
}
