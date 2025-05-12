import instance from "@/api/instance";
import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuTrash2 } from "react-icons/lu";
import { PiNotePencilDuotone } from "react-icons/pi";

export default function Filme() {
  const router = useRouter();
  const { id } = router.query;
  const [filme, setFilme] = useState({})

  useEffect(() => {
      async function getFilmeById(){
        const response = await instance.get(`/api/movies/${id}`)
        setFilme(response.data)
      }
     
      if(id){
        getFilmeById()
      }
  }, [])

  return (
    <PageWrapper showHeader={false}>
      <div className="w-full h-full min-h-screen flex flex-col px-[350px] pt-12 items-start">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center rounded-lg
            hover:bg-[#27282B] hover:text-[#8F7BD8]"
        >
          <LuArrowLeft />
          <p>Voltar para lista de filmes</p>
        </button>
        <div className="w-full min-h-[90vh] flex">
          <div className="w-[40%] h-full flex flex-col">
            <div className="w-full h-[90%]">
              <img
                className="w-full h-full rounded-lg object-cover"
                src="https://th.bing.com/th/id/OIP.P9m_EEu3DJdimJuLGjt1fgHaLH?w=121&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </div>
            <div className="w-full flex h-[10%] pt-4 justify-between">
              <button className="w-[46%] h-full border border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20
                flex items-center justify-center gap-2 py-2">
                <PiNotePencilDuotone size={20} /> Editar filme
              </button>
              <button className="w-[46%] h-full border border-[#ef444433] text-[#ef4444]
              hover:bg-[#ef4444]/20
              rounded-md flex items-center justify-center gap-2 py-2"
              >
                <LuTrash2 size={20} /> Excluir filme</button>
            </div>
        </div>
          <div className="w-[70%] pl-4 h-full flex flex-col">
            <div className="w-full flex gap-2 items-baseline">
                <h1 className="text-[35px] text-[#9B87F5] font-bold">Coraline</h1>
                <p className="text-[#8a898c] font-semibold text-[17px]">(2009)</p>
            </div>
            <div className="w-full gap-4 flex">
                <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                    <p className="text-[17px]">10/10</p>
                </div>
                <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                    <p className="text-[17px]">Terror</p>
                </div>
            </div>
            <div className="w-full flex flex-col mt-8">
                <h4 className="font-bold text-[20px]">Diretor</h4>
                <p className="text-[#8a898c]">Henry Selick</p>
            </div>
            <div className="w-full flex flex-col mt-8">
                <h4 className="font-bold text-[20px]">Sinopse</h4>
                <p className="text-[#8a898c]">Henry Selick</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
