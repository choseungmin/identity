class IdentityApi {
  //
  constructor() {
    IdentityApi.instance;
  }

}

Object.defineProperty(IdentityApi, 'instance', {
  value: new IdentityApi(),
  writable: false,
  configurable: false,
});

export default IdentityApi;
