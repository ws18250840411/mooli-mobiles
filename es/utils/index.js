function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
export { addUnit, range, unitToPx } from './format/unit';
export { formatNumber } from './format/number';
export { createClassName } from './createClassName';
export { isHidden } from './dom/style';
export { raf, cancelRaf } from './format/raf';
export { canUseDOM, areEqualShallow } from './dom/canUseDOM';
export { resetScroll } from './dom/resetScroll';
export { eventStore } from './dom/event';
export { getScroller, getScrollTop, getElementTop } from './dom/scroll';
export { addClass, removeClass, hasClass } from './dom/class';
export { inBrowser, isIOS, isAndroid } from './system';
export { resolveContainer } from './getContainer';
export { renderToContainer } from './renderToContainer';
export { extend } from './extend';
export { clone } from './clone';
export function noop() {}
;
export var getUniqueId = function getUniqueId() {
  return parseInt(Math.random() * 1e9, 10).toString(36);
};
export var getViewportSize = function getViewportSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};
export function isFunction(val) {
  return typeof val === 'function';
}
export function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
export function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime());
}
export function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }
  // eslint-disable-next-line no-self-compare
  return val !== val;
}
export function isString(value) {
  return typeof value === 'string';
}
export function isBoolean(value) {
  return typeof value === 'boolean';
}
export function isNull(value) {
  return value === null;
}
export function isUndefined(value) {
  return typeof value === 'undefined';
}
export function isDef(val) {
  return val !== undefined && val !== null;
}
export function isWindow(val) {
  return val === window;
}