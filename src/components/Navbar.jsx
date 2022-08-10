import Navitem from "./Navitem";


function Navbar (){
    return(
        <nav className="flex justify-between py-5 px-20 shadow-md">
            <h3>Hostel Rental</h3>
            <ul className="flex gap-5">
                <Navitem menu="Home" />
                <Navitem menu="Product" />
                <Navitem menu="Service" />
                <Navitem menu="About" />
                <Navitem menu="Contact" />
            </ul>
        </nav>
    );
}

export default Navbar;