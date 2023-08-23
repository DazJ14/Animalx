import { styled } from "styled-components";
import Title from "../../generalComponents/Title";
import Container from "../../generalComponents/Container";
import Button from "../../generalComponents/Button";
import dogHome from "../../../assets/cute-dog.png";
import vet from "../../../assets/veterinario.png";
import baño from "../../../assets/bano-de-mascotas.png";
import albergue from "../../../assets/albergue.png";
import peluqueria from "../../../assets/peluqueria.png";

const StyledWelcomeSection = styled.section`
  height: calc(100vh + 90px);
  background-color: #fdf9e3;
  padding-top: 88px;
  box-sizing: border-box;
`;

const HomeImg = styled.img`
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.3));
  @media (max-width: 1100px) {
    right: 50%;
    transform: translateX(60%);
  }
`;

const WelcomeContainer = styled(Container)`
  box-sizing: inherit;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 90px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: inherit;
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
    height: 45%;
  }
`;

const TitleWrapper = styled(Wrapper)`
  text-align: left;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const Subtitle = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 1100px) {
    font-size: 1rem;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 180px;
  bottom: -90px;

  @media (max-width: 900px) {
    justify-content: space-evenly;
    row-gap: 10%;
  }
`;

const Box = styled.article`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: inherit;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 2px 30px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 900px) {
    width: 35%;
    height: 45%;
  }
`;

const BoxImage = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
  }
`;

const BoxTitle = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <WelcomeContainer>
        <TitleWrapper>
          <Title>
            Bienvenidos a Animalx: <br />
            Donde los Sueños Peludos se Hacen Realidad
          </Title>
          <Subtitle>
            Cuidando, Curando y Adoptando a Nuestros Amigos de Cuatro Patas
          </Subtitle>
          <Button>Explorar más</Button>
        </TitleWrapper>
        <Wrapper>
          <HomeImg src={dogHome} alt="" />
        </Wrapper>
        <BoxWrapper>
          <Box>
            <BoxImage src={vet} />
            <BoxTitle>Veterinaria</BoxTitle>
          </Box>
          <Box>
            <BoxImage src={baño} />
            <BoxTitle>Baño</BoxTitle>
          </Box>
          <Box>
            <BoxImage src={albergue} />
            <BoxTitle>Albergue</BoxTitle>
          </Box>
          <Box>
            <BoxImage src={peluqueria} />
            <BoxTitle>Peluqueria</BoxTitle>
          </Box>
        </BoxWrapper>
      </WelcomeContainer>
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
