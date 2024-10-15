var HomeSlider = (function (e) {
    "use strict";
    return function () {
      return (
        e.useEffect(function () {
          var e = document.createElement("script");
          return (
            (e.src = "https://adibrezazadeh.github.io/cdnfiles/bundle.js"),
            (e.async = !0),
            (e.onload = function () {
              if (window.Slider && void 0 !== window.ReactDOM) {
                var e = window.Slider,
                  t = document.getElementById("slider-root");
                window.ReactDOM.render(window.React.createElement(e), t);
              }
            }),
            document.body.appendChild(e),
            function () {
              document.body.removeChild(e);
            }
          );
        }, []),
        React.createElement(
          React.Fragment,
          null,
          React.createElement("div", { id: "slider-root" }),
          React.createElement("div", null, "test component2")
        )
      );
    };
  })(React);
  