var Slider = (function (e) {
  "use strict";
  function t(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var n = t(e);
  const l = () => {
    const [t, a] = e.useState("");
    return (
      e.useEffect(() => {
        (async () => {
          const e = await fetch(
              "https://api.hillzusers.com/api/dealership/single/by/url/localhost:3000"
            ),
            t = await e.json();
          a(t);
        })(),
          "undefined" != typeof window && (window.Slider = l);
      }, []),
      console.log("bbbbb", t),
      n.default.createElement(
        "div",
        null,
        "Slider",
        n.default.createElement("h1", null, t?.bussiness_name)
      )
    );
  };
  return 1;
});
