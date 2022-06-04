const SkillItem = ({ title, text, icon: Icon }) => (
  <div class="flex flex-col items-center justify-center text-center md:w-1/3 px-5">
    <Icon class="text-6xl text-red-600" />
    <h1 class="text-2xl uppercase font-semibold text-red-600 py-4">{title}</h1>
    <p class="slate-800">{text}</p>
  </div>
)

export default SkillItem
