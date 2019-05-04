import { isEmpty } from 'lodash';

import { log } from '../../utils/logging';

import { Base } from './base';
import { NamedType } from './namedType';

export class ExtensionAdditionAlternativesGroup extends Base {
  public alternativeTypeList: NamedType[];

  constructor(alternativeTypeList: any, versionNumber: any) {
    super();

    this.alternativeTypeList = alternativeTypeList;
    if (versionNumber !== undefined && versionNumber !== null) {
      log.warn('ExtensionAdditionAlternativesGroup could not handle versionNumber');
    }
  }

  public setConstraint(constraint: any): ExtensionAdditionAlternativesGroup {
    if (!isEmpty(constraint)) {
      log.warn(`ExtensionAdditionAlternativesGroup could not handle constraint ${JSON.stringify(constraint)}`);
    }
    return this;
  }

  public expand(): ExtensionAdditionAlternativesGroup {
    // TODO
    return this;
  }
  public toString(depth: number = 0): string {
    return [
      `${this.indent(depth)}[[`,
      ...this.alternativeTypeList.map((item) => item.toString(depth + 1)),
      `${this.indent(depth)}]]`,
    ].join('\n');
  }
}
