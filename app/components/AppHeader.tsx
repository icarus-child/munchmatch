import { FaHeart } from "react-icons/fa6";
import HamburgerMenu from "@/app/components/HamburgerMenu"

export default function AppHeader() {
  return (
    <div className="grid grid-cols-6 bg-light-text text-dark-text-subtle text-3xl py-2 justify-items-center">
      <div className="col-start-2 col-span-4">
        <div className="flex justify-center select-none">
          <h1>Munch M</h1><FaHeart className="text-2xl mt-1.5 mr-[0.8px] text-reject" /><h1>tch</h1>
        </div>
      </div>

      <HamburgerMenu />
    </div>
  )
}
