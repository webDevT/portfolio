!(function (t) {
  var e = {};
  function i(n) {
      if (e[n]) return e[n].exports;
      var r = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
          i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
          if ((1 & e && (t = i(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
              for (var r in t)
                  i.d(
                      n,
                      r,
                      function (e) {
                          return t[e];
                      }.bind(null, r)
                  );
          return n;
      }),
      (i.n = function (t) {
          var e =
              t && t.__esModule
                  ? function () {
                        return t.default;
                    }
                  : function () {
                        return t;
                    };
          return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = "/wp-content/themes/artistsweb/assets/"),
      i((i.s = 7));
})([
  function (t, e, i) {
      t.exports = (function () {
          function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
              }
          }
          function e(e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
          }
          function i() {
              return (i =
                  Object.assign ||
                  function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                          var i = arguments[e];
                          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                      }
                      return t;
                  }).apply(this, arguments);
          }
          function n(t, e) {
              (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
          }
          function r(t) {
              return (r = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
          }
          function o(t, e) {
              return (o =
                  Object.setPrototypeOf ||
                  function (t, e) {
                      return (t.__proto__ = e), t;
                  })(t, e);
          }
          function s(t, e, i) {
              return (s = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                  } catch (t) {
                      return !1;
                  }
              })()
                  ? Reflect.construct
                  : function (t, e, i) {
                        var n = [null];
                        n.push.apply(n, e);
                        var r = new (Function.bind.apply(t, n))();
                        return i && o(r, i.prototype), r;
                    }).apply(null, arguments);
          }
          function a(t) {
              var e = "function" == typeof Map ? new Map() : void 0;
              return (a = function (t) {
                  if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                  if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                  if (void 0 !== e) {
                      if (e.has(t)) return e.get(t);
                      e.set(t, i);
                  }
                  function i() {
                      return s(t, arguments, r(this).constructor);
                  }
                  return (i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } })), o(i, t);
              })(t);
          }
          function l(t, e) {
              try {
                  var i = t();
              } catch (t) {
                  return e(t);
              }
              return i && i.then ? i.then(void 0, e) : i;
          }
          "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
          var u,
              c = "2.9.7";
          !(function (t) {
              (t[(t.off = 0)] = "off"), (t[(t.error = 1)] = "error"), (t[(t.warning = 2)] = "warning"), (t[(t.info = 3)] = "info"), (t[(t.debug = 4)] = "debug");
          })(u || (u = {}));
          var h = u.off,
              f = (function () {
                  function t(t) {
                      this.t = t;
                  }
                  (t.getLevel = function () {
                      return h;
                  }),
                      (t.setLevel = function (t) {
                          return (h = u[t]);
                      });
                  var e = t.prototype;
                  return (
                      (e.error = function () {
                          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                          this.i(console.error, u.error, e);
                      }),
                      (e.warn = function () {
                          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                          this.i(console.warn, u.warning, e);
                      }),
                      (e.info = function () {
                          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                          this.i(console.info, u.info, e);
                      }),
                      (e.debug = function () {
                          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                          this.i(console.log, u.debug, e);
                      }),
                      (e.i = function (e, i, n) {
                          i <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(n));
                      }),
                      t
                  );
              })(),
              d = T,
              p = w,
              m = b,
              g = _,
              v = k,
              D = "/",
              y = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
          function b(t, e) {
              for (var i, n = [], r = 0, o = 0, s = "", a = (e && e.delimiter) || D, l = (e && e.whitelist) || void 0, u = !1; null !== (i = y.exec(t)); ) {
                  var c = i[0],
                      h = i[1],
                      f = i.index;
                  if (((s += t.slice(o, f)), (o = f + c.length), h)) (s += h[1]), (u = !0);
                  else {
                      var d = "",
                          p = i[2],
                          m = i[3],
                          g = i[4],
                          v = i[5];
                      if (!u && s.length) {
                          var b = s.length - 1,
                              w = s[b];
                          (!l || l.indexOf(w) > -1) && ((d = w), (s = s.slice(0, b)));
                      }
                      s && (n.push(s), (s = ""), (u = !1));
                      var _ = m || g,
                          E = d || a;
                      n.push({ name: p || r++, prefix: d, delimiter: E, optional: "?" === v || "*" === v, repeat: "+" === v || "*" === v, pattern: _ ? C(_) : "[^" + x(E === a ? E : E + a) + "]+?" });
                  }
              }
              return (s || o < t.length) && n.push(s + t.substr(o)), n;
          }
          function w(t, e) {
              return function (i, n) {
                  var r = t.exec(i);
                  if (!r) return !1;
                  for (var o = r[0], s = r.index, a = {}, l = (n && n.decode) || decodeURIComponent, u = 1; u < r.length; u++)
                      if (void 0 !== r[u]) {
                          var c = e[u - 1];
                          a[c.name] = c.repeat
                              ? r[u].split(c.delimiter).map(function (t) {
                                    return l(t, c);
                                })
                              : l(r[u], c);
                      }
                  return { path: o, index: s, params: a };
              };
          }
          function _(t, e) {
              for (var i = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (i[n] = new RegExp("^(?:" + t[n].pattern + ")$", E(e)));
              return function (e, n) {
                  for (var r = "", o = (n && n.encode) || encodeURIComponent, s = !n || !1 !== n.validate, a = 0; a < t.length; a++) {
                      var l = t[a];
                      if ("string" != typeof l) {
                          var u,
                              c = e ? e[l.name] : void 0;
                          if (Array.isArray(c)) {
                              if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but got array');
                              if (0 === c.length) {
                                  if (l.optional) continue;
                                  throw new TypeError('Expected "' + l.name + '" to not be empty');
                              }
                              for (var h = 0; h < c.length; h++) {
                                  if (((u = o(c[h], l)), s && !i[a].test(u))) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '"');
                                  r += (0 === h ? l.prefix : l.delimiter) + u;
                              }
                          } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
                              if (!l.optional) throw new TypeError('Expected "' + l.name + '" to be ' + (l.repeat ? "an array" : "a string"));
                          } else {
                              if (((u = o(String(c), l)), s && !i[a].test(u))) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but got "' + u + '"');
                              r += l.prefix + u;
                          }
                      } else r += l;
                  }
                  return r;
              };
          }
          function x(t) {
              return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
          }
          function C(t) {
              return t.replace(/([=!:$/()])/g, "\\$1");
          }
          function E(t) {
              return t && t.sensitive ? "" : "i";
          }
          function k(t, e, i) {
              for (
                  var n = (i = i || {}).strict,
                      r = !1 !== i.start,
                      o = !1 !== i.end,
                      s = i.delimiter || D,
                      a = []
                          .concat(i.endsWith || [])
                          .map(x)
                          .concat("$")
                          .join("|"),
                      l = r ? "^" : "",
                      u = 0;
                  u < t.length;
                  u++
              ) {
                  var c = t[u];
                  if ("string" == typeof c) l += x(c);
                  else {
                      var h = c.repeat ? "(?:" + c.pattern + ")(?:" + x(c.delimiter) + "(?:" + c.pattern + "))*" : c.pattern;
                      e && e.push(c), (l += c.optional ? (c.prefix ? "(?:" + x(c.prefix) + "(" + h + "))?" : "(" + h + ")?") : x(c.prefix) + "(" + h + ")");
                  }
              }
              if (o) n || (l += "(?:" + x(s) + ")?"), (l += "$" === a ? "$" : "(?=" + a + ")");
              else {
                  var f = t[t.length - 1],
                      d = "string" == typeof f ? f[f.length - 1] === s : void 0 === f;
                  n || (l += "(?:" + x(s) + "(?=" + a + "))?"), d || (l += "(?=" + x(s) + "|" + a + ")");
              }
              return new RegExp(l, E(i));
          }
          function T(t, e, i) {
              return t instanceof RegExp
                  ? (function (t, e) {
                        if (!e) return t;
                        var i = t.source.match(/\((?!\?)/g);
                        if (i) for (var n = 0; n < i.length; n++) e.push({ name: n, prefix: null, delimiter: null, optional: !1, repeat: !1, pattern: null });
                        return t;
                    })(t, e)
                  : Array.isArray(t)
                  ? (function (t, e, i) {
                        for (var n = [], r = 0; r < t.length; r++) n.push(T(t[r], e, i).source);
                        return new RegExp("(?:" + n.join("|") + ")", E(i));
                    })(t, e, i)
                  : (function (t, e, i) {
                        return k(b(t, i), e, i);
                    })(t, e, i);
          }
          (d.match = function (t, e) {
              var i = [];
              return w(T(t, i, e), i);
          }),
              (d.regexpToFunction = p),
              (d.parse = m),
              (d.compile = function (t, e) {
                  return _(b(t, e), e);
              }),
              (d.tokensToFunction = g),
              (d.tokensToRegExp = v);
          var $ = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" },
              F = new ((function () {
                  function t() {
                      (this.o = $), (this.u = new DOMParser());
                  }
                  var e = t.prototype;
                  return (
                      (e.toString = function (t) {
                          return t.outerHTML;
                      }),
                      (e.toDocument = function (t) {
                          return this.u.parseFromString(t, "text/html");
                      }),
                      (e.toElement = function (t) {
                          var e = document.createElement("div");
                          return (e.innerHTML = t), e;
                      }),
                      (e.getHtml = function (t) {
                          return void 0 === t && (t = document), this.toString(t.documentElement);
                      }),
                      (e.getWrapper = function (t) {
                          return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
                      }),
                      (e.getContainer = function (t) {
                          return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
                      }),
                      (e.removeContainer = function (t) {
                          document.body.contains(t) && t.parentNode.removeChild(t);
                      }),
                      (e.addContainer = function (t, e) {
                          var i = this.getContainer();
                          i ? this.s(t, i) : e.appendChild(t);
                      }),
                      (e.getNamespace = function (t) {
                          void 0 === t && (t = document);
                          var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                          return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
                      }),
                      (e.getHref = function (t) {
                          if (t.tagName && "a" === t.tagName.toLowerCase()) {
                              if ("string" == typeof t.href) return t.href;
                              var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                              if (e) return this.resolveUrl(e.baseVal || e);
                          }
                          return null;
                      }),
                      (e.resolveUrl = function () {
                          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                          var n = e.length;
                          if (0 === n) throw new Error("resolveUrl requires at least one argument; got none.");
                          var r = document.createElement("base");
                          if (((r.href = arguments[0]), 1 === n)) return r.href;
                          var o = document.getElementsByTagName("head")[0];
                          o.insertBefore(r, o.firstChild);
                          for (var s, a = document.createElement("a"), l = 1; l < n; l++) (a.href = arguments[l]), (r.href = s = a.href);
                          return o.removeChild(r), s;
                      }),
                      (e.s = function (t, e) {
                          e.parentNode.insertBefore(t, e.nextSibling);
                      }),
                      t
                  );
              })())(),
              A = new ((function () {
                  function t() {
                      (this.h = []), (this.v = -1);
                  }
                  var n = t.prototype;
                  return (
                      (n.init = function (t, e) {
                          this.l = "barba";
                          var i = { ns: e, scroll: { x: window.scrollX, y: window.scrollY }, url: t };
                          this.h.push(i), (this.v = 0);
                          var n = { from: this.l, index: 0, states: [].concat(this.h) };
                          window.history && window.history.replaceState(n, "", t);
                      }),
                      (n.change = function (t, e, i) {
                          if (i && i.state) {
                              var n = i.state,
                                  r = n.index;
                              (e = this.m(this.v - r)), this.replace(n.states), (this.v = r);
                          } else this.add(t, e);
                          return e;
                      }),
                      (n.add = function (t, e) {
                          var i = this.size,
                              n = this.p(e),
                              r = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t };
                          this.h.push(r), (this.v = i);
                          var o = { from: this.l, index: i, states: [].concat(this.h) };
                          switch (n) {
                              case "push":
                                  window.history && window.history.pushState(o, "", t);
                                  break;
                              case "replace":
                                  window.history && window.history.replaceState(o, "", t);
                          }
                      }),
                      (n.update = function (t, e) {
                          var n = e || this.v,
                              r = i({}, this.get(n), {}, t);
                          this.set(n, r);
                      }),
                      (n.remove = function (t) {
                          t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
                      }),
                      (n.clear = function () {
                          (this.h = []), (this.v = -1);
                      }),
                      (n.replace = function (t) {
                          this.h = t;
                      }),
                      (n.get = function (t) {
                          return this.h[t];
                      }),
                      (n.set = function (t, e) {
                          return (this.h[t] = e);
                      }),
                      (n.p = function (t) {
                          var e = "push",
                              i = t,
                              n = $.prefix + "-" + $.history;
                          return i.hasAttribute && i.hasAttribute(n) && (e = i.getAttribute(n)), e;
                      }),
                      (n.m = function (t) {
                          return Math.abs(t) > 1 ? (t > 0 ? "forward" : "back") : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
                      }),
                      e(t, [
                          {
                              key: "current",
                              get: function () {
                                  return this.h[this.v];
                              },
                          },
                          {
                              key: "state",
                              get: function () {
                                  return this.h[this.h.length - 1];
                              },
                          },
                          {
                              key: "previous",
                              get: function () {
                                  return this.v < 1 ? null : this.h[this.v - 1];
                              },
                          },
                          {
                              key: "size",
                              get: function () {
                                  return this.h.length;
                              },
                          },
                      ]),
                      t
                  );
              })())(),
              O = function (t, e) {
                  try {
                      var i = (function () {
                          if (!e.next.html)
                              return Promise.resolve(t).then(function (t) {
                                  var i = e.next;
                                  if (t) {
                                      var n = F.toElement(t);
                                      (i.namespace = F.getNamespace(n)), (i.container = F.getContainer(n)), (i.html = t), A.update({ ns: i.namespace });
                                      var r = F.toDocument(t);
                                      document.title = r.title;
                                  }
                              });
                      })();
                      return Promise.resolve(i && i.then ? i.then(function () {}) : void 0);
                  } catch (t) {
                      return Promise.reject(t);
                  }
              },
              S = d,
              P = {
                  __proto__: null,
                  update: O,
                  nextTick: function () {
                      return new Promise(function (t) {
                          window.requestAnimationFrame(t);
                      });
                  },
                  pathToRegexp: S,
              },
              B = function () {
                  return window.location.origin;
              },
              M = function (t) {
                  return void 0 === t && (t = window.location.href), R(t).port;
              },
              R = function (t) {
                  var e,
                      i = t.match(/:\d+/);
                  if (null === i) /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
                  else {
                      var n = i[0].substring(1);
                      e = parseInt(n, 10);
                  }
                  var r,
                      o = t.replace(B(), ""),
                      s = {},
                      a = o.indexOf("#");
                  a >= 0 && ((r = o.slice(a + 1)), (o = o.slice(0, a)));
                  var l = o.indexOf("?");
                  return l >= 0 && ((s = L(o.slice(l + 1))), (o = o.slice(0, l))), { hash: r, path: o, port: e, query: s };
              },
              L = function (t) {
                  return t.split("&").reduce(function (t, e) {
                      var i = e.split("=");
                      return (t[i[0]] = i[1]), t;
                  }, {});
              },
              j = function (t) {
                  return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
              },
              z = {
                  __proto__: null,
                  getHref: function () {
                      return window.location.href;
                  },
                  getOrigin: B,
                  getPort: M,
                  getPath: function (t) {
                      return void 0 === t && (t = window.location.href), R(t).path;
                  },
                  parse: R,
                  parseQuery: L,
                  clean: j,
              };
          function I(t, e, i) {
              return (
                  void 0 === e && (e = 2e3),
                  new Promise(function (n, r) {
                      var o = new XMLHttpRequest();
                      (o.onreadystatechange = function () {
                          if (o.readyState === XMLHttpRequest.DONE)
                              if (200 === o.status) n(o.responseText);
                              else if (o.status) {
                                  var e = { status: o.status, statusText: o.statusText };
                                  i(t, e), r(e);
                              }
                      }),
                          (o.ontimeout = function () {
                              var n = new Error("Timeout error [" + e + "]");
                              i(t, n), r(n);
                          }),
                          (o.onerror = function () {
                              var e = new Error("Fetch error");
                              i(t, e), r(e);
                          }),
                          o.open("GET", t),
                          (o.timeout = e),
                          o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
                          o.setRequestHeader("x-barba", "yes"),
                          o.send();
                  })
              );
          }
          var H = function (t) {
              return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
          };
          function W(t, e) {
              return (
                  void 0 === e && (e = {}),
                  function () {
                      for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                      var o = !1,
                          s = new Promise(function (i, r) {
                              e.async = function () {
                                  return (
                                      (o = !0),
                                      function (t, e) {
                                          t ? r(t) : i(e);
                                      }
                                  );
                              };
                              var s = t.apply(e, n);
                              o || (H(s) ? s.then(i, r) : i(s));
                          });
                      return s;
                  }
              );
          }
          var N = new ((function (t) {
                  function e() {
                      var e;
                      return (
                          ((e = t.call(this) || this).logger = new f("@barba/core")),
                          (e.all = [
                              "ready",
                              "page",
                              "reset",
                              "currentAdded",
                              "currentRemoved",
                              "nextAdded",
                              "nextRemoved",
                              "beforeOnce",
                              "once",
                              "afterOnce",
                              "before",
                              "beforeLeave",
                              "leave",
                              "afterLeave",
                              "beforeEnter",
                              "enter",
                              "afterEnter",
                              "after",
                          ]),
                          (e.registered = new Map()),
                          e.init(),
                          e
                      );
                  }
                  n(e, t);
                  var i = e.prototype;
                  return (
                      (i.init = function () {
                          var t = this;
                          this.registered.clear(),
                              this.all.forEach(function (e) {
                                  t[e] ||
                                      (t[e] = function (i, n) {
                                          t.registered.has(e) || t.registered.set(e, new Set()), t.registered.get(e).add({ ctx: n || {}, fn: i });
                                      });
                              });
                      }),
                      (i.do = function (t) {
                          for (var e = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                          if (this.registered.has(t)) {
                              var o = Promise.resolve();
                              return (
                                  this.registered.get(t).forEach(function (t) {
                                      o = o.then(function () {
                                          return W(t.fn, t.ctx).apply(void 0, n);
                                      });
                                  }),
                                  o.catch(function (i) {
                                      e.logger.debug("Hook error [" + t + "]"), e.logger.error(i);
                                  })
                              );
                          }
                          return Promise.resolve();
                      }),
                      (i.clear = function () {
                          var t = this;
                          this.all.forEach(function (e) {
                              delete t[e];
                          }),
                              this.init();
                      }),
                      (i.help = function () {
                          this.logger.info("Available hooks: " + this.all.join(","));
                          var t = [];
                          this.registered.forEach(function (e, i) {
                              return t.push(i);
                          }),
                              this.logger.info("Registered hooks: " + t.join(","));
                      }),
                      e
                  );
              })(function () {}))(),
              Y = (function () {
                  function t(t) {
                      if (((this.P = []), "boolean" == typeof t)) this.g = t;
                      else {
                          var e = Array.isArray(t) ? t : [t];
                          this.P = e.map(function (t) {
                              return S(t);
                          });
                      }
                  }
                  return (
                      (t.prototype.checkHref = function (t) {
                          if ("boolean" == typeof this.g) return this.g;
                          var e = R(t).path;
                          return this.P.some(function (t) {
                              return null !== t.exec(e);
                          });
                      }),
                      t
                  );
              })(),
              q = (function (t) {
                  function e(e) {
                      var i;
                      return ((i = t.call(this, e) || this).k = new Map()), i;
                  }
                  n(e, t);
                  var r = e.prototype;
                  return (
                      (r.set = function (t, e, i) {
                          return this.k.set(t, { action: i, request: e }), { action: i, request: e };
                      }),
                      (r.get = function (t) {
                          return this.k.get(t);
                      }),
                      (r.getRequest = function (t) {
                          return this.k.get(t).request;
                      }),
                      (r.getAction = function (t) {
                          return this.k.get(t).action;
                      }),
                      (r.has = function (t) {
                          return !this.checkHref(t) && this.k.has(t);
                      }),
                      (r.delete = function (t) {
                          return this.k.delete(t);
                      }),
                      (r.update = function (t, e) {
                          var n = i({}, this.k.get(t), {}, e);
                          return this.k.set(t, n), n;
                      }),
                      e
                  );
              })(Y),
              X = function () {
                  return !window.history.pushState;
              },
              V = function (t) {
                  return !t.el || !t.href;
              },
              U = function (t) {
                  var e = t.event;
                  return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
              },
              K = function (t) {
                  var e = t.el;
                  return e.hasAttribute("target") && "_blank" === e.target;
              },
              G = function (t) {
                  var e = t.el;
                  return (void 0 !== e.protocol && window.location.protocol !== e.protocol) || (void 0 !== e.hostname && window.location.hostname !== e.hostname);
              },
              Q = function (t) {
                  var e = t.el;
                  return void 0 !== e.port && M() !== M(e.href);
              },
              Z = function (t) {
                  var e = t.el;
                  return e.getAttribute && "string" == typeof e.getAttribute("download");
              },
              J = function (t) {
                  return t.el.hasAttribute($.prefix + "-" + $.prevent);
              },
              tt = function (t) {
                  return Boolean(t.el.closest("[" + $.prefix + "-" + $.prevent + '="all"]'));
              },
              et = function (t) {
                  var e = t.href;
                  return j(e) === j() && M(e) === M();
              },
              it = (function (t) {
                  function e(e) {
                      var i;
                      return ((i = t.call(this, e) || this).suite = []), (i.tests = new Map()), i.init(), i;
                  }
                  n(e, t);
                  var i = e.prototype;
                  return (
                      (i.init = function () {
                          this.add("pushState", X),
                              this.add("exists", V),
                              this.add("newTab", U),
                              this.add("blank", K),
                              this.add("corsDomain", G),
                              this.add("corsPort", Q),
                              this.add("download", Z),
                              this.add("preventSelf", J),
                              this.add("preventAll", tt),
                              this.add("sameUrl", et, !1);
                      }),
                      (i.add = function (t, e, i) {
                          void 0 === i && (i = !0), this.tests.set(t, e), i && this.suite.push(t);
                      }),
                      (i.run = function (t, e, i, n) {
                          return this.tests.get(t)({ el: e, event: i, href: n });
                      }),
                      (i.checkLink = function (t, e, i) {
                          var n = this;
                          return this.suite.some(function (r) {
                              return n.run(r, t, e, i);
                          });
                      }),
                      e
                  );
              })(Y),
              nt = (function (t) {
                  function e(i, n) {
                      var r;
                      void 0 === n && (n = "Barba error");
                      for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) s[a - 2] = arguments[a];
                      return (
                          ((r = t.call.apply(t, [this].concat(s)) || this).error = i),
                          (r.label = n),
                          Error.captureStackTrace &&
                              Error.captureStackTrace(
                                  (function (t) {
                                      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                      return t;
                                  })(r),
                                  e
                              ),
                          (r.name = "BarbaError"),
                          r
                      );
                  }
                  return n(e, t), e;
              })(a(Error)),
              rt = (function () {
                  function t(t) {
                      void 0 === t && (t = []),
                          (this.logger = new f("@barba/core")),
                          (this.all = []),
                          (this.page = []),
                          (this.once = []),
                          (this.A = [
                              { name: "namespace", type: "strings" },
                              { name: "custom", type: "function" },
                          ]),
                          t && (this.all = this.all.concat(t)),
                          this.update();
                  }
                  var e = t.prototype;
                  return (
                      (e.add = function (t, e) {
                          switch (t) {
                              case "rule":
                                  this.A.splice(e.position || 0, 0, e.value);
                                  break;
                              case "transition":
                              default:
                                  this.all.push(e);
                          }
                          this.update();
                      }),
                      (e.resolve = function (t, e) {
                          var i = this;
                          void 0 === e && (e = {});
                          var n = e.once ? this.once : this.page;
                          n = n.filter(
                              e.self
                                  ? function (t) {
                                        return t.name && "self" === t.name;
                                    }
                                  : function (t) {
                                        return !t.name || "self" !== t.name;
                                    }
                          );
                          var r = new Map(),
                              o = n.find(function (n) {
                                  var o = !0,
                                      s = {};
                                  return (
                                      !(!e.self || "self" !== n.name) ||
                                      (i.A.reverse().forEach(function (e) {
                                          o &&
                                              ((o = i.R(n, e, t, s)),
                                              n.from && n.to && (o = i.R(n, e, t, s, "from") && i.R(n, e, t, s, "to")),
                                              n.from && !n.to && (o = i.R(n, e, t, s, "from")),
                                              !n.from && n.to && (o = i.R(n, e, t, s, "to")));
                                      }),
                                      r.set(n, s),
                                      o)
                                  );
                              }),
                              s = r.get(o),
                              a = [];
                          if ((a.push(e.once ? "once" : "page"), e.self && a.push("self"), s)) {
                              var l,
                                  u = [o];
                              Object.keys(s).length > 0 && u.push(s), (l = this.logger).info.apply(l, ["Transition found [" + a.join(",") + "]"].concat(u));
                          } else this.logger.info("No transition found [" + a.join(",") + "]");
                          return o;
                      }),
                      (e.update = function () {
                          var t = this;
                          (this.all = this.all
                              .map(function (e) {
                                  return t.T(e);
                              })
                              .sort(function (t, e) {
                                  return t.priority - e.priority;
                              })
                              .reverse()
                              .map(function (t) {
                                  return delete t.priority, t;
                              })),
                              (this.page = this.all.filter(function (t) {
                                  return void 0 !== t.leave || void 0 !== t.enter;
                              })),
                              (this.once = this.all.filter(function (t) {
                                  return void 0 !== t.once;
                              }));
                      }),
                      (e.R = function (t, e, i, n, r) {
                          var o = !0,
                              s = !1,
                              a = t,
                              l = e.name,
                              u = l,
                              c = l,
                              h = l,
                              f = r ? a[r] : a,
                              d = "to" === r ? i.next : i.current;
                          if (r ? f && f[l] : f[l]) {
                              switch (e.type) {
                                  case "strings":
                                  default:
                                      var p = Array.isArray(f[u]) ? f[u] : [f[u]];
                                      d[u] && -1 !== p.indexOf(d[u]) && (s = !0), -1 === p.indexOf(d[u]) && (o = !1);
                                      break;
                                  case "object":
                                      var m = Array.isArray(f[c]) ? f[c] : [f[c]];
                                      d[c] ? (d[c].name && -1 !== m.indexOf(d[c].name) && (s = !0), -1 === m.indexOf(d[c].name) && (o = !1)) : (o = !1);
                                      break;
                                  case "function":
                                      f[h](i) ? (s = !0) : (o = !1);
                              }
                              s && (r ? ((n[r] = n[r] || {}), (n[r][l] = a[r][l])) : (n[l] = a[l]));
                          }
                          return o;
                      }),
                      (e.O = function (t, e, i) {
                          var n = 0;
                          return (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) && ((n += Math.pow(10, i)), t.from && t.from[e] && (n += 1), t.to && t.to[e] && (n += 2)), n;
                      }),
                      (e.T = function (t) {
                          var e = this;
                          t.priority = 0;
                          var i = 0;
                          return (
                              this.A.forEach(function (n, r) {
                                  i += e.O(t, n.name, r + 1);
                              }),
                              (t.priority = i),
                              t
                          );
                      }),
                      t
                  );
              })(),
              ot = (function () {
                  function t(t) {
                      void 0 === t && (t = []), (this.logger = new f("@barba/core")), (this.S = !1), (this.store = new rt(t));
                  }
                  var i = t.prototype;
                  return (
                      (i.get = function (t, e) {
                          return this.store.resolve(t, e);
                      }),
                      (i.doOnce = function (t) {
                          var e = t.data,
                              i = t.transition;
                          try {
                              var n = function () {
                                      r.S = !1;
                                  },
                                  r = this,
                                  o = i || {};
                              r.S = !0;
                              var s = l(
                                  function () {
                                      return Promise.resolve(r.j("beforeOnce", e, o)).then(function () {
                                          return Promise.resolve(r.once(e, o)).then(function () {
                                              return Promise.resolve(r.j("afterOnce", e, o)).then(function () {});
                                          });
                                      });
                                  },
                                  function (t) {
                                      (r.S = !1), r.logger.debug("Transition error [before/after/once]"), r.logger.error(t);
                                  }
                              );
                              return Promise.resolve(s && s.then ? s.then(n) : n());
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.doPage = function (t) {
                          var e = t.data,
                              i = t.transition,
                              n = t.page,
                              r = t.wrapper;
                          try {
                              var o = function (t) {
                                      if (s) return t;
                                      a.S = !1;
                                  },
                                  s = !1,
                                  a = this,
                                  u = i || {},
                                  c = !0 === u.sync || !1;
                              a.S = !0;
                              var h = l(
                                  function () {
                                      function t() {
                                          return Promise.resolve(a.j("before", e, u)).then(function () {
                                              var t = !1;
                                              function i(i) {
                                                  return t
                                                      ? i
                                                      : Promise.resolve(a.remove(e)).then(function () {
                                                            return Promise.resolve(a.j("after", e, u)).then(function () {});
                                                        });
                                              }
                                              var o = (function () {
                                                  if (c)
                                                      return l(
                                                          function () {
                                                              return Promise.resolve(a.add(e, r)).then(function () {
                                                                  return Promise.resolve(a.j("beforeLeave", e, u)).then(function () {
                                                                      return Promise.resolve(a.j("beforeEnter", e, u)).then(function () {
                                                                          return Promise.resolve(Promise.all([a.leave(e, u), a.enter(e, u)])).then(function () {
                                                                              return Promise.resolve(a.j("afterLeave", e, u)).then(function () {
                                                                                  return Promise.resolve(a.j("afterEnter", e, u)).then(function () {});
                                                                              });
                                                                          });
                                                                      });
                                                                  });
                                                              });
                                                          },
                                                          function (t) {
                                                              if (a.M(t)) throw new nt(t, "Transition error [sync]");
                                                          }
                                                      );
                                                  var i = function (i) {
                                                          return t
                                                              ? i
                                                              : l(
                                                                    function () {
                                                                        var t = (function () {
                                                                            if (!1 !== o)
                                                                                return Promise.resolve(a.add(e, r)).then(function () {
                                                                                    return Promise.resolve(a.j("beforeEnter", e, u)).then(function () {
                                                                                        return Promise.resolve(a.enter(e, u, o)).then(function () {
                                                                                            return Promise.resolve(a.j("afterEnter", e, u)).then(function () {});
                                                                                        });
                                                                                    });
                                                                                });
                                                                        })();
                                                                        if (t && t.then) return t.then(function () {});
                                                                    },
                                                                    function (t) {
                                                                        if (a.M(t)) throw new nt(t, "Transition error [before/after/enter]");
                                                                    }
                                                                );
                                                      },
                                                      o = !1,
                                                      s = l(
                                                          function () {
                                                              return Promise.resolve(a.j("beforeLeave", e, u)).then(function () {
                                                                  return Promise.resolve(
                                                                      Promise.all([a.leave(e, u), O(n, e)]).then(function (t) {
                                                                          return t[0];
                                                                      })
                                                                  ).then(function (t) {
                                                                      return (o = t), Promise.resolve(a.j("afterLeave", e, u)).then(function () {});
                                                                  });
                                                              });
                                                          },
                                                          function (t) {
                                                              if (a.M(t)) throw new nt(t, "Transition error [before/after/leave]");
                                                          }
                                                      );
                                                  return s && s.then ? s.then(i) : i(s);
                                              })();
                                              return o && o.then ? o.then(i) : i(o);
                                          });
                                      }
                                      var i = (function () {
                                          if (c) return Promise.resolve(O(n, e)).then(function () {});
                                      })();
                                      return i && i.then ? i.then(t) : t();
                                  },
                                  function (t) {
                                      if (((a.S = !1), t.name && "BarbaError" === t.name)) throw (a.logger.debug(t.label), a.logger.error(t.error), t);
                                      throw (a.logger.debug("Transition error [page]"), a.logger.error(t), t);
                                  }
                              );
                              return Promise.resolve(h && h.then ? h.then(o) : o(h));
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.once = function (t, e) {
                          try {
                              return Promise.resolve(N.do("once", t, e)).then(function () {
                                  return e.once ? W(e.once, e)(t) : Promise.resolve();
                              });
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.leave = function (t, e) {
                          try {
                              return Promise.resolve(N.do("leave", t, e)).then(function () {
                                  return e.leave ? W(e.leave, e)(t) : Promise.resolve();
                              });
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.enter = function (t, e, i) {
                          try {
                              return Promise.resolve(N.do("enter", t, e)).then(function () {
                                  return e.enter ? W(e.enter, e)(t, i) : Promise.resolve();
                              });
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.add = function (t, e) {
                          try {
                              return F.addContainer(t.next.container, e), N.do("nextAdded", t), Promise.resolve();
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.remove = function (t) {
                          try {
                              return F.removeContainer(t.current.container), N.do("currentRemoved", t), Promise.resolve();
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      (i.M = function (t) {
                          return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
                      }),
                      (i.j = function (t, e, i) {
                          try {
                              return Promise.resolve(N.do(t, e, i)).then(function () {
                                  return i[t] ? W(i[t], i)(e) : Promise.resolve();
                              });
                          } catch (t) {
                              return Promise.reject(t);
                          }
                      }),
                      e(t, [
                          {
                              key: "isRunning",
                              get: function () {
                                  return this.S;
                              },
                              set: function (t) {
                                  this.S = t;
                              },
                          },
                          {
                              key: "hasOnce",
                              get: function () {
                                  return this.store.once.length > 0;
                              },
                          },
                          {
                              key: "hasSelf",
                              get: function () {
                                  return this.store.all.some(function (t) {
                                      return "self" === t.name;
                                  });
                              },
                          },
                          {
                              key: "shouldWait",
                              get: function () {
                                  return this.store.all.some(function (t) {
                                      return (t.to && !t.to.route) || t.sync;
                                  });
                              },
                          },
                      ]),
                      t
                  );
              })(),
              st = (function () {
                  function t(t) {
                      var e = this;
                      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
                          (this.byNamespace = new Map()),
                          0 !== t.length &&
                              (t.forEach(function (t) {
                                  e.byNamespace.set(t.namespace, t);
                              }),
                              this.names.forEach(function (t) {
                                  N[t](e.L(t));
                              }));
                  }
                  return (
                      (t.prototype.L = function (t) {
                          var e = this;
                          return function (i) {
                              var n = t.match(/enter/i) ? i.next : i.current,
                                  r = e.byNamespace.get(n.namespace);
                              return r && r[t] ? W(r[t], r)(i) : Promise.resolve();
                          };
                      }),
                      t
                  );
              })();
          Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
              Element.prototype.closest ||
                  (Element.prototype.closest = function (t) {
                      var e = this;
                      do {
                          if (e.matches(t)) return e;
                          e = e.parentElement || e.parentNode;
                      } while (null !== e && 1 === e.nodeType);
                      return null;
                  });
          var at = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
          return new ((function () {
              function t() {
                  (this.version = c),
                      (this.schemaPage = at),
                      (this.Logger = f),
                      (this.logger = new f("@barba/core")),
                      (this.plugins = []),
                      (this.hooks = N),
                      (this.dom = F),
                      (this.helpers = P),
                      (this.history = A),
                      (this.request = I),
                      (this.url = z);
              }
              var n = t.prototype;
              return (
                  (n.use = function (t, e) {
                      var i = this.plugins;
                      i.indexOf(t) > -1
                          ? this.logger.warn("Plugin [" + t.name + "] already installed.")
                          : "function" == typeof t.install
                          ? (t.install(this, e), i.push(t))
                          : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
                  }),
                  (n.init = function (t) {
                      var e = void 0 === t ? {} : t,
                          n = e.transitions,
                          r = void 0 === n ? [] : n,
                          o = e.views,
                          s = void 0 === o ? [] : o,
                          a = e.schema,
                          l = void 0 === a ? $ : a,
                          u = e.requestError,
                          c = e.timeout,
                          h = void 0 === c ? 2e3 : c,
                          d = e.cacheIgnore,
                          p = void 0 !== d && d,
                          m = e.prefetchIgnore,
                          g = void 0 !== m && m,
                          v = e.preventRunning,
                          D = void 0 !== v && v,
                          y = e.prevent,
                          b = void 0 === y ? null : y,
                          w = e.debug,
                          _ = e.logLevel;
                      if (
                          (f.setLevel(!0 === (void 0 !== w && w) ? "debug" : void 0 === _ ? "off" : _),
                          this.logger.info(this.version),
                          Object.keys(l).forEach(function (t) {
                              $[t] && ($[t] = l[t]);
                          }),
                          (this.$ = u),
                          (this.timeout = h),
                          (this.cacheIgnore = p),
                          (this.prefetchIgnore = g),
                          (this.preventRunning = D),
                          (this._ = this.dom.getWrapper()),
                          !this._)
                      )
                          throw new Error("[@barba/core] No Barba wrapper found");
                      this._.setAttribute("aria-live", "polite"), this.q();
                      var x = this.data.current;
                      if (!x.container) throw new Error("[@barba/core] No Barba container found");
                      if (((this.cache = new q(p)), (this.prevent = new it(g)), (this.transitions = new ot(r)), (this.views = new st(s)), null !== b)) {
                          if ("function" != typeof b) throw new Error("[@barba/core] Prevent should be a function");
                          this.prevent.add("preventCustom", b);
                      }
                      this.history.init(x.url.href, x.namespace),
                          (this.B = this.B.bind(this)),
                          (this.U = this.U.bind(this)),
                          (this.D = this.D.bind(this)),
                          this.F(),
                          this.plugins.forEach(function (t) {
                              return t.init();
                          });
                      var C = this.data;
                      (C.trigger = "barba"), (C.next = C.current), (C.current = i({}, this.schemaPage)), this.hooks.do("ready", C), this.once(C), this.q();
                  }),
                  (n.destroy = function () {
                      this.q(), this.H(), this.history.clear(), this.hooks.clear(), (this.plugins = []);
                  }),
                  (n.force = function (t) {
                      window.location.assign(t);
                  }),
                  (n.go = function (t, e, i) {
                      var n;
                      if ((void 0 === e && (e = "barba"), this.transitions.isRunning)) this.force(t);
                      else if (!(n = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf)
                          return (e = this.history.change(t, e, i)), i && (i.stopPropagation(), i.preventDefault()), this.page(t, e, n);
                  }),
                  (n.once = function (t) {
                      try {
                          var e = this;
                          return Promise.resolve(e.hooks.do("beforeEnter", t)).then(function () {
                              function i() {
                                  return Promise.resolve(e.hooks.do("afterEnter", t)).then(function () {});
                              }
                              var n = (function () {
                                  if (e.transitions.hasOnce) {
                                      var i = e.transitions.get(t, { once: !0 });
                                      return Promise.resolve(e.transitions.doOnce({ transition: i, data: t })).then(function () {});
                                  }
                              })();
                              return n && n.then ? n.then(i) : i();
                          });
                      } catch (t) {
                          return Promise.reject(t);
                      }
                  }),
                  (n.page = function (t, e, n) {
                      try {
                          var r = function () {
                                  var t = o.data;
                                  return Promise.resolve(o.hooks.do("page", t)).then(function () {
                                      var e = l(
                                          function () {
                                              var e = o.transitions.get(t, { once: !1, self: n });
                                              return Promise.resolve(o.transitions.doPage({ data: t, page: s, transition: e, wrapper: o._ })).then(function () {
                                                  o.q();
                                              });
                                          },
                                          function () {
                                              0 === f.getLevel() && o.force(t.current.url.href);
                                          }
                                      );
                                      if (e && e.then) return e.then(function () {});
                                  });
                              },
                              o = this;
                          (o.data.next.url = i({ href: t }, o.url.parse(t))), (o.data.trigger = e);
                          var s = o.cache.has(t) ? o.cache.update(t, { action: "click" }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, e)), "click").request,
                              a = (function () {
                                  if (o.transitions.shouldWait) return Promise.resolve(O(s, o.data)).then(function () {});
                              })();
                          return Promise.resolve(a && a.then ? a.then(r) : r());
                      } catch (t) {
                          return Promise.reject(t);
                      }
                  }),
                  (n.onRequestError = function (t) {
                      this.transitions.isRunning = !1;
                      for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                      var r = i[0],
                          o = i[1],
                          s = this.cache.getAction(r);
                      return this.cache.delete(r), !((this.$ && !1 === this.$(t, s, r, o)) || ("click" === s && this.force(r), 1));
                  }),
                  (n.prefetch = function (t) {
                      var e = this;
                      this.cache.has(t) ||
                          this.cache.set(
                              t,
                              this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (t) {
                                  e.logger.error(t);
                              }),
                              "prefetch"
                          );
                  }),
                  (n.F = function () {
                      !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)),
                          document.addEventListener("click", this.U),
                          window.addEventListener("popstate", this.D);
                  }),
                  (n.H = function () {
                      !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)),
                          document.removeEventListener("click", this.U),
                          window.removeEventListener("popstate", this.D);
                  }),
                  (n.B = function (t) {
                      var e = this,
                          i = this.I(t);
                      if (i) {
                          var n = this.dom.getHref(i);
                          this.prevent.checkHref(n) ||
                              this.cache.has(n) ||
                              this.cache.set(
                                  n,
                                  this.request(n, this.timeout, this.onRequestError.bind(this, i)).catch(function (t) {
                                      e.logger.error(t);
                                  }),
                                  "enter"
                              );
                      }
                  }),
                  (n.U = function (t) {
                      var e = this.I(t);
                      if (e) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(e), e, t);
                  }),
                  (n.D = function (t) {
                      this.go(this.url.getHref(), "popstate", t);
                  }),
                  (n.I = function (t) {
                      for (var e = t.target; e && !this.dom.getHref(e); ) e = e.parentNode;
                      if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e;
                  }),
                  (n.q = function () {
                      var t = this.url.getHref(),
                          e = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: i({ href: t }, this.url.parse(t)) };
                      (this.C = { current: e, next: i({}, this.schemaPage), trigger: void 0 }), this.hooks.do("reset", this.data);
                  }),
                  e(t, [
                      {
                          key: "data",
                          get: function () {
                              return this.C;
                          },
                      },
                      {
                          key: "wrapper",
                          get: function () {
                              return this._;
                          },
                      },
                  ]),
                  t
              );
          })())();
      })();
  },
  function (t, e, i) {
      var n, r, o, s;
      function a(t) {
          return (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                        return typeof t;
                    }
                  : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    })(t);
      }
      (s = function (t) {
          "use strict";
          var e,
              i,
              n,
              r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/,
              o = /(?:\r|\n|\t\t)/g,
              s = /(?:\s\s+)/g,
              l = function () {
                  (e = document), (i = window), (n = 1);
              },
              u = function (t) {
                  return i.getComputedStyle(t);
              },
              c = Array.isArray,
              h = [].slice,
              f = function (t, i) {
                  var n;
                  return c(t) ? t : "string" === (n = a(t)) && !i && t ? h.call(e.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? h.call(t, 0) : t ? [t] : [];
              },
              d = function (t) {
                  return "absolute" === t.position || !0 === t.absolute;
              },
              p = function (t, e) {
                  for (var i, n = e.length; --n > -1; ) if (((i = e[n]), t.substr(0, i.length) === i)) return i.length;
              },
              m = function (t, e) {
                  void 0 === t && (t = "");
                  var i = ~t.indexOf("++"),
                      n = 1;
                  return (
                      i && (t = t.split("++").join("")),
                      function () {
                          return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">");
                      }
                  );
              },
              g = function t(e, i, n) {
                  var r = e.nodeType;
                  if (1 === r || 9 === r || 11 === r) for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
                  else (3 !== r && 4 !== r) || (e.nodeValue = e.nodeValue.split(i).join(n));
              },
              v = function (t, e) {
                  for (var i = e.length; --i > -1; ) t.push(e[i]);
              },
              D = function (t, e, i) {
                  for (var n; t && t !== e; ) {
                      if ((n = t._next || t.nextSibling)) return n.textContent.charAt(0) === i;
                      t = t.parentNode || t._parent;
                  }
              },
              y = function t(e) {
                  var i,
                      n,
                      r = f(e.childNodes),
                      o = r.length;
                  for (i = 0; i < o; i++)
                      (n = r[i])._isSplit
                          ? t(n)
                          : (i && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue) : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n));
              },
              b = function (t, e) {
                  return parseFloat(e[t]) || 0;
              },
              w = function (t, i, n, r, o, s, a) {
                  var l,
                      c,
                      h,
                      f,
                      p,
                      m,
                      w,
                      _,
                      x,
                      C,
                      E,
                      k,
                      T = u(t),
                      $ = b("paddingLeft", T),
                      F = -999,
                      A = b("borderBottomWidth", T) + b("borderTopWidth", T),
                      O = b("borderLeftWidth", T) + b("borderRightWidth", T),
                      S = b("paddingTop", T) + b("paddingBottom", T),
                      P = b("paddingLeft", T) + b("paddingRight", T),
                      B = 0.2 * b("fontSize", T),
                      M = T.textAlign,
                      R = [],
                      L = [],
                      j = [],
                      z = i.wordDelimiter || " ",
                      I = i.tag ? i.tag : i.span ? "span" : "div",
                      H = i.type || i.split || "chars,words,lines",
                      W = o && ~H.indexOf("lines") ? [] : null,
                      N = ~H.indexOf("words"),
                      Y = ~H.indexOf("chars"),
                      q = d(i),
                      X = i.linesClass,
                      V = ~(X || "").indexOf("++"),
                      U = [];
                  for (V && (X = X.split("++").join("")), h = (c = t.getElementsByTagName("*")).length, p = [], l = 0; l < h; l++) p[l] = c[l];
                  if (W || q)
                      for (l = 0; l < h; l++)
                          ((m = (f = p[l]).parentNode === t) || q || (Y && !N)) &&
                              ((k = f.offsetTop),
                              W && m && Math.abs(k - F) > B && ("BR" !== f.nodeName || 0 === l) && ((w = []), W.push(w), (F = k)),
                              q && ((f._x = f.offsetLeft), (f._y = k), (f._w = f.offsetWidth), (f._h = f.offsetHeight)),
                              W &&
                                  (((f._isSplit && m) || (!Y && m) || (N && m) || (!N && f.parentNode.parentNode === t && !f.parentNode._isSplit)) && (w.push(f), (f._x -= $), D(f, t, z) && (f._wordEnd = !0)),
                                  "BR" === f.nodeName && ((f.nextSibling && "BR" === f.nextSibling.nodeName) || 0 === l) && W.push([])));
                  for (l = 0; l < h; l++)
                      (m = (f = p[l]).parentNode === t),
                          "BR" !== f.nodeName
                              ? (q &&
                                    ((x = f.style),
                                    N || m || ((f._x += f.parentNode._x), (f._y += f.parentNode._y)),
                                    (x.left = f._x + "px"),
                                    (x.top = f._y + "px"),
                                    (x.position = "absolute"),
                                    (x.display = "block"),
                                    (x.width = f._w + 1 + "px"),
                                    (x.height = f._h + "px")),
                                !N && Y
                                    ? f._isSplit
                                        ? ((f._next = f.nextSibling), f.parentNode.appendChild(f))
                                        : f.parentNode._isSplit
                                        ? ((f._parent = f.parentNode),
                                          !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0),
                                          f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && U.push(f.nextSibling),
                                          (f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling),
                                          f.parentNode.removeChild(f),
                                          p.splice(l--, 1),
                                          h--)
                                        : m ||
                                          ((k = !f.nextSibling && D(f.parentNode, t, z)),
                                          f.parentNode._parent && f.parentNode._parent.appendChild(f),
                                          k && f.parentNode.appendChild(e.createTextNode(" ")),
                                          "span" === I && (f.style.display = "inline"),
                                          R.push(f))
                                    : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML
                                    ? L.push(f)
                                    : Y && !f._isSplit && ("span" === I && (f.style.display = "inline"), R.push(f)))
                              : W || q
                              ? (f.parentNode && f.parentNode.removeChild(f), p.splice(l--, 1), h--)
                              : N || t.appendChild(f);
                  for (l = U.length; --l > -1; ) U[l].parentNode.removeChild(U[l]);
                  if (W) {
                      for (
                          q && ((C = e.createElement(I)), t.appendChild(C), (E = C.offsetWidth + "px"), (k = C.offsetParent === t ? 0 : t.offsetLeft), t.removeChild(C)), x = t.style.cssText, t.style.cssText = "display:none;";
                          t.firstChild;

                      )
                          t.removeChild(t.firstChild);
                      for (_ = " " === z && (!q || (!N && !Y)), l = 0; l < W.length; l++) {
                          for (
                              w = W[l], (C = e.createElement(I)).style.cssText = "display:block;text-align:" + M + ";position:" + (q ? "absolute;" : "relative;"), X && (C.className = X + (V ? l + 1 : "")), j.push(C), h = w.length, c = 0;
                              c < h;
                              c++
                          )
                              "BR" !== w[c].nodeName &&
                                  ((f = w[c]),
                                  C.appendChild(f),
                                  _ && f._wordEnd && C.appendChild(e.createTextNode(" ")),
                                  q && (0 === c && ((C.style.top = f._y + "px"), (C.style.left = $ + k + "px")), (f.style.top = "0px"), k && (f.style.left = f._x - k + "px")));
                          0 === h ? (C.innerHTML = "&nbsp;") : N || Y || (y(C), g(C, String.fromCharCode(160), " ")), q && ((C.style.width = E), (C.style.height = f._h + "px")), t.appendChild(C);
                      }
                      t.style.cssText = x;
                  }
                  q &&
                      (a > t.clientHeight && ((t.style.height = a - S + "px"), t.clientHeight < a && (t.style.height = a + A + "px")),
                      s > t.clientWidth && ((t.style.width = s - P + "px"), t.clientWidth < s && (t.style.width = s + O + "px"))),
                      v(n, R),
                      N && v(r, L),
                      v(o, j);
              },
              _ = function (t, i, n, a) {
                  var l,
                      u,
                      c,
                      h,
                      f,
                      m,
                      v,
                      D,
                      y = i.tag ? i.tag : i.span ? "span" : "div",
                      b = ~(i.type || i.split || "chars,words,lines").indexOf("chars"),
                      w = d(i),
                      _ = i.wordDelimiter || " ",
                      x = " " !== _ ? "" : w ? "&#173; " : " ",
                      C = "</" + y + ">",
                      E = 1,
                      k = i.specialChars ? ("function" == typeof i.specialChars ? i.specialChars : p) : null,
                      T = e.createElement("div"),
                      $ = t.parentNode;
                  for (
                      $.insertBefore(T, t),
                          T.textContent = t.nodeValue,
                          $.removeChild(t),
                          v =
                              -1 !==
                              (l = (function t(e) {
                                  var i = e.nodeType,
                                      n = "";
                                  if (1 === i || 9 === i || 11 === i) {
                                      if ("string" == typeof e.textContent) return e.textContent;
                                      for (e = e.firstChild; e; e = e.nextSibling) n += t(e);
                                  } else if (3 === i || 4 === i) return e.nodeValue;
                                  return n;
                              })(
                                  /*!
                                   * SplitText: 3.1.1
                                   * https://greensock.com
                                   *
                                   * @license Copyright 2008-2020, GreenSock. All rights reserved.
                                   * Subject to the terms at https://greensock.com/standard-license or for
                                   * Club GreenSock members, the agreement issued with that membership.
                                   * @author: Jack Doyle, jack@greensock.com
                                   */ (t = T)
                              )).indexOf("<"),
                          !1 !== i.reduceWhiteSpace && (l = l.replace(s, " ").replace(o, "")),
                          v && (l = l.split("<").join("{{LT}}")),
                          f = l.length,
                          u = (" " === l.charAt(0) ? x : "") + n(),
                          c = 0;
                      c < f;
                      c++
                  )
                      if (((m = l.charAt(c)), k && (D = k(l.substr(c), i.specialChars)))) (m = l.substr(c, D || 1)), (u += b && " " !== m ? a() + m + "</" + y + ">" : m), (c += D - 1);
                      else if (m === _ && l.charAt(c - 1) !== _ && c) {
                          for (u += E ? C : "", E = 0; l.charAt(c + 1) === _; ) (u += x), c++;
                          c === f - 1 ? (u += x) : ")" !== l.charAt(c + 1) && ((u += x + n()), (E = 1));
                      } else
                          "{" === m && "{{LT}}" === l.substr(c, 6)
                              ? ((u += b ? a() + "{{LT}}</" + y + ">" : "{{LT}}"), (c += 5))
                              : (m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319) || (l.charCodeAt(c + 1) >= 65024 && l.charCodeAt(c + 1) <= 65039)
                              ? ((h = ((l.substr(c, 12).split(r) || [])[1] || "").length || 2), (u += b && " " !== m ? a() + l.substr(c, h) + "</" + y + ">" : l.substr(c, h)), (c += h - 1))
                              : (u += b && " " !== m ? a() + m + "</" + y + ">" : m);
                  (t.outerHTML = u + (E ? C : "")), v && g($, "{{LT}}", "<");
              },
              x = function t(e, i, n, r) {
                  var o,
                      s,
                      a = f(e.childNodes),
                      l = a.length,
                      c = d(i);
                  if (3 !== e.nodeType || l > 1) {
                      for (i.absolute = !1, o = 0; o < l; o++)
                          (3 !== (s = a[o]).nodeType || /\S+/.test(s.nodeValue)) &&
                              (c && 3 !== s.nodeType && "inline" === u(s).display && ((s.style.display = "inline-block"), (s.style.position = "relative")), (s._isSplit = !0), t(s, i, n, r));
                      return (i.absolute = c), void (e._isSplit = !0);
                  }
                  _(e, i, n, r);
              },
              C = (function () {
                  function t(t, e) {
                      n || l(), (this.elements = f(t)), (this.chars = []), (this.words = []), (this.lines = []), (this._originals = []), (this.vars = e || {}), this.split(e);
                  }
                  var e = t.prototype;
                  return (
                      (e.split = function (t) {
                          this.isSplit && this.revert(), (this.vars = t = t || this.vars), (this._originals.length = this.chars.length = this.words.length = this.lines.length = 0);
                          for (var e, i, n, r = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", s = m(t.wordsClass, o), a = m(t.charsClass, o); --r > -1; )
                              (n = this.elements[r]), (this._originals[r] = n.innerHTML), (e = n.clientHeight), (i = n.clientWidth), x(n, t, s, a), w(n, t, this.chars, this.words, this.lines, i, e);
                          return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), (this.isSplit = !0), this;
                      }),
                      (e.revert = function () {
                          var t = this._originals;
                          if (!t) throw "revert() call wasn't scoped properly.";
                          return (
                              this.elements.forEach(function (e, i) {
                                  return (e.innerHTML = t[i]);
                              }),
                              (this.chars = []),
                              (this.words = []),
                              (this.lines = []),
                              (this.isSplit = !1),
                              this
                          );
                      }),
                      (t.create = function (e, i) {
                          return new t(e, i);
                      }),
                      t
                  );
              })();
          (C.version = "3.1.1"), (t.SplitText = C), (t.default = C), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
          "object" === a(e) && void 0 !== t ? s(e) : ((r = [e]), void 0 === (o = "function" == typeof (n = s) ? n.apply(e, r) : n) || (t.exports = o));
  },
  function (t, e, i) {
      var n, r;
      t.exports =
          ((n = "2.1.10"),
          (r =
              window.requestIdleCallback ||
              function (t) {
                  var e = Date.now();
                  return setTimeout(function () {
                      t({
                          didTimeout: !1,
                          timeRemaining: function () {
                              return Math.max(0, 50 - (Date.now() - e));
                          },
                      });
                  }, 1);
              }),
          new ((function () {
              function t() {
                  (this.name = "@barba/prefetch"), (this.version = n), (this.toPrefetch = new Set());
              }
              var e = t.prototype;
              return (
                  (e.install = function (t, e) {
                      var i = void 0 === e ? {} : e,
                          n = i.root,
                          r = void 0 === n ? document.body : n,
                          o = i.timeout,
                          s = void 0 === o ? 2e3 : o;
                      (this.logger = new t.Logger(this.name)), this.logger.info(this.version), (this.barba = t), (this.root = r), (this.timeout = s);
                  }),
                  (e.init = function () {
                      var t = this;
                      this.barba.prefetchIgnore
                          ? this.logger.warn("barba.prefetchIgnore is enabled")
                          : this.barba.cacheIgnore
                          ? this.logger.warn("barba.cacheIgnore is enabled")
                          : ((this.observer = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                    if (e.isIntersecting) {
                                        var i = e.target,
                                            n = t.barba.dom.getHref(i);
                                        t.toPrefetch.has(n) &&
                                            (t.observer.unobserve(i),
                                            t.barba.cache.has(n)
                                                ? t.barba.cache.update(n, { action: "prefetch" })
                                                : t.barba.cache.set(
                                                      n,
                                                      t.barba.request(n, t.barba.timeout, t.barba.onRequestError.bind(t.barba, "barba")).catch(function (e) {
                                                          t.logger.error(e);
                                                      }),
                                                      "prefetch"
                                                  ));
                                    }
                                });
                            })),
                            this.observe(),
                            this.barba.hooks.after(this.observe, this));
                  }),
                  (e.observe = function () {
                      var t = this;
                      r(
                          function () {
                              t.root.querySelectorAll("a").forEach(function (e) {
                                  var i = e,
                                      n = t.barba.dom.getHref(i);
                                  t.barba.cache.has(n) || t.barba.prevent.checkHref(n) || t.barba.prevent.checkLink(i, {}, n) || (t.observer.observe(e), t.toPrefetch.add(n));
                              });
                          },
                          { timeout: this.timeout }
                      );
                  }),
                  t
              );
          })())());
  },
  function (t, e, i) {
      "use strict";
      (function (t) {
          function i(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }
          function n(t, e) {
              for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
              }
          }
          function r(t, e, i) {
              return e && n(t.prototype, e), i && n(t, i), t;
          }
          function o(t, e, i) {
              return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
          }
          function s(t, e) {
              var i = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                      (n = n.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      i.push.apply(i, n);
              }
              return i;
          }
          function a(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {};
                  e % 2
                      ? s(Object(i), !0).forEach(function (e) {
                            o(t, e, i[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                      : s(Object(i)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                        });
              }
              return t;
          }
          function l(t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && c(t, e);
          }
          function u(t) {
              return (u = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
          }
          function c(t, e) {
              return (c =
                  Object.setPrototypeOf ||
                  function (t, e) {
                      return (t.__proto__ = e), t;
                  })(t, e);
          }
          function h(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
          }
          function f(t, e) {
              return !e || ("object" != typeof e && "function" != typeof e) ? h(t) : e;
          }
          function d(t) {
              var e = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                  } catch (t) {
                      return !1;
                  }
              })();
              return function () {
                  var i,
                      n = u(t);
                  if (e) {
                      var r = u(this).constructor;
                      i = Reflect.construct(n, arguments, r);
                  } else i = n.apply(this, arguments);
                  return f(this, i);
              };
          }
          function p(t, e, i) {
              return (p =
                  "undefined" != typeof Reflect && Reflect.get
                      ? Reflect.get
                      : function (t, e, i) {
                            var n = (function (t, e) {
                                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); );
                                return t;
                            })(t, e);
                            if (n) {
                                var r = Object.getOwnPropertyDescriptor(n, e);
                                return r.get ? r.get.call(i) : r.value;
                            }
                        })(t, e, i || t);
          }
          function m(t, e) {
              return (
                  (function (t) {
                      if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                      var i = [],
                          n = !0,
                          r = !1,
                          o = void 0;
                      try {
                          for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
                      } catch (t) {
                          (r = !0), (o = t);
                      } finally {
                          try {
                              n || null == a.return || a.return();
                          } finally {
                              if (r) throw o;
                          }
                      }
                      return i;
                  })(t, e) ||
                  v(t, e) ||
                  (function () {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  })()
              );
          }
          function g(t) {
              return (
                  (function (t) {
                      if (Array.isArray(t)) return D(t);
                  })(t) ||
                  (function (t) {
                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                  })(t) ||
                  v(t) ||
                  (function () {
                      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  })()
              );
          }
          function v(t, e) {
              if (t) {
                  if ("string" == typeof t) return D(t, e);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? D(t, e) : void 0;
              }
          }
          function D(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
              return n;
          }
          var y = {
                  el: document,
                  name: "scroll",
                  offset: [0, 0],
                  repeat: !1,
                  smooth: !1,
                  initPosition: { x: 0, y: 0 },
                  direction: "vertical",
                  gestureDirection: "vertical",
                  reloadOnContextChange: !1,
                  lerp: 0.1,
                  class: "is-inview",
                  scrollbarContainer: !1,
                  scrollbarClass: "c-scrollbar",
                  scrollingClass: "has-scroll-scrolling",
                  draggingClass: "has-scroll-dragging",
                  smoothClass: "has-scroll-smooth",
                  initClass: "has-scroll-init",
                  getSpeed: !1,
                  getDirection: !1,
                  scrollFromAnywhere: !1,
                  multiplier: 1,
                  firefoxMultiplier: 50,
                  touchMultiplier: 2,
                  resetNativeScroll: !0,
                  tablet: { smooth: !1, direction: "vertical", gestureDirection: "vertical", breakpoint: 1024 },
                  smartphone: { smooth: !1, direction: "vertical", gestureDirection: "vertical" },
              },
              b = (function () {
                  function t() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      i(this, t),
                          Object.assign(this, y, e),
                          (this.smartphone = y.smartphone),
                          e.smartphone && Object.assign(this.smartphone, e.smartphone),
                          (this.tablet = y.tablet),
                          e.tablet && Object.assign(this.tablet, e.tablet),
                          (this.namespace = "locomotive"),
                          (this.html = document.documentElement),
                          (this.windowHeight = window.innerHeight),
                          (this.windowWidth = window.innerWidth),
                          (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }),
                          (this.els = {}),
                          (this.currentElements = {}),
                          (this.listeners = {}),
                          (this.hasScrollTicking = !1),
                          (this.hasCallEventSet = !1),
                          (this.checkScroll = this.checkScroll.bind(this)),
                          (this.checkResize = this.checkResize.bind(this)),
                          (this.checkEvent = this.checkEvent.bind(this)),
                          (this.instance = { scroll: { x: 0, y: 0 }, limit: { x: this.html.offsetWidth, y: this.html.offsetHeight }, currentElements: this.currentElements }),
                          this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"),
                          this.isMobile && (this.direction = this[this.context].direction),
                          "horizontal" === this.direction ? (this.directionAxis = "x") : (this.directionAxis = "y"),
                          this.getDirection && (this.instance.direction = null),
                          this.getDirection && (this.instance.speed = 0),
                          this.html.classList.add(this.initClass),
                          window.addEventListener("resize", this.checkResize, !1);
                  }
                  return (
                      r(t, [
                          {
                              key: "init",
                              value: function () {
                                  this.initEvents();
                              },
                          },
                          {
                              key: "checkScroll",
                              value: function () {
                                  this.dispatchScroll();
                              },
                          },
                          {
                              key: "checkResize",
                              value: function () {
                                  var t = this;
                                  this.resizeTick ||
                                      ((this.resizeTick = !0),
                                      requestAnimationFrame(function () {
                                          t.resize(), (t.resizeTick = !1);
                                      }));
                              },
                          },
                          { key: "resize", value: function () {} },
                          {
                              key: "checkContext",
                              value: function () {
                                  if (this.reloadOnContextChange) {
                                      (this.isMobile =
                                          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                                          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
                                          this.windowWidth < this.tablet.breakpoint),
                                          (this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint);
                                      var t = this.context;
                                      if ((this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"), t != this.context))
                                          ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload();
                                  }
                              },
                          },
                          {
                              key: "initEvents",
                              value: function () {
                                  var t = this;
                                  (this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"))),
                                      (this.setScrollTo = this.setScrollTo.bind(this)),
                                      this.scrollToEls.forEach(function (e) {
                                          e.addEventListener("click", t.setScrollTo, !1);
                                      });
                              },
                          },
                          {
                              key: "setScrollTo",
                              value: function (t) {
                                  t.preventDefault(),
                                      this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), { offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset")) });
                              },
                          },
                          { key: "addElements", value: function () {} },
                          {
                              key: "detectElements",
                              value: function (t) {
                                  var e = this,
                                      i = this.instance.scroll.y,
                                      n = i + this.windowHeight,
                                      r = this.instance.scroll.x,
                                      o = r + this.windowWidth;
                                  Object.entries(this.els).forEach(function (s) {
                                      var a = m(s, 2),
                                          l = a[0],
                                          u = a[1];
                                      if ((!u || (u.inView && !t) || ("horizontal" === e.direction ? o >= u.left && r < u.right && e.setInView(u, l) : n >= u.top && i < u.bottom && e.setInView(u, l)), u && u.inView))
                                          if ("horizontal" === e.direction) {
                                              var c = u.right - u.left;
                                              (u.progress = (e.instance.scroll.x - (u.left - e.windowWidth)) / (c + e.windowWidth)), (o < u.left || r > u.right) && e.setOutOfView(u, l);
                                          } else {
                                              var h = u.bottom - u.top;
                                              (u.progress = (e.instance.scroll.y - (u.top - e.windowHeight)) / (h + e.windowHeight)), (n < u.top || i > u.bottom) && e.setOutOfView(u, l);
                                          }
                                  }),
                                      (this.hasScrollTicking = !1);
                              },
                          },
                          {
                              key: "setInView",
                              value: function (t, e) {
                                  (this.els[e].inView = !0), t.el.classList.add(t.class), (this.currentElements[e] = t), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1));
                              },
                          },
                          {
                              key: "setOutOfView",
                              value: function (t, e) {
                                  var i = this;
                                  (this.els[e].inView = !1),
                                      Object.keys(this.currentElements).forEach(function (t) {
                                          t === e && delete i.currentElements[t];
                                      }),
                                      t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                                      t.repeat && t.el.classList.remove(t.class);
                              },
                          },
                          {
                              key: "dispatchCall",
                              value: function (t, e) {
                                  (this.callWay = e),
                                      (this.callValue = t.call.split(",").map(function (t) {
                                          return t.trim();
                                      })),
                                      (this.callObj = t),
                                      1 == this.callValue.length && (this.callValue = this.callValue[0]);
                                  var i = new Event(this.namespace + "call");
                                  this.el.dispatchEvent(i);
                              },
                          },
                          {
                              key: "dispatchScroll",
                              value: function () {
                                  var t = new Event(this.namespace + "scroll");
                                  this.el.dispatchEvent(t);
                              },
                          },
                          {
                              key: "setEvents",
                              value: function (t, e) {
                                  this.listeners[t] || (this.listeners[t] = []);
                                  var i = this.listeners[t];
                                  i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && ((this.hasCallEventSet = !0), this.detectElements(!0));
                              },
                          },
                          {
                              key: "unsetEvents",
                              value: function (t, e) {
                                  if (this.listeners[t]) {
                                      var i = this.listeners[t],
                                          n = i.indexOf(e);
                                      n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1));
                                  }
                              },
                          },
                          {
                              key: "checkEvent",
                              value: function (t) {
                                  var e = this,
                                      i = t.type.replace(this.namespace, ""),
                                      n = this.listeners[i];
                                  n &&
                                      0 !== n.length &&
                                      n.forEach(function (t) {
                                          switch (i) {
                                              case "scroll":
                                                  return t(e.instance);
                                              case "call":
                                                  return t(e.callValue, e.callWay, e.callObj);
                                              default:
                                                  return t();
                                          }
                                      });
                              },
                          },
                          { key: "startScroll", value: function () {} },
                          { key: "stopScroll", value: function () {} },
                          {
                              key: "setScroll",
                              value: function (t, e) {
                                  this.instance.scroll = { x: 0, y: 0 };
                              },
                          },
                          {
                              key: "destroy",
                              value: function () {
                                  var t = this;
                                  window.removeEventListener("resize", this.checkResize, !1),
                                      Object.keys(this.listeners).forEach(function (e) {
                                          t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                                      }),
                                      (this.listeners = {}),
                                      this.scrollToEls.forEach(function (e) {
                                          e.removeEventListener("click", t.setScrollTo, !1);
                                      }),
                                      this.html.classList.remove(this.initClass);
                              },
                          },
                      ]),
                      t
                  );
              })(),
              w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
          function _(t, e) {
              return t((e = { exports: {} }), e.exports), e.exports;
          }
          var x = _(function (t, e) {
                  t.exports = {
                      polyfill: function () {
                          var t = window,
                              e = document;
                          if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                              var i,
                                  n = t.HTMLElement || t.Element,
                                  r = 468,
                                  o = { scroll: t.scroll || t.scrollTo, scrollBy: t.scrollBy, elementScroll: n.prototype.scroll || l, scrollIntoView: n.prototype.scrollIntoView },
                                  s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                  a = ((i = t.navigator.userAgent), new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                              (t.scroll = t.scrollTo = function () {
                                  void 0 !== arguments[0] &&
                                      (!0 !== u(arguments[0])
                                          ? m.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset)
                                          : o.scroll.call(
                                                t,
                                                void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset,
                                                void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset
                                            ));
                              }),
                                  (t.scrollBy = function () {
                                      void 0 !== arguments[0] &&
                                          (u(arguments[0])
                                              ? o.scrollBy.call(
                                                    t,
                                                    void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0,
                                                    void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0
                                                )
                                              : m.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)));
                                  }),
                                  (n.prototype.scroll = n.prototype.scrollTo = function () {
                                      if (void 0 !== arguments[0])
                                          if (!0 !== u(arguments[0])) {
                                              var t = arguments[0].left,
                                                  e = arguments[0].top;
                                              m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
                                          } else {
                                              if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                              o.elementScroll.call(
                                                  this,
                                                  void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft,
                                                  void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop
                                              );
                                          }
                                  }),
                                  (n.prototype.scrollBy = function () {
                                      void 0 !== arguments[0] &&
                                          (!0 !== u(arguments[0])
                                              ? this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior })
                                              : o.elementScroll.call(
                                                    this,
                                                    void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                                                    void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                                                ));
                                  }),
                                  (n.prototype.scrollIntoView = function () {
                                      if (!0 !== u(arguments[0])) {
                                          var i = d(this),
                                              n = i.getBoundingClientRect(),
                                              r = this.getBoundingClientRect();
                                          i !== e.body
                                              ? (m.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({ left: n.left, top: n.top, behavior: "smooth" }))
                                              : t.scrollBy({ left: r.left, top: r.top, behavior: "smooth" });
                                      } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                                  });
                          }
                          function l(t, e) {
                              (this.scrollLeft = t), (this.scrollTop = e);
                          }
                          function u(t) {
                              if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                              if ("object" == typeof t && "smooth" === t.behavior) return !1;
                              throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
                          }
                          function c(t, e) {
                              return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0;
                          }
                          function h(e, i) {
                              var n = t.getComputedStyle(e, null)["overflow" + i];
                              return "auto" === n || "scroll" === n;
                          }
                          function f(t) {
                              var e = c(t, "Y") && h(t, "Y"),
                                  i = c(t, "X") && h(t, "X");
                              return e || i;
                          }
                          function d(t) {
                              for (; t !== e.body && !1 === f(t); ) t = t.parentNode || t.host;
                              return t;
                          }
                          function p(e) {
                              var i,
                                  n,
                                  o,
                                  a,
                                  l = (s() - e.startTime) / r;
                              (a = l = l > 1 ? 1 : l),
                                  (i = 0.5 * (1 - Math.cos(Math.PI * a))),
                                  (n = e.startX + (e.x - e.startX) * i),
                                  (o = e.startY + (e.y - e.startY) * i),
                                  e.method.call(e.scrollable, n, o),
                                  (n === e.x && o === e.y) || t.requestAnimationFrame(p.bind(t, e));
                          }
                          function m(i, n, r) {
                              var a,
                                  u,
                                  c,
                                  h,
                                  f = s();
                              i === e.body ? ((a = t), (u = t.scrollX || t.pageXOffset), (c = t.scrollY || t.pageYOffset), (h = o.scroll)) : ((a = i), (u = i.scrollLeft), (c = i.scrollTop), (h = l)),
                                  p({ scrollable: a, method: h, startTime: f, startX: u, startY: c, x: n, y: r });
                          }
                      },
                  };
              }),
              C =
                  (x.polyfill,
                  (function (t) {
                      l(n, t);
                      var e = d(n);
                      function n() {
                          var t,
                              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          return (
                              i(this, n),
                              (t = e.call(this, r)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)),
                              window.addEventListener("scroll", t.checkScroll, !1),
                              void 0 === window.smoothscrollPolyfill && ((window.smoothscrollPolyfill = x), window.smoothscrollPolyfill.polyfill()),
                              t
                          );
                      }
                      return (
                          r(n, [
                              {
                                  key: "init",
                                  value: function () {
                                      (this.instance.scroll.y = window.pageYOffset), this.addElements(), this.detectElements(), p(u(n.prototype), "init", this).call(this);
                                  },
                              },
                              {
                                  key: "checkScroll",
                                  value: function () {
                                      var t = this;
                                      p(u(n.prototype), "checkScroll", this).call(this),
                                          this.getDirection && this.addDirection(),
                                          this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                          (this.instance.scroll.y = window.pageYOffset),
                                          Object.entries(this.els).length &&
                                              (this.hasScrollTicking ||
                                                  (requestAnimationFrame(function () {
                                                      t.detectElements();
                                                  }),
                                                  (this.hasScrollTicking = !0)));
                                  },
                              },
                              {
                                  key: "addDirection",
                                  value: function () {
                                      window.pageYOffset > this.instance.scroll.y
                                          ? "down" !== this.instance.direction && (this.instance.direction = "down")
                                          : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
                                  },
                              },
                              {
                                  key: "addSpeed",
                                  value: function () {
                                      window.pageYOffset != this.instance.scroll.y ? (this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs)) : (this.instance.speed = 0);
                                  },
                              },
                              {
                                  key: "resize",
                                  value: function () {
                                      Object.entries(this.els).length && ((this.windowHeight = window.innerHeight), this.updateElements());
                                  },
                              },
                              {
                                  key: "addElements",
                                  value: function () {
                                      var t = this;
                                      (this.els = {}),
                                          this.el.querySelectorAll("[data-" + this.name + "]").forEach(function (e, i) {
                                              e.getBoundingClientRect();
                                              var n,
                                                  r,
                                                  o,
                                                  s = e.dataset[t.name + "Class"] || t.class,
                                                  a = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                                                  l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                                  u = e.dataset[t.name + "Repeat"],
                                                  c = e.dataset[t.name + "Call"],
                                                  h = e.dataset[t.name + "Target"],
                                                  f = (o = void 0 !== h ? document.querySelector("".concat(h)) : e).getBoundingClientRect();
                                              (n = f.top + t.instance.scroll.y), (r = f.left + t.instance.scroll.x);
                                              var d = n + o.offsetHeight,
                                                  p = r + o.offsetWidth;
                                              u = "false" != u && (null != u || t.repeat);
                                              var m = t.getRelativeOffset(l),
                                                  g = { el: e, targetEl: o, id: a, class: s, top: (n += m[0]), bottom: (d -= m[1]), left: r, right: p, offset: l, progress: 0, repeat: u, inView: !1, call: c };
                                              (t.els[a] = g), e.classList.contains(s) && t.setInView(t.els[a], a);
                                          });
                                  },
                              },
                              {
                                  key: "updateElements",
                                  value: function () {
                                      var t = this;
                                      Object.entries(this.els).forEach(function (e) {
                                          var i = m(e, 2),
                                              n = i[0],
                                              r = i[1],
                                              o = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                              s = o + r.targetEl.offsetHeight,
                                              a = t.getRelativeOffset(r.offset);
                                          (t.els[n].top = o + a[0]), (t.els[n].bottom = s - a[1]);
                                      }),
                                          (this.hasScrollTicking = !1);
                                  },
                              },
                              {
                                  key: "getRelativeOffset",
                                  value: function (t) {
                                      var e = [0, 0];
                                      if (t)
                                          for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? (t[i].includes("%") ? (e[i] = parseInt((t[i].replace("%", "") * this.windowHeight) / 100)) : (e[i] = parseInt(t[i]))) : (e[i] = t[i]);
                                      return e;
                                  },
                              },
                              {
                                  key: "scrollTo",
                                  value: function (t) {
                                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                          i = parseInt(e.offset) || 0,
                                          n = !!e.callback && e.callback;
                                      if ("string" == typeof t) {
                                          if ("top" === t) t = this.html;
                                          else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                                          else if (!(t = document.querySelector(t))) return;
                                      } else if ("number" == typeof t) t = parseInt(t);
                                      else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                                      i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                                      var r = function () {
                                          return parseInt(window.pageYOffset) === parseInt(i);
                                      };
                                      if (n) {
                                          if (r()) return void n();
                                          var o = function t() {
                                              r() && (window.removeEventListener("scroll", t), n());
                                          };
                                          window.addEventListener("scroll", o);
                                      }
                                      window.scrollTo({ top: i, behavior: 0 === e.duration ? "auto" : "smooth" });
                                  },
                              },
                              {
                                  key: "update",
                                  value: function () {
                                      this.addElements(), this.detectElements();
                                  },
                              },
                              {
                                  key: "destroy",
                                  value: function () {
                                      p(u(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
                                  },
                              },
                          ]),
                          n
                      );
                  })(b)),
              E = Object.getOwnPropertySymbols,
              k = Object.prototype.hasOwnProperty,
              T = Object.prototype.propertyIsEnumerable;
          function $(t) {
              if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(t);
          }
          var F = (function () {
              try {
                  if (!Object.assign) return !1;
                  var t = new String("abc");
                  if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
                  for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                  if (
                      "0123456789" !==
                      Object.getOwnPropertyNames(e)
                          .map(function (t) {
                              return e[t];
                          })
                          .join("")
                  )
                      return !1;
                  var n = {};
                  return (
                      "abcdefghijklmnopqrst".split("").forEach(function (t) {
                          n[t] = t;
                      }),
                      "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                  );
              } catch (t) {
                  return !1;
              }
          })()
              ? Object.assign
              : function (t, e) {
                    for (var i, n, r = $(t), o = 1; o < arguments.length; o++) {
                        for (var s in (i = Object(arguments[o]))) k.call(i, s) && (r[s] = i[s]);
                        if (E) {
                            n = E(i);
                            for (var a = 0; a < n.length; a++) T.call(i, n[a]) && (r[n[a]] = i[n[a]]);
                        }
                    }
                    return r;
                };
          function A() {}
          A.prototype = {
              on: function (t, e, i) {
                  var n = this.e || (this.e = {});
                  return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
              },
              once: function (t, e, i) {
                  var n = this;
                  function r() {
                      n.off(t, r), e.apply(i, arguments);
                  }
                  return (r._ = e), this.on(t, r, i);
              },
              emit: function (t) {
                  for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
                  return this;
              },
              off: function (t, e) {
                  var i = this.e || (this.e = {}),
                      n = i[t],
                      r = [];
                  if (n && e) for (var o = 0, s = n.length; o < s; o++) n[o].fn !== e && n[o].fn._ !== e && r.push(n[o]);
                  return r.length ? (i[t] = r) : delete i[t], this;
              },
          };
          var O = A,
              S = _(function (t, e) {
                  (function () {
                      (null !== e ? e : this).Lethargy = (function () {
                          function t(t, e, i, n) {
                              (this.stability = null != t ? Math.abs(t) : 8),
                                  (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                                  (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
                                  (this.delay = null != n ? n : 150),
                                  (this.lastUpDeltas = function () {
                                      var t, e, i;
                                      for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                      return i;
                                  }.call(this)),
                                  (this.lastDownDeltas = function () {
                                      var t, e, i;
                                      for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                      return i;
                                  }.call(this)),
                                  (this.deltasTimestamp = function () {
                                      var t, e, i;
                                      for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                      return i;
                                  }.call(this));
                          }
                          return (
                              (t.prototype.check = function (t) {
                                  var e;
                                  return (
                                      null != (t = t.originalEvent || t).wheelDelta ? (e = t.wheelDelta) : null != t.deltaY ? (e = -40 * t.deltaY) : (null == t.detail && 0 !== t.detail) || (e = -40 * t.detail),
                                      this.deltasTimestamp.push(Date.now()),
                                      this.deltasTimestamp.shift(),
                                      e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                                  );
                              }),
                              (t.prototype.isInertia = function (t) {
                                  var e, i, n, r, o, s, a;
                                  return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                                      ? t
                                      : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) &&
                                            ((n = e.slice(0, this.stability)),
                                            (i = e.slice(this.stability, 2 * this.stability)),
                                            (a = n.reduce(function (t, e) {
                                                return t + e;
                                            })),
                                            (o = i.reduce(function (t, e) {
                                                return t + e;
                                            })),
                                            (s = a / n.length),
                                            (r = o / i.length),
                                            Math.abs(s) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t);
                              }),
                              (t.prototype.showLastUpDeltas = function () {
                                  return this.lastUpDeltas;
                              }),
                              (t.prototype.showLastDownDeltas = function () {
                                  return this.lastDownDeltas;
                              }),
                              t
                          );
                      })();
                  }.call(w));
              }),
              P = {
                  hasWheelEvent: "onwheel" in document,
                  hasMouseWheelEvent: "onmousewheel" in document,
                  hasTouch: "ontouchstart" in window || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch),
                  hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                  hasPointer: !!window.navigator.msPointerEnabled,
                  hasKeyDown: "onkeydown" in document,
                  isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
              },
              B = Object.prototype.toString,
              M = Object.prototype.hasOwnProperty,
              R = function (t) {
                  if (!t) return console.warn("bindAll requires at least one argument.");
                  var e = Array.prototype.slice.call(arguments, 1);
                  if (0 === e.length) for (var i in t) M.call(t, i) && "function" == typeof t[i] && "[object Function]" == B.call(t[i]) && e.push(i);
                  for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      t[r] = L(t[r], t);
                  }
              };
          function L(t, e) {
              return function () {
                  return t.apply(e, arguments);
              };
          }
          var j = S.Lethargy,
              z = "virtualscroll",
              I = X,
              H = 37,
              W = 38,
              N = 39,
              Y = 40,
              q = 32;
          function X(t) {
              R(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
                  (this.el = window),
                  t && t.el && ((this.el = t.el), delete t.el),
                  (this.options = F({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", limitInertia: !1, useKeyboard: !0, useTouch: !0 }, t)),
                  this.options.limitInertia && (this._lethargy = new j()),
                  (this._emitter = new O()),
                  (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                  (this.touchStartX = null),
                  (this.touchStartY = null),
                  (this.bodyTouchAction = null),
                  void 0 !== this.options.passive && (this.listenerOptions = { passive: this.options.passive });
          }
          function V(t, e, i) {
              return (1 - i) * t + i * e;
          }
          function U(t) {
              var e = {};
              if (window.getComputedStyle) {
                  var i = getComputedStyle(t);
                  try {
                      var n = i.transform || i.webkitTransform || i.mozTransform,
                          r = n.match(/^matrix3d((.+))$/);
                      return (
                          r
                              ? ((e.x = r ? parseFloat(r[1].split(", ")[12]) : 0), (e.y = r ? parseFloat(r[1].split(", ")[13]) : 0))
                              : ((r = n.match(/^matrix((.+))$/)), (e.x = r ? parseFloat(r[1].split(", ")[4]) : 0), (e.y = r ? parseFloat(r[1].split(", ")[5]) : 0)),
                          e
                      );
                  } catch (t) {
                      return [];
                  }
              }
          }
          function K(t) {
              for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
              return e;
          }
          (X.prototype._notify = function (t) {
              var e = this._event;
              (e.x += e.deltaX), (e.y += e.deltaY), this._emitter.emit(z, { x: e.x, y: e.y, deltaX: e.deltaX, deltaY: e.deltaY, originalEvent: t });
          }),
              (X.prototype._onWheel = function (t) {
                  var e = this.options;
                  if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                      var i = this._event;
                      (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                          P.isFirefox && 1 == t.deltaMode && ((i.deltaX *= e.firefoxMultiplier), (i.deltaY *= e.firefoxMultiplier)),
                          (i.deltaX *= e.mouseMultiplier),
                          (i.deltaY *= e.mouseMultiplier),
                          this._notify(t);
                  }
              }),
              (X.prototype._onMouseWheel = function (t) {
                  if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                      var e = this._event;
                      (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0), (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta), this._notify(t);
                  }
              }),
              (X.prototype._onTouchStart = function (t) {
                  var e = t.targetTouches ? t.targetTouches[0] : t;
                  (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
              }),
              (X.prototype._onTouchMove = function (t) {
                  var e = this.options;
                  e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                  var i = this._event,
                      n = t.targetTouches ? t.targetTouches[0] : t;
                  (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier), (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier), (this.touchStartX = n.pageX), (this.touchStartY = n.pageY), this._notify(t);
              }),
              (X.prototype._onKeyDown = function (t) {
                  var e = this._event;
                  e.deltaX = e.deltaY = 0;
                  var i = window.innerHeight - 40;
                  switch (t.keyCode) {
                      case H:
                      case W:
                          e.deltaY = this.options.keyStep;
                          break;
                      case N:
                      case Y:
                          e.deltaY = -this.options.keyStep;
                          break;
                      case t.shiftKey:
                          e.deltaY = i;
                          break;
                      case q:
                          e.deltaY = -i;
                          break;
                      default:
                          return;
                  }
                  this._notify(t);
              }),
              (X.prototype._bind = function () {
                  P.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
                      P.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                      P.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                      P.hasPointer &&
                          P.hasTouchWin &&
                          ((this.bodyTouchAction = document.body.style.msTouchAction),
                          (document.body.style.msTouchAction = "none"),
                          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
                          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
                      P.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
              }),
              (X.prototype._unbind = function () {
                  P.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
                      P.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
                      P.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)),
                      P.hasPointer &&
                          P.hasTouchWin &&
                          ((document.body.style.msTouchAction = this.bodyTouchAction), this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                      P.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
              }),
              (X.prototype.on = function (t, e) {
                  this._emitter.on(z, t, e);
                  var i = this._emitter.e;
                  i && i[z] && 1 === i[z].length && this._bind();
              }),
              (X.prototype.off = function (t, e) {
                  this._emitter.off(z, t, e);
                  var i = this._emitter.e;
                  (!i[z] || i[z].length <= 0) && this._unbind();
              }),
              (X.prototype.reset = function () {
                  var t = this._event;
                  (t.x = 0), (t.y = 0);
              }),
              (X.prototype.destroy = function () {
                  this._emitter.off(), this._unbind();
              });
          var G = 4,
              Q = 0.001,
              Z = 1e-7,
              J = 10,
              tt = 11,
              et = 1 / (tt - 1),
              it = "function" == typeof Float32Array;
          function nt(t, e) {
              return 1 - 3 * e + 3 * t;
          }
          function rt(t, e) {
              return 3 * e - 6 * t;
          }
          function ot(t) {
              return 3 * t;
          }
          function st(t, e, i) {
              return ((nt(e, i) * t + rt(e, i)) * t + ot(e)) * t;
          }
          function at(t, e, i) {
              return 3 * nt(e, i) * t * t + 2 * rt(e, i) * t + ot(e);
          }
          function lt(t) {
              return t;
          }
          var ut = function (t, e, i, n) {
                  if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                  if (t === e && i === n) return lt;
                  for (var r = it ? new Float32Array(tt) : new Array(tt), o = 0; o < tt; ++o) r[o] = st(o * et, t, i);
                  function s(e) {
                      for (var n = 0, o = 1, s = tt - 1; o !== s && r[o] <= e; ++o) n += et;
                      var a = n + ((e - r[--o]) / (r[o + 1] - r[o])) * et,
                          l = at(a, t, i);
                      return l >= Q
                          ? (function (t, e, i, n) {
                                for (var r = 0; r < G; ++r) {
                                    var o = at(e, i, n);
                                    if (0 === o) return e;
                                    e -= (st(e, i, n) - t) / o;
                                }
                                return e;
                            })(e, a, t, i)
                          : 0 === l
                          ? a
                          : (function (t, e, i, n, r) {
                                var o,
                                    s,
                                    a = 0;
                                do {
                                    (o = st((s = e + (i - e) / 2), n, r) - t) > 0 ? (i = s) : (e = s);
                                } while (Math.abs(o) > Z && ++a < J);
                                return s;
                            })(e, n, n + et, t, i);
                  }
                  return function (t) {
                      return 0 === t ? 0 : 1 === t ? 1 : st(s(t), e, n);
                  };
              },
              ct = 38,
              ht = 40,
              ft = 32,
              dt = 9,
              pt = 33,
              mt = 34,
              gt = 36,
              vt = 35,
              Dt = (function (t) {
                  l(n, t);
                  var e = d(n);
                  function n() {
                      var t,
                          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      return (
                          i(this, n),
                          history.scrollRestoration && (history.scrollRestoration = "manual"),
                          window.scrollTo(0, 0),
                          (t = e.call(this, r)).inertia && (t.lerp = 0.1 * t.inertia),
                          (t.isScrolling = !1),
                          (t.isDraggingScrollbar = !1),
                          (t.isTicking = !1),
                          (t.hasScrollTicking = !1),
                          (t.parallaxElements = {}),
                          (t.stop = !1),
                          (t.scrollbarContainer = r.scrollbarContainer),
                          (t.checkKey = t.checkKey.bind(h(t))),
                          window.addEventListener("keydown", t.checkKey, !1),
                          t
                      );
                  }
                  return (
                      r(n, [
                          {
                              key: "init",
                              value: function () {
                                  var t = this;
                                  this.html.classList.add(this.smoothClass),
                                      this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                                      (this.instance = a({ delta: { x: this.initPosition.x, y: this.initPosition.y }, scroll: { x: this.initPosition.x, y: this.initPosition.y } }, this.instance)),
                                      (this.vs = new I({
                                          el: this.scrollFromAnywhere ? document : this.el,
                                          mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                                          firefoxMultiplier: this.firefoxMultiplier,
                                          touchMultiplier: this.touchMultiplier,
                                          useKeyboard: !1,
                                          passive: !0,
                                      })),
                                      this.vs.on(function (e) {
                                          t.stop ||
                                              t.isDraggingScrollbar ||
                                              requestAnimationFrame(function () {
                                                  t.updateDelta(e), t.isScrolling || t.startScrolling();
                                              });
                                      }),
                                      this.setScrollLimit(),
                                      this.initScrollBar(),
                                      this.addSections(),
                                      this.addElements(),
                                      this.checkScroll(!0),
                                      this.transformElements(!0, !0),
                                      p(u(n.prototype), "init", this).call(this);
                              },
                          },
                          {
                              key: "setScrollLimit",
                              value: function () {
                                  if (((this.instance.limit.y = this.el.offsetHeight - this.windowHeight), "horizontal" === this.direction)) {
                                      for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                                      this.instance.limit.x = t - this.windowWidth;
                                  }
                              },
                          },
                          {
                              key: "startScrolling",
                              value: function () {
                                  (this.startScrollTs = Date.now()), (this.isScrolling = !0), this.checkScroll(), this.html.classList.add(this.scrollingClass);
                              },
                          },
                          {
                              key: "stopScrolling",
                              value: function () {
                                  cancelAnimationFrame(this.checkScrollRaf),
                                      (this.startScrollTs = void 0),
                                      this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), (this.scrollToRaf = null)),
                                      (this.isScrolling = !1),
                                      (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                                      this.html.classList.remove(this.scrollingClass);
                              },
                          },
                          {
                              key: "checkKey",
                              value: function (t) {
                                  var e = this;
                                  if (this.stop)
                                      t.keyCode == dt &&
                                          requestAnimationFrame(function () {
                                              (e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0);
                                          });
                                  else {
                                      switch (t.keyCode) {
                                          case dt:
                                              requestAnimationFrame(function () {
                                                  (e.html.scrollTop = 0), (document.body.scrollTop = 0), (e.html.scrollLeft = 0), (document.body.scrollLeft = 0), e.scrollTo(document.activeElement, { offset: -window.innerHeight / 2 });
                                              });
                                              break;
                                          case ct:
                                              this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                              break;
                                          case ht:
                                              this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                              break;
                                          case pt:
                                              this.instance.delta[this.directionAxis] -= window.innerHeight;
                                              break;
                                          case mt:
                                              this.instance.delta[this.directionAxis] += window.innerHeight;
                                              break;
                                          case gt:
                                              this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                              break;
                                          case vt:
                                              this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                              break;
                                          case ft:
                                              this.isActiveElementScrollSensitive() && (t.shiftKey ? (this.instance.delta[this.directionAxis] -= window.innerHeight) : (this.instance.delta[this.directionAxis] += window.innerHeight));
                                              break;
                                          default:
                                              return;
                                      }
                                      this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                          this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                                          this.stopScrolling(),
                                          (this.isScrolling = !0),
                                          this.checkScroll(),
                                          this.html.classList.add(this.scrollingClass);
                                  }
                              },
                          },
                          {
                              key: "isActiveElementScrollSensitive",
                              value: function () {
                                  return !(
                                      document.activeElement instanceof HTMLInputElement ||
                                      document.activeElement instanceof HTMLTextAreaElement ||
                                      document.activeElement instanceof HTMLButtonElement ||
                                      document.activeElement instanceof HTMLSelectElement
                                  );
                              },
                          },
                          {
                              key: "checkScroll",
                              value: function () {
                                  var t = this,
                                      e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                  if (e || this.isScrolling || this.isDraggingScrollbar) {
                                      this.hasScrollTicking ||
                                          ((this.checkScrollRaf = requestAnimationFrame(function () {
                                              return t.checkScroll();
                                          })),
                                          (this.hasScrollTicking = !0)),
                                          this.updateScroll();
                                      var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                          r = Date.now() - this.startScrollTs;
                                      if (
                                          (!this.animatingScroll && r > 100 && ((i < 0.5 && 0 != this.instance.delta[this.directionAxis]) || (i < 0.5 && 0 == this.instance.delta[this.directionAxis])) && this.stopScrolling(),
                                          Object.entries(this.sections).forEach(function (i) {
                                              var n = m(i, 2),
                                                  r = (n[0], n[1]);
                                              r.persistent || (t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis])
                                                  ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]),
                                                    r.inView || ((r.inView = !0), (r.el.style.opacity = 1), (r.el.style.pointerEvents = "all"), r.el.setAttribute("data-".concat(t.name, "-section-inview"), "")))
                                                  : ((r.inView || e) && ((r.inView = !1), (r.el.style.opacity = 0), (r.el.style.pointerEvents = "none"), r.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                                                    t.transform(r.el, 0, 0));
                                          }),
                                          this.getDirection && this.addDirection(),
                                          this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                          this.detectElements(),
                                          this.transformElements(),
                                          this.hasScrollbar)
                                      ) {
                                          var o = (this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis]) * this.scrollBarLimit[this.directionAxis];
                                          "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o);
                                      }
                                      p(u(n.prototype), "checkScroll", this).call(this), (this.hasScrollTicking = !1);
                                  }
                              },
                          },
                          {
                              key: "resize",
                              value: function () {
                                  (this.windowHeight = window.innerHeight), (this.windowWidth = window.innerWidth), this.checkContext(), (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }), this.update();
                              },
                          },
                          {
                              key: "updateDelta",
                              value: function (t) {
                                  var e,
                                      i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                                  (e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY),
                                      (this.instance.delta[this.directionAxis] -= e * this.multiplier),
                                      this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                      this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
                              },
                          },
                          {
                              key: "updateScroll",
                              value: function (t) {
                                  this.isScrolling || this.isDraggingScrollbar
                                      ? (this.instance.scroll[this.directionAxis] = V(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp))
                                      : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]
                                      ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis])
                                      : this.instance.scroll.y < 0
                                      ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                                      : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                              },
                          },
                          {
                              key: "addDirection",
                              value: function () {
                                  this.instance.delta.y > this.instance.scroll.y
                                      ? "down" !== this.instance.direction && (this.instance.direction = "down")
                                      : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                                      this.instance.delta.x > this.instance.scroll.x
                                          ? "right" !== this.instance.direction && (this.instance.direction = "right")
                                          : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left");
                              },
                          },
                          {
                              key: "addSpeed",
                              value: function () {
                                  this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]
                                      ? (this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs))
                                      : (this.instance.speed = 0);
                              },
                          },
                          {
                              key: "initScrollBar",
                              value: function () {
                                  if (
                                      ((this.scrollbar = document.createElement("span")),
                                      (this.scrollbarThumb = document.createElement("span")),
                                      this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                                      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                                      this.scrollbar.append(this.scrollbarThumb),
                                      this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                                      (this.getScrollBar = this.getScrollBar.bind(this)),
                                      (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                                      (this.moveScrollBar = this.moveScrollBar.bind(this)),
                                      this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                                      window.addEventListener("mouseup", this.releaseScrollBar),
                                      window.addEventListener("mousemove", this.moveScrollBar),
                                      (this.hasScrollbar = !1),
                                      "horizontal" == this.direction)
                                  ) {
                                      if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                                  } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                                  (this.hasScrollbar = !0),
                                      (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                      (this.scrollbarHeight = this.scrollbarBCR.height),
                                      (this.scrollbarWidth = this.scrollbarBCR.width),
                                      "horizontal" === this.direction
                                          ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                          : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                      (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                      (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                              },
                          },
                          {
                              key: "reinitScrollBar",
                              value: function () {
                                  if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                                      if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                                  } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                                  (this.hasScrollbar = !0),
                                      (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                      (this.scrollbarHeight = this.scrollbarBCR.height),
                                      (this.scrollbarWidth = this.scrollbarBCR.width),
                                      "horizontal" === this.direction
                                          ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                          : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                      (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                      (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                              },
                          },
                          {
                              key: "destroyScrollBar",
                              value: function () {
                                  this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                                      window.removeEventListener("mouseup", this.releaseScrollBar),
                                      window.removeEventListener("mousemove", this.moveScrollBar),
                                      this.scrollbar.remove();
                              },
                          },
                          {
                              key: "getScrollBar",
                              value: function (t) {
                                  (this.isDraggingScrollbar = !0), this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
                              },
                          },
                          {
                              key: "releaseScrollBar",
                              value: function (t) {
                                  (this.isDraggingScrollbar = !1), this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
                              },
                          },
                          {
                              key: "moveScrollBar",
                              value: function (t) {
                                  var e = this;
                                  this.isDraggingScrollbar &&
                                      requestAnimationFrame(function () {
                                          var i = (((100 * (t.clientX - e.scrollbarBCR.left)) / e.scrollbarWidth) * e.instance.limit.x) / 100,
                                              n = (((100 * (t.clientY - e.scrollbarBCR.top)) / e.scrollbarHeight) * e.instance.limit.y) / 100;
                                          n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                                      });
                              },
                          },
                          {
                              key: "addElements",
                              value: function () {
                                  var t = this;
                                  (this.els = {}),
                                      (this.parallaxElements = {}),
                                      this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function (e, i) {
                                          var n,
                                              r,
                                              o,
                                              s = K(e),
                                              a = Object.entries(t.sections)
                                                  .map(function (t) {
                                                      var e = m(t, 2);
                                                      e[0];
                                                      return e[1];
                                                  })
                                                  .find(function (t) {
                                                      return s.includes(t.el);
                                                  }),
                                              l = e.dataset[t.name + "Class"] || t.class,
                                              u = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                                              c = e.dataset[t.name + "Repeat"],
                                              h = e.dataset[t.name + "Call"],
                                              f = e.dataset[t.name + "Position"],
                                              d = e.dataset[t.name + "Delay"],
                                              p = e.dataset[t.name + "Direction"],
                                              g = "string" == typeof e.dataset[t.name + "Sticky"],
                                              v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                              D = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                              y = e.dataset[t.name + "Target"],
                                              b = (o = void 0 !== y ? document.querySelector("".concat(y)) : e).getBoundingClientRect();
                                          null === a
                                              ? ((n = b.top + t.instance.scroll.y - U(o).y), (r = b.left + t.instance.scroll.x - U(o).x))
                                              : a.inView
                                              ? ((n = b.top + t.instance.scroll.y - U(o).y), (r = b.left + t.instance.scroll.x - U(o).x))
                                              : ((n = b.top - U(a.el).y - U(o).y), (r = b.left - U(a.el).x - U(o).x));
                                          var w = n + o.offsetHeight,
                                              _ = r + o.offsetWidth,
                                              x = { x: (_ - r) / 2 + r, y: (w - n) / 2 + n };
                                          if (g) {
                                              var C = e.getBoundingClientRect(),
                                                  E = C.top,
                                                  k = C.left,
                                                  T = { x: k - r, y: E - n };
                                              (n += window.innerHeight),
                                                  (r += window.innerWidth),
                                                  (w = E + o.offsetHeight - e.offsetHeight - T[t.directionAxis]),
                                                  (x = { x: ((_ = k + o.offsetWidth - e.offsetWidth - T[t.directionAxis]) - r) / 2 + r, y: (w - n) / 2 + n });
                                          }
                                          c = "false" != c && (null != c || t.repeat);
                                          var $ = [0, 0];
                                          if (D)
                                              if ("horizontal" === t.direction) {
                                                  for (var F = 0; F < D.length; F++)
                                                      "string" == typeof D[F] ? (D[F].includes("%") ? ($[F] = parseInt((D[F].replace("%", "") * t.windowWidth) / 100)) : ($[F] = parseInt(D[F]))) : ($[F] = D[F]);
                                                  (r += $[0]), (_ -= $[1]);
                                              } else {
                                                  for (F = 0; F < D.length; F++) "string" == typeof D[F] ? (D[F].includes("%") ? ($[F] = parseInt((D[F].replace("%", "") * t.windowHeight) / 100)) : ($[F] = parseInt(D[F]))) : ($[F] = D[F]);
                                                  (n += $[0]), (w -= $[1]);
                                              }
                                          var A = {
                                              el: e,
                                              id: u,
                                              class: l,
                                              section: a,
                                              top: n,
                                              middle: x,
                                              bottom: w,
                                              left: r,
                                              right: _,
                                              offset: D,
                                              progress: 0,
                                              repeat: c,
                                              inView: !1,
                                              call: h,
                                              speed: v,
                                              delay: d,
                                              position: f,
                                              target: o,
                                              direction: p,
                                              sticky: g,
                                          };
                                          (t.els[u] = A), e.classList.contains(l) && t.setInView(t.els[u], u), (!1 !== v || g) && (t.parallaxElements[u] = A);
                                      });
                              },
                          },
                          {
                              key: "addSections",
                              value: function () {
                                  var t = this;
                                  this.sections = {};
                                  var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                                  0 === e.length && (e = [this.el]),
                                      e.forEach(function (e, i) {
                                          var n = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                                              r = e.getBoundingClientRect(),
                                              o = { x: r.left - 1.5 * window.innerWidth - U(e).x, y: r.top - 1.5 * window.innerHeight - U(e).y },
                                              s = { x: o.x + r.width + 2 * window.innerWidth, y: o.y + r.height + 2 * window.innerHeight },
                                              a = "string" == typeof e.dataset[t.name + "Persistent"];
                                          e.setAttribute("data-scroll-section-id", n);
                                          var l = { el: e, offset: o, limit: s, inView: !1, persistent: a, id: n };
                                          t.sections[n] = l;
                                      });
                              },
                          },
                          {
                              key: "transform",
                              value: function (t, e, i, n) {
                                  var r;
                                  if (n) {
                                      var o = U(t),
                                          s = V(o.x, e, n),
                                          a = V(o.y, i, n);
                                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)");
                                  } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                                  (t.style.webkitTransform = r), (t.style.msTransform = r), (t.style.transform = r);
                              },
                          },
                          {
                              key: "transformElements",
                              value: function (t) {
                                  var e = this,
                                      i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                      n = this.instance.scroll.x + this.windowWidth,
                                      r = this.instance.scroll.y + this.windowHeight,
                                      o = { x: this.instance.scroll.x + this.windowMiddle.x, y: this.instance.scroll.y + this.windowMiddle.y };
                                  Object.entries(this.parallaxElements).forEach(function (s) {
                                      var a = m(s, 2),
                                          l = (a[0], a[1]),
                                          u = !1;
                                      if ((t && (u = 0), l.inView || i))
                                          switch (l.position) {
                                              case "top":
                                                  u = e.instance.scroll[e.directionAxis] * -l.speed;
                                                  break;
                                              case "elementTop":
                                                  u = (r - l.top) * -l.speed;
                                                  break;
                                              case "bottom":
                                                  u = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                                                  break;
                                              case "left":
                                                  u = e.instance.scroll[e.directionAxis] * -l.speed;
                                                  break;
                                              case "elementLeft":
                                                  u = (n - l.left) * -l.speed;
                                                  break;
                                              case "right":
                                                  u = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * l.speed;
                                                  break;
                                              default:
                                                  u = (o[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed;
                                          }
                                      l.sticky &&
                                          (u = l.inView
                                              ? "horizontal" === e.direction
                                                  ? e.instance.scroll.x - l.left + window.innerWidth
                                                  : e.instance.scroll.y - l.top + window.innerHeight
                                              : "horizontal" === e.direction
                                              ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2
                                                  ? 0
                                                  : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth
                                              : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2
                                              ? 0
                                              : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
                                          !1 !== u && ("horizontal" === l.direction || ("horizontal" === e.direction && "vertical" !== l.direction) ? e.transform(l.el, u, 0, !t && l.delay) : e.transform(l.el, 0, u, !t && l.delay));
                                  });
                              },
                          },
                          {
                              key: "scrollTo",
                              value: function (t) {
                                  var e = this,
                                      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                      n = parseInt(i.offset) || 0,
                                      r = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                                      o = i.easing || [0.25, 0, 0.35, 1],
                                      s = !!i.disableLerp,
                                      a = !!i.callback && i.callback;
                                  if (((o = ut.apply(void 0, g(o))), "string" == typeof t)) {
                                      if ("top" === t) t = 0;
                                      else if ("bottom" === t) t = this.instance.limit.y;
                                      else if ("left" === t) t = 0;
                                      else if ("right" === t) t = this.instance.limit.x;
                                      else if (!(t = document.querySelector(t))) return;
                                  } else if ("number" == typeof t) t = parseInt(t);
                                  else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                                  if ("number" != typeof t) {
                                      var l = K(t).includes(this.el);
                                      if (!l) return;
                                      var u = t.getBoundingClientRect(),
                                          c = u.top,
                                          h = u.left,
                                          f = K(t),
                                          d = f.find(function (t) {
                                              return Object.entries(e.sections)
                                                  .map(function (t) {
                                                      var e = m(t, 2);
                                                      e[0];
                                                      return e[1];
                                                  })
                                                  .find(function (e) {
                                                      return e.el == t;
                                                  });
                                          }),
                                          p = 0;
                                      (p = d ? U(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis]), (n = "horizontal" === this.direction ? h + n - p : c + n - p);
                                  } else n = t + n;
                                  var v = parseFloat(this.instance.delta[this.directionAxis]),
                                      D = Math.max(0, Math.min(n, this.instance.limit[this.directionAxis])),
                                      y = D - v,
                                      b = function (t) {
                                          s ? ("horizontal" === e.direction ? e.setScroll(v + y * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, v + y * t)) : (e.instance.delta[e.directionAxis] = v + y * t);
                                      };
                                  (this.animatingScroll = !0), this.stopScrolling(), this.startScrolling();
                                  var w = Date.now(),
                                      _ = function t() {
                                          var i = (Date.now() - w) / r;
                                          i > 1 ? (b(1), (e.animatingScroll = !1), 0 == r && e.update(), a && a()) : ((e.scrollToRaf = requestAnimationFrame(t)), b(o(i)));
                                      };
                                  _();
                              },
                          },
                          {
                              key: "update",
                              value: function () {
                                  this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
                              },
                          },
                          {
                              key: "startScroll",
                              value: function () {
                                  this.stop = !1;
                              },
                          },
                          {
                              key: "stopScroll",
                              value: function () {
                                  this.stop = !0;
                              },
                          },
                          {
                              key: "setScroll",
                              value: function (t, e) {
                                  this.instance = a(a({}, this.instance), {}, { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 });
                              },
                          },
                          {
                              key: "destroy",
                              value: function () {
                                  p(u(n.prototype), "destroy", this).call(this),
                                      this.stopScrolling(),
                                      this.html.classList.remove(this.smoothClass),
                                      this.vs.destroy(),
                                      this.destroyScrollBar(),
                                      window.removeEventListener("keydown", this.checkKey, !1);
                              },
                          },
                      ]),
                      n
                  );
              })(b),
              yt = (function () {
                  function t() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      i(this, t),
                          (this.options = e),
                          Object.assign(this, y, e),
                          (this.smartphone = y.smartphone),
                          e.smartphone && Object.assign(this.smartphone, e.smartphone),
                          (this.tablet = y.tablet),
                          e.tablet && Object.assign(this.tablet, e.tablet),
                          this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
                          this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                          this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                          this.init();
                  }
                  return (
                      r(t, [
                          {
                              key: "init",
                              value: function () {
                                  if (
                                      ((this.options.isMobile =
                                          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                                          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
                                          window.innerWidth < this.tablet.breakpoint),
                                      (this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint),
                                      (this.smooth && !this.options.isMobile) || (this.tablet.smooth && this.options.isTablet) || (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
                                          ? (this.scroll = new Dt(this.options))
                                          : (this.scroll = new C(this.options)),
                                      this.scroll.init(),
                                      window.location.hash)
                                  ) {
                                      var t = window.location.hash.slice(1, window.location.hash.length),
                                          e = document.getElementById(t);
                                      e && this.scroll.scrollTo(e);
                                  }
                              },
                          },
                          {
                              key: "update",
                              value: function () {
                                  this.scroll.update();
                              },
                          },
                          {
                              key: "start",
                              value: function () {
                                  this.scroll.startScroll();
                              },
                          },
                          {
                              key: "stop",
                              value: function () {
                                  this.scroll.stopScroll();
                              },
                          },
                          {
                              key: "scrollTo",
                              value: function (t, e) {
                                  this.scroll.scrollTo(t, e);
                              },
                          },
                          {
                              key: "setScroll",
                              value: function (t, e) {
                                  this.scroll.setScroll(t, e);
                              },
                          },
                          {
                              key: "on",
                              value: function (t, e) {
                                  this.scroll.setEvents(t, e);
                              },
                          },
                          {
                              key: "off",
                              value: function (t, e) {
                                  this.scroll.unsetEvents(t, e);
                              },
                          },
                          {
                              key: "destroy",
                              value: function () {
                                  this.scroll.destroy();
                              },
                          },
                      ]),
                      t
                  );
              })();
          e.a = yt;
      }.call(this, i(6)));
  },
  ,
  function (t, e) {
      /*!
       * ihavecookies - jQuery plugin for displaying cookie/privacy message
       * v0.3.2
       *
       * Copyright (c) 2018 Ketan Mistry (https://iamketan.com.au)
       * Licensed under the MIT license:
       * http://www.opensource.org/licenses/mit-license.php
       *
       */
      !(function (t) {
          (t.fn.ihavecookies = function (r, o) {
              var s = t(this),
                  a = t.extend(
                      {
                          cookieTypes: [
                              { type: "Site Preferences", value: "preferences", description: "These are cookies that are related to your site preferences, e.g. remembering your username, site colours, etc." },
                              { type: "Analytics", value: "analytics", description: "Cookies related to site visits, browser types, etc." },
                              { type: "Marketing", value: "marketing", description: "Cookies related to marketing, e.g. newsletters, social media, etc" },
                          ],
                          title: "Cookies & Privacy",
                          message:
                              "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches, and give us insights into user behavior so we can improve our communications and products.",
                          link: "/privacy-policy",
                          delay: 2e3,
                          expires: 30,
                          moreInfoLabel: "More information",
                          acceptBtnLabel: "Accept Cookies",
                          advancedBtnLabel: "Customise Cookies",
                          cookieTypesTitle: "Select cookies to accept",
                          fixedCookieTypeLabel: "Necessary",
                          fixedCookieTypeDesc: "These are cookies that are essential for the website to work correctly.",
                          onAccept: function () {},
                          uncheckBoxes: !1,
                      },
                      r
                  ),
                  l = n("cookieControl"),
                  u = n("cookieControlPrefs");
              if (l && u && "reinit" != o) {
                  var c = !0;
                  "false" == l && (c = !1), e(c, a.expires);
              } else {
                  t("#gdpr-cookie-message").remove();
                  var h =
                      '<div class="form-check"><input class="form-check-input" type="checkbox" name="gdpr[]" value="necessary" id="fixedCookieTypeDesc" checked="checked" disabled="disabled"><label class="form-check-label" for="fixedCookieTypeDesc" title="' +
                      a.fixedCookieTypeDesc +
                      '">' +
                      a.fixedCookieTypeLabel +
                      "</label></div>";
                  (preferences = JSON.parse(u)),
                      t.each(a.cookieTypes, function (t, e) {
                          if ("" !== e.type && "" !== e.value) {
                              !1 !== e.description && ' title="' + e.description + '"',
                                  (h +=
                                      '<div class="form-check"><input class="form-check-input" type="checkbox" id="gdpr-cookietype-' +
                                      e.value +
                                      '" name="gdpr[]" value="' +
                                      e.value +
                                      '" data-auto="on"><label class="form-check-label" for="gdpr-cookietype-' +
                                      e.value +
                                      '">' +
                                      e.type +
                                      "</label></div>");
                          }
                      });
                  var f =
                      '<div id="gdpr-cookie-message" class="bg-dark"><div class="gdpr-header"><div class="h5">' +
                      a.title +
                      '</div><div class="btn-group justify-between"><button class="btn bg-darker regular" id="gdpr-cookie-advanced" type="button"></button><button class="btn light fill" id="gdpr-cookie-accept" type="button">' +
                      a.acceptBtnLabel +
                      '</button></div></div><div class="cookie-message"><p>' +
                      a.message +
                      '</p> </div><div id="gdpr-cookie-types" style="display:none;"><p>' +
                      a.cookieTypesTitle +
                      "</p><ul>" +
                      h +
                      '</ul><a clas="text-link" href="' +
                      a.link +
                      '" data-barba-prevent="all"><span class="value">' +
                      a.moreInfoLabel +
                      "</span></a></div></div>";
                  setTimeout(function () {
                      t(s).append(f),
                          t("#gdpr-cookie-message").show(function () {
                              t("#gdpr-cookie-message").addClass("is-visible"),
                                  "reinit" == o &&
                                      (t("#gdpr-cookie-advanced").trigger("click"),
                                      t.each(preferences, function (e, i) {
                                          t("input#gdpr-cookietype-" + i).prop("checked", !0);
                                      }));
                          });
                  }, a.delay),
                      t("body").on("click", "#gdpr-cookie-accept", function () {
                          e(!0, a.expires), t('input[name="gdpr[]"][data-auto="on"]').prop("checked", !0);
                          var n = [];
                          t.each(t('input[name="gdpr[]"]').serializeArray(), function (t, e) {
                              n.push(e.value);
                          }),
                              i("cookieControlPrefs", encodeURIComponent(JSON.stringify(n)), 365),
                              a.onAccept.call(this);
                      }),
                      t("body").on("click", "#gdpr-cookie-advanced", function () {
                          t('input[name="gdpr[]"]:not(:disabled)').attr("data-auto", "off").prop("checked", !1),
                              t("#gdpr-cookie-types").slideDown("fast", function () {
                                  t("#gdpr-cookie-advanced").prop("disabled", !0);
                              });
                      });
              }
              !0 === a.uncheckBoxes && t('input[type="checkbox"].ihavecookies').prop("checked", !1);
          }),
              (t.fn.ihavecookies.cookie = function () {
                  var t = n("cookieControlPrefs");
                  return JSON.parse(t);
              }),
              (t.fn.ihavecookies.preference = function (t) {
                  var e = n("cookieControl"),
                      i = n("cookieControlPrefs");
                  return (i = JSON.parse(i)), !1 !== e && !1 !== i && -1 !== i.indexOf(t);
              });
          var e = function (e, n) {
                  i("cookieControl", e, n),
                      t("#gdpr-cookie-message").fadeOut("fast", function () {
                          t(this).remove();
                      });
              },
              i = function (t, e, i) {
                  var r = new Date();
                  r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3);
                  var o = "expires=" + r.toUTCString();
                  return (document.cookie = t + "=" + e + ";" + o + ";path=/"), n(t);
              },
              n = function (t) {
                  for (var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), n = 0; n < i.length; n++) {
                      for (var r = i[n]; " " == r.charAt(0); ) r = r.substring(1);
                      if (0 === r.indexOf(e)) return r.substring(e.length, r.length);
                  }
                  return !1;
              };
      })(jQuery);
  },
  function (t, e) {
      var i;
      i = (function () {
          return this;
      })();
      try {
          i = i || new Function("return this")();
      } catch (t) {
          "object" == typeof window && (i = window);
      }
      t.exports = i;
  },
  function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(0),
          r = i.n(n),
          o = i(2),
          s = i.n(o);
      function a(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
      }
      function l(t, e) {
          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
      }
      /*!
       * GSAP 3.12.3
       * https://gsap.com
       *
       * @license Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var u,
          c,
          h,
          f,
          d,
          p,
          m,
          g,
          v,
          D,
          y,
          b,
          w,
          _,
          x,
          C = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
          E = { duration: 0.5, overwrite: !1, delay: 0 },
          k = 1e-8,
          T = 2 * Math.PI,
          F = T / 4,
          A = 0,
          O = Math.sqrt,
          S = Math.cos,
          P = Math.sin,
          B = function (t) {
              return "string" == typeof t;
          },
          M = function (t) {
              return "function" == typeof t;
          },
          R = function (t) {
              return "number" == typeof t;
          },
          L = function (t) {
              return void 0 === t;
          },
          j = function (t) {
              return "object" == typeof t;
          },
          z = function (t) {
              return !1 !== t;
          },
          I = function () {
              return "undefined" != typeof window;
          },
          H = function (t) {
              return M(t) || B(t);
          },
          W = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
          N = Array.isArray,
          Y = /(?:-?\.?\d|\.)+/gi,
          q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          U = /[+-]=-?[.\d]+/,
          K = /[^,'"\[\]\s]+/gi,
          G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          Q = {},
          Z = {},
          J = function (t) {
              return (Z = $t(t, Q)) && Ti;
          },
          tt = function (t, e) {
              return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
          },
          et = function (t, e) {
              return !e && console.warn(t);
          },
          it = function (t, e) {
              return (t && (Q[t] = e) && Z && (Z[t] = e)) || Q;
          },
          nt = function () {
              return 0;
          },
          rt = { suppressEvents: !0, isStart: !0, kill: !1 },
          ot = { suppressEvents: !0, kill: !1 },
          st = { suppressEvents: !0 },
          at = {},
          lt = [],
          ut = {},
          ct = {},
          ht = {},
          ft = 30,
          dt = [],
          pt = "",
          mt = function (t) {
              var e,
                  i,
                  n = t[0];
              if ((j(n) || M(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
                  for (i = dt.length; i-- && !dt[i].targetTest(n); );
                  e = dt[i];
              }
              for (i = t.length; i--; ) (t[i] && (t[i]._gsap || (t[i]._gsap = new We(t[i], e)))) || t.splice(i, 1);
              return t;
          },
          gt = function (t) {
              return t._gsap || mt(se(t))[0]._gsap;
          },
          vt = function (t, e, i) {
              return (i = t[e]) && M(i) ? t[e]() : (L(i) && t.getAttribute && t.getAttribute(e)) || i;
          },
          Dt = function (t, e) {
              return (t = t.split(",")).forEach(e) || t;
          },
          yt = function (t) {
              return Math.round(1e5 * t) / 1e5 || 0;
          },
          bt = function (t) {
              return Math.round(1e7 * t) / 1e7 || 0;
          },
          wt = function (t, e) {
              var i = e.charAt(0),
                  n = parseFloat(e.substr(2));
              return (t = parseFloat(t)), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n;
          },
          _t = function (t, e) {
              for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
              return n < i;
          },
          xt = function () {
              var t,
                  e,
                  i = lt.length,
                  n = lt.slice(0);
              for (ut = {}, lt.length = 0, t = 0; t < i; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          Ct = function (t, e, i, n) {
              lt.length && !c && xt(), t.render(e, i, n || (c && e < 0 && (t._initted || t._startAt))), lt.length && !c && xt();
          },
          Et = function (t) {
              var e = parseFloat(t);
              return (e || 0 === e) && (t + "").match(K).length < 2 ? e : B(t) ? t.trim() : t;
          },
          kt = function (t) {
              return t;
          },
          Tt = function (t, e) {
              for (var i in e) i in t || (t[i] = e[i]);
              return t;
          },
          $t = function (t, e) {
              for (var i in e) t[i] = e[i];
              return t;
          },
          Ft = function t(e, i) {
              for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = j(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
              return e;
          },
          At = function (t, e) {
              var i,
                  n = {};
              for (i in t) i in e || (n[i] = t[i]);
              return n;
          },
          Ot = function (t) {
              var e,
                  i = t.parent || f,
                  n = t.keyframes
                      ? ((e = N(t.keyframes)),
                        function (t, i) {
                            for (var n in i) n in t || ("duration" === n && e) || "ease" === n || (t[n] = i[n]);
                        })
                      : Tt;
              if (z(t.inherit)) for (; i; ) n(t, i.vars.defaults), (i = i.parent || i._dp);
              return t;
          },
          St = function (t, e, i, n, r) {
              void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
              var o,
                  s = t[n];
              if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
              return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[n] = e), (e._prev = s), (e.parent = e._dp = t), e;
          },
          Pt = function (t, e, i, n) {
              void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
              var r = e._prev,
                  o = e._next;
              r ? (r._next = o) : t[i] === e && (t[i] = o), o ? (o._prev = r) : t[n] === e && (t[n] = r), (e._next = e._prev = e.parent = null);
          },
          Bt = function (t, e) {
              t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
          },
          Mt = function (t, e) {
              if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
              return t;
          },
          Rt = function (t) {
              for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
          },
          Lt = function (t, e, i, n) {
              return t._startAt && (c ? t._startAt.revert(ot) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, n));
          },
          jt = function t(e) {
              return !e || (e._ts && t(e.parent));
          },
          zt = function (t) {
              return t._repeat ? It(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
          },
          It = function (t, e) {
              var i = Math.floor((t /= e));
              return t && i === t ? i - 1 : i;
          },
          Ht = function (t, e) {
              return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
          },
          Wt = function (t) {
              return (t._end = bt(t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)));
          },
          Nt = function (t, e) {
              var i = t._dp;
              return i && i.smoothChildTiming && t._ts && ((t._start = bt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Wt(t), i._dirty || Mt(i, t)), t;
          },
          Yt = function (t, e) {
              var i;
              if (
                  ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((i = Ht(t.rawTime(), e)), (!e._dur || ee(0, e.totalDuration(), i) - e._tTime > k) && e.render(i, !0)),
                  Mt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
              ) {
                  if (t._dur < t.duration()) for (i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
                  t._zTime = -k;
              }
          },
          qt = function (t, e, i, n) {
              return (
                  e.parent && Bt(e),
                  (e._start = bt((R(i) ? i : i || t !== f ? Zt(t, i, e) : t._time) + e._delay)),
                  (e._end = bt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                  St(t, e, "_first", "_last", t._sort ? "_start" : 0),
                  Ut(e) || (t._recent = e),
                  n || Yt(t, e),
                  t._ts < 0 && Nt(t, t._tTime),
                  t
              );
          },
          Xt = function (t, e) {
              return (Q.ScrollTrigger || tt("scrollTrigger", e)) && Q.ScrollTrigger.create(e, t);
          },
          Vt = function (t, e, i, n, r) {
              return Ke(t, e, r), t._initted ? (!i && t._pt && !c && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && v !== Fe.frame ? (lt.push(t), (t._lazy = [r, n]), 1) : void 0) : 1;
          },
          Ut = function (t) {
              var e = t.data;
              return "isFromStart" === e || "isStart" === e;
          },
          Kt = function (t, e, i, n) {
              var r = t._repeat,
                  o = bt(e) || 0,
                  s = t._tTime / t._tDur;
              return s && !n && (t._time *= o / t._dur), (t._dur = o), (t._tDur = r ? (r < 0 ? 1e10 : bt(o * (r + 1) + t._rDelay * r)) : o), s > 0 && !n && Nt(t, (t._tTime = t._tDur * s)), t.parent && Wt(t), i || Mt(t.parent, t), t;
          },
          Gt = function (t) {
              return t instanceof Ye ? Mt(t) : Kt(t, t._dur);
          },
          Qt = { _start: 0, endTime: nt, totalDuration: nt },
          Zt = function t(e, i, n) {
              var r,
                  o,
                  s,
                  a = e.labels,
                  l = e._recent || Qt,
                  u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
              return B(i) && (isNaN(i) || i in a)
                  ? ((o = i.charAt(0)),
                    (s = "%" === i.substr(-1)),
                    (r = i.indexOf("=")),
                    "<" === o || ">" === o
                        ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (s ? (r < 0 ? l : n).totalDuration() / 100 : 1))
                        : r < 0
                        ? (i in a || (a[i] = u), a[i])
                        : ((o = parseFloat(i.charAt(r - 1) + i.substr(r + 1))), s && n && (o = (o / 100) * (N(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + o : u + o))
                  : null == i
                  ? u
                  : +i;
          },
          Jt = function (t, e, i) {
              var n,
                  r,
                  o = R(e[1]),
                  s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                  a = e[s];
              if ((o && (a.duration = e[1]), (a.parent = i), t)) {
                  for (n = a, r = i; r && !("immediateRender" in n); ) (n = r.vars.defaults || {}), (r = z(r.vars.inherit) && r.parent);
                  (a.immediateRender = z(n.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
              }
              return new ti(e[0], a, e[s + 1]);
          },
          te = function (t, e) {
              return t || 0 === t ? e(t) : e;
          },
          ee = function (t, e, i) {
              return i < t ? t : i > e ? e : i;
          },
          ie = function (t, e) {
              return B(t) && (e = G.exec(t)) ? e[1] : "";
          },
          ne = [].slice,
          re = function (t, e) {
              return t && j(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && j(t[0]))) && !t.nodeType && t !== d;
          },
          oe = function (t, e, i) {
              return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                      var n;
                      return (B(t) && !e) || re(t, 1) ? (n = i).push.apply(n, se(t)) : i.push(t);
                  }) || i
              );
          },
          se = function (t, e, i) {
              return h && !e && h.selector ? h.selector(t) : !B(t) || i || (!p && Ae()) ? (N(t) ? oe(t, i) : re(t) ? ne.call(t, 0) : t ? [t] : []) : ne.call((e || m).querySelectorAll(t), 0);
          },
          ae = function (t) {
              return (
                  (t = se(t)[0] || et("Invalid scope") || {}),
                  function (e) {
                      var i = t.current || t.nativeElement || t;
                      return se(e, i.querySelectorAll ? i : i === t ? et("Invalid scope") || m.createElement("div") : t);
                  }
              );
          },
          le = function (t) {
              return t.sort(function () {
                  return 0.5 - Math.random();
              });
          },
          ue = function (t) {
              if (M(t)) return t;
              var e = j(t) ? t : { each: t },
                  i = Le(e.ease),
                  n = e.from || 0,
                  r = parseFloat(e.base) || 0,
                  o = {},
                  s = n > 0 && n < 1,
                  a = isNaN(n) || s,
                  l = e.axis,
                  u = n,
                  c = n;
              return (
                  B(n) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !s && a && ((u = n[0]), (c = n[1])),
                  function (t, s, h) {
                      var f,
                          d,
                          p,
                          m,
                          g,
                          v,
                          D,
                          y,
                          b,
                          w = (h || e).length,
                          _ = o[w];
                      if (!_) {
                          if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                              for (D = -1e8; D < (D = h[b++].getBoundingClientRect().left) && b < w; );
                              b < w && b--;
                          }
                          for (_ = o[w] = [], f = a ? Math.min(b, w) * u - 0.5 : n % b, d = 1e8 === b ? 0 : a ? (w * c) / b - 0.5 : (n / b) | 0, D = 0, y = 1e8, v = 0; v < w; v++)
                              (p = (v % b) - f), (m = d - ((v / b) | 0)), (_[v] = g = l ? Math.abs("y" === l ? m : p) : O(p * p + m * m)), g > D && (D = g), g < y && (y = g);
                          "random" === n && le(_),
                              (_.max = D - y),
                              (_.min = y),
                              (_.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? ("y" === l ? w / b : b) : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1)),
                              (_.b = w < 0 ? r - w : r),
                              (_.u = ie(e.amount || e.each) || 0),
                              (i = i && w < 0 ? Me(i) : i);
                      }
                      return (w = (_[t] - _.min) / _.max || 0), bt(_.b + (i ? i(w) : w) * _.v) + _.u;
                  }
              );
          },
          ce = function (t) {
              var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
              return function (i) {
                  var n = bt(Math.round(parseFloat(i) / t) * t * e);
                  return (n - (n % 1)) / e + (R(i) ? 0 : ie(i));
              };
          },
          he = function (t, e) {
              var i,
                  n,
                  r = N(t);
              return (
                  !r && j(t) && ((i = r = t.radius || 1e8), t.values ? ((t = se(t.values)), (n = !R(t[0])) && (i *= i)) : (t = ce(t.increment))),
                  te(
                      e,
                      r
                          ? M(t)
                              ? function (e) {
                                    return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                                }
                              : function (e) {
                                    for (var r, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = 1e8, u = 0, c = t.length; c--; )
                                        (r = n ? (r = t[c].x - s) * r + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && ((l = r), (u = c));
                                    return (u = !i || l <= i ? t[u] : e), n || u === e || R(e) ? u : u + ie(e);
                                }
                          : ce(t)
                  )
              );
          },
          fe = function (t, e, i, n) {
              return te(N(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
                  return N(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) * i * n) / n;
              });
          },
          de = function (t, e, i) {
              return te(i, function (i) {
                  return t[~~e(i)];
              });
          },
          pe = function (t) {
              for (var e, i, n, r, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
                  (n = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (i = t.substr(e + 7, n - e - 7).match(r ? K : Y)), (s += t.substr(o, e - o) + fe(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)), (o = n + 1);
              return s + t.substr(o, t.length - o);
          },
          me = function (t, e, i, n, r) {
              var o = e - t,
                  s = n - i;
              return te(r, function (e) {
                  return i + (((e - t) / o) * s || 0);
              });
          },
          ge = function (t, e, i) {
              var n,
                  r,
                  o,
                  s = t.labels,
                  a = 1e8;
              for (n in s) (r = s[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && ((o = n), (a = r));
              return o;
          },
          ve = function (t, e, i) {
              var n,
                  r,
                  o,
                  s = t.vars,
                  a = s[e],
                  l = h,
                  u = t._ctx;
              if (a) return (n = s[e + "Params"]), (r = s.callbackScope || t), i && lt.length && xt(), u && (h = u), (o = n ? a.apply(r, n) : a.call(r)), (h = l), o;
          },
          De = function (t) {
              return Bt(t), t.scrollTrigger && t.scrollTrigger.kill(!!c), t.progress() < 1 && ve(t, "onInterrupt"), t;
          },
          ye = [],
          be = function (t) {
              if (I() && t) {
                  var e = (t = (!t.name && t.default) || t).name,
                      i = M(t),
                      n =
                          e && !i && t.init
                              ? function () {
                                    this._props = [];
                                }
                              : t,
                      r = { init: nt, render: ui, add: Ve, kill: hi, modifier: ci, rawVars: 0 },
                      o = { targetTest: 0, get: 0, getSetter: oi, aliases: {}, register: 0 };
                  if ((Ae(), t !== n)) {
                      if (ct[e]) return;
                      Tt(n, Tt(At(t, r), o)), $t(n.prototype, $t(r, At(t, o))), (ct[(n.prop = e)] = n), t.targetTest && (dt.push(n), (at[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                  }
                  it(e, n), t.register && t.register(Ti, n, pi);
              } else t && ye.push(t);
          },
          we = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
          },
          _e = function (t, e, i) {
              return (255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
          },
          xe = function (t, e, i) {
              var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  f,
                  d = t ? (R(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : we.black;
              if (!d) {
                  if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t])) d = we[t];
                  else if ("#" === t.charAt(0)) {
                      if ((t.length < 6 && ((n = t.charAt(1)), (r = t.charAt(2)), (o = t.charAt(3)), (t = "#" + n + n + r + r + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                          return [(d = parseInt(t.substr(1, 6), 16)) >> 16, (d >> 8) & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
                      d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
                  } else if ("hsl" === t.substr(0, 3))
                      if (((d = f = t.match(Y)), e)) {
                          if (~t.indexOf("=")) return (d = t.match(q)), i && d.length < 4 && (d[3] = 1), d;
                      } else
                          (s = (+d[0] % 360) / 360),
                              (a = +d[1] / 100),
                              (n = 2 * (l = +d[2] / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                              d.length > 3 && (d[3] *= 1),
                              (d[0] = _e(s + 1 / 3, n, r)),
                              (d[1] = _e(s, n, r)),
                              (d[2] = _e(s - 1 / 3, n, r));
                  else d = t.match(Y) || we.transparent;
                  d = d.map(Number);
              }
              return (
                  e &&
                      !f &&
                      ((n = d[0] / 255),
                      (r = d[1] / 255),
                      (o = d[2] / 255),
                      (l = ((u = Math.max(n, r, o)) + (c = Math.min(n, r, o))) / 2),
                      u === c ? (s = a = 0) : ((h = u - c), (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (s = u === n ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - n) / h + 2 : (n - r) / h + 4), (s *= 60)),
                      (d[0] = ~~(s + 0.5)),
                      (d[1] = ~~(100 * a + 0.5)),
                      (d[2] = ~~(100 * l + 0.5))),
                  i && d.length < 4 && (d[3] = 1),
                  d
              );
          },
          Ce = function (t) {
              var e = [],
                  i = [],
                  n = -1;
              return (
                  t.split(ke).forEach(function (t) {
                      var r = t.match(X) || [];
                      e.push.apply(e, r), i.push((n += r.length + 1));
                  }),
                  (e.c = i),
                  e
              );
          },
          Ee = function (t, e, i) {
              var n,
                  r,
                  o,
                  s,
                  a = "",
                  l = (t + a).match(ke),
                  u = e ? "hsla(" : "rgba(",
                  c = 0;
              if (!l) return t;
              if (
                  ((l = l.map(function (t) {
                      return (t = xe(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                  })),
                  i && ((o = Ce(t)), (n = i.c).join(a) !== o.c.join(a)))
              )
                  for (s = (r = t.replace(ke, "1").split(X)).length - 1; c < s; c++) a += r[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : i).shift());
              if (!r) for (s = (r = t.split(ke)).length - 1; c < s; c++) a += r[c] + l[c];
              return a + r[s];
          },
          ke = (function () {
              var t,
                  e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
              for (t in we) e += "|" + t + "\\b";
              return new RegExp(e + ")", "gi");
          })(),
          Te = /hsl[a]?\(/,
          $e = function (t) {
              var e,
                  i = t.join(" ");
              if (((ke.lastIndex = 0), ke.test(i))) return (e = Te.test(i)), (t[1] = Ee(t[1], e)), (t[0] = Ee(t[0], e, Ce(t[1]))), !0;
          },
          Fe = (function () {
              var t,
                  e,
                  i,
                  n,
                  r,
                  o,
                  s = Date.now,
                  a = 500,
                  l = 33,
                  u = s(),
                  c = u,
                  h = 1e3 / 240,
                  f = h,
                  v = [],
                  D = function i(d) {
                      var p,
                          m,
                          g,
                          D,
                          y = s() - c,
                          b = !0 === d;
                      if ((y > a && (u += y - l), ((p = (g = (c += y) - u) - f) > 0 || b) && ((D = ++n.frame), (r = g - 1e3 * n.time), (n.time = g /= 1e3), (f += p + (p >= h ? 4 : h - p)), (m = 1)), b || (t = e(i)), m))
                          for (o = 0; o < v.length; o++) v[o](g, r, D, d);
                  };
              return (n = {
                  time: 0,
                  frame: 0,
                  tick: function () {
                      D(!0);
                  },
                  deltaRatio: function (t) {
                      return r / (1e3 / (t || 60));
                  },
                  wake: function () {
                      g &&
                          (!p &&
                              I() &&
                              ((d = p = window),
                              (m = d.document || {}),
                              (Q.gsap = Ti),
                              (d.gsapVersions || (d.gsapVersions = [])).push(Ti.version),
                              J(Z || d.GreenSockGlobals || (!d.gsap && d) || {}),
                              (i = d.requestAnimationFrame),
                              ye.forEach(be)),
                          t && n.sleep(),
                          (e =
                              i ||
                              function (t) {
                                  return setTimeout(t, (f - 1e3 * n.time + 1) | 0);
                              }),
                          (y = 1),
                          D(2));
                  },
                  sleep: function () {
                      (i ? d.cancelAnimationFrame : clearTimeout)(t), (y = 0), (e = nt);
                  },
                  lagSmoothing: function (t, e) {
                      (a = t || 1 / 0), (l = Math.min(e || 33, a));
                  },
                  fps: function (t) {
                      (h = 1e3 / (t || 240)), (f = 1e3 * n.time + h);
                  },
                  add: function (t, e, i) {
                      var r = e
                          ? function (e, i, o, s) {
                                t(e, i, o, s), n.remove(r);
                            }
                          : t;
                      return n.remove(t), v[i ? "unshift" : "push"](r), Ae(), r;
                  },
                  remove: function (t, e) {
                      ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--;
                  },
                  _listeners: v,
              });
          })(),
          Ae = function () {
              return !y && Fe.wake();
          },
          Oe = {},
          Se = /^[\d.\-M][\d.\-,\s]/,
          Pe = /["']/g,
          Be = function (t) {
              for (var e, i, n, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
                  (i = o[a]), (e = a !== l - 1 ? i.lastIndexOf(",") : i.length), (n = i.substr(0, e)), (r[s] = isNaN(n) ? n.replace(Pe, "").trim() : +n), (s = i.substr(e + 1).trim());
              return r;
          },
          Me = function (t) {
              return function (e) {
                  return 1 - t(1 - e);
              };
          },
          Re = function t(e, i) {
              for (var n, r = e._first; r; )
                  r instanceof Ye ? t(r, i) : !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === i || (r.timeline ? t(r.timeline, i) : ((n = r._ease), (r._ease = r._yEase), (r._yEase = n), (r._yoyo = i))), (r = r._next);
          },
          Le = function (t, e) {
              return (
                  (t &&
                      (M(t)
                          ? t
                          : Oe[t] ||
                            (function (t) {
                                var e,
                                    i,
                                    n,
                                    r,
                                    o = (t + "").split("("),
                                    s = Oe[o[0]];
                                return s && o.length > 1 && s.config
                                    ? s.config.apply(
                                          null,
                                          ~t.indexOf("{") ? [Be(o[1])] : ((e = t), (i = e.indexOf("(") + 1), (n = e.indexOf(")")), (r = e.indexOf("(", i)), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(Et)
                                      )
                                    : Oe._CE && Se.test(t)
                                    ? Oe._CE("", t)
                                    : s;
                            })(t))) ||
                  e
              );
          },
          je = function (t, e, i, n) {
              void 0 === i &&
                  (i = function (t) {
                      return 1 - e(1 - t);
                  }),
                  void 0 === n &&
                      (n = function (t) {
                          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                      });
              var r,
                  o = { easeIn: e, easeOut: i, easeInOut: n };
              return (
                  Dt(t, function (t) {
                      for (var e in ((Oe[t] = Q[t] = o), (Oe[(r = t.toLowerCase())] = i), o)) Oe[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Oe[t + "." + e] = o[e];
                  }),
                  o
              );
          },
          ze = function (t) {
              return function (e) {
                  return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
              };
          },
          Ie = function t(e, i, n) {
              var r = i >= 1 ? i : 1,
                  o = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
                  s = (o / T) * (Math.asin(1 / r) || 0),
                  a = function (t) {
                      return 1 === t ? 1 : r * Math.pow(2, -10 * t) * P((t - s) * o) + 1;
                  },
                  l =
                      "out" === e
                          ? a
                          : "in" === e
                          ? function (t) {
                                return 1 - a(1 - t);
                            }
                          : ze(a);
              return (
                  (o = T / o),
                  (l.config = function (i, n) {
                      return t(e, i, n);
                  }),
                  l
              );
          },
          He = function t(e, i) {
              void 0 === i && (i = 1.70158);
              var n = function (t) {
                      return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
                  },
                  r =
                      "out" === e
                          ? n
                          : "in" === e
                          ? function (t) {
                                return 1 - n(1 - t);
                            }
                          : ze(n);
              return (
                  (r.config = function (i) {
                      return t(e, i);
                  }),
                  r
              );
          };
      Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var i = e < 5 ? e + 1 : e;
          je(
              t + ",Power" + (i - 1),
              e
                  ? function (t) {
                        return Math.pow(t, i);
                    }
                  : function (t) {
                        return t;
                    },
              function (t) {
                  return 1 - Math.pow(1 - t, i);
              },
              function (t) {
                  return t < 0.5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
              }
          );
      }),
          (Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn),
          je("Elastic", Ie("in"), Ie("out"), Ie()),
          (b = 7.5625),
          (_ = 1 / (w = 2.75)),
          je(
              "Bounce",
              function (t) {
                  return 1 - x(1 - t);
              },
              (x = function (t) {
                  return t < _ ? b * t * t : t < 0.7272727272727273 ? b * Math.pow(t - 1.5 / w, 2) + 0.75 : t < 0.9090909090909092 ? b * (t -= 2.25 / w) * t + 0.9375 : b * Math.pow(t - 2.625 / w, 2) + 0.984375;
              })
          ),
          je("Expo", function (t) {
              return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          je("Circ", function (t) {
              return -(O(1 - t * t) - 1);
          }),
          je("Sine", function (t) {
              return 1 === t ? 1 : 1 - S(t * F);
          }),
          je("Back", He("in"), He("out"), He()),
          (Oe.SteppedEase = Oe.steps = Q.SteppedEase = {
              config: function (t, e) {
                  void 0 === t && (t = 1);
                  var i = 1 / t,
                      n = t + (e ? 0 : 1),
                      r = e ? 1 : 0,
                      o = 1 - k;
                  return function (t) {
                      return (((n * ee(0, o, t)) | 0) + r) * i;
                  };
              },
          }),
          (E.ease = Oe["quad.out"]),
          Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
              return (pt += t + "," + t + "Params,");
          });
      var We = function (t, e) {
              (this.id = A++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : vt), (this.set = e ? e.getSetter : oi);
          },
          Ne = (function () {
              function t(t) {
                  (this.vars = t),
                      (this._delay = +t.delay || 0),
                      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                      (this._ts = 1),
                      Kt(this, +t.duration, 1, 1),
                      (this.data = t.data),
                      h && ((this._ctx = h), h.data.push(this)),
                      y || Fe.wake();
              }
              var e = t.prototype;
              return (
                  (e.delay = function (t) {
                      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                  }),
                  (e.duration = function (t) {
                      return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                  }),
                  (e.totalDuration = function (t) {
                      return arguments.length ? ((this._dirty = 0), Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                  }),
                  (e.totalTime = function (t, e) {
                      if ((Ae(), !arguments.length)) return this._tTime;
                      var i = this._dp;
                      if (i && i.smoothChildTiming && this._ts) {
                          for (Nt(this, t), !i._dp || i.parent || Yt(i, this); i && i.parent; )
                              i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), (i = i.parent);
                          !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && qt(this._dp, this, this._start - this._delay);
                      }
                      return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === k) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), Ct(this, t, e)), this;
                  }),
                  (e.time = function (t, e) {
                      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                  }),
                  (e.totalProgress = function (t, e) {
                      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                  }),
                  (e.progress = function (t, e) {
                      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                  }),
                  (e.iteration = function (t, e) {
                      var i = this.duration() + this._rDelay;
                      return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? It(this._tTime, i) + 1 : 1;
                  }),
                  (e.timeScale = function (t, e) {
                      if (!arguments.length) return this._rts === -k ? 0 : this._rts;
                      if (this._rts === t) return this;
                      var i = this.parent && this._ts ? Ht(this.parent._time, this) : this._tTime;
                      return (this._rts = +t || 0), (this._ts = this._ps || t === -k ? 0 : this._rts), this.totalTime(ee(-Math.abs(this._delay), this._tDur, i), !1 !== e), Wt(this), Rt(this);
                  }),
                  (e.paused = function (t) {
                      return arguments.length
                          ? (this._ps !== t &&
                                ((this._ps = t),
                                t
                                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                    : (Ae(),
                                      (this._ts = this._rts),
                                      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))),
                            this)
                          : this._ps;
                  }),
                  (e.startTime = function (t) {
                      if (arguments.length) {
                          this._start = t;
                          var e = this.parent || this._dp;
                          return e && (e._sort || !this.parent) && qt(e, this, t - this._delay), this;
                      }
                      return this._start;
                  }),
                  (e.endTime = function (t) {
                      return this._start + (z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                  }),
                  (e.rawTime = function (t) {
                      var e = this.parent || this._dp;
                      return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ht(e.rawTime(t), this) : this._tTime) : this._tTime;
                  }),
                  (e.revert = function (t) {
                      void 0 === t && (t = st);
                      var e = c;
                      return (c = t), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), (c = e), this;
                  }),
                  (e.globalTime = function (t) {
                      for (var e = this, i = arguments.length ? t : e.rawTime(); e; ) (i = e._start + i / (Math.abs(e._ts) || 1)), (e = e._dp);
                      return !this.parent && this._sat ? this._sat.globalTime(t) : i;
                  }),
                  (e.repeat = function (t) {
                      return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                  }),
                  (e.repeatDelay = function (t) {
                      if (arguments.length) {
                          var e = this._time;
                          return (this._rDelay = t), Gt(this), e ? this.time(e) : this;
                      }
                      return this._rDelay;
                  }),
                  (e.yoyo = function (t) {
                      return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                  }),
                  (e.seek = function (t, e) {
                      return this.totalTime(Zt(this, t), z(e));
                  }),
                  (e.restart = function (t, e) {
                      return this.play().totalTime(t ? -this._delay : 0, z(e));
                  }),
                  (e.play = function (t, e) {
                      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                  }),
                  (e.reverse = function (t, e) {
                      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                  }),
                  (e.pause = function (t, e) {
                      return null != t && this.seek(t, e), this.paused(!0);
                  }),
                  (e.resume = function () {
                      return this.paused(!1);
                  }),
                  (e.reversed = function (t) {
                      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -k : 0)), this) : this._rts < 0;
                  }),
                  (e.invalidate = function () {
                      return (this._initted = this._act = 0), (this._zTime = -k), this;
                  }),
                  (e.isActive = function () {
                      var t,
                          e = this.parent || this._dp,
                          i = this._start;
                      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - k));
                  }),
                  (e.eventCallback = function (t, e, i) {
                      var n = this.vars;
                      return arguments.length > 1 ? (e ? ((n[t] = e), i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
                  }),
                  (e.then = function (t) {
                      var e = this;
                      return new Promise(function (i) {
                          var n = M(t) ? t : kt,
                              r = function () {
                                  var t = e.then;
                                  (e.then = null), M(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), (e.then = t);
                              };
                          (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? r() : (e._prom = r);
                      });
                  }),
                  (e.kill = function () {
                      De(this);
                  }),
                  t
              );
          })();
      Tt(Ne.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -k, _prom: 0, _ps: !1, _rts: 1 });
      var Ye = (function (t) {
          function e(e, i) {
              var n;
              return (
                  void 0 === e && (e = {}),
                  ((n = t.call(this, e) || this).labels = {}),
                  (n.smoothChildTiming = !!e.smoothChildTiming),
                  (n.autoRemoveChildren = !!e.autoRemoveChildren),
                  (n._sort = z(e.sortChildren)),
                  f && qt(e.parent || f, a(n), i),
                  e.reversed && n.reverse(),
                  e.paused && n.paused(!0),
                  e.scrollTrigger && Xt(a(n), e.scrollTrigger),
                  n
              );
          }
          l(e, t);
          var i = e.prototype;
          return (
              (i.to = function (t, e, i) {
                  return Jt(0, arguments, this), this;
              }),
              (i.from = function (t, e, i) {
                  return Jt(1, arguments, this), this;
              }),
              (i.fromTo = function (t, e, i, n) {
                  return Jt(2, arguments, this), this;
              }),
              (i.set = function (t, e, i) {
                  return (e.duration = 0), (e.parent = this), Ot(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new ti(t, e, Zt(this, i), 1), this;
              }),
              (i.call = function (t, e, i) {
                  return qt(this, ti.delayedCall(0, t, e), i);
              }),
              (i.staggerTo = function (t, e, i, n, r, o, s) {
                  return (i.duration = e), (i.stagger = i.stagger || n), (i.onComplete = o), (i.onCompleteParams = s), (i.parent = this), new ti(t, i, Zt(this, r)), this;
              }),
              (i.staggerFrom = function (t, e, i, n, r, o, s) {
                  return (i.runBackwards = 1), (Ot(i).immediateRender = z(i.immediateRender)), this.staggerTo(t, e, i, n, r, o, s);
              }),
              (i.staggerFromTo = function (t, e, i, n, r, o, s, a) {
                  return (n.startAt = i), (Ot(n).immediateRender = z(n.immediateRender)), this.staggerTo(t, e, n, r, o, s, a);
              }),
              (i.render = function (t, e, i) {
                  var n,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u,
                      h,
                      d,
                      p,
                      m,
                      g,
                      v = this._time,
                      D = this._dirty ? this.totalDuration() : this._tDur,
                      y = this._dur,
                      b = t <= 0 ? 0 : bt(t),
                      w = this._zTime < 0 != t < 0 && (this._initted || !y);
                  if ((this !== f && b > D && t >= 0 && (b = D), b !== this._tTime || i || w)) {
                      if ((v !== this._time && y && ((b += this._time - v), (t += this._time - v)), (n = b), (d = this._start), (l = !(h = this._ts)), w && (y || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                          if (((m = this._yoyo), (a = y + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, i);
                          if (
                              ((n = bt(b % a)),
                              b === D ? ((s = this._repeat), (n = y)) : ((s = ~~(b / a)) && s === b / a && ((n = y), s--), n > y && (n = y)),
                              (p = It(this._tTime, a)),
                              !v && this._tTime && p !== s && this._tTime - p * a - this._dur <= 0 && (p = s),
                              m && 1 & s && ((n = y - n), (g = 1)),
                              s !== p && !this._lock)
                          ) {
                              var _ = m && 1 & p,
                                  x = _ === (m && 1 & s);
                              if (
                                  (s < p && (_ = !_),
                                  (v = _ ? 0 : b % y ? y : b),
                                  (this._lock = 1),
                                  (this.render(v || (g ? 0 : bt(s * a)), e, !y)._lock = 0),
                                  (this._tTime = b),
                                  !e && this.parent && ve(this, "onRepeat"),
                                  this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                                  (v && v !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                              )
                                  return this;
                              if (((y = this._dur), (D = this._tDur), x && ((this._lock = 2), (v = _ ? y : -1e-4), this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !l)) return this;
                              Re(this, g);
                          }
                      }
                      if (
                          (this._hasPause &&
                              !this._forcing &&
                              this._lock < 2 &&
                              (u = (function (t, e, i) {
                                  var n;
                                  if (i > e)
                                      for (n = t._first; n && n._start <= i; ) {
                                          if ("isPause" === n.data && n._start > e) return n;
                                          n = n._next;
                                      }
                                  else
                                      for (n = t._last; n && n._start >= i; ) {
                                          if ("isPause" === n.data && n._start < e) return n;
                                          n = n._prev;
                                      }
                              })(this, bt(v), bt(n))) &&
                              (b -= n - (n = u._start)),
                          (this._tTime = b),
                          (this._time = n),
                          (this._act = !h),
                          this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (v = 0)),
                          !v && n && !e && !s && (ve(this, "onStart"), this._tTime !== b))
                      )
                          return this;
                      if (n >= v && t >= 0)
                          for (r = this._first; r; ) {
                              if (((o = r._next), (r._act || n >= r._start) && r._ts && u !== r)) {
                                  if (r.parent !== this) return this.render(t, e, i);
                                  if ((r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || (!this._ts && !l))) {
                                      (u = 0), o && (b += this._zTime = -k);
                                      break;
                                  }
                              }
                              r = o;
                          }
                      else {
                          r = this._last;
                          for (var C = t < 0 ? t : n; r; ) {
                              if (((o = r._prev), (r._act || C <= r._end) && r._ts && u !== r)) {
                                  if (r.parent !== this) return this.render(t, e, i);
                                  if ((r.render(r._ts > 0 ? (C - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (C - r._start) * r._ts, e, i || (c && (r._initted || r._startAt))), n !== this._time || (!this._ts && !l))) {
                                      (u = 0), o && (b += this._zTime = C ? -k : k);
                                      break;
                                  }
                              }
                              r = o;
                          }
                      }
                      if (u && !e && (this.pause(), (u.render(n >= v ? 0 : -k)._zTime = n >= v ? 1 : -1), this._ts)) return (this._start = d), Wt(this), this.render(t, e, i);
                      this._onUpdate && !e && ve(this, "onUpdate", !0),
                          ((b === D && this._tTime >= this.totalDuration()) || (!b && v)) &&
                              ((d !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                                  this._lock ||
                                  ((t || !y) && ((b === D && this._ts > 0) || (!b && this._ts < 0)) && Bt(this, 1),
                                  e || (t < 0 && !v) || (!b && !v && D) || (ve(this, b === D && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < D && this.timeScale() > 0) && this._prom())));
                  }
                  return this;
              }),
              (i.add = function (t, e) {
                  var i = this;
                  if ((R(e) || (e = Zt(this, e, t)), !(t instanceof Ne))) {
                      if (N(t))
                          return (
                              t.forEach(function (t) {
                                  return i.add(t, e);
                              }),
                              this
                          );
                      if (B(t)) return this.addLabel(t, e);
                      if (!M(t)) return this;
                      t = ti.delayedCall(0, t);
                  }
                  return this !== t ? qt(this, t, e) : this;
              }),
              (i.getChildren = function (t, e, i, n) {
                  void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8);
                  for (var r = [], o = this._first; o; ) o._start >= n && (o instanceof ti ? e && r.push(o) : (i && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, i)))), (o = o._next);
                  return r;
              }),
              (i.getById = function (t) {
                  for (var e = this.getChildren(1, 1, 1), i = e.length; i--; ) if (e[i].vars.id === t) return e[i];
              }),
              (i.remove = function (t) {
                  return B(t) ? this.removeLabel(t) : M(t) ? this.killTweensOf(t) : (Pt(this, t), t === this._recent && (this._recent = this._last), Mt(this));
              }),
              (i.totalTime = function (e, i) {
                  return arguments.length
                      ? ((this._forcing = 1),
                        !this._dp && this._ts && (this._start = bt(Fe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                        t.prototype.totalTime.call(this, e, i),
                        (this._forcing = 0),
                        this)
                      : this._tTime;
              }),
              (i.addLabel = function (t, e) {
                  return (this.labels[t] = Zt(this, e)), this;
              }),
              (i.removeLabel = function (t) {
                  return delete this.labels[t], this;
              }),
              (i.addPause = function (t, e, i) {
                  var n = ti.delayedCall(0, e || nt, i);
                  return (n.data = "isPause"), (this._hasPause = 1), qt(this, n, Zt(this, t));
              }),
              (i.removePause = function (t) {
                  var e = this._first;
                  for (t = Zt(this, t); e; ) e._start === t && "isPause" === e.data && Bt(e), (e = e._next);
              }),
              (i.killTweensOf = function (t, e, i) {
                  for (var n = this.getTweensOf(t, i), r = n.length; r--; ) qe !== n[r] && n[r].kill(t, e);
                  return this;
              }),
              (i.getTweensOf = function (t, e) {
                  for (var i, n = [], r = se(t), o = this._first, s = R(e); o; )
                      o instanceof ti
                          ? _t(o._targets, r) && (s ? (!qe || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o)
                          : (i = o.getTweensOf(r, e)).length && n.push.apply(n, i),
                          (o = o._next);
                  return n;
              }),
              (i.tweenTo = function (t, e) {
                  e = e || {};
                  var i,
                      n = this,
                      r = Zt(n, t),
                      o = e,
                      s = o.startAt,
                      a = o.onStart,
                      l = o.onStartParams,
                      u = o.immediateRender,
                      c = ti.to(
                          n,
                          Tt(
                              {
                                  ease: e.ease || "none",
                                  lazy: !1,
                                  immediateRender: !1,
                                  time: r,
                                  overwrite: "auto",
                                  duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || k,
                                  onStart: function () {
                                      if ((n.pause(), !i)) {
                                          var t = e.duration || Math.abs((r - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                                          c._dur !== t && Kt(c, t, 0, 1).render(c._time, !0, !0), (i = 1);
                                      }
                                      a && a.apply(c, l || []);
                                  },
                              },
                              e
                          )
                      );
                  return u ? c.render(0) : c;
              }),
              (i.tweenFromTo = function (t, e, i) {
                  return this.tweenTo(e, Tt({ startAt: { time: Zt(this, t) } }, i));
              }),
              (i.recent = function () {
                  return this._recent;
              }),
              (i.nextLabel = function (t) {
                  return void 0 === t && (t = this._time), ge(this, Zt(this, t));
              }),
              (i.previousLabel = function (t) {
                  return void 0 === t && (t = this._time), ge(this, Zt(this, t), 1);
              }),
              (i.currentLabel = function (t) {
                  return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + k);
              }),
              (i.shiftChildren = function (t, e, i) {
                  void 0 === i && (i = 0);
                  for (var n, r = this._first, o = this.labels; r; ) r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
                  if (e) for (n in o) o[n] >= i && (o[n] += t);
                  return Mt(this);
              }),
              (i.invalidate = function (e) {
                  var i = this._first;
                  for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
                  return t.prototype.invalidate.call(this, e);
              }),
              (i.clear = function (t) {
                  void 0 === t && (t = !0);
                  for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
                  return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Mt(this);
              }),
              (i.totalDuration = function (t) {
                  var e,
                      i,
                      n,
                      r = 0,
                      o = this,
                      s = o._last,
                      a = 1e8;
                  if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                  if (o._dirty) {
                      for (n = o.parent; s; )
                          (e = s._prev),
                              s._dirty && s.totalDuration(),
                              (i = s._start) > a && o._sort && s._ts && !o._lock ? ((o._lock = 1), (qt(o, s, i - s._delay, 1)._lock = 0)) : (a = i),
                              i < 0 && s._ts && ((r -= i), ((!n && !o._dp) || (n && n.smoothChildTiming)) && ((o._start += i / o._ts), (o._time -= i), (o._tTime -= i)), o.shiftChildren(-i, !1, -Infinity), (a = 0)),
                              s._end > r && s._ts && (r = s._end),
                              (s = e);
                      Kt(o, o === f && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
                  }
                  return o._tDur;
              }),
              (e.updateRoot = function (t) {
                  if ((f._ts && (Ct(f, Ht(t, f)), (v = Fe.frame)), Fe.frame >= ft)) {
                      ft += C.autoSleep || 120;
                      var e = f._first;
                      if ((!e || !e._ts) && C.autoSleep && Fe._listeners.length < 2) {
                          for (; e && !e._ts; ) e = e._next;
                          e || Fe.sleep();
                      }
                  }
              }),
              e
          );
      })(Ne);
      Tt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var qe,
          Xe,
          Ve = function (t, e, i, n, r, o, s, a, l, u) {
              M(n) && (n = n(r || 0, t, o));
              var c,
                  h = t[e],
                  f = "get" !== i ? i : M(h) ? (l ? t[e.indexOf("set") || !M(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : h,
                  d = M(h) ? (l ? ni : ii) : ei;
              if ((B(n) && (~n.indexOf("random(") && (n = pe(n)), "=" === n.charAt(1) && ((c = wt(f, n) + (ie(f) || 0)) || 0 === c) && (n = c)), !u || f !== n || Xe))
                  return isNaN(f * n) || "" === n
                      ? (!h && !(e in t) && tt(e, n),
                        function (t, e, i, n, r, o, s) {
                            var a,
                                l,
                                u,
                                c,
                                h,
                                f,
                                d,
                                p,
                                m = new pi(this._pt, t, e, 0, 1, li, null, r),
                                g = 0,
                                v = 0;
                            for (m.b = i, m.e = n, i += "", (d = ~(n += "").indexOf("random(")) && (n = pe(n)), o && (o((p = [i, n]), t, e), (i = p[0]), (n = p[1])), l = i.match(V) || []; (a = V.exec(n)); )
                                (c = a[0]),
                                    (h = n.substring(g, a.index)),
                                    u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
                                    c !== l[v++] &&
                                        ((f = parseFloat(l[v - 1]) || 0),
                                        (m._pt = { _next: m._pt, p: h || 1 === v ? h : ",", s: f, c: "=" === c.charAt(1) ? wt(f, c) - f : parseFloat(c) - f, m: u && u < 4 ? Math.round : 0 }),
                                        (g = V.lastIndex));
                            return (m.c = g < n.length ? n.substring(g, n.length) : ""), (m.fp = s), (U.test(n) || d) && (m.e = 0), (this._pt = m), m;
                        }.call(this, t, e, f, n, d, a || C.stringFilter, l))
                      : ((c = new pi(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof h ? ai : si, 0, d)), l && (c.fp = l), s && c.modifier(s, this, t), (this._pt = c));
          },
          Ue = function (t, e, i, n, r, o) {
              var s, a, l, u;
              if (
                  ct[t] &&
                  !1 !==
                      (s = new ct[t]()).init(
                          r,
                          s.rawVars
                              ? e[t]
                              : (function (t, e, i, n, r) {
                                    if ((M(t) && (t = Qe(t, r, e, i, n)), !j(t) || (t.style && t.nodeType) || N(t) || W(t))) return B(t) ? Qe(t, r, e, i, n) : t;
                                    var o,
                                        s = {};
                                    for (o in t) s[o] = Qe(t[o], r, e, i, n);
                                    return s;
                                })(e[t], n, r, o, i),
                          i,
                          n,
                          o
                      ) &&
                  ((i._pt = a = new pi(i._pt, r, t, 0, 1, s.render, s, 0, s.priority)), i !== D)
              )
                  for (l = i._ptLookup[i._targets.indexOf(r)], u = s._props.length; u--; ) l[s._props[u]] = a;
              return s;
          },
          Ke = function t(e, i, n) {
              var r,
                  o,
                  s,
                  a,
                  l,
                  h,
                  d,
                  p,
                  m,
                  g,
                  v,
                  D,
                  y,
                  b = e.vars,
                  w = b.ease,
                  _ = b.startAt,
                  x = b.immediateRender,
                  C = b.lazy,
                  T = b.onUpdate,
                  $ = b.runBackwards,
                  F = b.yoyoEase,
                  A = b.keyframes,
                  O = b.autoRevert,
                  S = e._dur,
                  P = e._startAt,
                  B = e._targets,
                  M = e.parent,
                  R = M && "nested" === M.data ? M.vars.targets : B,
                  L = "auto" === e._overwrite && !u,
                  j = e.timeline;
              if (
                  (j && (!A || !w) && (w = "none"),
                  (e._ease = Le(w, E.ease)),
                  (e._yEase = F ? Me(Le(!0 === F ? w : F, E.ease)) : 0),
                  F && e._yoyo && !e._repeat && ((F = e._yEase), (e._yEase = e._ease), (e._ease = F)),
                  (e._from = !j && !!b.runBackwards),
                  !j || (A && !b.stagger))
              ) {
                  if (((D = (p = B[0] ? gt(B[0]).harness : 0) && b[p.prop]), (r = At(b, at)), P && (P._zTime < 0 && P.progress(1), i < 0 && $ && x && !O ? P.render(-1, !0) : P.revert($ && S ? ot : rt), (P._lazy = 0)), _)) {
                      if (
                          (Bt(
                              (e._startAt = ti.set(
                                  B,
                                  Tt(
                                      {
                                          data: "isStart",
                                          overwrite: !1,
                                          parent: M,
                                          immediateRender: !0,
                                          lazy: !P && z(C),
                                          startAt: null,
                                          delay: 0,
                                          onUpdate:
                                              T &&
                                              function () {
                                                  return ve(e, "onUpdate");
                                              },
                                          stagger: 0,
                                      },
                                      _
                                  )
                              ))
                          ),
                          (e._startAt._dp = 0),
                          (e._startAt._sat = e),
                          i < 0 && (c || (!x && !O)) && e._startAt.revert(ot),
                          x && S && i <= 0 && n <= 0)
                      )
                          return void (i && (e._zTime = i));
                  } else if ($ && S && !P)
                      if (
                          (i && (x = !1),
                          (s = Tt({ overwrite: !1, data: "isFromStart", lazy: x && !P && z(C), immediateRender: x, stagger: 0, parent: M }, r)),
                          D && (s[p.prop] = D),
                          Bt((e._startAt = ti.set(B, s))),
                          (e._startAt._dp = 0),
                          (e._startAt._sat = e),
                          i < 0 && (c ? e._startAt.revert(ot) : e._startAt.render(-1, !0)),
                          (e._zTime = i),
                          x)
                      ) {
                          if (!i) return;
                      } else t(e._startAt, k, k);
                  for (e._pt = e._ptCache = 0, C = (S && z(C)) || (C && !S), o = 0; o < B.length; o++) {
                      if (
                          ((d = (l = B[o])._gsap || mt(B)[o]._gsap),
                          (e._ptLookup[o] = g = {}),
                          ut[d.id] && lt.length && xt(),
                          (v = R === B ? o : R.indexOf(l)),
                          p &&
                              !1 !== (m = new p()).init(l, D || r, e, v, R) &&
                              ((e._pt = a = new pi(e._pt, l, m.name, 0, 1, m.render, m, 0, m.priority)),
                              m._props.forEach(function (t) {
                                  g[t] = a;
                              }),
                              m.priority && (h = 1)),
                          !p || D)
                      )
                          for (s in r) ct[s] && (m = Ue(s, r, e, v, l, R)) ? m.priority && (h = 1) : (g[s] = a = Ve.call(e, l, s, "get", r[s], v, R, 0, b.stringFilter));
                      e._op && e._op[o] && e.kill(l, e._op[o]), L && e._pt && ((qe = e), f.killTweensOf(l, g, e.globalTime(i)), (y = !e.parent), (qe = 0)), e._pt && C && (ut[d.id] = 1);
                  }
                  h && di(e), e._onInit && e._onInit(e);
              }
              (e._onUpdate = T), (e._initted = (!e._op || e._pt) && !y), A && i <= 0 && j.render(1e8, !0, !0);
          },
          Ge = function (t, e, i, n) {
              var r,
                  o,
                  s = e.ease || n || "power1.inOut";
              if (N(e))
                  (o = i[t] || (i[t] = [])),
                      e.forEach(function (t, i) {
                          return o.push({ t: (i / (e.length - 1)) * 100, v: t, e: s });
                      });
              else for (r in e) (o = i[r] || (i[r] = [])), "ease" === r || o.push({ t: parseFloat(t), v: e[r], e: s });
          },
          Qe = function (t, e, i, n, r) {
              return M(t) ? t.call(e, i, n, r) : B(t) && ~t.indexOf("random(") ? pe(t) : t;
          },
          Ze = pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          Je = {};
      Dt(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
          return (Je[t] = 1);
      });
      var ti = (function (t) {
          function e(e, i, n, r) {
              var o;
              "number" == typeof i && ((n.duration = i), (i = n), (n = null));
              var s,
                  l,
                  c,
                  h,
                  d,
                  p,
                  m,
                  g,
                  v = (o = t.call(this, r ? i : Ot(i)) || this).vars,
                  D = v.duration,
                  y = v.delay,
                  b = v.immediateRender,
                  w = v.stagger,
                  _ = v.overwrite,
                  x = v.keyframes,
                  E = v.defaults,
                  T = v.scrollTrigger,
                  $ = v.yoyoEase,
                  F = i.parent || f,
                  A = (N(e) || W(e) ? R(e[0]) : "length" in i) ? [e] : se(e);
              if (((o._targets = A.length ? mt(A) : et("GSAP target " + e + " not found. https://gsap.com", !C.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = _), x || w || H(D) || H(y))) {
                  if (((i = o.vars), (s = o.timeline = new Ye({ data: "nested", defaults: E || {}, targets: F && "nested" === F.data ? F.vars.targets : A })).kill(), (s.parent = s._dp = a(o)), (s._start = 0), w || H(D) || H(y))) {
                      if (((h = A.length), (m = w && ue(w)), j(w))) for (d in w) ~Ze.indexOf(d) && (g || (g = {}), (g[d] = w[d]));
                      for (l = 0; l < h; l++)
                          ((c = At(i, Je)).stagger = 0),
                              $ && (c.yoyoEase = $),
                              g && $t(c, g),
                              (p = A[l]),
                              (c.duration = +Qe(D, a(o), l, p, A)),
                              (c.delay = (+Qe(y, a(o), l, p, A) || 0) - o._delay),
                              !w && 1 === h && c.delay && ((o._delay = y = c.delay), (o._start += y), (c.delay = 0)),
                              s.to(p, c, m ? m(l, p, A) : 0),
                              (s._ease = Oe.none);
                      s.duration() ? (D = y = 0) : (o.timeline = 0);
                  } else if (x) {
                      Ot(Tt(s.vars.defaults, { ease: "none" })), (s._ease = Le(x.ease || i.ease || "none"));
                      var O,
                          S,
                          P,
                          B = 0;
                      if (N(x))
                          x.forEach(function (t) {
                              return s.to(A, t, ">");
                          }),
                              s.duration();
                      else {
                          for (d in ((c = {}), x)) "ease" === d || "easeEach" === d || Ge(d, x[d], c, x.easeEach);
                          for (d in c)
                              for (
                                  O = c[d].sort(function (t, e) {
                                      return t.t - e.t;
                                  }),
                                      B = 0,
                                      l = 0;
                                  l < O.length;
                                  l++
                              )
                                  ((P = { ease: (S = O[l]).e, duration: ((S.t - (l ? O[l - 1].t : 0)) / 100) * D })[d] = S.v), s.to(A, P, B), (B += P.duration);
                          s.duration() < D && s.to({}, { duration: D - s.duration() });
                      }
                  }
                  D || o.duration((D = s.duration()));
              } else o.timeline = 0;
              return (
                  !0 !== _ || u || ((qe = a(o)), f.killTweensOf(A), (qe = 0)),
                  qt(F, a(o), n),
                  i.reversed && o.reverse(),
                  i.paused && o.paused(!0),
                  (b || (!D && !x && o._start === bt(F._time) && z(b) && jt(a(o)) && "nested" !== F.data)) && ((o._tTime = -k), o.render(Math.max(0, -y) || 0)),
                  T && Xt(a(o), T),
                  o
              );
          }
          l(e, t);
          var i = e.prototype;
          return (
              (i.render = function (t, e, i) {
                  var n,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u,
                      h,
                      f,
                      d = this._time,
                      p = this._tDur,
                      m = this._dur,
                      g = t < 0,
                      v = t > p - k && !g ? p : t < k ? 0 : t;
                  if (m) {
                      if (v !== this._tTime || !t || i || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== g)) {
                          if (((n = v), (h = this.timeline), this._repeat)) {
                              if (((s = m + this._rDelay), this._repeat < -1 && g)) return this.totalTime(100 * s + t, e, i);
                              if (
                                  ((n = bt(v % s)),
                                  v === p ? ((o = this._repeat), (n = m)) : ((o = ~~(v / s)) && o === bt(v / s) && ((n = m), o--), n > m && (n = m)),
                                  (l = this._yoyo && 1 & o) && ((f = this._yEase), (n = m - n)),
                                  (a = It(this._tTime, s)),
                                  n === d && !i && this._initted && o === a)
                              )
                                  return (this._tTime = v), this;
                              o !== a && (h && this._yEase && Re(h, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== m && this._initted && ((this._lock = i = 1), (this.render(bt(s * o), !0).invalidate()._lock = 0)));
                          }
                          if (!this._initted) {
                              if (Vt(this, g ? t : n, i, e, v)) return (this._tTime = 0), this;
                              if (!(d === this._time || (i && this.vars.repeatRefresh && o !== a))) return this;
                              if (m !== this._dur) return this.render(t, e, i);
                          }
                          if (
                              ((this._tTime = v),
                              (this._time = n),
                              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                              (this.ratio = u = (f || this._ease)(n / m)),
                              this._from && (this.ratio = u = 1 - u),
                              n && !d && !e && !o && (ve(this, "onStart"), this._tTime !== v))
                          )
                              return this;
                          for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
                          (h && h.render(t < 0 ? t : !n && l ? -k : h._dur * h._ease(n / this._dur), e, i)) || (this._startAt && (this._zTime = t)),
                              this._onUpdate && !e && (g && Lt(this, t, 0, i), ve(this, "onUpdate")),
                              this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && ve(this, "onRepeat"),
                              (v !== this._tDur && v) ||
                                  this._tTime !== v ||
                                  (g && !this._onUpdate && Lt(this, t, 0, !0),
                                  (t || !m) && ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) && Bt(this, 1),
                                  e || (g && !d) || !(v || d || l) || (ve(this, v === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < p && this.timeScale() > 0) && this._prom()));
                      }
                  } else
                      !(function (t, e, i, n) {
                          var r,
                              o,
                              s,
                              a = t.ratio,
                              l =
                                  e < 0 ||
                                  (!e &&
                                      ((!t._start &&
                                          (function t(e) {
                                              var i = e.parent;
                                              return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
                                          })(t) &&
                                          (t._initted || !Ut(t))) ||
                                          ((t._ts < 0 || t._dp._ts < 0) && !Ut(t))))
                                      ? 0
                                      : 1,
                              u = t._rDelay,
                              h = 0;
                          if (
                              (u && t._repeat && ((h = ee(0, t._tDur, e)), (o = It(h, u)), t._yoyo && 1 & o && (l = 1 - l), o !== It(t._tTime, u) && ((a = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                              l !== a || c || n || t._zTime === k || (!e && t._zTime))
                          ) {
                              if (!t._initted && Vt(t, e, n, i, h)) return;
                              for (s = t._zTime, t._zTime = e || (i ? k : 0), i || (i = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = h, r = t._pt; r; ) r.r(l, r.d), (r = r._next);
                              e < 0 && Lt(t, e, 0, !0),
                                  t._onUpdate && !i && ve(t, "onUpdate"),
                                  h && t._repeat && !i && t.parent && ve(t, "onRepeat"),
                                  (e >= t._tDur || e < 0) && t.ratio === l && (l && Bt(t, 1), i || c || (ve(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                          } else t._zTime || (t._zTime = e);
                      })(this, t, e, i);
                  return this;
              }),
              (i.targets = function () {
                  return this._targets;
              }),
              (i.invalidate = function (e) {
                  return (
                      (!e || !this.vars.runBackwards) && (this._startAt = 0),
                      (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                      (this._ptLookup = []),
                      this.timeline && this.timeline.invalidate(e),
                      t.prototype.invalidate.call(this, e)
                  );
              }),
              (i.resetTo = function (t, e, i, n, r) {
                  y || Fe.wake(), this._ts || this.play();
                  var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                  return (
                      this._initted || Ke(this, o),
                      (function (t, e, i, n, r, o, s, a) {
                          var l,
                              u,
                              c,
                              h,
                              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                          if (!f)
                              for (f = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length; h--; ) {
                                  if ((l = c[h][e]) && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
                                  if (!l) return (Xe = 1), (t.vars[e] = "+=0"), Ke(t, s), (Xe = 0), a ? et(e + " not eligible for reset") : 1;
                                  f.push(l);
                              }
                          for (h = f.length; h--; ) ((l = (u = f[h])._pt || u).s = (!n && 0 !== n) || r ? l.s + (n || 0) + o * l.c : n), (l.c = i - l.s), u.e && (u.e = yt(i) + ie(u.e)), u.b && (u.b = l.s + ie(u.b));
                      })(this, t, e, i, n, this._ease(o / this._dur), o, r)
                          ? this.resetTo(t, e, i, n, 1)
                          : (Nt(this, 0), this.parent || St(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                  );
              }),
              (i.kill = function (t, e) {
                  if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? De(this) : this;
                  if (this.timeline) {
                      var i = this.timeline.totalDuration();
                      return this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)._first || De(this), this.parent && i !== this.timeline.totalDuration() && Kt(this, (this._dur * this.timeline._tDur) / i, 0, 1), this;
                  }
                  var n,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u,
                      c = this._targets,
                      h = t ? se(t) : c,
                      f = this._ptLookup,
                      d = this._pt;
                  if (
                      (!e || "all" === e) &&
                      (function (t, e) {
                          for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
                          return i < 0;
                      })(c, h)
                  )
                      return "all" === e && (this._pt = 0), De(this);
                  for (
                      n = this._op = this._op || [],
                          "all" !== e &&
                              (B(e) &&
                                  ((a = {}),
                                  Dt(e, function (t) {
                                      return (a[t] = 1);
                                  }),
                                  (e = a)),
                              (e = (function (t, e) {
                                  var i,
                                      n,
                                      r,
                                      o,
                                      s = t[0] ? gt(t[0]).harness : 0,
                                      a = s && s.aliases;
                                  if (!a) return e;
                                  for (n in ((i = $t({}, e)), a)) if ((n in i)) for (r = (o = a[n].split(",")).length; r--; ) i[o[r]] = i[n];
                                  return i;
                              })(c, e))),
                          u = c.length;
                      u--;

                  )
                      if (~h.indexOf(c[u]))
                          for (a in ((r = f[u]), "all" === e ? ((n[u] = e), (s = r), (o = {})) : ((o = n[u] = n[u] || {}), (s = e)), s))
                              (l = r && r[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || Pt(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                  return this._initted && !this._pt && d && De(this), this;
              }),
              (e.to = function (t, i) {
                  return new e(t, i, arguments[2]);
              }),
              (e.from = function (t, e) {
                  return Jt(1, arguments);
              }),
              (e.delayedCall = function (t, i, n, r) {
                  return new e(i, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: i, onReverseComplete: i, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: r });
              }),
              (e.fromTo = function (t, e, i) {
                  return Jt(2, arguments);
              }),
              (e.set = function (t, i) {
                  return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
              }),
              (e.killTweensOf = function (t, e, i) {
                  return f.killTweensOf(t, e, i);
              }),
              e
          );
      })(Ne);
      Tt(ti.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
          Dt("staggerTo,staggerFrom,staggerFromTo", function (t) {
              ti[t] = function () {
                  var e = new Ye(),
                      i = ne.call(arguments, 0);
                  return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
              };
          });
      var ei = function (t, e, i) {
              return (t[e] = i);
          },
          ii = function (t, e, i) {
              return t[e](i);
          },
          ni = function (t, e, i, n) {
              return t[e](n.fp, i);
          },
          ri = function (t, e, i) {
              return t.setAttribute(e, i);
          },
          oi = function (t, e) {
              return M(t[e]) ? ii : L(t[e]) && t.setAttribute ? ri : ei;
          },
          si = function (t, e) {
              return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          ai = function (t, e) {
              return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          li = function (t, e) {
              var i = e._pt,
                  n = "";
              if (!t && e.b) n = e.b;
              else if (1 === t && e.e) n = e.e;
              else {
                  for (; i; ) (n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n), (i = i._next);
                  n += e.c;
              }
              e.set(e.t, e.p, n, e);
          },
          ui = function (t, e) {
              for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          },
          ci = function (t, e, i, n) {
              for (var r, o = this._pt; o; ) (r = o._next), o.p === n && o.modifier(t, e, i), (o = r);
          },
          hi = function (t) {
              for (var e, i, n = this._pt; n; ) (i = n._next), (n.p === t && !n.op) || n.op === t ? Pt(this, n, "_pt") : n.dep || (e = 1), (n = i);
              return !e;
          },
          fi = function (t, e, i, n) {
              n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
          },
          di = function (t) {
              for (var e, i, n, r, o = t._pt; o; ) {
                  for (e = o._next, i = n; i && i.pr > o.pr; ) i = i._next;
                  (o._prev = i ? i._prev : r) ? (o._prev._next = o) : (n = o), (o._next = i) ? (i._prev = o) : (r = o), (o = e);
              }
              t._pt = n;
          },
          pi = (function () {
              function t(t, e, i, n, r, o, s, a, l) {
                  (this.t = e), (this.s = n), (this.c = r), (this.p = i), (this.r = o || si), (this.d = s || this), (this.set = a || ei), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
              }
              return (
                  (t.prototype.modifier = function (t, e, i) {
                      (this.mSet = this.mSet || this.set), (this.set = fi), (this.m = t), (this.mt = i), (this.tween = e);
                  }),
                  t
              );
          })();
      Dt(
          pt +
              "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
              return (at[t] = 1);
          }
      ),
          (Q.TweenMax = Q.TweenLite = ti),
          (Q.TimelineLite = Q.TimelineMax = Ye),
          (f = new Ye({ sortChildren: !1, defaults: E, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
          (C.stringFilter = $e);
      var mi = [],
          gi = {},
          vi = [],
          Di = 0,
          yi = 0,
          bi = function (t) {
              return (gi[t] || vi).map(function (t) {
                  return t();
              });
          },
          wi = function () {
              var t = Date.now(),
                  e = [];
              t - Di > 2 &&
                  (bi("matchMediaInit"),
                  mi.forEach(function (t) {
                      var i,
                          n,
                          r,
                          o,
                          s = t.queries,
                          a = t.conditions;
                      for (n in s) (i = d.matchMedia(s[n]).matches) && (r = 1), i !== a[n] && ((a[n] = i), (o = 1));
                      o && (t.revert(), r && e.push(t));
                  }),
                  bi("matchMediaRevert"),
                  e.forEach(function (t) {
                      return t.onMatch(t, function (e) {
                          return t.add(null, e);
                      });
                  }),
                  (Di = t),
                  bi("matchMedia"));
          },
          _i = (function () {
              function t(t, e) {
                  (this.selector = e && ae(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = yi++), t && this.add(t);
              }
              var e = t.prototype;
              return (
                  (e.add = function (t, e, i) {
                      M(t) && ((i = e), (e = t), (t = M));
                      var n = this,
                          r = function () {
                              var t,
                                  r = h,
                                  o = n.selector;
                              return r && r !== n && r.data.push(n), i && (n.selector = ae(i)), (h = n), (t = e.apply(n, arguments)), M(t) && n._r.push(t), (h = r), (n.selector = o), (n.isReverted = !1), t;
                          };
                      return (
                          (n.last = r),
                          t === M
                              ? r(n, function (t) {
                                    return n.add(null, t);
                                })
                              : t
                              ? (n[t] = r)
                              : r
                      );
                  }),
                  (e.ignore = function (t) {
                      var e = h;
                      (h = null), t(this), (h = e);
                  }),
                  (e.getTweens = function () {
                      var e = [];
                      return (
                          this.data.forEach(function (i) {
                              return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof ti && !(i.parent && "nested" === i.parent.data) && e.push(i);
                          }),
                          e
                      );
                  }),
                  (e.clear = function () {
                      this._r.length = this.data.length = 0;
                  }),
                  (e.kill = function (t, e) {
                      var i = this;
                      if (
                          (t
                              ? (function () {
                                    for (var e, n = i.getTweens(), r = i.data.length; r--; )
                                        "isFlip" === (e = i.data[r]).data &&
                                            (e.revert(),
                                            e.getChildren(!0, !0, !1).forEach(function (t) {
                                                return n.splice(n.indexOf(t), 1);
                                            }));
                                    for (
                                        n
                                            .map(function (t) {
                                                return { g: t._dur || t._delay || (t._sat && !t._sat.vars.immediateRender) ? t.globalTime(0) : -1 / 0, t: t };
                                            })
                                            .sort(function (t, e) {
                                                return e.g - t.g || -1 / 0;
                                            })
                                            .forEach(function (e) {
                                                return e.t.revert(t);
                                            }),
                                            r = i.data.length;
                                        r--;

                                    )
                                        (e = i.data[r]) instanceof Ye ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof ti) && e.revert && e.revert(t);
                                    i._r.forEach(function (e) {
                                        return e(t, i);
                                    }),
                                        (i.isReverted = !0);
                                })()
                              : this.data.forEach(function (t) {
                                    return t.kill && t.kill();
                                }),
                          this.clear(),
                          e)
                      )
                          for (var n = mi.length; n--; ) mi[n].id === this.id && mi.splice(n, 1);
                  }),
                  (e.revert = function (t) {
                      this.kill(t || {});
                  }),
                  t
              );
          })(),
          xi = (function () {
              function t(t) {
                  (this.contexts = []), (this.scope = t);
              }
              var e = t.prototype;
              return (
                  (e.add = function (t, e, i) {
                      j(t) || (t = { matches: t });
                      var n,
                          r,
                          o,
                          s = new _i(0, i || this.scope),
                          a = (s.conditions = {});
                      for (r in (h && !s.selector && (s.selector = h.selector), this.contexts.push(s), (e = s.add("onMatch", e)), (s.queries = t), t))
                          "all" === r ? (o = 1) : (n = d.matchMedia(t[r])) && (mi.indexOf(s) < 0 && mi.push(s), (a[r] = n.matches) && (o = 1), n.addListener ? n.addListener(wi) : n.addEventListener("change", wi));
                      return (
                          o &&
                              e(s, function (t) {
                                  return s.add(null, t);
                              }),
                          this
                      );
                  }),
                  (e.revert = function (t) {
                      this.kill(t || {});
                  }),
                  (e.kill = function (t) {
                      this.contexts.forEach(function (e) {
                          return e.kill(t, !0);
                      });
                  }),
                  t
              );
          })(),
          Ci = {
              registerPlugin: function () {
                  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                  e.forEach(function (t) {
                      return be(t);
                  });
              },
              timeline: function (t) {
                  return new Ye(t);
              },
              getTweensOf: function (t, e) {
                  return f.getTweensOf(t, e);
              },
              getProperty: function (t, e, i, n) {
                  B(t) && (t = se(t)[0]);
                  var r = gt(t || {}).get,
                      o = i ? kt : Et;
                  return (
                      "native" === i && (i = ""),
                      t
                          ? e
                              ? o(((ct[e] && ct[e].get) || r)(t, e, i, n))
                              : function (e, i, n) {
                                    return o(((ct[e] && ct[e].get) || r)(t, e, i, n));
                                }
                          : t
                  );
              },
              quickSetter: function (t, e, i) {
                  if ((t = se(t)).length > 1) {
                      var n = t.map(function (t) {
                              return Ti.quickSetter(t, e, i);
                          }),
                          r = n.length;
                      return function (t) {
                          for (var e = r; e--; ) n[e](t);
                      };
                  }
                  t = t[0] || {};
                  var o = ct[e],
                      s = gt(t),
                      a = (s.harness && (s.harness.aliases || {})[e]) || e,
                      l = o
                          ? function (e) {
                                var n = new o();
                                (D._pt = 0), n.init(t, i ? e + i : e, D, 0, [t]), n.render(1, n), D._pt && ui(1, D);
                            }
                          : s.set(t, a);
                  return o
                      ? l
                      : function (e) {
                            return l(t, a, i ? e + i : e, s, 1);
                        };
              },
              quickTo: function (t, e, i) {
                  var n,
                      r = Ti.to(t, $t((((n = {})[e] = "+=0.1"), (n.paused = !0), n), i || {})),
                      o = function (t, i, n) {
                          return r.resetTo(e, t, i, n);
                      };
                  return (o.tween = r), o;
              },
              isTweening: function (t) {
                  return f.getTweensOf(t, !0).length > 0;
              },
              defaults: function (t) {
                  return t && t.ease && (t.ease = Le(t.ease, E.ease)), Ft(E, t || {});
              },
              config: function (t) {
                  return Ft(C, t || {});
              },
              registerEffect: function (t) {
                  var e = t.name,
                      i = t.effect,
                      n = t.plugins,
                      r = t.defaults,
                      o = t.extendTimeline;
                  (n || "").split(",").forEach(function (t) {
                      return t && !ct[t] && !Q[t] && et(e + " effect requires " + t + " plugin.");
                  }),
                      (ht[e] = function (t, e, n) {
                          return i(se(t), Tt(e || {}, r), n);
                      }),
                      o &&
                          (Ye.prototype[e] = function (t, i, n) {
                              return this.add(ht[e](t, j(i) ? i : (n = i) && {}, this), n);
                          });
              },
              registerEase: function (t, e) {
                  Oe[t] = Le(e);
              },
              parseEase: function (t, e) {
                  return arguments.length ? Le(t, e) : Oe;
              },
              getById: function (t) {
                  return f.getById(t);
              },
              exportRoot: function (t, e) {
                  void 0 === t && (t = {});
                  var i,
                      n,
                      r = new Ye(t);
                  for (r.smoothChildTiming = z(t.smoothChildTiming), f.remove(r), r._dp = 0, r._time = r._tTime = f._time, i = f._first; i; )
                      (n = i._next), (!e && !i._dur && i instanceof ti && i.vars.onComplete === i._targets[0]) || qt(r, i, i._start - i._delay), (i = n);
                  return qt(f, r, 0), r;
              },
              context: function (t, e) {
                  return t ? new _i(t, e) : h;
              },
              matchMedia: function (t) {
                  return new xi(t);
              },
              matchMediaRefresh: function () {
                  return (
                      mi.forEach(function (t) {
                          var e,
                              i,
                              n = t.conditions;
                          for (i in n) n[i] && ((n[i] = !1), (e = 1));
                          e && t.revert();
                      }) || wi()
                  );
              },
              addEventListener: function (t, e) {
                  var i = gi[t] || (gi[t] = []);
                  ~i.indexOf(e) || i.push(e);
              },
              removeEventListener: function (t, e) {
                  var i = gi[t],
                      n = i && i.indexOf(e);
                  n >= 0 && i.splice(n, 1);
              },
              utils: {
                  wrap: function t(e, i, n) {
                      var r = i - e;
                      return N(e)
                          ? de(e, t(0, e.length), i)
                          : te(n, function (t) {
                                return ((r + ((t - e) % r)) % r) + e;
                            });
                  },
                  wrapYoyo: function t(e, i, n) {
                      var r = i - e,
                          o = 2 * r;
                      return N(e)
                          ? de(e, t(0, e.length - 1), i)
                          : te(n, function (t) {
                                return e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t);
                            });
                  },
                  distribute: ue,
                  random: fe,
                  snap: he,
                  normalize: function (t, e, i) {
                      return me(t, e, 0, 1, i);
                  },
                  getUnit: ie,
                  clamp: function (t, e, i) {
                      return te(i, function (i) {
                          return ee(t, e, i);
                      });
                  },
                  splitColor: xe,
                  toArray: se,
                  selector: ae,
                  mapRange: me,
                  pipe: function () {
                      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                      return function (t) {
                          return e.reduce(function (t, e) {
                              return e(t);
                          }, t);
                      };
                  },
                  unitize: function (t, e) {
                      return function (i) {
                          return t(parseFloat(i)) + (e || ie(i));
                      };
                  },
                  interpolate: function t(e, i, n, r) {
                      var o = isNaN(e + i)
                          ? 0
                          : function (t) {
                                return (1 - t) * e + t * i;
                            };
                      if (!o) {
                          var s,
                              a,
                              l,
                              u,
                              c,
                              h = B(e),
                              f = {};
                          if ((!0 === n && (r = 1) && (n = null), h)) (e = { p: e }), (i = { p: i });
                          else if (N(e) && !N(i)) {
                              for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                              u--,
                                  (o = function (t) {
                                      t *= u;
                                      var e = Math.min(c, ~~t);
                                      return l[e](t - e);
                                  }),
                                  (n = i);
                          } else r || (e = $t(N(e) ? [] : {}, e));
                          if (!l) {
                              for (s in i) Ve.call(f, e, s, "get", i[s]);
                              o = function (t) {
                                  return ui(t, f) || (h ? e.p : e);
                              };
                          }
                      }
                      return te(n, o);
                  },
                  shuffle: le,
              },
              install: J,
              effects: ht,
              ticker: Fe,
              updateRoot: Ye.updateRoot,
              plugins: ct,
              globalTimeline: f,
              core: {
                  PropTween: pi,
                  globals: it,
                  Tween: ti,
                  Timeline: Ye,
                  Animation: Ne,
                  getCache: gt,
                  _removeLinkedListItem: Pt,
                  reverting: function () {
                      return c;
                  },
                  context: function (t) {
                      return t && h && (h.data.push(t), (t._ctx = h)), h;
                  },
                  suppressOverwrites: function (t) {
                      return (u = t);
                  },
              },
          };
      Dt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (Ci[t] = ti[t]);
      }),
          Fe.add(Ye.updateRoot),
          (D = Ci.to({}, { duration: 0 }));
      var Ei = function (t, e) {
              for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
              return i;
          },
          ki = function (t, e) {
              return {
                  name: t,
                  rawVars: 1,
                  init: function (t, i, n) {
                      n._onInit = function (t) {
                          var n, r;
                          if (
                              (B(i) &&
                                  ((n = {}),
                                  Dt(i, function (t) {
                                      return (n[t] = 1);
                                  }),
                                  (i = n)),
                              e)
                          ) {
                              for (r in ((n = {}), i)) n[r] = e(i[r]);
                              i = n;
                          }
                          !(function (t, e) {
                              var i,
                                  n,
                                  r,
                                  o = t._targets;
                              for (i in e) for (n = o.length; n--; ) (r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Ei(r, i)), r && r.modifier && r.modifier(e[i], t, o[n], i));
                          })(t, i);
                      };
                  },
              };
          },
          Ti =
              Ci.registerPlugin(
                  {
                      name: "attr",
                      init: function (t, e, i, n, r) {
                          var o, s, a;
                          for (o in ((this.tween = i), e)) (a = t.getAttribute(o) || ""), ((s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, r, 0, 0, o)).op = o), (s.b = a), this._props.push(o);
                      },
                      render: function (t, e) {
                          for (var i = e._pt; i; ) c ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
                      },
                  },
                  {
                      name: "endArray",
                      init: function (t, e) {
                          for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                      },
                  },
                  ki("roundProps", ce),
                  ki("modifiers"),
                  ki("snap", he)
              ) || Ci;
      (ti.version = Ye.version = Ti.version = "3.12.3"), (g = 1), I() && Ae();
      Oe.Power0, Oe.Power1, Oe.Power2, Oe.Power3, Oe.Power4, Oe.Linear, Oe.Quad, Oe.Cubic, Oe.Quart, Oe.Quint, Oe.Strong, Oe.Elastic, Oe.Back, Oe.SteppedEase, Oe.Bounce, Oe.Sine, Oe.Expo, Oe.Circ;
      /*!
       * CSSPlugin 3.12.3
       * https://gsap.com
       *
       * Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var $i,
          Fi,
          Ai,
          Oi,
          Si,
          Pi,
          Bi,
          Mi,
          Ri = {},
          Li = 180 / Math.PI,
          ji = Math.PI / 180,
          zi = Math.atan2,
          Ii = /([A-Z])/g,
          Hi = /(left|right|width|margin|padding|x)/i,
          Wi = /[\s,\(]\S/,
          Ni = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
          Yi = function (t, e) {
              return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
          },
          qi = function (t, e) {
              return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
          },
          Xi = function (t, e) {
              return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
          },
          Vi = function (t, e) {
              var i = e.s + e.c * t;
              e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          Ui = function (t, e) {
              return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          Ki = function (t, e) {
              return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          Gi = function (t, e, i) {
              return (t.style[e] = i);
          },
          Qi = function (t, e, i) {
              return t.style.setProperty(e, i);
          },
          Zi = function (t, e, i) {
              return (t._gsap[e] = i);
          },
          Ji = function (t, e, i) {
              return (t._gsap.scaleX = t._gsap.scaleY = i);
          },
          tn = function (t, e, i, n, r) {
              var o = t._gsap;
              (o.scaleX = o.scaleY = i), o.renderTransform(r, o);
          },
          en = function (t, e, i, n, r) {
              var o = t._gsap;
              (o[e] = i), o.renderTransform(r, o);
          },
          nn = "transform",
          rn = nn + "Origin",
          on = function t(e, i) {
              var n = this,
                  r = this.target,
                  o = r.style,
                  s = r._gsap;
              if (e in Ri && o) {
                  if (((this.tfm = this.tfm || {}), "transform" === e))
                      return Ni.transform.split(",").forEach(function (e) {
                          return t.call(n, e, i);
                      });
                  if (
                      (~(e = Ni[e] || e).indexOf(",")
                          ? e.split(",").forEach(function (t) {
                                return (n.tfm[t] = xn(r, t));
                            })
                          : (this.tfm[e] = s.x ? s[e] : xn(r, e)),
                      e === rn && (this.tfm.zOrigin = s.zOrigin),
                      this.props.indexOf(nn) >= 0)
                  )
                      return;
                  s.svg && ((this.svgo = r.getAttribute("data-svg-origin")), this.props.push(rn, i, "")), (e = nn);
              }
              (o || i) && this.props.push(e, i, o[e]);
          },
          sn = function (t) {
              t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
          },
          an = function () {
              var t,
                  e,
                  i = this.props,
                  n = this.target,
                  r = n.style,
                  o = n._gsap;
              for (t = 0; t < i.length; t += 3) i[t + 1] ? (n[i[t]] = i[t + 2]) : i[t + 2] ? (r[i[t]] = i[t + 2]) : r.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Ii, "-$1").toLowerCase());
              if (this.tfm) {
                  for (e in this.tfm) o[e] = this.tfm[e];
                  o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")),
                      ((t = Bi()) && t.isStart) || r[nn] || (sn(r), o.zOrigin && r[rn] && ((r[rn] += " " + o.zOrigin + "px"), (o.zOrigin = 0), o.renderTransform()), (o.uncache = 1));
              }
          },
          ln = function (t, e) {
              var i = { target: t, props: [], revert: an, save: on };
              return (
                  t._gsap || Ti.core.getCache(t),
                  e &&
                      e.split(",").forEach(function (t) {
                          return i.save(t);
                      }),
                  i
              );
          },
          un = function (t, e) {
              var i = Fi.createElementNS ? Fi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Fi.createElement(t);
              return i && i.style ? i : Fi.createElement(t);
          },
          cn = function t(e, i, n) {
              var r = getComputedStyle(e);
              return r[i] || r.getPropertyValue(i.replace(Ii, "-$1").toLowerCase()) || r.getPropertyValue(i) || (!n && t(e, fn(i) || i, 1)) || "";
          },
          hn = "O,Moz,ms,Ms,Webkit".split(","),
          fn = function (t, e, i) {
              var n = (e || Si).style,
                  r = 5;
              if (t in n && !i) return t;
              for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(hn[r] + t in n); );
              return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? hn[r] : "") + t;
          },
          dn = function () {
              "undefined" != typeof window &&
                  window.document &&
                  (($i = window),
                  (Fi = $i.document),
                  (Ai = Fi.documentElement),
                  (Si = un("div") || { style: {} }),
                  un("div"),
                  (nn = fn(nn)),
                  (rn = nn + "Origin"),
                  (Si.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                  (Mi = !!fn("perspective")),
                  (Bi = Ti.core.reverting),
                  (Oi = 1));
          },
          pn = function t(e) {
              var i,
                  n = un("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                  r = this.parentNode,
                  o = this.nextSibling,
                  s = this.style.cssText;
              if ((Ai.appendChild(n), n.appendChild(this), (this.style.display = "block"), e))
                  try {
                      (i = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                  } catch (t) {}
              else this._gsapBBox && (i = this._gsapBBox());
              return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), Ai.removeChild(n), (this.style.cssText = s), i;
          },
          mn = function (t, e) {
              for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
          },
          gn = function (t) {
              var e;
              try {
                  e = t.getBBox();
              } catch (i) {
                  e = pn.call(t, !0);
              }
              return (e && (e.width || e.height)) || t.getBBox === pn || (e = pn.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +mn(t, ["x", "cx", "x1"]) || 0, y: +mn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
          },
          vn = function (t) {
              return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !gn(t));
          },
          Dn = function (t, e) {
              if (e) {
                  var i,
                      n = t.style;
                  e in Ri && e !== rn && (e = nn),
                      n.removeProperty ? (("ms" !== (i = e.substr(0, 2)) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty("--" === i ? e : e.replace(Ii, "-$1").toLowerCase())) : n.removeAttribute(e);
              }
          },
          yn = function (t, e, i, n, r, o) {
              var s = new pi(t._pt, e, i, 0, 1, o ? Ki : Ui);
              return (t._pt = s), (s.b = n), (s.e = r), t._props.push(i), s;
          },
          bn = { deg: 1, rad: 1, turn: 1 },
          wn = { grid: 1, flex: 1 },
          _n = function t(e, i, n, r) {
              var o,
                  s,
                  a,
                  l,
                  u = parseFloat(n) || 0,
                  c = (n + "").trim().substr((u + "").length) || "px",
                  h = Si.style,
                  f = Hi.test(i),
                  d = "svg" === e.tagName.toLowerCase(),
                  p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
                  m = "px" === r,
                  g = "%" === r;
              if (r === c || !u || bn[r] || bn[c]) return u;
              if (("px" !== c && !m && (u = t(e, i, n, "px")), (l = e.getCTM && vn(e)), (g || "%" === c) && (Ri[i] || ~i.indexOf("adius"))))
                  return (o = l ? e.getBBox()[f ? "width" : "height"] : e[p]), yt(g ? (u / o) * 100 : (u / 100) * o);
              if (
                  ((h[f ? "width" : "height"] = 100 + (m ? c : r)),
                  (s = ~i.indexOf("adius") || ("em" === r && e.appendChild && !d) ? e : e.parentNode),
                  l && (s = (e.ownerSVGElement || {}).parentNode),
                  (s && s !== Fi && s.appendChild) || (s = Fi.body),
                  (a = s._gsap) && g && a.width && f && a.time === Fe.time && !a.uncache)
              )
                  return yt((u / a.width) * 100);
              if (!g || ("height" !== i && "width" !== i))
                  (g || "%" === c) && !wn[cn(s, "display")] && (h.position = cn(e, "position")), s === e && (h.position = "static"), s.appendChild(Si), (o = Si[p]), s.removeChild(Si), (h.position = "absolute");
              else {
                  var v = e.style[i];
                  (e.style[i] = 100 + r), (o = e[p]), v ? (e.style[i] = v) : Dn(e, i);
              }
              return f && g && (((a = gt(s)).time = Fe.time), (a.width = s[p])), yt(m ? (o * u) / 100 : o && u ? (100 / o) * u : 0);
          },
          xn = function (t, e, i, n) {
              var r;
              return (
                  Oi || dn(),
                  e in Ni && "transform" !== e && ~(e = Ni[e]).indexOf(",") && (e = e.split(",")[0]),
                  Ri[e] && "transform" !== e
                      ? ((r = Mn(t, n)), (r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Rn(cn(t, rn)) + " " + r.zOrigin + "px"))
                      : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = ($n[e] && $n[e](t, e, i)) || cn(t, e) || vt(t, e) || ("opacity" === e ? 1 : 0)),
                  i && !~(r + "").trim().indexOf(" ") ? _n(t, e, r, i) + i : r
              );
          },
          Cn = function (t, e, i, n) {
              if (!i || "none" === i) {
                  var r = fn(e, t, 1),
                      o = r && cn(t, r, 1);
                  o && o !== i ? ((e = r), (i = o)) : "borderColor" === e && (i = cn(t, "borderTopColor"));
              }
              var s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  f,
                  d,
                  p,
                  m,
                  g,
                  v = new pi(this._pt, t.style, e, 0, 1, li),
                  D = 0,
                  y = 0;
              if (
                  ((v.b = i),
                  (v.e = n),
                  (i += ""),
                  "auto" === (n += "") && ((h = t.style[e]), (t.style[e] = n), (n = cn(t, e) || n), h ? (t.style[e] = h) : Dn(t, e)),
                  $e((s = [i, n])),
                  (n = s[1]),
                  (l = (i = s[0]).match(X) || []),
                  (n.match(X) || []).length)
              ) {
                  for (; (a = X.exec(n)); )
                      (f = a[0]),
                          (p = n.substring(D, a.index)),
                          c ? (c = (c + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (c = 1),
                          f !== (h = l[y++] || "") &&
                              ((u = parseFloat(h) || 0),
                              (g = h.substr((u + "").length)),
                              "=" === f.charAt(1) && (f = wt(u, f) + g),
                              (d = parseFloat(f)),
                              (m = f.substr((d + "").length)),
                              (D = X.lastIndex - m.length),
                              m || ((m = m || C.units[e] || g), D === n.length && ((n += m), (v.e += m))),
                              g !== m && (u = _n(t, e, h, m) || 0),
                              (v._pt = { _next: v._pt, p: p || 1 === y ? p : ",", s: u, c: d - u, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
                  v.c = D < n.length ? n.substring(D, n.length) : "";
              } else v.r = "display" === e && "none" === n ? Ki : Ui;
              return U.test(n) && (v.e = 0), (this._pt = v), v;
          },
          En = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
          kn = function (t) {
              var e = t.split(" "),
                  i = e[0],
                  n = e[1] || "50%";
              return ("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) || ((t = i), (i = n), (n = t)), (e[0] = En[i] || i), (e[1] = En[n] || n), e.join(" ");
          },
          Tn = function (t, e) {
              if (e.tween && e.tween._time === e.tween._dur) {
                  var i,
                      n,
                      r,
                      o = e.t,
                      s = o.style,
                      a = e.u,
                      l = o._gsap;
                  if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
                  else for (r = (a = a.split(",")).length; --r > -1; ) (i = a[r]), Ri[i] && ((n = 1), (i = "transformOrigin" === i ? rn : nn)), Dn(o, i);
                  n && (Dn(o, nn), l && (l.svg && o.removeAttribute("transform"), Mn(o, 1), (l.uncache = 1), sn(s)));
              }
          },
          $n = {
              clearProps: function (t, e, i, n, r) {
                  if ("isFromStart" !== r.data) {
                      var o = (t._pt = new pi(t._pt, e, i, 0, 0, Tn));
                      return (o.u = n), (o.pr = -10), (o.tween = r), t._props.push(i), 1;
                  }
              },
          },
          Fn = [1, 0, 0, 1, 0, 0],
          An = {},
          On = function (t) {
              return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          Sn = function (t) {
              var e = cn(t, nn);
              return On(e) ? Fn : e.substr(7).match(q).map(yt);
          },
          Pn = function (t, e) {
              var i,
                  n,
                  r,
                  o,
                  s = t._gsap || gt(t),
                  a = t.style,
                  l = Sn(t);
              return s.svg && t.getAttribute("transform")
                  ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                      ? Fn
                      : l
                  : (l !== Fn ||
                        t.offsetParent ||
                        t === Ai ||
                        s.svg ||
                        ((r = a.display),
                        (a.display = "block"),
                        ((i = t.parentNode) && t.offsetParent) || ((o = 1), (n = t.nextElementSibling), Ai.appendChild(t)),
                        (l = Sn(t)),
                        r ? (a.display = r) : Dn(t, "display"),
                        o && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Ai.removeChild(t))),
                    e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
          },
          Bn = function (t, e, i, n, r, o) {
              var s,
                  a,
                  l,
                  u = t._gsap,
                  c = r || Pn(t, !0),
                  h = u.xOrigin || 0,
                  f = u.yOrigin || 0,
                  d = u.xOffset || 0,
                  p = u.yOffset || 0,
                  m = c[0],
                  g = c[1],
                  v = c[2],
                  D = c[3],
                  y = c[4],
                  b = c[5],
                  w = e.split(" "),
                  _ = parseFloat(w[0]) || 0,
                  x = parseFloat(w[1]) || 0;
              i
                  ? c !== Fn && (a = m * D - g * v) && ((l = _ * (-g / a) + x * (m / a) - (m * b - g * y) / a), (_ = _ * (D / a) + x * (-v / a) + (v * b - D * y) / a), (x = l))
                  : ((_ = (s = gn(t)).x + (~w[0].indexOf("%") ? (_ / 100) * s.width : _)), (x = s.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * s.height : x)), "xOrigin" in u || (!_ && !x) || ((_ -= s.x), (x -= s.y))),
                  n || (!1 !== n && u.smooth) ? ((y = _ - h), (b = x - f), (u.xOffset = d + (y * m + b * v) - y), (u.yOffset = p + (y * g + b * D) - b)) : (u.xOffset = u.yOffset = 0),
                  (u.xOrigin = _),
                  (u.yOrigin = x),
                  (u.smooth = !!n),
                  (u.origin = e),
                  (u.originIsAbsolute = !!i),
                  (t.style[rn] = "0px 0px"),
                  o && (yn(o, u, "xOrigin", h, _), yn(o, u, "yOrigin", f, x), yn(o, u, "xOffset", d, u.xOffset), yn(o, u, "yOffset", p, u.yOffset)),
                  t.setAttribute("data-svg-origin", _ + " " + x);
          },
          Mn = function (t, e) {
              var i = t._gsap || new We(t);
              if ("x" in i && !e && !i.uncache) return i;
              var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c,
                  h,
                  f,
                  d,
                  p,
                  m,
                  g,
                  v,
                  D,
                  y,
                  b,
                  w,
                  _,
                  x,
                  E,
                  k,
                  T,
                  $,
                  F,
                  A,
                  O,
                  S,
                  P,
                  B,
                  M,
                  R = t.style,
                  L = i.scaleX < 0,
                  j = getComputedStyle(t),
                  z = cn(t, rn) || "0";
              return (
                  (n = r = o = l = u = c = h = f = d = 0),
                  (s = a = 1),
                  (i.svg = !(!t.getCTM || !vn(t))),
                  j.translate &&
                      (("none" === j.translate && "none" === j.scale && "none" === j.rotate) ||
                          (R[nn] =
                              ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
                              ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") +
                              ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") +
                              ("none" !== j[nn] ? j[nn] : "")),
                      (R.scale = R.rotate = R.translate = "none")),
                  (g = Pn(t, i.svg)),
                  i.svg &&
                      (i.uncache ? (($ = t.getBBox()), (z = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px"), (T = "")) : (T = !e && t.getAttribute("data-svg-origin")), Bn(t, T || z, !!T || i.originIsAbsolute, !1 !== i.smooth, g)),
                  (p = i.xOrigin || 0),
                  (m = i.yOrigin || 0),
                  g !== Fn &&
                      ((b = g[0]),
                      (w = g[1]),
                      (_ = g[2]),
                      (x = g[3]),
                      (n = E = g[4]),
                      (r = k = g[5]),
                      6 === g.length
                          ? ((s = Math.sqrt(b * b + w * w)),
                            (a = Math.sqrt(x * x + _ * _)),
                            (l = b || w ? zi(w, b) * Li : 0),
                            (h = _ || x ? zi(_, x) * Li + l : 0) && (a *= Math.abs(Math.cos(h * ji))),
                            i.svg && ((n -= p - (p * b + m * _)), (r -= m - (p * w + m * x))))
                          : ((M = g[6]),
                            (P = g[7]),
                            (A = g[8]),
                            (O = g[9]),
                            (S = g[10]),
                            (B = g[11]),
                            (n = g[12]),
                            (r = g[13]),
                            (o = g[14]),
                            (u = (v = zi(M, S)) * Li),
                            v &&
                                ((T = E * (D = Math.cos(-v)) + A * (y = Math.sin(-v))),
                                ($ = k * D + O * y),
                                (F = M * D + S * y),
                                (A = E * -y + A * D),
                                (O = k * -y + O * D),
                                (S = M * -y + S * D),
                                (B = P * -y + B * D),
                                (E = T),
                                (k = $),
                                (M = F)),
                            (c = (v = zi(-_, S)) * Li),
                            v && ((D = Math.cos(-v)), (B = x * (y = Math.sin(-v)) + B * D), (b = T = b * D - A * y), (w = $ = w * D - O * y), (_ = F = _ * D - S * y)),
                            (l = (v = zi(w, b)) * Li),
                            v && ((T = b * (D = Math.cos(v)) + w * (y = Math.sin(v))), ($ = E * D + k * y), (w = w * D - b * y), (k = k * D - E * y), (b = T), (E = $)),
                            u && Math.abs(u) + Math.abs(l) > 359.9 && ((u = l = 0), (c = 180 - c)),
                            (s = yt(Math.sqrt(b * b + w * w + _ * _))),
                            (a = yt(Math.sqrt(k * k + M * M))),
                            (v = zi(E, k)),
                            (h = Math.abs(v) > 2e-4 ? v * Li : 0),
                            (d = B ? 1 / (B < 0 ? -B : B) : 0)),
                      i.svg && ((T = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !On(cn(t, nn))), T && t.setAttribute("transform", T))),
                  Math.abs(h) > 90 && Math.abs(h) < 270 && (L ? ((s *= -1), (h += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (h += h <= 0 ? 180 : -180))),
                  (e = e || i.uncache),
                  (i.x = n - ((i.xPercent = n && ((!e && i.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetWidth * i.xPercent) / 100 : 0) + "px"),
                  (i.y = r - ((i.yPercent = r && ((!e && i.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetHeight * i.yPercent) / 100 : 0) + "px"),
                  (i.z = o + "px"),
                  (i.scaleX = yt(s)),
                  (i.scaleY = yt(a)),
                  (i.rotation = yt(l) + "deg"),
                  (i.rotationX = yt(u) + "deg"),
                  (i.rotationY = yt(c) + "deg"),
                  (i.skewX = h + "deg"),
                  (i.skewY = f + "deg"),
                  (i.transformPerspective = d + "px"),
                  (i.zOrigin = parseFloat(z.split(" ")[2]) || (!e && i.zOrigin) || 0) && (R[rn] = Rn(z)),
                  i.svg || (i.xOffset = i.yOffset = 0),
                  (i.force3D = C.force3D),
                  (i.renderTransform = i.svg ? In : Mi ? zn : jn),
                  (i.uncache = 0),
                  i
              );
          },
          Rn = function (t) {
              return (t = t.split(" "))[0] + " " + t[1];
          },
          Ln = function (t, e, i) {
              var n = ie(e);
              return yt(parseFloat(e) + parseFloat(_n(t, "x", i + "px", n))) + n;
          },
          jn = function (t, e) {
              (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), zn(t, e);
          },
          zn = function (t, e) {
              var i = e || this,
                  n = i.xPercent,
                  r = i.yPercent,
                  o = i.x,
                  s = i.y,
                  a = i.z,
                  l = i.rotation,
                  u = i.rotationY,
                  c = i.rotationX,
                  h = i.skewX,
                  f = i.skewY,
                  d = i.scaleX,
                  p = i.scaleY,
                  m = i.transformPerspective,
                  g = i.force3D,
                  v = i.target,
                  D = i.zOrigin,
                  y = "",
                  b = ("auto" === g && t && 1 !== t) || !0 === g;
              if (D && ("0deg" !== c || "0deg" !== u)) {
                  var w,
                      _ = parseFloat(u) * ji,
                      x = Math.sin(_),
                      C = Math.cos(_);
                  (_ = parseFloat(c) * ji), (w = Math.cos(_)), (o = Ln(v, o, x * w * -D)), (s = Ln(v, s, -Math.sin(_) * -D)), (a = Ln(v, a, C * w * -D + D));
              }
              "0px" !== m && (y += "perspective(" + m + ") "),
                  (n || r) && (y += "translate(" + n + "%, " + r + "%) "),
                  (b || "0px" !== o || "0px" !== s || "0px" !== a) && (y += "0px" !== a || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "),
                  "0deg" !== l && (y += "rotate(" + l + ") "),
                  "0deg" !== u && (y += "rotateY(" + u + ") "),
                  "0deg" !== c && (y += "rotateX(" + c + ") "),
                  ("0deg" === h && "0deg" === f) || (y += "skew(" + h + ", " + f + ") "),
                  (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + ") "),
                  (v.style[nn] = y || "translate(0, 0)");
          },
          In = function (t, e) {
              var i,
                  n,
                  r,
                  o,
                  s,
                  a = e || this,
                  l = a.xPercent,
                  u = a.yPercent,
                  c = a.x,
                  h = a.y,
                  f = a.rotation,
                  d = a.skewX,
                  p = a.skewY,
                  m = a.scaleX,
                  g = a.scaleY,
                  v = a.target,
                  D = a.xOrigin,
                  y = a.yOrigin,
                  b = a.xOffset,
                  w = a.yOffset,
                  _ = a.forceCSS,
                  x = parseFloat(c),
                  C = parseFloat(h);
              (f = parseFloat(f)),
                  (d = parseFloat(d)),
                  (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
                  f || d
                      ? ((f *= ji),
                        (d *= ji),
                        (i = Math.cos(f) * m),
                        (n = Math.sin(f) * m),
                        (r = Math.sin(f - d) * -g),
                        (o = Math.cos(f - d) * g),
                        d && ((p *= ji), (s = Math.tan(d - p)), (r *= s = Math.sqrt(1 + s * s)), (o *= s), p && ((s = Math.tan(p)), (i *= s = Math.sqrt(1 + s * s)), (n *= s))),
                        (i = yt(i)),
                        (n = yt(n)),
                        (r = yt(r)),
                        (o = yt(o)))
                      : ((i = m), (o = g), (n = r = 0)),
                  ((x && !~(c + "").indexOf("px")) || (C && !~(h + "").indexOf("px"))) && ((x = _n(v, "x", c, "px")), (C = _n(v, "y", h, "px"))),
                  (D || y || b || w) && ((x = yt(x + D - (D * i + y * r) + b)), (C = yt(C + y - (D * n + y * o) + w))),
                  (l || u) && ((s = v.getBBox()), (x = yt(x + (l / 100) * s.width)), (C = yt(C + (u / 100) * s.height))),
                  (s = "matrix(" + i + "," + n + "," + r + "," + o + "," + x + "," + C + ")"),
                  v.setAttribute("transform", s),
                  _ && (v.style[nn] = s);
          },
          Hn = function (t, e, i, n, r) {
              var o,
                  s,
                  a = B(r),
                  l = parseFloat(r) * (a && ~r.indexOf("rad") ? Li : 1) - n,
                  u = n + l + "deg";
              return (
                  a &&
                      ("short" === (o = r.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360),
                      "cw" === o && l < 0 ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360)) : "ccw" === o && l > 0 && (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
                  (t._pt = s = new pi(t._pt, e, i, n, l, qi)),
                  (s.e = u),
                  (s.u = "deg"),
                  t._props.push(i),
                  s
              );
          },
          Wn = function (t, e) {
              for (var i in e) t[i] = e[i];
              return t;
          },
          Nn = function (t, e, i) {
              var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c = Wn({}, i._gsap),
                  h = i.style;
              for (r in (c.svg
                  ? ((o = i.getAttribute("transform")), i.setAttribute("transform", ""), (h[nn] = e), (n = Mn(i, 1)), Dn(i, nn), i.setAttribute("transform", o))
                  : ((o = getComputedStyle(i)[nn]), (h[nn] = e), (n = Mn(i, 1)), (h[nn] = o)),
              Ri))
                  (o = c[r]) !== (s = n[r]) &&
                      "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                      ((a = ie(o) !== (u = ie(s)) ? _n(i, r, o, u) : parseFloat(o)), (l = parseFloat(s)), (t._pt = new pi(t._pt, n, r, a, l - a, Yi)), (t._pt.u = u || 0), t._props.push(r));
              Wn(n, c);
          };
      Dt("padding,margin,Width,Radius", function (t, e) {
          var i = "Top",
              n = "Right",
              r = "Bottom",
              o = "Left",
              s = (e < 3 ? [i, n, r, o] : [i + o, i + n, r + n, r + o]).map(function (i) {
                  return e < 2 ? t + i : "border" + i + t;
              });
          $n[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
              var o, a;
              if (arguments.length < 4)
                  return (
                      (o = s.map(function (e) {
                          return xn(t, e, i);
                      })),
                      5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
                  );
              (o = (n + "").split(" ")),
                  (a = {}),
                  s.forEach(function (t, e) {
                      return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
                  }),
                  t.init(e, a, r);
          };
      });
      var Yn,
          qn,
          Xn = {
              name: "css",
              register: dn,
              targetTest: function (t) {
                  return t.style && t.nodeType;
              },
              init: function (t, e, i, n, r) {
                  var o,
                      s,
                      a,
                      l,
                      u,
                      c,
                      h,
                      f,
                      d,
                      p,
                      m,
                      g,
                      v,
                      D,
                      y,
                      b,
                      w = this._props,
                      _ = t.style,
                      x = i.vars.startAt;
                  for (h in (Oi || dn(), (this.styles = this.styles || ln(t)), (b = this.styles.props), (this.tween = i), e))
                      if ("autoRound" !== h && ((s = e[h]), !ct[h] || !Ue(h, e, i, n, t, r)))
                          if (((u = typeof s), (c = $n[h]), "function" === u && (u = typeof (s = s.call(i, n, t, r))), "string" === u && ~s.indexOf("random(") && (s = pe(s)), c)) c(this, t, h, s, i) && (y = 1);
                          else if ("--" === h.substr(0, 2))
                              (o = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                                  (s += ""),
                                  (ke.lastIndex = 0),
                                  ke.test(o) || ((f = ie(o)), (d = ie(s))),
                                  d ? f !== d && (o = _n(t, h, o, d) + d) : f && (s += f),
                                  this.add(_, "setProperty", o, s, n, r, 0, 0, h),
                                  w.push(h),
                                  b.push(h, 0, _[h]);
                          else if ("undefined" !== u) {
                              if (
                                  (x && h in x
                                      ? ((o = "function" == typeof x[h] ? x[h].call(i, n, t, r) : x[h]),
                                        B(o) && ~o.indexOf("random(") && (o = pe(o)),
                                        ie(o + "") || "auto" === o || (o += C.units[h] || ie(xn(t, h)) || ""),
                                        "=" === (o + "").charAt(1) && (o = xn(t, h)))
                                      : (o = xn(t, h)),
                                  (l = parseFloat(o)),
                                  (p = "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                                  (a = parseFloat(s)),
                                  h in Ni &&
                                      ("autoAlpha" === h &&
                                          (1 === l && "hidden" === xn(t, "visibility") && a && (l = 0), b.push("visibility", 0, _.visibility), yn(this, _, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                                      "scale" !== h && "transform" !== h && ~(h = Ni[h]).indexOf(",") && (h = h.split(",")[0])),
                                  (m = h in Ri))
                              )
                                  if (
                                      (this.styles.save(h),
                                      g ||
                                          (((v = t._gsap).renderTransform && !e.parseTransform) || Mn(t, e.parseTransform),
                                          (D = !1 !== e.smoothOrigin && v.smooth),
                                          ((g = this._pt = new pi(this._pt, _, nn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                      "scale" === h)
                                  )
                                      (this._pt = new pi(this._pt, v, "scaleY", v.scaleY, (p ? wt(v.scaleY, p + a) : a) - v.scaleY || 0, Yi)), (this._pt.u = 0), w.push("scaleY", h), (h += "X");
                                  else {
                                      if ("transformOrigin" === h) {
                                          b.push(rn, 0, _[rn]), (s = kn(s)), v.svg ? Bn(t, s, 0, D, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && yn(this, v, "zOrigin", v.zOrigin, d), yn(this, _, h, Rn(o), Rn(s)));
                                          continue;
                                      }
                                      if ("svgOrigin" === h) {
                                          Bn(t, s, 1, D, 0, this);
                                          continue;
                                      }
                                      if (h in An) {
                                          Hn(this, v, h, l, p ? wt(l, p + s) : s);
                                          continue;
                                      }
                                      if ("smoothOrigin" === h) {
                                          yn(this, v, "smooth", v.smooth, s);
                                          continue;
                                      }
                                      if ("force3D" === h) {
                                          v[h] = s;
                                          continue;
                                      }
                                      if ("transform" === h) {
                                          Nn(this, s, t);
                                          continue;
                                      }
                                  }
                              else h in _ || (h = fn(h) || h);
                              if (m || ((a || 0 === a) && (l || 0 === l) && !Wi.test(s) && h in _))
                                  a || (a = 0),
                                      (f = (o + "").substr((l + "").length)) !== (d = ie(s) || (h in C.units ? C.units[h] : f)) && (l = _n(t, h, o, d)),
                                      (this._pt = new pi(this._pt, m ? v : _, h, l, (p ? wt(l, p + a) : a) - l, m || ("px" !== d && "zIndex" !== h) || !1 === e.autoRound ? Yi : Vi)),
                                      (this._pt.u = d || 0),
                                      f !== d && "%" !== d && ((this._pt.b = o), (this._pt.r = Xi));
                              else if (h in _) Cn.call(this, t, h, o, p ? p + s : s);
                              else if (h in t) this.add(t, h, o || t[h], p ? p + s : s, n, r);
                              else if ("parseTransform" !== h) {
                                  tt(h, s);
                                  continue;
                              }
                              m || (h in _ ? b.push(h, 0, _[h]) : b.push(h, 1, o || t[h])), w.push(h);
                          }
                  y && di(this);
              },
              render: function (t, e) {
                  if (e.tween._time || !Bi()) for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
                  else e.styles.revert();
              },
              get: xn,
              aliases: Ni,
              getSetter: function (t, e, i) {
                  var n = Ni[e];
                  return (
                      n && n.indexOf(",") < 0 && (e = n),
                      e in Ri && e !== rn && (t._gsap.x || xn(t, "x")) ? (i && Pi === i ? ("scale" === e ? Ji : Zi) : (Pi = i || {}) && ("scale" === e ? tn : en)) : t.style && !L(t.style[e]) ? Gi : ~e.indexOf("-") ? Qi : oi(t, e)
                  );
              },
              core: { _removeProperty: Dn, _getMatrix: Pn },
          };
      (Ti.utils.checkPrefix = fn),
          (Ti.core.getStyleSaver = ln),
          (qn = Dt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Yn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
              Ri[t] = 1;
          })),
          Dt(Yn, function (t) {
              (C.units[t] = "deg"), (An[t] = 1);
          }),
          (Ni[qn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Yn),
          Dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
              var e = t.split(":");
              Ni[e[1]] = qn[e[0]];
          }),
          Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
              C.units[t] = "px";
          }),
          Ti.registerPlugin(Xn);
      var Vn = Ti.registerPlugin(Xn) || Ti,
          Un = (Vn.core.Tween, i(1));
      function Kn(t, e) {
          for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
      }
      function Gn(t) {
          return (Gn =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                        return typeof t;
                    }
                  : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    })(t);
      }
      /*!
       * ScrollTrigger 3.6.0
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var Qn,
          Zn,
          Jn,
          tr,
          er,
          ir,
          nr,
          rr,
          or,
          sr,
          ar,
          lr,
          ur,
          cr,
          hr,
          fr,
          dr,
          pr,
          mr,
          gr,
          vr,
          Dr,
          yr,
          br,
          wr,
          _r,
          xr,
          Cr = 1,
          Er = [],
          kr = [],
          Tr = Date.now,
          $r = Tr(),
          Fr = 0,
          Ar = 1,
          Or = function (t) {
              return t;
          },
          Sr = function () {
              return "undefined" != typeof window;
          },
          Pr = function () {
              return Qn || (Sr() && (Qn = window.gsap) && Qn.registerPlugin && Qn);
          },
          Br = function (t) {
              return !!~nr.indexOf(t);
          },
          Mr = function (t, e) {
              return ~Er.indexOf(t) && Er[Er.indexOf(t) + 1][e];
          },
          Rr = function (t, e) {
              var i = e.s,
                  n = e.sc,
                  r = kr.indexOf(t),
                  o = n === Gr.sc ? 1 : 2;
              return (
                  !~r && (r = kr.push(t) - 1),
                  kr[r + o] ||
                      (kr[r + o] =
                          Mr(t, i) ||
                          (Br(t)
                              ? n
                              : function (e) {
                                    return arguments.length ? (t[i] = e) : t[i];
                                }))
              );
          },
          Lr = function (t) {
              return (
                  Mr(t, "getBoundingClientRect") ||
                  (Br(t)
                      ? function () {
                            return (Ro.width = Jn.innerWidth), (Ro.height = Jn.innerHeight), Ro;
                        }
                      : function () {
                            return Jr(t);
                        })
              );
          },
          jr = function (t, e) {
              var i = e.s,
                  n = e.d2,
                  r = e.d,
                  o = e.a;
              return (i = "scroll" + n) && (o = Mr(t, i)) ? o() - Lr(t)()[r] : Br(t) ? Math.max(er[i], ir[i]) - (Jn["inner" + n] || er["client" + n] || ir["client" + n]) : t[i] - t["offset" + n];
          },
          zr = function (t, e) {
              for (var i = 0; i < vr.length; i += 3) (!e || ~e.indexOf(vr[i + 1])) && t(vr[i], vr[i + 1], vr[i + 2]);
          },
          Ir = function (t) {
              return "string" == typeof t;
          },
          Hr = function (t) {
              return "function" == typeof t;
          },
          Wr = function (t) {
              return "number" == typeof t;
          },
          Nr = function (t) {
              return "object" === Gn(t);
          },
          Yr = function (t) {
              return Hr(t) && t();
          },
          qr = function (t, e) {
              return function () {
                  var i = Yr(t),
                      n = Yr(e);
                  return function () {
                      Yr(i), Yr(n);
                  };
              };
          },
          Xr = Math.abs,
          Vr = "padding",
          Ur = "px",
          Kr = {
              s: "scrollLeft",
              p: "left",
              p2: "Left",
              os: "right",
              os2: "Right",
              d: "width",
              d2: "Width",
              a: "x",
              sc: function (t) {
                  return arguments.length ? Jn.scrollTo(t, Gr.sc()) : Jn.pageXOffset || tr.scrollLeft || er.scrollLeft || ir.scrollLeft || 0;
              },
          },
          Gr = {
              s: "scrollTop",
              p: "top",
              p2: "Top",
              os: "bottom",
              os2: "Bottom",
              d: "height",
              d2: "Height",
              a: "y",
              op: Kr,
              sc: function (t) {
                  return arguments.length ? Jn.scrollTo(Kr.sc(), t) : Jn.pageYOffset || tr.scrollTop || er.scrollTop || ir.scrollTop || 0;
              },
          },
          Qr = function (t) {
              return Jn.getComputedStyle(t);
          },
          Zr = function (t, e) {
              for (var i in e) i in t || (t[i] = e[i]);
              return t;
          },
          Jr = function (t, e) {
              var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Qr(t)[dr] && Qn.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                  n = t.getBoundingClientRect();
              return i && i.progress(0).kill(), n;
          },
          to = function (t, e) {
              var i = e.d2;
              return t["offset" + i] || t["client" + i] || 0;
          },
          eo = function (t) {
              var e,
                  i = [],
                  n = t.labels,
                  r = t.duration();
              for (e in n) i.push(n[e] / r);
              return i;
          },
          io = function (t, e, i, n) {
              return i.split(",").forEach(function (i) {
                  return t(e, i, n);
              });
          },
          no = function (t, e, i) {
              return t.addEventListener(e, i, { passive: !0 });
          },
          ro = function (t, e, i) {
              return t.removeEventListener(e, i);
          },
          oo = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
          so = { toggleActions: "play", anticipatePin: 0 },
          ao = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          lo = function (t, e) {
              if (Ir(t)) {
                  var i = t.indexOf("="),
                      n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                  ~i && (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))), (t = n + (t in ao ? ao[t] * e : ~t.indexOf("%") ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
              }
              return t;
          },
          uo = function (t, e, i, n, r, o, s) {
              var a = r.startColor,
                  l = r.endColor,
                  u = r.fontSize,
                  c = r.indent,
                  h = r.fontWeight,
                  f = tr.createElement("div"),
                  d = Br(i) || "fixed" === Mr(i, "pinType"),
                  p = -1 !== t.indexOf("scroller"),
                  m = d ? ir : i,
                  g = -1 !== t.indexOf("start"),
                  v = g ? a : l,
                  D = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
              return (
                  (D += "position:" + (p && d ? "fixed;" : "absolute;")),
                  (p || !d) && (D += (n === Gr ? "right" : "bottom") + ":" + (o + parseFloat(c)) + "px;"),
                  s && (D += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
                  (f._isStart = g),
                  f.setAttribute("class", "gsap-marker-" + t),
                  (f.style.cssText = D),
                  (f.innerText = e || 0 === e ? t + "-" + e : t),
                  m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f),
                  (f._offset = f["offset" + n.op.d2]),
                  co(f, 0, n, g),
                  f
              );
          },
          co = function (t, e, i, n) {
              var r = { display: "block" },
                  o = i[n ? "os2" : "p2"],
                  s = i[n ? "p2" : "os2"];
              (t._isFlipped = n), (r[i.a + "Percent"] = n ? -100 : 0), (r[i.a] = n ? "1px" : 0), (r["border" + o + "Width"] = 1), (r["border" + s + "Width"] = 0), (r[i.p] = e + "px"), Qn.set(t, r);
          },
          ho = [],
          fo = {},
          po = function () {
              return sr || (sr = or(Fo));
          },
          mo = function () {
              sr || ((sr = or(Fo)), Fr || _o("scrollStart"), (Fr = Tr()));
          },
          go = function () {
              return !hr && !br && !tr.fullscreenElement && rr.restart(!0);
          },
          vo = {},
          Do = [],
          yo = [],
          bo = function (t) {
              var e,
                  i = Qn.ticker.frame,
                  n = [],
                  r = 0;
              if (xr !== i || Cr) {
                  for (Eo(); r < yo.length; r += 4) (e = Jn.matchMedia(yo[r]).matches) !== yo[r + 3] && ((yo[r + 3] = e), e ? n.push(r) : Eo(1, yo[r]) || (Hr(yo[r + 2]) && yo[r + 2]()));
                  for (Co(), r = 0; r < n.length; r++) (e = n[r]), (_r = yo[e]), (yo[e + 2] = yo[e + 1](t));
                  (_r = 0), Zn && ko(0, 1), (xr = i), _o("matchMedia");
              }
          },
          wo = function t() {
              return ro(Ho, "scrollEnd", t) || ko(!0);
          },
          _o = function (t) {
              return (
                  (vo[t] &&
                      vo[t].map(function (t) {
                          return t();
                      })) ||
                  Do
              );
          },
          xo = [],
          Co = function (t) {
              for (var e = 0; e < xo.length; e += 4) (t && xo[e + 3] !== t) || ((xo[e].style.cssText = xo[e + 1]), (xo[e + 2].uncache = 1));
          },
          Eo = function (t, e) {
              var i;
              for (pr = 0; pr < ho.length; pr++) (i = ho[pr]), (e && i.media !== e) || (t ? i.kill(1) : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
              Co(e), e || _o("revert");
          },
          ko = function (t, e) {
              if (!Fr || t) {
                  var i = _o("refreshInit");
                  for (Dr && Ho.sort(), e || Eo(), pr = 0; pr < ho.length; pr++) ho[pr].refresh();
                  for (
                      i.forEach(function (t) {
                          return t && t.render && t.render(-1);
                      }),
                          pr = ho.length;
                      pr--;

                  )
                      ho[pr].scroll.rec = 0;
                  rr.pause(), _o("refresh");
              } else no(Ho, "scrollEnd", wo);
          },
          To = 0,
          $o = 1,
          Fo = function () {
              var t = ho.length,
                  e = Tr(),
                  i = e - $r >= 50,
                  n = t && ho[0].scroll();
              if ((($o = To > n ? -1 : 1), (To = n), i && (Fr && !fr && e - Fr > 200 && ((Fr = 0), _o("scrollEnd")), (ur = $r), ($r = e)), $o < 0)) {
                  for (pr = t; pr--; ) ho[pr] && ho[pr].update(0, i);
                  $o = 1;
              } else for (pr = 0; pr < t; pr++) ho[pr] && ho[pr].update(0, i);
              sr = 0;
          },
          Ao = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex"],
          Oo = Ao.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Vr, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
          So = function (t, e, i, n) {
              if (t.parentNode !== e) {
                  for (var r, o = Ao.length, s = e.style, a = t.style; o--; ) s[(r = Ao[o])] = i[r];
                  (s.position = "absolute" === i.position ? "absolute" : "relative"),
                      "inline" === i.display && (s.display = "inline-block"),
                      (a.bottom = a.right = "auto"),
                      (s.overflow = "visible"),
                      (s.boxSizing = "border-box"),
                      (s.width = to(t, Kr) + Ur),
                      (s.height = to(t, Gr) + Ur),
                      (s.padding = a.margin = a.top = a.left = "0"),
                      Bo(n),
                      (a.width = a.maxWidth = i.width),
                      (a.height = a.maxHeight = i.height),
                      (a.padding = i.padding),
                      t.parentNode.insertBefore(e, t),
                      e.appendChild(t);
              }
          },
          Po = /([A-Z])/g,
          Bo = function (t) {
              if (t) {
                  var e,
                      i,
                      n = t.t.style,
                      r = t.length,
                      o = 0;
                  for ((t.t._gsap || Qn.core.getCache(t.t)).uncache = 1; o < r; o += 2) (i = t[o + 1]), (e = t[o]), i ? (n[e] = i) : n[e] && n.removeProperty(e.replace(Po, "-$1").toLowerCase());
              }
          },
          Mo = function (t) {
              for (var e = Oo.length, i = t.style, n = [], r = 0; r < e; r++) n.push(Oo[r], i[Oo[r]]);
              return (n.t = t), n;
          },
          Ro = { left: 0, top: 0 },
          Lo = function (t, e, i, n, r, o, s, a, l, u, c, h) {
              if ((Hr(t) && (t = t(a)), Ir(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? lo("0" + t.substr(3), i) : 0)), Wr(t))) s && co(s, i, n, !0);
              else {
                  Hr(e) && (e = e(a));
                  var f,
                      d,
                      p,
                      m = ar(e)[0] || ir,
                      g = Jr(m) || {},
                      v = t.split(" ");
                  (g && (g.left || g.top)) || "none" !== Qr(m).display || ((p = m.style.display), (m.style.display = "block"), (g = Jr(m)), p ? (m.style.display = p) : m.style.removeProperty("display")),
                      (f = lo(v[0], g[n.d])),
                      (d = lo(v[1] || "0", i)),
                      (t = g[n.p] - l[n.p] - u + f + r - d),
                      s && co(s, d, n, i - d < 20 || (s._isStart && d > 20)),
                      (i -= i - d);
              }
              if (o) {
                  var D = t + i,
                      y = o._isStart;
                  (h = "scroll" + n.d2), co(o, D, n, (y && D > 20) || (!y && (c ? Math.max(ir[h], er[h]) : o.parentNode[h]) <= D + 1)), c && ((l = Jr(s)), c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Ur));
              }
              return Math.round(t);
          },
          jo = /(?:webkit|moz|length|cssText|)/i,
          zo = function (t, e, i, n) {
              if (t.parentNode !== e) {
                  var r,
                      o,
                      s = t.style;
                  if (e === ir) {
                      for (r in ((t._stOrig = s.cssText), (o = Qr(t)))) +r || jo.test(r) || !o[r] || "string" != typeof s[r] || "0" === r || (s[r] = o[r]);
                      (s.top = i), (s.left = n);
                  } else s.cssText = t._stOrig;
                  (Qn.core.getCache(t).uncache = 1), e.appendChild(t);
              }
          },
          Io = function (t, e) {
              var i,
                  n,
                  r = Rr(t, e),
                  o = "_scroll" + e.p2,
                  s = function e(s, a, l, u, c) {
                      var h = e.tween,
                          f = a.onComplete,
                          d = {};
                      return (
                          h && h.kill(),
                          (i = Math.round(l)),
                          (a[o] = s),
                          (a.modifiers = d),
                          (d[o] = function (t) {
                              return (t = Math.round(r())) !== i && t !== n && Math.abs(t - i) > 2 ? (h.kill(), (e.tween = 0)) : (t = l + u * h.ratio + c * h.ratio * h.ratio), (n = i), (i = Math.round(t));
                          }),
                          (a.onComplete = function () {
                              (e.tween = 0), f && f.call(h);
                          }),
                          (h = e.tween = Qn.to(t, a))
                      );
                  };
              return (
                  (t[o] = r),
                  t.addEventListener("mousewheel", function () {
                      return s.tween && s.tween.kill() && (s.tween = 0);
                  }),
                  s
              );
          };
      Kr.op = Gr;
      var Ho = (function () {
          function t(e, i) {
              !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, t),
                  Zn || t.register(Qn) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                  this.init(e, i);
          }
          var e, i, n;
          return (
              (e = t),
              (n = [
                  {
                      key: "register",
                      value: function (e) {
                          if (
                              !Zn &&
                              ((Qn = e || Pr()),
                              Sr() && window.document && ((Jn = window), (tr = document), (er = tr.documentElement), (ir = tr.body)),
                              Qn && ((ar = Qn.utils.toArray), (lr = Qn.utils.clamp), (yr = Qn.core.suppressOverwrites || Or), Qn.core.globals("ScrollTrigger", t), ir))
                          ) {
                              (or =
                                  Jn.requestAnimationFrame ||
                                  function (t) {
                                      return setTimeout(t, 16);
                                  }),
                                  no(Jn, "mousewheel", mo),
                                  (nr = [Jn, tr, er, ir]),
                                  no(tr, "scroll", mo);
                              var i,
                                  n = ir.style,
                                  r = n.borderTop;
                              (n.borderTop = "1px solid #000"),
                                  (i = Jr(ir)),
                                  (Gr.m = Math.round(i.top + Gr.sc()) || 0),
                                  (Kr.m = Math.round(i.left + Kr.sc()) || 0),
                                  r ? (n.borderTop = r) : n.removeProperty("border-top"),
                                  (cr = setInterval(po, 200)),
                                  Qn.delayedCall(0.5, function () {
                                      return (Cr = 0);
                                  }),
                                  no(tr, "touchcancel", Or),
                                  no(ir, "touchstart", Or),
                                  io(no, tr, "pointerdown,touchstart,mousedown", function () {
                                      return (fr = 1);
                                  }),
                                  io(no, tr, "pointerup,touchend,mouseup", function () {
                                      return (fr = 0);
                                  }),
                                  (dr = Qn.utils.checkPrefix("transform")),
                                  Oo.push(dr),
                                  (Zn = Tr()),
                                  (rr = Qn.delayedCall(0.2, ko).pause()),
                                  (vr = [
                                      tr,
                                      "visibilitychange",
                                      function () {
                                          var t = Jn.innerWidth,
                                              e = Jn.innerHeight;
                                          tr.hidden ? ((mr = t), (gr = e)) : (mr === t && gr === e) || go();
                                      },
                                      tr,
                                      "DOMContentLoaded",
                                      ko,
                                      Jn,
                                      "load",
                                      function () {
                                          return Fr || ko();
                                      },
                                      Jn,
                                      "resize",
                                      go,
                                  ]),
                                  zr(no);
                          }
                          return Zn;
                      },
                  },
                  {
                      key: "defaults",
                      value: function (t) {
                          for (var e in t) so[e] = t[e];
                      },
                  },
                  {
                      key: "kill",
                      value: function () {
                          (Ar = 0),
                              ho.slice(0).forEach(function (t) {
                                  return t.kill(1);
                              });
                      },
                  },
                  {
                      key: "config",
                      value: function (t) {
                          "limitCallbacks" in t && (wr = !!t.limitCallbacks);
                          var e = t.syncInterval;
                          (e && clearInterval(cr)) || ((cr = e) && setInterval(po, e)), "autoRefreshEvents" in t && (zr(ro) || zr(no, t.autoRefreshEvents || "none"), (br = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
                      },
                  },
                  {
                      key: "scrollerProxy",
                      value: function (t, e) {
                          var i = ar(t)[0],
                              n = kr.indexOf(i),
                              r = Br(i);
                          ~n && kr.splice(n, r ? 6 : 2), r ? Er.unshift(Jn, e, ir, e, er, e) : Er.unshift(i, e);
                      },
                  },
                  {
                      key: "matchMedia",
                      value: function (t) {
                          var e, i, n, r, o;
                          for (i in t)
                              (n = yo.indexOf(i)),
                                  (r = t[i]),
                                  (_r = i),
                                  "all" === i
                                      ? r()
                                      : (e = Jn.matchMedia(i)) &&
                                        (e.matches && (o = r()),
                                        ~n ? ((yo[n + 1] = qr(yo[n + 1], r)), (yo[n + 2] = qr(yo[n + 2], o))) : ((n = yo.length), yo.push(i, r, o), e.addListener ? e.addListener(bo) : e.addEventListener("change", bo)),
                                        (yo[n + 3] = e.matches)),
                                  (_r = 0);
                          return yo;
                      },
                  },
                  {
                      key: "clearMatchMedia",
                      value: function (t) {
                          t || (yo.length = 0), (t = yo.indexOf(t)) >= 0 && yo.splice(t, 4);
                      },
                  },
              ]),
              (i = [
                  {
                      key: "init",
                      value: function (e, i) {
                          if (((this.progress = this.start = 0), this.vars && this.kill(1), Ar)) {
                              var n,
                                  r,
                                  o,
                                  s,
                                  a,
                                  l,
                                  u,
                                  c,
                                  h,
                                  f,
                                  d,
                                  p,
                                  m,
                                  g,
                                  v,
                                  D,
                                  y,
                                  b,
                                  w,
                                  _,
                                  x,
                                  C,
                                  E,
                                  k,
                                  T,
                                  $,
                                  F,
                                  A,
                                  O,
                                  S,
                                  P,
                                  B,
                                  M,
                                  R,
                                  L,
                                  j,
                                  z,
                                  I,
                                  H,
                                  W = (e = Zr(Ir(e) || Wr(e) || e.nodeType ? { trigger: e } : e, so)).horizontal ? Kr : Gr,
                                  N = e,
                                  Y = N.onUpdate,
                                  q = N.toggleClass,
                                  X = N.id,
                                  V = N.onToggle,
                                  U = N.onRefresh,
                                  K = N.scrub,
                                  G = N.trigger,
                                  Q = N.pin,
                                  Z = N.pinSpacing,
                                  J = N.invalidateOnRefresh,
                                  tt = N.anticipatePin,
                                  et = N.onScrubComplete,
                                  it = N.onSnapComplete,
                                  nt = N.once,
                                  rt = N.snap,
                                  ot = N.pinReparent,
                                  st = !K && 0 !== K,
                                  at = ar(e.scroller || Jn)[0],
                                  lt = Qn.core.getCache(at),
                                  ut = Br(at),
                                  ct = "pinType" in e ? "fixed" === e.pinType : ut || "fixed" === Mr(at, "pinType"),
                                  ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                  ft = st && e.toggleActions.split(" "),
                                  dt = "markers" in e ? e.markers : so.markers,
                                  pt = ut ? 0 : parseFloat(Qr(at)["border" + W.p2 + "Width"]) || 0,
                                  mt = this,
                                  gt =
                                      e.onRefreshInit &&
                                      function () {
                                          return e.onRefreshInit(mt);
                                      },
                                  vt = (function (t, e, i) {
                                      var n = i.d,
                                          r = i.d2,
                                          o = i.a;
                                      return (o = Mr(t, "getBoundingClientRect"))
                                          ? function () {
                                                return o()[n];
                                            }
                                          : function () {
                                                return (e ? Jn["inner" + r] : t["client" + r]) || 0;
                                            };
                                  })(at, ut, W),
                                  Dt = (function (t, e) {
                                      return !e || ~Er.indexOf(t)
                                          ? Lr(t)
                                          : function () {
                                                return Ro;
                                            };
                                  })(at, ut);
                              (mt.media = _r),
                                  (tt *= 45),
                                  ho.push(mt),
                                  (mt.scroller = at),
                                  (mt.scroll = Rr(at, W)),
                                  (a = mt.scroll()),
                                  (mt.vars = e),
                                  (i = i || e.animation),
                                  "refreshPriority" in e && (Dr = 1),
                                  (lt.tweenScroll = lt.tweenScroll || { top: Io(at, Gr), left: Io(at, Kr) }),
                                  (mt.tweenTo = n = lt.tweenScroll[W.p]),
                                  i &&
                                      ((i.vars.lazy = !1),
                                      i._initted || (!1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0)),
                                      (mt.animation = i.pause()),
                                      (i.scrollTrigger = mt),
                                      (B = Wr(K) && K) &&
                                          (P = Qn.to(i, {
                                              ease: "power3",
                                              duration: B,
                                              onComplete: function () {
                                                  return et && et(mt);
                                              },
                                          })),
                                      (O = 0),
                                      X || (X = i.vars.id)),
                                  rt &&
                                      (Nr(rt) || (rt = { snapTo: rt }),
                                      "scrollBehavior" in ir.style && Qn.set(ut ? [ir, er] : at, { scrollBehavior: "auto" }),
                                      (o = Hr(rt.snapTo)
                                          ? rt.snapTo
                                          : "labels" === rt.snapTo
                                          ? (function (t) {
                                                return function (e) {
                                                    return Qn.utils.snap(eo(t), e);
                                                };
                                            })(i)
                                          : "labelsDirectional" === rt.snapTo
                                          ? ((I = i),
                                            function (t, e) {
                                                var i,
                                                    n = eo(I);
                                                if (
                                                    (n.sort(function (t, e) {
                                                        return t - e;
                                                    }),
                                                    e.direction > 0)
                                                ) {
                                                    for (i = 0; i < n.length; i++) if (n[i] >= t) return n[i];
                                                    return n.pop();
                                                }
                                                for (i = n.length; i--; ) if (n[i] <= t) return n[i];
                                                return n[0];
                                            })
                                          : Qn.utils.snap(rt.snapTo)),
                                      (M = rt.duration || { min: 0.1, max: 2 }),
                                      (M = Nr(M) ? lr(M.min, M.max) : lr(M, M)),
                                      (R = Qn.delayedCall(rt.delay || B / 2 || 0.1, function () {
                                          if (Math.abs(mt.getVelocity()) < 10 && !fr) {
                                              var t = i && !st ? i.totalProgress() : mt.progress,
                                                  e = ((t - S) / (Tr() - ur)) * 1e3 || 0,
                                                  r = (Xr(e / 2) * e) / 0.185,
                                                  s = t + r,
                                                  a = lr(0, 1, o(s, mt)),
                                                  l = mt.scroll(),
                                                  h = Math.round(u + a * g),
                                                  f = n.tween;
                                              if (l <= c && l >= u && h !== l) {
                                                  if (f && !f._initted && f.data <= Math.abs(h - l)) return;
                                                  n(
                                                      h,
                                                      {
                                                          duration: M(Xr((0.185 * Math.max(Xr(s - t), Xr(a - t))) / e / 0.05 || 0)),
                                                          ease: rt.ease || "power3",
                                                          data: Math.abs(h - l),
                                                          onComplete: function () {
                                                              (O = S = i && !st ? i.totalProgress() : mt.progress), it && it(mt);
                                                          },
                                                      },
                                                      l,
                                                      r * g,
                                                      h - l - r * g
                                                  );
                                              }
                                          } else mt.isActive && R.restart(!0);
                                      }).pause())),
                                  X && (fo[X] = mt),
                                  (G = mt.trigger = ar(G || Q)[0]),
                                  (Q = !0 === Q ? G : ar(Q)[0]),
                                  Ir(q) && (q = { targets: G, className: q }),
                                  Q &&
                                      (!1 === Z || "margin" === Z || (Z = !(!Z && "flex" === Qr(Q.parentNode).display) && Vr),
                                      (mt.pin = Q),
                                      !1 !== e.force3D && Qn.set(Q, { force3D: !0 }),
                                      (r = Qn.core.getCache(Q)).spacer ? (v = r.pinState) : ((r.spacer = b = tr.createElement("div")), b.setAttribute("class", "pin-spacer" + (X ? " pin-spacer-" + X : "")), (r.pinState = v = Mo(Q))),
                                      (mt.spacer = b = r.spacer),
                                      (A = Qr(Q)),
                                      (k = A[Z + W.os2]),
                                      (_ = Qn.getProperty(Q)),
                                      (x = Qn.quickSetter(Q, W.a, Ur)),
                                      So(Q, b, A),
                                      (y = Mo(Q))),
                                  dt &&
                                      ((m = Nr(dt) ? Zr(dt, oo) : oo),
                                      (d = uo("scroller-start", X, at, W, m, 0)),
                                      (p = uo("scroller-end", X, at, W, m, 0, d)),
                                      (w = d["offset" + W.op.d2]),
                                      (h = uo("start", X, at, W, m, w)),
                                      (f = uo("end", X, at, W, m, w)),
                                      ct ||
                                          (((H = ut ? ir : at).style.position = "absolute" === Qr(H).position ? "absolute" : "relative"),
                                          Qn.set([d, p], { force3D: !0 }),
                                          ($ = Qn.quickSetter(d, W.a, Ur)),
                                          (F = Qn.quickSetter(p, W.a, Ur)))),
                                  (mt.revert = function (t) {
                                      var e = !1 !== t || !mt.enabled,
                                          n = hr;
                                      e !== s &&
                                          (e && ((j = Math.max(mt.scroll(), mt.scroll.rec || 0)), (L = mt.progress), (z = i && i.progress())),
                                          h &&
                                              [h, f, d, p].forEach(function (t) {
                                                  return (t.style.display = e ? "none" : "block");
                                              }),
                                          e && (hr = 1),
                                          mt.update(e),
                                          (hr = n),
                                          Q &&
                                              (e
                                                  ? (function (t, e, i) {
                                                        if ((Bo(i), t.parentNode === e)) {
                                                            var n = e.parentNode;
                                                            n && (n.insertBefore(t, e), n.removeChild(e));
                                                        }
                                                    })(Q, b, v)
                                                  : (!ot || !mt.isActive) && So(Q, b, Qr(Q), T)),
                                          (s = e));
                                  }),
                                  (mt.refresh = function (n) {
                                      if (!hr && mt.enabled)
                                          if (Q && n && Fr) no(t, "scrollEnd", wo);
                                          else {
                                              (hr = 1), P && P.pause(), J && i && i.progress(0).invalidate(), s || mt.revert();
                                              for (
                                                  var r,
                                                      o,
                                                      m,
                                                      w,
                                                      x,
                                                      k,
                                                      $,
                                                      F,
                                                      A,
                                                      O = vt(),
                                                      S = Dt(),
                                                      B = jr(at, W),
                                                      M = 0,
                                                      R = 0,
                                                      I = e.end,
                                                      H = e.endTrigger || G,
                                                      N = e.start || (0 !== e.start && G ? (Q ? "0 0" : "0 100%") : 0),
                                                      Y = (G && Math.max(0, ho.indexOf(mt))) || 0,
                                                      q = Y;
                                                  q--;

                                              )
                                                  ($ = ho[q].pin) && ($ === G || $ === Q) && ho[q].revert();
                                              for (
                                                  u = Lo(N, G, O, W, mt.scroll(), h, d, mt, S, pt, ct, B) || (Q ? -0.001 : 0),
                                                      Hr(I) && (I = I(mt)),
                                                      Ir(I) && !I.indexOf("+=") && (~I.indexOf(" ") ? (I = (Ir(N) ? N.split(" ")[0] : "") + I) : ((M = lo(I.substr(2), O)), (I = Ir(N) ? N : u + M), (H = G))),
                                                      c = Math.max(u, Lo(I || (H ? "100% 0" : B), H, O, W, mt.scroll() + M, f, p, mt, S, pt, ct, B)) || -0.001,
                                                      g = c - u || ((u -= 0.01) && 0.001),
                                                      M = 0,
                                                      q = Y;
                                                  q--;

                                              )
                                                  ($ = (k = ho[q]).pin) && k.start - k._pinPush < u && ((r = k.end - k.start), $ === G && (M += r), $ === Q && (R += r));
                                              if (((u += M), (c += M), (mt._pinPush = R), h && M && (((r = {})[W.a] = "+=" + M), Qn.set([h, f], r)), Q))
                                                  (r = Qr(Q)),
                                                      (w = W === Gr),
                                                      (m = mt.scroll()),
                                                      (C = parseFloat(_(W.a)) + R),
                                                      !B && c > 1 && ((ut ? ir : at).style["overflow-" + W.a] = "scroll"),
                                                      So(Q, b, r),
                                                      (y = Mo(Q)),
                                                      (o = Jr(Q, !0)),
                                                      (F = ct && Rr(at, w ? Kr : Gr)()),
                                                      Z && (((T = [Z + W.os2, g + R + Ur]).t = b), (q = Z === Vr ? to(Q, W) + g + R : 0) && T.push(W.d, q + Ur), Bo(T), ct && mt.scroll(j)),
                                                      ct &&
                                                          (((x = { top: o.top + (w ? m - u : F) + Ur, left: o.left + (w ? F : m - u) + Ur, boxSizing: "border-box", position: "fixed" }).width = x.maxWidth = Math.ceil(o.width) + Ur),
                                                          (x.height = x.maxHeight = Math.ceil(o.height) + Ur),
                                                          (x.margin = x.marginTop = x.marginRight = x.marginBottom = x.marginLeft = "0"),
                                                          (x.padding = r.padding),
                                                          (x.paddingTop = r.paddingTop),
                                                          (x.paddingRight = r.paddingRight),
                                                          (x.paddingBottom = r.paddingBottom),
                                                          (x.paddingLeft = r.paddingLeft),
                                                          (D = (function (t, e, i) {
                                                              for (var n, r = [], o = t.length, s = i ? 8 : 0; s < o; s += 2) (n = t[s]), r.push(n, n in e ? e[n] : t[s + 1]);
                                                              return (r.t = t.t), r;
                                                          })(v, x, ot))),
                                                      i ? ((A = i._initted), yr(1), i.progress(1, !0), (E = _(W.a) - C + g + R), g !== E && D.splice(D.length - 2, 2), i.progress(0, !0), A || i.invalidate(), yr(0)) : (E = g);
                                              else if (G && mt.scroll()) for (o = G.parentNode; o && o !== ir; ) o._pinOffset && ((u -= o._pinOffset), (c -= o._pinOffset)), (o = o.parentNode);
                                              for (q = 0; q < Y; q++) (k = ho[q].pin) && (k === G || k === Q) && ho[q].revert(!1);
                                              (mt.start = u),
                                                  (mt.end = c),
                                                  (a = l = mt.scroll()) < j && mt.scroll(j),
                                                  mt.revert(!1),
                                                  (hr = 0),
                                                  i && st && i._initted && i.progress(z, !0).render(i.time(), !0, !0),
                                                  L !== mt.progress && (P && i.totalProgress(L, !0), (mt.progress = L), mt.update()),
                                                  Q && Z && (b._pinOffset = Math.round(mt.progress * E)),
                                                  U && U(mt);
                                          }
                                  }),
                                  (mt.getVelocity = function () {
                                      return ((mt.scroll() - l) / (Tr() - ur)) * 1e3 || 0;
                                  }),
                                  (mt.update = function (t, e) {
                                      var r,
                                          o,
                                          s,
                                          h,
                                          f,
                                          p = mt.scroll(),
                                          m = t ? 0 : (p - u) / g,
                                          v = m < 0 ? 0 : m > 1 ? 1 : m || 0,
                                          w = mt.progress;
                                      if (
                                          (e && ((l = a), (a = p), rt && ((S = O), (O = i && !st ? i.totalProgress() : v))), tt && !v && Q && !hr && !Cr && Fr && u < p + ((p - l) / (Tr() - ur)) * tt && (v = 1e-4), v !== w && mt.enabled)
                                      ) {
                                          if (
                                              ((h = (f = (r = mt.isActive = !!v && v < 1) !== (!!w && w < 1)) || !!v != !!w),
                                              (mt.direction = v > w ? 1 : -1),
                                              (mt.progress = v),
                                              st || (!P || hr || Cr ? i && i.totalProgress(v, !!hr) : ((P.vars.totalProgress = v), P.invalidate().restart())),
                                              Q)
                                          )
                                              if ((t && Z && (b.style[Z + W.os2] = k), ct)) {
                                                  if (h) {
                                                      if (((s = !t && v > w && c + 1 > p && p + 1 >= jr(at, W)), ot))
                                                          if (t || (!r && !s)) zo(Q, b);
                                                          else {
                                                              var _ = Jr(Q, !0),
                                                                  T = p - u;
                                                              zo(Q, ir, _.top + (W === Gr ? T : 0) + Ur, _.left + (W === Gr ? 0 : T) + Ur);
                                                          }
                                                      Bo(r || s ? D : y), (E !== g && v < 1 && r) || x(C + (1 !== v || s ? 0 : E));
                                                  }
                                              } else x(C + E * v);
                                          rt && !n.tween && !hr && !Cr && R.restart(!0),
                                              q &&
                                                  (f || (nt && v && (v < 1 || !wr))) &&
                                                  ar(q.targets).forEach(function (t) {
                                                      return t.classList[r || nt ? "add" : "remove"](q.className);
                                                  }),
                                              Y && !st && !t && Y(mt),
                                              h && !hr
                                                  ? ((o = v && !w ? 0 : 1 === v ? 1 : 1 === w ? 2 : 3),
                                                    st &&
                                                        ((s = (!f && "none" !== ft[o + 1] && ft[o + 1]) || ft[o]),
                                                        i && ("complete" === s || "reset" === s || s in i) && ("complete" === s ? i.pause().totalProgress(1) : "reset" === s ? i.restart(!0).pause() : i[s]()),
                                                        Y && Y(mt)),
                                                    (!f && wr) || (V && f && V(mt), ht[o] && ht[o](mt), nt && (1 === v ? mt.kill(!1, 1) : (ht[o] = 0)), f || (ht[(o = 1 === v ? 1 : 3)] && ht[o](mt))))
                                                  : st && Y && !hr && Y(mt);
                                      }
                                      F && ($(p + (d._isFlipped ? 1 : 0)), F(p));
                                  }),
                                  (mt.enable = function () {
                                      mt.enabled ||
                                          ((mt.enabled = !0),
                                          no(at, "resize", go),
                                          no(at, "scroll", mo),
                                          gt && no(t, "refreshInit", gt),
                                          i && i.add
                                              ? Qn.delayedCall(0.01, function () {
                                                    return u || c || mt.refresh();
                                                }) &&
                                                (g = 0.01) &&
                                                (u = c = 0)
                                              : mt.refresh());
                                  }),
                                  (mt.disable = function (e, i) {
                                      if (
                                          mt.enabled &&
                                          (!1 !== e && mt.revert(),
                                          (mt.enabled = mt.isActive = !1),
                                          i || (P && P.pause()),
                                          (j = 0),
                                          r && (r.uncache = 1),
                                          gt && ro(t, "refreshInit", gt),
                                          R && (R.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                                          !ut)
                                      ) {
                                          for (var o = ho.length; o--; ) if (ho[o].scroller === at && ho[o] !== mt) return;
                                          ro(at, "resize", go), ro(at, "scroll", mo);
                                      }
                                  }),
                                  (mt.kill = function (t, e) {
                                      mt.disable(t, e), X && delete fo[X];
                                      var n = ho.indexOf(mt);
                                      ho.splice(n, 1),
                                          n === pr && $o > 0 && pr--,
                                          i && ((i.scrollTrigger = null), t && i.render(-1), e || i.kill()),
                                          h &&
                                              [h, f, d, p].forEach(function (t) {
                                                  return t.parentNode.removeChild(t);
                                              }),
                                          Q &&
                                              (r && (r.uncache = 1),
                                              (n = 0),
                                              ho.forEach(function (t) {
                                                  return t.pin === Q && n++;
                                              }),
                                              n || (r.spacer = 0));
                                  }),
                                  mt.enable();
                          } else this.update = this.refresh = this.kill = Or;
                      },
                  },
              ]) && Kn(e.prototype, i),
              n && Kn(e, n),
              t
          );
      })();
      (Ho.version = "3.6.0"),
          (Ho.saveStyles = function (t) {
              return t
                  ? ar(t).forEach(function (t) {
                        if (t && t.style) {
                            var e = xo.indexOf(t);
                            e >= 0 && xo.splice(e, 4), xo.push(t, t.style.cssText, Qn.core.getCache(t), _r);
                        }
                    })
                  : xo;
          }),
          (Ho.revert = function (t, e) {
              return Eo(!t, e);
          }),
          (Ho.create = function (t, e) {
              return new Ho(t, e);
          }),
          (Ho.refresh = function (t) {
              return t ? go() : ko(!0);
          }),
          (Ho.update = Fo),
          (Ho.maxScroll = function (t, e) {
              return jr(t, e ? Kr : Gr);
          }),
          (Ho.getScrollFunc = function (t, e) {
              return Rr(ar(t)[0], e ? Kr : Gr);
          }),
          (Ho.getById = function (t) {
              return fo[t];
          }),
          (Ho.getAll = function () {
              return ho.slice(0);
          }),
          (Ho.isScrolling = function () {
              return !!Fr;
          }),
          (Ho.addEventListener = function (t, e) {
              var i = vo[t] || (vo[t] = []);
              ~i.indexOf(e) || i.push(e);
          }),
          (Ho.removeEventListener = function (t, e) {
              var i = vo[t],
                  n = i && i.indexOf(e);
              n >= 0 && i.splice(n, 1);
          }),
          (Ho.batch = function (t, e) {
              var i,
                  n = [],
                  r = {},
                  o = e.interval || 0.016,
                  s = e.batchMax || 1e9,
                  a = function (t, e) {
                      var i = [],
                          n = [],
                          r = Qn.delayedCall(o, function () {
                              e(i, n), (i = []), (n = []);
                          }).pause();
                      return function (t) {
                          i.length || r.restart(!0), i.push(t.trigger), n.push(t), s <= i.length && r.progress(1);
                      };
                  };
              for (i in e) r[i] = "on" === i.substr(0, 2) && Hr(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
              return (
                  Hr(s) &&
                      ((s = s()),
                      no(Ho, "refresh", function () {
                          return (s = e.batchMax());
                      })),
                  ar(t).forEach(function (t) {
                      var e = {};
                      for (i in r) e[i] = r[i];
                      (e.trigger = t), n.push(Ho.create(e));
                  }),
                  n
              );
          }),
          (Ho.sort = function (t) {
              return ho.sort(
                  t ||
                      function (t, e) {
                          return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
                      }
              );
          }),
          Pr() && Qn.registerPlugin(Ho);
      var Wo = i(3);
      i(5), Vn.registerPlugin(Ho, Un.SplitText);
      var No,
          Yo = 1024;
      function qo() {
          function t() {
              $("body").attr("data-scroll", "-1");
          }
          function e() {
              $("body").removeClass("is-loading");
          }
          function i() {
              $(".loading").remove(),
                  Xo(),
                  (function () {
                      var t = $(".cookie-texts").attr("data-title"),
                          e = $(".cookie-texts").attr("data-message"),
                          i = $(".cookie-texts").attr("data-link"),
                          n = $(".cookie-texts").attr("data-button"),
                          r = $(".cookie-texts").attr("data-more"),
                          o = $(".cookie-texts").attr("data-cookie"),
                          s = {
                              title: t,
                              message: e,
                              delay: 2e3,
                              expires: 1,
                              link: i,
                              onAccept: function () {
                                  $.fn.ihavecookies.cookie();
                              },
                              uncheckBoxes: !0,
                              acceptBtnLabel: n,
                              moreInfoLabel: r,
                              cookieTypesTitle: o,
                              fixedCookieTypeLabel: "Essential (default)",
                              fixedCookieTypeDesc: "These are essential for the website to work correctly.",
                          };
                      $("body").ihavecookies(s), $.fn.ihavecookies.preference("marketing");
                      $("#ihavecookiesBtn").on("click", function () {
                          $("body").ihavecookies(s, "reinit");
                      }),
                          $("#gdpr-cookie-types .text-link").on("click", function () {
                              return console.log("console "), !1;
                          });
                  })(),
                  $(".header-under").addClass("blurit");
          }
          $(".loading .aw_logo").each(function () {
              Vn.timeline()
                  .set($(this), { visibility: "visible" })
                  .set($(this).find("#angle1, #angle2, #angle3"), { visibility: "hidden" })
                  .from($(this).find("#line1, #line2, #line3"), { scaleY: 0, y: -8, transformOrigin: "top", duration: 0.6, ease: "back.out(1.5)", stagger: 0.1, onStart: t }, "+=0.5")
                  .set($(this).find("#angle1, #angle2, #angle3"), { visibility: "visible" })
                  .from($(this).find("#angle1"), { skewX: 10, x: 6.5, transformOrigin: "top", duration: 0.4, ease: "back.out(1.5)", stagger: 0.1 }, "-=0")
                  .fromTo($(this).find("#angle2, #angle3"), { skewX: 10, x: -12.5 }, { skewX: 0, x: -6.5, transformOrigin: "bottom", duration: 0.4, ease: "back.out(1.5)", stagger: 0.2 }, "-=0.3")
                  .from($(this), { x: -6.5, duration: 0.4, ease: "back.out(1.5)" }, "-=.7")
                  .to($(this), { scale: 0.95, duration: 0.5 }, "+=0.85")
                  .to($(this), { autoAlpha: 0, duration: 0.3, onComplete: e }, "-=0.3")
                  .to($(".loading"), { scaleX: 0, transformOrigin: "right", ease: "power1.inOut", duration: 1, onComplete: i }, "-=0")
                  .set("body", { overflow: "inherit" });
          });
      }
      function Xo() {
          window.matchMedia("(pointer: coarse)").matches ||
              ($(window).width() > Yo &&
                  ($("section:not(.noanim) h1, section:not(.noanim) h2, section:not(.noanim) h3, section:not(.noanim) .anim-title").length > 0 &&
                      Vn.utils.toArray("section:not(.noanim) h1, section:not(.noanim) h2, section:not(.noanim) h3, section:not(.noanim) .anim-title").forEach(function (t) {
                          var e = new Un.SplitText(t, { type: "words, lines", linesClass: "title-line" });
                          Vn.set(t, { visibility: "visible" }, "-=0"),
                              Vn.from(e.words, { scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 }, duration: 0.8, yPercent: 100, ease: "expo.out", autoAlpha: 0.5, stagger: 0.07 }, "-=0");
                      }),
                  $("section:not(.noanim) h5, section:not(.noanim) h4, section:not(.noanim) .anim-lines").length > 0 &&
                      Vn.utils.toArray("section:not(.noanim) h5, section:not(.noanim) h4, section:not(.noanim) .anim-lines").forEach(function (t) {
                          var e = new Un.SplitText(t, { type: "words, lines", linesClass: "title-line" });
                          Vn.set(t, { visibility: "visible" }, "-=0"),
                              Vn.from(e.lines, { scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 }, duration: 0.85, yPercent: 80, ease: "power4.out", autoAlpha: 0, stagger: 0.1 }, "-=0");
                      }),
                  $("section:not(.noanim) .anim-letters").length > 0 &&
                      Vn.utils.toArray("section:not(.noanim) .anim-letters").forEach(function (t) {
                          var e = t.getAttribute("data-number") / 2;
                          Vn.set(t, { visibility: "visible" }, "-=0"),
                              Vn.from(
                                  t,
                                  { scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 }, innerText: e, snap: { innerText: 1 }, autoAlpha: 0, duration: 1.5, ease: "expo.out", stagger: 0.1, yPercent: 130 },
                                  "-=0"
                              );
                      }))),
              (function () {
                  if (
                      ($(window).width() > Yo &&
                          $("section.bg-dark.anim-bg").length > 0 &&
                          $("section.bg-dark.anim-bg").each(function () {
                              var t = $(this);
                              Vn.timeline({ scrollTrigger: { trigger: t, start: "top 80%", scrub: !1, invalidateOnResize: !0 } }).to(t, { "background-color": "#111111", ease: "power1.out", duration: 0.25 });
                          }),
                      $("#caseStudyContent").length > 0 && $("#caseStudyContent > section").first().addClass("samegap"),
                      $(".testimonials-scroll-item").length > 0 &&
                          $(".testimonials-scroll-item").each(function () {
                              var t = $(this);
                              t.outerHeight();
                              Vn.timeline({ scrollTrigger: { trigger: t, start: "top 100%", end: "bottom 50%", scrub: !0, invalidateOnResize: !0 } }).from(t, { scale: 0.8, ease: "power0.inOut" });
                          }),
                      $("#load-more").length > 0)
                  )
                      if ($("#gridFilterContainer").attr("data-articles") >= 6) {
                          var t,
                              e = function () {
                                  $("#load-more").addClass("is-loading");
                                  var e = $("#load-more").attr("data-cat");
                                  i++,
                                      $.ajax({
                                          type: "POST",
                                          url: "/wp-admin/admin-ajax.php",
                                          dataType: "json",
                                          data: { action: "posts_load_more", paged: i, cat: e },
                                          success: function (e) {
                                              setTimeout(function () {
                                                  i >= e.max &&
                                                      ($("#load-more").remove(),
                                                      Ho.addEventListener("refresh", function () {
                                                          return No.update();
                                                      }),
                                                      Ho.refresh(),
                                                      $("#load-more").removeClass("is-loading"),
                                                      t.kill(),
                                                      $(".load-more-msg").addClass("done")),
                                                      $(".grid-archive").append(e.html),
                                                      $("#load-more").removeClass("is-loading"),
                                                      Ho.addEventListener("refresh", function () {
                                                          return No.update();
                                                      }),
                                                      Ho.refresh(),
                                                      Ko();
                                              }, 1e3);
                                          },
                                      });
                              },
                              i = 1;
                          $("#load-more").each(function () {
                              t = Vn.timeline({ scrollTrigger: { trigger: "#load-more", start: "top 60%", end: "top 60%", invalidateOnResize: !0, onEnter: e } });
                          });
                      } else $("#load-more").removeClass("is-loading"), $(".load-more-msg").addClass("done");
                  if (
                      ($("section.next-project").length > 0 &&
                          $("section.next-project").each(function () {
                              var t = $(this);
                              Vn.timeline({ scrollTrigger: { trigger: t, start: "50% 100%", invalidateOnResize: !0, toggleClass: { targets: ".header-item, .header-under", className: "hideit-hard" } } });
                          }),
                      $("#page").length > 0 &&
                          $("#page").each(function () {
                              var t = $(window).height(),
                                  e = ($("#page").height(), $("#page"));
                              Vn.timeline({ scrollTrigger: { trigger: e, start: "0% 0%", invalidateOnResize: !0, toggleClass: { targets: ".header-item, .header-under, .hide-on-scroll", className: "hideit" } } });
                          }),
                      $(".projects-over").length > 0 &&
                          $(".projects-over").each(function () {
                              var t = $(window).height(),
                                  e = ($(".projects-over").height(), $(".projects-over"));
                              Vn.timeline({ scrollTrigger: { trigger: e, start: "0% 0%", invalidateOnResize: !0, toggleClass: { targets: ".btn-filters-sticky", className: "hideit" } } });
                          }),
                      $("body").each(function () {
                          var t = $(this);
                          Ho.create({
                              trigger: t,
                              start: "100px 0%",
                              end: "100% 0%",
                              onUpdate: function (t) {
                                  return $("body").attr("data-scroll", t.direction);
                              },
                              scrub: !0,
                              invalidateOnResize: !0,
                          });
                      }),
                      $(".running-text").length > 0 &&
                          $(".running-text").each(function () {
                              var t = $(this).find(".running-text-inner").outerWidth() - $(this).width(),
                                  e = $(this);
                              Vn.timeline({ scrollTrigger: { trigger: e, start: "top 100%", end: "bottom 0%", scrub: !0, invalidateOnResize: !0 } }).to(e.find(".running-text-inner"), { x: -t, ease: "power0.inOut" });
                          }),
                      $(".progress").length > 0 &&
                          $(".progress").each(function () {
                              var t = $("#hasProgress"),
                                  e = (t.height(), $(this).find(".progress-line"));
                              Vn.to(e, { autoAlpha: 1, duration: 1 }), Vn.timeline({ scrollTrigger: { trigger: t, start: "top 0%", end: "bottom 100%", scrub: !0, invalidateOnResize: !0 } }).from(e, { scaleX: 0 });
                              var i = $(".hide-progress");
                              Vn.timeline({ scrollTrigger: { trigger: i, start: "top 100%", end: "bottom 90%", scrub: !0, invalidateOnResize: !0 } }).to(".progress", { yPercent: 100 });
                          }),
                      $(".hero.bg-dark:first-child").length > 0)
                  ) {
                      var n = $(".hero.bg-dark:first-child");
                      Vn.timeline({ scrollTrigger: { trigger: n, start: "100% 100px", end: "100% 0%", scrub: !0, invalidateOnResize: !0 } })
                          .fromTo(".site-logo svg > *", { fill: "white" }, { fill: "#111", duration: 1 }, "-=0")
                          .fromTo(".site-nav .btn .value", { color: "white" }, { color: "#111", duration: 1 }, "-=1")
                          .fromTo(".site-nav .btn .line", { backgroundColor: "white" }, { backgroundColor: "#111", duration: 1 }, "-=1")
                          .fromTo(".header-under", { backgroundColor: "rgba(255,255,255,0)" }, { backgroundColor: "rgba(255, 255, 255, 0.7)", duration: 1 }, "-=1");
                  }
                  window.matchMedia("(pointer: coarse)").matches ||
                      ($(window).width() > Yo &&
                          ($(".pin-wrap").length > 0 &&
                              $(".pin-wrap").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 80%", invalidateOnResize: !0 } }).from(
                                      t.find(".box-case:nth-child(1), .box-case:nth-child(2), .box-case:nth-child(3)"),
                                      { xPercent: 30, autoAlpha: 0, ease: "power2.out", duration: 0.7, stagger: 0.085 },
                                      "-=0"
                                  );
                              }),
                          $(".anim-list").length > 0 &&
                              $(".anim-list").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 } })
                                      .from(t.find("p"), { yPercent: 100, autoAlpha: 0, ease: "expo.out", duration: 0.7 }, "-=0")
                                      .from(t.find("ul li"), { yPercent: 100, autoAlpha: 0, stagger: 0.1, duration: 0.7 }, "-=0.7");
                              }),
                          $(".anim-element").length > 0 &&
                              $(".anim-element").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 100%", invalidateOnResize: !0 } }).from(t, { y: 40, autoAlpha: 0, stagger: 0.1, duration: 0.5 }, "-=0");
                              }),
                          $(".anim-list-items").length > 0 &&
                              $(".anim-list-items").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 } }).from(t.find(".anim-item, .wpcf7-list-item"), { y: 40, autoAlpha: 0, stagger: 0.1, duration: 0.5 }, "-=0");
                              }),
                          $(".anim-image").length > 0 &&
                              $(".anim-image").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 100%", invalidateOnResize: !0 } }).from(t, { y: 40, autoAlpha: 0, ease: "expot.out", duration: 0.7 }, "-=0");
                              }),
                          $(".box-banner-over").length > 0 &&
                              $(".box-banner-over").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 90%", invalidateOnResize: !0 } })
                                      .set(t.find(".box-banner"), { visibility: "visible" })
                                      .from(t.find(".box-banner"), { yPercent: -100.5, ease: "power4.inOut", duration: 1 }, "-=0")
                                      .from(t.find(".box-banner .box-banner-item, .separator"), { y: -15, autoAlpha: 0, ease: "expo.out", duration: 0.7, stagger: 0.1 }, "-=0.25");
                              }),
                          $(".testimonials-scroll").length > 0 &&
                              $(".testimonials-scroll").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "100px 100%", end: "200px", scrub: !0, invalidateOnResize: !0 } }).to(t.parent().find(".section-header"), { scale: 0.9, ease: "power0.inOut" });
                              }),
                          $(".sticky-over").length > 0 &&
                              $(".sticky-over").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 50%", end: "bottom 50%", scrub: !0, invalidateOnResize: !0 } }).from(t.find(".custom-scroll-el-scroller"), {
                                      height: 0,
                                      transformOrigin: "top",
                                      ease: "power0.inOut",
                                  });
                              }),
                          $(".process-item").length > 0 &&
                              ($(".process-item").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 50%", end: "bottom 50%", invalidateOnResize: !0 } })
                                      .from(t.find(".process-side .process-side-sticky > *"), { x: -30, autoAlpha: 0, transformOrigin: "top", ease: "power4.out", stagger: 0.1, duration: 0.6 }, "-=0")
                                      .from(t.find(".process-content"), { y: 30, autoAlpha: 0, transformOrigin: "top", ease: "power1.out", duration: 0.4 }, "-=0.6");
                              }),
                              $(".process-item .process-content *").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 85%", end: "120% 85%", scrub: !0, invalidateOnResize: !0 } }).from(
                                      t,
                                      { y: 10, autoAlpha: 0, transformOrigin: "top", scale: 0.98, ease: "power1.inOut", duration: 0.6 },
                                      "-=0"
                                  );
                              })),
                          $(".scroll-sticky-element").length > 0 &&
                              $(".scroll-sticky-element").each(function () {
                                  var t = $(this);
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 60%", end: "bottom 40%", scrub: !0, invalidateOnResize: !0 } }).to(t, { autoAlpha: 0 });
                              }),
                          $(".grid-connection-over").length > 0 &&
                              $(".grid-connection-over").each(function () {
                                  var t = $(this);
                                  $(this).find(".item1").width();
                                  Vn.timeline({ scrollTrigger: { trigger: t, start: "top 50%", end: "100% 100%", scrub: !0, invalidateOnResize: !0 } })
                                      .from(t.find(".item4"), { xPercent: 100, yPercent: -100, duration: 1 }, "-=0")
                                      .from(t.find(".item6"), { xPercent: -150, yPercent: -90, rotation: -10, scale: 0.9, duration: 1 }, "-=1")
                                      .from(t.find(".item7"), { xPercent: 150, yPercent: -190, rotation: 10, scale: 0.9, duration: 1 }, "-=1")
                                      .from(t.find(".item9"), { xPercent: -200, yPercent: -165, rotation: -20, scale: 0.8, duration: 1 }, "-=1")
                                      .from(t.find(".item8"), { xPercent: 100, yPercent: -165, rotation: 20, scale: 0.8, duration: 1 }, "-=1")
                                      .from(t.find(".item1"), { xPercent: 240, yPercent: 60, rotation: 30, scale: 0.7, duration: 1 }, "-=1")
                                      .from(t.find(".item3"), { xPercent: -240, yPercent: 60, rotation: -30, scale: 0.7, duration: 1 }, "-=1")
                                      .from(t.find(".item2"), { xPercent: -140, yPercent: 60, rotation: -30, scale: 0.7, duration: 1 }, "-=1")
                                      .from(t.find(".itemText"), { scale: 0, opacity: 0, duration: 1 }, "-=1")
                                      .from(t.find(".grid-connection"), { "column-gap": "0", "row-gap": "0", duration: 1 }, "-=1")
                                      .from(t.find(".grid-connection .image-box"), { "box-shadow": "0 0 40px #111", scale: 1.3, duration: 1 }, "-=1")
                                      .from(t.find(".grid-item .label"), { autoAlpha: 0, duration: 1, ease: "power0.inOut" }, "-=1");
                              })),
                      Ho.addEventListener("refresh", function () {
                          return No.update();
                      }),
                      Ho.refresh());
              })();
      }
      function Vo() {
          $(window).width() > 1025 &&
              $("[data-section-horizontal]").length > 0 &&
              ($("[data-section-horizontal]").each(function () {
                  $(window).width();
                  var t = $(this).find(".pin-wrap"),
                      e = $(this).find(".pin-wrap > .box"),
                      i = 0;
                  e.each(function () {
                      i += $(this).outerWidth(!0);
                  });
                  $(this).find(".pin-wrap > .box").length;
                  var n = i - $(window).width();
                  t.width(n);
              }),
              Ho.addEventListener("refresh", function () {
                  return No.update();
              }),
              Ho.refresh());
      }
      function Uo() {
          $("body").attr("data-device", "desktop"), window.matchMedia("(pointer: coarse)").matches && (!0, $("body").attr("data-device", "mobile"));
      }
      function Ko() {
          $(window).width() > 1025 &&
              $(".floating-link").length > 0 &&
              $(".floating-link").each(function () {
                  $(this).bind("mousemove", function (t) {
                      $(this).parent().addClass("is-hover");
                  }),
                      $(this).bind("mouseleave", function (t) {
                          $(this).parent().removeClass("is-hover");
                      }),
                      $(this).on("click", function (t) {
                          $(this).parent().removeClass("is-hover");
                      });
              });
      }
      r.a.use(s.a),
          r.a.init({
              timeout: 3e3,
              debug: !1,
              prevent: function (t) {
                  var e = t.el;
                  return e.classList && e.classList.contains("prevent") && $(window).width() > 767;
              },
              transitions: [
                  {
                      name: "aw-transition",
                      beforeLeave: function (t) {
                          t.current, t.next, t.trigger;
                          $(document).unbind();
                      },
                      leave: function (t) {
                          $("video[autoplay]").length > 0 &&
                              $("video[autoplay]").each(function () {
                                  $(this).get(0).pause();
                              }),
                              $(".video-box video").length > 0 &&
                                  $(".video-box video").each(function () {
                                      $(this).get(0).pause();
                                  });
                          var e = this.async();
                          Vn.set("body", { overflow: "hidden" }),
                              Vn.fromTo(".transition-overlay", { scaleX: 0, scaleY: 1 }, { scaleX: 1, transformOrigin: "left", duration: 0.7, ease: "power1.inOut" }),
                              Vn.fromTo("#primary", { opacity: 1 }, { opacity: 1, onComplete: e }, "-=0");
                      },
                      afterLeave: function (t, e, i) {
                          var n = t.next.html,
                              r = n.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", n),
                              o = $(r).filter("notbody").attr("class");
                          $("body").attr("class", o);
                      },
                      enter: function (t, e, i) {
                          if (($("body").removeClass("is-loading"), $(".btn-back").length > 0)) {
                              var n = t.current.url.href;
                              $(".btn-back").attr("href", n);
                          }
                      },
                      after: function (t, e, i) {
                          document.querySelectorAll(".wpcf7 > form").forEach(function (t) {
                              return wpcf7.init(t);
                          });
                          var n = this.async();
                          "single-case" == t.next.namespace ||
                              (Vn.fromTo(
                                  ".transition-overlay",
                                  { scaleX: 1 },
                                  {
                                      scaleY: 0,
                                      transformOrigin: "bottom",
                                      duration: 0.6,
                                      ease: "power1.inOut",
                                      onStart: function () {
                                          $(".main-navigation, .main-navigation-container, .navigation-overlay").attr("style", "");
                                      },
                                  },
                                  "+=0.2"
                              ),
                              Vn.fromTo(
                                  "#primary",
                                  { opacity: 1 },
                                  {
                                      opacity: 1,
                                      onStart: function () {
                                          $(".header-under").addClass("blurit"), Xo();
                                      },
                                      onComplete: n,
                                  },
                                  "-=0"
                              ),
                              Vn.set("body", { overflow: "inherit" }, "-=0")),
                              $("body, html").scrollTop(0),
                              Go(),
                              $(".header-item, .header-under").removeClass("hideit"),
                              $(".hide-on-scroll").length > 0 && $(".hide-on-scroll").removeClass("hideit"),
                              $(".btn-filters-sticky").length > 0 && $(".btn-filters-sticky").removeClass("hideit");
                      },
                      requestError: function (t) {
                          t.trigger;
                          var e = t.action,
                              i = (t.url, t.response);
                          return "click" === e && i.status && 404 === i.status && r.a.go("/404"), !1;
                      },
                  },
              ],
          });
      var Go = function () {
          !(function () {
              if ($(".btn-filters").length > 0) {
                  var t = window.location.href.split("#")[1];
                  null == t ||
                      setTimeout(function () {
                          $('[data-filter=".' + t + '"]').trigger("click");
                      }, 500);
              }
          })(),
              $(".hero.bg-dark:first-child").length > 0 && $("body").addClass("dark-header"),
              $(window).width() > Yo && $("section.bg-dark.anim-bg").length > 0 && $("section.bg-dark.anim-bg").css("background-color", "white"),
              Uo(),
              Ko(),
              (function () {
                  if ($(window).width() > 1025) {
                      window.matchMedia("(pointer: coarse)").matches
                          ? !0
                          : $(".next-project").length > 0 &&
                            $(".next-project-link").each(function () {
                                var t = $(".next-project").offset().top,
                                    e = $(this),
                                    i = $(".next-title .value-static").text(),
                                    n = $(".next-description .value-static").text(),
                                    o = $(".next-pretitle .value-static").text(),
                                    s = e.attr("data-next-title"),
                                    a = e.attr("data-next-description"),
                                    l = e.attr("data-next"),
                                    u = e.attr("data-next-image");
                                $(".next-project-preview > .first").attr("style", "background-image: url(" + u + ")");
                                var c = Vn.timeline({
                                    paused: !0,
                                    onReverseComplete: function () {
                                        $(".next-project-link").attr("data-state-next", 0);
                                    },
                                });
                                c.to(
                                    ".next-pretitle .value-static, .next-description .value-static, .next-title .value-static",
                                    {
                                        y: "100%",
                                        duration: 0.35,
                                        ease: "power2.in",
                                        onComplete: function () {
                                            $(".next-pretitle .value-static").text("Next project"), $(".next-title .value-static").text(s), $(".next-description .value-static").text(a);
                                        },
                                    },
                                    "-=0"
                                ).to(
                                    ".next-pretitle .value-static, .next-description .value-static, .next-title .value-static",
                                    {
                                        y: "0%",
                                        duration: 0.35,
                                        ease: "power2.out",
                                        onReverseComplete: function () {
                                            $(".next-pretitle .value-static").text(o), $(".next-title .value-static").text(i), $(".next-description .value-static").text(n);
                                        },
                                    },
                                    "-=0"
                                );
                                var h = Vn.timeline({ paused: !0 });
                                function f() {
                                    No.stop();
                                }
                                function d() {
                                    r.a.go(l);
                                }
                                h
                                    .to(".next-project-preview > .third", { y: "90%", duration: 0.6 }, "-=0")
                                    .to(".next-project-preview > .second", { y: "92.5%", duration: 0.6 }, "-=.6")
                                    .to(".next-project-preview > .first", { y: "95%", duration: 0.6 }, "-=.6")
                                    .to(".bg-section", { scale: 0.98, duration: 1, borderRadius: "32px 32px 0 0", ease: "expo.inOut", transformOrigin: "bottom" }, "-=0.35"),
                                    e.on("mouseenter", function () {
                                        "0" == e.attr("data-state-next") && ($(this).attr("data-state-next", 1), c.restart(), h.restart());
                                    }),
                                    e.on("mouseleave", function () {
                                        "1" == e.attr("data-state-next") && (c.timeScale(1.25).reverse(), h.timeScale(1.25).reverse());
                                    }),
                                    e.on("click", function () {
                                        return (
                                            $("video").remove(),
                                            No.scrollTo(t),
                                            e.off("mouseleave"),
                                            Vn.to($(".header-item, .header-under"), { autoAlpha: 0, duration: 0.1 }),
                                            Vn.timeline({ onStart: f, onComplete: d })
                                                .to(".next-pretitle .value-static, .next-description .value-static, .next-title .value-static", { y: "100%", duration: 0.35, ease: "power2.in" }, "-=0")
                                                .to(".next-project .group", { y: "30%", autoAlpha: 0, duration: 0.35, ease: "power2.in" }, "-=0.35")
                                                .to(".bg-section", { scale: 0.5, autoAlpha: 0, duration: 1.5, ease: "expo.inOut", transformOrigin: "bottom" }, "-=0.35")
                                                .to(".next-project-preview > .second, .next-project-preview > .third", { y: "100%", autoAlpha: 0, duration: 0.6, ease: "power2.out", stagger: -0.1 }, "-=1.5")
                                                .to(".next-project-preview > .first", { scale: 0.8, y: "0%", duration: 1.5, ease: "expo.inOut" }, "-=1"),
                                            !1
                                        );
                                    });
                            });
                  } else
                      $(".next-project").length > 0 &&
                          $(".next-project-link").each(function () {
                              $(this).on("click", function () {
                                  $("video").get(0).pause(), $("video").remove();
                              });
                          });
              })(),
              $(window).width() > Yo &&
                  setTimeout(function () {
                      if ($(".site-logo .aw_logo").length > 0) {
                          var t = $(".site-logo .aw_logo #logo"),
                              e = Vn.timeline({
                                  paused: !0,
                                  onStart: function () {
                                      $(".site-logo .aw_logo").attr("data-state", "1");
                                  },
                                  onComplete: function () {
                                      $(".site-logo .aw_logo").attr("data-state", "0");
                                  },
                              });
                          e
                              .to(t.find("#angle1"), { skewX: 10, x: 6.5, transformOrigin: "top", duration: 0.2, ease: "power1.in" }, "-=0")
                              .to(t.find("#angle2, #angle3"), { skewX: 10, x: -12.5, transformOrigin: "top", duration: 0.2, ease: "power1.in" }, "-=0.2")
                              .set(t.find("#angle1, #angle2, #angle3"), { visibility: "hidden" })
                              .to(t.find("#line1, #line2, #line3"), { scaleY: 0, y: -8, transformOrigin: "top", duration: 0.2, ease: "power1.in", stagger: 0.1 }, "+=0")
                              .to(t.find("#line1, #line2, #line3"), { scaleY: 1, y: 0, transformOrigin: "top", duration: 0.2, ease: "power1.out", stagger: 0.1 }, "+=0")
                              .set(t.find("#angle1, #angle2, #angle3"), { visibility: "visible" })
                              .to(t.find("#angle1"), { skewX: 0, x: 0, transformOrigin: "top", duration: 0.2, ease: "power1.out", stagger: 0.05 }, "-=0")
                              .to(t.find("#angle2, #angle3"), { skewX: 0, x: -5.9, transformOrigin: "bottom", duration: 0.2, ease: "power1.out", stagger: 0.05 }, "-=0.2"),
                              $(".site-logo .aw_logo").on("mouseenter", function () {
                                  "0" == $(".site-logo .aw_logo").attr("data-state") && e.restart();
                              });
                      }
                  }, 2e3),
              (function () {
                  if ($(".single-post article").length > 0) {
                      var t = "";
                      $(".text-cont").each(function () {
                          t += $(this).text();
                      });
                      var e = t.split(" ").length;
                      e <= 200 ? $(".reading-time").text("less than 1 min read") : $(".reading-time").text(Math.round(e / 200) + " min read");
                  }
              })(),
              (No = new Wo.a({ el: document.querySelector("[data-scroll-container]"), smooth: !0, getSpeed: !0, getDirection: !0, mobile: { smooth: !1 }, tablet: { smooth: !1 } })).on("scroll", Ho.update),
              Ho.scrollerProxy("[data-scroll-container]", {
                  scrollTop: function (t) {
                      return arguments.length ? No.scrollTo(t, 0, 0) : No.scroll.instance.scroll.y;
                  },
                  getBoundingClientRect: function () {
                      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                  },
                  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed",
              }),
              Ho.addEventListener("refresh", function () {
                  return No.update();
              }),
              Ho.refresh(),
              Ho.defaults({ scroller: "[data-scroll-container]" }),
              No.on("scroll", function (t) {
                  document.documentElement.setAttribute("data-scrolling", t.direction);
              }),
              $(".video-play").each(function () {
                  var t = this,
                      e = $(this).next("video").get(0).play();
                  null != e &&
                      e.then(function (e) {
                          console.log("autoplay "), $(t).next("video").get(0).play();
                      }),
                      $(this).trigger("click", function () {
                          console.log("click and play videos"), $(this).next("video").get(0).play();
                      });
              }),
              (function () {
                  var t = $(window).width();
                  if ($("[data-video]").length > 0) {
                      var e = function () {
                              var t = Math.floor(r.duration / 60),
                                  e = Math.floor(r.duration - 60 * t);
                              $(".video-time .duration").text(t + ":" + e),
                                  r.addEventListener(
                                      "timeupdate",
                                      function () {
                                          Math.floor((100 / r.duration) * r.currentTime);
                                          var t = parseInt(r.currentTime % 60),
                                              e = parseInt((r.currentTime / 60) % 60),
                                              i = (t < 10 ? "0" : "") + t;
                                          $(".video-time .current").text(e + ":" + i);
                                      },
                                      !1
                                  ),
                                  $(".video-ui-el, .video-time").addClass("is-active"),
                                  r.play(),
                                  r.addEventListener("ended", function (t) {
                                      $(".video-ui-el, .video-time").removeClass("is-active"),
                                          Vn.timeline().set(".video-modal .video-controls", { visibility: "visible" }).fromTo(".video-modal .video-controls", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power1.out", duration: 0.25 }, "-=0"),
                                          $(".play-video").on("click", function () {
                                              $(".video-ui-el, .video-time").addClass("is-active"), Vn.timeline().to(".video-modal .video-controls", { autoAlpha: 0, ease: "power1.out", duration: 0.25 }, "-=0"), r.play();
                                          });
                                  });
                          },
                          i = function () {
                              t > 1025
                                  ? $("[data-video]").each(function () {
                                        $(this).on("click", function () {
                                            var t = $(this).attr("data-video"),
                                                i = $(this).width(),
                                                n = $(this).height(),
                                                r = $(this).offset().top,
                                                o = $(this).offset().left,
                                                s = $(".video-set-in").width(),
                                                a = $(".video-set-in").height(),
                                                l = $(".video-set-in").offset().top,
                                                u = $(".video-set-in").offset().left;
                                            No.stop(),
                                                $("#videoPlayer").attr("src", t),
                                                0 == $(".video-modal").attr("data-open") && $(".video-modal").attr("data-open", "1"),
                                                Vn.timeline()
                                                    .set(".video-modal", { top: r, left: o, width: i, height: n }, "-=0")
                                                    .fromTo(".video-modal", { autoAlpha: 0 }, { autoAlpha: 1, ease: "power1.out", duration: 0.3 }, "-=0")
                                                    .fromTo(".video-modal-overlay", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, "-=0")
                                                    .fromTo(".video-modal", { left: o, top: r, width: i, height: n }, { top: l, left: u, width: s, height: a, ease: "power1.inOut", duration: 1 }, "-=0")
                                                    .fromTo(
                                                        ".video-modal-overlay .btn-close, .video-ui-el, .video-time, .video-progress",
                                                        { autoAlpha: 0, scale: 0.8 },
                                                        { autoAlpha: 1, scale: 1, ease: "power1.out", duration: 0.25, stagger: 0.1, onStart: e },
                                                        "-=0"
                                                    );
                                        });
                                    })
                                  : $("[data-video]").each(function () {
                                        var t = $(this).attr("data-video");
                                        $(this).attr("href", t),
                                            $(this).on("click", function () {
                                                $(this).width(), $(this).offset().top, $(this).offset().left, $(".video-set-in").width(), $(".video-set-in").height(), $(".video-set-in").offset().top, $(".video-set-in").offset().left;
                                            });
                                    });
                          },
                          n = function () {
                              $(".video-modal").attr("data-open", "0"), $(".video-modal, video").attr("style", ""), $("#videoPlayer").attr("src", ""), $(".play-pause-video").removeClass("is-play").attr("data-state", 0), No.start();
                          },
                          r = document.getElementById("videoPlayer");
                      $(".play-pause-video").on("click", function () {
                          0 == $(this).attr("data-state") ? ($(this).attr("data-state", 1), $(this).addClass("is-play"), r.pause()) : ($(this).attr("data-state", 0), $(this).removeClass("is-play"), r.play());
                      }),
                          $(".fullscreen-video").on("click", function () {
                              r.requestFullscreen();
                          }),
                          $(".sound-video").on("click", function () {
                              0 == $(this).attr("data-state") ? ($(this).attr("data-state", 1), $(this).addClass("muted"), (r.muted = !0)) : ($(this).attr("data-state", 0), $(this).removeClass("muted"), (r.muted = !1));
                          }),
                          i(),
                          No.on("scroll", function (t) {
                              i();
                          }),
                          $(".close-video-modal").on("click", function () {
                              Vn.timeline()
                                  .to(".video-modal-overlay .btn-close, .video-ui-el, .video-time", { scale: 0.8, autoAlpha: 0, ease: "power1.out", duration: 0.25 }, "-=0")
                                  .to(".video-progress", { autoAlpha: 0, ease: "power1.out", duration: 0.25 }, "-=0.25")
                                  .to(".video-modal", { autoAlpha: 0, ease: "power1.out", duration: 0.35, onComplete: n }, "-=0")
                                  .to(".video-modal .video-controls", { autoAlpha: 0, ease: "power1.out", duration: 0.25 }, "-=0")
                                  .to(".video-modal-overlay", { autoAlpha: 0, ease: "power1.out", duration: 0.25 }, "-=0.25");
                          });
                  }
              })(),
              $(window).width() > 1025 &&
                  ($(".btn:not(.regular):not(.external-element):not(.btn-video):not(.label)").each(function () {
                      function t() {
                          $(".btn:not(.regular):not(.external-element):not(.btn-video):not(.label) .value > div").attr("style", ""), $(".btn:not(.regular):not(.external-element):not(.btn-video):not(.label)").attr("data-state", "0");
                      }
                      $(this).attr("data-state", "0"),
                          $(".btn:not(.regular):not(.external-element):not(.btn-video):not(.label) .value").css("overflow", "hidden"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("div").first(), { y: "-163%", scaleY: 1.3, autoAlpha: 1, transformOrigin: "center", stagger: 0.05, ease: "power1.in", duration: 0.2 }, "-=0")
                                      .set($(this).find("div").first(), { y: "160%", scaleY: 1.3, autoAlpha: 1 })
                                      .to($(this).find("div").first(), { y: "0%", scaleY: 1, autoAlpha: 1, transformOrigin: "center", stagger: 0.05, ease: "power1.out", duration: 0.2, onComplete: t }, "+=0"));
                          });
                  }),
                  $(".circle-element.link, .external-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("#external #arrow-line, #external #arrow_el"), { y: -16, x: 16, transformOrigin: "top right", ease: "power1.in", duration: 0.15 }, "-=0")
                                      .set($(this).find("#external #arrow-line, #external #arrow_el"), { y: 20, x: -20 })
                                      .to(
                                          $(this).find("#external #arrow-line, #external #arrow_el"),
                                          {
                                              y: 0,
                                              x: 0,
                                              transformOrigin: "top right",
                                              ease: "power1.out",
                                              duration: 0.15,
                                              onComplete: function () {
                                                  $(".circle-element.link, .external-element").attr("data-state", "0");
                                              },
                                          },
                                          "-=0"
                                      ));
                          });
                  }),
                  $(".setting-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("#icon_setting"), { rotation: -45, transformOrigin: "center", ease: "power1.inOut", duration: 0.25 }, "-=0")
                                      .to($(this).find("#icon_setting"), { rotation: 15, transformOrigin: "center", ease: "power1.inOut", duration: 0.25 }, "-=0")
                                      .to(
                                          $(this).find("#icon_setting"),
                                          {
                                              rotation: 0,
                                              transformOrigin: "center",
                                              ease: "power1.inOut",
                                              duration: 0.25,
                                              onComplete: function () {
                                                  $(".setting-element").attr("data-state", "0");
                                              },
                                          },
                                          "-=0"
                                      ));
                          });
                  }),
                  $(".copy-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("#icon_copy #copy-small"), { x: 1, y: 1, autoAlpha: 0, transformOrigin: "left top", ease: "power1.inOut", duration: 0.25 }, "-=0")
                                      .to($(this).find("#icon_copy #copy-full"), { x: -2, y: -2, transformOrigin: "left top", ease: "power1.inOut", duration: 0.25 }, "-=0.25")
                                      .to($(this).find("#icon_copy"), { scale: 1.2, transformOrigin: "center", ease: "power1.inOut", duration: 0.15 }, "+=0")
                                      .to($(this).find("#icon_copy"), { scale: 1, transformOrigin: "center", ease: "power1.inOut", duration: 0.15 }, "-=0")
                                      .to(
                                          $(this).find("#icon_copy #copy-full, #icon_copy #copy-small"),
                                          {
                                              x: 0,
                                              y: 0,
                                              autoAlpha: 1,
                                              transformOrigin: "left top",
                                              ease: "power1.inOut",
                                              duration: 0.25,
                                              onComplete: function () {
                                                  $(".copy-element").attr("data-state", "0");
                                              },
                                          },
                                          "+=0.1"
                                      ));
                          });
                  }),
                  $(".send-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("#icon_send"), { xPercent: 100, yPercent: -100, transformOrigin: "left top", ease: "power1.in", duration: 0.25 }, "-=0")
                                      .set($(this).find("#icon_send"), { xPercent: -100, yPercent: 100 })
                                      .to(
                                          $(this).find("#icon_send"),
                                          {
                                              xPercent: 0,
                                              yPercent: 0,
                                              transformOrigin: "right top",
                                              ease: "power1.out",
                                              duration: 0.25,
                                              onComplete: function () {
                                                  $(".send-element").attr("data-state", "0");
                                              },
                                          },
                                          "-=0"
                                      ));
                          });
                  }),
                  $(".filter-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("#icon_filter #circle-l"), { xPercent: 100, transformOrigin: "left top", ease: "back.inOut(1.7)", duration: 0.25 }, "-=0")
                                      .to($(this).find("#icon_filter #circle-r"), { xPercent: -100, transformOrigin: "left top", ease: "back.inOut(1.7)", duration: 0.25 }, "-=0.2")
                                      .to(
                                          $(this).find("#icon_filter #circle-l, #icon_filter #circle-r"),
                                          {
                                              xPercent: 0,
                                              transformOrigin: "left top",
                                              ease: "back.inOut(1.7)",
                                              duration: 0.25,
                                              onComplete: function () {
                                                  $(".filter-element").attr("data-state", "0");
                                              },
                                          },
                                          "+=0.2"
                                      ));
                          });
                  }),
                  $(".internal-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              var t = $(this).find(".icon").attr("data-direction");
                              if ("0" == $(this).attr("data-state")) {
                                  var e = function () {
                                      $(".internal-element").attr("data-state", "0");
                                  };
                                  $(this).attr("data-state", "1"),
                                      "left" == t &&
                                          Vn.timeline()
                                              .to($(this).find(".icon"), { xPercent: -100, transformOrigin: "top left", ease: "power1.in", duration: 0.15 }, "-=0")
                                              .set($(this).find(".icon"), { xPercent: 100 })
                                              .to($(this).find(".icon"), { xPercent: 0, transformOrigin: "top right", ease: "power1.out", duration: 0.15, onComplete: e }, "-=0"),
                                      "right" == t &&
                                          Vn.timeline()
                                              .to($(this).find(".icon"), { xPercent: 100, transformOrigin: "top left", ease: "power1.in", duration: 0.15 }, "-=0")
                                              .set($(this).find(".icon"), { xPercent: -100 })
                                              .to($(this).find(".icon"), { xPercent: 0, transformOrigin: "top right", ease: "power1.out", duration: 0.15, onComplete: e }, "-=0");
                              }
                          });
                  }),
                  $(".circle-element.hidden-icon, .hidden-icon-element").each(function () {
                      $(this).attr("data-state", "0");
                      var t = $(this).find(".circle").width() + 24;
                      $(this)
                          .find(".value")
                          .css("transform", "translateX(-" + t + "px)"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find(".circle"), { x: 0, duration: 0.4, ease: "power1.out" }, "-=0")
                                      .to($(this).find(".circle svg"), { opacity: 1, scale: 1, duration: 0.2 }, "-=0.3")
                                      .to($(this).find(".value"), { x: 0, duration: 0.4, ease: "expo.out" }, "-=.4")
                                      .to($(this).find("#external #arrow-line, #external #arrow_el"), { y: -16, x: 16, transformOrigin: "top right", ease: "power1.in", duration: 0.15 }, "-=0")
                                      .set($(this).find("#external #arrow-line, #external #arrow_el"), { y: 20, x: -20 })
                                      .to(
                                          $(this).find("#external #arrow-line, #external #arrow_el"),
                                          {
                                              y: 0,
                                              x: 0,
                                              transformOrigin: "top right",
                                              ease: "power1.out",
                                              duration: 0.15,
                                              onComplete: function () {
                                                  $(".circle-element.hidden-icon, .hidden-icon-element").attr("data-state", "0");
                                              },
                                          },
                                          "-=0"
                                      ));
                          }),
                          $(this).on("mouseleave", function () {
                              Vn.timeline()
                                  .to($(this).find(".circle"), { x: "-100%", duration: 0.6, ease: "expo.out" }, "-=0")
                                  .to($(this).find(".circle svg"), { opacity: 0, scale: 0.8, duration: 0.2, ease: "expo.out" }, "-=0.6")
                                  .to($(this).find(".value"), { x: -t, duration: 0.55, ease: "expo.out" }, "-=.55");
                          });
                  }),
                  $(".circle-element.hidden-icon-over, .hidden-over-element").each(function () {
                      $(this).attr("data-state", "0"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find(".before"), { x: 0, duration: 0.4, ease: "power1.out" }, "-=0")
                                      .to($(this).find(".icon"), { opacity: 1, scale: 1, duration: 0.2 }, "-=0.3")
                                      .to($(this).find("#external #arrow-line, #external #arrow_el"), { y: -16, x: 16, transformOrigin: "top right", ease: "power1.in", duration: 0.15 }, "-=0")
                                      .set($(this).find("#external #arrow-line, #external #arrow_el"), { y: 20, x: -20 })
                                      .to(
                                          $(this).find("#external #arrow-line, #external #arrow_el"),
                                          {
                                              y: 0,
                                              x: 0,
                                              transformOrigin: "top right",
                                              ease: "power1.out",
                                              duration: 0.15,
                                              onComplete: function () {
                                                  $(".circle-element.hidden-icon-over, .hidden-over-element").attr("data-state", "0");
                                              },
                                          },
                                          "-=0"
                                      ));
                          }),
                          $(this).on("mouseleave", function () {
                              Vn.timeline().to($(this).find(".icon"), { opacity: 0, scale: 0.8, duration: 0.4, ease: "expo.out" }, "-=0").to($(this).find(".before"), { x: "-100%", duration: 0.6, ease: "expo.out" }, "-=0.2");
                          });
                  }),
                  $(".services-item-link").each(function () {
                      $(this).on("mouseenter", function () {
                          $(this).addClass("is-active");
                      }),
                          $(this).on("mouseleave", function () {
                              $(this).removeClass("is-active");
                          });
                  })),
              $(".copy-element").each(function () {
                  $(this).on("click", function () {
                      var t = $(this).attr("data-copy");
                      console.log("copy to clipboard " + t);
                      var e = $("<input>");
                      return (
                          $("body").append(e),
                          e.val(t).select(),
                          document.execCommand("copy"),
                          e.remove(),
                          $(this).addClass("copied"),
                          setTimeout(function () {
                              $(".copy-element").removeClass("copied");
                          }, 1500),
                          !1
                      );
                  });
              }),
              $("[data-video]").each(function () {
                  function t() {
                      $("[data-video] .btn-video .value > div").attr("style", ""), $("[data-video]").attr("data-state", "0"), $("[data-video] video").attr("style", "");
                  }
                  $(this).attr("data-state", "0"),
                      $(this).find(".btn-video .value").css("overflow", "hidden"),
                      $(this).on("mouseenter", function () {
                          "0" == $(this).attr("data-state") &&
                              ($(this).attr("data-state", "1"),
                              Vn.timeline()
                                  .to($(this).find(".btn-video div").first(), { y: "-163%", scaleY: 1.3, autoAlpha: 1, transformOrigin: "center", stagger: 0.05, ease: "power1.in", duration: 0.2 }, "-=0")
                                  .set($(this).find(".btn-video div").first(), { y: "160%", scaleY: 1.3, autoAlpha: 1 })
                                  .to($(this).find(".btn-video div").first(), { y: "0%", scaleY: 1, autoAlpha: 1, transformOrigin: "center", stagger: 0.05, ease: "power1.out", duration: 0.2, onComplete: t }, "+=0"));
                      }),
                      $(this).on("mouseleave", function () {
                          Vn.timeline().to($(this).find("video"), { scale: 1, transformOrigin: "center", ease: "power1.inOut", duration: 0.4 }, "-=0");
                      });
              }),
              $("body").attr("data-scroll", "-1");
          new Un.SplitText(".btn:not(.regular):not(.external-element):not(.btn-video):not(.label) .value, .main-navigation .menu-item a", { type: "lines" });
          !(function () {
              if ($(".case-number").length > 0) {
                  var t = $("#caseNumber").attr("value");
                  $(".case-number").find("a").attr("data-case", t);
              }
              $(window).width() > 1025 &&
                  $(".menu-nav").on("mouseenter", function () {
                      "0" == $(this).attr("data-nav") &&
                          Vn.timeline()
                              .to(
                                  ".menu-nav .line.first, .menu-nav .line.last",
                                  {
                                      scaleY: 1.5,
                                      scaleX: 1.2,
                                      y: -26,
                                      transformOrigin: "bottom",
                                      duration: 0.35,
                                      ease: "power1.in",
                                      stagger: 0.05,
                                      onStart: function () {
                                          $(".menu-nav").attr("data-nav", "1");
                                      },
                                  },
                                  "-=0"
                              )
                              .set(".menu-nav .line.first, .menu-nav .line.last", { y: 26, scaleX: 0.5, transformOrigin: "top" })
                              .to(
                                  ".menu-nav .line.first, .menu-nav .line.last",
                                  {
                                      scaleY: 1,
                                      scaleX: 1,
                                      y: 0,
                                      transformOrigin: "top",
                                      duration: 0.55,
                                      ease: "back.out(1.5)",
                                      stagger: 0.1,
                                      onComplete: function () {
                                          $(".menu-nav").attr("data-nav", "0");
                                      },
                                  },
                                  "-=0"
                              );
                  }),
                  $(".open-nav").each(function () {
                      $(this).on("click", function () {
                          No.stop(),
                              Vn.timeline()
                                  .set("body", { overflow: "hidden" })
                                  .set(".navigation-overlay", { pointerEvents: "inherit" })
                                  .set(".main-navigation", { visibility: "visible", scale: 1, autoAlpha: 1 })
                                  .fromTo(".navigation-overlay", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: "power1.out" }, "-=0")
                                  .fromTo(".main-navigation", { y: "-100vh", transformOrigin: "bottom" }, { y: 0, duration: 0.7, ease: "expo.out" }, "-=0.1")
                                  .fromTo(".main-navigation-container", { scaleY: 1.35, autoAlpha: 1, transformOrigin: "bottom" }, { scaleY: 1, duration: 0.4, ease: "expo.out" }, "-=.4")
                                  .set(".main-navigation", { pointerEvents: "inherit" })
                                  .fromTo(
                                      ".main-navigation-header, .main-navigation-bottom, #main-menu li, .main-navigation .social-links li",
                                      { y: 10, autoAlpha: 0, scale: 1 },
                                      { y: 0, autoAlpha: 1, scale: 1, duration: 0.3, stagger: 0.075 },
                                      "-=0.1"
                                  );
                      });
                  }),
                  $(".close-nav").each(function () {
                      $(this).on("click", function () {
                          Vn.timeline()
                              .set(".main-navigation", { pointerEvents: "none" })
                              .to(".main-navigation-header, .main-navigation-bottom, #main-menu li,  .main-navigation .social-links li", { autoAlpha: 0, scale: 0.99, duration: 0.4, transformOrigin: "top", ease: "power1.inOut" }, "-=0")
                              .to(".main-navigation", { scale: 0.95, autoAlpha: 0, duration: 0.5, transformOrigin: "center", ease: "power1.out" }, "-=0.3")
                              .set("body", { overflow: "auto" })
                              .to(".navigation-overlay", { autoAlpha: 0, duration: 0.4, ease: "power1.out" }, "-=0.2")
                              .set(".navigation-overlay", { pointerEvents: "none" }),
                              No.start();
                      });
                  });
          })(),
              $(".main-navigation").length > 0 &&
                  $(".main-navigation .menu-item a").each(function () {
                      function t() {
                          $(".main-navigation .menu-item a > div").attr("style", ""), $(".main-navigation .menu-item a").attr("data-state", "0");
                      }
                      $(this).attr("data-state", "0"),
                          $(".main-navigation .menu-item a").css("overflow", "hidden"),
                          $(this).on("mouseenter", function () {
                              "0" == $(this).attr("data-state") &&
                                  ($(this).attr("data-state", "1"),
                                  Vn.timeline()
                                      .to($(this).find("div").first(), { y: "-135%", scaleY: 1.5, transformOrigin: "top", stagger: 0.05, ease: "power1.in", duration: 0.25 }, "-=0")
                                      .set($(this).find("div").first(), { y: "100%", scaleY: 1.5 }, "+=0")
                                      .to($(this).find("div").first(), { y: "0%", scaleY: 1, transformOrigin: "top", stagger: 0.05, ease: "power1.out", duration: 0.25, onComplete: t }, "+=0"));
                          });
                  }),
              Vo(),
              $(window).width() > 1025 &&
                  $("[data-section-horizontal]").length > 0 &&
                  $("[data-section-horizontal]").each(function () {
                      $(this).attr("id");
                      var t = $(this),
                          e = $(this).find(".pin-wrap");
                      Vn.to(e, { scrollTrigger: { scroller: "[data-scroll-container]", scrub: !0, trigger: t, pin: !0, invalidateOnResize: !0, start: "top 0%", end: "300%" }, xPercent: -100, ease: "none" }),
                          Ho.addEventListener("refresh", function () {
                              return No.update();
                          }),
                          Ho.refresh();
                  }),
              (function () {
                  if ($("textarea").length > 0) {
                      var t = function (t) {
                              t.css("height", "58px"), t.css("height", t[0].scrollHeight + "px");
                          },
                          e = $("textarea");
                      e.each(function () {
                          $(this).attr("rows", 1), t($(this));
                      }),
                          e.on("input", function () {
                              t($(this));
                          });
                  }
              })(),
              $('input[type="file"]').length > 0 &&
                  ($(document).on("change", ".file-input", function () {
                      for (var t = $(".file-input"), e = [], i = $(this).get(0).files.length, n = 0; n < $(this).get(0).files.length; ++n) e.push($(this).get(0).files[n].name);
                      i > 2
                          ? (e.join(", "),
                            t
                                .parent()
                                .parent()
                                .parent()
                                .find(".file-upload-name .value")
                                .text(i + " files selected"),
                            t.parent().parent().parent().find(".file-upload-name").addClass("is-active"))
                          : (t.parent().parent().parent().find(".file-upload-name .value").text(e), t.parent().parent().parent().find(".file-upload-name").addClass("is-active"));
                  }),
                  $(".remove-file").on("click", function () {
                      $(".file-input").val(""), $(this).parent().removeClass("is-active");
                  })),
              (function () {
                  if (
                      ($(".btn-filters").length > 0 &&
                          $(".btn-filters").each(function () {
                              var t = $(".btn-filters-set"),
                                  e = $(".btn-filters-container"),
                                  i = $(this).find(".form-check");
                              t.on("click", function () {
                                  $(this)
                                      .next(e)
                                      .slideToggle(function () {
                                          t.toggleClass("is-open");
                                      });
                              }),
                                  i.each(function () {
                                      $(this).on("click", function () {
                                          var e = $(this).text();
                                          $(".btn-filters-set .value").text(e), $(this).parent().parent().slideUp(), t.removeClass("is-open");
                                      });
                                  });
                          }),
                      $(".projects-over .btn-filters-container").length > 0)
                  ) {
                      var t,
                          e = $(window).width(),
                          i = 0;
                      (t = e > 1024 ? 230 : 140),
                          (i = $("#gridFilterContainer").offset().top - t),
                          $(window).on("resize", function () {
                              $(".projects-over .btn-filters-container").length > 0 && (i = $("#gridFilterContainer").offset().top - t);
                          }),
                          $(".btn-filters-container .form-check-tabs .form-check-label").each(function () {
                              $(this).on("click", function () {
                                  var t = $(this).attr("data-filter");
                                  $(".btn-filters-container, .btn-filters-set").addClass("disable"),
                                      $("#gridFilterContainer").addClass("is-loading"),
                                      $(".projects-over").next("section").addClass("is-loading-next"),
                                      $("footer").addClass("is-loading-next"),
                                      $(".projects-over").next("section").next("section").addClass("is-loading-next"),
                                      No.scrollTo(i, {
                                          duration: 150,
                                          callback: function () {
                                              setTimeout(function () {
                                                  Vn.timeline()
                                                      .to("#gridFilterContainer .grid-item", { opacity: 0, duration: 0.15 }, "-=0")
                                                      .to(
                                                          "#gridFilterContainer",
                                                          {
                                                              autoAlpha: 0,
                                                              ease: "power1.inOut",
                                                              duration: 0.15,
                                                              onComplete: function () {
                                                                  $("#gridFilterContainer .grid-item").hide(function () {
                                                                      $("#gridFilterContainer").find(t).show(),
                                                                          Ho.addEventListener("refresh", function () {
                                                                              return No.update();
                                                                          }),
                                                                          Ho.refresh();
                                                                  });
                                                              },
                                                          },
                                                          "-=0"
                                                      )
                                                      .to(
                                                          "#gridFilterContainer",
                                                          {
                                                              autoAlpha: 1,
                                                              ease: "power1.inOut",
                                                              duration: 0.25,
                                                              onStart: function () {},
                                                              onComplete: function () {
                                                                  $("#gridFilterContainer").removeClass("is-loading"),
                                                                      $(".btn-filters-container, .btn-filters-set").removeClass("disable"),
                                                                      $(".projects-over").next("section").removeClass("is-loading-next"),
                                                                      $("footer").removeClass("is-loading-next"),
                                                                      $(".projects-over").next("section").next("section").removeClass("is-loading-next");
                                                              },
                                                          },
                                                          "+=0.2"
                                                      )
                                                      .to("#gridFilterContainer .grid-item", { opacity: 1, duration: 0.25 }, "-=0");
                                              }, 300);
                                          },
                                      });
                              });
                          });
                  }
              })(),
              $(".convert-svg").length > 0 &&
                  $(".convert-svg img").each(function () {
                      var t = $(this),
                          e = t.attr("id"),
                          i = t.attr("class"),
                          n = t.attr("src");
                      $.get(
                          n,
                          function (n) {
                              var r = $(n).find("svg");
                              void 0 !== e && (r = r.attr("id", e)),
                                  void 0 !== i && (r = r.attr("class", i + " replaced-svg")),
                                  !(r = r.removeAttr("xmlns:a")).attr("viewBox") && r.attr("height") && r.attr("width") && r.attr("viewBox", "0 0 " + r.attr("height") + " " + r.attr("width")),
                                  t.replaceWith(r);
                          },
                          "xml"
                      );
                  }),
              $(".brands-inner").length > 0 &&
                  setTimeout(function () {
                      var t = Vn.timeline({ paused: !0, repeat: -1, delay: 3, repeatDelay: 3, yoyo: !0 });
                      t
                          .to(".brands-item svg:first-child", { y: "-101%", duration: 0.4, stagger: 0.2, ease: "power2.in" }, "-=0")
                          .to(".brands-item svg:nth-child(2)", { y: "0%", duration: 0.4, stagger: 0.2, ease: "power2.out" }, "-=0.2")
                          .to(".brands-item svg:nth-child(2)", { y: "-101%", duration: 0.4, stagger: 0.2, ease: "power2.in" }, "+=3")
                          .to(".brands-item svg:nth-child(3)", { y: "0%", duration: 0.4, stagger: 0.2, ease: "power2.out" }, "-=0.2"),
                          t.play(),
                          $("a").each(function () {
                              var e = $(this).attr("href");
                              $(this).on("click", function () {
                                  "#" == e ? console.log("stay") : (console.log("pause"), t.pause());
                              });
                          });
                  }, 300),
              $(".circle-element-dynamic ").length > 0 &&
                  $(".circle-element-dynamic").each(function () {
                      var t = $(this),
                          e = $(this).find(".number").text(),
                          i = $(this).find(".number").attr("data-number1"),
                          n = $(this).find(".number").attr("data-number2"),
                          r = $(this).find(".value").text(),
                          o = $(this).find(".value").attr("data-value1"),
                          s = $(this).find(".value").attr("data-value2"),
                          a = Vn.timeline({ paused: !0, repeat: -1, delay: 3, repeatDelay: 3 });
                      a
                          .to(
                              $(this).find(".number, .value"),
                              {
                                  y: "25%",
                                  autoAlpha: 0,
                                  duration: 0.4,
                                  stagger: 0.1,
                                  ease: "power2.in",
                                  onComplete: function () {
                                      t.find(".number").text(i), t.find(".value").text(o);
                                  },
                              },
                              "-=0"
                          )
                          .to($(this).find(".number, .value"), { y: "0%", autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0")
                          .to(
                              $(this).find(".number, .value"),
                              {
                                  y: "25%",
                                  autoAlpha: 0,
                                  duration: 0.4,
                                  stagger: 0.1,
                                  ease: "power2.in",
                                  onComplete: function () {
                                      t.find(".number").text(n), t.find(".value").text(s);
                                  },
                              },
                              "+=3"
                          )
                          .to($(this).find(".number, .value"), { y: "0%", autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0")
                          .to(
                              $(this).find(".number, .value"),
                              {
                                  y: "25%",
                                  autoAlpha: 0,
                                  duration: 0.4,
                                  stagger: 0.1,
                                  ease: "power2.in",
                                  onComplete: function () {
                                      t.find(".number").text(e), t.find(".value").text(r);
                                  },
                              },
                              "+=3"
                          )
                          .to($(this).find(".number, .value"), { y: "0%", autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0"),
                          a.play(),
                          $("a").each(function () {
                              var t = $(this).attr("href");
                              $(this).on("click", function () {
                                  "#" == t || a.pause();
                              });
                          });
                  }),
              (function () {
                  if ($("body").hasClass("error404")) {
                      var t = Vn.timeline({
                          delay: 4,
                          paused: !0,
                          onComplete: function () {
                              e.play();
                          },
                      });
                      t.from(".grid-not > .text-gradient", { autoAlpha: 0, yPercent: 50, scale: 0.9, duration: 1.5, stagger: 0.25, ease: "ease.out" }), t.play();
                      var e = Vn.timeline({ paused: !0, repeat: -1, repeatDelay: 1 });
                      e
                          .fromTo(".grid-not > div:not(.text-gradient)", { autoAlpha: 0 }, { autoAlpha: 0.25, duration: 0.4, stagger: 0.1 }, "-=0")
                          .to(".grid-not > div:not(.text-gradient)", { autoAlpha: 0, duration: 0.4, stagger: 0.1 }, "-=0.05"),
                          $("a").each(function () {
                              var t = $(this).attr("href");
                              $(this).on("click", function () {
                                  "#" == t || e.pause();
                              });
                          });
                  }
              })(),
              (function () {
                  if ($("#formStar").length > 0) {
                      $("#formStar");
                      $('button[type="submit"]').on("click", function () {
                          setTimeout(function () {
                              No.scrollTo("#formStar");
                          }, 500);
                      });
                  }
                  $(".wpcf7").length > 0 &&
                      ($('.wpcf7 button[type="submit"]').on("click", function () {
                          console.log("start sending"), $("body").addClass("is-sending");
                      }),
                      document.querySelector(".wpcf7").addEventListener(
                          "wpcf7submit",
                          function (t) {
                              console.log("end sending"), $("body").removeClass("is-sending");
                          },
                          !1
                      ));
              })(),
              (function () {
                  if ($(".circle-anim-fade").length > 0) {
                      var t,
                          e = Vn.utils.toArray(".circle-anim-fade img");
                      (t = Vn.timeline({ repeat: -1, repeatDelay: 4, yoyo: !1, stagger: 4, ease: "none" })).fromTo(e, { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 4 }, "-=0"),
                          $("a").on("click", function () {
                              "#" === $(this).attr("href") || (console.log("stop anim"), t.timeScale(1).pause());
                          });
                  }
              })();
      };
      document.addEventListener("DOMContentLoaded", function (t) {
          window.onload = function () {
              qo(), Go();
          };
      });
      var Qo = $(window).width();
      window.addEventListener("resize", function (t) {
          Vo(), Uo();
          var e = $(window).width();
          if ((Qo < 1025 && e >= 1025 && location.reload(!0), Qo >= 1025 && e < 1025 && location.reload(!0), (Qo = e), $(".video-set-in").length > 0)) {
              var i = $(".video-set-in").width(),
                  n = $(".video-set-in").height(),
                  r = $(".video-set-in").offset().top,
                  o = $(".video-set-in").offset().left;
              1 == $(".video-modal").attr("data-open") && $(".video-modal").css({ width: i + "px", height: n + "px", top: r + "px", left: o + "px" });
          }
      });
  },
]);
