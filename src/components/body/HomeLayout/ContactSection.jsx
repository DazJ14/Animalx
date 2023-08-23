import { styled } from "styled-components";
import Container from "../../generalComponents/Container";
import Line from "../../generalComponents/Line";
import Title from "../../generalComponents/Title";
import Button from "../../generalComponents/Button";
import imageItem1 from "../../../assets/gatitoBonito.jpg";
import imageItem2 from "../../../assets/perritoDormido.jpg";

const StyledContactSection = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
`;

const ContactContainer = styled(Container)`
  box-sizing: border-box;
  padding: 90px 0;

  @media (max-width: 900px) {
    padding: 90px 1rem;
  }
`;

const ContactLine = styled(Line)`
  width: 100%;
  height: 1px;
`;

const ContactBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 90px 0;

  @media (max-width: 900px) {
    display: block;
  }
`;

const ContactFormWrapper = styled.form`
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  border-bottom: 1px solid #fbba00;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const ContactImages = styled.aside`
  width: 65%;
  height: 400px;

  @media (max-width: 900px) {
    margin-top: 2rem;
    width: 100%;
    height: auto;
  }
`;

const ImageItem = styled.img`
  width: 49%;
  height: 100%;
  object-fit: cover;
  margin-left: 2%;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

const FormDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.65);
`;

const EmailInput = styled.input`
  font-size: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid lightgray;
  outline: none;
`;

const Quote = styled.blockquote`
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ContactSection = () => {
  return (
    <StyledContactSection>
      <ContactContainer>
        <ContactLine />
        <ContactBody>
          <ContactFormWrapper>
            <Line />
            <Title>Contacto</Title>
            <FormDescription>
              Confía en nosotros para el cuidado de tus mascotas. Contáctanos
              para consultas y citas. ¡Amamos a los animales tanto como tú!
            </FormDescription>
            <EmailInput type="email" placeholder="Introducir email" />
            <Button>Enviar</Button>
          </ContactFormWrapper>
          <ContactImages>
            <ImageItem src={imageItem1} />
            <ImageItem src={imageItem2} />
          </ContactImages>
        </ContactBody>
        <Quote>
          Cuidando a tus <Bold>compañeros peludos</Bold>, latido a latido.
        </Quote>
      </ContactContainer>
    </StyledContactSection>
  );
};

export default ContactSection;
