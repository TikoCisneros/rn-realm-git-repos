import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
  InfoContainer,
  RemoveContainer,
} from './repository.styles';

const Repository = ({
  data: { name, description, stars, forks },
  onRefresh,
  onRemove,
}) => (
  <Container>
    <Name>{name}</Name>
    <Description>{description}</Description>

    <RemoveContainer onPress={onRemove}>
      <Icon name="close" size={20} color="#333" />
    </RemoveContainer>

    <InfoContainer>
      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{forks}</StatCount>
        </Stat>
      </Stats>

      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>Refresh</RefreshText>
      </Refresh>
    </InfoContainer>
  </Container>
);

export default Repository;
