(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@/components/Btnmodal')) :
  typeof define === 'function' && define.amd ? define(['@/components/Btnmodal'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyComponent = factory(global.Btnmodal));
})(this, (function (Btnmodal) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Btnmodal__default = /*#__PURE__*/_interopDefaultLegacy(Btnmodal);

  function Home() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btnmodal__default["default"], {
      greeting: "SALAM"
    }));
  }

  return Home;

}));
