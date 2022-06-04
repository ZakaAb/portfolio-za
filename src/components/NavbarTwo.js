import Logo from '../assets/img/logo.svg'

const NavBarTwo = () => {
  return (
    <header class=" bg-neutral-900">
      <div class="flex items-center justify-between px-10 py-4 container mx-auto">
        {/*  <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
          width="50"
          alt="Daily Dev Tips Logo"
        /> */}
        <img src={Logo} width="75" alt="default" class="bg-neutral-900" />

        {/* <strong class="text-white tracking-widest text-xl">
          ZACK'S WEBSITE
        </strong> */}
        <nav class="sm:block hidden">
          <a class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase">
            Skills
          </a>
          <a class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase">
            Technologies
          </a>
          <a class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default NavBarTwo
