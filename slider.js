(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.slider = factory(global.React));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Slider = () => {
    const [businessName, setBusinessName] = React.useState("");
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.hillzusers.com/api/dealership/single/by/url/localhost:3000`);
        const data = await response.json();
        setBusinessName(data);
      };
      fetchData();

      // ثبت کامپوننت به عنوان یک متغیر جهانی در window
      if (typeof window !== "undefined") {
        window.Slider = Slider;
      }
    }, []);
    console.log("bbbbb", businessName);
    return /*#__PURE__*/React__default["default"].createElement("div", null, "Slider", /*#__PURE__*/React__default["default"].createElement("h1", null, businessName?.bussiness_name));
  };

  return Slider;

}));
