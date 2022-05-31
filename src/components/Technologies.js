import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { SiAnsible } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiGit } from 'react-icons/si'

import { SiMaterialui } from 'react-icons/si'
import { FcLinux } from 'react-icons/fc'
import { SiMysql } from 'react-icons/si'
import { SiPrometheus } from 'react-icons/si'

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
          <SiJavascript class="text-6xl" style={{ color: '#f7df1e' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <FcLinux class="text-6xl" />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiGit class="text-6xl" style={{ color: '#f14e32' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiMaterialui class="text-6xl" style={{ color: '#0072E5' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <SiMysql class="text-6xl" style={{ color: '#3E6E93' }} />
        </div>
        <div class="w-20 h-14  flex-[1_0_20%] p-10">
          <a href="https://prometheus.io/" target="_blank">
            <SiPrometheus class="text-6xl" style={{ color: '#e6522c' }} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Technologies
