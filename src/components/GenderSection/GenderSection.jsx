import {
  Section,
  Title,
  HiddenTitle,
  List,
  ForHer,
  ForHim,
  Btn,
  Container,
  WinterForHer,
  WinterForHim,
} from './GenderSection.styled';

export const GenderSection = ({ type }) => {
  return (
    <Section>
      <Container>
        {type === 'winter' ? (
          <>
            <Title>Зимова колекція</Title>
            <List>
              <WinterForHer>
                <Btn to={'/catalog'}>Для неї</Btn>
              </WinterForHer>
              <WinterForHim>
                <Btn to={'/catalog'}>Для нього</Btn>
              </WinterForHim>
            </List>
          </>
        ) : (
          <>
            <HiddenTitle>Для неї / Для нього</HiddenTitle>
            <List>
              <ForHer>
                <Btn to={'/catalog'}>Для неї</Btn>
              </ForHer>
              <ForHim>
                <Btn to={'/catalog'}>Для нього</Btn>
              </ForHim>
            </List>
          </>
        )}
      </Container>
    </Section>
  );
};
