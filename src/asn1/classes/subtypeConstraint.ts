import { _ElementSetSpec } from '../types';
import { ExtensionMarker } from './extensionMarker';

export type ElementSetSpecList = Array<_ElementSetSpec | ExtensionMarker>;

export class SubtypeConstraint {
  public elementSetSpecList: ElementSetSpecList;

  private subtypeConstraintTag: undefined;

  constructor(elementSetSpecList: ElementSetSpecList) {
    this.elementSetSpecList = elementSetSpecList;
  }

  public toString(): string {
    return this.elementSetSpecList
      .map((elementSetSpec) => elementSetSpec.toString())
      .join(', ');
  }
}