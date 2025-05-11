import CardCollection from "../../CardColecttion";

export default function CollectionHighlight() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <h1 className="text-black font-bold ml-[8rem] mt-2">Coleções em destaque</h1>
      <div className="flex ml-[8rem]">
        <CardCollection />
      </div>
    </div>
  );
}