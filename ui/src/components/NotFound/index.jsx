import React from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import notFoundImage from 'assets/images/webp/cuteCat.webp';

// Styles
import { Button } from 'components/styled';

import {
  Wrapper,
  Image,
  H2,
  Paragraph,
} from './styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image src={notFoundImage} alt="404 not found" />
      <H2>Not Found</H2>
      <Paragraph>
        The page you are looking for doesn&apos;t exist or an other error occurred.
      </Paragraph>
      <Button primary type="button" onClick={() => navigate('/', { replace: true })}>Go home</Button>
    </Wrapper>
  );
};

export default NotFoundPage;
