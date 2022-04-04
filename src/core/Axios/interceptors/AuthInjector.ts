import { AxiosInstance, AxiosRequestConfig } from "axios";
import { StorageAuth } from "../../LocalStorage";

// Request interceptor for Axios that injects auth header on every request
export class AxiosAuthInjector {
  /**
   * @static @function Add() Add interceptor to and instance
   * @param {AxiosInstance} instance Instance of Axios
   * @returns {number} Interceptor Id
   */
  static Add(instance: AxiosInstance): number {
    function AuthTokenInject(requestConfig: AxiosRequestConfig): AxiosRequestConfig {
      const accessToken = StorageAuth.AccessToken;
      const tokenType = StorageAuth.TokenType;
      const authHeader = !!tokenType && !!accessToken ? {
        'Authorization': `${tokenType} ${accessToken}`,
      } : {};
      const headers = {
        ...requestConfig.headers ?? {},
        ...authHeader,
      }

      return { ...requestConfig, headers };
    }
    
    return instance.interceptors.request.use(AuthTokenInject);
  }

  /**
   * @static @function Remove() Eject the interceptor from the Axios instance
   * @param {AxiosInstance} instance Instance of Axios 
   * @param {number} id Interceptor Id
   */
  static Remove(instance: AxiosInstance, id: number): void {
    instance.interceptors.request.eject(id);
  }
}