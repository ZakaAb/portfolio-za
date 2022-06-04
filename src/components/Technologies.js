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

const data = [
  {
    id: 1,
    icon: SiTailwindcss,
    color: 'rgb(56, 189, 248)',
  },
  {
    id: 2,
    icon: FaReact,
    color: '#61dafb',
  },
  {
    id: 3,
    icon: SiAnsible,
    color: '#ffffff',
  },
  {
    id: 4,
    icon: FaDocker,
    color: '#2496ed',
  },
  {
    id: 5,
    icon: SiJavascript,
    color: '#f7df1e',
  },
  {
    id: 6,
    icon: FcLinux,
    color: '',
  },
  {
    id: 7,
    icon: SiGit,
    color: '#f14e32',
  },
  {
    id: 8,
    icon: SiMaterialui,
    color: '#0072E5',
  },
  {
    id: 9,
    icon: SiMysql,
    color: '#3E6E93',
  },
  {
    id: 9,
    icon: SiPrometheus,
    color: '#e6522c',
  },
]

const TechItem = ({ icon: Icon, color }) => (
  <div class="w-20 h-14  md:flex-[1_0_20%] sm:flex-[1_0_33%] flex-[1_0_50%] p-10 flex justify-center">
    <Icon class="md:text-6xl text-5xl" style={{ color }} />
  </div>
)

const Technologies = () => {
  return (
    <section class=" bg-neutral-900">
      <div class="container mx-auto flex justify-center items-center flex-col pt-24 pb-36">
        <h1 class="md:text-4xl text-2xl uppercase font-semibold text-white mb-10">
          Technologies
        </h1>
        <div class="flex flex-wrap justify-between items-center ">
          {data.map((item) => (
            <TechItem key={item.id} icon={item.icon} color={item.color} />
          ))}

          {/*   <div class="w-20 h-14  flex-[1_0_20%] p-10">
            <a href="https://prometheus.io/" target="_blank">
              <SiPrometheus class="text-6xl" style={{ color: '#e6522c' }} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Technologies
