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

  setIdentityTerms(key) {
    if (!this.identity) {
      //
      this.setIdentityProps('termsCode', [key]);
    } else if (this.identity.termsCode.includes(key)) {
      //
      const terms = this.identity.termsCode.filter(terms => terms !== key);
      this.setIdentityProps('termsCode', [...terms]);
    } else {
      //
      this.setIdentityProps('termsCode', [
        ...this.identity.termsCode,
        key,
      ])
    }
  }

  setIdentityProps(key, value) {
    //
    if (typeof value === 'string') {
      value = value.replace(/ /g,"");
    }
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
