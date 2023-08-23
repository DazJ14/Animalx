import PropTypes from "prop-types";
import { styled } from "styled-components";
import Container from "../generalComponents/Container";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledNavigationLayout = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.isScrolled ? "white" : "transparent")};
  position: fixed;
  z-index: 10;
  border-bottom: ${(props) =>
    props.isScrolled ? "1px solid #5a3d2b" : "none"};
  padding: ${(props) => (props.isScrolled ? "1rem 0" : "2rem 0")};
  box-shadow: ${(props) =>
    props.isScrolled
      ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
      : "none"};

  transition-duration: 0.3s;

  @media (max-width: 900px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NavContainer = styled(Container)``;

const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;

  a {
    color: #5a3d2b;
    text-decoration: none;
  }
`;

const NavigationList = styled.ul`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 700px) {
    display: none;
  }

  .navigation-item {
    padding: 8px 0;
    text-decoration: none;
    color: #5a3d2b;
    border-radius: 0.4rem;
    transition-duration: 0.2s;

    &:hover {
      color: #e5781e;
    }
  }
`;

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navigation-button {
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 100%;
    width: 34px;
    height: 34px;
    padding: 8px;
    display: none;
    cursor: pointer;
    transition-duration: 200ms;

    &:hover {
      background-color: lightgray;
    }

    @media (max-width: 700px) {
      display: block;
    }

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const MobileNav = styled.nav`
  background-color: ${(props) => (props.mobileOpen ? "white" : "transparent")};
  z-index: -1;
  position: fixed;
  padding-top: ${(props) => (props.isScrolled ? "64px" : "96px")};
  top: 0;
  left: 0;
  display: none;
  width: inherit;
  height: ${(props) => (props.mobileOpen ? "130px" : "0px")};
  overflow: hidden;
  transition-duration: 0.2s;

  @media (max-width: 700px) {
    display: block;
  }

  a {
    display: block;
    color: black;
    text-decoration: none;
    z-index: inherit;
    width: 100%;
    font-size: 1rem;
    font-weight: normal;
    z-index: inherit;
    padding: 0.8rem 0;
    transition-duration: 150ms;

    &:hover {
      background-color: #ffd16f;
    }
  }

  li {
    box-sizing: content-box;
    height: auto;
    z-index: inherit;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgray;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const NavigationLayout = ({ isScrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobileNav = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledNavigationLayout isScrolled={isScrolled}>
      <NavContainer>
        <HeaderLayout>
          <HeaderTitle>
            <Link to="/">Animalx</Link>
          </HeaderTitle>
          <nav>
            <NavigationList>
              <li>
                <Link to="/Animalx" className="navigation-item">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/Animalx/about" className="navigation-item">
                  Sobre Nostros
                </Link>
              </li>
              <li>
                <Link to="/Animalx/services" className="navigation-item">
                  Servicios
                </Link>
              </li>
            </NavigationList>
          </nav>
          <button className="navigation-button" onClick={openMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </HeaderLayout>
      </NavContainer>
      <MobileNav isScrolled={isScrolled} mobileOpen={mobileOpen}>
        <ul>
          <li>
            <Link onClick={openMobileNav} to="/Animalx">
              Inicio
            </Link>
          </li>
          <li>
            <Link onClick={openMobileNav} to="/Animalx/about">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link onClick={openMobileNav} to="/Animalx/services">
              Servicios
            </Link>
          </li>
        </ul>
      </MobileNav>
    </StyledNavigationLayout>
  );
};

NavigationLayout.propTypes = {
  isScrolled: PropTypes.Boolean,
};

export default NavigationLayout;
