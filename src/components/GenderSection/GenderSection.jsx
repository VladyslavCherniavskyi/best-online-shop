import {
  Section,
  Title,
  List,
  ForHer,
  ForHim,
  Btn,
  Container,
} from './GenderSection.styled';

export const GenderSection = () => {
  return (
    <Section>
      <Container>
        <Title>For her / for him</Title>
        <List>
          <ForHer>
            <Btn to={'/catalog'}>Для неї</Btn>
          </ForHer>
          <ForHim>
            <Btn to={'/catalog'}>Для нього</Btn>
          </ForHim>
        </List>
      </Container>
    </Section>
  );
};
