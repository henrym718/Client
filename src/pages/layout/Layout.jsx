import { Outlet, NavLink } from "react-router-dom";
import AvatarButtom from "./components/header/AvatarButtom";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <div>
      <header>
        <div className='flex items-center h-15 justify-between bg-slate-50 '>
          <NavLink to={"/"}>LOGO</NavLink>
          <div className='font-bold-600'></div>
          <div className='flex items-center space-x-4'>
            <NavLink to={"/profile"}>Conviertete en vendedor</NavLink>
            <NavLink to={"/next"}>Iniciar sesion</NavLink>
            <NavLink to={"/next"}>Unete</NavLink>
            <div>
              <AvatarButtom />
            </div>
          </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
