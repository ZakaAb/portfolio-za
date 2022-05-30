import { SiTailwindcss } from 'react-icons/si'

const Technologies = () => {
    return <section class="flex justify-center items-center flex-col bg-neutral-900 p-24">
        <h1 class="text-2xl uppercase font-semibold text-white mb-10">Technologies</h1>
        <div class="flex justify-center items-center space-x-10">
            <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
             </div> 
             <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
             </div> 
             <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
            </div> 
            <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
            </div> 
            <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
            </div> 
            <div class="w-14 h-14">
                <SiTailwindcss class="text-6xl text-red-600 "/>
            </div> 
        </div>
    </section>
}

export default Technologies