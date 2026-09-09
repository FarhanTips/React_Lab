
import logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav className="bg-amber-100">
            <div className="flex justify-between w-10/12 mx-auto">
                <img src={logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Scheduels</a></li>
                </ul>

            </div>
        </nav>
    );
};

export default Nav;