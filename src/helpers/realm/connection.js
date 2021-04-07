import Realm from 'realm';
import GitRepository from '../../schemas/gitRepository';

export default new Realm({ schemas: [GitRepository] });
