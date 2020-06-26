import { unimpl } from '../../_devUtils';
import { _Constraint } from './constraint';
import { ExtensionMarker } from './extensionMarker';

export class EnumeratedType {
  public items: EnumerationItem[];

  private enumeratedTypeTag: undefined;

  constructor(items: EnumerationItem[]) {
    this.items = items;
  }

  public setConstraints(constraints: _Constraint[]) {
    if (constraints.length > 0) {
      unimpl();
    }
  }

  public toString(): string {
    if (this.items.length === 0) {
      return 'ENUMERATED {}';
    }
    const arrToString = ['ENUMERATED {'];
    const itemsString = this.items.map((item) => item.toString()).join(', ');
    arrToString.push(itemsString);
    arrToString.push('}');
    return arrToString.join(' ');
  }
}

export type EnumerationItem = string | ExtensionMarker;
