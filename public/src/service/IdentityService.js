import IdentityModel from '../model/IdentityModel';
import IdentityApi from '../api/IdentityApi';

class IdentityService {
  //
  constructor(identity) {
    // IdentityService.instance ;
    this.identity = new IdentityModel(identity);
  }

  // static identity() {
  //
  // }

  setIdentityProps(key, value) {
    this.identity = {
      ...this.identity,
      [key]: value,
    }
  }

  getIdentity() {
    return this.identity;
  }

  validationProps(identity) {
    return new IdentityModel().isIncorrect(identity);
  }
}

Object.defineProperty(IdentityService, 'instance', {
  // value: new IdentityService(IdentityApi.instance),
  value: new IdentityService(),
  writable: false,
  configurable: false,
});

export default IdentityService;
