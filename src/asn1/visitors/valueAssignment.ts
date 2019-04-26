import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * value  :   builtinValue
 * builtinValue :
 *     enumeratedValue
 *   |	integerValue
 *   |	choiceValue
 *   |	objectIdentifierValue
 *   |	booleanValue
 *   |   CSTRING
 *   |   BSTRING
 * ```
 */
export class ValueAssignmentVisitor {
  public visitChildren(valueAssignmentCtx: any): any /* TODO */ {
    const valueCtx = valueAssignmentCtx.children[2];
    const builtinValueCtx = valueCtx.children[0];
    const subContext = builtinValueCtx.children[0];
    const contextName = getContextName(subContext);
    if (!contextName) {
      // Corresponds to CSTRING or BSTRING
      return subContext.getText();
    }
    switch (contextName) {
      case 'booleanValue': {
        return subContext.getText().toLowerCase() === 'true';
      }
      case 'integerValue': {
        return Number(subContext.getText());
      }
      case 'enumeratedValue': {
        log.warn(getLogWithAsn1(builtinValueCtx, 'EnumeratedValue not supported:'));
        // TODO
        break;
      }
      case 'choiceValue': {
        log.warn(getLogWithAsn1(builtinValueCtx, 'ChoiceValue not supported:'));
        // TODO
        break;
      }
      case 'objectIdentifierValue': {
        log.warn(getLogWithAsn1(builtinValueCtx, 'ObjectIdentifierValue not supported:'));
        // TODO
        break;
      }
      default: {
        log.warn(getLogWithAsn1(builtinValueCtx, 'Not supported ASN1 in BuiltinValue:'));
      }
    }
  }
}
