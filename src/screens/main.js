import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import MainComponent from '../components/main';
import api from '../api';
import { buildGitRepositoryData } from './util';
import {
  getGitRepositoryData,
  removeGitRepository,
  saveGitRepository,
} from '../helpers/realm';

const Main = () => {
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const loadRepositories = async () => {
    const data = await getGitRepositoryData();
    setRepositories(data);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  const handleRefreshRepository = async ({ fullName }) => {
    await handleAddRepository(fullName);
  };

  const handleAddRepository = async repoName => {
    Keyboard.dismiss();
    try {
      setError(false);
      const { data } = await api.get(`/repos/${repoName}`);
      const gitRepo = buildGitRepositoryData(data);
      await saveGitRepository(gitRepo);
      await loadRepositories();
    } catch (_e) {
      setError(true);
    }
  };

  const handleRemoveRepository = async repository => {
    await removeGitRepository(repository);
    await loadRepositories();
  };

  return (
    <MainComponent
      hasError={error}
      repositories={repositories}
      onAddRepository={handleAddRepository}
      onRefreshRepository={handleRefreshRepository}
      onRemoveRepository={handleRemoveRepository}
    />
  );
};

export default Main;
