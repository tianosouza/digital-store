export default function ButtonComponent(name, style) {
  return (
    <button className={`${style} bg-info`}>
     <span>{name}</span>
    </button>
  )
}