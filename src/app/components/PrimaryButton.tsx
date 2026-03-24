const PrimaryButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white text-2xl px-4 py-2 min-w-50 rounded-full cursor-pointer"
      >
      {children}
    </button>
  )
}

export default PrimaryButton