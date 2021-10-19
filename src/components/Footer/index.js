import { Wrapper, Content, Text } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h3>Adresse:</h3>
          <p>Kirsebærvej 21, 3200 Helsinge</p>
          <p> | </p>
          <h3>Telefon:</h3>
          <p>23238045</p>
          <p> | </p>
          <h3>Mail:</h3>
          <p>Ramlosefodbold@gmail.com</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Footer;
