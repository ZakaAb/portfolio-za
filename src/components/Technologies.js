import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { SiAnsible } from 'react-icons/si'

const Technologies = () => {
  return (
    <section class="flex justify-center items-center flex-col bg-neutral-900 p-24">
      <h1 class="text-2xl uppercase font-semibold text-white mb-10">
        Technologies
      </h1>
      <div class="flex flex-wrap justify-between items-center ">
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss
            class="text-6xl"
            style={{ color: 'rgb(56, 189, 248)' }}
          />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <FaReact class="text-6xl  " style={{ color: '#61dafb' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiAnsible class="text-6xl text-white " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <FaDocker class="text-6xl" style={{ color: '#2496ed' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiTailwindcss class="text-6xl text-red-600 " />
        </div>
      </div>
    </section>
  )
}

export default Technologies
