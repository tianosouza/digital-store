export default function ButtonComponent({name, style}) {
  return (
    <button className={`${style} w-40 h-13 bg-white-color rounded-lg text-black font-bold text-xs flex items-center justify-center cursor-pointer`}>
     <span>{name}</span>
    </button>
  )
}