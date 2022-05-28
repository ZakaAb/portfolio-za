import { MdOutlineLocalPolice } from 'react-icons/md'

function Skills() {
  return (
    <div class="bg-slate-100 flex items-center p-24">
      <span class="container mx-auto flex justify-around">
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdOutlineLocalPolice class="text-4xl text-red-600" />

          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
            Text1
          </h1>
          <p class="slate-800">
            Est ipsum velit officia qui voluptate adipisicing ea fugiat. In
            irure adipisicing fugiat adipisicing ut amet duis minim voluptate
            velit.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdOutlineLocalPolice class="text-4xl text-red-600" />
          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
            Text2
          </h1>
          <p class="slate-800">
            Adipisicing aute in ipsum adipisicing nisi aliquip ipsum duis
            nostrud officia in. Magna sit labore ipsum esse pariatur sit.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center w-1/3 px-5">
          <MdOutlineLocalPolice class="text-4xl text-red-600" />
          <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">
            Text3
          </h1>
          <p class="slate-800">
            Adipisicing aute in ipsum adipisicing nisi aliquip ipsum duis
            nostrud officia in. Magna sit labore ipsum esse pariatur sit.
          </p>
        </div>
      </span>
    </div>
  )
}

export default Skills
