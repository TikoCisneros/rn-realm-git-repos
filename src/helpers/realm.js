import Realm from 'realm';

import GitRepository from '../schemas/gitRepository';

const ENTITY_NAME = 'Repository';

const saveGitRepository = async data => {
  const realm = await getRealm();

  realm.write(() => {
    realm.create(ENTITY_NAME, data, 'modified');
  });

  return data;
};

const removeGitRepository = async ({ id }) => {
  const realm = await getRealm();

  realm.write(() => {
    const gitRepo = realm.objectForPrimaryKey(ENTITY_NAME, id);
    realm.delete(gitRepo);
  });
};

const getGitRepositoryData = async () => {
  const realm = await getRealm();
  console.log(realm.path);
  const data = realm.objects(ENTITY_NAME).sorted('stars', true);

  return data;
};

const getRealm = () => {
  return Realm.open({
    schema: [GitRepository],
  });
};

export {
  getRealm,
  saveGitRepository,
  getGitRepositoryData,
  removeGitRepository,
};
