var Pf = Object.defineProperty;
var Nf = (e, t, n) =>
  t in e
    ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var En = (e, t, n) => Nf(e, typeof t != "symbol" ? t + "" : t, n);
function zf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ks = { exports: {} },
  Pl = {},
  Ys = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dr = Symbol.for("react.element"),
  jf = Symbol.for("react.portal"),
  Rf = Symbol.for("react.fragment"),
  Of = Symbol.for("react.strict_mode"),
  Mf = Symbol.for("react.profiler"),
  Lf = Symbol.for("react.provider"),
  Df = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  Ff = Symbol.for("react.suspense"),
  Af = Symbol.for("react.memo"),
  Uf = Symbol.for("react.lazy"),
  xu = Symbol.iterator;
function $f(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xu && e[xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gs = Object.assign,
  Zs = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zs),
    (this.updater = n || Xs);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Js() {}
Js.prototype = gn.prototype;
function Co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zs),
    (this.updater = n || Xs);
}
var Po = (Co.prototype = new Js());
Po.constructor = Co;
Gs(Po, gn.prototype);
Po.isPureReactComponent = !0;
var Cu = Array.isArray,
  qs = Object.prototype.hasOwnProperty,
  No = { current: null },
  bs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qs.call(t, r) && !bs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: dr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: No.current,
  };
}
function Vf(e, t) {
  return {
    $$typeof: dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function Bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pu = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bf("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dr:
          case jf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Zl(o, 0) : r),
      Cu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Pu, "$&/") + "/"),
          Ar(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (zo(l) &&
            (l = Vf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Pu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Cu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Zl(i, u);
      o += Ar(i, t, n, s, l);
    }
  else if (((s = $f(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Zl(i, u++)), (o += Ar(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ar(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Wf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Ur = { transition: null },
  Hf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Ur,
    ReactCurrentOwner: No,
  };
function ta() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = gn;
O.Fragment = Rf;
O.Profiler = Mf;
O.PureComponent = Co;
O.StrictMode = Of;
O.Suspense = Ff;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hf;
O.act = ta;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Gs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = No.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      qs.call(t, s) &&
        !bs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: dr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: Df,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lf, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = ea;
O.createFactory = function (e) {
  var t = ea.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: If, render: e };
};
O.isValidElement = zo;
O.lazy = function (e) {
  return { $$typeof: Uf, _payload: { _status: -1, _result: e }, _init: Wf };
};
O.memo = function (e, t) {
  return { $$typeof: Af, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
O.unstable_act = ta;
O.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ae.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
O.useId = function () {
  return ae.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ae.current.useRef(e);
};
O.useState = function (e) {
  return ae.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ae.current.useTransition();
};
O.version = "18.3.1";
Ys.exports = O;
var Y = Ys.exports;
const na = Tf(Y),
  Nu = zf({ __proto__: null, default: na }, [Y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf = Y,
  Kf = Symbol.for("react.element"),
  Yf = Symbol.for("react.fragment"),
  Xf = Object.prototype.hasOwnProperty,
  Gf = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ra(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Xf.call(t, r) && !Zf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Kf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Gf.current,
  };
}
Pl.Fragment = Yf;
Pl.jsx = ra;
Pl.jsxs = ra;
Ks.exports = Pl;
var C = Ks.exports,
  la = { exports: {} },
  xe = {},
  ia = { exports: {} },
  oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, T) {
    var j = N.length;
    N.push(T);
    e: for (; 0 < j; ) {
      var H = (j - 1) >>> 1,
        Z = N[H];
      if (0 < l(Z, T)) (N[H] = T), (N[j] = Z), (j = H);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0],
      j = N.pop();
    if (j !== T) {
      N[0] = j;
      e: for (var H = 0, Z = N.length, gr = Z >>> 1; H < gr; ) {
        var xt = 2 * (H + 1) - 1,
          Gl = N[xt],
          Ct = xt + 1,
          wr = N[Ct];
        if (0 > l(Gl, j))
          Ct < Z && 0 > l(wr, Gl)
            ? ((N[H] = wr), (N[Ct] = j), (H = Ct))
            : ((N[H] = Gl), (N[xt] = j), (H = xt));
        else if (Ct < Z && 0 > l(wr, j)) (N[H] = wr), (N[Ct] = j), (H = Ct);
        else break e;
      }
    }
    return T;
  }
  function l(N, T) {
    var j = N.sortIndex - T.sortIndex;
    return j !== 0 ? j : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    m = 3,
    v = !1,
    g = !1,
    k = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(N) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= N)
        r(a), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(a);
    }
  }
  function y(N) {
    if (((k = !1), f(N), !g))
      if (n(s) !== null) (g = !0), Yl(S);
      else {
        var T = n(a);
        T !== null && Xl(y, T.startTime - N);
      }
  }
  function S(N, T) {
    (g = !1), k && ((k = !1), d(_), (_ = -1)), (v = !0);
    var j = m;
    try {
      for (
        f(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || (N && !ye()));

      ) {
        var H = h.callback;
        if (typeof H == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = H(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
            f(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var gr = !0;
      else {
        var xt = n(a);
        xt !== null && Xl(y, xt.startTime - T), (gr = !1);
      }
      return gr;
    } finally {
      (h = null), (m = j), (v = !1);
    }
  }
  var E = !1,
    x = null,
    _ = -1,
    L = 5,
    R = -1;
  function ye() {
    return !(e.unstable_now() - R < L);
  }
  function kn() {
    if (x !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = x(!0, N);
      } finally {
        T ? _n() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var _n;
  if (typeof c == "function")
    _n = function () {
      c(kn);
    };
  else if (typeof MessageChannel < "u") {
    var Eu = new MessageChannel(),
      Cf = Eu.port2;
    (Eu.port1.onmessage = kn),
      (_n = function () {
        Cf.postMessage(null);
      });
  } else
    _n = function () {
      z(kn, 0);
    };
  function Yl(N) {
    (x = N), E || ((E = !0), _n());
  }
  function Xl(N, T) {
    _ = z(function () {
      N(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), Yl(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var j = m;
      m = T;
      try {
        return N();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = m;
      m = N;
      try {
        return T();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, j) {
      var H = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? H + j : H))
          : (j = H),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = j + Z),
        (N = {
          id: p++,
          callback: T,
          priorityLevel: N,
          startTime: j,
          expirationTime: Z,
          sortIndex: -1,
        }),
        j > H
          ? ((N.sortIndex = j),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (k ? (d(_), (_ = -1)) : (k = !0), Xl(y, j - H)))
          : ((N.sortIndex = Z), t(s, N), g || v || ((g = !0), Yl(S))),
        N
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (N) {
      var T = m;
      return function () {
        var j = m;
        m = T;
        try {
          return N.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(oa);
ia.exports = oa;
var Jf = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf = Y,
  ke = Jf;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ua = new Set(),
  Yn = {};
function Bt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) ua.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pi = Object.prototype.hasOwnProperty,
  bf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zu = {},
  Tu = {};
function ed(e) {
  return Pi.call(Tu, e)
    ? !0
    : Pi.call(zu, e)
      ? !1
      : bf.test(e)
        ? (Tu[e] = !0)
        : ((zu[e] = !0), !1);
}
function td(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nd(e, t, n, r) {
  if (t === null || typeof t > "u" || td(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var To = /[\-:]([a-z])/g;
function jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(To, jo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(To, jo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(To, jo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ro(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (nd(t, n, l, r) && (n = null),
    r || l === null
      ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  Oo = Symbol.for("react.strict_mode"),
  Ni = Symbol.for("react.profiler"),
  sa = Symbol.for("react.provider"),
  aa = Symbol.for("react.context"),
  Mo = Symbol.for("react.forward_ref"),
  zi = Symbol.for("react.suspense"),
  Ti = Symbol.for("react.suspense_list"),
  Lo = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  ca = Symbol.for("react.offscreen"),
  ju = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ju && e[ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  Jl;
function On(e) {
  if (Jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jl = (t && t[1]) || "";
    }
  return (
    `
` +
    Jl +
    e
  );
}
var ql = !1;
function bl(e, t) {
  if (!e || ql) return "";
  ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function rd(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = bl(e.type, !1)), e;
    case 11:
      return (e = bl(e.type.render, !1)), e;
    case 1:
      return (e = bl(e.type, !0)), e;
    default:
      return "";
  }
}
function ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case Ni:
      return "Profiler";
    case Oo:
      return "StrictMode";
    case zi:
      return "Suspense";
    case Ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case aa:
        return (e.displayName || "Context") + ".Consumer";
      case sa:
        return (e._context.displayName || "Context") + ".Provider";
      case Mo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Lo:
        return (
          (t = e.displayName || null), t !== null ? t : ji(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return ji(e(t));
        } catch {}
    }
  return null;
}
function ld(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ji(t);
    case 8:
      return t === Oo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function id(e) {
  var t = fa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = id(e));
}
function da(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pa(e, t) {
  (t = t.checked), t != null && Ro(e, "checked", t, !1);
}
function Oi(e, t) {
  pa(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mi(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mi(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mn = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function ha(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ma(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ma(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Er,
  ya = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  od = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  od.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function va(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
      ? ("" + t).trim()
      : t + "px";
}
function ga(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = va(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ud = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ii(e, t) {
  if (t) {
    if (ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Fi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ai = null;
function Do(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ui = null,
  ln = null,
  on = null;
function Du(e) {
  if ((e = mr(e))) {
    if (typeof Ui != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Rl(t)), Ui(e.stateNode, e.type, t));
  }
}
function wa(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function Sa() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), Du(e), t)) for (e = 0; e < t.length; e++) Du(t[e]);
  }
}
function ka(e, t) {
  return e(t);
}
function _a() {}
var ei = !1;
function Ea(e, t, n) {
  if (ei) return e(t, n);
  ei = !0;
  try {
    return ka(e, t, n);
  } finally {
    (ei = !1), (ln !== null || on !== null) && (_a(), Sa());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var $i = !1;
if (Je)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        $i = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    $i = !1;
  }
function sd(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var An = !1,
  qr = null,
  br = !1,
  Vi = null,
  ad = {
    onError: function (e) {
      (An = !0), (qr = e);
    },
  };
function cd(e, t, n, r, l, i, o, u, s) {
  (An = !1), (qr = null), sd.apply(ad, arguments);
}
function fd(e, t, n, r, l, i, o, u, s) {
  if ((cd.apply(this, arguments), An)) {
    if (An) {
      var a = qr;
      (An = !1), (qr = null);
    } else throw Error(w(198));
    br || ((br = !0), (Vi = a));
  }
}
function Wt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Iu(e) {
  if (Wt(e) !== e) throw Error(w(188));
}
function dd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Iu(l), e;
        if (i === r) return Iu(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Ca(e) {
  return (e = dd(e)), e !== null ? Pa(e) : null;
}
function Pa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Na = ke.unstable_scheduleCallback,
  Fu = ke.unstable_cancelCallback,
  pd = ke.unstable_shouldYield,
  hd = ke.unstable_requestPaint,
  Q = ke.unstable_now,
  md = ke.unstable_getCurrentPriorityLevel,
  Io = ke.unstable_ImmediatePriority,
  za = ke.unstable_UserBlockingPriority,
  el = ke.unstable_NormalPriority,
  yd = ke.unstable_LowPriority,
  Ta = ke.unstable_IdlePriority,
  Nl = null,
  We = null;
function vd(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Sd,
  gd = Math.log,
  wd = Math.LN2;
function Sd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gd(e) / wd) | 0)) | 0;
}
var xr = 64,
  Cr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Ln(u)) : ((i &= o), i !== 0 && (r = Ln(i)));
  } else (o = n & ~l), o !== 0 ? (r = Ln(o)) : i !== 0 && (r = Ln(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function kd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _d(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = kd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Bi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ja() {
  var e = xr;
  return (xr <<= 1), !(xr & 4194240) && (xr = 64), e;
}
function ti(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Fo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Ra(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oa,
  Ao,
  Ma,
  La,
  Da,
  Wi = !1,
  Pr = [],
  ct = null,
  ft = null,
  dt = null,
  Zn = new Map(),
  Jn = new Map(),
  ot = [],
  xd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ct = null;
      break;
    case "dragenter":
    case "dragleave":
      ft = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = mr(t)), t !== null && Ao(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Cd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ct = Pn(ct, e, t, n, r, l)), !0;
    case "dragenter":
      return (ft = Pn(ft, e, t, n, r, l)), !0;
    case "mouseover":
      return (dt = Pn(dt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Jn.set(i, Pn(Jn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ia(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xa(n)), t !== null)) {
          (e.blockedOn = t),
            Da(e.priority, function () {
              Ma(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ai = r), n.target.dispatchEvent(r), (Ai = null);
    } else return (t = mr(n)), t !== null && Ao(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Uu(e, t, n) {
  $r(e) && n.delete(t);
}
function Pd() {
  (Wi = !1),
    ct !== null && $r(ct) && (ct = null),
    ft !== null && $r(ft) && (ft = null),
    dt !== null && $r(dt) && (dt = null),
    Zn.forEach(Uu),
    Jn.forEach(Uu);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wi ||
      ((Wi = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Pd)));
}
function qn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Pr.length) {
    Nn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ct !== null && Nn(ct, e),
      ft !== null && Nn(ft, e),
      dt !== null && Nn(dt, e),
      Zn.forEach(t),
      Jn.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    (r = ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    Ia(n), n.blockedOn === null && ot.shift();
}
var un = nt.ReactCurrentBatchConfig,
  nl = !0;
function Nd(e, t, n, r) {
  var l = D,
    i = un.transition;
  un.transition = null;
  try {
    (D = 1), Uo(e, t, n, r);
  } finally {
    (D = l), (un.transition = i);
  }
}
function zd(e, t, n, r) {
  var l = D,
    i = un.transition;
  un.transition = null;
  try {
    (D = 4), Uo(e, t, n, r);
  } finally {
    (D = l), (un.transition = i);
  }
}
function Uo(e, t, n, r) {
  if (nl) {
    var l = Hi(e, t, n, r);
    if (l === null) fi(e, t, r, rl, n), Au(e, r);
    else if (Cd(l, e, t, n, r)) r.stopPropagation();
    else if ((Au(e, r), t & 4 && -1 < xd.indexOf(e))) {
      for (; l !== null; ) {
        var i = mr(l);
        if (
          (i !== null && Oa(i),
          (i = Hi(e, t, n, r)),
          i === null && fi(e, t, r, rl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else fi(e, t, r, null, n);
  }
}
var rl = null;
function Hi(e, t, n, r) {
  if (((rl = null), (e = Do(r)), (e = Tt(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rl = e), null;
}
function Fa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (md()) {
        case Io:
          return 1;
        case za:
          return 4;
        case el:
        case yd:
          return 16;
        case Ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  $o = null,
  Vr = null;
function Aa() {
  if (Vr) return Vr;
  var e,
    t = $o,
    n = t.length,
    r,
    l = "value" in st ? st.value : st.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Vr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nr() {
  return !0;
}
function $u() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nr
        : $u),
      (this.isPropagationStopped = $u),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nr));
      },
      persist: function () {},
      isPersistent: Nr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vo = Ce(wn),
  hr = B({}, wn, { view: 0, detail: 0 }),
  Td = Ce(hr),
  ni,
  ri,
  zn,
  zl = B({}, hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Bo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((ni = e.screenX - zn.screenX), (ri = e.screenY - zn.screenY))
              : (ri = ni = 0),
            (zn = e)),
          ni);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ri;
    },
  }),
  Vu = Ce(zl),
  jd = B({}, zl, { dataTransfer: 0 }),
  Rd = Ce(jd),
  Od = B({}, hr, { relatedTarget: 0 }),
  li = Ce(Od),
  Md = B({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ld = Ce(Md),
  Dd = B({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Id = Ce(Dd),
  Fd = B({}, wn, { data: 0 }),
  Bu = Ce(Fd),
  Ad = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ud = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $d = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $d[e]) ? !!t[e] : !1;
}
function Bo() {
  return Vd;
}
var Bd = B({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = Ad[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Ud[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bo,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Wd = Ce(Bd),
  Hd = B({}, zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wu = Ce(Hd),
  Qd = B({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bo,
  }),
  Kd = Ce(Qd),
  Yd = B({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = Ce(Yd),
  Gd = B({}, zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = Ce(Gd),
  Jd = [9, 13, 27, 32],
  Wo = Je && "CompositionEvent" in window,
  Un = null;
Je && "documentMode" in document && (Un = document.documentMode);
var qd = Je && "TextEvent" in window && !Un,
  Ua = Je && (!Wo || (Un && 8 < Un && 11 >= Un)),
  Hu = " ",
  Qu = !1;
function $a(e, t) {
  switch (e) {
    case "keyup":
      return Jd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Va(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function bd(e, t) {
  switch (e) {
    case "compositionend":
      return Va(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qu = !0), Hu);
    case "textInput":
      return (e = t.data), e === Hu && Qu ? null : e;
    default:
      return null;
  }
}
function ep(e, t) {
  if (Yt)
    return e === "compositionend" || (!Wo && $a(e, t))
      ? ((e = Aa()), (Vr = $o = st = null), (Yt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tp[e.type] : t === "textarea";
}
function Ba(e, t, n, r) {
  wa(r),
    (t = ll(t, "onChange")),
    0 < t.length &&
      ((n = new Vo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $n = null,
  bn = null;
function np(e) {
  ba(e, 0);
}
function Tl(e) {
  var t = Zt(e);
  if (da(t)) return e;
}
function rp(e, t) {
  if (e === "change") return t;
}
var Wa = !1;
if (Je) {
  var ii;
  if (Je) {
    var oi = "oninput" in document;
    if (!oi) {
      var Yu = document.createElement("div");
      Yu.setAttribute("oninput", "return;"),
        (oi = typeof Yu.oninput == "function");
    }
    ii = oi;
  } else ii = !1;
  Wa = ii && (!document.documentMode || 9 < document.documentMode);
}
function Xu() {
  $n && ($n.detachEvent("onpropertychange", Ha), (bn = $n = null));
}
function Ha(e) {
  if (e.propertyName === "value" && Tl(bn)) {
    var t = [];
    Ba(t, bn, e, Do(e)), Ea(np, t);
  }
}
function lp(e, t, n) {
  e === "focusin"
    ? (Xu(), ($n = t), (bn = n), $n.attachEvent("onpropertychange", Ha))
    : e === "focusout" && Xu();
}
function ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Tl(bn);
}
function op(e, t) {
  if (e === "click") return Tl(t);
}
function up(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function sp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : sp;
function er(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Pi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zu(e, t) {
  var n = Gu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gu(n);
  }
}
function Qa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Qa(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ka() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Ho(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ap(e) {
  var t = Ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ho(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Zu(n, i));
        var o = Zu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var cp = Je && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  Qi = null,
  Vn = null,
  Ki = !1;
function Ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ki ||
    Xt == null ||
    Xt !== Jr(r) ||
    ((r = Xt),
    "selectionStart" in r && Ho(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vn && er(Vn, r)) ||
      ((Vn = r),
      (r = ll(Qi, "onSelect")),
      0 < r.length &&
        ((t = new Vo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: zr("Animation", "AnimationEnd"),
    animationiteration: zr("Animation", "AnimationIteration"),
    animationstart: zr("Animation", "AnimationStart"),
    transitionend: zr("Transition", "TransitionEnd"),
  },
  ui = {},
  Ya = {};
Je &&
  ((Ya = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function jl(e) {
  if (ui[e]) return ui[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ya) return (ui[e] = t[n]);
  return e;
}
var Xa = jl("animationend"),
  Ga = jl("animationiteration"),
  Za = jl("animationstart"),
  Ja = jl("transitionend"),
  qa = new Map(),
  qu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function kt(e, t) {
  qa.set(e, t), Bt(t, [e]);
}
for (var si = 0; si < qu.length; si++) {
  var ai = qu[si],
    fp = ai.toLowerCase(),
    dp = ai[0].toUpperCase() + ai.slice(1);
  kt(fp, "on" + dp);
}
kt(Xa, "onAnimationEnd");
kt(Ga, "onAnimationIteration");
kt(Za, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Ja, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  pp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), fd(r, t, void 0, e), (e.currentTarget = null);
}
function ba(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          bu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          bu(l, u, a), (i = s);
        }
    }
  }
  if (br) throw ((e = Vi), (br = !1), (Vi = null), e);
}
function F(e, t) {
  var n = t[Ji];
  n === void 0 && (n = t[Ji] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ec(t, e, 2, !1), n.add(r));
}
function ci(e, t, n) {
  var r = 0;
  t && (r |= 4), ec(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Tr]) {
    (e[Tr] = !0),
      ua.forEach(function (n) {
        n !== "selectionchange" && (pp.has(n) || ci(n, !1, e), ci(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || ((t[Tr] = !0), ci("selectionchange", !1, t));
  }
}
function ec(e, t, n, r) {
  switch (Fa(t)) {
    case 1:
      var l = Nd;
      break;
    case 4:
      l = zd;
      break;
    default:
      l = Uo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !$i ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function fi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Tt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ea(function () {
    var a = i,
      p = Do(n),
      h = [];
    e: {
      var m = qa.get(e);
      if (m !== void 0) {
        var v = Vo,
          g = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Wd;
            break;
          case "focusin":
            (g = "focus"), (v = li);
            break;
          case "focusout":
            (g = "blur"), (v = li);
            break;
          case "beforeblur":
          case "afterblur":
            v = li;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Rd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Kd;
            break;
          case Xa:
          case Ga:
          case Za:
            v = Ld;
            break;
          case Ja:
            v = Xd;
            break;
          case "scroll":
            v = Td;
            break;
          case "wheel":
            v = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Wu;
        }
        var k = (t & 4) !== 0,
          z = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              d !== null && ((y = Gn(c, d)), y != null && k.push(nr(c, y, f)))),
            z)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new v(m, g, null, n, p)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ai &&
            (g = n.relatedTarget || n.fromElement) &&
            (Tt(g) || g[qe]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? Tt(g) : null),
              g !== null &&
                ((z = Wt(g)), g !== z || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((k = Vu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Wu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (z = v == null ? m : Zt(v)),
            (f = g == null ? m : Zt(g)),
            (m = new k(y, c + "leave", v, n, p)),
            (m.target = z),
            (m.relatedTarget = f),
            (y = null),
            Tt(p) === a &&
              ((k = new k(d, c + "enter", g, n, p)),
              (k.target = f),
              (k.relatedTarget = z),
              (y = k)),
            (z = y),
            v && g)
          )
            t: {
              for (k = v, d = g, c = 0, f = k; f; f = Ht(f)) c++;
              for (f = 0, y = d; y; y = Ht(y)) f++;
              for (; 0 < c - f; ) (k = Ht(k)), c--;
              for (; 0 < f - c; ) (d = Ht(d)), f--;
              for (; c--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Ht(k)), (d = Ht(d));
              }
              k = null;
            }
          else k = null;
          v !== null && es(h, m, v, k, !1),
            g !== null && z !== null && es(h, z, g, k, !0);
        }
      }
      e: {
        if (
          ((m = a ? Zt(a) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var S = rp;
        else if (Ku(m))
          if (Wa) S = up;
          else {
            S = ip;
            var E = lp;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = op);
        if (S && (S = S(e, a))) {
          Ba(h, S, n, p);
          break e;
        }
        E && E(e, m, a),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            Mi(m, "number", m.value);
      }
      switch (((E = a ? Zt(a) : window), e)) {
        case "focusin":
          (Ku(E) || E.contentEditable === "true") &&
            ((Xt = E), (Qi = a), (Vn = null));
          break;
        case "focusout":
          Vn = Qi = Xt = null;
          break;
        case "mousedown":
          Ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ki = !1), Ju(h, n, p);
          break;
        case "selectionchange":
          if (cp) break;
        case "keydown":
        case "keyup":
          Ju(h, n, p);
      }
      var x;
      if (Wo)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Yt
          ? $a(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Ua &&
          n.locale !== "ko" &&
          (Yt || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Yt && (x = Aa())
            : ((st = p),
              ($o = "value" in st ? st.value : st.textContent),
              (Yt = !0))),
        (E = ll(a, _)),
        0 < E.length &&
          ((_ = new Bu(_, e, null, n, p)),
          h.push({ event: _, listeners: E }),
          x ? (_.data = x) : ((x = Va(n)), x !== null && (_.data = x)))),
        (x = qd ? bd(e, n) : ep(e, n)) &&
          ((a = ll(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Bu("onBeforeInput", "beforeinput", null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = x)));
    }
    ba(h, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gn(e, n)),
      i != null && r.unshift(nr(e, i, l)),
      (i = Gn(e, t)),
      i != null && r.push(nr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function es(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Gn(n, i)), s != null && o.unshift(nr(n, s, u)))
        : l || ((s = Gn(n, i)), s != null && o.push(nr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var hp = /\r\n?/g,
  mp = /\u0000|\uFFFD/g;
function ts(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hp,
      `
`,
    )
    .replace(mp, "");
}
function jr(e, t, n) {
  if (((t = ts(t)), ts(e) !== t && n)) throw Error(w(425));
}
function il() {}
var Yi = null,
  Xi = null;
function Gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0,
  yp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ns = typeof Promise == "function" ? Promise : void 0,
  vp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ns < "u"
        ? function (e) {
            return ns.resolve(null).then(e).catch(gp);
          }
        : Zi;
function gp(e) {
  setTimeout(function () {
    throw e;
  });
}
function di(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  qn(t);
}
function pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Sn,
  rr = "__reactProps$" + Sn,
  qe = "__reactContainer$" + Sn,
  Ji = "__reactEvents$" + Sn,
  wp = "__reactListeners$" + Sn,
  Sp = "__reactHandles$" + Sn;
function Tt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rs(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = rs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mr(e) {
  return (
    (e = e[Be] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Rl(e) {
  return e[rr] || null;
}
var qi = [],
  Jt = -1;
function _t(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || ((e.current = qi[Jt]), (qi[Jt] = null), Jt--);
}
function I(e, t) {
  Jt++, (qi[Jt] = e.current), (e.current = t);
}
var wt = {},
  oe = _t(wt),
  pe = _t(!1),
  Dt = wt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function ol() {
  A(pe), A(oe);
}
function ls(e, t, n) {
  if (oe.current !== wt) throw Error(w(168));
  I(oe, t), I(pe, n);
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, ld(e) || "Unknown", l));
  return B({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (Dt = oe.current),
    I(oe, e),
    I(pe, pe.current),
    !0
  );
}
function is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = tc(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(pe),
      A(oe),
      I(oe, e))
    : A(pe),
    I(pe, n);
}
var Ye = null,
  Ol = !1,
  pi = !1;
function nc(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function kp(e) {
  (Ol = !0), nc(e);
}
function Et() {
  if (!pi && Ye !== null) {
    pi = !0;
    var e = 0,
      t = D;
    try {
      var n = Ye;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (Ol = !1);
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Na(Io, Et), l);
    } finally {
      (D = t), (pi = !1);
    }
  }
  return null;
}
var qt = [],
  bt = 0,
  sl = null,
  al = 0,
  Pe = [],
  Ne = 0,
  It = null,
  Xe = 1,
  Ge = "";
function Pt(e, t) {
  (qt[bt++] = al), (qt[bt++] = sl), (sl = e), (al = t);
}
function rc(e, t, n) {
  (Pe[Ne++] = Xe), (Pe[Ne++] = Ge), (Pe[Ne++] = It), (It = e);
  var r = Xe;
  e = Ge;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Xe = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Ge = i + e);
  } else (Xe = (1 << i) | (n << l) | r), (Ge = e);
}
function Qo(e) {
  e.return !== null && (Pt(e, 1), rc(e, 1, 0));
}
function Ko(e) {
  for (; e === sl; )
    (sl = qt[--bt]), (qt[bt] = null), (al = qt[--bt]), (qt[bt] = null);
  for (; e === It; )
    (It = Pe[--Ne]),
      (Pe[Ne] = null),
      (Ge = Pe[--Ne]),
      (Pe[Ne] = null),
      (Xe = Pe[--Ne]),
      (Pe[Ne] = null);
}
var Se = null,
  ge = null,
  U = !1,
  De = null;
function lc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function os(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (ge = pt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Xe, overflow: Ge } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function eo(e) {
  if (U) {
    var t = ge;
    if (t) {
      var n = t;
      if (!os(e, t)) {
        if (bi(e)) throw Error(w(418));
        t = pt(n.nextSibling);
        var r = Se;
        t && os(e, t)
          ? lc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e));
      }
    } else {
      if (bi(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e);
    }
  }
}
function us(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Rr(e) {
  if (e !== Se) return !1;
  if (!U) return us(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (bi(e)) throw (ic(), Error(w(418)));
    for (; t; ) lc(e, t), (t = pt(t.nextSibling));
  }
  if ((us(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = pt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = Se ? pt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = ge; e; ) e = pt(e.nextSibling);
}
function dn() {
  (ge = Se = null), (U = !1);
}
function Yo(e) {
  De === null ? (De = [e]) : De.push(e);
}
var _p = nt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ss(e) {
  var t = e._init;
  return t(e._payload);
}
function oc(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = vt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, y) {
    return c === null || c.tag !== 6
      ? ((c = Si(f, d.mode, y)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, y) {
    var S = f.type;
    return S === Kt
      ? p(d, c, f.props.children, y, f.key)
      : c !== null &&
          (c.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === lt &&
              ss(S) === c.type))
        ? ((y = l(c, f.props)), (y.ref = Tn(d, c, f)), (y.return = d), y)
        : ((y = Gr(f.type, f.key, f.props, null, d.mode, y)),
          (y.ref = Tn(d, c, f)),
          (y.return = d),
          y);
  }
  function a(d, c, f, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = ki(f, d.mode, y)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, y, S) {
    return c === null || c.tag !== 7
      ? ((c = Mt(f, d.mode, y, S)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function h(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Si("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case kr:
          return (
            (f = Gr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Tn(d, null, c)),
            (f.return = d),
            f
          );
        case Qt:
          return (c = ki(c, d.mode, f)), (c.return = d), c;
        case lt:
          var y = c._init;
          return h(d, y(c._payload), f);
      }
      if (Mn(c) || xn(c))
        return (c = Mt(c, d.mode, f, null)), (c.return = d), c;
      Or(d, c);
    }
    return null;
  }
  function m(d, c, f, y) {
    var S = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return S !== null ? null : u(d, c, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kr:
          return f.key === S ? s(d, c, f, y) : null;
        case Qt:
          return f.key === S ? a(d, c, f, y) : null;
        case lt:
          return (S = f._init), m(d, c, S(f._payload), y);
      }
      if (Mn(f) || xn(f)) return S !== null ? null : p(d, c, f, y, null);
      Or(d, f);
    }
    return null;
  }
  function v(d, c, f, y, S) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(f) || null), u(c, d, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (d = d.get(y.key === null ? f : y.key) || null), s(c, d, y, S);
        case Qt:
          return (d = d.get(y.key === null ? f : y.key) || null), a(c, d, y, S);
        case lt:
          var E = y._init;
          return v(d, c, f, E(y._payload), S);
      }
      if (Mn(y) || xn(y)) return (d = d.get(f) || null), p(c, d, y, S, null);
      Or(c, y);
    }
    return null;
  }
  function g(d, c, f, y) {
    for (
      var S = null, E = null, x = c, _ = (c = 0), L = null;
      x !== null && _ < f.length;
      _++
    ) {
      x.index > _ ? ((L = x), (x = null)) : (L = x.sibling);
      var R = m(d, x, f[_], y);
      if (R === null) {
        x === null && (x = L);
        break;
      }
      e && x && R.alternate === null && t(d, x),
        (c = i(R, c, _)),
        E === null ? (S = R) : (E.sibling = R),
        (E = R),
        (x = L);
    }
    if (_ === f.length) return n(d, x), U && Pt(d, _), S;
    if (x === null) {
      for (; _ < f.length; _++)
        (x = h(d, f[_], y)),
          x !== null &&
            ((c = i(x, c, _)), E === null ? (S = x) : (E.sibling = x), (E = x));
      return U && Pt(d, _), S;
    }
    for (x = r(d, x); _ < f.length; _++)
      (L = v(x, d, _, f[_], y)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? _ : L.key),
          (c = i(L, c, _)),
          E === null ? (S = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        x.forEach(function (ye) {
          return t(d, ye);
        }),
      U && Pt(d, _),
      S
    );
  }
  function k(d, c, f, y) {
    var S = xn(f);
    if (typeof S != "function") throw Error(w(150));
    if (((f = S.call(f)), f == null)) throw Error(w(151));
    for (
      var E = (S = null), x = c, _ = (c = 0), L = null, R = f.next();
      x !== null && !R.done;
      _++, R = f.next()
    ) {
      x.index > _ ? ((L = x), (x = null)) : (L = x.sibling);
      var ye = m(d, x, R.value, y);
      if (ye === null) {
        x === null && (x = L);
        break;
      }
      e && x && ye.alternate === null && t(d, x),
        (c = i(ye, c, _)),
        E === null ? (S = ye) : (E.sibling = ye),
        (E = ye),
        (x = L);
    }
    if (R.done) return n(d, x), U && Pt(d, _), S;
    if (x === null) {
      for (; !R.done; _++, R = f.next())
        (R = h(d, R.value, y)),
          R !== null &&
            ((c = i(R, c, _)), E === null ? (S = R) : (E.sibling = R), (E = R));
      return U && Pt(d, _), S;
    }
    for (x = r(d, x); !R.done; _++, R = f.next())
      (R = v(x, d, _, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? _ : R.key),
          (c = i(R, c, _)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        x.forEach(function (kn) {
          return t(d, kn);
        }),
      U && Pt(d, _),
      S
    );
  }
  function z(d, c, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Kt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case kr:
          e: {
            for (var S = f.key, E = c; E !== null; ) {
              if (E.key === S) {
                if (((S = f.type), S === Kt)) {
                  if (E.tag === 7) {
                    n(d, E.sibling),
                      (c = l(E, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === lt &&
                    ss(S) === E.type)
                ) {
                  n(d, E.sibling),
                    (c = l(E, f.props)),
                    (c.ref = Tn(d, E, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            f.type === Kt
              ? ((c = Mt(f.props.children, d.mode, y, f.key)),
                (c.return = d),
                (d = c))
              : ((y = Gr(f.type, f.key, f.props, null, d.mode, y)),
                (y.ref = Tn(d, c, f)),
                (y.return = d),
                (d = y));
          }
          return o(d);
        case Qt:
          e: {
            for (E = f.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ki(f, d.mode, y)), (c.return = d), (d = c);
          }
          return o(d);
        case lt:
          return (E = f._init), z(d, c, E(f._payload), y);
      }
      if (Mn(f)) return g(d, c, f, y);
      if (xn(f)) return k(d, c, f, y);
      Or(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = Si(f, d.mode, y)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return z;
}
var pn = oc(!0),
  uc = oc(!1),
  cl = _t(null),
  fl = null,
  en = null,
  Xo = null;
function Go() {
  Xo = en = fl = null;
}
function Zo(e) {
  var t = cl.current;
  A(cl), (e._currentValue = t);
}
function to(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function sn(e, t) {
  (fl = e),
    (Xo = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (Xo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), en === null)) {
      if (fl === null) throw Error(w(308));
      (en = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else en = en.next = e;
  return t;
}
var jt = null;
function Jo(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function sc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Jo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ac(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Jo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Wr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fo(e, n);
  }
}
function as(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (p = a = s = null), (u = i);
    do {
      var m = u.lane,
        v = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            k = u;
          switch (((m = t), (v = n), k.tag)) {
            case 1:
              if (((g = k.payload), typeof g == "function")) {
                h = g.call(v, h, m);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = k.payload),
                (m = typeof g == "function" ? g.call(v, h, m) : g),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (s = h)) : (p = p.next = v),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (At |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function cs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var yr = {},
  He = _t(yr),
  lr = _t(yr),
  ir = _t(yr);
function Rt(e) {
  if (e === yr) throw Error(w(174));
  return e;
}
function bo(e, t) {
  switch ((I(ir, t), I(lr, e), I(He, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e));
  }
  A(He), I(He, t);
}
function hn() {
  A(He), A(lr), A(ir);
}
function cc(e) {
  Rt(ir.current);
  var t = Rt(He.current),
    n = Di(t, e.type);
  t !== n && (I(lr, e), I(He, n));
}
function eu(e) {
  lr.current === e && (A(He), A(lr));
}
var $ = _t(0);
function pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var hi = [];
function tu() {
  for (var e = 0; e < hi.length; e++)
    hi[e]._workInProgressVersionPrimary = null;
  hi.length = 0;
}
var Hr = nt.ReactCurrentDispatcher,
  mi = nt.ReactCurrentBatchConfig,
  Ft = 0,
  V = null,
  X = null,
  J = null,
  hl = !1,
  Bn = !1,
  or = 0,
  Ep = 0;
function re() {
  throw Error(w(321));
}
function nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function ru(e, t, n, r, l, i) {
  if (
    ((Ft = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? Np : zp),
    (e = n(r, l)),
    Bn)
  ) {
    i = 0;
    do {
      if (((Bn = !1), (or = 0), 25 <= i)) throw Error(w(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Hr.current = Tp),
        (e = n(r, l));
    } while (Bn);
  }
  if (
    ((Hr.current = ml),
    (t = X !== null && X.next !== null),
    (Ft = 0),
    (J = X = V = null),
    (hl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function lu() {
  var e = or !== 0;
  return (or = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function Re() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(w(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var p = a.lane;
      if ((Ft & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (V.lanes |= p),
          (At |= p);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Ue(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (At |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vi(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fc() {}
function dc(e, t) {
  var n = V,
    r = Re(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    iu(mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, hc.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(w(349));
    Ft & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yc(t) && vc(e);
}
function mc(e, t, n) {
  return n(function () {
    yc(t) && vc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function vc(e) {
  var t = be(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function fs(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Pp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gc() {
  return Re().memoizedState;
}
function Qr(e, t, n, r) {
  var l = Ve();
  (V.flags |= e),
    (l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && nu(r, o.deps))) {
      l.memoizedState = sr(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = sr(1 | t, n, i, r));
}
function ds(e, t) {
  return Qr(8390656, 8, e, t);
}
function iu(e, t) {
  return Ml(2048, 8, e, t);
}
function wc(e, t) {
  return Ml(4, 2, e, t);
}
function Sc(e, t) {
  return Ml(4, 4, e, t);
}
function kc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _c(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, kc.bind(null, t, e), n)
  );
}
function ou() {}
function Ec(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cc(e, t, n) {
  return Ft & 21
    ? (Ue(n, t) || ((n = ja()), (V.lanes |= n), (At |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function xp(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = mi.transition;
  mi.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (mi.transition = r);
  }
}
function Pc() {
  return Re().memoizedState;
}
function Cp(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Nc(e))
  )
    zc(t, n);
  else if (((n = sc(e, t, n, r)), n !== null)) {
    var l = se();
    Ae(n, e, r, l), Tc(n, t, r);
  }
}
function Pp(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nc(e)) zc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Jo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = sc(e, t, l, r)),
      n !== null && ((l = se()), Ae(n, e, r, l), Tc(n, t, r));
  }
}
function Nc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function zc(e, t) {
  Bn = hl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fo(e, n);
  }
}
var ml = {
    readContext: je,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Np = {
    readContext: je,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, kc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Cp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fs,
    useDebugValue: ou,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = fs(!1),
        t = e[0];
      return (e = xp.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ve();
      if (U) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(w(349));
        Ft & 30 || pc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ds(mc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        sr(9, hc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = q.identifierPrefix;
      if (U) {
        var n = Ge,
          r = Xe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: je,
    useCallback: Ec,
    useContext: je,
    useEffect: iu,
    useImperativeHandle: _c,
    useInsertionEffect: wc,
    useLayoutEffect: Sc,
    useMemo: xc,
    useReducer: yi,
    useRef: gc,
    useState: function () {
      return yi(ur);
    },
    useDebugValue: ou,
    useDeferredValue: function (e) {
      var t = Re();
      return Cc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = yi(ur)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: dc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: je,
    useCallback: Ec,
    useContext: je,
    useEffect: iu,
    useImperativeHandle: _c,
    useInsertionEffect: wc,
    useLayoutEffect: Sc,
    useMemo: xc,
    useReducer: vi,
    useRef: gc,
    useState: function () {
      return vi(ur);
    },
    useDebugValue: ou,
    useDeferredValue: function (e) {
      var t = Re();
      return X === null ? (t.memoizedState = e) : Cc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = vi(ur)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: fc,
    useSyncExternalStore: dc,
    useId: Pc,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function no(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = yt(e),
      i = Ze(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (Ae(t, e, l, r), Wr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = yt(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (Ae(t, e, l, r), Wr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = yt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (Ae(t, e, r, n), Wr(t, e, r));
  },
};
function ps(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(l, i)
        : !0
  );
}
function jc(e, t, n) {
  var r = !1,
    l = wt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = je(i))
      : ((l = he(t) ? Dt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : wt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function ro(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), qo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = je(i))
    : ((i = he(t) ? Dt : oe.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (no(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      dl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jp = typeof WeakMap == "function" ? WeakMap : Map;
function Rc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vl || ((vl = !0), (mo = r)), lo(e, t);
    }),
    n
  );
}
function Oc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        lo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        lo(e, t),
          typeof r != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ms(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Hp.bind(null, e, t, n)), t.then(e, e));
}
function ys(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rp = nt.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? uc(t, null, n, r) : pn(t, e.child, n, r);
}
function gs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    sn(t, l),
    (r = ru(e, t, n, r, i, l)),
    (n = lu()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (U && n && Qo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function ws(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !hu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Mc(e, t, i, r, l))
      : ((e = Gr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (er(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return io(e, t, n, r, l);
}
function Lc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(nn, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(nn, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(nn, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(nn, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function Dc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function io(e, t, n, r, l) {
  var i = he(n) ? Dt : oe.current;
  return (
    (i = fn(t, i)),
    sn(t, l),
    (n = ru(e, t, n, r, i, l)),
    (r = lu()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (U && r && Qo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Ss(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    ul(t);
  } else i = !1;
  if ((sn(t, l), t.stateNode === null))
    Kr(e, t), jc(t, n, r), ro(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = je(a))
      : ((a = he(n) ? Dt : oe.current), (a = fn(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && hs(t, o, r, a)),
      (it = !1);
    var m = t.memoizedState;
    (o.state = m),
      dl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || it
        ? (typeof p == "function" && (no(t, n, p, r), (s = t.memoizedState)),
          (u = it || ps(t, n, u, r, m, s, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ac(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Me(t.type, u)),
      (o.props = a),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = je(s))
        : ((s = he(n) ? Dt : oe.current), (s = fn(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && hs(t, o, r, s)),
      (it = !1),
      (m = t.memoizedState),
      (o.state = m),
      dl(t, r, o, l);
    var g = t.memoizedState;
    u !== h || m !== g || pe.current || it
      ? (typeof v == "function" && (no(t, n, v, r), (g = t.memoizedState)),
        (a = it || ps(t, n, a, r, m, g, s) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return oo(e, t, n, r, i, l);
}
function oo(e, t, n, r, l, i) {
  Dc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && is(t, n, !1), et(e, t, i);
  (r = t.stateNode), (Rp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pn(t, e.child, null, i)), (t.child = pn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && is(t, n, !0),
    t.child
  );
}
function Ic(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ls(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ls(e, t.context, !1),
    bo(e, t.containerInfo);
}
function ks(e, t, n, r, l) {
  return dn(), Yo(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function so(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      eo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Fl(o, r, 0, null)),
              (e = Mt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = so(n)),
              (t.memoizedState = uo),
              e)
            : uu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Op(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = vt(u, i)) : ((i = Mt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? so(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = uo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function uu(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && Yo(r),
    pn(t, e.child, null, n),
    (e = uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Op(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gi(Error(w(422)))), Mr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Fl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Mt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && pn(t, e.child, null, o),
          (t.child.memoizedState = so(o)),
          (t.memoizedState = uo),
          i);
  if (!(t.mode & 1)) return Mr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(w(419))), (r = gi(i, r, void 0)), Mr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), Ae(r, e, l, -1));
    }
    return pu(), (r = gi(Error(w(421)))), Mr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = pt(l.nextSibling)),
      (Se = t),
      (U = !0),
      (De = null),
      e !== null &&
        ((Pe[Ne++] = Xe),
        (Pe[Ne++] = Ge),
        (Pe[Ne++] = It),
        (Xe = e.id),
        (Ge = e.overflow),
        (It = t)),
      (t = uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _s(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), to(e.return, t, n);
}
function wi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ac(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _s(e, n, t);
        else if (e.tag === 19) _s(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && pl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          wi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && pl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        wi(t, !0, n, null, i);
        break;
      case "together":
        wi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (At |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Mp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ic(t), dn();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      he(t.type) && ul(t);
      break;
    case 4:
      bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(cl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Fc(e, t, n)
            : (I($, $.current & 1),
              (e = et(e, t, n)),
              e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ac(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lc(e, t, n);
  }
  return et(e, t, n);
}
var Uc, ao, $c, Vc;
Uc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ao = function () {};
$c = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rt(He.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ri(e, l)), (r = Ri(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Li(e, l)), (r = Li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = il);
    }
    Ii(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Yn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(a, "" + s)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (Yn.hasOwnProperty(a)
                  ? (s != null && a === "onScroll" && F("scroll", e),
                    i || u === s || (i = []))
                  : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ko(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && ol(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        A(pe),
        A(oe),
        tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (go(De), (De = null)))),
        ao(e, t),
        le(t),
        null
      );
    case 5:
      eu(t);
      var l = Rt(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $c(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return le(t), null;
        }
        if (((e = Rt(He.current)), Rr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Be] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) F(Dn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Ru(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Mu(r, i), F("invalid", r);
          }
          Ii(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Yn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              _r(r), Ou(r, i, !0);
              break;
            case "textarea":
              _r(r), Lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = il);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ma(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Be] = t),
            (e[rr] = r),
            Uc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Fi(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) F(Dn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Ru(e, r), (l = Ri(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Mu(e, r), (l = Li(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            Ii(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ga(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ya(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Xn(e, s)
                        : typeof s == "number" && Xn(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Yn.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && F("scroll", e)
                          : s != null && Ro(e, i, s, o));
              }
            switch (n) {
              case "input":
                _r(e), Ou(e, r, !1);
                break;
              case "textarea":
                _r(e), Lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = il);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Rt(ir.current)), Rt(He.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (A($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ge !== null && t.mode & 1 && !(t.flags & 128))
          ic(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Be] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else De !== null && (go(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : pu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        hn(), ao(e, t), e === null && tr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Zo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && ol(), le(t), null;
    case 19:
      if ((A($), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) jn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = pl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    jn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > yn &&
            ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return le(t), null;
          } else
            2 * Q() - i.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        du(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Dp(e, t) {
  switch ((Ko(t), t.tag)) {
    case 1:
      return (
        he(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        A(pe),
        A(oe),
        tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return eu(t), null;
    case 13:
      if ((A($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A($), null;
    case 4:
      return hn(), null;
    case 10:
      return Zo(t.type._context), null;
    case 22:
    case 23:
      return du(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  Ip = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Es = !1;
function Fp(e, t) {
  if (((Yi = nl), (e = Ka()), Ho(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++p === r && (s = o),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, nl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var k = g.memoizedProps,
                    z = g.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Me(t.type, k),
                      z,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (g = Es), (Es = !1), g;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && co(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[rr], delete t[Ji], delete t[wp], delete t[Sp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = il));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), (e = e.sibling);
}
function ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ho(e, t, n), e = e.sibling; e !== null; ) ho(e, t, n), (e = e.sibling);
}
var ee = null,
  Le = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) Hc(e, t, n), (n = n.sibling);
}
function Hc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(Nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || tn(n, t);
    case 6:
      var r = ee,
        l = Le;
      (ee = null),
        rt(e, t, n),
        (ee = r),
        (Le = l),
        ee !== null &&
          (Le
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Le
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? di(e.parentNode, n)
              : e.nodeType === 1 && di(e, n),
            qn(e))
          : di(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Le),
        (ee = n.stateNode.containerInfo),
        (Le = !0),
        rt(e, t, n),
        (ee = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && co(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), rt(e, t, n), (ie = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function Cs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ip()),
      t.forEach(function (r) {
        var l = Kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Le = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(w(160));
        Hc(i, o, l), (ee = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qc(t, e), (t = t.sibling);
}
function Qc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), $e(e), r & 4)) {
        try {
          Wn(3, e, e.return), Dl(3, e);
        } catch (k) {
          W(e, e.return, k);
        }
        try {
          Wn(5, e, e.return);
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 1:
      Oe(t, e), $e(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        $e(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xn(l, "");
        } catch (k) {
          W(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && pa(l, i),
              Fi(u, o);
            var a = Fi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var p = s[o],
                h = s[o + 1];
              p === "style"
                ? ga(l, h)
                : p === "dangerouslySetInnerHTML"
                  ? ya(l, h)
                  : p === "children"
                    ? Xn(l, h)
                    : Ro(l, p, h, a);
            }
            switch (u) {
              case "input":
                Oi(l, i);
                break;
              case "textarea":
                ha(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? rn(l, !!i.multiple, v, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(l, !!i.multiple, i.defaultValue, !0)
                      : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rr] = i;
          } catch (k) {
            W(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (k) {
          W(e, e.return, k);
        }
      break;
    case 4:
      Oe(t, e), $e(e);
      break;
    case 13:
      Oe(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (cu = Q())),
        r & 4 && Cs(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || p), Oe(t, e), (ie = a)) : Oe(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (P = e, p = e.child; p !== null; ) {
            for (h = P = p; P !== null; ) {
              switch (((m = P), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, m, m.return);
                  break;
                case 1:
                  tn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (k) {
                      W(r, n, k);
                    }
                  }
                  break;
                case 5:
                  tn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ns(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (P = v)) : Ns(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = va("display", o)));
              } catch (k) {
                W(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (k) {
                W(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), $e(e), r & 4 && Cs(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xn(l, ""), (r.flags &= -33));
          var i = xs(e);
          ho(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = xs(e);
          po(e, u, o);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ap(e, t, n) {
  (P = e), Kc(e);
}
function Kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var a = ie;
        if (((Lr = o), (ie = s) && !a))
          for (P = l; P !== null; )
            (o = P),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? zs(l)
                : s !== null
                  ? ((s.return = o), (P = s))
                  : zs(l);
        for (; i !== null; ) (P = i), Kc(i), (i = i.sibling);
        (P = l), (Lr = u), (ie = a);
      }
      Ps(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (P = i)) : Ps(e);
  }
}
function Ps(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && cs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && qn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ie || (t.flags & 512 && fo(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Ns(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function zs(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Dl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            fo(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            fo(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var Up = Math.ceil,
  yl = nt.ReactCurrentDispatcher,
  su = nt.ReactCurrentOwner,
  Te = nt.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  K = null,
  te = 0,
  ve = 0,
  nn = _t(0),
  G = 0,
  ar = null,
  At = 0,
  Il = 0,
  au = 0,
  Hn = null,
  fe = null,
  cu = 0,
  yn = 1 / 0,
  Ke = null,
  vl = !1,
  mo = null,
  mt = null,
  Dr = !1,
  at = null,
  gl = 0,
  Qn = 0,
  yo = null,
  Yr = -1,
  Xr = 0;
function se() {
  return M & 6 ? Q() : Yr !== -1 ? Yr : (Yr = Q());
}
function yt(e) {
  return e.mode & 1
    ? M & 2 && te !== 0
      ? te & -te
      : _p.transition !== null
        ? (Xr === 0 && (Xr = ja()), Xr)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fa(e.type))),
          e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (yo = null), Error(w(185)));
  pr(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (Il |= n), G === 4 && ut(e, te)),
      me(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((yn = Q() + 500), Ol && Et()));
}
function me(e, t) {
  var n = e.callbackNode;
  _d(e, t);
  var r = tl(e, e === q ? te : 0);
  if (r === 0)
    n !== null && Fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fu(n), t === 1))
      e.tag === 0 ? kp(Ts.bind(null, e)) : nc(Ts.bind(null, e)),
        vp(function () {
          !(M & 6) && Et();
        }),
        (n = null);
    else {
      switch (Ra(r)) {
        case 1:
          n = Io;
          break;
        case 4:
          n = za;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = Ta;
          break;
        default:
          n = el;
      }
      n = ef(n, Yc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yc(e, t) {
  if (((Yr = -1), (Xr = 0), M & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = tl(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Gc();
    (q !== e || te !== t) && ((Ke = null), (yn = Q() + 500), Ot(e, t));
    do
      try {
        Bp();
        break;
      } catch (u) {
        Xc(e, u);
      }
    while (!0);
    Go(),
      (yl.current = i),
      (M = l),
      K !== null ? (t = 0) : ((q = null), (te = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Bi(e)), l !== 0 && ((r = l), (t = vo(e, l)))), t === 1)
    )
      throw ((n = ar), Ot(e, 0), ut(e, r), me(e, Q()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !$p(l) &&
          ((t = wl(e, r)),
          t === 2 && ((i = Bi(e)), i !== 0 && ((r = i), (t = vo(e, i)))),
          t === 1))
      )
        throw ((n = ar), Ot(e, 0), ut(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Nt(e, fe, Ke);
          break;
        case 3:
          if (
            (ut(e, r), (r & 130023424) === r && ((t = cu + 500 - Q()), 10 < t))
          ) {
            if (tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Zi(Nt.bind(null, e, fe, Ke), t);
            break;
          }
          Nt(e, fe, Ke);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zi(Nt.bind(null, e, fe, Ke), r);
            break;
          }
          Nt(e, fe, Ke);
          break;
        case 5:
          Nt(e, fe, Ke);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Yc.bind(null, e) : null;
}
function vo(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && go(t)),
    e
  );
}
function go(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function $p(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~au,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ts(e) {
  if (M & 6) throw Error(w(327));
  an();
  var t = tl(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bi(e);
    r !== 0 && ((t = r), (n = vo(e, r)));
  }
  if (n === 1) throw ((n = ar), Ot(e, 0), ut(e, t), me(e, Q()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, fe, Ke),
    me(e, Q()),
    null
  );
}
function fu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((yn = Q() + 500), Ol && Et());
  }
}
function Ut(e) {
  at !== null && at.tag === 0 && !(M & 6) && an();
  var t = M;
  M |= 1;
  var n = Te.transition,
    r = D;
  try {
    if (((Te.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Te.transition = n), (M = t), !(M & 6) && Et();
  }
}
function du() {
  (ve = nn.current), A(nn);
}
function Ot(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yp(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Ko(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          hn(), A(pe), A(oe), tu();
          break;
        case 5:
          eu(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          A($);
          break;
        case 19:
          A($);
          break;
        case 10:
          Zo(r.type._context);
          break;
        case 22:
        case 23:
          du();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = vt(e.current, null)),
    (te = ve = t),
    (G = 0),
    (ar = null),
    (au = Il = At = 0),
    (fe = Hn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Xc(e, t) {
  do {
    var n = K;
    try {
      if ((Go(), (Hr.current = ml), hl)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        hl = !1;
      }
      if (
        ((Ft = 0),
        (J = X = V = null),
        (Bn = !1),
        (or = 0),
        (su.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (ar = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = ys(o);
          if (v !== null) {
            (v.flags &= -257),
              vs(v, o, u, i, t),
              v.mode & 1 && ms(i, a, t),
              (t = v),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ms(i, a, t), pu();
              break e;
            }
            s = Error(w(426));
          }
        } else if (U && u.mode & 1) {
          var z = ys(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              vs(z, o, u, i, t),
              Yo(mn(s, u));
            break e;
          }
        }
        (i = s = mn(s, u)),
          G !== 4 && (G = 2),
          Hn === null ? (Hn = [i]) : Hn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = Rc(i, s, t);
              as(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (mt === null || !mt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Oc(i, u, t);
                as(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Jc(n);
    } catch (S) {
      (t = S), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gc() {
  var e = yl.current;
  return (yl.current = ml), e === null ? ml : e;
}
function pu() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(At & 268435455) && !(Il & 268435455)) || ut(q, te);
}
function wl(e, t) {
  var n = M;
  M |= 2;
  var r = Gc();
  (q !== e || te !== t) && ((Ke = null), Ot(e, t));
  do
    try {
      Vp();
      break;
    } catch (l) {
      Xc(e, l);
    }
  while (!0);
  if ((Go(), (M = n), (yl.current = r), K !== null)) throw Error(w(261));
  return (q = null), (te = 0), G;
}
function Vp() {
  for (; K !== null; ) Zc(K);
}
function Bp() {
  for (; K !== null && !pd(); ) Zc(K);
}
function Zc(e) {
  var t = bc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jc(e) : (K = t),
    (su.current = null);
}
function Jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dp(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = Lp(n, t, ve)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function Nt(e, t, n) {
  var r = D,
    l = Te.transition;
  try {
    (Te.transition = null), (D = 1), Wp(e, t, n, r);
  } finally {
    (Te.transition = l), (D = r);
  }
  return null;
}
function Wp(e, t, n, r) {
  do an();
  while (at !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ed(e, i),
    e === q && ((K = q = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      ef(el, function () {
        return an(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Te.transition), (Te.transition = null);
    var o = D;
    D = 1;
    var u = M;
    (M |= 4),
      (su.current = null),
      Fp(e, n),
      Qc(n, e),
      ap(Xi),
      (nl = !!Yi),
      (Xi = Yi = null),
      (e.current = n),
      Ap(n),
      hd(),
      (M = u),
      (D = o),
      (Te.transition = i);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (at = e), (gl = l)),
    (i = e.pendingLanes),
    i === 0 && (mt = null),
    vd(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw ((vl = !1), (e = mo), (mo = null), e);
  return (
    gl & 1 && e.tag !== 0 && an(),
    (i = e.pendingLanes),
    i & 1 ? (e === yo ? Qn++ : ((Qn = 0), (yo = e))) : (Qn = 0),
    Et(),
    null
  );
}
function an() {
  if (at !== null) {
    var e = Ra(gl),
      t = Te.transition,
      n = D;
    try {
      if (((Te.transition = null), (D = 16 > e ? 16 : e), at === null))
        var r = !1;
      else {
        if (((e = at), (at = null), (gl = 0), M & 6)) throw Error(w(331));
        var l = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var i = P,
            o = i.child;
          if (P.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var p = P;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, p, i);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (P = h);
                  else
                    for (; P !== null; ) {
                      p = P;
                      var m = p.sibling,
                        v = p.return;
                      if ((Bc(p), p === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (P = m);
                        break;
                      }
                      P = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var k = g.child;
                if (k !== null) {
                  g.child = null;
                  do {
                    var z = k.sibling;
                    (k.sibling = null), (k = z);
                  } while (k !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (P = d);
                break e;
              }
              P = i.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (P = f);
          else
            e: for (o = c; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dl(9, u);
                  }
                } catch (S) {
                  W(u, u.return, S);
                }
              if (u === o) {
                P = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (P = y);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((M = l), Et(), We && typeof We.onPostCommitFiberRoot == "function")
        )
          try {
            We.onPostCommitFiberRoot(Nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Te.transition = t);
    }
  }
  return !1;
}
function js(e, t, n) {
  (t = mn(n, t)),
    (t = Rc(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = se()),
    e !== null && (pr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) js(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        js(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mt === null || !mt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = Oc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = se()),
            t !== null && (pr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (te & n) === n &&
      (G === 4 || (G === 3 && (te & 130023424) === te && 500 > Q() - cu)
        ? Ot(e, 0)
        : (au |= n)),
    me(e, t);
}
function qc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = se();
  (e = be(e, t)), e !== null && (pr(e, t, n), me(e, n));
}
function Qp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qc(e, n);
}
function Kp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), qc(e, n);
}
var bc;
bc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Mp(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), U && t.flags & 1048576 && rc(t, al, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Kr(e, t), (e = t.pendingProps);
      var l = fn(t, oe.current);
      sn(t, n), (l = ru(null, t, r, e, l, n));
      var i = lu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), ul(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            qo(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            ro(t, r, e, n),
            (t = oo(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && Qo(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Kr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Xp(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = io(null, t, r, e, n);
            break e;
          case 1:
            t = Ss(null, t, r, e, n);
            break e;
          case 11:
            t = gs(null, t, r, e, n);
            break e;
          case 14:
            t = ws(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        io(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ss(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ic(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ac(e, t),
          dl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = mn(Error(w(423)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(w(424)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else
            for (
              ge = pt(t.stateNode.containerInfo.firstChild),
                Se = t,
                U = !0,
                De = null,
                n = uc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cc(t),
        e === null && eo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Gi(r, l) ? (o = null) : i !== null && Gi(r, i) && (t.flags |= 32),
        Dc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && eo(t), null;
    case 13:
      return Fc(e, t, n);
    case 4:
      return (
        bo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        gs(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(cl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      to(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(w(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  to(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sn(t, n),
        (l = je(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        ws(e, t, r, l, n)
      );
    case 15:
      return Mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Kr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), ul(t)) : (e = !1),
        sn(t, n),
        jc(t, r, l),
        ro(t, r, l, n),
        oo(null, t, r, !0, e, n)
      );
    case 19:
      return Ac(e, t, n);
    case 22:
      return Lc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function ef(e, t) {
  return Na(e, t);
}
function Yp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Yp(e, t, n, r);
}
function hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xp(e) {
  if (typeof e == "function") return hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mo)) return 11;
    if (e === Lo) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) hu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return Mt(n.children, l, i, t);
      case Oo:
        (o = 8), (l |= 8);
        break;
      case Ni:
        return (
          (e = ze(12, n, t, l | 2)), (e.elementType = Ni), (e.lanes = i), e
        );
      case zi:
        return (e = ze(13, n, t, l)), (e.elementType = zi), (e.lanes = i), e;
      case Ti:
        return (e = ze(19, n, t, l)), (e.elementType = Ti), (e.lanes = i), e;
      case ca:
        return Fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sa:
              o = 10;
              break e;
            case aa:
              o = 9;
              break e;
            case Mo:
              o = 11;
              break e;
            case Lo:
              o = 14;
              break e;
            case lt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Mt(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = ca),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Si(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function ki(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ti(0)),
    (this.expirationTimes = ti(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ti(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function mu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Gp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qo(i),
    e
  );
}
function Zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tf(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return tc(e, n, t);
  }
  return t;
}
function nf(e, t, n, r, l, i, o, u, s) {
  return (
    (e = mu(n, r, !0, e, l, i, o, u, s)),
    (e.context = tf(null)),
    (n = e.current),
    (r = se()),
    (l = yt(n)),
    (i = Ze(r, l)),
    (i.callback = t ?? null),
    ht(n, i, l),
    (e.current.lanes = l),
    pr(e, l, r),
    me(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = yt(l);
  return (
    (n = tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, o)),
    e !== null && (Ae(e, l, o, i), Wr(e, l, o)),
    o
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yu(e, t) {
  Rs(e, t), (e = e.alternate) && Rs(e, t);
}
function Jp() {
  return null;
}
var rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vu(e) {
  this._internalRoot = e;
}
Ul.prototype.render = vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Al(e, t, null, null);
};
Ul.prototype.unmount = vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Al(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = La();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    ot.splice(n, 0, e), n === 0 && Ia(e);
  }
};
function gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Os() {}
function qp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Sl(o);
        i.call(a);
      };
    }
    var o = nf(t, r, e, 0, null, !1, !1, "", Os);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Sl(s);
      u.call(a);
    };
  }
  var s = mu(e, 0, !1, null, null, !1, !1, "", Os);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Al(t, s, n, r);
    }),
    s
  );
}
function Vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Sl(o);
        u.call(s);
      };
    }
    Al(t, o, e, l);
  } else o = qp(n, t, e, l, r);
  return Sl(o);
}
Oa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Fo(t, n | 1), me(t, Q()), !(M & 6) && ((yn = Q() + 500), Et()));
      }
      break;
    case 13:
      Ut(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = se();
          Ae(r, e, 1, l);
        }
      }),
        yu(e, 1);
  }
};
Ao = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = se();
      Ae(t, e, 134217728, n);
    }
    yu(e, 134217728);
  }
};
Ma = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = be(e, t);
    if (n !== null) {
      var r = se();
      Ae(n, e, t, r);
    }
    yu(e, t);
  }
};
La = function () {
  return D;
};
Da = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Oi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Rl(r);
            if (!l) throw Error(w(90));
            da(r), Oi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
ka = fu;
_a = Ut;
var bp = { usingClientEntryPoint: !1, Events: [mr, Zt, Rl, wa, Sa, fu] },
  Rn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  eh = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ca(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || Jp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (Nl = Ir.inject(eh)), (We = Ir);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bp;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gu(t)) throw Error(w(200));
  return Zp(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!gu(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = mu(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new vu(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = Ca(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Ut(e);
};
xe.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(w(200));
  return Vl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!gu(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = nf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[qe] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ul(t);
};
xe.render = function (e, t, n) {
  if (!$l(t)) throw Error(w(200));
  return Vl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = fu;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Vl(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function lf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf);
    } catch (e) {
      console.error(e);
    }
}
lf(), (la.exports = xe);
var th = la.exports,
  of,
  Ms = th;
(of = Ms.createRoot), Ms.hydrateRoot;
function nh({ headingText: e, paragraphText: t }) {
  return C.jsxs("header", {
    className: "header flex-column-center",
    children: [
      C.jsxs("h1", {
        className: "header__heading",
        children: [
          C.jsx("span", { className: "header__span", children: "✨" }),
          " ",
          e,
          C.jsx("span", { children: "✨" }),
        ],
      }),
      C.jsx("p", { className: "header__paragraph", children: t }),
    ],
  });
}
function b(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var rh = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Ls = rh,
  _i = () => Math.random().toString(36).substring(7).split("").join("."),
  lh = {
    INIT: `@@redux/INIT${_i()}`,
    REPLACE: `@@redux/REPLACE${_i()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_i()}`,
  },
  kl = lh;
function wu(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function uf(e, t, n) {
  if (typeof e != "function") throw new Error(b(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(b(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(b(1));
    return n(uf)(e, t);
  }
  let r = e,
    l = t,
    i = new Map(),
    o = i,
    u = 0,
    s = !1;
  function a() {
    o === i &&
      ((o = new Map()),
      i.forEach((z, d) => {
        o.set(d, z);
      }));
  }
  function p() {
    if (s) throw new Error(b(3));
    return l;
  }
  function h(z) {
    if (typeof z != "function") throw new Error(b(4));
    if (s) throw new Error(b(5));
    let d = !0;
    a();
    const c = u++;
    return (
      o.set(c, z),
      function () {
        if (d) {
          if (s) throw new Error(b(6));
          (d = !1), a(), o.delete(c), (i = null);
        }
      }
    );
  }
  function m(z) {
    if (!wu(z)) throw new Error(b(7));
    if (typeof z.type > "u") throw new Error(b(8));
    if (typeof z.type != "string") throw new Error(b(17));
    if (s) throw new Error(b(9));
    try {
      (s = !0), (l = r(l, z));
    } finally {
      s = !1;
    }
    return (
      (i = o).forEach((c) => {
        c();
      }),
      z
    );
  }
  function v(z) {
    if (typeof z != "function") throw new Error(b(10));
    (r = z), m({ type: kl.REPLACE });
  }
  function g() {
    const z = h;
    return {
      subscribe(d) {
        if (typeof d != "object" || d === null) throw new Error(b(11));
        function c() {
          const y = d;
          y.next && y.next(p());
        }
        return c(), { unsubscribe: z(c) };
      },
      [Ls]() {
        return this;
      },
    };
  }
  return (
    m({ type: kl.INIT }),
    { dispatch: m, subscribe: h, getState: p, replaceReducer: v, [Ls]: g }
  );
}
function ih(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: kl.INIT }) > "u") throw new Error(b(12));
    if (typeof n(void 0, { type: kl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(b(13));
  });
}
function oh(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let l;
  try {
    ih(n);
  } catch (i) {
    l = i;
  }
  return function (o = {}, u) {
    if (l) throw l;
    let s = !1;
    const a = {};
    for (let p = 0; p < r.length; p++) {
      const h = r[p],
        m = n[h],
        v = o[h],
        g = m(v, u);
      if (typeof g > "u") throw (u && u.type, new Error(b(14)));
      (a[h] = g), (s = s || g !== v);
    }
    return (s = s || r.length !== Object.keys(o).length), s ? a : o;
  };
}
function _l(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function uh(...e) {
  return (t) => (n, r) => {
    const l = t(n, r);
    let i = () => {
      throw new Error(b(15));
    };
    const o = { getState: l.getState, dispatch: (s, ...a) => i(s, ...a) },
      u = e.map((s) => s(o));
    return (i = _l(...u)(l.dispatch)), { ...l, dispatch: i };
  };
}
function sh(e) {
  return wu(e) && "type" in e && typeof e.type == "string";
}
var sf = Symbol.for("immer-nothing"),
  Ds = Symbol.for("immer-draftable"),
  _e = Symbol.for("immer-state");
function Ie(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var vn = Object.getPrototypeOf;
function $t(e) {
  return !!e && !!e[_e];
}
function tt(e) {
  var t;
  return e
    ? af(e) ||
        Array.isArray(e) ||
        !!e[Ds] ||
        !!((t = e.constructor) != null && t[Ds]) ||
        Wl(e) ||
        Hl(e)
    : !1;
}
var ah = Object.prototype.constructor.toString();
function af(e) {
  if (!e || typeof e != "object") return !1;
  const t = vn(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === ah;
}
function El(e, t) {
  Bl(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Bl(e) {
  const t = e[_e];
  return t ? t.type_ : Array.isArray(e) ? 1 : Wl(e) ? 2 : Hl(e) ? 3 : 0;
}
function wo(e, t) {
  return Bl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function cf(e, t, n) {
  const r = Bl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function ch(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Wl(e) {
  return e instanceof Map;
}
function Hl(e) {
  return e instanceof Set;
}
function zt(e) {
  return e.copy_ || e.base_;
}
function So(e, t) {
  if (Wl(e)) return new Map(e);
  if (Hl(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = af(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[_e];
    let l = Reflect.ownKeys(r);
    for (let i = 0; i < l.length; i++) {
      const o = l[i],
        u = r[o];
      u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
        (u.get || u.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: u.enumerable,
            value: e[o],
          });
    }
    return Object.create(vn(e), r);
  } else {
    const r = vn(e);
    if (r !== null && n) return { ...e };
    const l = Object.create(r);
    return Object.assign(l, e);
  }
}
function Su(e, t = !1) {
  return (
    Ql(e) ||
      $t(e) ||
      !tt(e) ||
      (Bl(e) > 1 && (e.set = e.add = e.clear = e.delete = fh),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Su(r, !0))),
    e
  );
}
function fh() {
  Ie(2);
}
function Ql(e) {
  return Object.isFrozen(e);
}
var dh = {};
function Vt(e) {
  const t = dh[e];
  return t || Ie(0, e), t;
}
var cr;
function ff() {
  return cr;
}
function ph(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Is(e, t) {
  t &&
    (Vt("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function ko(e) {
  _o(e), e.drafts_.forEach(hh), (e.drafts_ = null);
}
function _o(e) {
  e === cr && (cr = e.parent_);
}
function Fs(e) {
  return (cr = ph(cr, e));
}
function hh(e) {
  const t = e[_e];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function As(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[_e].modified_ && (ko(t), Ie(4)),
        tt(e) && ((e = xl(t, e)), t.parent_ || Cl(t, e)),
        t.patches_ &&
          Vt("Patches").generateReplacementPatches_(
            n[_e].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = xl(t, n, [])),
    ko(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== sf ? e : void 0
  );
}
function xl(e, t, n) {
  if (Ql(t)) return t;
  const r = t[_e];
  if (!r) return El(t, (l, i) => Us(e, r, t, l, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Cl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const l = r.copy_;
    let i = l,
      o = !1;
    r.type_ === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      El(i, (u, s) => Us(e, r, l, u, s, n, o)),
      Cl(e, l, !1),
      n &&
        e.patches_ &&
        Vt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Us(e, t, n, r, l, i, o) {
  if ($t(l)) {
    const u =
        i && t && t.type_ !== 3 && !wo(t.assigned_, r) ? i.concat(r) : void 0,
      s = xl(e, l, u);
    if ((cf(n, r, s), $t(s))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(l);
  if (tt(l) && !Ql(l)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    xl(e, l),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Cl(e, l);
  }
}
function Cl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Su(t, n);
}
function mh(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : ff(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let l = r,
    i = ku;
  n && ((l = [r]), (i = fr));
  const { revoke: o, proxy: u } = Proxy.revocable(l, i);
  return (r.draft_ = u), (r.revoke_ = o), u;
}
var ku = {
    get(e, t) {
      if (t === _e) return e;
      const n = zt(e);
      if (!wo(n, t)) return yh(e, n, t);
      const r = n[t];
      return e.finalized_ || !tt(r)
        ? r
        : r === Ei(e.base_, t)
          ? (xi(e), (e.copy_[t] = xo(r, e)))
          : r;
    },
    has(e, t) {
      return t in zt(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(zt(e));
    },
    set(e, t, n) {
      const r = df(zt(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const l = Ei(zt(e), t),
          i = l == null ? void 0 : l[_e];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (ch(n, l) && (n !== void 0 || wo(e.base_, t))) return !0;
        xi(e), Eo(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ei(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), xi(e), Eo(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = zt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Ie(11);
    },
    getPrototypeOf(e) {
      return vn(e.base_);
    },
    setPrototypeOf() {
      Ie(12);
    },
  },
  fr = {};
El(ku, (e, t) => {
  fr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
fr.deleteProperty = function (e, t) {
  return fr.set.call(this, e, t, void 0);
};
fr.set = function (e, t, n) {
  return ku.set.call(this, e[0], t, n, e[0]);
};
function Ei(e, t) {
  const n = e[_e];
  return (n ? zt(n) : e)[t];
}
function yh(e, t, n) {
  var l;
  const r = df(t, n);
  return r
    ? "value" in r
      ? r.value
      : (l = r.get) == null
        ? void 0
        : l.call(e.draft_)
    : void 0;
}
function df(e, t) {
  if (!(t in e)) return;
  let n = vn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = vn(n);
  }
}
function Eo(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Eo(e.parent_));
}
function xi(e) {
  e.copy_ || (e.copy_ = So(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var vh = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const o = this;
          return function (s = i, ...a) {
            return o.produce(s, (p) => n.call(this, p, ...a));
          };
        }
        typeof n != "function" && Ie(6),
          r !== void 0 && typeof r != "function" && Ie(7);
        let l;
        if (tt(t)) {
          const i = Fs(this),
            o = xo(t, void 0);
          let u = !0;
          try {
            (l = n(o)), (u = !1);
          } finally {
            u ? ko(i) : _o(i);
          }
          return Is(i, r), As(l, i);
        } else if (!t || typeof t != "object") {
          if (
            ((l = n(t)),
            l === void 0 && (l = t),
            l === sf && (l = void 0),
            this.autoFreeze_ && Su(l, !0),
            r)
          ) {
            const i = [],
              o = [];
            Vt("Patches").generateReplacementPatches_(t, l, i, o), r(i, o);
          }
          return l;
        } else Ie(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
        let r, l;
        return [
          this.produce(t, n, (o, u) => {
            (r = o), (l = u);
          }),
          r,
          l,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    tt(e) || Ie(8), $t(e) && (e = gh(e));
    const t = Fs(this),
      n = xo(e, void 0);
    return (n[_e].isManual_ = !0), _o(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[_e];
    (!n || !n.isManual_) && Ie(9);
    const { scope_: r } = n;
    return Is(r, t), As(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const l = t[n];
      if (l.path.length === 0 && l.op === "replace") {
        e = l.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Vt("Patches").applyPatches_;
    return $t(e) ? r(e, t) : this.produce(e, (l) => r(l, t));
  }
};
function xo(e, t) {
  const n = Wl(e)
    ? Vt("MapSet").proxyMap_(e, t)
    : Hl(e)
      ? Vt("MapSet").proxySet_(e, t)
      : mh(e, t);
  return (t ? t.scope_ : ff()).drafts_.push(n), n;
}
function gh(e) {
  return $t(e) || Ie(10, e), pf(e);
}
function pf(e) {
  if (!tt(e) || Ql(e)) return e;
  const t = e[_e];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = So(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = So(e, !0);
  return (
    El(n, (r, l) => {
      cf(n, r, pf(l));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ee = new vh(),
  hf = Ee.produce;
Ee.produceWithPatches.bind(Ee);
Ee.setAutoFreeze.bind(Ee);
Ee.setUseStrictShallowCopy.bind(Ee);
Ee.applyPatches.bind(Ee);
Ee.createDraft.bind(Ee);
Ee.finishDraft.bind(Ee);
function mf(e) {
  return ({ dispatch: n, getState: r }) =>
    (l) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : l(i);
}
var wh = mf(),
  Sh = mf,
  kh =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? _l
              : _l.apply(null, arguments);
        },
  _h = (e) => e && typeof e.match == "function";
function Kn(e, t) {
  function n(...r) {
    if (t) {
      let l = t(...r);
      if (!l) throw new Error(Qe(0));
      return {
        type: e,
        payload: l.payload,
        ...("meta" in l && { meta: l.meta }),
        ...("error" in l && { error: l.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => sh(r) && r.type === e),
    n
  );
}
var yf = class In extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, In.prototype);
  }
  static get [Symbol.species]() {
    return In;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new In(...t[0].concat(this))
      : new In(...t.concat(this));
  }
};
function $s(e) {
  return tt(e) ? hf(e, () => {}) : e;
}
function Vs(e, t, n) {
  if (e.has(t)) {
    let l = e.get(t);
    return n.update && ((l = n.update(l, t, e)), e.set(t, l)), l;
  }
  if (!n.insert) throw new Error(Qe(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Eh(e) {
  return typeof e == "boolean";
}
var xh = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: l = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let o = new yf();
      return n && (Eh(n) ? o.push(wh) : o.push(Sh(n.extraArgument))), o;
    },
  Ch = "RTK_autoBatch",
  vf = (e) => (t) => {
    setTimeout(t, e);
  },
  Ph =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : vf(10),
  Nh =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let l = !0,
        i = !1,
        o = !1;
      const u = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? Ph
              : e.type === "callback"
                ? e.queueNotification
                : vf(e.timeout),
        a = () => {
          (o = !1), i && ((i = !1), u.forEach((p) => p()));
        };
      return Object.assign({}, r, {
        subscribe(p) {
          const h = () => l && p(),
            m = r.subscribe(h);
          return (
            u.add(p),
            () => {
              m(), u.delete(p);
            }
          );
        },
        dispatch(p) {
          var h;
          try {
            return (
              (l = !((h = p == null ? void 0 : p.meta) != null && h[Ch])),
              (i = !l),
              i && (o || ((o = !0), s(a))),
              r.dispatch(p)
            );
          } finally {
            l = !0;
          }
        },
      });
    },
  zh = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let l = new yf(e);
      return r && l.push(Nh(typeof r == "object" ? r : void 0)), l;
    };
function Th(e) {
  const t = xh(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: l = !0,
      preloadedState: i = void 0,
      enhancers: o = void 0,
    } = e || {};
  let u;
  if (typeof n == "function") u = n;
  else if (wu(n)) u = oh(n);
  else throw new Error(Qe(1));
  let s;
  typeof r == "function" ? (s = r(t)) : (s = t());
  let a = _l;
  l && (a = kh({ trace: !1, ...(typeof l == "object" && l) }));
  const p = uh(...s),
    h = zh(p);
  let m = typeof o == "function" ? o(h) : h();
  const v = a(...m);
  return uf(u, i, v);
}
function gf(e) {
  const t = {},
    n = [];
  let r;
  const l = {
    addCase(i, o) {
      const u = typeof i == "string" ? i : i.type;
      if (!u) throw new Error(Qe(28));
      if (u in t) throw new Error(Qe(29));
      return (t[u] = o), l;
    },
    addMatcher(i, o) {
      return n.push({ matcher: i, reducer: o }), l;
    },
    addDefaultCase(i) {
      return (r = i), l;
    },
  };
  return e(l), [t, n, r];
}
function jh(e) {
  return typeof e == "function";
}
function Rh(e, t) {
  let [n, r, l] = gf(t),
    i;
  if (jh(e)) i = () => $s(e());
  else {
    const u = $s(e);
    i = () => u;
  }
  function o(u = i(), s) {
    let a = [
      n[s.type],
      ...r.filter(({ matcher: p }) => p(s)).map(({ reducer: p }) => p),
    ];
    return (
      a.filter((p) => !!p).length === 0 && (a = [l]),
      a.reduce((p, h) => {
        if (h)
          if ($t(p)) {
            const v = h(p, s);
            return v === void 0 ? p : v;
          } else {
            if (tt(p)) return hf(p, (m) => h(m, s));
            {
              const m = h(p, s);
              if (m === void 0) {
                if (p === null) return p;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return m;
            }
          }
        return p;
      }, u)
    );
  }
  return (o.getInitialState = i), o;
}
var Oh = (e, t) => (_h(e) ? e.match(t) : e(t));
function Mh(...e) {
  return (t) => e.some((n) => Oh(n, t));
}
var Lh = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Dh = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Lh[(Math.random() * 64) | 0];
    return t;
  },
  Ih = ["name", "message", "stack", "code"],
  Ci = class {
    constructor(e, t) {
      En(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Bs = class {
    constructor(e, t) {
      En(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Fh = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Ih) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Ah = (() => {
    function e(t, n, r) {
      const l = Kn(t + "/fulfilled", (s, a, p, h) => ({
          payload: s,
          meta: {
            ...(h || {}),
            arg: p,
            requestId: a,
            requestStatus: "fulfilled",
          },
        })),
        i = Kn(t + "/pending", (s, a, p) => ({
          payload: void 0,
          meta: {
            ...(p || {}),
            arg: a,
            requestId: s,
            requestStatus: "pending",
          },
        })),
        o = Kn(t + "/rejected", (s, a, p, h, m) => ({
          payload: h,
          error: ((r && r.serializeError) || Fh)(s || "Rejected"),
          meta: {
            ...(m || {}),
            arg: p,
            requestId: a,
            rejectedWithValue: !!h,
            requestStatus: "rejected",
            aborted: (s == null ? void 0 : s.name) === "AbortError",
            condition: (s == null ? void 0 : s.name) === "ConditionError",
          },
        }));
      function u(s) {
        return (a, p, h) => {
          const m = r != null && r.idGenerator ? r.idGenerator(s) : Dh(),
            v = new AbortController();
          let g, k;
          function z(c) {
            (k = c), v.abort();
          }
          const d = (async function () {
            var y, S;
            let c;
            try {
              let E =
                (y = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : y.call(r, s, { getState: p, extra: h });
              if (($h(E) && (E = await E), E === !1 || v.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const x = new Promise((_, L) => {
                (g = () => {
                  L({ name: "AbortError", message: k || "Aborted" });
                }),
                  v.signal.addEventListener("abort", g);
              });
              a(
                i(
                  m,
                  s,
                  (S = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : S.call(
                        r,
                        { requestId: m, arg: s },
                        { getState: p, extra: h },
                      ),
                ),
              ),
                (c = await Promise.race([
                  x,
                  Promise.resolve(
                    n(s, {
                      dispatch: a,
                      getState: p,
                      extra: h,
                      requestId: m,
                      signal: v.signal,
                      abort: z,
                      rejectWithValue: (_, L) => new Ci(_, L),
                      fulfillWithValue: (_, L) => new Bs(_, L),
                    }),
                  ).then((_) => {
                    if (_ instanceof Ci) throw _;
                    return _ instanceof Bs
                      ? l(_.payload, m, s, _.meta)
                      : l(_, m, s);
                  }),
                ]));
            } catch (E) {
              c =
                E instanceof Ci ? o(null, m, s, E.payload, E.meta) : o(E, m, s);
            } finally {
              g && v.signal.removeEventListener("abort", g);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(c) &&
                c.meta.condition) ||
                a(c),
              c
            );
          })();
          return Object.assign(d, {
            abort: z,
            requestId: m,
            arg: s,
            unwrap() {
              return d.then(Uh);
            },
          });
        };
      }
      return Object.assign(u, {
        pending: i,
        rejected: o,
        fulfilled: l,
        settled: Mh(o, l),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function Uh(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function $h(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Vh = Symbol.for("rtk-slice-createasyncthunk");
function Bh(e, t) {
  return `${e}/${t}`;
}
function Wh({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Vh];
  return function (l) {
    const { name: i, reducerPath: o = i } = l;
    if (!i) throw new Error(Qe(11));
    typeof process < "u";
    const u =
        (typeof l.reducers == "function" ? l.reducers(Kh()) : l.reducers) || {},
      s = Object.keys(u),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(f, y) {
          const S = typeof f == "string" ? f : f.type;
          if (!S) throw new Error(Qe(12));
          if (S in a.sliceCaseReducersByType) throw new Error(Qe(13));
          return (a.sliceCaseReducersByType[S] = y), p;
        },
        addMatcher(f, y) {
          return a.sliceMatchers.push({ matcher: f, reducer: y }), p;
        },
        exposeAction(f, y) {
          return (a.actionCreators[f] = y), p;
        },
        exposeCaseReducer(f, y) {
          return (a.sliceCaseReducersByName[f] = y), p;
        },
      };
    s.forEach((f) => {
      const y = u[f],
        S = {
          reducerName: f,
          type: Bh(i, f),
          createNotation: typeof l.reducers == "function",
        };
      Xh(y) ? Zh(S, y, p, t) : Yh(S, y, p);
    });
    function h() {
      const [f = {}, y = [], S = void 0] =
          typeof l.extraReducers == "function"
            ? gf(l.extraReducers)
            : [l.extraReducers],
        E = { ...f, ...a.sliceCaseReducersByType };
      return Rh(l.initialState, (x) => {
        for (let _ in E) x.addCase(_, E[_]);
        for (let _ of a.sliceMatchers) x.addMatcher(_.matcher, _.reducer);
        for (let _ of y) x.addMatcher(_.matcher, _.reducer);
        S && x.addDefaultCase(S);
      });
    }
    const m = (f) => f,
      v = new Map();
    let g;
    function k(f, y) {
      return g || (g = h()), g(f, y);
    }
    function z() {
      return g || (g = h()), g.getInitialState();
    }
    function d(f, y = !1) {
      function S(x) {
        let _ = x[f];
        return typeof _ > "u" && y && (_ = z()), _;
      }
      function E(x = m) {
        const _ = Vs(v, y, { insert: () => new WeakMap() });
        return Vs(_, x, {
          insert: () => {
            const L = {};
            for (const [R, ye] of Object.entries(l.selectors ?? {}))
              L[R] = Hh(ye, x, z, y);
            return L;
          },
        });
      }
      return {
        reducerPath: f,
        getSelectors: E,
        get selectors() {
          return E(S);
        },
        selectSlice: S,
      };
    }
    const c = {
      name: i,
      reducer: k,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: z,
      ...d(o),
      injectInto(f, { reducerPath: y, ...S } = {}) {
        const E = y ?? o;
        return (
          f.inject({ reducerPath: E, reducer: k }, S), { ...c, ...d(E, !0) }
        );
      },
    };
    return c;
  };
}
function Hh(e, t, n, r) {
  function l(i, ...o) {
    let u = t(i);
    return typeof u > "u" && r && (u = n()), e(u, ...o);
  }
  return (l.unwrapped = e), l;
}
var Qh = Wh();
function Kh() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Yh({ type: e, reducerName: t, createNotation: n }, r, l) {
  let i, o;
  if ("reducer" in r) {
    if (n && !Gh(r)) throw new Error(Qe(17));
    (i = r.reducer), (o = r.prepare);
  } else i = r;
  l.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, o ? Kn(e, o) : Kn(e));
}
function Xh(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Gh(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Zh({ type: e, reducerName: t }, n, r, l) {
  if (!l) throw new Error(Qe(18));
  const {
      payloadCreator: i,
      fulfilled: o,
      pending: u,
      rejected: s,
      settled: a,
      options: p,
    } = n,
    h = l(e, i, p);
  r.exposeAction(t, h),
    o && r.addCase(h.fulfilled, o),
    u && r.addCase(h.pending, u),
    s && r.addCase(h.rejected, s),
    a && r.addMatcher(h.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: o || Fr,
      pending: u || Fr,
      rejected: s || Fr,
      settled: a || Fr,
    });
}
function Fr() {}
function Qe(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class Jh {
  constructor(t, n) {
    En(this, "apiKey");
    En(this, "baseUrl");
    (this.apiKey = t), (this.baseUrl = n);
  }
  async fetch(t, n = 1, r = 5) {
    const l = `${this.baseUrl}?query=${encodeURIComponent(t)}&page=${n}&page_size=${r}&token=${this.apiKey}`,
      i = await fetch(l);
    if (!i.ok) return { sounds: [], count: 0 };
    const o = await i.json(),
      u = [];
    for (const s of o.results) {
      const a = await this.fetchSoundDetails(s.id);
      a.previews && a.previews["preview-hq-mp3"] && u.push(a);
    }
    return { sounds: u, count: o.count };
  }
  getTotalPages(t, n = 5) {
    return Math.ceil(t / n);
  }
  async fetchSoundDetails(t) {
    const n = `https://freesound.org/apiv2/sounds/${t}/?token=${this.apiKey}`;
    try {
      const r = await fetch(n);
      if (!r.ok) throw new Error(`error: ${r.status}`);
      return await r.json();
    } catch (r) {
      throw (console.error(r), r);
    }
  }
}
const qh = "qVQelC7P3hEJ5xqbKQdWY38YXfnxtRx5vzgsUx4u",
  bh = "https://freesound.org/apiv2/search/text/",
  em = { sounds: [], loading: !1, error: null, totalPages: 0 },
  tm = new Jh(qh, bh),
  Zr = Ah("sounds/fetchSounds", async (e) => {
    const t = await tm.fetch(e);
    return { sounds: t.sounds, count: t.count };
  }),
  nm = Qh({
    name: "sounds",
    initialState: em,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(Zr.pending, (t) => {
        (t.loading = !0), (t.error = null);
      })
        .addCase(Zr.fulfilled, (t, n) => {
          (t.loading = !1),
            (t.sounds = n.payload.sounds),
            (t.totalPages = Math.ceil(n.payload.count / 5));
        })
        .addCase(Zr.rejected, (t, n) => {
          (t.loading = !1), (t.error = n.error.message ?? null);
        });
    },
  }),
  rm = nm.reducer;
var wf = { exports: {} },
  Sf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr = Y;
function lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var im = typeof Object.is == "function" ? Object.is : lm,
  om = vr.useSyncExternalStore,
  um = vr.useRef,
  sm = vr.useEffect,
  am = vr.useMemo,
  cm = vr.useDebugValue;
Sf.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var i = um(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = am(
    function () {
      function s(v) {
        if (!a) {
          if (((a = !0), (p = v), (v = r(v)), l !== void 0 && o.hasValue)) {
            var g = o.value;
            if (l(g, v)) return (h = g);
          }
          return (h = v);
        }
        if (((g = h), im(p, v))) return g;
        var k = r(v);
        return l !== void 0 && l(g, k) ? g : ((p = v), (h = k));
      }
      var a = !1,
        p,
        h,
        m = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        m === null
          ? void 0
          : function () {
              return s(m());
            },
      ];
    },
    [t, n, r, l],
  );
  var u = om(e, i[0], i[1]);
  return (
    sm(
      function () {
        (o.hasValue = !0), (o.value = u);
      },
      [u],
    ),
    cm(u),
    u
  );
};
wf.exports = Sf;
var fm = wf.exports,
  we = "default" in Nu ? na : Nu,
  Ws = Symbol.for("react-redux-context"),
  Hs = typeof globalThis < "u" ? globalThis : {};
function dm() {
  if (!we.createContext) return {};
  const e = Hs[Ws] ?? (Hs[Ws] = new Map());
  let t = e.get(we.createContext);
  return t || ((t = we.createContext(null)), e.set(we.createContext, t)), t;
}
var St = dm(),
  pm = () => {
    throw new Error("uSES not initialized!");
  };
function _u(e = St) {
  return function () {
    return we.useContext(e);
  };
}
var kf = _u(),
  _f = pm,
  hm = (e) => {
    _f = e;
  },
  mm = (e, t) => e === t;
function ym(e = St) {
  const t = e === St ? kf : _u(e),
    n = (r, l = {}) => {
      const { equalityFn: i = mm, devModeChecks: o = {} } =
          typeof l == "function" ? { equalityFn: l } : l,
        {
          store: u,
          subscription: s,
          getServerState: a,
          stabilityCheck: p,
          identityFunctionCheck: h,
        } = t();
      we.useRef(!0);
      const m = we.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r, p, o.stabilityCheck],
        ),
        v = _f(s.addNestedSub, u.getState, a || u.getState, m, i);
      return we.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Kl = ym();
function vm(e) {
  e();
}
function gm() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      vm(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const l = (t = { callback: n, next: null, prev: t });
      return (
        l.prev ? (l.prev.next = l) : (e = l),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            l.next ? (l.next.prev = l.prev) : (t = l.prev),
            l.prev ? (l.prev.next = l.next) : (e = l.next));
        }
      );
    },
  };
}
var Qs = { notify() {}, get: () => [] };
function wm(e, t) {
  let n,
    r = Qs,
    l = 0,
    i = !1;
  function o(k) {
    p();
    const z = r.subscribe(k);
    let d = !1;
    return () => {
      d || ((d = !0), z(), h());
    };
  }
  function u() {
    r.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function a() {
    return i;
  }
  function p() {
    l++, n || ((n = e.subscribe(s)), (r = gm()));
  }
  function h() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Qs));
  }
  function m() {
    i || ((i = !0), p());
  }
  function v() {
    i && ((i = !1), h());
  }
  const g = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: m,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return g;
}
var Sm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  km = typeof navigator < "u" && navigator.product === "ReactNative",
  _m = Sm || km ? we.useLayoutEffect : we.useEffect;
function Em({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  identityFunctionCheck: i = "once",
}) {
  const o = we.useMemo(() => {
      const a = wm(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        identityFunctionCheck: i,
      };
    }, [e, r, l, i]),
    u = we.useMemo(() => e.getState(), [e]);
  _m(() => {
    const { subscription: a } = o;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      u !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [o, u]);
  const s = t || St;
  return we.createElement(s.Provider, { value: o }, n);
}
var xm = Em;
function Ef(e = St) {
  const t = e === St ? kf : _u(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Cm = Ef();
function Pm(e = St) {
  const t = e === St ? Cm : Ef(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Nm = Pm();
hm(fm.useSyncExternalStoreWithSelector);
function zm({ className: e, placeholder: t, buttonText: n, onSubmit: r }) {
  const [l, i] = Y.useState(""),
    o = Nm(),
    u = (s) => {
      s.preventDefault(), o(Zr(l)), r(), i("");
    };
  return C.jsxs("form", {
    className: `${e}__searching-form flex-row-space-between`,
    onSubmit: u,
    children: [
      C.jsx("input", {
        name: "searching-form",
        className: `${e}__searching-form__input`,
        type: "text",
        placeholder: t,
        value: l,
        onChange: (s) => i(s.target.value),
      }),
      C.jsx("button", {
        className: `${e}__searching-form__button`,
        type: "submit",
        children: n,
      }),
    ],
  });
}
function xf({ preview: e, isPlaying: t, onEnded: n, audioRef: r }) {
  return (
    Y.useEffect(() => {
      r.current &&
        (t
          ? r.current.play()
          : (r.current.pause(), (r.current.currentTime = 0)));
    }, [t, r]),
    C.jsx("audio", { src: e, ref: r, onEnded: n })
  );
}
function Tm({ className: e, index: t, preview: n }) {
  const [r, l] = Y.useState(!1),
    i = Y.useRef(null),
    o = () => {
      l((u) => !u);
    };
  return C.jsxs("div", {
    className: `${e}__pad${t}`,
    onClick: o,
    children: [
      C.jsx(xf, { preview: n, isPlaying: r, audioRef: i }),
      C.jsx("p", {}),
    ],
  });
}
function Lt({ children: e, className: t, onClick: n, disabled: r }) {
  return C.jsx("button", {
    onClick: n,
    className: `${t}__button`,
    disabled: r,
    children: e,
  });
}
const jm =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='-10%20-6%2070%2070'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205%20c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103%20c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z%20M49.524,29.612L9.504,52.716%20c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243%20c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249%20C49.663,29.47,49.611,29.561,49.524,29.612z'%20fill='%231b2a6e'/%3e%3c/g%3e%3c/svg%3e",
  Rm =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3e%3cg%20id='pause'%3e%3cpath%20d='M11.12,2H7.88A2.88,2.88,0,0,0,5,4.88V27.12A2.88,2.88,0,0,0,7.88,30h3.24A2.88,2.88,0,0,0,14,27.12V4.88A2.88,2.88,0,0,0,11.12,2ZM12,27.12a.89.89,0,0,1-.88.88H7.88A.89.89,0,0,1,7,27.12V4.88A.89.89,0,0,1,7.88,4h3.24a.89.89,0,0,1,.88.88Z'%20fill='%231b2a6e'/%3e%3cpath%20d='M24.12,2H20.88A2.88,2.88,0,0,0,18,4.88V27.12A2.88,2.88,0,0,0,20.88,30h3.24A2.88,2.88,0,0,0,27,27.12V4.88A2.88,2.88,0,0,0,24.12,2ZM25,27.12a.89.89,0,0,1-.88.88H20.88a.89.89,0,0,1-.88-.88V4.88A.89.89,0,0,1,20.88,4h3.24a.89.89,0,0,1,.88.88Z'%20fill='%231b2a6e'/%3e%3c/g%3e%3c/svg%3e";
function Om({ options: e, selectedOption: t, onChange: n }) {
  return C.jsxs("select", {
    value: t,
    onChange: n,
    children: [
      C.jsx("option", { value: "", disabled: !0, children: "select" }),
      e.map((r, l) => C.jsx("option", { value: r, children: r }, l)),
    ],
  });
}
function Mm({ musicName: e, preview: t, isActive: n, onPlay: r }) {
  const [l, i] = Y.useState(!1),
    [o, u] = Y.useState(""),
    s = Y.useRef(null),
    { loading: a, error: p } = Kl((g) => g.sounds),
    h = () => {
      i(!l), l || r(s.current);
    };
  Y.useEffect(() => {
    (a || p) && i(!1);
  }, [a, p]);
  const m = () => {
      i(!1);
    },
    v = (g) => {
      u(g.target.value);
    };
  return C.jsxs("div", {
    className: "music-controls flex-row-space-between",
    children: [
      C.jsx(xf, { preview: t, isPlaying: l && n, onEnded: m, audioRef: s }),
      C.jsx(Lt, {
        className: "music-player",
        onClick: h,
        children: C.jsx("img", { src: l && n ? Rm : jm, alt: "play/pause" }),
      }),
      C.jsx("p", { className: "music-player__paragraph", children: e }),
      C.jsx(Om, {
        options: ["#1", "#2", "#3", "#4", "#5", "#6"],
        selectedOption: o,
        onChange: v,
      }),
      C.jsx(Lt, {
        className: "music-player__add",
        onClick: () => console.log("heh"),
        children: "add",
      }),
    ],
  });
}
function Lm({ totalItems: e, itemsPerPage: t }) {
  const [n, r] = Y.useState(1),
    l = Math.ceil(e / t),
    i = 5;
  let o = Math.max(2, n - Math.floor(i / 2)),
    u = Math.min(l - 1, n + Math.floor(i / 2));
  o > u - i + 1 && (o = Math.max(2, u - i + 1));
  const s = Array.from({ length: u - o + 1 }, (a, p) => o + p);
  return C.jsxs("div", {
    className: "pagination__div flex-row-center",
    children: [
      C.jsx(Lt, {
        className: n === 1 ? "active pagination" : "pagination",
        onClick: () => r(1),
        disabled: n === 1,
        children: "1",
      }),
      o > 2 &&
        C.jsx("span", { className: "skip-pagination__span", children: "..." }),
      s.map((a, p) =>
        C.jsx(
          Lt,
          {
            className: n === a ? "active pagination" : "pagination",
            onClick: () => r(a),
            disabled: n === a,
            children: a,
          },
          p,
        ),
      ),
      u < l - 1 &&
        C.jsx("span", { className: "skip-pagination__span", children: "..." }),
      C.jsx(Lt, {
        className: n === l ? "active pagination" : "pagination",
        onClick: () => r(l),
        disabled: n === l,
        children: l,
      }),
    ],
  });
}
function Dm() {
  const { sounds: e } = Kl((o) => o.sounds),
    t = Y.useRef(null),
    [n, r] = Y.useState(null),
    l = Math.min(e.length, 5),
    i = (o, u) => {
      t.current &&
        t.current !== o &&
        (t.current.pause(), (t.current.currentTime = 0)),
        (t.current = o),
        r(u);
    };
  return C.jsxs("div", {
    className: "compositions-list__div flex-column-center",
    children: [
      Array.from({ length: l }, (o, u) => {
        var s;
        return C.jsx(
          Mm,
          {
            musicName: e[u].name,
            preview: (s = e[u].previews) == null ? void 0 : s["preview-hq-mp3"],
            isActive: n === u,
            onPlay: (a) => i(a, u),
          },
          e[u].id,
        );
      }),
      C.jsx(Lm, { itemsPerPage: 5, totalItems: 1e4 }),
    ],
  });
}
function Im() {
  const [e, t] = Y.useState(!1),
    { loading: n } = Kl((r) => r.sounds);
  return C.jsxs("main", {
    className: "main flex-column-space-between",
    children: [
      C.jsxs("div", {
        className: "serching-wrapper__div flex-column-center",
        children: [
          C.jsx(zm, {
            className: "main",
            placeholder: "type sound name here",
            buttonText: "search",
            onSubmit: () => t(!0),
          }),
          e && !n && C.jsx(Dm, {}),
        ],
      }),
      C.jsx("div", {
        className: "main__pads",
        children: Array.from({ length: 6 }, (r, l) =>
          C.jsx(Tm, { className: "main", index: l, preview: "" }, l),
        ),
      }),
    ],
  });
}
const Fm = "/tap-music/assets/freesound-BQK7IBpT.svg";
function Am({ handleClick: e }) {
  return C.jsxs("div", {
    className: "footer-links__container",
    children: [
      C.jsx("a", {
        href: "https://github.com/dziaucho",
        className: "footer__author-link",
        children: "dziaucho",
      }),
      C.jsx("a", {
        href: "https://freesound.org",
        children: C.jsx("img", {
          src: Fm,
          alt: "freesound logo",
          className: "footer__author-link__img",
        }),
      }),
      C.jsx(Lt, { className: "footer-hide", onClick: e, children: "✖" }),
    ],
  });
}
function Um({ handleClick: e }) {
  return C.jsx(Lt, { className: "footer-show", onClick: e, children: "👀" });
}
function $m() {
  const [e, t] = Y.useState(!1),
    n = () => {
      t((r) => !r);
    };
  return C.jsx("footer", {
    className: "footer",
    children: e ? C.jsx(Am, { handleClick: n }) : C.jsx(Um, { handleClick: n }),
  });
}
function Vm({ onClick: e }) {
  return C.jsxs("div", {
    className: "wip__div",
    children: [
      C.jsx("p", {
        className: "wip__paragraph",
        children: "hii! wip. please keep this in mind and have a good day :)",
      }),
      C.jsx("button", { onClick: e, className: "wip__button", children: "x" }),
    ],
  });
}
function Bm() {
  return C.jsxs("div", {
    className: "loading message__div flex-column-center",
    children: [
      C.jsx("h2", {
        className: "loading message__heading",
        children: "loading",
      }),
      C.jsxs("div", {
        className: "loading message__animation-container flex-row-center",
        children: [
          C.jsx("span", { className: "message__animation dot" }),
          C.jsx("span", { className: "message__animation dot" }),
          C.jsx("span", { className: "message__animation dot" }),
        ],
      }),
    ],
  });
}
function Wm({ text: e }) {
  return C.jsxs("div", {
    className: "error message__div flex-column-center",
    children: [
      C.jsx("h2", { className: "error message__heading", children: "oops..." }),
      C.jsxs("p", {
        className: "error message__paragraph",
        children: [" ", e],
      }),
    ],
  });
}
function Hm() {
  const [e, t] = Y.useState(!0),
    { loading: n, error: r } = Kl((l) => l.sounds);
  return C.jsxs("div", {
    className: "app",
    children: [
      e && C.jsx(Vm, { onClick: () => t(!1) }),
      n && C.jsx(Bm, {}),
      r && C.jsx(Wm, { text: r }),
      C.jsx(nh, {
        headingText: "tap music",
        paragraphText: "create music with just a few clicks!",
      }),
      C.jsx(Im, {}),
      C.jsx($m, {}),
    ],
  });
}
const Qm = Th({ reducer: { sounds: rm } });
of(document.getElementById("root")).render(
  C.jsx(Y.StrictMode, {
    children: C.jsx(xm, { store: Qm, children: C.jsx(Hm, {}) }),
  }),
);
