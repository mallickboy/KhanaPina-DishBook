import { NavLink } from "react-router-dom";

const Header = () => {
    const activeLinkStyles = "text-white font-bold";
    const defaultLinkStyles = "text-white hover:font-bold transition-all duration-300";

    const links = ["Home", "Explore", "Add Shop", "Gossip", "Photography Contest", "Feedback"];
    const routes = ["/", "/explore", "/add-shop", "/gossip", "/photography-contest", "/feedback"];

    return (
        <header className="flex justify-end absolute top-0 w-full z-10 pr-10 pt-3 gap-x-8">
            {links.map((link, index) => {
                return (
                    <NavLink
                        key={link}
                        to={routes[index]}
                        className={({ isActive }) => isActive ? activeLinkStyles : defaultLinkStyles}
                    >
                        {link}
                    </NavLink>
                )
            })}
        </header>
    );
};

export default Header;