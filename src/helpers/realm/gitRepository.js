import RealmInstance from './connection';

const ENTITY_NAME = 'Repository';

const saveGitRepository = async data => {
  RealmInstance.write(() => {
    RealmInstance.create(ENTITY_NAME, data, 'modified');
  });

  return data;
};

const removeGitRepository = async ({ id }) => {
  RealmInstance.write(() => {
    const gitRepo = RealmInstance.objectForPrimaryKey(ENTITY_NAME, id);
    RealmInstance.delete(gitRepo);
  });
};

const getGitRepositoryData = async () => {
  console.log(RealmInstance.path);
  const data = RealmInstance.objects(ENTITY_NAME).sorted('stars', true);

  return data;
};

export { saveGitRepository, getGitRepositoryData, removeGitRepository };
