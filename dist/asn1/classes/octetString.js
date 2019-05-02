"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var lodash_1 = require("lodash");
var logging_1 = require("../../utils/logging");
var base_1 = require("./base");
var OctetString = /** @class */ (function (_super) {
    __extends(OctetString, _super);
    function OctetString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OctetString.prototype.setConstraint = function (constraint) {
        if ('min' in constraint && 'max' in constraint) {
            this.size = null;
            this.sizeMin = constraint.min;
            delete constraint.min;
            this.sizeMax = constraint.max;
            delete constraint.max;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("OctetStringType could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    OctetString.prototype.expand = function () {
        // TODO
        return this;
    };
    OctetString.prototype.toString = function (depth) {
        if (depth === void 0) { depth = 0; }
        // TODO
        return 'OCTET STRING';
    };
    return OctetString;
}(base_1.Base));
exports.OctetString = OctetString;
