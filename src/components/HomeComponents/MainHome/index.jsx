import SwiperComponent from "../../SwiperComponent";
import InfoMainHome from "./InfoMainHome";

export default function MainHome() {
  return (
    <div className="bg-light-gray-3-color min-h-[32.5rem] w-full dark:bg-color-secondary-dark text-gray-900 dark:text-gray-100 flex flex-col p-4">
      <div className="flex pl-8 justify-between w-full items-center gap-8">
        <div className="">
          <InfoMainHome />
        </div>
        <div className="">
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
}