import React, { useState } from 'react';
import {
  MainContainer,
  Form,
  Input,
  Label,
  Submit,
  RepoList,
  Icon,
} from './main.styles';

import Repository from './repository';

const EMPTY_STR = '';

const Main = ({
  hasError,
  repositories,
  onAddRepository,
  onRefreshRepository,
  onRemoveRepository,
}) => {
  const [input, setInput] = useState(EMPTY_STR);

  const handleAddRepository = () => {
    if (onAddRepository) {
      onAddRepository(input.trim());
    }
    setInput(EMPTY_STR);
  };

  const handleRefreshRepository = item => {
    if (onRefreshRepository) {
      onRefreshRepository(item);
    }
  };

  const handleRemoveRepository = item => {
    if (onRemoveRepository) {
      onRemoveRepository(item);
    }
  };

  const renderRepository = ({ item }) => (
    <Repository
      data={item}
      onRefresh={() => handleRefreshRepository(item)}
      onRemove={() => handleRemoveRepository(item)}
    />
  );

  return (
    <MainContainer>
      <Label>Repositories</Label>
      <Form>
        <Input
          value={input}
          error={hasError}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search a repository..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="plus" />
        </Submit>
      </Form>

      <RepoList
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={renderRepository}
      />
    </MainContainer>
  );
};

export default Main;
