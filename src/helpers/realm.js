import Realm from 'realm';

import GitRepository from '../schemas/gitRepository';

const REALM_OBJECT_TYPE = 'Repository';

const saveGitRepository = async data => {
  const realm = await getRealm();

  realm.write(() => {
    realm.create(REALM_OBJECT_TYPE, data, 'modified');
  });

  return data;
};

const removeGitRepository = async ({ id }) => {
  const realm = await getRealm();

  realm.write(() => {
    const gitRepo = realm.objectForPrimaryKey(REALM_OBJECT_TYPE, id);
    realm.delete(gitRepo);
  });
};

const getGitRepositoryData = async () => {
  const realm = await getRealm();
  console.log(realm.path);
  const data = realm.objects(REALM_OBJECT_TYPE).sorted('stars', true);

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
