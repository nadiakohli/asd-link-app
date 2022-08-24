import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 34px;

  @media screen and (max-width: 1280px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 21px;
  }

  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & ${Paragraph}, ${H2} {
    margin: 10px;
    font-family: 'Inter-Medium', sans-serif;
  }
`;

export const Image = styled.img`
  width: 350px;

  @media screen and (max-width: 1280px) {
    width: 275px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 480px) {
    width: 225px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;
