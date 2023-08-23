import { styled } from "styled-components";
import Title from "../../generalComponents/Title";
import Button from "../../generalComponents/Button";
import Line from "../../generalComponents/Line";

const StyledResumeSection = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  box-sizing: border-box;
  background-color: white;
  position: relative;
`;

const ResumeContainer = styled.div`
  padding: 210px 0 90px 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: inherit;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  position: relative;
  z-index: 0;
`;

const ResumeTitle = styled(Title)`
  font-weight: bold;
  width: 50%;
  font-size: 2rem;
  color: black;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    width: 80%;
  }
`;

const ResumeDescription = styled.p`
  width: 50%;
  font-size: 1.2rem;
  line-height: 1.5;
  color: black;

  @media (max-width: 1100px) {
    width: 80%;
  }
`;

const ResumeSection = () => {
  return (
    <StyledResumeSection>
      <ResumeContainer>
        <Line />
        <ResumeTitle>Donde los Latidos Peludos Encuentran su Hogar</ResumeTitle>
        <ResumeDescription>
          En Animalx, creemos en un mundo donde cada latido peludo encuentra
          amor, cuidado y una familia. Desde nuestros modestos comienzos como un
          refugio local hasta convertirnos en un santuario completo para
          nuestros amigos de cuatro patas, hemos dedicado nuestro corazón y alma
          a brindar atención excepcional a cada mascota que cruza nuestras
          puertas.
        </ResumeDescription>
        <Button>Aprender Más</Button>
      </ResumeContainer>
    </StyledResumeSection>
  );
};

export default ResumeSection;
