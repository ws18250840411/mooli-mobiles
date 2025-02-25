function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React, { PureComponent } from 'react';
import { eventStore } from '../../utils';
import { getPosition, getDirection } from './lib/utils';
export var Drag = /*#__PURE__*/function (_PureComponent) {
  _inherits(Drag, _PureComponent);
  var _super = _createSuper(Drag);
  function Drag(props) {
    var _this;
    _classCallCheck(this, Drag);
    _this = _super.call(this, props);
    _this._onTouchStart = function (event) {
      var _getPosition = getPosition(event),
        x = _getPosition.x,
        y = _getPosition.y;
      _this.movePosition = {
        x: x,
        y: y
      };
      _this.props.onTouchStart(event, _this.movePosition);
      if (_this.isMouseEvent(event)) {
        _this.events.add(document.body, 'mousemove', _this._onTouchMove);
        _this.events.add(document.body, 'mouseup', _this._onTouchEnd);
      }
    };
    _this._onTouchMove = function (event) {
      if (!_this.movePosition) {
        return;
      }
      var _getPosition2 = getPosition(event),
        x = _getPosition2.x,
        y = _getPosition2.y;
      var deltaX = x - _this.movePosition.x;
      var deltaY = y - _this.movePosition.y;
      var direction = getDirection(deltaX, deltaY);
      var curMovePosition = {
        x: deltaX,
        y: deltaY,
        direction: direction
      };
      _this.props.onTouchMove(event, curMovePosition);
    };
    _this._onTouchEnd = function (event) {
      if (!_this.movePosition) {
        return;
      }
      if (_this.isMouseEvent(event)) {
        _this.events.removeAll();
      }
      _this.props.onTouchEnd(event, _this.movePosition);
      _this.movePosition = null;
    };
    _this.events = eventStore();
    return _this;
  }
  _createClass(Drag, [{
    key: "isMouseEvent",
    value: function isMouseEvent(e) {
      return e && !('touches' in e);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        children = _a.children,
        rest = __rest(_a, ["children"]);
      return /*#__PURE__*/React.cloneElement(children, Object.assign(Object.assign({}, rest), {
        onTouchStart: this._onTouchStart,
        onTouchMove: this._onTouchMove,
        onTouchEnd: this._onTouchEnd,
        onMouseDown: this._onTouchStart,
        onMouseMove: this._onTouchMove,
        onMouseUp: this._onTouchEnd
      }));
    }
  }]);
  return Drag;
}(PureComponent);