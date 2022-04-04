import { StorageLocalBase } from './StorageBase';

class StorageAuthImpl extends StorageLocalBase {
  StorageNamespace = 'auth';

  readonly TokenType = 'Bearer';

  private readonly KeyAccessToken: string = 'accessToken';

  get AccessToken(): string | undefined {
    return this.getString(this.KeyAccessToken);
  }

  set AccessToken(token: string | undefined) {
    this.setString(this.KeyAccessToken, token);
  }
}

export const StorageAuth = new StorageAuthImpl();