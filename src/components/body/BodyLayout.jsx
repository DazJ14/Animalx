import PropTypes from "prop-types";
import { styled } from "styled-components";

const StyledBodyLayout = styled.main`
  width: 100%;
  background-color: white;
`;

const BodyLayout = ({ children }) => {
  return <StyledBodyLayout>{children}</StyledBodyLayout>;
};

BodyLayout.propTypes = {
  children: PropTypes.any,
  pageScrolled: PropTypes.any,
};

export default BodyLayout;
