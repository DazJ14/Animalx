import { styled } from "styled-components";
import Container from "../generalComponents/Container";
import image1 from "../../assets/gatonaranja.jpg";
import image2 from "../../assets/pugNegro.jpg";
import image3 from "../../assets/rabbit.jpg";
import image4 from "../../assets/gatitoBonito.jpg";

const StyledServices = styled.section`
  width: 100%;
  height: 100vh;
  padding: 88px 0;
  background-color: #fdf9e3;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    height: auto;
  }
`;

const ServicesContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1100px) {
    display: block;
  }
`;

const Card = styled.article`
  position: relative;
  width: 45%;
  height: 40%;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 16px -16px 0px 0px ${(props) => props.bgcolor};
  gap: 1rem;

  @media (max-width: 1100px) {
    width: 60%;
    margin: 60px auto;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  img {
    width: 100px;
    border-radius: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  h1 {
    font-size: 2.5rem;

    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;

    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <ServicesContainer>
        <Card bgcolor="#fbba00">
          <img src={image1} alt="" />
          <h1>Veterinaria</h1>
          <p>
            Nuestra atención médica experta asegura que tus mascotas estén
            siempre saludables y felices. Confía en nosotros.
          </p>
        </Card>
        <Card bgcolor="#5a3d2b">
          <img src={image2} alt="" />
          <h1>Albergue</h1>
          <p>
            Un hogar temporal lleno de amor. Cuidamos a los animales sin hogar
            hasta encontrarles una familia amorosa.
          </p>
        </Card>
        <Card bgcolor="#e3781e">
          <img src={image3} alt="" />
          <h1>Baño</h1>
          <p>
            Renovamos a tus amigos peludos con baños relajantes y estilizados.
            Aseguramos que se vean y sientan geniales.
          </p>
        </Card>
        <Card bgcolor="#352622">
          <img src={image4} alt="" />
          <h1>Spa</h1>
          <p>
            El mimo que se merecen. Nuestro spa mimará a tus mascotas con
            tratamientos de lujo para un pelaje radiante.
          </p>
        </Card>
      </ServicesContainer>
    </StyledServices>
  );
};

export default Services;
