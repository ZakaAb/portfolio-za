import { MdOutlineLocalPolice } from 'react-icons/md'
import { MdFlutterDash } from 'react-icons/md'
import { MdOutlineBakeryDining } from 'react-icons/md'

function Skills() {
  return (
    <div class="bg-slate-100 flex items-center p-24">
      <span class="container mx-auto flex justify-around">
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdOutlineLocalPolice class="text-6xl text-red-600" />

          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
          Software Engineering
          </h1>
          <p class="slate-800">
          Staying ahead of the technology curve, we cover front-end, backend, and full-stack development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdFlutterDash class="text-6xl text-red-600" />
          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
            DevOps
          </h1>
          <p class="slate-800">
          Optimize your project infrastructure to make it more efficient and budget-friendly while avoiding security glitches. We’ll take care of building the environment that allows scalability, handles traffic loads, and operates like clockwork.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdOutlineBakeryDining class="text-6xl text-red-600" />
          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
          Project Management
          </h1>
          <p class="slate-800">
          We’ll accomplish your team with the first-class product owner who will prioritize the backlog for engineers and take care of customer satisfaction by creating user stories. With the help of the project manager.
          </p>
        </div>
      </span>
    </div>
  )
}

export default Skills
