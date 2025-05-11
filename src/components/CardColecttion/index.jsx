import ButtonComponent from "../ButtonComponent"

export default function CardCollection() {
  return (
    <div className="bg-info-color w-[25rem] h-[15rem] rounded-2xl dark:bg-color-secondary-dark  dark:text-gray-100 flex flex-col">
      <div className="bg-offer-color w-[7rem] h-[2.5rem] pt-3 pb-3 pr-6 pl-6 text-xs text-black font-bold flex items-center justify-center rounded-4xl">
        30% off
      </div>
      <span className="text-black font-bold text-3xl ml-6 mt-4 w-[15rem]">
        Novo drop Supreme
      </span>
      <ButtonComponent name="Compra" />
    </div>
  )
}