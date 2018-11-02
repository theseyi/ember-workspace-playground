import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class About extends Controller {
  @action
  testAction() {
    alert();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'about': About;
  }
}
