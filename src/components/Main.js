import { useEffect, useState } from 'react'
import laptopWithHand from '../assets/img/programming.svg'
import TextTransition, { presets } from 'react-text-transition'

const TEXTS = ['SOFTWARE DEVELOPER', 'FRONT END DEVELOPER', 'DEVOPS ENGINEER']

function Main() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <section class="bg-neutral-900">
      <div class="flex  container mx-auto p-10 space-x-10 flex-col text-center items-center md:flex-row md:text-left">
        <div class="md-3/4 flex flex-col justify-center text-white md:w-2/4">
          <h1 class="text-4xl font-semibold leading-tight md:text-6xl pb-3">
            Hi I'm <span class="text-red-600">Zakaria</span>
          </h1>
          <h2 class="text-4xl font-semibold leading-tight flex justify-center md:justify-start">
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </h2>

          <h1 class="my-4">
            In dolore in occaecat ullamco sit sint sunt anim deserunt commodo
            fugiat amet esse. Adipisicing eu id sunt occaecat cupidatat eiusmod
            tempor consequat sunt. Nisi adipisicing ea culpa consectetur cillum.
            Et nisi laboris elit enim voluptate pariatur.
          </h1>
        </div>
        <div class="w-2/4 hidden justify-center md:flex">
          <img src={laptopWithHand} />
        </div>
      </div>
    </section>
  )
}

export default Main
