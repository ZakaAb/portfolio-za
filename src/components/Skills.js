import { MdOutlineLocalPolice } from 'react-icons/md'
import { MdFlutterDash } from 'react-icons/md'
import { MdOutlineBakeryDining } from 'react-icons/md'
import SkillItem from './SkillItem'

const data = [
  {
    id: 1,
    icon: MdOutlineLocalPolice,
    title: 'Software Engineering',
    text: 'Staying ahead of the technology curve, we cover front-end, backend, and full-stack development. Get an advanced and easily-maintainable product that grants high responsiveness and a smooth user journey.',
  },
  {
    id: 2,
    icon: MdFlutterDash,
    title: 'DevOps',
    text: 'Optimize your project infrastructure to make it more efficient and budget-friendly while avoiding security glitches. We’ll take care of building the environment that allows scalability, handles traffic loads, and operates like clockwork.',
  },
  {
    id: 3,
    icon: MdOutlineBakeryDining,
    title: 'Project Management',
    text: 'We’ll accomplish your team with the first-class product owner who will prioritize the backlog for engineers and take care of customer satisfaction by creating user stories. With the help of the project manager.',
  },
]

function Skills() {
  return (
    <section class="bg-slate-100 flex items-center">
      <div class="container mx-auto flex flex-col md:justify-between md:flex-row py-24 md:space-x-10 space-y-10 md:space-y-0 items-center">
        {data.map((item) => (
          <SkillItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
