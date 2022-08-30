import Navitem from "./Navitem";


const links = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "Products",
        to: "/products"
    },
    {
        label: "TaskManager",
        to: "/task-manager"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Contact",
        to: "/contact"
    },
];

function Navbar (){
    return(
        <nav className="flex justify-between bg-violet-600  text-white py-5 px-20 shadow-md">
            <h3>RuPhil Rental</h3>
            <ul className="flex gap-5">
                {
                    links.map((link, index) => (
                    <Navitem key={index} label = {link.label} to={link.to} />))
                }
            </ul>
        </nav>
    );
}

export default Navbar;