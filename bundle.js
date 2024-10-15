var Slider = (function (t) {
  "use strict";
  function r(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var e = r(t);
  function n(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
    return n;
  }
  function o(t, r, e, n, o, i, a) {
    try {
      var u = t[i](a),
        c = u.value;
    } catch (t) {
      return void e(t);
    }
    u.done ? r(c) : Promise.resolve(c).then(n, o);
  }
  function i() {
    i = function () {
      return r;
    };
    var t,
      r = {},
      e = Object.prototype,
      n = e.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, r, e) {
          t[r] = e.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      u = a.iterator || "@@iterator",
      c = a.asyncIterator || "@@asyncIterator",
      l = a.toStringTag || "@@toStringTag";
    function f(t, r, e) {
      return (
        Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[r]
      );
    }
    try {
      f({}, "");
    } catch (t) {
      f = function (t, r, e) {
        return (t[r] = e);
      };
    }
    function s(t, r, e, n) {
      var i = r && r.prototype instanceof g ? r : g,
        a = Object.create(i.prototype),
        u = new A(n || []);
      return o(a, "_invoke", { value: _(t, e, u) }), a;
    }
    function h(t, r, e) {
      try {
        return { type: "normal", arg: t.call(r, e) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    r.wrap = s;
    var p = "suspendedStart",
      y = "suspendedYield",
      v = "executing",
      d = "completed",
      m = {};
    function g() {}
    function w() {}
    function b() {}
    var E = {};
    f(E, u, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      L = x && x(x(G([])));
    L && L !== e && n.call(L, u) && (E = L);
    var j = (b.prototype = g.prototype = Object.create(E));
    function O(t) {
      ["next", "throw", "return"].forEach(function (r) {
        f(t, r, function (t) {
          return this._invoke(r, t);
        });
      });
    }
    function S(t, r) {
      function e(o, i, a, u) {
        var c = h(t[o], t, i);
        if ("throw" !== c.type) {
          var l = c.arg,
            f = l.value;
          return f && "object" == typeof f && n.call(f, "__await")
            ? r.resolve(f.__await).then(
                function (t) {
                  e("next", t, a, u);
                },
                function (t) {
                  e("throw", t, a, u);
                }
              )
            : r.resolve(f).then(
                function (t) {
                  (l.value = t), a(l);
                },
                function (t) {
                  return e("throw", t, a, u);
                }
              );
        }
        u(c.arg);
      }
      var i;
      o(this, "_invoke", {
        value: function (t, n) {
          function o() {
            return new r(function (r, o) {
              e(t, n, r, o);
            });
          }
          return (i = i ? i.then(o, o) : o());
        },
      });
    }
    function _(r, e, n) {
      var o = p;
      return function (i, a) {
        if (o === v) throw Error("Generator is already running");
        if (o === d) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var u = n.delegate;
          if (u) {
            var c = k(u, n);
            if (c) {
              if (c === m) continue;
              return c;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === p) throw ((o = d), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = v;
          var l = h(r, e, n);
          if ("normal" === l.type) {
            if (((o = n.done ? d : y), l.arg === m)) continue;
            return { value: l.arg, done: n.done };
          }
          "throw" === l.type &&
            ((o = d), (n.method = "throw"), (n.arg = l.arg));
        }
      };
    }
    function k(r, e) {
      var n = e.method,
        o = r.iterator[n];
      if (o === t)
        return (
          (e.delegate = null),
          ("throw" === n &&
            r.iterator.return &&
            ((e.method = "return"),
            (e.arg = t),
            k(r, e),
            "throw" === e.method)) ||
            ("return" !== n &&
              ((e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          m
        );
      var i = h(o, r.iterator, e.arg);
      if ("throw" === i.type)
        return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), m;
      var a = i.arg;
      return a
        ? a.done
          ? ((e[r.resultName] = a.value),
            (e.next = r.nextLoc),
            "return" !== e.method && ((e.method = "next"), (e.arg = t)),
            (e.delegate = null),
            m)
          : a
        : ((e.method = "throw"),
          (e.arg = new TypeError("iterator result is not an object")),
          (e.delegate = null),
          m);
    }
    function N(t) {
      var r = { tryLoc: t[0] };
      1 in t && (r.catchLoc = t[1]),
        2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
        this.tryEntries.push(r);
    }
    function P(t) {
      var r = t.completion || {};
      (r.type = "normal"), delete r.arg, (t.completion = r);
    }
    function A(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(N, this),
        this.reset(!0);
    }
    function G(r) {
      if (r || "" === r) {
        var e = r[u];
        if (e) return e.call(r);
        if ("function" == typeof r.next) return r;
        if (!isNaN(r.length)) {
          var o = -1,
            i = function e() {
              for (; ++o < r.length; )
                if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
              return (e.value = t), (e.done = !0), e;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(typeof r + " is not iterable");
    }
    return (
      (w.prototype = b),
      o(j, "constructor", { value: b, configurable: !0 }),
      o(b, "constructor", { value: w, configurable: !0 }),
      (w.displayName = f(b, l, "GeneratorFunction")),
      (r.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return (
          !!r && (r === w || "GeneratorFunction" === (r.displayName || r.name))
        );
      }),
      (r.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, b)
            : ((t.__proto__ = b), f(t, l, "GeneratorFunction")),
          (t.prototype = Object.create(j)),
          t
        );
      }),
      (r.awrap = function (t) {
        return { __await: t };
      }),
      O(S.prototype),
      f(S.prototype, c, function () {
        return this;
      }),
      (r.AsyncIterator = S),
      (r.async = function (t, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new S(s(t, e, n, o), i);
        return r.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      O(j),
      f(j, l, "Generator"),
      f(j, u, function () {
        return this;
      }),
      f(j, "toString", function () {
        return "[object Generator]";
      }),
      (r.keys = function (t) {
        var r = Object(t),
          e = [];
        for (var n in r) e.push(n);
        return (
          e.reverse(),
          function t() {
            for (; e.length; ) {
              var n = e.pop();
              if (n in r) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (r.values = G),
      (A.prototype = {
        constructor: A,
        reset: function (r) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(P),
            !r)
          )
            for (var e in this)
              "t" === e.charAt(0) &&
                n.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (r) {
          if (this.done) throw r;
          var e = this;
          function o(n, o) {
            return (
              (u.type = "throw"),
              (u.arg = r),
              (e.next = n),
              o && ((e.method = "next"), (e.arg = t)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ("root" === a.tryLoc) return o("end");
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, "catchLoc"),
                l = n.call(a, "finallyLoc");
              if (c && l) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === t || "continue" === t) &&
            i.tryLoc <= r &&
            r <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = r),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), m)
              : this.complete(a)
          );
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && r && (this.next = r),
            m
          );
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t)
              return this.complete(e.completion, e.afterLoc), P(e), m;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                P(e);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (r, e, n) {
          return (
            (this.delegate = { iterator: G(r), resultName: e, nextLoc: n }),
            "next" === this.method && (this.arg = t),
            m
          );
        },
      }),
      r
    );
  }
  function a(t, r) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, r) {
        var e =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != e) {
          var n,
            o,
            i,
            a,
            u = [],
            c = !0,
            l = !1;
          try {
            if (((i = (e = e.call(t)).next), 0 === r)) {
              if (Object(e) !== e) return;
              c = !1;
            } else
              for (
                ;
                !(c = (n = i.call(e)).done) &&
                (u.push(n.value), u.length !== r);
                c = !0
              );
          } catch (t) {
            (l = !0), (o = t);
          } finally {
            try {
              if (!c && null != e.return && ((a = e.return()), Object(a) !== a))
                return;
            } finally {
              if (l) throw o;
            }
          }
          return u;
        }
      })(t, r) ||
      (function (t, r) {
        if (t) {
          if ("string" == typeof t) return n(t, r);
          var e = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? n(t, r)
              : void 0
          );
        }
      })(t, r) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  var u = function () {
    var r = a(t.useState(""), 2),
      n = r[0],
      c = r[1],
      l = a(t.useState(!1), 2),
      f = l[0],
      s = l[1];
    return (
      t.useEffect(function () {
        var t = (function () {
          var t,
            r =
              ((t = i().mark(function t() {
                var r, e;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          fetch(
                            "https://api.hillzusers.com/api/dealership/single/by/url/localhost:3000"
                          )
                        );
                      case 2:
                        return (r = t.sent), (t.next = 5), r.json();
                      case 5:
                        (e = t.sent), c(e);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var r = this,
                  e = arguments;
                return new Promise(function (n, i) {
                  var a = t.apply(r, e);
                  function u(t) {
                    o(a, n, i, u, c, "next", t);
                  }
                  function c(t) {
                    o(a, n, i, u, c, "throw", t);
                  }
                  u(void 0);
                });
              });
          return function () {
            return r.apply(this, arguments);
          };
        })();
        t(), "undefined" != typeof window && (window.Slider = u);
      }, []),
      console.log("bbbbb", n),
      e.default.createElement(
        "div",
        null,
        e.default.createElement(
          "h1",
          null,
          null == n ? void 0 : n.bussiness_name
        ),
        e.default.createElement(
          "button",
          {
            onClick: function () {
              return s(!0);
            },
          },
          "Click to Show modal"
        ),
        f &&
          e.default.createElement(
            "div",
            { className: "modal" },
            e.default.createElement("h2", null, "Hi!"),
            e.default.createElement(
              "button",
              {
                onClick: function () {
                  return s(!1);
                },
              },
              "Close"
            )
          )
      )
    );
  };
  return u;
})(React);
