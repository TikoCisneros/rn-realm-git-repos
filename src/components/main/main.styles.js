import styled from 'styled-components/native';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from '../common/containers';

const MainContainer = styled(Container)`
  background-color: #7159c1;
`;

const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 20px 0px;
`;

const Form = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${props => (props.error ? '#ff7272' : '#fff')};
`;

const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

const RepoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

const Icon = styled(VIcon)`
  color: #fff;
  font-size: 20px;
`;

export { MainContainer, Form, Input, Submit, RepoList, Label, Icon };
