import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  text-align: center;
  font-family: 'Inter-Medium', sans-serif;
  font-size: 30px;
  color: #000;
  
  & span {
    color: #5380EA;
  }

  & img {
    margin: 0 10px;
    width: 31px;

    @media screen and (max-width: 1280px) {
      width: 29px;
    }

    @media screen and (max-width: 768px) {
      width: 26px;
    }

    @media screen and (max-width: 480px) {
      width: 21px;
    }

    @media screen and (max-width: 320px) {
      width: 18px;
      margin: 0 5px;
    }
  }
  
  @media screen and (max-width: 1280px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ primary }) => (primary ? '20px' : '22px')};
    width: ${({ primary }) => (primary ? '350px' : '')};;
  }

  @media screen and (max-width: 320px) {
    font-size: ${({ primary }) => (primary ? '14px' : '16px')};
    width: ${({ primary }) => (primary ? '250px' : '')};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & form {
    text-align: center;
  }
`;

export const Input = styled.input.attrs(({
  type,
  id,
  autoComplete,
  placeholder,
}) => ({
  type: type || 'text',
  id: id || 'url',
  autoComplete: autoComplete || 'off',
  placeholder: placeholder || 'http://type-your-link.here ...',
}))`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 370px;
  padding: 16px;
  background: #F9FAFF;
  border: 1px solid #DEE6FF;
  border-radius: 5px;
  font-size: 17px;
  margin-top: 25px;

  &::placeholder {
    font-family: 'Inter-Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #aaa;

    @media screen and (max-width: 1280px) {
      font-size: 15px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 480px) {
      font-size: 11px;
    }

    @media screen and (max-width: 320px) {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 15px;
    font-size: 15px;
    width: 350px;
  }

  @media screen and (max-width: 768px) {
    padding: 13px;
    width: 330px;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 280px;
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    padding: 8px;
    width: 205px;
    font-size: 10px;
    margin-top: 15px;
  }
`;

export const Block = styled.div`
  background: #F6FBF8;
  box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 435px;
  max-height: 400px;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 1280px) {
    box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    min-width: 420px;
  }

  @media screen and (max-width: 768px) {
    min-width: 385px;
  }
  
  @media screen and (max-width: 480px) {
    min-width: 365px;
  }

  @media screen and (max-width: 320px) {
    min-width: 275px;
  }
`;

export const Button = styled.button`
  margin: 25px 0;
  width: 200px;
  height: 51px;
  background: ${({ primary }) => (primary ? '#ffd5cf' : '#5380EA')};
  border: ${({ primary }) => (primary ? '1px solid #ff725e' : '1px solid #5380EA')}; 
  box-shadow: ${({ primary }) => (primary ? '0px 10px 34px #ffd5cf' : '0px 10px 34px rgba(83, 128, 234, 0.5)')};
  border-radius: 40px;
  font-family: 'Inter-Medium', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${({ primary }) => (primary ? '#ff725e' : '#fff')};
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    width: 165px;
    height: 46px;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 135px;
    height: 40px;
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    width: 115px;
    height: 34px;
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    width: 108px;
    height: 32px;
    font-size: 10px;
    margin: 15px 0;
  }
`;

export const TextLink = styled.div`
  display: wrap;
  overflow-wrap: break-word;
  font-family: 'Inter-Medium', sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: #656565;
  padding: 25px;
  max-width: 420px;
  max-height: 600px;
  
  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 400px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 365px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
    max-width: 275px;
    padding: 18px 10px;
  }
`;

export const Image = styled.img`
  margin: 0 5px;
  width: 10px;
  height: 100%;
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #656565;
  position: relative;
`;

export const Notification = styled.p`
  font-size: 18px;
  position: absolute;
  top: -26px;
  right: 7px;

  & img {
    width: 17px;
    margin-left: 5px;

    @media screen and (max-width: 1280px) {
      width: 16px;
    }

    @media screen and (max-width: 768px) {
      width: 14px;
    }

    @media screen and (max-width: 480px) {
      width: 12px;
    }

    @media screen and (max-width: 320px) {
      width: 10px;
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
    top: -20px;
  }
`;
