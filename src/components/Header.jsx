import logo from "@/assets/logo.svg"

const Header = () => {
  return (
    <div className="header absolute px-8 py-4 w-full">
      <img src={logo} alt="logo" className="h-10" />
    </div>
  )
}

export default Header
