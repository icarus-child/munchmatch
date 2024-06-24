export default function SwipeButton({ className = "", children }: {className: string, children: any}) {
  className += " text-[3.2em]"
  return (
    <button className={className}
    >
      {children}
    </button>
  )
}
