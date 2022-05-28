export default function Navbar() {
  return (
    <div class="bg-slate-800 flex justify-between items-center px-4 py-2">
      <div class="text-gray-50 tracking-widest text-2xl border-2 px-2 py-1 rounded-md">
        ZACK
      </div>
      {/* <div class="flex justify-end items-center"> */}
      <nav>
        <div class="text-gray-50 py-3 tracking-wide mx-4 border-b-2">
          Skills
        </div>
        <div class="text-gray-50 py-3 tracking-wide border-b-2">Contact</div>
      </nav>
      {/* </div> */}
    </div>
  )
}
