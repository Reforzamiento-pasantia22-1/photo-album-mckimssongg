export default class authUser {
  private static instance: authUser;
  private static _dataUser: object | boolean;
  private static _token: string;

  private constructor() {}

  private static init(): void {
    if (localStorage.getItem("dataUser")) {
      this._dataUser = JSON.parse(localStorage.getItem("dataUser"));
    } else {
      this._dataUser = false;
    }
    if (this._dataUser) {
      this._token = this._dataUser["token"];
    } else {
      this._token = "";
    }
  }

  public static getInstance(): authUser {
    if (!this.instance) {
      this.init();
      this.instance = new authUser();
    }
    return this.instance;
  }

  get dataUser(): object | boolean {
    return authUser._dataUser;
  }

  get token(): string {
    return authUser._token;
  }
}
