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
    <section class="bg-neutral-900 p-10">
      <span class=" flex container mx-auto">
        <div class="w-2/4 flex flex-col justify-center text-white">
          <h1 class="text-6xl font-semibold leading-tight">
            Hi I'm <span class="text-red-600">Zakaria</span>
          </h1>
          <h2 class="text-4xl font-semibold leading-tight">
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
        <div class="w-2/4">
          <img src={laptopWithHand} />
        </div>
      </span>
    </section>
  )
}

export default Main
