const buildGitRepositoryData = ({
  id,
  name,
  full_name,
  description,
  stargazers_count,
  forks_count,
}) => ({
  id,
  name,
  fullName: full_name,
  description,
  stars: stargazers_count,
  forks: forks_count,
});

export { buildGitRepositoryData };
