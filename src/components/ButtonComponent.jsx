export default function ButtonComponent(name, style) {
  return (
    <button className={`${style}`}>
     <span>{name}</span>
    </button>
  )
}