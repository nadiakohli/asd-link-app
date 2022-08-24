import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    height: 85px;
  }

  @media screen and (max-width: 768px) {
    height: 75px;
  }

  @media screen and (max-width: 480px) {
    height: 65px;
  }

  @media screen and (max-width: 320px) {
    padding: 12px;
    height: 58px;
  }
`;

export const LogoBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 108px;
  height: 33px;

  @media screen and (max-width: 1280px) {
    width: 98px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 85px;
    height: 28px;
  }

  @media screen and (max-width: 480px) {
    width: 70px;
    height: 22px;
  }

  @media screen and (max-width: 320px) {
    width: 60px;
    height: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 225px;

  @media screen and (max-width: 1280px) {
    width: 215px;
  }

  @media screen and (max-width: 768px) {
    width: 185px;
  }

  @media screen and (max-width: 480px) {
    width: 175px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
  }
`;

export const ValidateLink = styled(Link)`
  cursor: pointer;
  border: none;
  background: transparent;
  text-decoration: none;
  font-family: 'Inter-Medium', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #515151;

  &:hover {
    text-decoration: underline;
    color: #5380EA;
  }

  @media screen and (max-width: 1280px) {
    font-size: 15px;
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

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: #F0B80D;
  border: 1px solid #FFD24B;
  box-shadow: 0px 10px 34px #EAC555;
  border-radius: 40px;
  font-family: 'Inter-Medium', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #101010;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1280px) {
    padding: 14px 30px;
    box-shadow: 0px 8px 32px #EAC555;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 12px 28px;
    box-shadow: 0px 7px 30px #EAC555;
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 24px;
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    padding: 8px 21px;
    box-shadow: 0px 6px 27px #EAC555;
    font-size: 10px;
  }
`;
