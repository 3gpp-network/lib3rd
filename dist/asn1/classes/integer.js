"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class Integer extends asnType_1.AsnType {
    constructor(namedNumberList) {
        super();
        this.namedNumberList = namedNumberList;
    }
    setConstraint(constraints) {
        this.constraints = constraints;
        return this;
    }
    expand(asn1Pool, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(paramterMapping) {
        // Do nothing
    }
    toString() {
        function parenthesize(constraint) {
            return `(${constraint})`;
        }
        const constraints = this.constraints && this.constraints.length ? ` ${this.constraints.map((constraint) => parenthesize(constraint.toString())).join(' ')}` : '';
        return `INTEGER${constraints}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.addToConstants(this.value, constants);
        this.addToConstants(this.min, constants);
        this.addToConstants(this.max, constants);
        return [row, col];
    }
}
exports.Integer = Integer;
