import { LuFilm } from "react-icons/lu";

export default function Header({ showButton = true }){
    return ( 
        <header className="w-full h-[75px] flex bg-[#0C0F15] justify-between pr-2 items-center">
            <div 
            onClick={() => window.location.href = "/"}
            className="flex cursor-pointer h-full gap-2 items-center justify-center pl-2">
                <LuFilm color="#9B87F5" size={28}/>
                <h2 className="font-bold text-[20px]">Dark Films</h2>
            </div>
            {showButton && (
                <button
                onClick={() => window.location.href = "/cadastrar"}
                className="w-[150px] h-[60%] rounded-md
                 bg-[#9B87F5] font-bold hover:bg-[#9B87F5]/70 cursor-pointer">Adicionar Filme</button>  
            )}
        </header>
    )
}