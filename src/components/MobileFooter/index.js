import { Wrapper, Content, Text } from './MobileFooter.styles';

const MobileFooter = () => {
  return (
    <Wrapper>
      <Content>
        <Text>
          <h3>Adresse:</h3>
          <p>Kirsebærvej 21, 3200 Helsinge</p>
          <h3>Telefon:</h3>
          <p>23238045</p>
          <h3>Mail:</h3>
          <p>Ramlosefodbold@gmail.com</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MobileFooter;
