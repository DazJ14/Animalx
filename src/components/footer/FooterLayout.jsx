import { styled } from "styled-components";
import Container from "../generalComponents/Container";

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 0;
  border-top: 1px solid #fbba00;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const FooterItem = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const ListItem = styled.li`
  color: black;
  transition-duration: 0.2s;

  &:hover {
    color: #e3781e;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FooterLayout = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterItem>Animalx</FooterItem>
        <FooterItem>
          Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              fill="red"
            />
          </svg>{" "}
          by DazJ
        </FooterItem>
        <FooterSocial>
          <FooterItem>Follow me</FooterItem>
          <SocialList>
            <ListItem>
              <a
                href="https://github.com/DazJ14"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.linkedin.com/in/diego-armando-zamora-jurado-546a6b270/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </ListItem>
          </SocialList>
        </FooterSocial>
      </FooterContainer>
    </StyledFooter>
  );
};

export default FooterLayout;
