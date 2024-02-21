import { styled } from "styled-components";
import Container from "../../generalComponents/Container";
import Line from "../../generalComponents/Line";
import pug from "../../../assets/pugNegro.jpg";
import gatoNaraja from "../../../assets/gatonaranja.jpg";
import rabbit from "../../../assets/rabbit.jpg";
import perrosentado from "../../../assets/perroSentado.jpg";

const StyledServicesSection = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfcf0;

  @media (max-width: 1100px) {
    height: auto;
    padding: 0 1rem;
  }
`;

const ServicesContainer = styled(Container)`
  box-sizing: inherit;
  padding: 120px 0;
  display: flex;

  @media (max-width: 1100px) {
    display: block;
    height: auto;
  }
`;

const Service = styled.article`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1100px) {
    height: auto;
    margin-top: 3rem;
    &:first-of-type {
      margin-top: 0;
    }
  }

  @media (max-width: 700px) {
    height: auto;
    display: block;
    margin-top: 5rem;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  @media (max-width: 1100px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ServiceImage = styled.img`
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 16px -16px 0px 0px ${(props) => props.bgcolor};
  border: 4px solid white;

  @media (max-width: 1100px) {
    height: 100px;
  }

  @media (max-width: 700px) {
    display: block;
    margin: 0 auto;
  }
`;

const ServiceWrapper = styled.aside`
  box-sizing: border-box;
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: start;
  text-align: left;

  @media (max-width: 1100px) {
    height: auto;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: black;

  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: black;
  line-height: 1.5;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <ServicesContainer>
        <ArticlesWrapper>
          <Service>
            <ServiceImage src={pug} alt="" bgcolor="#fbba00" />
            <ServiceWrapper>
              <Line />
              <ServiceTitle>Cuidado Veterinario Excepcional</ServiceTitle>
              <ServiceDescription>
                Nuestro equipo de profesionales altamente capacitados está
                comprometido con la salud y el bienestar de tus mascotas. Desde
                exámenes médicos exhaustivos hasta tratamientos personalizados,
                tu amigo peludo estará en las mejores manos.
              </ServiceDescription>
            </ServiceWrapper>
          </Service>
          <Service>
            <ServiceImage src={gatoNaraja} alt="" bgcolor="#5a3d2b" />
            <ServiceWrapper>
              <Line />
              <ServiceTitle>Spa y Peluquería de Mascotas</ServiceTitle>
              <ServiceDescription>
                Mimos y relajación esperan a tus compañeros en nuestro spa de
                mascotas. Desde baños relajantes hasta estilos de moda,
                aseguramos que luzcan y se sientan como auténticos reyes y
                reinas.
              </ServiceDescription>
            </ServiceWrapper>
          </Service>
          <Service>
            <ServiceImage src={rabbit} alt="" bgcolor="#e3781e" />
            <ServiceWrapper>
              <Line />
              <ServiceTitle>Albergue Cálido y Acogedor</ServiceTitle>
              <ServiceDescription>
                No hay un lugar como el hogar, pero en nuestro albergue
                encontrarán un refugio amoroso mientras esperan su familia para
                siempre. Brindamos atención, juegos y amor constante para cada
                peludito sin hogar.
              </ServiceDescription>
            </ServiceWrapper>
          </Service>
        </ArticlesWrapper>
        <ImageWrapper>
          <img src={perrosentado} alt="" />
        </ImageWrapper>
      </ServicesContainer>
    </StyledServicesSection>
  );
};

export default ServicesSection;
