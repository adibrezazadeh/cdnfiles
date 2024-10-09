var MyComponent = (function () {
    "use strict";
    return function () {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "h1",
          null,
          "hiasdsakdjadsalkfhjksadlfhsadjklghsdjlgk"
        )
      );
    };
  })();
  
  // مستند کردن MyComponent به شیء window
  window.MyComponent = MyComponent;