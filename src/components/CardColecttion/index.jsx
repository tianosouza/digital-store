import ButtonComponent from "../ButtonComponent"

export default function CardCollection({offer, title, button, image, styleProduct}) {
  const style = "text-primary-color z-1"
  return (
    <div className="bg-info-color w-[30rem] h-[15rem] rounded-2xl flex overflow-hidden">
      <div className="flex flex-col gap-3 pt-8 pl-8">
        <div className="bg-offer-color w-[7rem] h-[2.5rem] pt-3 pb-3 pr-6 pl-6 text-xs text-black font-bold flex items-center justify-center rounded-4xl">
          {offer}
        </div>
        <span className="text-black font-bold text-3xl w-[10rem]">
          {title}
        </span>
        <ButtonComponent name={button} style={style} />
      </div>
      <img src={image} alt="product" className={`${styleProduct}`} />
    </div>
  )
}