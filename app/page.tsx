import { DescriptionHome } from "@/components/DescriptionPage/DescriptionHome";
import { DropZone } from "@/components/DropZone/DropZone";
import { Tag } from "@/components/Tag/Tag";
import { TitlePage } from "@/components/TitlePage/TitlePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  pt-10 lg:pt-20 px-5 md:px-20 pb-4 bg-black">
      <div className="flex flex-col gap-8 lg:flex-row justify-between pt-20 items-center ">
        <div className=" flex flex-col gap-7 max-w-[430px] lg:max-w-[600px]">
          <TitlePage> IA Test</TitlePage>
          <DescriptionHome>
            Comienza a estudiar ya, comprueba lo q has aprendido a partir de 
            una documentación en archivos 
            <span className="px-2">
              <Tag color="text-blue-400">word</Tag><br/><br/>
            </span>

            <span className="hidden lg:block text-lg text-gray-400 max-w-[430px]">
              Te generamos exámenes a tipo test
              fáciles de entender y con estadísticas de tus resultados, Suerte!!!  
            </span>
            
          </DescriptionHome>
        </div>
        <DropZone />
      </div>
    </main>
  );
}
