import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { ComponentPresence } from './componentPresence';
import { ExtensionMarker } from './extensionMarker';

export class WithComponents extends Base {
  public components: Array<ExtensionMarker | ComponentPresence>;

  constructor(components: Array<ExtensionMarker | ComponentPresence>) {
    super();

    this.components = components;
  }

  public setConstraint(constraint: any): WithComponents {
    if (!isEmpty(constraint)) {
      log.warn(`WithComponents could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): WithComponents {
    return this;
  }

  public toString(): string {
    // TODO
    return null;
  }
}
