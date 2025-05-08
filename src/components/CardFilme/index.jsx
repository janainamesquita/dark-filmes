export default function CardFilme(){
    return (
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img
                    className="w-full h-full rounded-t-lg object-cover"
                    src="https://th.bing.com/th/id/OIP.PNN86d60qM6mWzbcP7R8CwHaEK?w=307&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7"
                    alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold">Coraline</p>
                <p className="text-[15px] text-[#8a898c]">Henry Selick</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">2009</p>
                    <div className="px-2 py-0 bg-[#8F7BD8]/20 text-[#8F7BD8] rounded-lg">Terror</div>
                </div>
            </div>
        </div>
    )
}