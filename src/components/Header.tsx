import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className='p-3 flex justify-center'>
        <img src={Logo} alt="LOGO"  className='w-7'/>
    </header>
  )
}

export default Header