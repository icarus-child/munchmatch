import './hamburger.css'

export default function HamburgerMenu() {
  return (
    <div className="w-[1.2em] flex flex-col justify-around md:hidden">
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </div>
  )
}
