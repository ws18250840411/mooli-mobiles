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
import Icon from '../icon';
import { createClassName, addUnit } from '../utils';
import RadioContext from './lib/context';
var componentClassName = createClassName('radio');
var Radio = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);
  var _super = _createSuper(Radio);
  function Radio(props) {
    var _this;
    _classCallCheck(this, Radio);
    _this = _super.call(this, props);
    _this.onClick = function (event) {
      var target = event.target;
      var _this$props = _this.props,
        labelDisabled = _this$props.labelDisabled,
        onChange = _this$props.onChange,
        name = _this$props.name;
      var icon = _this.iconRef.current;
      if (icon) {
        var iconClicked = icon === target || icon.contains(target);
        if (!_this.isDisabled && (iconClicked || !labelDisabled)) {
          onChange && onChange(name || !_this.currentValue);
          _this.context.onSwitch && _this.context.onSwitch(name || !_this.currentValue);
        }
      }
    };
    _this.iconStyle = function () {
      var curCheckedColor = _this.props.checkedColor || _this.context.checkedColor;
      if (curCheckedColor && _this.checked && !_this.isDisabled) {
        return {
          borderColor: curCheckedColor,
          backgroundColor: curCheckedColor
        };
      }
    };
    _this.genIcon = function () {
      var _this$props2 = _this.props,
        icon = _this$props2.icon,
        iconSize = _this$props2.iconSize,
        _this$props2$shape = _this$props2.shape,
        shape = _this$props2$shape === void 0 ? 'round' : _this$props2$shape;
      var curIconSize = iconSize || _this.context.iconSize;
      var iconClassName = createClassName(componentClassName, 'icon');
      var className3Use = classnames(iconClassName, _defineProperty(_defineProperty(_defineProperty({}, "".concat(iconClassName, "--").concat(shape), shape), "".concat(iconClassName, "--disabled"), _this.isDisabled), "".concat(iconClassName, "--checked"), _this.checked));
      var customRender = icon && icon(_this.checked);
      var iconRender = customRender && /*#__PURE__*/React.createElement(React.Fragment, null, customRender);
      return /*#__PURE__*/React.createElement("div", {
        ref: _this.iconRef,
        key: "radio-icon",
        style: {
          fontSize: addUnit(curIconSize)
        },
        className: className3Use
      }, iconRender || /*#__PURE__*/React.createElement(Icon, {
        name: "success",
        style: _this.iconStyle()
      }));
    };
    _this.genLabel = function () {
      var _this$props3 = _this.props,
        _this$props3$labelPos = _this$props3.labelPosition,
        labelPosition = _this$props3$labelPos === void 0 ? 'right' : _this$props3$labelPos,
        children = _this$props3.children;
      var labelClassName = createClassName(componentClassName, 'label');
      var className3Use = classnames(labelClassName, _defineProperty(_defineProperty({}, "".concat(labelClassName, "--").concat(labelPosition), labelPosition), "".concat(labelClassName, "--disabled"), _this.isDisabled));
      return /*#__PURE__*/React.createElement("span", {
        key: "radio-label",
        className: className3Use
      }, children);
    };
    _this.iconRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Radio, [{
    key: "isDisabled",
    get: function get() {
      return this.context.disabled || this.props.disabled;
    }
  }, {
    key: "currentValue",
    get: function get() {
      return this.context.value || this.props.value;
    }
  }, {
    key: "checked",
    get: function get() {
      if (this.props.name) {
        return this.currentValue === this.props.name;
      } else {
        return this.currentValue;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        value = _a.value,
        name = _a.name,
        icon = _a.icon,
        iconSize = _a.iconSize,
        disabled = _a.disabled,
        checkedColor = _a.checkedColor,
        _a$labelPosition = _a.labelPosition,
        labelPosition = _a$labelPosition === void 0 ? 'right' : _a$labelPosition,
        labelDisabled = _a.labelDisabled,
        _a$shape = _a.shape,
        shape = _a$shape === void 0 ? 'round' : _a$shape,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        onChange = _a.onChange,
        rest = __rest(_a, ["value", "name", "icon", "iconSize", "disabled", "checkedColor", "labelPosition", "labelDisabled", "shape", "className", "style", "children", "onChange"]);
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(this.context.direction), this.context.direction), "".concat(componentClassName, "--disabled"), this.isDisabled), "".concat(componentClassName, "--label-disabled"), labelDisabled));
      var child = [this.genIcon()];
      if (labelPosition === 'left') {
        child.unshift(this.genLabel());
      } else {
        child.push(this.genLabel());
      }
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        onClick: this.onClick,
        style: style
      }, rest), child);
    }
  }]);
  return Radio;
}(React.PureComponent);
export { Radio as default };
Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  iconSize: PropTypes.string,
  checkedColor: PropTypes.string,
  labelPosition: PropTypes.string,
  labelDisabled: PropTypes.bool,
  shape: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
Radio.defaultProps = {
  labelPosition: 'right',
  shape: 'round'
};
Radio.contextType = RadioContext;