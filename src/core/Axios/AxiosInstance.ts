import Axios from 'axios';
import { StorageAuth } from '../LocalStorage';
import { AxiosAuthInjector, AxiosRedirectUnauthorize } from './interceptors';

const AxiosAuth = Axios.create();

AxiosAuthInjector.Add(AxiosAuth);
AxiosRedirectUnauthorize.Add(
  AxiosAuth,
  '/',
  () => {
    StorageAuth.AccessToken = undefined;
  },
);

export {
  AxiosAuth,
};