import { styled } from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  background-color: #fbba00;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 3px 3px 12px 2px rgba(0, 0, 0, 0.3);
  transition-duration: 0.2s;

  &:hover {
    background-color: #ebac00;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export default Button;
