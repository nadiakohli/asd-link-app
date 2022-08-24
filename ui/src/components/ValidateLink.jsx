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

const ValidateLink = () => {
  const [fullLink, setFullLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    axios.get(`links/${shortLink.split('/').pop()}`)
      .then((res) => setFullLink(res.data))
      .catch(({ response }) => console.error(response));
  };

  const handleChange = ({ target: { value } }) => setShortLink(value);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(fullLink);
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
      <H1 primary>
        Paste the
        <span> short </span>
        link to get its origin state
        <img src={wavingHand} alt="waving hand" />
      </H1>
      <Container>
        <form onSubmit={onHandleSubmit}>
          <Input
            name="shortLink"
            onChange={handleChange}
            value={shortLink}
          />
          <Button type="submit">Get full link!</Button>
        </form>
        {shortLink.trim().length && fullLink.length
          ? (
            <BlockWrap>
              <Block>
                <TextLink onClick={handleCopy}>
                  <Image src={copyIcon} alt="copy icon" />
                  {fullLink}
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

export default ValidateLink;
