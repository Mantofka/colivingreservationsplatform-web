export class ApiUrl {
    static baseUri = 'http://localhost:5001';
    static apiBaseUrl = `${ApiUrl.baseUri}/api`;

    static authenticationApiUrl = `${this.apiBaseUrl}/auth`;
    static colivingApiUrl = `${this.apiBaseUrl}/coliving`;
    static roomApiUrl = `${this.apiBaseUrl}/room`;
    static tenantApiUrl = `${this.apiBaseUrl}/tenant`;
}

export const environment = {
    production: false,
    api: ApiUrl,
  };