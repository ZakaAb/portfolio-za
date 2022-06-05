import Logo from '../assets/img/logo.svg'

const NavBarTwo = () => {
  const handleClick = (section) => {
    document.querySelector(`${section}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const toggleMenu = () => {
    document.getElementById('menu-btn').classList.toggle('open')
    document.getElementById('menu').classList.toggle('flex')
    document.getElementById('menu').classList.toggle('hidden')
  }
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
          <a
            class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase"
            onClick={() => handleClick('#skills')}
          >
            Skills
          </a>
          <a
            class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase"
            onClick={() => handleClick('#technologies')}
          >
            Technologies
          </a>
          <a
            class="px-4 py-2 font-bold text-white bg-transparent rounded hover:text-red-600 cursor-pointer uppercase"
            onClick={() => handleClick('#contact')}
          >
            Contact
          </a>
        </nav>

        <button
          id="menu-btn"
          class="block hamburger sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
      <nav class="sm:hidden">
        <div
          id="menu"
          class="absolute  flex-col items-center hidden z-[999] self-end pb-8 space-y-6 font-bold bg-neutral-900 text-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a
            onClick={() => handleClick('#skills')}
            class="hover:text-red-600 cursor-pointer uppercase"
          >
            Skills
          </a>
          <a
            onClick={() => handleClick('#technologies')}
            class="hover:text-red-600 cursor-pointer uppercase"
          >
            Technologies
          </a>
          <a
            onClick={() => handleClick('#contact')}
            class="hover:text-red-600 cursor-pointer uppercase"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default NavBarTwo
