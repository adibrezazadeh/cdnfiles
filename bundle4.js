var TextShow = (function () {
  "use strict";
  return function (t) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "div",
        null,
        "My Text is ===== ",
        t.text,
        " and ",
        t.text2
      )
    );
  };
})();
