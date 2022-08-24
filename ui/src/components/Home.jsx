import React, { useEffect, useState } from 'react';
import axios from 'config/axios';

// Images
import copyIcon from 'assets/images/svg/copySolid.svg';
import wavingHand from 'assets/images/webp/wavingHand.webp';
import winkEmoji from 'assets/images/webp/winkEmoji.webp';

// Styles
import {
  Wrapper,
  H1,
  Container,
  Input,
  Button,
  Block,
  TextLink,
  Image,
  BlockWrap,
  Notification,
} from 'components/styled';

const Home = () => {
  const [fullLink, setFullLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    axios.post('/links', { fullLink })
      .then((res) => setShortLink(res.data.short))
      .catch(({ response }) => console.error(response));
  };

  const handleChange = ({ target: { value } }) => setFullLink(value);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortLink);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  return (
    <Wrapper>
      <H1>
        Get the
        <span> short </span>
        link as you go
        <img src={wavingHand} alt="waving hand" />
      </H1>
      <Container>
        <form onSubmit={onHandleSubmit}>
          <Input
            name="fullLink"
            onChange={handleChange}
            value={fullLink}
          />
          <Button type="submit">Short me!</Button>
        </form>
        {shortLink.trim().length && fullLink.length
          ? (
            <BlockWrap>
              <Block>
                <TextLink onClick={handleCopy}>
                  <Image src={copyIcon} alt="copy icon" />
                  {shortLink}
                </TextLink>
              </Block>
              {isCopied
                ? (
                  <Notification>
                    Copied!
                    <img src={winkEmoji} alt="wink emoji" />
                  </Notification>
                )
                : null}
            </BlockWrap>
          )
          : null}
      </Container>
    </Wrapper>
  );
};

export default Home;
