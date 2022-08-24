import React from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import logo from 'assets/images/webp/logo.webp';

// Styles
import {
  Wrapper,
  LogoBtn,
  Image,
  Container,
  ValidateLink,
  Anchor,
} from './styled';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoBtn onClick={() => navigate('/', { replace: true })}>
        <Image src={logo} alt="logo" />
      </LogoBtn>
      <Container>
        <ValidateLink to="/validate-link">Validate link</ValidateLink>
        <Anchor href={`${process.env.REACT_APP_API_URL}/api-docs`}>docs</Anchor>
      </Container>
    </Wrapper>
  );
};

export default Header;
