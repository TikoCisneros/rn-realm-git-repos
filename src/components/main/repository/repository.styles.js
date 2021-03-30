import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

const StatCount = styled.Text`
  margin-left: 6px;
`;

const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  margin-left: 5px;
`;

const RemoveContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
`;

export {
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
};
