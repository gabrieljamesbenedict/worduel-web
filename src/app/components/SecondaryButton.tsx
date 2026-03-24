
const SecondaryButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black border-black border-3 text-2xl px-4 py-2 min-w-50 rounded-full cursor-pointer"
      >
      {children}
    </button>
  )
}

export default SecondaryButton