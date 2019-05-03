import { getContextName } from '../utils';

import { ExtensionAdditionAlternativesGroupVisitor } from './extensionAdditionAlternativesGroup';
import { NamedTypeVisitor } from './namedType';

/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
export class ExtensionAdditionAlternativeVisitor {
  public visitChildren(extensionAdditionAlternativeCtx: any): any /* TODO */ {
    let extensionAdditionAlternative = null;
    const childCtx = extensionAdditionAlternativeCtx.children[0];
    switch (getContextName(childCtx)) {
      case 'extensionAdditionAlternativesGroup': {
        extensionAdditionAlternative = childCtx.accept(new ExtensionAdditionAlternativesGroupVisitor());
        break;
      }
      case 'namedType': {
        extensionAdditionAlternative = childCtx.accept(new NamedTypeVisitor());
        break;
      }
      default: {
        break;
      }
    }
    return extensionAdditionAlternative;
  }
}