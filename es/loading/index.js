function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { addUnit, createClassName } from '../utils';
export var types = ['circular', 'spinner', 'beat', 'clockwise', 'line'];
export var PType = PropTypes.oneOf([].concat(types));
var componentClassName = createClassName('loading');
var Loading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Loading, _React$PureComponent);
  var _super = _createSuper(Loading);
  function Loading() {
    var _this;
    _classCallCheck(this, Loading);
    _this = _super.apply(this, arguments);
    _this.LoadingIcon = function () {
      var _this$props = _this.props,
        indicator = _this$props.indicator,
        _this$props$type = _this$props.type,
        type = _this$props$type === void 0 ? 'circular' : _this$props$type;
      if ( /*#__PURE__*/React.isValidElement(indicator)) {
        return indicator;
      }
      if (['spinner', 'beat', 'clockwise', 'line'].includes(type)) {
        var Spin = [];
        var lens = 12;
        if (type === 'beat') lens = 3;
        if (type === 'clockwise') lens = 8;
        if (type === 'line') lens = 5;
        for (var i = 0; i < lens; i++) {
          Spin.push( /*#__PURE__*/React.createElement("i", {
            key: i
          }));
        }
        return Spin;
      }
      var svgClassName = createClassName(componentClassName, 'svg');
      return /*#__PURE__*/React.createElement("svg", {
        className: createClassName(svgClassName, 'circular'),
        viewBox: "25 25 50 50"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none"
      }));
    };
    _this.LoadingText = function () {
      var _this$props2 = _this.props,
        textColor = _this$props2.textColor,
        color = _this$props2.color,
        textSize = _this$props2.textSize,
        children = _this$props2.children;
      var style = {
        color: textColor !== null && textColor !== void 0 ? textColor : color
      };
      if (textSize) {
        style.fontSize = addUnit(textSize);
      }
      if (children) {
        return /*#__PURE__*/React.createElement("span", {
          className: createClassName(componentClassName, 'text'),
          style: style
        }, children);
      }
      return null;
    };
    return _this;
  }
  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        _a$type = _a.type,
        type = _a$type === void 0 ? 'circular' : _a$type,
        color = _a.color,
        size = _a.size,
        vertical = _a.vertical,
        _a$rotate = _a.rotate,
        rotate = _a$rotate === void 0 ? true : _a$rotate,
        textSize = _a.textSize,
        textColor = _a.textColor,
        indicator = _a.indicator,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        rest = __rest(_a, ["type", "color", "size", "vertical", "rotate", "textSize", "textColor", "indicator", "className", "style", "children"]);
      var curStyle = {
        color: color
      };
      if (size) {
        var iconSize = addUnit(size);
        curStyle.width = iconSize;
        curStyle.height = iconSize;
      }
      var disRotate = ['clockwise', 'line', 'beat'].includes(type);
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(type), types.some(function (t) {
        return t === type;
      })), "".concat(componentClassName, "--vertical"), vertical), "".concat(componentClassName, "--rotate"), rotate && !disRotate));
      var spinnerClassName = createClassName(componentClassName, 'innerspinner');
      var classNameSpinner = classnames(spinnerClassName, _defineProperty({}, "".concat(spinnerClassName, "--").concat(type), types.some(function (t) {
        return t === type;
      })));
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use
      }, rest), /*#__PURE__*/React.createElement("span", {
        className: classNameSpinner,
        style: Object.assign(Object.assign({}, curStyle), style)
      }, this.LoadingIcon()), this.LoadingText());
    }
  }]);
  return Loading;
}(React.PureComponent);
export { Loading as default };
Loading.propTypes = {
  type: PType,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool,
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
Loading.defaultProps = {
  type: 'circular',
  rotate: true
};