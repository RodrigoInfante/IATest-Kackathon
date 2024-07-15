import { DescriptionHome } from "@/components/DescriptionPage/DescriptionHome";
import { DropZone } from "@/components/DropZone/DropZone";
import { Tag } from "@/components/Tag/Tag";
import { TitlePage } from "@/components/TitlePage/TitlePage";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  pt-10 px-5 md:px-20 pb-4">
      <div className="flex flex-col gap-8 lg:flex-row justify-between pt-20 items-center ">
        <div className=" flex flex-col gap-7 max-w-[430px]">
          <TitlePage> IA Test</TitlePage>
          <DescriptionHome>
            Comienza a estudiar ya, comprueba lo q has aprendido a partir de 
            una documentación en archivos <Tag color="text-[#2196f3]">word</Tag> o <Tag color="text-[#ffcc50]">pdf</Tag>, te generamos exámenes a tipo test
            fáciles de entender, con estadísticas de tus resultados, Suerte!!!  
          </DescriptionHome>
        </div>
        <DropZone />
      </div>
      
    </main>
  );
}
