import { NavLink } from "react-router-dom";

interface Props {
  handleContact: () => void;
  closeMenu: () => void;
}

const NavItems = ({ handleContact, closeMenu }: Props) => {
  return (
    <>
      <NavLink onClick={closeMenu} to="/">
        Home
      </NavLink>
      <NavLink onClick={closeMenu} to="/photography">
        Photography
      </NavLink>
      {/* <NavLink onClick={closeMenu} to="/videography">
        Videography
      </NavLink>
      <NavLink onClick={closeMenu} to="/advertising">
        Advertising
      </NavLink>
      <NavLink onClick={closeMenu} to="3d">
        3D Renders
      </NavLink>
      <NavLink onClick={closeMenu} to="about">
        About
      </NavLink> */}
      <button className="button-outline-red" onClick={handleContact}>
        Contact Us
      </button>
    </>
  );
};

export default NavItems;
