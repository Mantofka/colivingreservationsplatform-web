export class ApiUrl {
    static baseUri = 'http://localhost:5000';
    static apiBaseUrl = `${ApiUrl.baseUri}/api`;

    static authenticationApiUrl = `${this.apiBaseUrl}/auth`;
}

export const environment = {
    production: false,
    api: ApiUrl,
  };