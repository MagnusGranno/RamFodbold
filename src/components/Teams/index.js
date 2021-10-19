// Styles
import { Wrapper, Content } from './Teams.styles';
import Typical from 'react-typical';
// Components
import { Team } from './Team';
const Teams = () => {
  return (
    <Wrapper>
      <Content>
        <Typical
          steps={['Vores Hold', 3000, "Du kan tilmelde dig under 'Hold'", 3000]}
          loop={Infinity}
          wrapper="h1"
        />
        <Team
          name={'Fodbold Fitness - Damer'}
          price={350}
          coach={'Rikke Sloth'}
          players={12}
        />
        <Team
          name={'Gran Cru Veteran'}
          price={800}
          coach={'Dan Ryberg'}
          players={21}
        />
        <Team
          name={'Herre Senior - Serie 5-6'}
          price={1100}
          coach={'Peter Sloth'}
          players={35}
        />
        <Team
          name={'Årgang 2006-2007'}
          price={600}
          coach={'Mikkel Christensen'}
          players={20}
        />
        <Team
          name={'Årgang 2008-2009'}
          price={900}
          coach={'Jesper Schultz Jørgensen'}
          players={13}
        />
        <Team
          name={'Årgang 2012 Piger'}
          price={600}
          coach={'Morten Carlson'}
          players={15}
        />
      </Content>
    </Wrapper>
  );
};

export default Teams;
