/* eslint-disable react/prop-types */
import UseMenuAnimation from "../../utils/useMenuAnimation";
import MobileNavigationOverlay from "./MobileMenuOverlay";
import MobileNavigationMenu from "./MobileNavigationMenu";

const MobileNavigation = ({ toggleMenu, isMenuOpen }) => {
  const mobileMenuScope = UseMenuAnimation(isMenuOpen)

  return (
    <div ref={mobileMenuScope}>
      <MobileNavigationMenu toggleMenu={toggleMenu}/>
      <MobileNavigationOverlay /> 
    </div>
  );
}

export default MobileNavigation;
