import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    max-width: 1000px;
  }

  @media (max-width: 1100px) {
    max-width: 800px;
  }

  @media (max-width: 900px) {
    max-width: 600px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default Container;
