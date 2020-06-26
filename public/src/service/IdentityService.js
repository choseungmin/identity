import IdentityModel from '../model/IdentityModel';

class IdentityService {
  //
  constructor(identity) {
    //
    this.identity = new IdentityModel(identity);
  }

  setIdentityTerms(key) {
    //
    if (!this.identity) {
      this.setIdentityProps('termsCode', [key]);

    } else if (this.identity.termsCode.includes(key)) {
      const terms = this.identity.termsCode.filter(terms => terms !== key);
      this.setIdentityProps('termsCode', [...terms]);

    } else {
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
    //
    return this.identity;
  }

}

Object.defineProperty(IdentityService, 'instance', {
  value: new IdentityService(),
  writable: false,
  configurable: false,
});

export default IdentityService;
