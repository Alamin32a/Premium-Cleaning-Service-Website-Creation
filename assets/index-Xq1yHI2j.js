const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/contact-BQ8DwKj7.js", "assets/QuoteForm-CAw84oPG.js", "assets/label-D9xB3NnT.js", "assets/sparkles-Cyrk90rw.js", "assets/shield-check-CYcM5vpw.js", "assets/circle-check-ec9THApy.js", "assets/admin-DIRVmukV.js", "assets/index-CI7V45bY.js", "assets/building-2-B3mzb2Um.js", "assets/users-DmWDLijo.js", "assets/search-CfuwyKc0.js", "assets/star-cIHYGjoK.js", "assets/about-DXF2NjG8.js", "assets/trust-portrait-CGl_H_dx.js", "assets/quote-Cssqv_dH.js", "assets/index-CXy4G_rk.js", "assets/ServiceIcon-BIv2hDIU.js", "assets/arrow-right-BEiXhoyA.js", "assets/services.index-BMsvtnzn.js", "assets/services._slug-CwlSXjL2.js"]))) => i.map(i => d[i]);

function Fb(n, i) {
    for (var s = 0; s < i.length; s++) {
        const o = i[s];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const c in o)
                if (c !== "default" && !(c in n)) {
                    const f = Object.getOwnPropertyDescriptor(o, c);
                    f && Object.defineProperty(n, c, f.get ? f : {
                        enumerable: !0,
                        get: () => o[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}

function $g(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var qu = {
        exports: {}
    },
    pr = {};
var Mp;

function Zb() {
    if (Mp) return pr;
    Mp = 1;
    var n = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function s(o, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
            f = {};
            for (var m in c) m !== "key" && (f[m] = c[m])
        } else f = c;
        return c = f.ref, {
            $$typeof: n,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return pr.Fragment = i, pr.jsx = s, pr.jsxs = s, pr
}
var Op;

function Jb() {
    return Op || (Op = 1, qu.exports = Zb()), qu.exports
}
var z = Jb(),
    Yu = {
        exports: {}
    },
    vt = {};
var zp;

function Ib() {
    if (zp) return vt;
    zp = 1;
    var n = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        h = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function x(A) {
        return A === null || typeof A != "object" ? null : (A = S && A[S] || A["@@iterator"], typeof A == "function" ? A : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        M = Object.assign,
        _ = {};

    function R(A, V, X) {
        this.props = A, this.context = V, this.refs = _, this.updater = X || E
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(A, V) {
        if (typeof A != "object" && typeof A != "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, V, "setState")
    }, R.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function q() {}
    q.prototype = R.prototype;

    function Y(A, V, X) {
        this.props = A, this.context = V, this.refs = _, this.updater = X || E
    }
    var H = Y.prototype = new q;
    H.constructor = Y, M(H, R.prototype), H.isPureReactComponent = !0;
    var nt = Array.isArray;

    function I() {}
    var P = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        j = Object.prototype.hasOwnProperty;

    function W(A, V, X) {
        var J = X.ref;
        return {
            $$typeof: n,
            type: A,
            key: V,
            ref: J !== void 0 ? J : null,
            props: X
        }
    }

    function ut(A, V) {
        return W(A.type, V, A.props)
    }

    function st(A) {
        return typeof A == "object" && A !== null && A.$$typeof === n
    }

    function pt(A) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(X) {
            return V[X]
        })
    }
    var bt = /\/+/g;

    function jt(A, V) {
        return typeof A == "object" && A !== null && A.key != null ? pt("" + A.key) : V.toString(36)
    }

    function Et(A) {
        switch (A.status) {
            case "fulfilled":
                return A.value;
            case "rejected":
                throw A.reason;
            default:
                switch (typeof A.status == "string" ? A.then(I, I) : (A.status = "pending", A.then(function(V) {
                    A.status === "pending" && (A.status = "fulfilled", A.value = V)
                }, function(V) {
                    A.status === "pending" && (A.status = "rejected", A.reason = V)
                })), A.status) {
                    case "fulfilled":
                        return A.value;
                    case "rejected":
                        throw A.reason
                }
        }
        throw A
    }

    function D(A, V, X, J, Z) {
        var at = typeof A;
        (at === "undefined" || at === "boolean") && (A = null);
        var yt = !1;
        if (A === null) yt = !0;
        else switch (at) {
            case "bigint":
            case "string":
            case "number":
                yt = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case n:
                    case i:
                        yt = !0;
                        break;
                    case v:
                        return yt = A._init, D(yt(A._payload), V, X, J, Z)
                }
        }
        if (yt) return Z = Z(A), yt = J === "" ? "." + jt(A, 0) : J, nt(Z) ? (X = "", yt != null && (X = yt.replace(bt, "$&/") + "/"), D(Z, V, X, "", function(xe) {
            return xe
        })) : Z != null && (st(Z) && (Z = ut(Z, X + (Z.key == null || A && A.key === Z.key ? "" : ("" + Z.key).replace(bt, "$&/") + "/") + yt)), V.push(Z)), 1;
        yt = 0;
        var mt = J === "" ? "." : J + ":";
        if (nt(A))
            for (var dt = 0; dt < A.length; dt++) J = A[dt], at = mt + jt(J, dt), yt += D(J, V, X, at, Z);
        else if (dt = x(A), typeof dt == "function")
            for (A = dt.call(A), dt = 0; !(J = A.next()).done;) J = J.value, at = mt + jt(J, dt++), yt += D(J, V, X, at, Z);
        else if (at === "object") {
            if (typeof A.then == "function") return D(Et(A), V, X, J, Z);
            throw V = String(A), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
        }
        return yt
    }

    function F(A, V, X) {
        if (A == null) return A;
        var J = [],
            Z = 0;
        return D(A, J, "", "", function(at) {
            return V.call(X, at, Z++)
        }), J
    }

    function it(A) {
        if (A._status === -1) {
            var V = A._result;
            V = V(), V.then(function(X) {
                (A._status === 0 || A._status === -1) && (A._status = 1, A._result = X)
            }, function(X) {
                (A._status === 0 || A._status === -1) && (A._status = 2, A._result = X)
            }), A._status === -1 && (A._status = 0, A._result = V)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var St = typeof reportError == "function" ? reportError : function(A) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var V = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                    error: A
                });
                if (!window.dispatchEvent(V)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", A);
                return
            }
            console.error(A)
        },
        $ = {
            map: F,
            forEach: function(A, V, X) {
                F(A, function() {
                    V.apply(this, arguments)
                }, X)
            },
            count: function(A) {
                var V = 0;
                return F(A, function() {
                    V++
                }), V
            },
            toArray: function(A) {
                return F(A, function(V) {
                    return V
                }) || []
            },
            only: function(A) {
                if (!st(A)) throw Error("React.Children.only expected to receive a single React element child.");
                return A
            }
        };
    return vt.Activity = h, vt.Children = $, vt.Component = R, vt.Fragment = s, vt.Profiler = c, vt.PureComponent = Y, vt.StrictMode = o, vt.Suspense = y, vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, vt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(A) {
            return P.H.useMemoCache(A)
        }
    }, vt.cache = function(A) {
        return function() {
            return A.apply(null, arguments)
        }
    }, vt.cacheSignal = function() {
        return null
    }, vt.cloneElement = function(A, V, X) {
        if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
        var J = M({}, A.props),
            Z = A.key;
        if (V != null)
            for (at in V.key !== void 0 && (Z = "" + V.key), V) !j.call(V, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && V.ref === void 0 || (J[at] = V[at]);
        var at = arguments.length - 2;
        if (at === 1) J.children = X;
        else if (1 < at) {
            for (var yt = Array(at), mt = 0; mt < at; mt++) yt[mt] = arguments[mt + 2];
            J.children = yt
        }
        return W(A.type, Z, J)
    }, vt.createContext = function(A) {
        return A = {
            $$typeof: d,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, A.Provider = A, A.Consumer = {
            $$typeof: f,
            _context: A
        }, A
    }, vt.createElement = function(A, V, X) {
        var J, Z = {},
            at = null;
        if (V != null)
            for (J in V.key !== void 0 && (at = "" + V.key), V) j.call(V, J) && J !== "key" && J !== "__self" && J !== "__source" && (Z[J] = V[J]);
        var yt = arguments.length - 2;
        if (yt === 1) Z.children = X;
        else if (1 < yt) {
            for (var mt = Array(yt), dt = 0; dt < yt; dt++) mt[dt] = arguments[dt + 2];
            Z.children = mt
        }
        if (A && A.defaultProps)
            for (J in yt = A.defaultProps, yt) Z[J] === void 0 && (Z[J] = yt[J]);
        return W(A, at, Z)
    }, vt.createRef = function() {
        return {
            current: null
        }
    }, vt.forwardRef = function(A) {
        return {
            $$typeof: m,
            render: A
        }
    }, vt.isValidElement = st, vt.lazy = function(A) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: it
        }
    }, vt.memo = function(A, V) {
        return {
            $$typeof: g,
            type: A,
            compare: V === void 0 ? null : V
        }
    }, vt.startTransition = function(A) {
        var V = P.T,
            X = {};
        P.T = X;
        try {
            var J = A(),
                Z = P.S;
            Z !== null && Z(X, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(I, St)
        } catch (at) {
            St(at)
        } finally {
            V !== null && X.types !== null && (V.types = X.types), P.T = V
        }
    }, vt.unstable_useCacheRefresh = function() {
        return P.H.useCacheRefresh()
    }, vt.use = function(A) {
        return P.H.use(A)
    }, vt.useActionState = function(A, V, X) {
        return P.H.useActionState(A, V, X)
    }, vt.useCallback = function(A, V) {
        return P.H.useCallback(A, V)
    }, vt.useContext = function(A) {
        return P.H.useContext(A)
    }, vt.useDebugValue = function() {}, vt.useDeferredValue = function(A, V) {
        return P.H.useDeferredValue(A, V)
    }, vt.useEffect = function(A, V) {
        return P.H.useEffect(A, V)
    }, vt.useEffectEvent = function(A) {
        return P.H.useEffectEvent(A)
    }, vt.useId = function() {
        return P.H.useId()
    }, vt.useImperativeHandle = function(A, V, X) {
        return P.H.useImperativeHandle(A, V, X)
    }, vt.useInsertionEffect = function(A, V) {
        return P.H.useInsertionEffect(A, V)
    }, vt.useLayoutEffect = function(A, V) {
        return P.H.useLayoutEffect(A, V)
    }, vt.useMemo = function(A, V) {
        return P.H.useMemo(A, V)
    }, vt.useOptimistic = function(A, V) {
        return P.H.useOptimistic(A, V)
    }, vt.useReducer = function(A, V, X) {
        return P.H.useReducer(A, V, X)
    }, vt.useRef = function(A) {
        return P.H.useRef(A)
    }, vt.useState = function(A) {
        return P.H.useState(A)
    }, vt.useSyncExternalStore = function(A, V, X) {
        return P.H.useSyncExternalStore(A, V, X)
    }, vt.useTransition = function() {
        return P.H.useTransition()
    }, vt.version = "19.2.5", vt
}
var Np;

function Nr() {
    return Np || (Np = 1, Yu.exports = Ib()), Yu.exports
}
var et = Nr();
const tt = $g(et),
    $b = Fb({
        __proto__: null,
        default: tt
    }, [et]);
var Gu = {
        exports: {}
    },
    gr = {},
    Vu = {
        exports: {}
    },
    Qu = {};
var Dp;

function Wb() {
    return Dp || (Dp = 1, (function(n) {
        function i(D, F) {
            var it = D.length;
            D.push(F);
            t: for (; 0 < it;) {
                var St = it - 1 >>> 1,
                    $ = D[St];
                if (0 < c($, F)) D[St] = F, D[it] = $, it = St;
                else break t
            }
        }

        function s(D) {
            return D.length === 0 ? null : D[0]
        }

        function o(D) {
            if (D.length === 0) return null;
            var F = D[0],
                it = D.pop();
            if (it !== F) {
                D[0] = it;
                t: for (var St = 0, $ = D.length, A = $ >>> 1; St < A;) {
                    var V = 2 * (St + 1) - 1,
                        X = D[V],
                        J = V + 1,
                        Z = D[J];
                    if (0 > c(X, it)) J < $ && 0 > c(Z, X) ? (D[St] = Z, D[J] = it, St = J) : (D[St] = X, D[V] = it, St = V);
                    else if (J < $ && 0 > c(Z, it)) D[St] = Z, D[J] = it, St = J;
                    else break t
                }
            }
            return F
        }

        function c(D, F) {
            var it = D.sortIndex - F.sortIndex;
            return it !== 0 ? it : D.id - F.id
        }
        if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date,
                m = d.now();
            n.unstable_now = function() {
                return d.now() - m
            }
        }
        var y = [],
            g = [],
            v = 1,
            h = null,
            S = 3,
            x = !1,
            E = !1,
            M = !1,
            _ = !1,
            R = typeof setTimeout == "function" ? setTimeout : null,
            q = typeof clearTimeout == "function" ? clearTimeout : null,
            Y = typeof setImmediate < "u" ? setImmediate : null;

        function H(D) {
            for (var F = s(g); F !== null;) {
                if (F.callback === null) o(g);
                else if (F.startTime <= D) o(g), F.sortIndex = F.expirationTime, i(y, F);
                else break;
                F = s(g)
            }
        }

        function nt(D) {
            if (M = !1, H(D), !E)
                if (s(y) !== null) E = !0, I || (I = !0, pt());
                else {
                    var F = s(g);
                    F !== null && Et(nt, F.startTime - D)
                }
        }
        var I = !1,
            P = -1,
            j = 5,
            W = -1;

        function ut() {
            return _ ? !0 : !(n.unstable_now() - W < j)
        }

        function st() {
            if (_ = !1, I) {
                var D = n.unstable_now();
                W = D;
                var F = !0;
                try {
                    t: {
                        E = !1,
                        M && (M = !1, q(P), P = -1),
                        x = !0;
                        var it = S;
                        try {
                            e: {
                                for (H(D), h = s(y); h !== null && !(h.expirationTime > D && ut());) {
                                    var St = h.callback;
                                    if (typeof St == "function") {
                                        h.callback = null, S = h.priorityLevel;
                                        var $ = St(h.expirationTime <= D);
                                        if (D = n.unstable_now(), typeof $ == "function") {
                                            h.callback = $, H(D), F = !0;
                                            break e
                                        }
                                        h === s(y) && o(y), H(D)
                                    } else o(y);
                                    h = s(y)
                                }
                                if (h !== null) F = !0;
                                else {
                                    var A = s(g);
                                    A !== null && Et(nt, A.startTime - D), F = !1
                                }
                            }
                            break t
                        }
                        finally {
                            h = null, S = it, x = !1
                        }
                        F = void 0
                    }
                }
                finally {
                    F ? pt() : I = !1
                }
            }
        }
        var pt;
        if (typeof Y == "function") pt = function() {
            Y(st)
        };
        else if (typeof MessageChannel < "u") {
            var bt = new MessageChannel,
                jt = bt.port2;
            bt.port1.onmessage = st, pt = function() {
                jt.postMessage(null)
            }
        } else pt = function() {
            R(st, 0)
        };

        function Et(D, F) {
            P = R(function() {
                D(n.unstable_now())
            }, F)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(D) {
            D.callback = null
        }, n.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < D ? Math.floor(1e3 / D) : 5
        }, n.unstable_getCurrentPriorityLevel = function() {
            return S
        }, n.unstable_next = function(D) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var F = 3;
                    break;
                default:
                    F = S
            }
            var it = S;
            S = F;
            try {
                return D()
            } finally {
                S = it
            }
        }, n.unstable_requestPaint = function() {
            _ = !0
        }, n.unstable_runWithPriority = function(D, F) {
            switch (D) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    D = 3
            }
            var it = S;
            S = D;
            try {
                return F()
            } finally {
                S = it
            }
        }, n.unstable_scheduleCallback = function(D, F, it) {
            var St = n.unstable_now();
            switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? St + it : St) : it = St, D) {
                case 1:
                    var $ = -1;
                    break;
                case 2:
                    $ = 250;
                    break;
                case 5:
                    $ = 1073741823;
                    break;
                case 4:
                    $ = 1e4;
                    break;
                default:
                    $ = 5e3
            }
            return $ = it + $, D = {
                id: v++,
                callback: F,
                priorityLevel: D,
                startTime: it,
                expirationTime: $,
                sortIndex: -1
            }, it > St ? (D.sortIndex = it, i(g, D), s(y) === null && D === s(g) && (M ? (q(P), P = -1) : M = !0, Et(nt, it - St))) : (D.sortIndex = $, i(y, D), E || x || (E = !0, I || (I = !0, pt()))), D
        }, n.unstable_shouldYield = ut, n.unstable_wrapCallback = function(D) {
            var F = S;
            return function() {
                var it = S;
                S = F;
                try {
                    return D.apply(this, arguments)
                } finally {
                    S = it
                }
            }
        }
    })(Qu)), Qu
}
var jp;

function t1() {
    return jp || (jp = 1, Vu.exports = Wb()), Vu.exports
}
var Pu = {
        exports: {}
    },
    Oe = {};
var Lp;

function e1() {
    if (Lp) return Oe;
    Lp = 1;
    var n = Nr();

    function i(y) {
        var g = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++) g += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var o = {
            d: {
                f: s,
                r: function() {
                    throw Error(i(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function f(y, g, v) {
        var h = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: h == null ? null : "" + h,
            children: y,
            containerInfo: g,
            implementation: v
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function m(y, g) {
        if (y === "font") return "";
        if (typeof g == "string") return g === "use-credentials" ? g : ""
    }
    return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Oe.createPortal = function(y, g) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(i(299));
        return f(y, g, null, v)
    }, Oe.flushSync = function(y) {
        var g = d.T,
            v = o.p;
        try {
            if (d.T = null, o.p = 2, y) return y()
        } finally {
            d.T = g, o.p = v, o.d.f()
        }
    }, Oe.preconnect = function(y, g) {
        typeof y == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(y, g))
    }, Oe.prefetchDNS = function(y) {
        typeof y == "string" && o.d.D(y)
    }, Oe.preinit = function(y, g) {
        if (typeof y == "string" && g && typeof g.as == "string") {
            var v = g.as,
                h = m(v, g.crossOrigin),
                S = typeof g.integrity == "string" ? g.integrity : void 0,
                x = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            v === "style" ? o.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: h,
                integrity: S,
                fetchPriority: x
            }) : v === "script" && o.d.X(y, {
                crossOrigin: h,
                integrity: S,
                fetchPriority: x,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }, Oe.preinitModule = function(y, g) {
        if (typeof y == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var v = m(g.as, g.crossOrigin);
                    o.d.M(y, {
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else g == null && o.d.M(y)
    }, Oe.preload = function(y, g) {
        if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var v = g.as,
                h = m(v, g.crossOrigin);
            o.d.L(y, v, {
                crossOrigin: h,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }, Oe.preloadModule = function(y, g) {
        if (typeof y == "string")
            if (g) {
                var v = m(g.as, g.crossOrigin);
                o.d.m(y, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else o.d.m(y)
    }, Oe.requestFormReset = function(y) {
        o.d.r(y)
    }, Oe.unstable_batchedUpdates = function(y, g) {
        return y(g)
    }, Oe.useFormState = function(y, g, v) {
        return d.H.useFormState(y, g, v)
    }, Oe.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, Oe.version = "19.2.5", Oe
}
var Up;

function Wg() {
    if (Up) return Pu.exports;
    Up = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (i) {
            console.error(i)
        }
    }
    return n(), Pu.exports = e1(), Pu.exports
}
var Bp;

function n1() {
    if (Bp) return gr;
    Bp = 1;
    var n = t1(),
        i = Nr(),
        s = Wg();

    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function f(t) {
        var e = t,
            a = t;
        if (t.alternate)
            for (; e.return;) e = e.return;
        else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? a : null
    }

    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function m(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function y(t) {
        if (f(t) !== t) throw Error(o(188))
    }

    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t), e === null) throw Error(o(188));
            return e !== t ? null : t
        }
        for (var a = t, r = e;;) {
            var l = a.return;
            if (l === null) break;
            var u = l.alternate;
            if (u === null) {
                if (r = l.return, r !== null) {
                    a = r;
                    continue
                }
                break
            }
            if (l.child === u.child) {
                for (u = l.child; u;) {
                    if (u === a) return y(l), t;
                    if (u === r) return y(l), e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== r.return) a = l, r = u;
            else {
                for (var p = !1, b = l.child; b;) {
                    if (b === a) {
                        p = !0, a = l, r = u;
                        break
                    }
                    if (b === r) {
                        p = !0, r = l, a = u;
                        break
                    }
                    b = b.sibling
                }
                if (!p) {
                    for (b = u.child; b;) {
                        if (b === a) {
                            p = !0, a = u, r = l;
                            break
                        }
                        if (b === r) {
                            p = !0, r = u, a = l;
                            break
                        }
                        b = b.sibling
                    }
                    if (!p) throw Error(o(189))
                }
            }
            if (a.alternate !== r) throw Error(o(190))
        }
        if (a.tag !== 3) throw Error(o(188));
        return a.stateNode.current === a ? t : e
    }

    function v(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = v(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }
    var h = Object.assign,
        S = Symbol.for("react.element"),
        x = Symbol.for("react.transitional.element"),
        E = Symbol.for("react.portal"),
        M = Symbol.for("react.fragment"),
        _ = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        q = Symbol.for("react.consumer"),
        Y = Symbol.for("react.context"),
        H = Symbol.for("react.forward_ref"),
        nt = Symbol.for("react.suspense"),
        I = Symbol.for("react.suspense_list"),
        P = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy"),
        W = Symbol.for("react.activity"),
        ut = Symbol.for("react.memo_cache_sentinel"),
        st = Symbol.iterator;

    function pt(t) {
        return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var bt = Symbol.for("react.client.reference");

    function jt(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === bt ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case M:
                return "Fragment";
            case R:
                return "Profiler";
            case _:
                return "StrictMode";
            case nt:
                return "Suspense";
            case I:
                return "SuspenseList";
            case W:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case E:
                return "Portal";
            case Y:
                return t.displayName || "Context";
            case q:
                return (t._context.displayName || "Context") + ".Consumer";
            case H:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case P:
                return e = t.displayName || null, e !== null ? e : jt(t.type) || "Memo";
            case j:
                e = t._payload, t = t._init;
                try {
                    return jt(t(e))
                } catch {}
        }
        return null
    }
    var Et = Array.isArray,
        D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        it = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        St = [],
        $ = -1;

    function A(t) {
        return {
            current: t
        }
    }

    function V(t) {
        0 > $ || (t.current = St[$], St[$] = null, $--)
    }

    function X(t, e) {
        $++, St[$] = t.current, t.current = e
    }
    var J = A(null),
        Z = A(null),
        at = A(null),
        yt = A(null);

    function mt(t, e) {
        switch (X(at, e), X(Z, t), X(J, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? $m(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = $m(e), t = Wm(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        V(J), X(J, t)
    }

    function dt() {
        V(J), V(Z), V(at)
    }

    function xe(t) {
        t.memoizedState !== null && X(yt, t);
        var e = J.current,
            a = Wm(e, t.type);
        e !== a && (X(Z, t), X(J, a))
    }

    function oe(t) {
        Z.current === t && (V(J), V(Z)), yt.current === t && (V(yt), fr._currentValue = it)
    }
    var ne, pn;

    function le(t) {
        if (ne === void 0) try {
            throw Error()
        } catch (a) {
            var e = a.stack.trim().match(/\n( *(at )?)/);
            ne = e && e[1] || "", pn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + ne + t + pn
    }
    var Ja = !1;

    function Dn(t, e) {
        if (!t || Ja) return "";
        Ja = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (k) {
                                    var B = k
                                }
                                Reflect.construct(t, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (k) {
                                    B = k
                                }
                                t.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (k) {
                                B = k
                            }(K = t()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (k) {
                        if (k && B && typeof k.stack == "string") return [k.stack, B.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            l && l.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = r.DetermineComponentFrameRoot(),
                p = u[0],
                b = u[1];
            if (p && b) {
                var C = p.split(`
`),
                    U = b.split(`
`);
                for (l = r = 0; r < C.length && !C[r].includes("DetermineComponentFrameRoot");) r++;
                for (; l < U.length && !U[l].includes("DetermineComponentFrameRoot");) l++;
                if (r === C.length || l === U.length)
                    for (r = C.length - 1, l = U.length - 1; 1 <= r && 0 <= l && C[r] !== U[l];) l--;
                for (; 1 <= r && 0 <= l; r--, l--)
                    if (C[r] !== U[l]) {
                        if (r !== 1 || l !== 1)
                            do
                                if (r--, l--, 0 > l || C[r] !== U[l]) {
                                    var G = `
` + C[r].replace(" at new ", " at ");
                                    return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)), G
                                }
                        while (1 <= r && 0 <= l);
                        break
                    }
            }
        } finally {
            Ja = !1, Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? le(a) : ""
    }

    function wn(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return le(t.type);
            case 16:
                return le("Lazy");
            case 13:
                return t.child !== e && e !== null ? le("Suspense Fallback") : le("Suspense");
            case 19:
                return le("SuspenseList");
            case 0:
            case 15:
                return Dn(t.type, !1);
            case 11:
                return Dn(t.type.render, !1);
            case 1:
                return Dn(t.type, !0);
            case 31:
                return le("Activity");
            default:
                return ""
        }
    }

    function nn(t) {
        try {
            var e = "",
                a = null;
            do e += wn(t, a), a = t, t = t.return; while (t);
            return e
        } catch (r) {
            return `
Error generating stack: ` + r.message + `
` + r.stack
        }
    }
    var we = Object.prototype.hasOwnProperty,
        Fe = n.unstable_scheduleCallback,
        Ia = n.unstable_cancelCallback,
        me = n.unstable_shouldYield,
        _n = n.unstable_requestPaint,
        pe = n.unstable_now,
        Bt = n.unstable_getCurrentPriorityLevel,
        Zt = n.unstable_ImmediatePriority,
        an = n.unstable_UserBlockingPriority,
        jn = n.unstable_NormalPriority,
        Es = n.unstable_LowPriority,
        Ln = n.unstable_IdlePriority,
        jr = n.log,
        ra = n.unstable_setDisableYieldValue,
        $a = null,
        ze = null;

    function gn(t) {
        if (typeof jr == "function" && ra(t), ze && typeof ze.setStrictMode == "function") try {
            ze.setStrictMode($a, t)
        } catch {}
    }
    var Ae = Math.clz32 ? Math.clz32 : En,
        Ml = Math.log,
        Rs = Math.LN2;

    function En(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (Ml(t) / Rs | 0) | 0
    }
    var Ai = 256,
        Mi = 262144,
        Wa = 4194304;

    function Rn(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
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
                return 64;
            case 128:
                return 128;
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
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function gt(t, e, a) {
        var r = t.pendingLanes;
        if (r === 0) return 0;
        var l = 0,
            u = t.suspendedLanes,
            p = t.pingedLanes;
        t = t.warmLanes;
        var b = r & 134217727;
        return b !== 0 ? (r = b & ~u, r !== 0 ? l = Rn(r) : (p &= b, p !== 0 ? l = Rn(p) : a || (a = b & ~t, a !== 0 && (l = Rn(a))))) : (b = r & ~u, b !== 0 ? l = Rn(b) : p !== 0 ? l = Rn(p) : a || (a = r & ~t, a !== 0 && (l = Rn(a)))), l === 0 ? 0 : e !== 0 && e !== l && (e & u) === 0 && (u = l & -l, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : l
    }

    function Pt(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function ge(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
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
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Me() {
        var t = Wa;
        return Wa <<= 1, (Wa & 62914560) === 0 && (Wa = 4194304), t
    }

    function oa(t) {
        for (var e = [], a = 0; 31 > a; a++) e.push(t);
        return e
    }

    function Ft(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function je(t, e, a, r, l, u) {
        var p = t.pendingLanes;
        t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
        var b = t.entanglements,
            C = t.expirationTimes,
            U = t.hiddenUpdates;
        for (a = p & ~a; 0 < a;) {
            var G = 31 - Ae(a),
                K = 1 << G;
            b[G] = 0, C[G] = -1;
            var B = U[G];
            if (B !== null)
                for (U[G] = null, G = 0; G < B.length; G++) {
                    var k = B[G];
                    k !== null && (k.lane &= -536870913)
                }
            a &= ~K
        }
        r !== 0 && ti(t, r, 0), u !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(p & ~e))
    }

    function ti(t, e, a) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var r = 31 - Ae(e);
        t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | a & 261930
    }

    function Le(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a;) {
            var r = 31 - Ae(a),
                l = 1 << r;
            l & e | t[r] & e && (t[r] |= e), a &= ~l
        }
    }

    function Ue(t, e) {
        var a = e & -e;
        return a = (a & 42) !== 0 ? 1 : Oi(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    }

    function Oi(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
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
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function yn(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Ol() {
        var t = F.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wp(t.type))
    }

    function kf(t, e) {
        var a = F.p;
        try {
            return F.p = t, e()
        } finally {
            F.p = a
        }
    }
    var la = Math.random().toString(36).slice(2),
        _e = "__reactFiber$" + la,
        Be = "__reactProps$" + la,
        zi = "__reactContainer$" + la,
        zl = "__reactEvents$" + la,
        Bv = "__reactListeners$" + la,
        kv = "__reactHandles$" + la,
        Hf = "__reactResources$" + la,
        Ts = "__reactMarker$" + la;

    function Nl(t) {
        delete t[_e], delete t[Be], delete t[zl], delete t[Bv], delete t[kv]
    }

    function Ni(t) {
        var e = t[_e];
        if (e) return e;
        for (var a = t.parentNode; a;) {
            if (e = a[zi] || a[_e]) {
                if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
                    for (t = rp(t); t !== null;) {
                        if (a = t[_e]) return a;
                        t = rp(t)
                    }
                return e
            }
            t = a, a = t.parentNode
        }
        return null
    }

    function Di(t) {
        if (t = t[_e] || t[zi]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function Cs(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(o(33))
    }

    function ji(t) {
        var e = t[Hf];
        return e || (e = t[Hf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function ye(t) {
        t[Ts] = !0
    }
    var qf = new Set,
        Yf = {};

    function ei(t, e) {
        Li(t, e), Li(t + "Capture", e)
    }

    function Li(t, e) {
        for (Yf[t] = e, t = 0; t < e.length; t++) qf.add(e[t])
    }
    var Hv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Gf = {},
        Vf = {};

    function qv(t) {
        return we.call(Vf, t) ? !0 : we.call(Gf, t) ? !1 : Hv.test(t) ? Vf[t] = !0 : (Gf[t] = !0, !1)
    }

    function Lr(t, e, a) {
        if (qv(e))
            if (a === null) t.removeAttribute(e);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var r = e.toLowerCase().slice(0, 5);
                        if (r !== "data-" && r !== "aria-") {
                            t.removeAttribute(e);
                            return
                        }
                }
                t.setAttribute(e, "" + a)
            }
    }

    function Ur(t, e, a) {
        if (a === null) t.removeAttribute(e);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + a)
        }
    }

    function Un(t, e, a, r) {
        if (r === null) t.removeAttribute(a);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(a);
                    return
            }
            t.setAttributeNS(e, a, "" + r)
        }
    }

    function sn(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return ""
        }
    }

    function Qf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function Yv(t, e, a) {
        var r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var l = r.get,
                u = r.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(p) {
                    a = "" + p, u.call(this, p)
                }
            }), Object.defineProperty(t, e, {
                enumerable: r.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(p) {
                    a = "" + p
                },
                stopTracking: function() {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function Dl(t) {
        if (!t._valueTracker) {
            var e = Qf(t) ? "checked" : "value";
            t._valueTracker = Yv(t, e, "" + t[e])
        }
    }

    function Pf(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var a = e.getValue(),
            r = "";
        return t && (r = Qf(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== a ? (e.setValue(t), !0) : !1
    }

    function Br(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Gv = /[\n"\\]/g;

    function rn(t) {
        return t.replace(Gv, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function jl(t, e, a, r, l, u, p, b) {
        t.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.type = p : t.removeAttribute("type"), e != null ? p === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + sn(e)) : t.value !== "" + sn(e) && (t.value = "" + sn(e)) : p !== "submit" && p !== "reset" || t.removeAttribute("value"), e != null ? Ll(t, p, sn(e)) : a != null ? Ll(t, p, sn(a)) : r != null && t.removeAttribute("value"), l == null && u != null && (t.defaultChecked = !!u), l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + sn(b) : t.removeAttribute("name")
    }

    function Xf(t, e, a, r, l, u, p, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                Dl(t);
                return
            }
            a = a != null ? "" + sn(a) : "", e = e != null ? "" + sn(e) : a, b || e === t.value || (t.value = e), t.defaultValue = e
        }
        r = r ? ? l, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = b ? t.checked : !!r, t.defaultChecked = !!r, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p), Dl(t)
    }

    function Ll(t, e, a) {
        e === "number" && Br(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }

    function Ui(t, e, a, r) {
        if (t = t.options, e) {
            e = {};
            for (var l = 0; l < a.length; l++) e["$" + a[l]] = !0;
            for (a = 0; a < t.length; a++) l = e.hasOwnProperty("$" + t[a].value), t[a].selected !== l && (t[a].selected = l), l && r && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + sn(a), e = null, l = 0; l < t.length; l++) {
                if (t[l].value === a) {
                    t[l].selected = !0, r && (t[l].defaultSelected = !0);
                    return
                }
                e !== null || t[l].disabled || (e = t[l])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Kf(t, e, a) {
        if (e != null && (e = "" + sn(e), e !== t.value && (t.value = e), a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + sn(a) : ""
    }

    function Ff(t, e, a, r) {
        if (e == null) {
            if (r != null) {
                if (a != null) throw Error(o(92));
                if (Et(r)) {
                    if (1 < r.length) throw Error(o(93));
                    r = r[0]
                }
                a = r
            }
            a == null && (a = ""), e = a
        }
        a = sn(e), t.defaultValue = a, r = t.textContent, r === a && r !== "" && r !== null && (t.value = r), Dl(t)
    }

    function Bi(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var Vv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Zf(t, e, a) {
        var r = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Vv.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }

    function Jf(t, e, a) {
        if (e != null && typeof e != "object") throw Error(o(62));
        if (t = t.style, a != null) {
            for (var r in a) !a.hasOwnProperty(r) || e != null && e.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
            for (var l in e) r = e[l], e.hasOwnProperty(l) && a[l] !== r && Zf(t, l, r)
        } else
            for (var u in e) e.hasOwnProperty(u) && Zf(t, u, e[u])
    }

    function Ul(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
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
                return !0
        }
    }
    var Qv = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Pv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function kr(t) {
        return Pv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function Bn() {}
    var Bl = null;

    function kl(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var ki = null,
        Hi = null;

    function If(t) {
        var e = Di(t);
        if (e && (t = e.stateNode)) {
            var a = t[Be] || null;
            t: switch (t = e.stateNode, e.type) {
                case "input":
                    if (jl(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
                        for (a = t; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + rn("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
                            var r = a[e];
                            if (r !== t && r.form === t.form) {
                                var l = r[Be] || null;
                                if (!l) throw Error(o(90));
                                jl(r, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                            }
                        }
                        for (e = 0; e < a.length; e++) r = a[e], r.form === t.form && Pf(r)
                    }
                    break t;
                case "textarea":
                    Kf(t, a.value, a.defaultValue);
                    break t;
                case "select":
                    e = a.value, e != null && Ui(t, !!a.multiple, e, !1)
            }
        }
    }
    var Hl = !1;

    function $f(t, e, a) {
        if (Hl) return t(e, a);
        Hl = !0;
        try {
            var r = t(e);
            return r
        } finally {
            if (Hl = !1, (ki !== null || Hi !== null) && (To(), ki && (e = ki, t = Hi, Hi = ki = null, If(e), t)))
                for (e = 0; e < t.length; e++) If(t[e])
        }
    }

    function As(t, e) {
        var a = t.stateNode;
        if (a === null) return null;
        var r = a[Be] || null;
        if (r === null) return null;
        a = r[e];
        t: switch (e) {
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
                (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (a && typeof a != "function") throw Error(o(231, e, typeof a));
        return a
    }
    var kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        ql = !1;
    if (kn) try {
        var Ms = {};
        Object.defineProperty(Ms, "passive", {
            get: function() {
                ql = !0
            }
        }), window.addEventListener("test", Ms, Ms), window.removeEventListener("test", Ms, Ms)
    } catch {
        ql = !1
    }
    var ca = null,
        Yl = null,
        Hr = null;

    function Wf() {
        if (Hr) return Hr;
        var t, e = Yl,
            a = e.length,
            r, l = "value" in ca ? ca.value : ca.textContent,
            u = l.length;
        for (t = 0; t < a && e[t] === l[t]; t++);
        var p = a - t;
        for (r = 1; r <= p && e[a - r] === l[u - r]; r++);
        return Hr = l.slice(t, 1 < r ? 1 - r : void 0)
    }

    function qr(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function Yr() {
        return !0
    }

    function td() {
        return !1
    }

    function ke(t) {
        function e(a, r, l, u, p) {
            this._reactName = a, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = p, this.currentTarget = null;
            for (var b in t) t.hasOwnProperty(b) && (a = t[b], this[b] = a ? a(u) : u[b]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Yr : td, this.isPropagationStopped = td, this
        }
        return h(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Yr)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Yr)
            },
            persist: function() {},
            isPersistent: Yr
        }), e
    }
    var ni = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Gr = ke(ni),
        Os = h({}, ni, {
            view: 0,
            detail: 0
        }),
        Xv = ke(Os),
        Gl, Vl, zs, Vr = h({}, Os, {
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
            getModifierState: Pl,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== zs && (zs && t.type === "mousemove" ? (Gl = t.screenX - zs.screenX, Vl = t.screenY - zs.screenY) : Vl = Gl = 0, zs = t), Gl)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Vl
            }
        }),
        ed = ke(Vr),
        Kv = h({}, Vr, {
            dataTransfer: 0
        }),
        Fv = ke(Kv),
        Zv = h({}, Os, {
            relatedTarget: 0
        }),
        Ql = ke(Zv),
        Jv = h({}, ni, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Iv = ke(Jv),
        $v = h({}, ni, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        Wv = ke($v),
        t0 = h({}, ni, {
            data: 0
        }),
        nd = ke(t0),
        e0 = {
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
            MozPrintableKey: "Unidentified"
        },
        n0 = {
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
            224: "Meta"
        },
        a0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function i0(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = a0[t]) ? !!e[t] : !1
    }

    function Pl() {
        return i0
    }
    var s0 = h({}, Os, {
            key: function(t) {
                if (t.key) {
                    var e = e0[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = qr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? n0[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pl,
            charCode: function(t) {
                return t.type === "keypress" ? qr(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? qr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        r0 = ke(s0),
        o0 = h({}, Vr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        ad = ke(o0),
        l0 = h({}, Os, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Pl
        }),
        c0 = ke(l0),
        u0 = h({}, ni, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        f0 = ke(u0),
        d0 = h({}, Vr, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        h0 = ke(d0),
        m0 = h({}, ni, {
            newState: 0,
            oldState: 0
        }),
        p0 = ke(m0),
        g0 = [9, 13, 27, 32],
        Xl = kn && "CompositionEvent" in window,
        Ns = null;
    kn && "documentMode" in document && (Ns = document.documentMode);
    var y0 = kn && "TextEvent" in window && !Ns,
        id = kn && (!Xl || Ns && 8 < Ns && 11 >= Ns),
        sd = " ",
        rd = !1;

    function od(t, e) {
        switch (t) {
            case "keyup":
                return g0.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function ld(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var qi = !1;

    function v0(t, e) {
        switch (t) {
            case "compositionend":
                return ld(e);
            case "keypress":
                return e.which !== 32 ? null : (rd = !0, sd);
            case "textInput":
                return t = e.data, t === sd && rd ? null : t;
            default:
                return null
        }
    }

    function b0(t, e) {
        if (qi) return t === "compositionend" || !Xl && od(t, e) ? (t = Wf(), Hr = Yl = ca = null, qi = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return id && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var S0 = {
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
        week: !0
    };

    function cd(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!S0[t.type] : e === "textarea"
    }

    function ud(t, e, a, r) {
        ki ? Hi ? Hi.push(r) : Hi = [r] : ki = r, e = Do(e, "onChange"), 0 < e.length && (a = new Gr("onChange", "change", null, a, r), t.push({
            event: a,
            listeners: e
        }))
    }
    var Ds = null,
        js = null;

    function x0(t) {
        Xm(t, 0)
    }

    function Qr(t) {
        var e = Cs(t);
        if (Pf(e)) return t
    }

    function fd(t, e) {
        if (t === "change") return e
    }
    var dd = !1;
    if (kn) {
        var Kl;
        if (kn) {
            var Fl = "oninput" in document;
            if (!Fl) {
                var hd = document.createElement("div");
                hd.setAttribute("oninput", "return;"), Fl = typeof hd.oninput == "function"
            }
            Kl = Fl
        } else Kl = !1;
        dd = Kl && (!document.documentMode || 9 < document.documentMode)
    }

    function md() {
        Ds && (Ds.detachEvent("onpropertychange", pd), js = Ds = null)
    }

    function pd(t) {
        if (t.propertyName === "value" && Qr(js)) {
            var e = [];
            ud(e, js, t, kl(t)), $f(x0, e)
        }
    }

    function w0(t, e, a) {
        t === "focusin" ? (md(), Ds = e, js = a, Ds.attachEvent("onpropertychange", pd)) : t === "focusout" && md()
    }

    function _0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return Qr(js)
    }

    function E0(t, e) {
        if (t === "click") return Qr(e)
    }

    function R0(t, e) {
        if (t === "input" || t === "change") return Qr(e)
    }

    function T0(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ze = typeof Object.is == "function" ? Object.is : T0;

    function Ls(t, e) {
        if (Ze(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var a = Object.keys(t),
            r = Object.keys(e);
        if (a.length !== r.length) return !1;
        for (r = 0; r < a.length; r++) {
            var l = a[r];
            if (!we.call(e, l) || !Ze(t[l], e[l])) return !1
        }
        return !0
    }

    function gd(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function yd(t, e) {
        var a = gd(t);
        t = 0;
        for (var r; a;) {
            if (a.nodeType === 3) {
                if (r = t + a.textContent.length, t <= e && r >= e) return {
                    node: a,
                    offset: e - t
                };
                t = r
            }
            t: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = gd(a)
        }
    }

    function vd(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function bd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Br(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) t = e.contentWindow;
            else break;
            e = Br(t.document)
        }
        return e
    }

    function Zl(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var C0 = kn && "documentMode" in document && 11 >= document.documentMode,
        Yi = null,
        Jl = null,
        Us = null,
        Il = !1;

    function Sd(t, e, a) {
        var r = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Il || Yi == null || Yi !== Br(r) || (r = Yi, "selectionStart" in r && Zl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Us && Ls(Us, r) || (Us = r, r = Do(Jl, "onSelect"), 0 < r.length && (e = new Gr("onSelect", "select", null, e, a), t.push({
            event: e,
            listeners: r
        }), e.target = Yi)))
    }

    function ai(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a
    }
    var Gi = {
            animationend: ai("Animation", "AnimationEnd"),
            animationiteration: ai("Animation", "AnimationIteration"),
            animationstart: ai("Animation", "AnimationStart"),
            transitionrun: ai("Transition", "TransitionRun"),
            transitionstart: ai("Transition", "TransitionStart"),
            transitioncancel: ai("Transition", "TransitionCancel"),
            transitionend: ai("Transition", "TransitionEnd")
        },
        $l = {},
        xd = {};
    kn && (xd = document.createElement("div").style, "AnimationEvent" in window || (delete Gi.animationend.animation, delete Gi.animationiteration.animation, delete Gi.animationstart.animation), "TransitionEvent" in window || delete Gi.transitionend.transition);

    function ii(t) {
        if ($l[t]) return $l[t];
        if (!Gi[t]) return t;
        var e = Gi[t],
            a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in xd) return $l[t] = e[a];
        return t
    }
    var wd = ii("animationend"),
        _d = ii("animationiteration"),
        Ed = ii("animationstart"),
        A0 = ii("transitionrun"),
        M0 = ii("transitionstart"),
        O0 = ii("transitioncancel"),
        Rd = ii("transitionend"),
        Td = new Map,
        Wl = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Wl.push("scrollEnd");

    function vn(t, e) {
        Td.set(t, e), ei(e, [t])
    }
    var Pr = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(e)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return
            }
            console.error(t)
        },
        on = [],
        Vi = 0,
        tc = 0;

    function Xr() {
        for (var t = Vi, e = tc = Vi = 0; e < t;) {
            var a = on[e];
            on[e++] = null;
            var r = on[e];
            on[e++] = null;
            var l = on[e];
            on[e++] = null;
            var u = on[e];
            if (on[e++] = null, r !== null && l !== null) {
                var p = r.pending;
                p === null ? l.next = l : (l.next = p.next, p.next = l), r.pending = l
            }
            u !== 0 && Cd(a, l, u)
        }
    }

    function Kr(t, e, a, r) {
        on[Vi++] = t, on[Vi++] = e, on[Vi++] = a, on[Vi++] = r, tc |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r)
    }

    function ec(t, e, a, r) {
        return Kr(t, e, a, r), Fr(t)
    }

    function si(t, e) {
        return Kr(t, null, null, e), Fr(t)
    }

    function Cd(t, e, a) {
        t.lanes |= a;
        var r = t.alternate;
        r !== null && (r.lanes |= a);
        for (var l = !1, u = t.return; u !== null;) u.childLanes |= a, r = u.alternate, r !== null && (r.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (l = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, l && e !== null && (l = 31 - Ae(a), t = u.hiddenUpdates, r = t[l], r === null ? t[l] = [e] : r.push(e), e.lane = a | 536870912), u) : null
    }

    function Fr(t) {
        if (50 < ir) throw ir = 0, uu = null, Error(o(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Qi = {};

    function z0(t, e, a, r) {
        this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Je(t, e, a, r) {
        return new z0(t, e, a, r)
    }

    function nc(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Hn(t, e) {
        var a = t.alternate;
        return a === null ? (a = Je(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a
    }

    function Ad(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function Zr(t, e, a, r, l, u) {
        var p = 0;
        if (r = t, typeof t == "function") nc(t) && (p = 1);
        else if (typeof t == "string") p = Ub(t, a, J.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else t: switch (t) {
            case W:
                return t = Je(31, a, e, l), t.elementType = W, t.lanes = u, t;
            case M:
                return ri(a.children, l, u, e);
            case _:
                p = 8, l |= 24;
                break;
            case R:
                return t = Je(12, a, e, l | 2), t.elementType = R, t.lanes = u, t;
            case nt:
                return t = Je(13, a, e, l), t.elementType = nt, t.lanes = u, t;
            case I:
                return t = Je(19, a, e, l), t.elementType = I, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case Y:
                        p = 10;
                        break t;
                    case q:
                        p = 9;
                        break t;
                    case H:
                        p = 11;
                        break t;
                    case P:
                        p = 14;
                        break t;
                    case j:
                        p = 16, r = null;
                        break t
                }
                p = 29, a = Error(o(130, t === null ? "null" : typeof t, "")), r = null
        }
        return e = Je(p, a, e, l), e.elementType = t, e.type = r, e.lanes = u, e
    }

    function ri(t, e, a, r) {
        return t = Je(7, t, r, e), t.lanes = a, t
    }

    function ac(t, e, a) {
        return t = Je(6, t, null, e), t.lanes = a, t
    }

    function Md(t) {
        var e = Je(18, null, null, 0);
        return e.stateNode = t, e
    }

    function ic(t, e, a) {
        return e = Je(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, e
    }
    var Od = new WeakMap;

    function ln(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = Od.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: nn(e)
            }, Od.set(t, e), e)
        }
        return {
            value: t,
            source: e,
            stack: nn(e)
        }
    }
    var Pi = [],
        Xi = 0,
        Jr = null,
        Bs = 0,
        cn = [],
        un = 0,
        ua = null,
        Tn = 1,
        Cn = "";

    function qn(t, e) {
        Pi[Xi++] = Bs, Pi[Xi++] = Jr, Jr = t, Bs = e
    }

    function zd(t, e, a) {
        cn[un++] = Tn, cn[un++] = Cn, cn[un++] = ua, ua = t;
        var r = Tn;
        t = Cn;
        var l = 32 - Ae(r) - 1;
        r &= ~(1 << l), a += 1;
        var u = 32 - Ae(e) + l;
        if (30 < u) {
            var p = l - l % 5;
            u = (r & (1 << p) - 1).toString(32), r >>= p, l -= p, Tn = 1 << 32 - Ae(e) + l | a << l | r, Cn = u + t
        } else Tn = 1 << u | a << l | r, Cn = t
    }

    function sc(t) {
        t.return !== null && (qn(t, 1), zd(t, 1, 0))
    }

    function rc(t) {
        for (; t === Jr;) Jr = Pi[--Xi], Pi[Xi] = null, Bs = Pi[--Xi], Pi[Xi] = null;
        for (; t === ua;) ua = cn[--un], cn[un] = null, Cn = cn[--un], cn[un] = null, Tn = cn[--un], cn[un] = null
    }

    function Nd(t, e) {
        cn[un++] = Tn, cn[un++] = Cn, cn[un++] = ua, Tn = e.id, Cn = e.overflow, ua = t
    }
    var Ee = null,
        Vt = null,
        Mt = !1,
        fa = null,
        fn = !1,
        oc = Error(o(519));

    function da(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ks(ln(e, t)), oc
    }

    function Dd(t) {
        var e = t.stateNode,
            a = t.type,
            r = t.memoizedProps;
        switch (e[_e] = t, e[Be] = r, a) {
            case "dialog":
                Tt("cancel", e), Tt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                Tt("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < rr.length; a++) Tt(rr[a], e);
                break;
            case "source":
                Tt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                Tt("error", e), Tt("load", e);
                break;
            case "details":
                Tt("toggle", e);
                break;
            case "input":
                Tt("invalid", e), Xf(e, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                break;
            case "select":
                Tt("invalid", e);
                break;
            case "textarea":
                Tt("invalid", e), Ff(e, r.value, r.defaultValue, r.children)
        }
        a = r.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || r.suppressHydrationWarning === !0 || Jm(e.textContent, a) ? (r.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)), r.onScroll != null && Tt("scroll", e), r.onScrollEnd != null && Tt("scrollend", e), r.onClick != null && (e.onclick = Bn), e = !0) : e = !1, e || da(t, !0)
    }

    function jd(t) {
        for (Ee = t.return; Ee;) switch (Ee.tag) {
            case 5:
            case 31:
            case 13:
                fn = !1;
                return;
            case 27:
            case 3:
                fn = !0;
                return;
            default:
                Ee = Ee.return
        }
    }

    function Ki(t) {
        if (t !== Ee) return !1;
        if (!Mt) return jd(t), Mt = !0, !1;
        var e = t.tag,
            a;
        if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ru(t.type, t.memoizedProps)), a = !a), a && Vt && da(t), jd(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            Vt = sp(t)
        } else if (e === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
            Vt = sp(t)
        } else e === 27 ? (e = Vt, Ta(t.type) ? (t = Ou, Ou = null, Vt = t) : Vt = e) : Vt = Ee ? hn(t.stateNode.nextSibling) : null;
        return !0
    }

    function oi() {
        Vt = Ee = null, Mt = !1
    }

    function lc() {
        var t = fa;
        return t !== null && (Ge === null ? Ge = t : Ge.push.apply(Ge, t), fa = null), t
    }

    function ks(t) {
        fa === null ? fa = [t] : fa.push(t)
    }
    var cc = A(null),
        li = null,
        Yn = null;

    function ha(t, e, a) {
        X(cc, e._currentValue), e._currentValue = a
    }

    function Gn(t) {
        t._currentValue = cc.current, V(cc)
    }

    function uc(t, e, a) {
        for (; t !== null;) {
            var r = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === a) break;
            t = t.return
        }
    }

    function fc(t, e, a, r) {
        var l = t.child;
        for (l !== null && (l.return = t); l !== null;) {
            var u = l.dependencies;
            if (u !== null) {
                var p = l.child;
                u = u.firstContext;
                t: for (; u !== null;) {
                    var b = u;
                    u = l;
                    for (var C = 0; C < e.length; C++)
                        if (b.context === e[C]) {
                            u.lanes |= a, b = u.alternate, b !== null && (b.lanes |= a), uc(u.return, a, t), r || (p = null);
                            break t
                        }
                    u = b.next
                }
            } else if (l.tag === 18) {
                if (p = l.return, p === null) throw Error(o(341));
                p.lanes |= a, u = p.alternate, u !== null && (u.lanes |= a), uc(p, a, t), p = null
            } else p = l.child;
            if (p !== null) p.return = l;
            else
                for (p = l; p !== null;) {
                    if (p === t) {
                        p = null;
                        break
                    }
                    if (l = p.sibling, l !== null) {
                        l.return = p.return, p = l;
                        break
                    }
                    p = p.return
                }
            l = p
        }
    }

    function Fi(t, e, a, r) {
        t = null;
        for (var l = e, u = !1; l !== null;) {
            if (!u) {
                if ((l.flags & 524288) !== 0) u = !0;
                else if ((l.flags & 262144) !== 0) break
            }
            if (l.tag === 10) {
                var p = l.alternate;
                if (p === null) throw Error(o(387));
                if (p = p.memoizedProps, p !== null) {
                    var b = l.type;
                    Ze(l.pendingProps.value, p.value) || (t !== null ? t.push(b) : t = [b])
                }
            } else if (l === yt.current) {
                if (p = l.alternate, p === null) throw Error(o(387));
                p.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(fr) : t = [fr])
            }
            l = l.return
        }
        t !== null && fc(e, t, a, r), e.flags |= 262144
    }

    function Ir(t) {
        for (t = t.firstContext; t !== null;) {
            if (!Ze(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function ci(t) {
        li = t, Yn = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function Re(t) {
        return Ld(li, t)
    }

    function $r(t, e) {
        return li === null && ci(t), Ld(t, e)
    }

    function Ld(t, e) {
        var a = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: a,
                next: null
            }, Yn === null) {
            if (t === null) throw Error(o(308));
            Yn = e, t.dependencies = {
                lanes: 0,
                firstContext: e
            }, t.flags |= 524288
        } else Yn = Yn.next = e;
        return a
    }
    var N0 = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, r) {
                        t.push(r)
                    }
                };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(a) {
                    return a()
                })
            }
        },
        D0 = n.unstable_scheduleCallback,
        j0 = n.unstable_NormalPriority,
        ae = {
            $$typeof: Y,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function dc() {
        return {
            controller: new N0,
            data: new Map,
            refCount: 0
        }
    }

    function Hs(t) {
        t.refCount--, t.refCount === 0 && D0(j0, function() {
            t.controller.abort()
        })
    }
    var qs = null,
        hc = 0,
        Zi = 0,
        Ji = null;

    function L0(t, e) {
        if (qs === null) {
            var a = qs = [];
            hc = 0, Zi = gu(), Ji = {
                status: "pending",
                value: void 0,
                then: function(r) {
                    a.push(r)
                }
            }
        }
        return hc++, e.then(Ud, Ud), e
    }

    function Ud() {
        if (--hc === 0 && qs !== null) {
            Ji !== null && (Ji.status = "fulfilled");
            var t = qs;
            qs = null, Zi = 0, Ji = null;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }
    }

    function U0(t, e) {
        var a = [],
            r = {
                status: "pending",
                value: null,
                reason: null,
                then: function(l) {
                    a.push(l)
                }
            };
        return t.then(function() {
            r.status = "fulfilled", r.value = e;
            for (var l = 0; l < a.length; l++)(0, a[l])(e)
        }, function(l) {
            for (r.status = "rejected", r.reason = l, l = 0; l < a.length; l++)(0, a[l])(void 0)
        }), r
    }
    var Bd = D.S;
    D.S = function(t, e) {
        Sm = pe(), typeof e == "object" && e !== null && typeof e.then == "function" && L0(t, e), Bd !== null && Bd(t, e)
    };
    var ui = A(null);

    function mc() {
        var t = ui.current;
        return t !== null ? t : Yt.pooledCache
    }

    function Wr(t, e) {
        e === null ? X(ui, ui.current) : X(ui, e.pool)
    }

    function kd() {
        var t = mc();
        return t === null ? null : {
            parent: ae._currentValue,
            pool: t
        }
    }
    var Ii = Error(o(460)),
        pc = Error(o(474)),
        to = Error(o(542)),
        eo = {
            then: function() {}
        };

    function Hd(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function qd(t, e, a) {
        switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Bn, Bn), e = a), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason, Gd(t), t;
            default:
                if (typeof e.status == "string") e.then(Bn, Bn);
                else {
                    if (t = Yt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
                    t = e, t.status = "pending", t.then(function(r) {
                        if (e.status === "pending") {
                            var l = e;
                            l.status = "fulfilled", l.value = r
                        }
                    }, function(r) {
                        if (e.status === "pending") {
                            var l = e;
                            l.status = "rejected", l.reason = r
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw t = e.reason, Gd(t), t
                }
                throw di = e, Ii
        }
    }

    function fi(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (di = a, Ii) : a
        }
    }
    var di = null;

    function Yd() {
        if (di === null) throw Error(o(459));
        var t = di;
        return di = null, t
    }

    function Gd(t) {
        if (t === Ii || t === to) throw Error(o(483))
    }
    var $i = null,
        Ys = 0;

    function no(t) {
        var e = Ys;
        return Ys += 1, $i === null && ($i = []), qd($i, t, e)
    }

    function Gs(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function ao(t, e) {
        throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function Vd(t) {
        function e(N, O) {
            if (t) {
                var L = N.deletions;
                L === null ? (N.deletions = [O], N.flags |= 16) : L.push(O)
            }
        }

        function a(N, O) {
            if (!t) return null;
            for (; O !== null;) e(N, O), O = O.sibling;
            return null
        }

        function r(N) {
            for (var O = new Map; N !== null;) N.key !== null ? O.set(N.key, N) : O.set(N.index, N), N = N.sibling;
            return O
        }

        function l(N, O) {
            return N = Hn(N, O), N.index = 0, N.sibling = null, N
        }

        function u(N, O, L) {
            return N.index = L, t ? (L = N.alternate, L !== null ? (L = L.index, L < O ? (N.flags |= 67108866, O) : L) : (N.flags |= 67108866, O)) : (N.flags |= 1048576, O)
        }

        function p(N) {
            return t && N.alternate === null && (N.flags |= 67108866), N
        }

        function b(N, O, L, Q) {
            return O === null || O.tag !== 6 ? (O = ac(L, N.mode, Q), O.return = N, O) : (O = l(O, L), O.return = N, O)
        }

        function C(N, O, L, Q) {
            var ft = L.type;
            return ft === M ? G(N, O, L.props.children, Q, L.key) : O !== null && (O.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === j && fi(ft) === O.type) ? (O = l(O, L.props), Gs(O, L), O.return = N, O) : (O = Zr(L.type, L.key, L.props, null, N.mode, Q), Gs(O, L), O.return = N, O)
        }

        function U(N, O, L, Q) {
            return O === null || O.tag !== 4 || O.stateNode.containerInfo !== L.containerInfo || O.stateNode.implementation !== L.implementation ? (O = ic(L, N.mode, Q), O.return = N, O) : (O = l(O, L.children || []), O.return = N, O)
        }

        function G(N, O, L, Q, ft) {
            return O === null || O.tag !== 7 ? (O = ri(L, N.mode, Q, ft), O.return = N, O) : (O = l(O, L), O.return = N, O)
        }

        function K(N, O, L) {
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = ac("" + O, N.mode, L), O.return = N, O;
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case x:
                        return L = Zr(O.type, O.key, O.props, null, N.mode, L), Gs(L, O), L.return = N, L;
                    case E:
                        return O = ic(O, N.mode, L), O.return = N, O;
                    case j:
                        return O = fi(O), K(N, O, L)
                }
                if (Et(O) || pt(O)) return O = ri(O, N.mode, L, null), O.return = N, O;
                if (typeof O.then == "function") return K(N, no(O), L);
                if (O.$$typeof === Y) return K(N, $r(N, O), L);
                ao(N, O)
            }
            return null
        }

        function B(N, O, L, Q) {
            var ft = O !== null ? O.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return ft !== null ? null : b(N, O, "" + L, Q);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case x:
                        return L.key === ft ? C(N, O, L, Q) : null;
                    case E:
                        return L.key === ft ? U(N, O, L, Q) : null;
                    case j:
                        return L = fi(L), B(N, O, L, Q)
                }
                if (Et(L) || pt(L)) return ft !== null ? null : G(N, O, L, Q, null);
                if (typeof L.then == "function") return B(N, O, no(L), Q);
                if (L.$$typeof === Y) return B(N, O, $r(N, L), Q);
                ao(N, L)
            }
            return null
        }

        function k(N, O, L, Q, ft) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return N = N.get(L) || null, b(O, N, "" + Q, ft);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case x:
                        return N = N.get(Q.key === null ? L : Q.key) || null, C(O, N, Q, ft);
                    case E:
                        return N = N.get(Q.key === null ? L : Q.key) || null, U(O, N, Q, ft);
                    case j:
                        return Q = fi(Q), k(N, O, L, Q, ft)
                }
                if (Et(Q) || pt(Q)) return N = N.get(L) || null, G(O, N, Q, ft, null);
                if (typeof Q.then == "function") return k(N, O, L, no(Q), ft);
                if (Q.$$typeof === Y) return k(N, O, L, $r(O, Q), ft);
                ao(O, Q)
            }
            return null
        }

        function rt(N, O, L, Q) {
            for (var ft = null, Ot = null, ct = O, wt = O = 0, At = null; ct !== null && wt < L.length; wt++) {
                ct.index > wt ? (At = ct, ct = null) : At = ct.sibling;
                var zt = B(N, ct, L[wt], Q);
                if (zt === null) {
                    ct === null && (ct = At);
                    break
                }
                t && ct && zt.alternate === null && e(N, ct), O = u(zt, O, wt), Ot === null ? ft = zt : Ot.sibling = zt, Ot = zt, ct = At
            }
            if (wt === L.length) return a(N, ct), Mt && qn(N, wt), ft;
            if (ct === null) {
                for (; wt < L.length; wt++) ct = K(N, L[wt], Q), ct !== null && (O = u(ct, O, wt), Ot === null ? ft = ct : Ot.sibling = ct, Ot = ct);
                return Mt && qn(N, wt), ft
            }
            for (ct = r(ct); wt < L.length; wt++) At = k(ct, N, wt, L[wt], Q), At !== null && (t && At.alternate !== null && ct.delete(At.key === null ? wt : At.key), O = u(At, O, wt), Ot === null ? ft = At : Ot.sibling = At, Ot = At);
            return t && ct.forEach(function(za) {
                return e(N, za)
            }), Mt && qn(N, wt), ft
        }

        function ht(N, O, L, Q) {
            if (L == null) throw Error(o(151));
            for (var ft = null, Ot = null, ct = O, wt = O = 0, At = null, zt = L.next(); ct !== null && !zt.done; wt++, zt = L.next()) {
                ct.index > wt ? (At = ct, ct = null) : At = ct.sibling;
                var za = B(N, ct, zt.value, Q);
                if (za === null) {
                    ct === null && (ct = At);
                    break
                }
                t && ct && za.alternate === null && e(N, ct), O = u(za, O, wt), Ot === null ? ft = za : Ot.sibling = za, Ot = za, ct = At
            }
            if (zt.done) return a(N, ct), Mt && qn(N, wt), ft;
            if (ct === null) {
                for (; !zt.done; wt++, zt = L.next()) zt = K(N, zt.value, Q), zt !== null && (O = u(zt, O, wt), Ot === null ? ft = zt : Ot.sibling = zt, Ot = zt);
                return Mt && qn(N, wt), ft
            }
            for (ct = r(ct); !zt.done; wt++, zt = L.next()) zt = k(ct, N, wt, zt.value, Q), zt !== null && (t && zt.alternate !== null && ct.delete(zt.key === null ? wt : zt.key), O = u(zt, O, wt), Ot === null ? ft = zt : Ot.sibling = zt, Ot = zt);
            return t && ct.forEach(function(Kb) {
                return e(N, Kb)
            }), Mt && qn(N, wt), ft
        }

        function qt(N, O, L, Q) {
            if (typeof L == "object" && L !== null && L.type === M && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case x:
                        t: {
                            for (var ft = L.key; O !== null;) {
                                if (O.key === ft) {
                                    if (ft = L.type, ft === M) {
                                        if (O.tag === 7) {
                                            a(N, O.sibling), Q = l(O, L.props.children), Q.return = N, N = Q;
                                            break t
                                        }
                                    } else if (O.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === j && fi(ft) === O.type) {
                                        a(N, O.sibling), Q = l(O, L.props), Gs(Q, L), Q.return = N, N = Q;
                                        break t
                                    }
                                    a(N, O);
                                    break
                                } else e(N, O);
                                O = O.sibling
                            }
                            L.type === M ? (Q = ri(L.props.children, N.mode, Q, L.key), Q.return = N, N = Q) : (Q = Zr(L.type, L.key, L.props, null, N.mode, Q), Gs(Q, L), Q.return = N, N = Q)
                        }
                        return p(N);
                    case E:
                        t: {
                            for (ft = L.key; O !== null;) {
                                if (O.key === ft)
                                    if (O.tag === 4 && O.stateNode.containerInfo === L.containerInfo && O.stateNode.implementation === L.implementation) {
                                        a(N, O.sibling), Q = l(O, L.children || []), Q.return = N, N = Q;
                                        break t
                                    } else {
                                        a(N, O);
                                        break
                                    }
                                else e(N, O);
                                O = O.sibling
                            }
                            Q = ic(L, N.mode, Q),
                            Q.return = N,
                            N = Q
                        }
                        return p(N);
                    case j:
                        return L = fi(L), qt(N, O, L, Q)
                }
                if (Et(L)) return rt(N, O, L, Q);
                if (pt(L)) {
                    if (ft = pt(L), typeof ft != "function") throw Error(o(150));
                    return L = ft.call(L), ht(N, O, L, Q)
                }
                if (typeof L.then == "function") return qt(N, O, no(L), Q);
                if (L.$$typeof === Y) return qt(N, O, $r(N, L), Q);
                ao(N, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, O !== null && O.tag === 6 ? (a(N, O.sibling), Q = l(O, L), Q.return = N, N = Q) : (a(N, O), Q = ac(L, N.mode, Q), Q.return = N, N = Q), p(N)) : a(N, O)
        }
        return function(N, O, L, Q) {
            try {
                Ys = 0;
                var ft = qt(N, O, L, Q);
                return $i = null, ft
            } catch (ct) {
                if (ct === Ii || ct === to) throw ct;
                var Ot = Je(29, ct, null, N.mode);
                return Ot.lanes = Q, Ot.return = N, Ot
            }
        }
    }
    var hi = Vd(!0),
        Qd = Vd(!1),
        ma = !1;

    function gc(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function yc(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }

    function pa(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ga(t, e, a) {
        var r = t.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (Dt & 2) !== 0) {
            var l = r.pending;
            return l === null ? e.next = e : (e.next = l.next, l.next = e), r.pending = e, e = Fr(t), Cd(t, null, a), e
        }
        return Kr(t, r, e, a), Fr(t)
    }

    function Vs(t, e, a) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
            var r = e.lanes;
            r &= t.pendingLanes, a |= r, e.lanes = a, Le(t, a)
        }
    }

    function vc(t, e) {
        var a = t.updateQueue,
            r = t.alternate;
        if (r !== null && (r = r.updateQueue, a === r)) {
            var l = null,
                u = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var p = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? l = u = p : u = u.next = p, a = a.next
                } while (a !== null);
                u === null ? l = u = e : u = u.next = e
            } else l = u = e;
            a = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: u,
                shared: r.shared,
                callbacks: r.callbacks
            }, t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e
    }
    var bc = !1;

    function Qs() {
        if (bc) {
            var t = Ji;
            if (t !== null) throw t
        }
    }

    function Ps(t, e, a, r) {
        bc = !1;
        var l = t.updateQueue;
        ma = !1;
        var u = l.firstBaseUpdate,
            p = l.lastBaseUpdate,
            b = l.shared.pending;
        if (b !== null) {
            l.shared.pending = null;
            var C = b,
                U = C.next;
            C.next = null, p === null ? u = U : p.next = U, p = C;
            var G = t.alternate;
            G !== null && (G = G.updateQueue, b = G.lastBaseUpdate, b !== p && (b === null ? G.firstBaseUpdate = U : b.next = U, G.lastBaseUpdate = C))
        }
        if (u !== null) {
            var K = l.baseState;
            p = 0, G = U = C = null, b = u;
            do {
                var B = b.lane & -536870913,
                    k = B !== b.lane;
                if (k ? (Ct & B) === B : (r & B) === B) {
                    B !== 0 && B === Zi && (bc = !0), G !== null && (G = G.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var rt = t,
                            ht = b;B = e;
                        var qt = a;
                        switch (ht.tag) {
                            case 1:
                                if (rt = ht.payload, typeof rt == "function") {
                                    K = rt.call(qt, K, B);
                                    break t
                                }
                                K = rt;
                                break t;
                            case 3:
                                rt.flags = rt.flags & -65537 | 128;
                            case 0:
                                if (rt = ht.payload, B = typeof rt == "function" ? rt.call(qt, K, B) : rt, B == null) break t;
                                K = h({}, K, B);
                                break t;
                            case 2:
                                ma = !0
                        }
                    }
                    B = b.callback, B !== null && (t.flags |= 64, k && (t.flags |= 8192), k = l.callbacks, k === null ? l.callbacks = [B] : k.push(B))
                } else k = {
                    lane: B,
                    tag: b.tag,
                    payload: b.payload,
                    callback: b.callback,
                    next: null
                }, G === null ? (U = G = k, C = K) : G = G.next = k, p |= B;
                if (b = b.next, b === null) {
                    if (b = l.shared.pending, b === null) break;
                    k = b, b = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null
                }
            } while (!0);
            G === null && (C = K), l.baseState = C, l.firstBaseUpdate = U, l.lastBaseUpdate = G, u === null && (l.shared.lanes = 0), xa |= p, t.lanes = p, t.memoizedState = K
        }
    }

    function Pd(t, e) {
        if (typeof t != "function") throw Error(o(191, t));
        t.call(e)
    }

    function Xd(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null, t = 0; t < a.length; t++) Pd(a[t], e)
    }
    var Wi = A(null),
        io = A(0);

    function Kd(t, e) {
        t = In, X(io, t), X(Wi, e), In = t | e.baseLanes
    }

    function Sc() {
        X(io, In), X(Wi, Wi.current)
    }

    function xc() {
        In = io.current, V(Wi), V(io)
    }
    var Ie = A(null),
        dn = null;

    function ya(t) {
        var e = t.alternate;
        X(Wt, Wt.current & 1), X(Ie, t), dn === null && (e === null || Wi.current !== null || e.memoizedState !== null) && (dn = t)
    }

    function wc(t) {
        X(Wt, Wt.current), X(Ie, t), dn === null && (dn = t)
    }

    function Fd(t) {
        t.tag === 22 ? (X(Wt, Wt.current), X(Ie, t), dn === null && (dn = t)) : va()
    }

    function va() {
        X(Wt, Wt.current), X(Ie, Ie.current)
    }

    function $e(t) {
        V(Ie), dn === t && (dn = null), V(Wt)
    }
    var Wt = A(0);

    function so(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || Au(a) || Mu(a))) return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }
    var Vn = 0,
        xt = null,
        kt = null,
        ie = null,
        ro = !1,
        ts = !1,
        mi = !1,
        oo = 0,
        Xs = 0,
        es = null,
        B0 = 0;

    function Jt() {
        throw Error(o(321))
    }

    function _c(t, e) {
        if (e === null) return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!Ze(t[a], e[a])) return !1;
        return !0
    }

    function Ec(t, e, a, r, l, u) {
        return Vn = u, xt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, D.H = t === null || t.memoizedState === null ? zh : Hc, mi = !1, u = a(r, l), mi = !1, ts && (u = Jd(e, a, r, l)), Zd(t), u
    }

    function Zd(t) {
        D.H = Zs;
        var e = kt !== null && kt.next !== null;
        if (Vn = 0, ie = kt = xt = null, ro = !1, Xs = 0, es = null, e) throw Error(o(300));
        t === null || se || (t = t.dependencies, t !== null && Ir(t) && (se = !0))
    }

    function Jd(t, e, a, r) {
        xt = t;
        var l = 0;
        do {
            if (ts && (es = null), Xs = 0, ts = !1, 25 <= l) throw Error(o(301));
            if (l += 1, ie = kt = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            D.H = Nh, u = e(a, r)
        } while (ts);
        return u
    }

    function k0() {
        var t = D.H,
            e = t.useState()[0];
        return e = typeof e.then == "function" ? Ks(e) : e, t = t.useState()[0], (kt !== null ? kt.memoizedState : null) !== t && (xt.flags |= 1024), e
    }

    function Rc() {
        var t = oo !== 0;
        return oo = 0, t
    }

    function Tc(t, e, a) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a
    }

    function Cc(t) {
        if (ro) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            ro = !1
        }
        Vn = 0, ie = kt = xt = null, ts = !1, Xs = oo = 0, es = null
    }

    function Ne() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ie === null ? xt.memoizedState = ie = t : ie = ie.next = t, ie
    }

    function te() {
        if (kt === null) {
            var t = xt.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = kt.next;
        var e = ie === null ? xt.memoizedState : ie.next;
        if (e !== null) ie = e, kt = t;
        else {
            if (t === null) throw xt.alternate === null ? Error(o(467)) : Error(o(310));
            kt = t, t = {
                memoizedState: kt.memoizedState,
                baseState: kt.baseState,
                baseQueue: kt.baseQueue,
                queue: kt.queue,
                next: null
            }, ie === null ? xt.memoizedState = ie = t : ie = ie.next = t
        }
        return ie
    }

    function lo() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Ks(t) {
        var e = Xs;
        return Xs += 1, es === null && (es = []), t = qd(es, t, e), e = xt, (ie === null ? e.memoizedState : ie.next) === null && (e = e.alternate, D.H = e === null || e.memoizedState === null ? zh : Hc), t
    }

    function co(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return Ks(t);
            if (t.$$typeof === Y) return Re(t)
        }
        throw Error(o(438, String(t)))
    }

    function Ac(t) {
        var e = null,
            a = xt.updateQueue;
        if (a !== null && (e = a.memoCache), e == null) {
            var r = xt.alternate;
            r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = {
                data: r.data.map(function(l) {
                    return l.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), a === null && (a = lo(), xt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
            for (a = e.data[e.index] = Array(t), r = 0; r < t; r++) a[r] = ut;
        return e.index++, a
    }

    function Qn(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function uo(t) {
        var e = te();
        return Mc(e, kt, t)
    }

    function Mc(t, e, a) {
        var r = t.queue;
        if (r === null) throw Error(o(311));
        r.lastRenderedReducer = a;
        var l = t.baseQueue,
            u = r.pending;
        if (u !== null) {
            if (l !== null) {
                var p = l.next;
                l.next = u.next, u.next = p
            }
            e.baseQueue = l = u, r.pending = null
        }
        if (u = t.baseState, l === null) t.memoizedState = u;
        else {
            e = l.next;
            var b = p = null,
                C = null,
                U = e,
                G = !1;
            do {
                var K = U.lane & -536870913;
                if (K !== U.lane ? (Ct & K) === K : (Vn & K) === K) {
                    var B = U.revertLane;
                    if (B === 0) C !== null && (C = C.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: U.action,
                        hasEagerState: U.hasEagerState,
                        eagerState: U.eagerState,
                        next: null
                    }), K === Zi && (G = !0);
                    else if ((Vn & B) === B) {
                        U = U.next, B === Zi && (G = !0);
                        continue
                    } else K = {
                        lane: 0,
                        revertLane: U.revertLane,
                        gesture: null,
                        action: U.action,
                        hasEagerState: U.hasEagerState,
                        eagerState: U.eagerState,
                        next: null
                    }, C === null ? (b = C = K, p = u) : C = C.next = K, xt.lanes |= B, xa |= B;
                    K = U.action, mi && a(u, K), u = U.hasEagerState ? U.eagerState : a(u, K)
                } else B = {
                    lane: K,
                    revertLane: U.revertLane,
                    gesture: U.gesture,
                    action: U.action,
                    hasEagerState: U.hasEagerState,
                    eagerState: U.eagerState,
                    next: null
                }, C === null ? (b = C = B, p = u) : C = C.next = B, xt.lanes |= K, xa |= K;
                U = U.next
            } while (U !== null && U !== e);
            if (C === null ? p = u : C.next = b, !Ze(u, t.memoizedState) && (se = !0, G && (a = Ji, a !== null))) throw a;
            t.memoizedState = u, t.baseState = p, t.baseQueue = C, r.lastRenderedState = u
        }
        return l === null && (r.lanes = 0), [t.memoizedState, r.dispatch]
    }

    function Oc(t) {
        var e = te(),
            a = e.queue;
        if (a === null) throw Error(o(311));
        a.lastRenderedReducer = t;
        var r = a.dispatch,
            l = a.pending,
            u = e.memoizedState;
        if (l !== null) {
            a.pending = null;
            var p = l = l.next;
            do u = t(u, p.action), p = p.next; while (p !== l);
            Ze(u, e.memoizedState) || (se = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u
        }
        return [u, r]
    }

    function Id(t, e, a) {
        var r = xt,
            l = te(),
            u = Mt;
        if (u) {
            if (a === void 0) throw Error(o(407));
            a = a()
        } else a = e();
        var p = !Ze((kt || l).memoizedState, a);
        if (p && (l.memoizedState = a, se = !0), l = l.queue, Dc(th.bind(null, r, l, t), [t]), l.getSnapshot !== e || p || ie !== null && ie.memoizedState.tag & 1) {
            if (r.flags |= 2048, ns(9, {
                    destroy: void 0
                }, Wd.bind(null, r, l, a, e), null), Yt === null) throw Error(o(349));
            u || (Vn & 127) !== 0 || $d(r, e, a)
        }
        return a
    }

    function $d(t, e, a) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value: a
        }, e = xt.updateQueue, e === null ? (e = lo(), xt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t))
    }

    function Wd(t, e, a, r) {
        e.value = a, e.getSnapshot = r, eh(e) && nh(t)
    }

    function th(t, e, a) {
        return a(function() {
            eh(e) && nh(t)
        })
    }

    function eh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !Ze(t, a)
        } catch {
            return !0
        }
    }

    function nh(t) {
        var e = si(t, 2);
        e !== null && Ve(e, t, 2)
    }

    function zc(t) {
        var e = Ne();
        if (typeof t == "function") {
            var a = t;
            if (t = a(), mi) {
                gn(!0);
                try {
                    a()
                } finally {
                    gn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qn,
            lastRenderedState: t
        }, e
    }

    function ah(t, e, a, r) {
        return t.baseState = a, Mc(t, kt, typeof r == "function" ? r : Qn)
    }

    function H0(t, e, a, r, l) {
        if (mo(t)) throw Error(o(485));
        if (t = e.action, t !== null) {
            var u = {
                payload: l,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(p) {
                    u.listeners.push(p)
                }
            };
            D.T !== null ? a(!0) : u.isTransition = !1, r(u), a = e.pending, a === null ? (u.next = e.pending = u, ih(e, u)) : (u.next = a.next, e.pending = a.next = u)
        }
    }

    function ih(t, e) {
        var a = e.action,
            r = e.payload,
            l = t.state;
        if (e.isTransition) {
            var u = D.T,
                p = {};
            D.T = p;
            try {
                var b = a(l, r),
                    C = D.S;
                C !== null && C(p, b), sh(t, e, b)
            } catch (U) {
                Nc(t, e, U)
            } finally {
                u !== null && p.types !== null && (u.types = p.types), D.T = u
            }
        } else try {
            u = a(l, r), sh(t, e, u)
        } catch (U) {
            Nc(t, e, U)
        }
    }

    function sh(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(r) {
            rh(t, e, r)
        }, function(r) {
            return Nc(t, e, r)
        }) : rh(t, e, a)
    }

    function rh(t, e, a) {
        e.status = "fulfilled", e.value = a, oh(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, ih(t, a)))
    }

    function Nc(t, e, a) {
        var r = t.pending;
        if (t.pending = null, r !== null) {
            r = r.next;
            do e.status = "rejected", e.reason = a, oh(e), e = e.next; while (e !== r)
        }
        t.action = null
    }

    function oh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)(0, t[e])()
    }

    function lh(t, e) {
        return e
    }

    function ch(t, e) {
        if (Mt) {
            var a = Yt.formState;
            if (a !== null) {
                t: {
                    var r = xt;
                    if (Mt) {
                        if (Vt) {
                            e: {
                                for (var l = Vt, u = fn; l.nodeType !== 8;) {
                                    if (!u) {
                                        l = null;
                                        break e
                                    }
                                    if (l = hn(l.nextSibling), l === null) {
                                        l = null;
                                        break e
                                    }
                                }
                                u = l.data,
                                l = u === "F!" || u === "F" ? l : null
                            }
                            if (l) {
                                Vt = hn(l.nextSibling), r = l.data === "F!";
                                break t
                            }
                        }
                        da(r)
                    }
                    r = !1
                }
                r && (e = a[0])
            }
        }
        return a = Ne(), a.memoizedState = a.baseState = e, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: lh,
            lastRenderedState: e
        }, a.queue = r, a = Ah.bind(null, xt, r), r.dispatch = a, r = zc(!1), u = kc.bind(null, xt, !1, r.queue), r = Ne(), l = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        }, r.queue = l, a = H0.bind(null, xt, l, u, a), l.dispatch = a, r.memoizedState = t, [e, a, !1]
    }

    function uh(t) {
        var e = te();
        return fh(e, kt, t)
    }

    function fh(t, e, a) {
        if (e = Mc(t, e, lh)[0], t = uo(Qn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var r = Ks(e)
        } catch (p) {
            throw p === Ii ? to : p
        } else r = e;
        e = te();
        var l = e.queue,
            u = l.dispatch;
        return a !== e.memoizedState && (xt.flags |= 2048, ns(9, {
            destroy: void 0
        }, q0.bind(null, l, a), null)), [r, u, t]
    }

    function q0(t, e) {
        t.action = e
    }

    function dh(t) {
        var e = te(),
            a = kt;
        if (a !== null) return fh(e, a, t);
        te(), e = e.memoizedState, a = te();
        var r = a.queue.dispatch;
        return a.memoizedState = t, [e, r, !1]
    }

    function ns(t, e, a, r) {
        return t = {
            tag: t,
            create: a,
            deps: r,
            inst: e,
            next: null
        }, e = xt.updateQueue, e === null && (e = lo(), xt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (r = a.next, a.next = t, t.next = r, e.lastEffect = t), t
    }

    function hh() {
        return te().memoizedState
    }

    function fo(t, e, a, r) {
        var l = Ne();
        xt.flags |= t, l.memoizedState = ns(1 | e, {
            destroy: void 0
        }, a, r === void 0 ? null : r)
    }

    function ho(t, e, a, r) {
        var l = te();
        r = r === void 0 ? null : r;
        var u = l.memoizedState.inst;
        kt !== null && r !== null && _c(r, kt.memoizedState.deps) ? l.memoizedState = ns(e, u, a, r) : (xt.flags |= t, l.memoizedState = ns(1 | e, u, a, r))
    }

    function mh(t, e) {
        fo(8390656, 8, t, e)
    }

    function Dc(t, e) {
        ho(2048, 8, t, e)
    }

    function Y0(t) {
        xt.flags |= 4;
        var e = xt.updateQueue;
        if (e === null) e = lo(), xt.updateQueue = e, e.events = [t];
        else {
            var a = e.events;
            a === null ? e.events = [t] : a.push(t)
        }
    }

    function ph(t) {
        var e = te().memoizedState;
        return Y0({
                ref: e,
                nextImpl: t
            }),
            function() {
                if ((Dt & 2) !== 0) throw Error(o(440));
                return e.impl.apply(void 0, arguments)
            }
    }

    function gh(t, e) {
        return ho(4, 2, t, e)
    }

    function yh(t, e) {
        return ho(4, 4, t, e)
    }

    function vh(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t,
            function() {
                e.current = null
            }
    }

    function bh(t, e, a) {
        a = a != null ? a.concat([t]) : null, ho(4, 4, vh.bind(null, e, t), a)
    }

    function jc() {}

    function Sh(t, e) {
        var a = te();
        e = e === void 0 ? null : e;
        var r = a.memoizedState;
        return e !== null && _c(e, r[1]) ? r[0] : (a.memoizedState = [t, e], t)
    }

    function xh(t, e) {
        var a = te();
        e = e === void 0 ? null : e;
        var r = a.memoizedState;
        if (e !== null && _c(e, r[1])) return r[0];
        if (r = t(), mi) {
            gn(!0);
            try {
                t()
            } finally {
                gn(!1)
            }
        }
        return a.memoizedState = [r, e], r
    }

    function Lc(t, e, a) {
        return a === void 0 || (Vn & 1073741824) !== 0 && (Ct & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = wm(), xt.lanes |= t, xa |= t, a)
    }

    function wh(t, e, a, r) {
        return Ze(a, e) ? a : Wi.current !== null ? (t = Lc(t, a, r), Ze(t, e) || (se = !0), t) : (Vn & 42) === 0 || (Vn & 1073741824) !== 0 && (Ct & 261930) === 0 ? (se = !0, t.memoizedState = a) : (t = wm(), xt.lanes |= t, xa |= t, e)
    }

    function _h(t, e, a, r, l) {
        var u = F.p;
        F.p = u !== 0 && 8 > u ? u : 8;
        var p = D.T,
            b = {};
        D.T = b, kc(t, !1, e, a);
        try {
            var C = l(),
                U = D.S;
            if (U !== null && U(b, C), C !== null && typeof C == "object" && typeof C.then == "function") {
                var G = U0(C, r);
                Fs(t, e, G, en(t))
            } else Fs(t, e, r, en(t))
        } catch (K) {
            Fs(t, e, {
                then: function() {},
                status: "rejected",
                reason: K
            }, en())
        } finally {
            F.p = u, p !== null && b.types !== null && (p.types = b.types), D.T = p
        }
    }

    function G0() {}

    function Uc(t, e, a, r) {
        if (t.tag !== 5) throw Error(o(476));
        var l = Eh(t).queue;
        _h(t, l, e, it, a === null ? G0 : function() {
            return Rh(t), a(r)
        })
    }

    function Eh(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: it,
            baseState: it,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qn,
                lastRenderedState: it
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qn,
                lastRenderedState: a
            },
            next: null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function Rh(t) {
        var e = Eh(t);
        e.next === null && (e = t.alternate.memoizedState), Fs(t, e.next.queue, {}, en())
    }

    function Bc() {
        return Re(fr)
    }

    function Th() {
        return te().memoizedState
    }

    function Ch() {
        return te().memoizedState
    }

    function V0(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var a = en();
                    t = pa(a);
                    var r = ga(e, t, a);
                    r !== null && (Ve(r, e, a), Vs(r, e, a)), e = {
                        cache: dc()
                    }, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function Q0(t, e, a) {
        var r = en();
        a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, mo(t) ? Mh(e, a) : (a = ec(t, e, a, r), a !== null && (Ve(a, t, r), Oh(a, e, r)))
    }

    function Ah(t, e, a) {
        var r = en();
        Fs(t, e, a, r)
    }

    function Fs(t, e, a, r) {
        var l = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (mo(t)) Mh(e, l);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var p = e.lastRenderedState,
                    b = u(p, a);
                if (l.hasEagerState = !0, l.eagerState = b, Ze(b, p)) return Kr(t, e, l, 0), Yt === null && Xr(), !1
            } catch {}
            if (a = ec(t, e, l, r), a !== null) return Ve(a, t, r), Oh(a, e, r), !0
        }
        return !1
    }

    function kc(t, e, a, r) {
        if (r = {
                lane: 2,
                revertLane: gu(),
                gesture: null,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, mo(t)) {
            if (e) throw Error(o(479))
        } else e = ec(t, a, r, 2), e !== null && Ve(e, t, 2)
    }

    function mo(t) {
        var e = t.alternate;
        return t === xt || e !== null && e === xt
    }

    function Mh(t, e) {
        ts = ro = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e
    }

    function Oh(t, e, a) {
        if ((a & 4194048) !== 0) {
            var r = e.lanes;
            r &= t.pendingLanes, a |= r, e.lanes = a, Le(t, a)
        }
    }
    var Zs = {
        readContext: Re,
        use: co,
        useCallback: Jt,
        useContext: Jt,
        useEffect: Jt,
        useImperativeHandle: Jt,
        useLayoutEffect: Jt,
        useInsertionEffect: Jt,
        useMemo: Jt,
        useReducer: Jt,
        useRef: Jt,
        useState: Jt,
        useDebugValue: Jt,
        useDeferredValue: Jt,
        useTransition: Jt,
        useSyncExternalStore: Jt,
        useId: Jt,
        useHostTransitionStatus: Jt,
        useFormState: Jt,
        useActionState: Jt,
        useOptimistic: Jt,
        useMemoCache: Jt,
        useCacheRefresh: Jt
    };
    Zs.useEffectEvent = Jt;
    var zh = {
            readContext: Re,
            use: co,
            useCallback: function(t, e) {
                return Ne().memoizedState = [t, e === void 0 ? null : e], t
            },
            useContext: Re,
            useEffect: mh,
            useImperativeHandle: function(t, e, a) {
                a = a != null ? a.concat([t]) : null, fo(4194308, 4, vh.bind(null, e, t), a)
            },
            useLayoutEffect: function(t, e) {
                return fo(4194308, 4, t, e)
            },
            useInsertionEffect: function(t, e) {
                fo(4, 2, t, e)
            },
            useMemo: function(t, e) {
                var a = Ne();
                e = e === void 0 ? null : e;
                var r = t();
                if (mi) {
                    gn(!0);
                    try {
                        t()
                    } finally {
                        gn(!1)
                    }
                }
                return a.memoizedState = [r, e], r
            },
            useReducer: function(t, e, a) {
                var r = Ne();
                if (a !== void 0) {
                    var l = a(e);
                    if (mi) {
                        gn(!0);
                        try {
                            a(e)
                        } finally {
                            gn(!1)
                        }
                    }
                } else l = e;
                return r.memoizedState = r.baseState = l, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: l
                }, r.queue = t, t = t.dispatch = Q0.bind(null, xt, t), [r.memoizedState, t]
            },
            useRef: function(t) {
                var e = Ne();
                return t = {
                    current: t
                }, e.memoizedState = t
            },
            useState: function(t) {
                t = zc(t);
                var e = t.queue,
                    a = Ah.bind(null, xt, e);
                return e.dispatch = a, [t.memoizedState, a]
            },
            useDebugValue: jc,
            useDeferredValue: function(t, e) {
                var a = Ne();
                return Lc(a, t, e)
            },
            useTransition: function() {
                var t = zc(!1);
                return t = _h.bind(null, xt, t.queue, !0, !1), Ne().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, e, a) {
                var r = xt,
                    l = Ne();
                if (Mt) {
                    if (a === void 0) throw Error(o(407));
                    a = a()
                } else {
                    if (a = e(), Yt === null) throw Error(o(349));
                    (Ct & 127) !== 0 || $d(r, e, a)
                }
                l.memoizedState = a;
                var u = {
                    value: a,
                    getSnapshot: e
                };
                return l.queue = u, mh(th.bind(null, r, u, t), [t]), r.flags |= 2048, ns(9, {
                    destroy: void 0
                }, Wd.bind(null, r, u, a, e), null), a
            },
            useId: function() {
                var t = Ne(),
                    e = Yt.identifierPrefix;
                if (Mt) {
                    var a = Cn,
                        r = Tn;
                    a = (r & ~(1 << 32 - Ae(r) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = oo++, 0 < a && (e += "H" + a.toString(32)), e += "_"
                } else a = B0++, e = "_" + e + "r_" + a.toString(32) + "_";
                return t.memoizedState = e
            },
            useHostTransitionStatus: Bc,
            useFormState: ch,
            useActionState: ch,
            useOptimistic: function(t) {
                var e = Ne();
                e.memoizedState = e.baseState = t;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = a, e = kc.bind(null, xt, !0, a), a.dispatch = e, [t, e]
            },
            useMemoCache: Ac,
            useCacheRefresh: function() {
                return Ne().memoizedState = V0.bind(null, xt)
            },
            useEffectEvent: function(t) {
                var e = Ne(),
                    a = {
                        impl: t
                    };
                return e.memoizedState = a,
                    function() {
                        if ((Dt & 2) !== 0) throw Error(o(440));
                        return a.impl.apply(void 0, arguments)
                    }
            }
        },
        Hc = {
            readContext: Re,
            use: co,
            useCallback: Sh,
            useContext: Re,
            useEffect: Dc,
            useImperativeHandle: bh,
            useInsertionEffect: gh,
            useLayoutEffect: yh,
            useMemo: xh,
            useReducer: uo,
            useRef: hh,
            useState: function() {
                return uo(Qn)
            },
            useDebugValue: jc,
            useDeferredValue: function(t, e) {
                var a = te();
                return wh(a, kt.memoizedState, t, e)
            },
            useTransition: function() {
                var t = uo(Qn)[0],
                    e = te().memoizedState;
                return [typeof t == "boolean" ? t : Ks(t), e]
            },
            useSyncExternalStore: Id,
            useId: Th,
            useHostTransitionStatus: Bc,
            useFormState: uh,
            useActionState: uh,
            useOptimistic: function(t, e) {
                var a = te();
                return ah(a, kt, t, e)
            },
            useMemoCache: Ac,
            useCacheRefresh: Ch
        };
    Hc.useEffectEvent = ph;
    var Nh = {
        readContext: Re,
        use: co,
        useCallback: Sh,
        useContext: Re,
        useEffect: Dc,
        useImperativeHandle: bh,
        useInsertionEffect: gh,
        useLayoutEffect: yh,
        useMemo: xh,
        useReducer: Oc,
        useRef: hh,
        useState: function() {
            return Oc(Qn)
        },
        useDebugValue: jc,
        useDeferredValue: function(t, e) {
            var a = te();
            return kt === null ? Lc(a, t, e) : wh(a, kt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Oc(Qn)[0],
                e = te().memoizedState;
            return [typeof t == "boolean" ? t : Ks(t), e]
        },
        useSyncExternalStore: Id,
        useId: Th,
        useHostTransitionStatus: Bc,
        useFormState: dh,
        useActionState: dh,
        useOptimistic: function(t, e) {
            var a = te();
            return kt !== null ? ah(a, kt, t, e) : (a.baseState = t, [t, a.queue.dispatch])
        },
        useMemoCache: Ac,
        useCacheRefresh: Ch
    };
    Nh.useEffectEvent = ph;

    function qc(t, e, a, r) {
        e = t.memoizedState, a = a(r, e), a = a == null ? e : h({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Yc = {
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var r = en(),
                l = pa(r);
            l.payload = e, a != null && (l.callback = a), e = ga(t, l, r), e !== null && (Ve(e, t, r), Vs(e, t, r))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var r = en(),
                l = pa(r);
            l.tag = 1, l.payload = e, a != null && (l.callback = a), e = ga(t, l, r), e !== null && (Ve(e, t, r), Vs(e, t, r))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = en(),
                r = pa(a);
            r.tag = 2, e != null && (r.callback = e), e = ga(t, r, a), e !== null && (Ve(e, t, a), Vs(e, t, a))
        }
    };

    function Dh(t, e, a, r, l, u, p) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, u, p) : e.prototype && e.prototype.isPureReactComponent ? !Ls(a, r) || !Ls(l, u) : !0
    }

    function jh(t, e, a, r) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, r), e.state !== t && Yc.enqueueReplaceState(e, e.state, null)
    }

    function pi(t, e) {
        var a = e;
        if ("ref" in e) {
            a = {};
            for (var r in e) r !== "ref" && (a[r] = e[r])
        }
        if (t = t.defaultProps) {
            a === e && (a = h({}, a));
            for (var l in t) a[l] === void 0 && (a[l] = t[l])
        }
        return a
    }

    function Lh(t) {
        Pr(t)
    }

    function Uh(t) {
        console.error(t)
    }

    function Bh(t) {
        Pr(t)
    }

    function po(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }

    function kh(t, e, a) {
        try {
            var r = t.onCaughtError;
            r(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function Gc(t, e, a) {
        return a = pa(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            po(t, e)
        }, a
    }

    function Hh(t) {
        return t = pa(t), t.tag = 3, t
    }

    function qh(t, e, a, r) {
        var l = a.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var u = r.value;
            t.payload = function() {
                return l(u)
            }, t.callback = function() {
                kh(e, a, r)
            }
        }
        var p = a.stateNode;
        p !== null && typeof p.componentDidCatch == "function" && (t.callback = function() {
            kh(e, a, r), typeof l != "function" && (wa === null ? wa = new Set([this]) : wa.add(this));
            var b = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: b !== null ? b : ""
            })
        })
    }

    function P0(t, e, a, r, l) {
        if (a.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
            if (e = a.alternate, e !== null && Fi(e, a, l, !0), a = Ie.current, a !== null) {
                switch (a.tag) {
                    case 31:
                    case 13:
                        return dn === null ? Co() : a.alternate === null && It === 0 && (It = 3), a.flags &= -257, a.flags |= 65536, a.lanes = l, r === eo ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = new Set([r]) : e.add(r), hu(t, r, l)), !1;
                    case 22:
                        return a.flags |= 65536, r === eo ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r])
                        }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = new Set([r]) : a.add(r)), hu(t, r, l)), !1
                }
                throw Error(o(435, a.tag))
            }
            return hu(t, r, l), Co(), !1
        }
        if (Mt) return e = Ie.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = l, r !== oc && (t = Error(o(422), {
            cause: r
        }), ks(ln(t, a)))) : (r !== oc && (e = Error(o(423), {
            cause: r
        }), ks(ln(e, a))), t = t.current.alternate, t.flags |= 65536, l &= -l, t.lanes |= l, r = ln(r, a), l = Gc(t.stateNode, r, l), vc(t, l), It !== 4 && (It = 2)), !1;
        var u = Error(o(520), {
            cause: r
        });
        if (u = ln(u, a), ar === null ? ar = [u] : ar.push(u), It !== 4 && (It = 2), e === null) return !0;
        r = ln(r, a), a = e;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, t = l & -l, a.lanes |= t, t = Gc(a.stateNode, r, t), vc(a, t), !1;
                case 1:
                    if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (wa === null || !wa.has(u)))) return a.flags |= 65536, l &= -l, a.lanes |= l, l = Hh(l), qh(l, t, a, r), vc(a, l), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Vc = Error(o(461)),
        se = !1;

    function Te(t, e, a, r) {
        e.child = t === null ? Qd(e, null, a, r) : hi(e, t.child, a, r)
    }

    function Yh(t, e, a, r, l) {
        a = a.render;
        var u = e.ref;
        if ("ref" in r) {
            var p = {};
            for (var b in r) b !== "ref" && (p[b] = r[b])
        } else p = r;
        return ci(e), r = Ec(t, e, a, p, u, l), b = Rc(), t !== null && !se ? (Tc(t, e, l), Pn(t, e, l)) : (Mt && b && sc(e), e.flags |= 1, Te(t, e, r, l), e.child)
    }

    function Gh(t, e, a, r, l) {
        if (t === null) {
            var u = a.type;
            return typeof u == "function" && !nc(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Vh(t, e, u, r, l)) : (t = Zr(a.type, null, r, e, e.mode, l), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !Ic(t, l)) {
            var p = u.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Ls, a(p, r) && t.ref === e.ref) return Pn(t, e, l)
        }
        return e.flags |= 1, t = Hn(u, r), t.ref = e.ref, t.return = e, e.child = t
    }

    function Vh(t, e, a, r, l) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (Ls(u, r) && t.ref === e.ref)
                if (se = !1, e.pendingProps = r = u, Ic(t, l))(t.flags & 131072) !== 0 && (se = !0);
                else return e.lanes = t.lanes, Pn(t, e, l)
        }
        return Qc(t, e, a, r, l)
    }

    function Qh(t, e, a, r) {
        var l = r.children,
            u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), r.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | a : a, t !== null) {
                    for (r = e.child = t.child, l = 0; r !== null;) l = l | r.lanes | r.childLanes, r = r.sibling;
                    r = l & ~u
                } else r = 0, e.child = null;
                return Ph(t, e, u, a, r)
            }
            if ((a & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && Wr(e, u !== null ? u.cachePool : null), u !== null ? Kd(e, u) : Sc(), Fd(e);
            else return r = e.lanes = 536870912, Ph(t, e, u !== null ? u.baseLanes | a : a, a, r)
        } else u !== null ? (Wr(e, u.cachePool), Kd(e, u), va(), e.memoizedState = null) : (t !== null && Wr(e, null), Sc(), va());
        return Te(t, e, l, a), e.child
    }

    function Js(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), e.sibling
    }

    function Ph(t, e, a, r, l) {
        var u = mc();
        return u = u === null ? null : {
            parent: ae._currentValue,
            pool: u
        }, e.memoizedState = {
            baseLanes: a,
            cachePool: u
        }, t !== null && Wr(e, null), Sc(), Fd(e), t !== null && Fi(t, e, r, !0), e.childLanes = l, null
    }

    function go(t, e) {
        return e = vo({
            mode: e.mode,
            children: e.children
        }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function Xh(t, e, a) {
        return hi(e, t.child, null, a), t = go(e, e.pendingProps), t.flags |= 2, $e(e), e.memoizedState = null, t
    }

    function X0(t, e, a) {
        var r = e.pendingProps,
            l = (e.flags & 128) !== 0;
        if (e.flags &= -129, t === null) {
            if (Mt) {
                if (r.mode === "hidden") return t = go(e, r), e.lanes = 536870912, Js(null, t);
                if (wc(e), (t = Vt) ? (t = ip(t, fn), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: ua !== null ? {
                            id: Tn,
                            overflow: Cn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Md(t), a.return = e, e.child = a, Ee = e, Vt = null)) : t = null, t === null) throw da(e);
                return e.lanes = 536870912, null
            }
            return go(e, r)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var p = u.dehydrated;
            if (wc(e), l)
                if (e.flags & 256) e.flags &= -257, e = Xh(t, e, a);
                else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
            else throw Error(o(558));
            else if (se || Fi(t, e, a, !1), l = (a & t.childLanes) !== 0, se || l) {
                if (r = Yt, r !== null && (p = Ue(r, a), p !== 0 && p !== u.retryLane)) throw u.retryLane = p, si(t, p), Ve(r, t, p), Vc;
                Co(), e = Xh(t, e, a)
            } else t = u.treeContext, Vt = hn(p.nextSibling), Ee = e, Mt = !0, fa = null, fn = !1, t !== null && Nd(e, t), e = go(e, r), e.flags |= 4096;
            return e
        }
        return t = Hn(t.child, {
            mode: r.mode,
            children: r.children
        }), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function yo(t, e) {
        var a = e.ref;
        if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(o(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816)
        }
    }

    function Qc(t, e, a, r, l) {
        return ci(e), a = Ec(t, e, a, r, void 0, l), r = Rc(), t !== null && !se ? (Tc(t, e, l), Pn(t, e, l)) : (Mt && r && sc(e), e.flags |= 1, Te(t, e, a, l), e.child)
    }

    function Kh(t, e, a, r, l, u) {
        return ci(e), e.updateQueue = null, a = Jd(e, r, a, l), Zd(t), r = Rc(), t !== null && !se ? (Tc(t, e, u), Pn(t, e, u)) : (Mt && r && sc(e), e.flags |= 1, Te(t, e, a, u), e.child)
    }

    function Fh(t, e, a, r, l) {
        if (ci(e), e.stateNode === null) {
            var u = Qi,
                p = a.contextType;
            typeof p == "object" && p !== null && (u = Re(p)), u = new a(r, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Yc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = r, u.state = e.memoizedState, u.refs = {}, gc(e), p = a.contextType, u.context = typeof p == "object" && p !== null ? Re(p) : Qi, u.state = e.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (qc(e, a, p, r), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (p = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), p !== u.state && Yc.enqueueReplaceState(u, u.state, null), Ps(e, r, u, l), Qs(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), r = !0
        } else if (t === null) {
            u = e.stateNode;
            var b = e.memoizedProps,
                C = pi(a, b);
            u.props = C;
            var U = u.context,
                G = a.contextType;
            p = Qi, typeof G == "object" && G !== null && (p = Re(G));
            var K = a.getDerivedStateFromProps;
            G = typeof K == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || U !== p) && jh(e, u, r, p), ma = !1;
            var B = e.memoizedState;
            u.state = B, Ps(e, r, u, l), Qs(), U = e.memoizedState, b || B !== U || ma ? (typeof K == "function" && (qc(e, a, K, r), U = e.memoizedState), (C = ma || Dh(e, a, C, r, B, U, p)) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = U), u.props = r, u.state = U, u.context = p, r = C) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), r = !1)
        } else {
            u = e.stateNode, yc(t, e), p = e.memoizedProps, G = pi(a, p), u.props = G, K = e.pendingProps, B = u.context, U = a.contextType, C = Qi, typeof U == "object" && U !== null && (C = Re(U)), b = a.getDerivedStateFromProps, (U = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p !== K || B !== C) && jh(e, u, r, C), ma = !1, B = e.memoizedState, u.state = B, Ps(e, r, u, l), Qs();
            var k = e.memoizedState;
            p !== K || B !== k || ma || t !== null && t.dependencies !== null && Ir(t.dependencies) ? (typeof b == "function" && (qc(e, a, b, r), k = e.memoizedState), (G = ma || Dh(e, a, G, r, B, k, C) || t !== null && t.dependencies !== null && Ir(t.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, k, C), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, k, C)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || p === t.memoizedProps && B === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && B === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = k), u.props = r, u.state = k, u.context = C, r = G) : (typeof u.componentDidUpdate != "function" || p === t.memoizedProps && B === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && B === t.memoizedState || (e.flags |= 1024), r = !1)
        }
        return u = r, yo(t, e), r = (e.flags & 128) !== 0, u || r ? (u = e.stateNode, a = r && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && r ? (e.child = hi(e, t.child, null, l), e.child = hi(e, null, a, l)) : Te(t, e, a, l), e.memoizedState = u.state, t = e.child) : t = Pn(t, e, l), t
    }

    function Zh(t, e, a, r) {
        return oi(), e.flags |= 256, Te(t, e, a, r), e.child
    }
    var Pc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Xc(t) {
        return {
            baseLanes: t,
            cachePool: kd()
        }
    }

    function Kc(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0, e && (t |= tn), t
    }

    function Jh(t, e, a) {
        var r = e.pendingProps,
            l = !1,
            u = (e.flags & 128) !== 0,
            p;
        if ((p = u) || (p = t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0), p && (l = !0, e.flags &= -129), p = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (Mt) {
                if (l ? ya(e) : va(), (t = Vt) ? (t = ip(t, fn), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                        dehydrated: t,
                        treeContext: ua !== null ? {
                            id: Tn,
                            overflow: Cn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Md(t), a.return = e, e.child = a, Ee = e, Vt = null)) : t = null, t === null) throw da(e);
                return Mu(t) ? e.lanes = 32 : e.lanes = 536870912, null
            }
            var b = r.children;
            return r = r.fallback, l ? (va(), l = e.mode, b = vo({
                mode: "hidden",
                children: b
            }, l), r = ri(r, l, a, null), b.return = e, r.return = e, b.sibling = r, e.child = b, r = e.child, r.memoizedState = Xc(a), r.childLanes = Kc(t, p, a), e.memoizedState = Pc, Js(null, r)) : (ya(e), Fc(e, b))
        }
        var C = t.memoizedState;
        if (C !== null && (b = C.dehydrated, b !== null)) {
            if (u) e.flags & 256 ? (ya(e), e.flags &= -257, e = Zc(t, e, a)) : e.memoizedState !== null ? (va(), e.child = t.child, e.flags |= 128, e = null) : (va(), b = r.fallback, l = e.mode, r = vo({
                mode: "visible",
                children: r.children
            }, l), b = ri(b, l, a, null), b.flags |= 2, r.return = e, b.return = e, r.sibling = b, e.child = r, hi(e, t.child, null, a), r = e.child, r.memoizedState = Xc(a), r.childLanes = Kc(t, p, a), e.memoizedState = Pc, e = Js(null, r));
            else if (ya(e), Mu(b)) {
                if (p = b.nextSibling && b.nextSibling.dataset, p) var U = p.dgst;
                p = U, r = Error(o(419)), r.stack = "", r.digest = p, ks({
                    value: r,
                    source: null,
                    stack: null
                }), e = Zc(t, e, a)
            } else if (se || Fi(t, e, a, !1), p = (a & t.childLanes) !== 0, se || p) {
                if (p = Yt, p !== null && (r = Ue(p, a), r !== 0 && r !== C.retryLane)) throw C.retryLane = r, si(t, r), Ve(p, t, r), Vc;
                Au(b) || Co(), e = Zc(t, e, a)
            } else Au(b) ? (e.flags |= 192, e.child = t.child, e = null) : (t = C.treeContext, Vt = hn(b.nextSibling), Ee = e, Mt = !0, fa = null, fn = !1, t !== null && Nd(e, t), e = Fc(e, r.children), e.flags |= 4096);
            return e
        }
        return l ? (va(), b = r.fallback, l = e.mode, C = t.child, U = C.sibling, r = Hn(C, {
            mode: "hidden",
            children: r.children
        }), r.subtreeFlags = C.subtreeFlags & 65011712, U !== null ? b = Hn(U, b) : (b = ri(b, l, a, null), b.flags |= 2), b.return = e, r.return = e, r.sibling = b, e.child = r, Js(null, r), r = e.child, b = t.child.memoizedState, b === null ? b = Xc(a) : (l = b.cachePool, l !== null ? (C = ae._currentValue, l = l.parent !== C ? {
            parent: C,
            pool: C
        } : l) : l = kd(), b = {
            baseLanes: b.baseLanes | a,
            cachePool: l
        }), r.memoizedState = b, r.childLanes = Kc(t, p, a), e.memoizedState = Pc, Js(t.child, r)) : (ya(e), a = t.child, t = a.sibling, a = Hn(a, {
            mode: "visible",
            children: r.children
        }), a.return = e, a.sibling = null, t !== null && (p = e.deletions, p === null ? (e.deletions = [t], e.flags |= 16) : p.push(t)), e.child = a, e.memoizedState = null, a)
    }

    function Fc(t, e) {
        return e = vo({
            mode: "visible",
            children: e
        }, t.mode), e.return = t, t.child = e
    }

    function vo(t, e) {
        return t = Je(22, t, null, e), t.lanes = 0, t
    }

    function Zc(t, e, a) {
        return hi(e, t.child, null, a), t = Fc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function Ih(t, e, a) {
        t.lanes |= e;
        var r = t.alternate;
        r !== null && (r.lanes |= e), uc(t.return, e, a)
    }

    function Jc(t, e, a, r, l, u) {
        var p = t.memoizedState;
        p === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: a,
            tailMode: l,
            treeForkCount: u
        } : (p.isBackwards = e, p.rendering = null, p.renderingStartTime = 0, p.last = r, p.tail = a, p.tailMode = l, p.treeForkCount = u)
    }

    function $h(t, e, a) {
        var r = e.pendingProps,
            l = r.revealOrder,
            u = r.tail;
        r = r.children;
        var p = Wt.current,
            b = (p & 2) !== 0;
        if (b ? (p = p & 1 | 2, e.flags |= 128) : p &= 1, X(Wt, p), Te(t, e, r, a), r = Mt ? Bs : 0, !b && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Ih(t, a, e);
            else if (t.tag === 19) Ih(t, a, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (l) {
            case "forwards":
                for (a = e.child, l = null; a !== null;) t = a.alternate, t !== null && so(t) === null && (l = a), a = a.sibling;
                a = l, a === null ? (l = e.child, e.child = null) : (l = a.sibling, a.sibling = null), Jc(e, !1, l, a, u, r);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (a = null, l = e.child, e.child = null; l !== null;) {
                    if (t = l.alternate, t !== null && so(t) === null) {
                        e.child = l;
                        break
                    }
                    t = l.sibling, l.sibling = a, a = l, l = t
                }
                Jc(e, !0, a, null, u, r);
                break;
            case "together":
                Jc(e, !1, null, null, void 0, r);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function Pn(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies), xa |= e.lanes, (a & e.childLanes) === 0)
            if (t !== null) {
                if (Fi(t, e, a, !1), (a & e.childLanes) === 0) return null
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child, a = Hn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null;) t = t.sibling, a = a.sibling = Hn(t, t.pendingProps), a.return = e;
            a.sibling = null
        }
        return e.child
    }

    function Ic(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ir(t)))
    }

    function K0(t, e, a) {
        switch (e.tag) {
            case 3:
                mt(e, e.stateNode.containerInfo), ha(e, ae, t.memoizedState.cache), oi();
                break;
            case 27:
            case 5:
                xe(e);
                break;
            case 4:
                mt(e, e.stateNode.containerInfo);
                break;
            case 10:
                ha(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return e.flags |= 128, wc(e), null;
                break;
            case 13:
                var r = e.memoizedState;
                if (r !== null) return r.dehydrated !== null ? (ya(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Jh(t, e, a) : (ya(e), t = Pn(t, e, a), t !== null ? t.sibling : null);
                ya(e);
                break;
            case 19:
                var l = (t.flags & 128) !== 0;
                if (r = (a & e.childLanes) !== 0, r || (Fi(t, e, a, !1), r = (a & e.childLanes) !== 0), l) {
                    if (r) return $h(t, e, a);
                    e.flags |= 128
                }
                if (l = e.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), X(Wt, Wt.current), r) break;
                return null;
            case 22:
                return e.lanes = 0, Qh(t, e, a, e.pendingProps);
            case 24:
                ha(e, ae, t.memoizedState.cache)
        }
        return Pn(t, e, a)
    }

    function Wh(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) se = !0;
            else {
                if (!Ic(t, a) && (e.flags & 128) === 0) return se = !1, K0(t, e, a);
                se = (t.flags & 131072) !== 0
            }
        else se = !1, Mt && (e.flags & 1048576) !== 0 && zd(e, Bs, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t: {
                    var r = e.pendingProps;
                    if (t = fi(e.elementType), e.type = t, typeof t == "function") nc(t) ? (r = pi(t, r), e.tag = 1, e = Fh(null, e, t, r, a)) : (e.tag = 0, e = Qc(null, e, t, r, a));
                    else {
                        if (t != null) {
                            var l = t.$$typeof;
                            if (l === H) {
                                e.tag = 11, e = Yh(null, e, t, r, a);
                                break t
                            } else if (l === P) {
                                e.tag = 14, e = Gh(null, e, t, r, a);
                                break t
                            }
                        }
                        throw e = jt(t) || t, Error(o(306, e, ""))
                    }
                }
                return e;
            case 0:
                return Qc(t, e, e.type, e.pendingProps, a);
            case 1:
                return r = e.type, l = pi(r, e.pendingProps), Fh(t, e, r, l, a);
            case 3:
                t: {
                    if (mt(e, e.stateNode.containerInfo), t === null) throw Error(o(387));r = e.pendingProps;
                    var u = e.memoizedState;l = u.element,
                    yc(t, e),
                    Ps(e, r, null, a);
                    var p = e.memoizedState;
                    if (r = p.cache, ha(e, ae, r), r !== u.cache && fc(e, [ae], a, !0), Qs(), r = p.element, u.isDehydrated)
                        if (u = {
                                element: r,
                                isDehydrated: !1,
                                cache: p.cache
                            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = Zh(t, e, r, a);
                            break t
                        } else if (r !== l) {
                        l = ln(Error(o(424)), e), ks(l), e = Zh(t, e, r, a);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Vt = hn(t.firstChild), Ee = e, Mt = !0, fa = null, fn = !0, a = Qd(e, null, r, a), e.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (oi(), r === l) {
                            e = Pn(t, e, a);
                            break t
                        }
                        Te(t, e, r, a)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return yo(t, e), t === null ? (a = up(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : Mt || (a = e.type, t = e.pendingProps, r = jo(at.current).createElement(a), r[_e] = e, r[Be] = t, Ce(r, a, t), ye(r), e.stateNode = r) : e.memoizedState = up(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return xe(e), t === null && Mt && (r = e.stateNode = op(e.type, e.pendingProps, at.current), Ee = e, fn = !0, l = Vt, Ta(e.type) ? (Ou = l, Vt = hn(r.firstChild)) : Vt = l), Te(t, e, e.pendingProps.children, a), yo(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && Mt && ((l = r = Vt) && (r = _b(r, e.type, e.pendingProps, fn), r !== null ? (e.stateNode = r, Ee = e, Vt = hn(r.firstChild), fn = !1, l = !0) : l = !1), l || da(e)), xe(e), l = e.type, u = e.pendingProps, p = t !== null ? t.memoizedProps : null, r = u.children, Ru(l, u) ? r = null : p !== null && Ru(l, p) && (e.flags |= 32), e.memoizedState !== null && (l = Ec(t, e, k0, null, null, a), fr._currentValue = l), yo(t, e), Te(t, e, r, a), e.child;
            case 6:
                return t === null && Mt && ((t = a = Vt) && (a = Eb(a, e.pendingProps, fn), a !== null ? (e.stateNode = a, Ee = e, Vt = null, t = !0) : t = !1), t || da(e)), null;
            case 13:
                return Jh(t, e, a);
            case 4:
                return mt(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = hi(e, null, r, a) : Te(t, e, r, a), e.child;
            case 11:
                return Yh(t, e, e.type, e.pendingProps, a);
            case 7:
                return Te(t, e, e.pendingProps, a), e.child;
            case 8:
                return Te(t, e, e.pendingProps.children, a), e.child;
            case 12:
                return Te(t, e, e.pendingProps.children, a), e.child;
            case 10:
                return r = e.pendingProps, ha(e, e.type, r.value), Te(t, e, r.children, a), e.child;
            case 9:
                return l = e.type._context, r = e.pendingProps.children, ci(e), l = Re(l), r = r(l), e.flags |= 1, Te(t, e, r, a), e.child;
            case 14:
                return Gh(t, e, e.type, e.pendingProps, a);
            case 15:
                return Vh(t, e, e.type, e.pendingProps, a);
            case 19:
                return $h(t, e, a);
            case 31:
                return X0(t, e, a);
            case 22:
                return Qh(t, e, a, e.pendingProps);
            case 24:
                return ci(e), r = Re(ae), t === null ? (l = mc(), l === null && (l = Yt, u = dc(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= a), l = u), e.memoizedState = {
                    parent: r,
                    cache: l
                }, gc(e), ha(e, ae, l)) : ((t.lanes & a) !== 0 && (yc(t, e), Ps(e, null, null, a), Qs()), l = t.memoizedState, u = e.memoizedState, l.parent !== r ? (l = {
                    parent: r,
                    cache: r
                }, e.memoizedState = l, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l), ha(e, ae, r)) : (r = u.cache, ha(e, ae, r), r !== l.cache && fc(e, [ae], a, !0))), Te(t, e, e.pendingProps.children, a), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }

    function Xn(t) {
        t.flags |= 4
    }

    function $c(t, e, a, r, l) {
        if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
            if (t.flags |= 16777216, (l & 335544128) === l)
                if (t.stateNode.complete) t.flags |= 8192;
                else if (Tm()) t.flags |= 8192;
            else throw di = eo, pc
        } else t.flags &= -16777217
    }

    function tm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
        else if (t.flags |= 16777216, !pp(e))
            if (Tm()) t.flags |= 8192;
            else throw di = eo, pc
    }

    function bo(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Me() : 536870912, t.lanes |= e, rs |= e)
    }

    function Is(t, e) {
        if (!Mt) switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var r = null; a !== null;) a.alternate !== null && (r = a), a = a.sibling;
                r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
    }

    function Qt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            a = 0,
            r = 0;
        if (e)
            for (var l = t.child; l !== null;) a |= l.lanes | l.childLanes, r |= l.subtreeFlags & 65011712, r |= l.flags & 65011712, l.return = t, l = l.sibling;
        else
            for (l = t.child; l !== null;) a |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = t, l = l.sibling;
        return t.subtreeFlags |= r, t.childLanes = a, e
    }

    function F0(t, e, a) {
        var r = e.pendingProps;
        switch (rc(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Qt(e), null;
            case 1:
                return Qt(e), null;
            case 3:
                return a = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), Gn(ae), dt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Ki(e) ? Xn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, lc())), Qt(e), null;
            case 26:
                var l = e.type,
                    u = e.memoizedState;
                return t === null ? (Xn(e), u !== null ? (Qt(e), tm(e, u)) : (Qt(e), $c(e, l, null, r, a))) : u ? u !== t.memoizedState ? (Xn(e), Qt(e), tm(e, u)) : (Qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== r && Xn(e), Qt(e), $c(e, l, t, r, a)), null;
            case 27:
                if (oe(e), a = at.current, l = e.type, t !== null && e.stateNode != null) t.memoizedProps !== r && Xn(e);
                else {
                    if (!r) {
                        if (e.stateNode === null) throw Error(o(166));
                        return Qt(e), null
                    }
                    t = J.current, Ki(e) ? Dd(e) : (t = op(l, r, a), e.stateNode = t, Xn(e))
                }
                return Qt(e), null;
            case 5:
                if (oe(e), l = e.type, t !== null && e.stateNode != null) t.memoizedProps !== r && Xn(e);
                else {
                    if (!r) {
                        if (e.stateNode === null) throw Error(o(166));
                        return Qt(e), null
                    }
                    if (u = J.current, Ki(e)) Dd(e);
                    else {
                        var p = jo(at.current);
                        switch (u) {
                            case 1:
                                u = p.createElementNS("http://www.w3.org/2000/svg", l);
                                break;
                            case 2:
                                u = p.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                break;
                            default:
                                switch (l) {
                                    case "svg":
                                        u = p.createElementNS("http://www.w3.org/2000/svg", l);
                                        break;
                                    case "math":
                                        u = p.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                        break;
                                    case "script":
                                        u = p.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                        break;
                                    case "select":
                                        u = typeof r.is == "string" ? p.createElement("select", {
                                            is: r.is
                                        }) : p.createElement("select"), r.multiple ? u.multiple = !0 : r.size && (u.size = r.size);
                                        break;
                                    default:
                                        u = typeof r.is == "string" ? p.createElement(l, {
                                            is: r.is
                                        }) : p.createElement(l)
                                }
                        }
                        u[_e] = e, u[Be] = r;
                        t: for (p = e.child; p !== null;) {
                            if (p.tag === 5 || p.tag === 6) u.appendChild(p.stateNode);
                            else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                                p.child.return = p, p = p.child;
                                continue
                            }
                            if (p === e) break t;
                            for (; p.sibling === null;) {
                                if (p.return === null || p.return === e) break t;
                                p = p.return
                            }
                            p.sibling.return = p.return, p = p.sibling
                        }
                        e.stateNode = u;
                        t: switch (Ce(u, l, r), l) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break t;
                            case "img":
                                r = !0;
                                break t;
                            default:
                                r = !1
                        }
                        r && Xn(e)
                    }
                }
                return Qt(e), $c(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== r && Xn(e);
                else {
                    if (typeof r != "string" && e.stateNode === null) throw Error(o(166));
                    if (t = at.current, Ki(e)) {
                        if (t = e.stateNode, a = e.memoizedProps, r = null, l = Ee, l !== null) switch (l.tag) {
                            case 27:
                            case 5:
                                r = l.memoizedProps
                        }
                        t[_e] = e, t = !!(t.nodeValue === a || r !== null && r.suppressHydrationWarning === !0 || Jm(t.nodeValue, a)), t || da(e, !0)
                    } else t = jo(t).createTextNode(r), t[_e] = e, e.stateNode = t
                }
                return Qt(e), null;
            case 31:
                if (a = e.memoizedState, t === null || t.memoizedState !== null) {
                    if (r = Ki(e), a !== null) {
                        if (t === null) {
                            if (!r) throw Error(o(318));
                            if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
                            t[_e] = e
                        } else oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        Qt(e), t = !1
                    } else a = lc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
                    if (!t) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
                    if ((e.flags & 128) !== 0) throw Error(o(558))
                }
                return Qt(e), null;
            case 13:
                if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (l = Ki(e), r !== null && r.dehydrated !== null) {
                        if (t === null) {
                            if (!l) throw Error(o(318));
                            if (l = e.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
                            l[_e] = e
                        } else oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        Qt(e), l = !1
                    } else l = lc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), l = !0;
                    if (!l) return e.flags & 256 ? ($e(e), e) : ($e(e), null)
                }
                return $e(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = r !== null, t = t !== null && t.memoizedState !== null, a && (r = e.child, l = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (l = r.alternate.memoizedState.cachePool.pool), u = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool), u !== l && (r.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), bo(e, e.updateQueue), Qt(e), null);
            case 4:
                return dt(), t === null && Su(e.stateNode.containerInfo), Qt(e), null;
            case 10:
                return Gn(e.type), Qt(e), null;
            case 19:
                if (V(Wt), r = e.memoizedState, r === null) return Qt(e), null;
                if (l = (e.flags & 128) !== 0, u = r.rendering, u === null)
                    if (l) Is(r, !1);
                    else {
                        if (It !== 0 || t !== null && (t.flags & 128) !== 0)
                            for (t = e.child; t !== null;) {
                                if (u = so(t), u !== null) {
                                    for (e.flags |= 128, Is(r, !1), t = u.updateQueue, e.updateQueue = t, bo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null;) Ad(a, t), a = a.sibling;
                                    return X(Wt, Wt.current & 1 | 2), Mt && qn(e, r.treeForkCount), e.child
                                }
                                t = t.sibling
                            }
                        r.tail !== null && pe() > Eo && (e.flags |= 128, l = !0, Is(r, !1), e.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (t = so(u), t !== null) {
                            if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, bo(e, t), Is(r, !0), r.tail === null && r.tailMode === "hidden" && !u.alternate && !Mt) return Qt(e), null
                        } else 2 * pe() - r.renderingStartTime > Eo && a !== 536870912 && (e.flags |= 128, l = !0, Is(r, !1), e.lanes = 4194304);
                    r.isBackwards ? (u.sibling = e.child, e.child = u) : (t = r.last, t !== null ? t.sibling = u : e.child = u, r.last = u)
                }
                return r.tail !== null ? (t = r.tail, r.rendering = t, r.tail = t.sibling, r.renderingStartTime = pe(), t.sibling = null, a = Wt.current, X(Wt, l ? a & 1 | 2 : a & 1), Mt && qn(e, r.treeForkCount), t) : (Qt(e), null);
            case 22:
            case 23:
                return $e(e), xc(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qt(e), a = e.updateQueue, a !== null && bo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== a && (e.flags |= 2048), t !== null && V(ui), null;
            case 24:
                return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Gn(ae), Qt(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, e.tag))
    }

    function Z0(t, e) {
        switch (rc(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return Gn(ae), dt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return oe(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if ($e(e), e.alternate === null) throw Error(o(340));
                    oi()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 13:
                if ($e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(o(340));
                    oi()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return V(Wt), null;
            case 4:
                return dt(), null;
            case 10:
                return Gn(e.type), null;
            case 22:
            case 23:
                return $e(e), xc(), t !== null && V(ui), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return Gn(ae), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function em(t, e) {
        switch (rc(e), e.tag) {
            case 3:
                Gn(ae), dt();
                break;
            case 26:
            case 27:
            case 5:
                oe(e);
                break;
            case 4:
                dt();
                break;
            case 31:
                e.memoizedState !== null && $e(e);
                break;
            case 13:
                $e(e);
                break;
            case 19:
                V(Wt);
                break;
            case 10:
                Gn(e.type);
                break;
            case 22:
            case 23:
                $e(e), xc(), t !== null && V(ui);
                break;
            case 24:
                Gn(ae)
        }
    }

    function $s(t, e) {
        try {
            var a = e.updateQueue,
                r = a !== null ? a.lastEffect : null;
            if (r !== null) {
                var l = r.next;
                a = l;
                do {
                    if ((a.tag & t) === t) {
                        r = void 0;
                        var u = a.create,
                            p = a.inst;
                        r = u(), p.destroy = r
                    }
                    a = a.next
                } while (a !== l)
            }
        } catch (b) {
            Ut(e, e.return, b)
        }
    }

    function ba(t, e, a) {
        try {
            var r = e.updateQueue,
                l = r !== null ? r.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                r = u;
                do {
                    if ((r.tag & t) === t) {
                        var p = r.inst,
                            b = p.destroy;
                        if (b !== void 0) {
                            p.destroy = void 0, l = e;
                            var C = a,
                                U = b;
                            try {
                                U()
                            } catch (G) {
                                Ut(l, C, G)
                            }
                        }
                    }
                    r = r.next
                } while (r !== u)
            }
        } catch (G) {
            Ut(e, e.return, G)
        }
    }

    function nm(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                Xd(e, a)
            } catch (r) {
                Ut(t, t.return, r)
            }
        }
    }

    function am(t, e, a) {
        a.props = pi(t.type, t.memoizedProps), a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (r) {
            Ut(t, e, r)
        }
    }

    function Ws(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = t.stateNode;
                        break;
                    case 30:
                        r = t.stateNode;
                        break;
                    default:
                        r = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(r) : a.current = r
            }
        } catch (l) {
            Ut(t, e, l)
        }
    }

    function An(t, e) {
        var a = t.ref,
            r = t.refCleanup;
        if (a !== null)
            if (typeof r == "function") try {
                r()
            } catch (l) {
                Ut(t, e, l)
            } finally {
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (l) {
                Ut(t, e, l)
            } else a.current = null
    }

    function im(t) {
        var e = t.type,
            a = t.memoizedProps,
            r = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && r.focus();
                    break t;
                case "img":
                    a.src ? r.src = a.src : a.srcSet && (r.srcset = a.srcSet)
            }
        }
        catch (l) {
            Ut(t, t.return, l)
        }
    }

    function Wc(t, e, a) {
        try {
            var r = t.stateNode;
            yb(r, t.type, a, e), r[Be] = e
        } catch (l) {
            Ut(t, t.return, l)
        }
    }

    function sm(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ta(t.type) || t.tag === 4
    }

    function tu(t) {
        t: for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || sm(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Ta(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function eu(t, e, a) {
        var r = t.tag;
        if (r === 5 || r === 6) t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Bn));
        else if (r !== 4 && (r === 27 && Ta(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
            for (eu(t, e, a), t = t.sibling; t !== null;) eu(t, e, a), t = t.sibling
    }

    function So(t, e, a) {
        var r = t.tag;
        if (r === 5 || r === 6) t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (r !== 4 && (r === 27 && Ta(t.type) && (a = t.stateNode), t = t.child, t !== null))
            for (So(t, e, a), t = t.sibling; t !== null;) So(t, e, a), t = t.sibling
    }

    function rm(t) {
        var e = t.stateNode,
            a = t.memoizedProps;
        try {
            for (var r = t.type, l = e.attributes; l.length;) e.removeAttributeNode(l[0]);
            Ce(e, r, a), e[_e] = t, e[Be] = a
        } catch (u) {
            Ut(t, t.return, u)
        }
    }
    var Kn = !1,
        re = !1,
        nu = !1,
        om = typeof WeakSet == "function" ? WeakSet : Set,
        ve = null;

    function J0(t, e) {
        if (t = t.containerInfo, _u = Yo, t = bd(t), Zl(t)) {
            if ("selectionStart" in t) var a = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
            else t: {
                a = (a = t.ownerDocument) && a.defaultView || window;
                var r = a.getSelection && a.getSelection();
                if (r && r.rangeCount !== 0) {
                    a = r.anchorNode;
                    var l = r.anchorOffset,
                        u = r.focusNode;
                    r = r.focusOffset;
                    try {
                        a.nodeType, u.nodeType
                    } catch {
                        a = null;
                        break t
                    }
                    var p = 0,
                        b = -1,
                        C = -1,
                        U = 0,
                        G = 0,
                        K = t,
                        B = null;
                    e: for (;;) {
                        for (var k; K !== a || l !== 0 && K.nodeType !== 3 || (b = p + l), K !== u || r !== 0 && K.nodeType !== 3 || (C = p + r), K.nodeType === 3 && (p += K.nodeValue.length), (k = K.firstChild) !== null;) B = K, K = k;
                        for (;;) {
                            if (K === t) break e;
                            if (B === a && ++U === l && (b = p), B === u && ++G === r && (C = p), (k = K.nextSibling) !== null) break;
                            K = B, B = K.parentNode
                        }
                        K = k
                    }
                    a = b === -1 || C === -1 ? null : {
                        start: b,
                        end: C
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (Eu = {
                focusedElem: t,
                selectionRange: a
            }, Yo = !1, ve = e; ve !== null;)
            if (e = ve, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ve = t;
            else
                for (; ve !== null;) {
                    switch (e = ve, u = e.alternate, t = e.flags, e.tag) {
                        case 0:
                            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                                for (a = 0; a < t.length; a++) l = t[a], l.ref.impl = l.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                t = void 0, a = e, l = u.memoizedProps, u = u.memoizedState, r = a.stateNode;
                                try {
                                    var rt = pi(a.type, l);
                                    t = r.getSnapshotBeforeUpdate(rt, u), r.__reactInternalSnapshotBeforeUpdate = t
                                } catch (ht) {
                                    Ut(a, a.return, ht)
                                }
                            }
                            break;
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9) Cu(t);
                                else if (a === 1) switch (t.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Cu(t);
                                        break;
                                    default:
                                        t.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((t & 1024) !== 0) throw Error(o(163))
                    }
                    if (t = e.sibling, t !== null) {
                        t.return = e.return, ve = t;
                        break
                    }
                    ve = e.return
                }
    }

    function lm(t, e, a) {
        var r = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Zn(t, a), r & 4 && $s(5, a);
                break;
            case 1:
                if (Zn(t, a), r & 4)
                    if (t = a.stateNode, e === null) try {
                        t.componentDidMount()
                    } catch (p) {
                        Ut(a, a.return, p)
                    } else {
                        var l = pi(a.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate)
                        } catch (p) {
                            Ut(a, a.return, p)
                        }
                    }
                r & 64 && nm(a), r & 512 && Ws(a, a.return);
                break;
            case 3:
                if (Zn(t, a), r & 64 && (t = a.updateQueue, t !== null)) {
                    if (e = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            e = a.child.stateNode;
                            break;
                        case 1:
                            e = a.child.stateNode
                    }
                    try {
                        Xd(t, e)
                    } catch (p) {
                        Ut(a, a.return, p)
                    }
                }
                break;
            case 27:
                e === null && r & 4 && rm(a);
            case 26:
            case 5:
                Zn(t, a), e === null && r & 4 && im(a), r & 512 && Ws(a, a.return);
                break;
            case 12:
                Zn(t, a);
                break;
            case 31:
                Zn(t, a), r & 4 && fm(t, a);
                break;
            case 13:
                Zn(t, a), r & 4 && dm(t, a), r & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = sb.bind(null, a), Rb(t, a))));
                break;
            case 22:
                if (r = a.memoizedState !== null || Kn, !r) {
                    e = e !== null && e.memoizedState !== null || re, l = Kn;
                    var u = re;
                    Kn = r, (re = e) && !u ? Jn(t, a, (a.subtreeFlags & 8772) !== 0) : Zn(t, a), Kn = l, re = u
                }
                break;
            case 30:
                break;
            default:
                Zn(t, a)
        }
    }

    function cm(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, cm(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Nl(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }
    var Xt = null,
        He = !1;

    function Fn(t, e, a) {
        for (a = a.child; a !== null;) um(t, e, a), a = a.sibling
    }

    function um(t, e, a) {
        if (ze && typeof ze.onCommitFiberUnmount == "function") try {
            ze.onCommitFiberUnmount($a, a)
        } catch {}
        switch (a.tag) {
            case 26:
                re || An(a, e), Fn(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                re || An(a, e);
                var r = Xt,
                    l = He;
                Ta(a.type) && (Xt = a.stateNode, He = !1), Fn(t, e, a), lr(a.stateNode), Xt = r, He = l;
                break;
            case 5:
                re || An(a, e);
            case 6:
                if (r = Xt, l = He, Xt = null, Fn(t, e, a), Xt = r, He = l, Xt !== null)
                    if (He) try {
                        (Xt.nodeType === 9 ? Xt.body : Xt.nodeName === "HTML" ? Xt.ownerDocument.body : Xt).removeChild(a.stateNode)
                    } catch (u) {
                        Ut(a, e, u)
                    } else try {
                        Xt.removeChild(a.stateNode)
                    } catch (u) {
                        Ut(a, e, u)
                    }
                break;
            case 18:
                Xt !== null && (He ? (t = Xt, np(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), ms(t)) : np(Xt, a.stateNode));
                break;
            case 4:
                r = Xt, l = He, Xt = a.stateNode.containerInfo, He = !0, Fn(t, e, a), Xt = r, He = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ba(2, a, e), re || ba(4, a, e), Fn(t, e, a);
                break;
            case 1:
                re || (An(a, e), r = a.stateNode, typeof r.componentWillUnmount == "function" && am(a, e, r)), Fn(t, e, a);
                break;
            case 21:
                Fn(t, e, a);
                break;
            case 22:
                re = (r = re) || a.memoizedState !== null, Fn(t, e, a), re = r;
                break;
            default:
                Fn(t, e, a)
        }
    }

    function fm(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                ms(t)
            } catch (a) {
                Ut(e, e.return, a)
            }
        }
    }

    function dm(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            ms(t)
        } catch (a) {
            Ut(e, e.return, a)
        }
    }

    function I0(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new om), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new om), e;
            default:
                throw Error(o(435, t.tag))
        }
    }

    function xo(t, e) {
        var a = I0(t);
        e.forEach(function(r) {
            if (!a.has(r)) {
                a.add(r);
                var l = rb.bind(null, t, r);
                r.then(l, l)
            }
        })
    }

    function qe(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var r = 0; r < a.length; r++) {
                var l = a[r],
                    u = t,
                    p = e,
                    b = p;
                t: for (; b !== null;) {
                    switch (b.tag) {
                        case 27:
                            if (Ta(b.type)) {
                                Xt = b.stateNode, He = !1;
                                break t
                            }
                            break;
                        case 5:
                            Xt = b.stateNode, He = !1;
                            break t;
                        case 3:
                        case 4:
                            Xt = b.stateNode.containerInfo, He = !0;
                            break t
                    }
                    b = b.return
                }
                if (Xt === null) throw Error(o(160));
                um(u, p, l), Xt = null, He = !1, u = l.alternate, u !== null && (u.return = null), l.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null;) hm(e, t), e = e.sibling
    }
    var bn = null;

    function hm(t, e) {
        var a = t.alternate,
            r = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                qe(e, t), Ye(t), r & 4 && (ba(3, t, t.return), $s(3, t), ba(5, t, t.return));
                break;
            case 1:
                qe(e, t), Ye(t), r & 512 && (re || a === null || An(a, a.return)), r & 64 && Kn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? r : a.concat(r))));
                break;
            case 26:
                var l = bn;
                if (qe(e, t), Ye(t), r & 512 && (re || a === null || An(a, a.return)), r & 4) {
                    var u = a !== null ? a.memoizedState : null;
                    if (r = t.memoizedState, a === null)
                        if (r === null)
                            if (t.stateNode === null) {
                                t: {
                                    r = t.type,
                                    a = t.memoizedProps,
                                    l = l.ownerDocument || l;e: switch (r) {
                                        case "title":
                                            u = l.getElementsByTagName("title")[0], (!u || u[Ts] || u[_e] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = l.createElement(r), l.head.insertBefore(u, l.querySelector("head > title"))), Ce(u, r, a), u[_e] = t, ye(u), r = u;
                                            break t;
                                        case "link":
                                            var p = hp("link", "href", l).get(r + (a.href || ""));
                                            if (p) {
                                                for (var b = 0; b < p.length; b++)
                                                    if (u = p[b], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        p.splice(b, 1);
                                                        break e
                                                    }
                                            }
                                            u = l.createElement(r), Ce(u, r, a), l.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (p = hp("meta", "content", l).get(r + (a.content || ""))) {
                                                for (b = 0; b < p.length; b++)
                                                    if (u = p[b], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        p.splice(b, 1);
                                                        break e
                                                    }
                                            }
                                            u = l.createElement(r), Ce(u, r, a), l.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(o(468, r))
                                    }
                                    u[_e] = t,
                                    ye(u),
                                    r = u
                                }
                                t.stateNode = r
                            }
                    else mp(l, t.type, t.stateNode);
                    else t.stateNode = dp(l, r, t.memoizedProps);
                    else u !== r ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, r === null ? mp(l, t.type, t.stateNode) : dp(l, r, t.memoizedProps)) : r === null && t.stateNode !== null && Wc(t, t.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                qe(e, t), Ye(t), r & 512 && (re || a === null || An(a, a.return)), a !== null && r & 4 && Wc(t, t.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (qe(e, t), Ye(t), r & 512 && (re || a === null || An(a, a.return)), t.flags & 32) {
                    l = t.stateNode;
                    try {
                        Bi(l, "")
                    } catch (rt) {
                        Ut(t, t.return, rt)
                    }
                }
                r & 4 && t.stateNode != null && (l = t.memoizedProps, Wc(t, l, a !== null ? a.memoizedProps : l)), r & 1024 && (nu = !0);
                break;
            case 6:
                if (qe(e, t), Ye(t), r & 4) {
                    if (t.stateNode === null) throw Error(o(162));
                    r = t.memoizedProps, a = t.stateNode;
                    try {
                        a.nodeValue = r
                    } catch (rt) {
                        Ut(t, t.return, rt)
                    }
                }
                break;
            case 3:
                if (Bo = null, l = bn, bn = Lo(e.containerInfo), qe(e, t), bn = l, Ye(t), r & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    ms(e.containerInfo)
                } catch (rt) {
                    Ut(t, t.return, rt)
                }
                nu && (nu = !1, mm(t));
                break;
            case 4:
                r = bn, bn = Lo(t.stateNode.containerInfo), qe(e, t), Ye(t), bn = r;
                break;
            case 12:
                qe(e, t), Ye(t);
                break;
            case 31:
                qe(e, t), Ye(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, xo(t, r)));
                break;
            case 13:
                qe(e, t), Ye(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (_o = pe()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, xo(t, r)));
                break;
            case 22:
                l = t.memoizedState !== null;
                var C = a !== null && a.memoizedState !== null,
                    U = Kn,
                    G = re;
                if (Kn = U || l, re = G || C, qe(e, t), re = G, Kn = U, Ye(t), r & 8192) t: for (e = t.stateNode, e._visibility = l ? e._visibility & -2 : e._visibility | 1, l && (a === null || C || Kn || re || gi(t)), a = null, e = t;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (a === null) {
                            C = a = e;
                            try {
                                if (u = C.stateNode, l) p = u.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                                else {
                                    b = C.stateNode;
                                    var K = C.memoizedProps.style,
                                        B = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    b.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim()
                                }
                            } catch (rt) {
                                Ut(C, C.return, rt)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            C = e;
                            try {
                                C.stateNode.nodeValue = l ? "" : C.memoizedProps
                            } catch (rt) {
                                Ut(C, C.return, rt)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (a === null) {
                            C = e;
                            try {
                                var k = C.stateNode;
                                l ? ap(k, !0) : ap(C.stateNode, !1)
                            } catch (rt) {
                                Ut(C, C.return, rt)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        a === e && (a = null), e = e.return
                    }
                    a === e && (a = null), e.sibling.return = e.return, e = e.sibling
                }
                r & 4 && (r = t.updateQueue, r !== null && (a = r.retryQueue, a !== null && (r.retryQueue = null, xo(t, a))));
                break;
            case 19:
                qe(e, t), Ye(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, xo(t, r)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                qe(e, t), Ye(t)
        }
    }

    function Ye(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, r = t.return; r !== null;) {
                    if (sm(r)) {
                        a = r;
                        break
                    }
                    r = r.return
                }
                if (a == null) throw Error(o(160));
                switch (a.tag) {
                    case 27:
                        var l = a.stateNode,
                            u = tu(t);
                        So(t, u, l);
                        break;
                    case 5:
                        var p = a.stateNode;
                        a.flags & 32 && (Bi(p, ""), a.flags &= -33);
                        var b = tu(t);
                        So(t, b, p);
                        break;
                    case 3:
                    case 4:
                        var C = a.stateNode.containerInfo,
                            U = tu(t);
                        eu(t, U, C);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (G) {
                Ut(t, t.return, G)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function mm(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var e = t;
                mm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
            }
    }

    function Zn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null;) lm(t, e.alternate, e), e = e.sibling
    }

    function gi(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ba(4, e, e.return), gi(e);
                    break;
                case 1:
                    An(e, e.return);
                    var a = e.stateNode;
                    typeof a.componentWillUnmount == "function" && am(e, e.return, a), gi(e);
                    break;
                case 27:
                    lr(e.stateNode);
                case 26:
                case 5:
                    An(e, e.return), gi(e);
                    break;
                case 22:
                    e.memoizedState === null && gi(e);
                    break;
                case 30:
                    gi(e);
                    break;
                default:
                    gi(e)
            }
            t = t.sibling
        }
    }

    function Jn(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var r = e.alternate,
                l = t,
                u = e,
                p = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    Jn(l, u, a), $s(4, u);
                    break;
                case 1:
                    if (Jn(l, u, a), r = u, l = r.stateNode, typeof l.componentDidMount == "function") try {
                        l.componentDidMount()
                    } catch (U) {
                        Ut(r, r.return, U)
                    }
                    if (r = u, l = r.updateQueue, l !== null) {
                        var b = r.stateNode;
                        try {
                            var C = l.shared.hiddenCallbacks;
                            if (C !== null)
                                for (l.shared.hiddenCallbacks = null, l = 0; l < C.length; l++) Pd(C[l], b)
                        } catch (U) {
                            Ut(r, r.return, U)
                        }
                    }
                    a && p & 64 && nm(u), Ws(u, u.return);
                    break;
                case 27:
                    rm(u);
                case 26:
                case 5:
                    Jn(l, u, a), a && r === null && p & 4 && im(u), Ws(u, u.return);
                    break;
                case 12:
                    Jn(l, u, a);
                    break;
                case 31:
                    Jn(l, u, a), a && p & 4 && fm(l, u);
                    break;
                case 13:
                    Jn(l, u, a), a && p & 4 && dm(l, u);
                    break;
                case 22:
                    u.memoizedState === null && Jn(l, u, a), Ws(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    Jn(l, u, a)
            }
            e = e.sibling
        }
    }

    function au(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Hs(a))
    }

    function iu(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Hs(t))
    }

    function Sn(t, e, a, r) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) pm(t, e, a, r), e = e.sibling
    }

    function pm(t, e, a, r) {
        var l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Sn(t, e, a, r), l & 2048 && $s(9, e);
                break;
            case 1:
                Sn(t, e, a, r);
                break;
            case 3:
                Sn(t, e, a, r), l & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Hs(t)));
                break;
            case 12:
                if (l & 2048) {
                    Sn(t, e, a, r), t = e.stateNode;
                    try {
                        var u = e.memoizedProps,
                            p = u.id,
                            b = u.onPostCommit;
                        typeof b == "function" && b(p, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (C) {
                        Ut(e, e.return, C)
                    }
                } else Sn(t, e, a, r);
                break;
            case 31:
                Sn(t, e, a, r);
                break;
            case 13:
                Sn(t, e, a, r);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, p = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Sn(t, e, a, r) : tr(t, e) : u._visibility & 2 ? Sn(t, e, a, r) : (u._visibility |= 2, as(t, e, a, r, (e.subtreeFlags & 10256) !== 0 || !1)), l & 2048 && au(p, e);
                break;
            case 24:
                Sn(t, e, a, r), l & 2048 && iu(e.alternate, e);
                break;
            default:
                Sn(t, e, a, r)
        }
    }

    function as(t, e, a, r, l) {
        for (l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
            var u = t,
                p = e,
                b = a,
                C = r,
                U = p.flags;
            switch (p.tag) {
                case 0:
                case 11:
                case 15:
                    as(u, p, b, C, l), $s(8, p);
                    break;
                case 23:
                    break;
                case 22:
                    var G = p.stateNode;
                    p.memoizedState !== null ? G._visibility & 2 ? as(u, p, b, C, l) : tr(u, p) : (G._visibility |= 2, as(u, p, b, C, l)), l && U & 2048 && au(p.alternate, p);
                    break;
                case 24:
                    as(u, p, b, C, l), l && U & 2048 && iu(p.alternate, p);
                    break;
                default:
                    as(u, p, b, C, l)
            }
            e = e.sibling
        }
    }

    function tr(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var a = t,
                    r = e,
                    l = r.flags;
                switch (r.tag) {
                    case 22:
                        tr(a, r), l & 2048 && au(r.alternate, r);
                        break;
                    case 24:
                        tr(a, r), l & 2048 && iu(r.alternate, r);
                        break;
                    default:
                        tr(a, r)
                }
                e = e.sibling
            }
    }
    var er = 8192;

    function is(t, e, a) {
        if (t.subtreeFlags & er)
            for (t = t.child; t !== null;) gm(t, e, a), t = t.sibling
    }

    function gm(t, e, a) {
        switch (t.tag) {
            case 26:
                is(t, e, a), t.flags & er && t.memoizedState !== null && Bb(a, bn, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                is(t, e, a);
                break;
            case 3:
            case 4:
                var r = bn;
                bn = Lo(t.stateNode.containerInfo), is(t, e, a), bn = r;
                break;
            case 22:
                t.memoizedState === null && (r = t.alternate, r !== null && r.memoizedState !== null ? (r = er, er = 16777216, is(t, e, a), er = r) : is(t, e, a));
                break;
            default:
                is(t, e, a)
        }
    }

    function ym(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function nr(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var r = e[a];
                    ve = r, bm(r, t)
                }
            ym(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) vm(t), t = t.sibling
    }

    function vm(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                nr(t), t.flags & 2048 && ba(9, t, t.return);
                break;
            case 3:
                nr(t);
                break;
            case 12:
                nr(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, wo(t)) : nr(t);
                break;
            default:
                nr(t)
        }
    }

    function wo(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var r = e[a];
                    ve = r, bm(r, t)
                }
            ym(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    ba(8, e, e.return), wo(e);
                    break;
                case 22:
                    a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, wo(e));
                    break;
                default:
                    wo(e)
            }
            t = t.sibling
        }
    }

    function bm(t, e) {
        for (; ve !== null;) {
            var a = ve;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    ba(8, a, e);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var r = a.memoizedState.cachePool.pool;
                        r != null && r.refCount++
                    }
                    break;
                case 24:
                    Hs(a.memoizedState.cache)
            }
            if (r = a.child, r !== null) r.return = a, ve = r;
            else t: for (a = t; ve !== null;) {
                r = ve;
                var l = r.sibling,
                    u = r.return;
                if (cm(r), r === a) {
                    ve = null;
                    break t
                }
                if (l !== null) {
                    l.return = u, ve = l;
                    break t
                }
                ve = u
            }
        }
    }
    var $0 = {
            getCacheForType: function(t) {
                var e = Re(ae),
                    a = e.data.get(t);
                return a === void 0 && (a = t(), e.data.set(t, a)), a
            },
            cacheSignal: function() {
                return Re(ae).controller.signal
            }
        },
        W0 = typeof WeakMap == "function" ? WeakMap : Map,
        Dt = 0,
        Yt = null,
        Rt = null,
        Ct = 0,
        Lt = 0,
        We = null,
        Sa = !1,
        ss = !1,
        su = !1,
        In = 0,
        It = 0,
        xa = 0,
        yi = 0,
        ru = 0,
        tn = 0,
        rs = 0,
        ar = null,
        Ge = null,
        ou = !1,
        _o = 0,
        Sm = 0,
        Eo = 1 / 0,
        Ro = null,
        wa = null,
        ce = 0,
        _a = null,
        os = null,
        $n = 0,
        lu = 0,
        cu = null,
        xm = null,
        ir = 0,
        uu = null;

    function en() {
        return (Dt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : D.T !== null ? gu() : Ol()
    }

    function wm() {
        if (tn === 0)
            if ((Ct & 536870912) === 0 || Mt) {
                var t = Mi;
                Mi <<= 1, (Mi & 3932160) === 0 && (Mi = 262144), tn = t
            } else tn = 536870912;
        return t = Ie.current, t !== null && (t.flags |= 32), tn
    }

    function Ve(t, e, a) {
        (t === Yt && (Lt === 2 || Lt === 9) || t.cancelPendingCommit !== null) && (ls(t, 0), Ea(t, Ct, tn, !1)), Ft(t, a), ((Dt & 2) === 0 || t !== Yt) && (t === Yt && ((Dt & 2) === 0 && (yi |= a), It === 4 && Ea(t, Ct, tn, !1)), Mn(t))
    }

    function _m(t, e, a) {
        if ((Dt & 6) !== 0) throw Error(o(327));
        var r = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Pt(t, e),
            l = r ? nb(t, e) : du(t, e, !0),
            u = r;
        do {
            if (l === 0) {
                ss && !r && Ea(t, e, 0, !1);
                break
            } else {
                if (a = t.current.alternate, u && !tb(a)) {
                    l = du(t, e, !1), u = !1;
                    continue
                }
                if (l === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var p = 0;
                    else p = t.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
                    if (p !== 0) {
                        e = p;
                        t: {
                            var b = t;l = ar;
                            var C = b.current.memoizedState.isDehydrated;
                            if (C && (ls(b, p).flags |= 256), p = du(b, p, !1), p !== 2) {
                                if (su && !C) {
                                    b.errorRecoveryDisabledLanes |= u, yi |= u, l = 4;
                                    break t
                                }
                                u = Ge, Ge = l, u !== null && (Ge === null ? Ge = u : Ge.push.apply(Ge, u))
                            }
                            l = p
                        }
                        if (u = !1, l !== 2) continue
                    }
                }
                if (l === 1) {
                    ls(t, 0), Ea(t, e, 0, !0);
                    break
                }
                t: {
                    switch (r = t, u = l, u) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Ea(r, e, tn, !Sa);
                            break t;
                        case 2:
                            Ge = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (l = _o + 300 - pe(), 10 < l)) {
                        if (Ea(r, e, tn, !Sa), gt(r, 0, !0) !== 0) break t;
                        $n = e, r.timeoutHandle = tp(Em.bind(null, r, a, Ge, Ro, ou, e, tn, yi, rs, Sa, u, "Throttled", -0, 0), l);
                        break t
                    }
                    Em(r, a, Ge, Ro, ou, e, tn, yi, rs, Sa, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Mn(t)
    }

    function Em(t, e, a, r, l, u, p, b, C, U, G, K, B, k) {
        if (t.timeoutHandle = -1, K = e.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
            K = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Bn
            }, gm(e, u, K);
            var rt = (u & 62914560) === u ? _o - pe() : (u & 4194048) === u ? Sm - pe() : 0;
            if (rt = kb(K, rt), rt !== null) {
                $n = u, t.cancelPendingCommit = rt(Nm.bind(null, t, e, u, a, r, l, p, b, C, G, K, null, B, k)), Ea(t, u, p, !U);
                return
            }
        }
        Nm(t, e, u, a, r, l, p, b, C)
    }

    function tb(t) {
        for (var e = t;;) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var r = 0; r < a.length; r++) {
                    var l = a[r],
                        u = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ze(u(), l)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
            else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Ea(t, e, a, r) {
        e &= ~ru, e &= ~yi, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
        for (var l = e; 0 < l;) {
            var u = 31 - Ae(l),
                p = 1 << u;
            r[u] = -1, l &= ~p
        }
        a !== 0 && ti(t, a, e)
    }

    function To() {
        return (Dt & 6) === 0 ? (sr(0), !1) : !0
    }

    function fu() {
        if (Rt !== null) {
            if (Lt === 0) var t = Rt.return;
            else t = Rt, Yn = li = null, Cc(t), $i = null, Ys = 0, t = Rt;
            for (; t !== null;) em(t.alternate, t), t = t.return;
            Rt = null
        }
    }

    function ls(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1, Sb(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), $n = 0, fu(), Yt = t, Rt = a = Hn(t.current, null), Ct = e, Lt = 0, We = null, Sa = !1, ss = Pt(t, e), su = !1, rs = tn = ru = yi = xa = It = 0, Ge = ar = null, ou = !1, (e & 8) !== 0 && (e |= e & 32);
        var r = t.entangledLanes;
        if (r !== 0)
            for (t = t.entanglements, r &= e; 0 < r;) {
                var l = 31 - Ae(r),
                    u = 1 << l;
                e |= t[l], r &= ~u
            }
        return In = e, Xr(), a
    }

    function Rm(t, e) {
        xt = null, D.H = Zs, e === Ii || e === to ? (e = Yd(), Lt = 3) : e === pc ? (e = Yd(), Lt = 4) : Lt = e === Vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, We = e, Rt === null && (It = 1, po(t, ln(e, t.current)))
    }

    function Tm() {
        var t = Ie.current;
        return t === null ? !0 : (Ct & 4194048) === Ct ? dn === null : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0 ? t === dn : !1
    }

    function Cm() {
        var t = D.H;
        return D.H = Zs, t === null ? Zs : t
    }

    function Am() {
        var t = D.A;
        return D.A = $0, t
    }

    function Co() {
        It = 4, Sa || (Ct & 4194048) !== Ct && Ie.current !== null || (ss = !0), (xa & 134217727) === 0 && (yi & 134217727) === 0 || Yt === null || Ea(Yt, Ct, tn, !1)
    }

    function du(t, e, a) {
        var r = Dt;
        Dt |= 2;
        var l = Cm(),
            u = Am();
        (Yt !== t || Ct !== e) && (Ro = null, ls(t, e)), e = !1;
        var p = It;
        t: do try {
                if (Lt !== 0 && Rt !== null) {
                    var b = Rt,
                        C = We;
                    switch (Lt) {
                        case 8:
                            fu(), p = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ie.current === null && (e = !0);
                            var U = Lt;
                            if (Lt = 0, We = null, cs(t, b, C, U), a && ss) {
                                p = 0;
                                break t
                            }
                            break;
                        default:
                            U = Lt, Lt = 0, We = null, cs(t, b, C, U)
                    }
                }
                eb(), p = It;
                break
            } catch (G) {
                Rm(t, G)
            }
            while (!0);
            return e && t.shellSuspendCounter++, Yn = li = null, Dt = r, D.H = l, D.A = u, Rt === null && (Yt = null, Ct = 0, Xr()), p
    }

    function eb() {
        for (; Rt !== null;) Mm(Rt)
    }

    function nb(t, e) {
        var a = Dt;
        Dt |= 2;
        var r = Cm(),
            l = Am();
        Yt !== t || Ct !== e ? (Ro = null, Eo = pe() + 500, ls(t, e)) : ss = Pt(t, e);
        t: do try {
                if (Lt !== 0 && Rt !== null) {
                    e = Rt;
                    var u = We;
                    e: switch (Lt) {
                        case 1:
                            Lt = 0, We = null, cs(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Hd(u)) {
                                Lt = 0, We = null, Om(e);
                                break
                            }
                            e = function() {
                                Lt !== 2 && Lt !== 9 || Yt !== t || (Lt = 7), Mn(t)
                            }, u.then(e, e);
                            break t;
                        case 3:
                            Lt = 7;
                            break t;
                        case 4:
                            Lt = 5;
                            break t;
                        case 7:
                            Hd(u) ? (Lt = 0, We = null, Om(e)) : (Lt = 0, We = null, cs(t, e, u, 7));
                            break;
                        case 5:
                            var p = null;
                            switch (Rt.tag) {
                                case 26:
                                    p = Rt.memoizedState;
                                case 5:
                                case 27:
                                    var b = Rt;
                                    if (p ? pp(p) : b.stateNode.complete) {
                                        Lt = 0, We = null;
                                        var C = b.sibling;
                                        if (C !== null) Rt = C;
                                        else {
                                            var U = b.return;
                                            U !== null ? (Rt = U, Ao(U)) : Rt = null
                                        }
                                        break e
                                    }
                            }
                            Lt = 0, We = null, cs(t, e, u, 5);
                            break;
                        case 6:
                            Lt = 0, We = null, cs(t, e, u, 6);
                            break;
                        case 8:
                            fu(), It = 6;
                            break t;
                        default:
                            throw Error(o(462))
                    }
                }
                ab();
                break
            } catch (G) {
                Rm(t, G)
            }
            while (!0);
            return Yn = li = null, D.H = r, D.A = l, Dt = a, Rt !== null ? 0 : (Yt = null, Ct = 0, Xr(), It)
    }

    function ab() {
        for (; Rt !== null && !me();) Mm(Rt)
    }

    function Mm(t) {
        var e = Wh(t.alternate, t, In);
        t.memoizedProps = t.pendingProps, e === null ? Ao(t) : Rt = e
    }

    function Om(t) {
        var e = t,
            a = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Kh(a, e, e.pendingProps, e.type, void 0, Ct);
                break;
            case 11:
                e = Kh(a, e, e.pendingProps, e.type.render, e.ref, Ct);
                break;
            case 5:
                Cc(e);
            default:
                em(a, e), e = Rt = Ad(e, In), e = Wh(a, e, In)
        }
        t.memoizedProps = t.pendingProps, e === null ? Ao(t) : Rt = e
    }

    function cs(t, e, a, r) {
        Yn = li = null, Cc(e), $i = null, Ys = 0;
        var l = e.return;
        try {
            if (P0(t, l, e, a, Ct)) {
                It = 1, po(t, ln(a, t.current)), Rt = null;
                return
            }
        } catch (u) {
            if (l !== null) throw Rt = l, u;
            It = 1, po(t, ln(a, t.current)), Rt = null;
            return
        }
        e.flags & 32768 ? (Mt || r === 1 ? t = !0 : ss || (Ct & 536870912) !== 0 ? t = !1 : (Sa = t = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ie.current, r !== null && r.tag === 13 && (r.flags |= 16384))), zm(e, t)) : Ao(e)
    }

    function Ao(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                zm(e, Sa);
                return
            }
            t = e.return;
            var a = F0(e.alternate, e, In);
            if (a !== null) {
                Rt = a;
                return
            }
            if (e = e.sibling, e !== null) {
                Rt = e;
                return
            }
            Rt = e = t
        } while (e !== null);
        It === 0 && (It = 5)
    }

    function zm(t, e) {
        do {
            var a = Z0(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767, Rt = a;
                return
            }
            if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
                Rt = t;
                return
            }
            Rt = t = a
        } while (t !== null);
        It = 6, Rt = null
    }

    function Nm(t, e, a, r, l, u, p, b, C) {
        t.cancelPendingCommit = null;
        do Mo(); while (ce !== 0);
        if ((Dt & 6) !== 0) throw Error(o(327));
        if (e !== null) {
            if (e === t.current) throw Error(o(177));
            if (u = e.lanes | e.childLanes, u |= tc, je(t, a, u, p, b, C), t === Yt && (Rt = Yt = null, Ct = 0), os = e, _a = t, $n = a, lu = u, cu = l, xm = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ob(jn, function() {
                    return Bm(), null
                })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
                r = D.T, D.T = null, l = F.p, F.p = 2, p = Dt, Dt |= 4;
                try {
                    J0(t, e, a)
                } finally {
                    Dt = p, F.p = l, D.T = r
                }
            }
            ce = 1, Dm(), jm(), Lm()
        }
    }

    function Dm() {
        if (ce === 1) {
            ce = 0;
            var t = _a,
                e = os,
                a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                a = D.T, D.T = null;
                var r = F.p;
                F.p = 2;
                var l = Dt;
                Dt |= 4;
                try {
                    hm(e, t);
                    var u = Eu,
                        p = bd(t.containerInfo),
                        b = u.focusedElem,
                        C = u.selectionRange;
                    if (p !== b && b && b.ownerDocument && vd(b.ownerDocument.documentElement, b)) {
                        if (C !== null && Zl(b)) {
                            var U = C.start,
                                G = C.end;
                            if (G === void 0 && (G = U), "selectionStart" in b) b.selectionStart = U, b.selectionEnd = Math.min(G, b.value.length);
                            else {
                                var K = b.ownerDocument || document,
                                    B = K && K.defaultView || window;
                                if (B.getSelection) {
                                    var k = B.getSelection(),
                                        rt = b.textContent.length,
                                        ht = Math.min(C.start, rt),
                                        qt = C.end === void 0 ? ht : Math.min(C.end, rt);
                                    !k.extend && ht > qt && (p = qt, qt = ht, ht = p);
                                    var N = yd(b, ht),
                                        O = yd(b, qt);
                                    if (N && O && (k.rangeCount !== 1 || k.anchorNode !== N.node || k.anchorOffset !== N.offset || k.focusNode !== O.node || k.focusOffset !== O.offset)) {
                                        var L = K.createRange();
                                        L.setStart(N.node, N.offset), k.removeAllRanges(), ht > qt ? (k.addRange(L), k.extend(O.node, O.offset)) : (L.setEnd(O.node, O.offset), k.addRange(L))
                                    }
                                }
                            }
                        }
                        for (K = [], k = b; k = k.parentNode;) k.nodeType === 1 && K.push({
                            element: k,
                            left: k.scrollLeft,
                            top: k.scrollTop
                        });
                        for (typeof b.focus == "function" && b.focus(), b = 0; b < K.length; b++) {
                            var Q = K[b];
                            Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top
                        }
                    }
                    Yo = !!_u, Eu = _u = null
                } finally {
                    Dt = l, F.p = r, D.T = a
                }
            }
            t.current = e, ce = 2
        }
    }

    function jm() {
        if (ce === 2) {
            ce = 0;
            var t = _a,
                e = os,
                a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                a = D.T, D.T = null;
                var r = F.p;
                F.p = 2;
                var l = Dt;
                Dt |= 4;
                try {
                    lm(t, e.alternate, e)
                } finally {
                    Dt = l, F.p = r, D.T = a
                }
            }
            ce = 3
        }
    }

    function Lm() {
        if (ce === 4 || ce === 3) {
            ce = 0, _n();
            var t = _a,
                e = os,
                a = $n,
                r = xm;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ce = 5 : (ce = 0, os = _a = null, Um(t, t.pendingLanes));
            var l = t.pendingLanes;
            if (l === 0 && (wa = null), yn(a), e = e.stateNode, ze && typeof ze.onCommitFiberRoot == "function") try {
                ze.onCommitFiberRoot($a, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (r !== null) {
                e = D.T, l = F.p, F.p = 2, D.T = null;
                try {
                    for (var u = t.onRecoverableError, p = 0; p < r.length; p++) {
                        var b = r[p];
                        u(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    D.T = e, F.p = l
                }
            }($n & 3) !== 0 && Mo(), Mn(t), l = t.pendingLanes, (a & 261930) !== 0 && (l & 42) !== 0 ? t === uu ? ir++ : (ir = 0, uu = t) : ir = 0, sr(0)
        }
    }

    function Um(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Hs(e)))
    }

    function Mo() {
        return Dm(), jm(), Lm(), Bm()
    }

    function Bm() {
        if (ce !== 5) return !1;
        var t = _a,
            e = lu;
        lu = 0;
        var a = yn($n),
            r = D.T,
            l = F.p;
        try {
            F.p = 32 > a ? 32 : a, D.T = null, a = cu, cu = null;
            var u = _a,
                p = $n;
            if (ce = 0, os = _a = null, $n = 0, (Dt & 6) !== 0) throw Error(o(331));
            var b = Dt;
            if (Dt |= 4, vm(u.current), pm(u, u.current, p, a), Dt = b, sr(0, !1), ze && typeof ze.onPostCommitFiberRoot == "function") try {
                ze.onPostCommitFiberRoot($a, u)
            } catch {}
            return !0
        } finally {
            F.p = l, D.T = r, Um(t, e)
        }
    }

    function km(t, e, a) {
        e = ln(a, e), e = Gc(t.stateNode, e, 2), t = ga(t, e, 2), t !== null && (Ft(t, 2), Mn(t))
    }

    function Ut(t, e, a) {
        if (t.tag === 3) km(t, t, a);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    km(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var r = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wa === null || !wa.has(r))) {
                        t = ln(a, t), a = Hh(2), r = ga(e, a, 2), r !== null && (qh(a, r, e, t), Ft(r, 2), Mn(r));
                        break
                    }
                }
                e = e.return
            }
    }

    function hu(t, e, a) {
        var r = t.pingCache;
        if (r === null) {
            r = t.pingCache = new W0;
            var l = new Set;
            r.set(e, l)
        } else l = r.get(e), l === void 0 && (l = new Set, r.set(e, l));
        l.has(a) || (su = !0, l.add(a), t = ib.bind(null, t, e, a), e.then(t, t))
    }

    function ib(t, e, a) {
        var r = t.pingCache;
        r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Yt === t && (Ct & a) === a && (It === 4 || It === 3 && (Ct & 62914560) === Ct && 300 > pe() - _o ? (Dt & 2) === 0 && ls(t, 0) : ru |= a, rs === Ct && (rs = 0)), Mn(t)
    }

    function Hm(t, e) {
        e === 0 && (e = Me()), t = si(t, e), t !== null && (Ft(t, e), Mn(t))
    }

    function sb(t) {
        var e = t.memoizedState,
            a = 0;
        e !== null && (a = e.retryLane), Hm(t, a)
    }

    function rb(t, e) {
        var a = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var r = t.stateNode,
                    l = t.memoizedState;
                l !== null && (a = l.retryLane);
                break;
            case 19:
                r = t.stateNode;
                break;
            case 22:
                r = t.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        r !== null && r.delete(e), Hm(t, a)
    }

    function ob(t, e) {
        return Fe(t, e)
    }
    var Oo = null,
        us = null,
        mu = !1,
        zo = !1,
        pu = !1,
        Ra = 0;

    function Mn(t) {
        t !== us && t.next === null && (us === null ? Oo = us = t : us = us.next = t), zo = !0, mu || (mu = !0, cb())
    }

    function sr(t, e) {
        if (!pu && zo) {
            pu = !0;
            do
                for (var a = !1, r = Oo; r !== null;) {
                    if (t !== 0) {
                        var l = r.pendingLanes;
                        if (l === 0) var u = 0;
                        else {
                            var p = r.suspendedLanes,
                                b = r.pingedLanes;
                            u = (1 << 31 - Ae(42 | t) + 1) - 1, u &= l & ~(p & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0, Vm(r, u))
                    } else u = Ct, u = gt(r, r === Yt ? u : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (u & 3) === 0 || Pt(r, u) || (a = !0, Vm(r, u));
                    r = r.next
                }
            while (a);
            pu = !1
        }
    }

    function lb() {
        qm()
    }

    function qm() {
        zo = mu = !1;
        var t = 0;
        Ra !== 0 && bb() && (t = Ra);
        for (var e = pe(), a = null, r = Oo; r !== null;) {
            var l = r.next,
                u = Ym(r, e);
            u === 0 ? (r.next = null, a === null ? Oo = l : a.next = l, l === null && (us = a)) : (a = r, (t !== 0 || (u & 3) !== 0) && (zo = !0)), r = l
        }
        ce !== 0 && ce !== 5 || sr(t), Ra !== 0 && (Ra = 0)
    }

    function Ym(t, e) {
        for (var a = t.suspendedLanes, r = t.pingedLanes, l = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var p = 31 - Ae(u),
                b = 1 << p,
                C = l[p];
            C === -1 ? ((b & a) === 0 || (b & r) !== 0) && (l[p] = ge(b, e)) : C <= e && (t.expiredLanes |= b), u &= ~b
        }
        if (e = Yt, a = Ct, a = gt(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r = t.callbackNode, a === 0 || t === e && (Lt === 2 || Lt === 9) || t.cancelPendingCommit !== null) return r !== null && r !== null && Ia(r), t.callbackNode = null, t.callbackPriority = 0;
        if ((a & 3) === 0 || Pt(t, a)) {
            if (e = a & -a, e === t.callbackPriority) return e;
            switch (r !== null && Ia(r), yn(a)) {
                case 2:
                case 8:
                    a = an;
                    break;
                case 32:
                    a = jn;
                    break;
                case 268435456:
                    a = Ln;
                    break;
                default:
                    a = jn
            }
            return r = Gm.bind(null, t), a = Fe(a, r), t.callbackPriority = e, t.callbackNode = a, e
        }
        return r !== null && r !== null && Ia(r), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function Gm(t, e) {
        if (ce !== 0 && ce !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var a = t.callbackNode;
        if (Mo() && t.callbackNode !== a) return null;
        var r = Ct;
        return r = gt(t, t === Yt ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r === 0 ? null : (_m(t, r, e), Ym(t, pe()), t.callbackNode != null && t.callbackNode === a ? Gm.bind(null, t) : null)
    }

    function Vm(t, e) {
        if (Mo()) return null;
        _m(t, e, !0)
    }

    function cb() {
        xb(function() {
            (Dt & 6) !== 0 ? Fe(Zt, lb) : qm()
        })
    }

    function gu() {
        if (Ra === 0) {
            var t = Zi;
            t === 0 && (t = Ai, Ai <<= 1, (Ai & 261888) === 0 && (Ai = 256)), Ra = t
        }
        return Ra
    }

    function Qm(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : kr("" + t)
    }

    function Pm(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t
    }

    function ub(t, e, a, r, l) {
        if (e === "submit" && a && a.stateNode === l) {
            var u = Qm((l[Be] || null).action),
                p = r.submitter;
            p && (e = (e = p[Be] || null) ? Qm(e.formAction) : p.getAttribute("formAction"), e !== null && (u = e, p = null));
            var b = new Gr("action", "action", null, r, l);
            t.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (Ra !== 0) {
                                var C = p ? Pm(l, p) : new FormData(l);
                                Uc(a, {
                                    pending: !0,
                                    data: C,
                                    method: l.method,
                                    action: u
                                }, null, C)
                            }
                        } else typeof u == "function" && (b.preventDefault(), C = p ? Pm(l, p) : new FormData(l), Uc(a, {
                            pending: !0,
                            data: C,
                            method: l.method,
                            action: u
                        }, u, C))
                    },
                    currentTarget: l
                }]
            })
        }
    }
    for (var yu = 0; yu < Wl.length; yu++) {
        var vu = Wl[yu],
            fb = vu.toLowerCase(),
            db = vu[0].toUpperCase() + vu.slice(1);
        vn(fb, "on" + db)
    }
    vn(wd, "onAnimationEnd"), vn(_d, "onAnimationIteration"), vn(Ed, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(A0, "onTransitionRun"), vn(M0, "onTransitionStart"), vn(O0, "onTransitionCancel"), vn(Rd, "onTransitionEnd"), Li("onMouseEnter", ["mouseout", "mouseover"]), Li("onMouseLeave", ["mouseout", "mouseover"]), Li("onPointerEnter", ["pointerout", "pointerover"]), Li("onPointerLeave", ["pointerout", "pointerover"]), ei("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ei("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ei("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ei("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ei("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        hb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rr));

    function Xm(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var r = t[a],
                l = r.event;
            r = r.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var p = r.length - 1; 0 <= p; p--) {
                        var b = r[p],
                            C = b.instance,
                            U = b.currentTarget;
                        if (b = b.listener, C !== u && l.isPropagationStopped()) break t;
                        u = b, l.currentTarget = U;
                        try {
                            u(l)
                        } catch (G) {
                            Pr(G)
                        }
                        l.currentTarget = null, u = C
                    } else
                        for (p = 0; p < r.length; p++) {
                            if (b = r[p], C = b.instance, U = b.currentTarget, b = b.listener, C !== u && l.isPropagationStopped()) break t;
                            u = b, l.currentTarget = U;
                            try {
                                u(l)
                            } catch (G) {
                                Pr(G)
                            }
                            l.currentTarget = null, u = C
                        }
            }
        }
    }

    function Tt(t, e) {
        var a = e[zl];
        a === void 0 && (a = e[zl] = new Set);
        var r = t + "__bubble";
        a.has(r) || (Km(e, t, 2, !1), a.add(r))
    }

    function bu(t, e, a) {
        var r = 0;
        e && (r |= 4), Km(a, t, r, e)
    }
    var No = "_reactListening" + Math.random().toString(36).slice(2);

    function Su(t) {
        if (!t[No]) {
            t[No] = !0, qf.forEach(function(a) {
                a !== "selectionchange" && (hb.has(a) || bu(a, !1, t), bu(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[No] || (e[No] = !0, bu("selectionchange", !1, e))
        }
    }

    function Km(t, e, a, r) {
        switch (wp(e)) {
            case 2:
                var l = Yb;
                break;
            case 8:
                l = Gb;
                break;
            default:
                l = Lu
        }
        a = l.bind(null, e, a, t), l = void 0, !ql || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (l = !0), r ? l !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: l
        }) : t.addEventListener(e, a, !0) : l !== void 0 ? t.addEventListener(e, a, {
            passive: l
        }) : t.addEventListener(e, a, !1)
    }

    function xu(t, e, a, r, l) {
        var u = r;
        if ((e & 1) === 0 && (e & 2) === 0 && r !== null) t: for (;;) {
            if (r === null) return;
            var p = r.tag;
            if (p === 3 || p === 4) {
                var b = r.stateNode.containerInfo;
                if (b === l) break;
                if (p === 4)
                    for (p = r.return; p !== null;) {
                        var C = p.tag;
                        if ((C === 3 || C === 4) && p.stateNode.containerInfo === l) return;
                        p = p.return
                    }
                for (; b !== null;) {
                    if (p = Ni(b), p === null) return;
                    if (C = p.tag, C === 5 || C === 6 || C === 26 || C === 27) {
                        r = u = p;
                        continue t
                    }
                    b = b.parentNode
                }
            }
            r = r.return
        }
        $f(function() {
            var U = u,
                G = kl(a),
                K = [];
            t: {
                var B = Td.get(t);
                if (B !== void 0) {
                    var k = Gr,
                        rt = t;
                    switch (t) {
                        case "keypress":
                            if (qr(a) === 0) break t;
                        case "keydown":
                        case "keyup":
                            k = r0;
                            break;
                        case "focusin":
                            rt = "focus", k = Ql;
                            break;
                        case "focusout":
                            rt = "blur", k = Ql;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            k = Ql;
                            break;
                        case "click":
                            if (a.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            k = ed;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            k = Fv;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            k = c0;
                            break;
                        case wd:
                        case _d:
                        case Ed:
                            k = Iv;
                            break;
                        case Rd:
                            k = f0;
                            break;
                        case "scroll":
                        case "scrollend":
                            k = Xv;
                            break;
                        case "wheel":
                            k = h0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            k = Wv;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            k = ad;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            k = p0
                    }
                    var ht = (e & 4) !== 0,
                        qt = !ht && (t === "scroll" || t === "scrollend"),
                        N = ht ? B !== null ? B + "Capture" : null : B;
                    ht = [];
                    for (var O = U, L; O !== null;) {
                        var Q = O;
                        if (L = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || L === null || N === null || (Q = As(O, N), Q != null && ht.push(or(O, Q, L))), qt) break;
                        O = O.return
                    }
                    0 < ht.length && (B = new k(B, rt, null, a, G), K.push({
                        event: B,
                        listeners: ht
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (B = t === "mouseover" || t === "pointerover", k = t === "mouseout" || t === "pointerout", B && a !== Bl && (rt = a.relatedTarget || a.fromElement) && (Ni(rt) || rt[zi])) break t;
                    if ((k || B) && (B = G.window === G ? G : (B = G.ownerDocument) ? B.defaultView || B.parentWindow : window, k ? (rt = a.relatedTarget || a.toElement, k = U, rt = rt ? Ni(rt) : null, rt !== null && (qt = f(rt), ht = rt.tag, rt !== qt || ht !== 5 && ht !== 27 && ht !== 6) && (rt = null)) : (k = null, rt = U), k !== rt)) {
                        if (ht = ed, Q = "onMouseLeave", N = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (ht = ad, Q = "onPointerLeave", N = "onPointerEnter", O = "pointer"), qt = k == null ? B : Cs(k), L = rt == null ? B : Cs(rt), B = new ht(Q, O + "leave", k, a, G), B.target = qt, B.relatedTarget = L, Q = null, Ni(G) === U && (ht = new ht(N, O + "enter", rt, a, G), ht.target = L, ht.relatedTarget = qt, Q = ht), qt = Q, k && rt) e: {
                            for (ht = mb, N = k, O = rt, L = 0, Q = N; Q; Q = ht(Q)) L++;Q = 0;
                            for (var ft = O; ft; ft = ht(ft)) Q++;
                            for (; 0 < L - Q;) N = ht(N),
                            L--;
                            for (; 0 < Q - L;) O = ht(O),
                            Q--;
                            for (; L--;) {
                                if (N === O || O !== null && N === O.alternate) {
                                    ht = N;
                                    break e
                                }
                                N = ht(N), O = ht(O)
                            }
                            ht = null
                        }
                        else ht = null;
                        k !== null && Fm(K, B, k, ht, !1), rt !== null && qt !== null && Fm(K, qt, rt, ht, !0)
                    }
                }
                t: {
                    if (B = U ? Cs(U) : window, k = B.nodeName && B.nodeName.toLowerCase(), k === "select" || k === "input" && B.type === "file") var Ot = fd;
                    else if (cd(B))
                        if (dd) Ot = R0;
                        else {
                            Ot = _0;
                            var ct = w0
                        }
                    else k = B.nodeName,
                    !k || k.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? U && Ul(U.elementType) && (Ot = fd) : Ot = E0;
                    if (Ot && (Ot = Ot(t, U))) {
                        ud(K, Ot, a, G);
                        break t
                    }
                    ct && ct(t, B, U),
                    t === "focusout" && U && B.type === "number" && U.memoizedProps.value != null && Ll(B, "number", B.value)
                }
                switch (ct = U ? Cs(U) : window, t) {
                    case "focusin":
                        (cd(ct) || ct.contentEditable === "true") && (Yi = ct, Jl = U, Us = null);
                        break;
                    case "focusout":
                        Us = Jl = Yi = null;
                        break;
                    case "mousedown":
                        Il = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Il = !1, Sd(K, a, G);
                        break;
                    case "selectionchange":
                        if (C0) break;
                    case "keydown":
                    case "keyup":
                        Sd(K, a, G)
                }
                var wt;
                if (Xl) t: {
                    switch (t) {
                        case "compositionstart":
                            var At = "onCompositionStart";
                            break t;
                        case "compositionend":
                            At = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            At = "onCompositionUpdate";
                            break t
                    }
                    At = void 0
                }
                else qi ? od(t, a) && (At = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (At = "onCompositionStart");At && (id && a.locale !== "ko" && (qi || At !== "onCompositionStart" ? At === "onCompositionEnd" && qi && (wt = Wf()) : (ca = G, Yl = "value" in ca ? ca.value : ca.textContent, qi = !0)), ct = Do(U, At), 0 < ct.length && (At = new nd(At, t, null, a, G), K.push({
                    event: At,
                    listeners: ct
                }), wt ? At.data = wt : (wt = ld(a), wt !== null && (At.data = wt)))),
                (wt = y0 ? v0(t, a) : b0(t, a)) && (At = Do(U, "onBeforeInput"), 0 < At.length && (ct = new nd("onBeforeInput", "beforeinput", null, a, G), K.push({
                    event: ct,
                    listeners: At
                }), ct.data = wt)),
                ub(K, t, U, a, G)
            }
            Xm(K, e)
        })
    }

    function or(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }

    function Do(t, e) {
        for (var a = e + "Capture", r = []; t !== null;) {
            var l = t,
                u = l.stateNode;
            if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = As(t, a), l != null && r.unshift(or(t, l, u)), l = As(t, e), l != null && r.push(or(t, l, u))), t.tag === 3) return r;
            t = t.return
        }
        return []
    }

    function mb(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Fm(t, e, a, r, l) {
        for (var u = e._reactName, p = []; a !== null && a !== r;) {
            var b = a,
                C = b.alternate,
                U = b.stateNode;
            if (b = b.tag, C !== null && C === r) break;
            b !== 5 && b !== 26 && b !== 27 || U === null || (C = U, l ? (U = As(a, u), U != null && p.unshift(or(a, U, C))) : l || (U = As(a, u), U != null && p.push(or(a, U, C)))), a = a.return
        }
        p.length !== 0 && t.push({
            event: e,
            listeners: p
        })
    }
    var pb = /\r\n?/g,
        gb = /\u0000|\uFFFD/g;

    function Zm(t) {
        return (typeof t == "string" ? t : "" + t).replace(pb, `
`).replace(gb, "")
    }

    function Jm(t, e) {
        return e = Zm(e), Zm(t) === e
    }

    function Ht(t, e, a, r, l, u) {
        switch (a) {
            case "children":
                typeof r == "string" ? e === "body" || e === "textarea" && r === "" || Bi(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && Bi(t, "" + r);
                break;
            case "className":
                Ur(t, "class", r);
                break;
            case "tabIndex":
                Ur(t, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ur(t, a, r);
                break;
            case "style":
                Jf(t, r, u);
                break;
            case "data":
                if (e !== "object") {
                    Ur(t, "data", r);
                    break
                }
            case "src":
            case "href":
                if (r === "" && (e !== "a" || a !== "href")) {
                    t.removeAttribute(a);
                    break
                }
                if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                r = kr("" + r), t.setAttribute(a, r);
                break;
            case "action":
            case "formAction":
                if (typeof r == "function") {
                    t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (a === "formAction" ? (e !== "input" && Ht(t, e, "name", l.name, l, null), Ht(t, e, "formEncType", l.formEncType, l, null), Ht(t, e, "formMethod", l.formMethod, l, null), Ht(t, e, "formTarget", l.formTarget, l, null)) : (Ht(t, e, "encType", l.encType, l, null), Ht(t, e, "method", l.method, l, null), Ht(t, e, "target", l.target, l, null)));
                if (r == null || typeof r == "symbol" || typeof r == "boolean") {
                    t.removeAttribute(a);
                    break
                }
                r = kr("" + r), t.setAttribute(a, r);
                break;
            case "onClick":
                r != null && (t.onclick = Bn);
                break;
            case "onScroll":
                r != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                r != null && Tt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
                    if (a = r.__html, a != null) {
                        if (l.children != null) throw Error(o(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "multiple":
                t.multiple = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "muted":
                t.muted = r && typeof r != "function" && typeof r != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                a = kr("" + r), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "" + r) : t.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
                break;
            case "capture":
            case "download":
                r === !0 ? t.setAttribute(a, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(a, r) : t.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(a, r) : t.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(a) : t.setAttribute(a, r);
                break;
            case "popover":
                Tt("beforetoggle", t), Tt("toggle", t), Lr(t, "popover", r);
                break;
            case "xlinkActuate":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                Un(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                Un(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                Un(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                Un(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                Lr(t, "is", r);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Qv.get(a) || a, Lr(t, a, r))
        }
    }

    function wu(t, e, a, r, l, u) {
        switch (a) {
            case "style":
                Jf(t, r, u);
                break;
            case "dangerouslySetInnerHTML":
                if (r != null) {
                    if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
                    if (a = r.__html, a != null) {
                        if (l.children != null) throw Error(o(60));
                        t.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof r == "string" ? Bi(t, r) : (typeof r == "number" || typeof r == "bigint") && Bi(t, "" + r);
                break;
            case "onScroll":
                r != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                r != null && Tt("scrollend", t);
                break;
            case "onClick":
                r != null && (t.onclick = Bn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Yf.hasOwnProperty(a)) t: {
                    if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"), e = a.slice(2, l ? a.length - 7 : void 0), u = t[Be] || null, u = u != null ? u[a] : null, typeof u == "function" && t.removeEventListener(e, u, l), typeof r == "function")) {
                        typeof u != "function" && u !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, r, l);
                        break t
                    }
                    a in t ? t[a] = r : r === !0 ? t.setAttribute(a, "") : Lr(t, a, r)
                }
        }
    }

    function Ce(t, e, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Tt("error", t), Tt("load", t);
                var r = !1,
                    l = !1,
                    u;
                for (u in a)
                    if (a.hasOwnProperty(u)) {
                        var p = a[u];
                        if (p != null) switch (u) {
                            case "src":
                                r = !0;
                                break;
                            case "srcSet":
                                l = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, e));
                            default:
                                Ht(t, e, u, p, a, null)
                        }
                    }
                l && Ht(t, e, "srcSet", a.srcSet, a, null), r && Ht(t, e, "src", a.src, a, null);
                return;
            case "input":
                Tt("invalid", t);
                var b = u = p = l = null,
                    C = null,
                    U = null;
                for (r in a)
                    if (a.hasOwnProperty(r)) {
                        var G = a[r];
                        if (G != null) switch (r) {
                            case "name":
                                l = G;
                                break;
                            case "type":
                                p = G;
                                break;
                            case "checked":
                                C = G;
                                break;
                            case "defaultChecked":
                                U = G;
                                break;
                            case "value":
                                u = G;
                                break;
                            case "defaultValue":
                                b = G;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (G != null) throw Error(o(137, e));
                                break;
                            default:
                                Ht(t, e, r, G, a, null)
                        }
                    }
                Xf(t, u, b, C, U, p, l, !1);
                return;
            case "select":
                Tt("invalid", t), r = p = u = null;
                for (l in a)
                    if (a.hasOwnProperty(l) && (b = a[l], b != null)) switch (l) {
                        case "value":
                            u = b;
                            break;
                        case "defaultValue":
                            p = b;
                            break;
                        case "multiple":
                            r = b;
                        default:
                            Ht(t, e, l, b, a, null)
                    }
                e = u, a = p, t.multiple = !!r, e != null ? Ui(t, !!r, e, !1) : a != null && Ui(t, !!r, a, !0);
                return;
            case "textarea":
                Tt("invalid", t), u = l = r = null;
                for (p in a)
                    if (a.hasOwnProperty(p) && (b = a[p], b != null)) switch (p) {
                        case "value":
                            r = b;
                            break;
                        case "defaultValue":
                            l = b;
                            break;
                        case "children":
                            u = b;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (b != null) throw Error(o(91));
                            break;
                        default:
                            Ht(t, e, p, b, a, null)
                    }
                Ff(t, r, l, u);
                return;
            case "option":
                for (C in a) a.hasOwnProperty(C) && (r = a[C], r != null) && (C === "selected" ? t.selected = r && typeof r != "function" && typeof r != "symbol" : Ht(t, e, C, r, a, null));
                return;
            case "dialog":
                Tt("beforetoggle", t), Tt("toggle", t), Tt("cancel", t), Tt("close", t);
                break;
            case "iframe":
            case "object":
                Tt("load", t);
                break;
            case "video":
            case "audio":
                for (r = 0; r < rr.length; r++) Tt(rr[r], t);
                break;
            case "image":
                Tt("error", t), Tt("load", t);
                break;
            case "details":
                Tt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                Tt("error", t), Tt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (U in a)
                    if (a.hasOwnProperty(U) && (r = a[U], r != null)) switch (U) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            Ht(t, e, U, r, a, null)
                    }
                return;
            default:
                if (Ul(e)) {
                    for (G in a) a.hasOwnProperty(G) && (r = a[G], r !== void 0 && wu(t, e, G, r, a, void 0));
                    return
                }
        }
        for (b in a) a.hasOwnProperty(b) && (r = a[b], r != null && Ht(t, e, b, r, a, null))
    }

    function yb(t, e, a, r) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var l = null,
                    u = null,
                    p = null,
                    b = null,
                    C = null,
                    U = null,
                    G = null;
                for (k in a) {
                    var K = a[k];
                    if (a.hasOwnProperty(k) && K != null) switch (k) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            C = K;
                        default:
                            r.hasOwnProperty(k) || Ht(t, e, k, null, r, K)
                    }
                }
                for (var B in r) {
                    var k = r[B];
                    if (K = a[B], r.hasOwnProperty(B) && (k != null || K != null)) switch (B) {
                        case "type":
                            u = k;
                            break;
                        case "name":
                            l = k;
                            break;
                        case "checked":
                            U = k;
                            break;
                        case "defaultChecked":
                            G = k;
                            break;
                        case "value":
                            p = k;
                            break;
                        case "defaultValue":
                            b = k;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (k != null) throw Error(o(137, e));
                            break;
                        default:
                            k !== K && Ht(t, e, B, k, r, K)
                    }
                }
                jl(t, p, b, C, U, G, u, l);
                return;
            case "select":
                k = p = b = B = null;
                for (u in a)
                    if (C = a[u], a.hasOwnProperty(u) && C != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            k = C;
                        default:
                            r.hasOwnProperty(u) || Ht(t, e, u, null, r, C)
                    }
                for (l in r)
                    if (u = r[l], C = a[l], r.hasOwnProperty(l) && (u != null || C != null)) switch (l) {
                        case "value":
                            B = u;
                            break;
                        case "defaultValue":
                            b = u;
                            break;
                        case "multiple":
                            p = u;
                        default:
                            u !== C && Ht(t, e, l, u, r, C)
                    }
                e = b, a = p, r = k, B != null ? Ui(t, !!a, B, !1) : !!r != !!a && (e != null ? Ui(t, !!a, e, !0) : Ui(t, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                k = B = null;
                for (b in a)
                    if (l = a[b], a.hasOwnProperty(b) && l != null && !r.hasOwnProperty(b)) switch (b) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ht(t, e, b, null, r, l)
                    }
                for (p in r)
                    if (l = r[p], u = a[p], r.hasOwnProperty(p) && (l != null || u != null)) switch (p) {
                        case "value":
                            B = l;
                            break;
                        case "defaultValue":
                            k = l;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (l != null) throw Error(o(91));
                            break;
                        default:
                            l !== u && Ht(t, e, p, l, r, u)
                    }
                Kf(t, B, k);
                return;
            case "option":
                for (var rt in a) B = a[rt], a.hasOwnProperty(rt) && B != null && !r.hasOwnProperty(rt) && (rt === "selected" ? t.selected = !1 : Ht(t, e, rt, null, r, B));
                for (C in r) B = r[C], k = a[C], r.hasOwnProperty(C) && B !== k && (B != null || k != null) && (C === "selected" ? t.selected = B && typeof B != "function" && typeof B != "symbol" : Ht(t, e, C, B, r, k));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ht in a) B = a[ht], a.hasOwnProperty(ht) && B != null && !r.hasOwnProperty(ht) && Ht(t, e, ht, null, r, B);
                for (U in r)
                    if (B = r[U], k = a[U], r.hasOwnProperty(U) && B !== k && (B != null || k != null)) switch (U) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (B != null) throw Error(o(137, e));
                            break;
                        default:
                            Ht(t, e, U, B, r, k)
                    }
                return;
            default:
                if (Ul(e)) {
                    for (var qt in a) B = a[qt], a.hasOwnProperty(qt) && B !== void 0 && !r.hasOwnProperty(qt) && wu(t, e, qt, void 0, r, B);
                    for (G in r) B = r[G], k = a[G], !r.hasOwnProperty(G) || B === k || B === void 0 && k === void 0 || wu(t, e, G, B, r, k);
                    return
                }
        }
        for (var N in a) B = a[N], a.hasOwnProperty(N) && B != null && !r.hasOwnProperty(N) && Ht(t, e, N, null, r, B);
        for (K in r) B = r[K], k = a[K], !r.hasOwnProperty(K) || B === k || B == null && k == null || Ht(t, e, K, B, r, k)
    }

    function Im(t) {
        switch (t) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function vb() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), r = 0; r < a.length; r++) {
                var l = a[r],
                    u = l.transferSize,
                    p = l.initiatorType,
                    b = l.duration;
                if (u && b && Im(p)) {
                    for (p = 0, b = l.responseEnd, r += 1; r < a.length; r++) {
                        var C = a[r],
                            U = C.startTime;
                        if (U > b) break;
                        var G = C.transferSize,
                            K = C.initiatorType;
                        G && Im(K) && (C = C.responseEnd, p += G * (C < b ? 1 : (b - U) / (C - U)))
                    }
                    if (--r, e += 8 * (u + p) / (l.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }
    var _u = null,
        Eu = null;

    function jo(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function $m(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Wm(t, e) {
        if (t === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function Ru(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Tu = null;

    function bb() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Tu ? !1 : (Tu = t, !0) : (Tu = null, !1)
    }
    var tp = typeof setTimeout == "function" ? setTimeout : void 0,
        Sb = typeof clearTimeout == "function" ? clearTimeout : void 0,
        ep = typeof Promise == "function" ? Promise : void 0,
        xb = typeof queueMicrotask == "function" ? queueMicrotask : typeof ep < "u" ? function(t) {
            return ep.resolve(null).then(t).catch(wb)
        } : tp;

    function wb(t) {
        setTimeout(function() {
            throw t
        })
    }

    function Ta(t) {
        return t === "head"
    }

    function np(t, e) {
        var a = e,
            r = 0;
        do {
            var l = a.nextSibling;
            if (t.removeChild(a), l && l.nodeType === 8)
                if (a = l.data, a === "/$" || a === "/&") {
                    if (r === 0) {
                        t.removeChild(l), ms(e);
                        return
                    }
                    r--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") r++;
            else if (a === "html") lr(t.ownerDocument.documentElement);
            else if (a === "head") {
                a = t.ownerDocument.head, lr(a);
                for (var u = a.firstChild; u;) {
                    var p = u.nextSibling,
                        b = u.nodeName;
                    u[Ts] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = p
                }
            } else a === "body" && lr(t.ownerDocument.body);
            a = l
        } while (a);
        ms(e)
    }

    function ap(t, e) {
        var a = t;
        t = 0;
        do {
            var r = a.nextSibling;
            if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), r && r.nodeType === 8)
                if (a = r.data, a === "/$") {
                    if (t === 0) break;
                    t--
                } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
            a = r
        } while (a)
    }

    function Cu(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var a = e;
            switch (e = e.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Cu(a), Nl(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(a)
        }
    }

    function _b(t, e, a, r) {
        for (; t.nodeType === 1;) {
            var l = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (r) {
                if (!t[Ts]) switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== l.rel || t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || t.getAttribute("title") !== (l.title == null ? null : l.title)) break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = l.name == null ? null : "" + l.name;
                if (l.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = hn(t.nextSibling), t === null) break
        }
        return null
    }

    function Eb(t, e, a) {
        if (e === "") return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = hn(t.nextSibling), t === null)) return null;
        return t
    }

    function ip(t, e) {
        for (; t.nodeType !== 8;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = hn(t.nextSibling), t === null)) return null;
        return t
    }

    function Au(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function Mu(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function Rb(t, e) {
        var a = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e;
        else if (t.data !== "$?" || a.readyState !== "loading") e();
        else {
            var r = function() {
                e(), a.removeEventListener("DOMContentLoaded", r)
            };
            a.addEventListener("DOMContentLoaded", r), t._reactRetry = r
        }
    }

    function hn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                if (e === "/$" || e === "/&") return null
            }
        }
        return t
    }
    var Ou = null;

    function sp(t) {
        t = t.nextSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "/$" || a === "/&") {
                    if (e === 0) return hn(t.nextSibling);
                    e--
                } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }

    function rp(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (e === 0) return t;
                    e--
                } else a !== "/$" && a !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }

    function op(t, e, a) {
        switch (e = jo(a), t) {
            case "html":
                if (t = e.documentElement, !t) throw Error(o(452));
                return t;
            case "head":
                if (t = e.head, !t) throw Error(o(453));
                return t;
            case "body":
                if (t = e.body, !t) throw Error(o(454));
                return t;
            default:
                throw Error(o(451))
        }
    }

    function lr(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        Nl(t)
    }
    var mn = new Map,
        lp = new Set;

    function Lo(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Wn = F.d;
    F.d = {
        f: Tb,
        r: Cb,
        D: Ab,
        C: Mb,
        L: Ob,
        m: zb,
        X: Db,
        S: Nb,
        M: jb
    };

    function Tb() {
        var t = Wn.f(),
            e = To();
        return t || e
    }

    function Cb(t) {
        var e = Di(t);
        e !== null && e.tag === 5 && e.type === "form" ? Rh(e) : Wn.r(t)
    }
    var fs = typeof document > "u" ? null : document;

    function cp(t, e, a) {
        var r = fs;
        if (r && typeof e == "string" && e) {
            var l = rn(e);
            l = 'link[rel="' + t + '"][href="' + l + '"]', typeof a == "string" && (l += '[crossorigin="' + a + '"]'), lp.has(l) || (lp.add(l), t = {
                rel: t,
                crossOrigin: a,
                href: e
            }, r.querySelector(l) === null && (e = r.createElement("link"), Ce(e, "link", t), ye(e), r.head.appendChild(e)))
        }
    }

    function Ab(t) {
        Wn.D(t), cp("dns-prefetch", t, null)
    }

    function Mb(t, e) {
        Wn.C(t, e), cp("preconnect", t, e)
    }

    function Ob(t, e, a) {
        Wn.L(t, e, a);
        var r = fs;
        if (r && t && e) {
            var l = 'link[rel="preload"][as="' + rn(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + rn(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (l += '[imagesizes="' + rn(a.imageSizes) + '"]')) : l += '[href="' + rn(t) + '"]';
            var u = l;
            switch (e) {
                case "style":
                    u = ds(t);
                    break;
                case "script":
                    u = hs(t)
            }
            mn.has(u) || (t = h({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a), mn.set(u, t), r.querySelector(l) !== null || e === "style" && r.querySelector(cr(u)) || e === "script" && r.querySelector(ur(u)) || (e = r.createElement("link"), Ce(e, "link", t), ye(e), r.head.appendChild(e)))
        }
    }

    function zb(t, e) {
        Wn.m(t, e);
        var a = fs;
        if (a && t) {
            var r = e && typeof e.as == "string" ? e.as : "script",
                l = 'link[rel="modulepreload"][as="' + rn(r) + '"][href="' + rn(t) + '"]',
                u = l;
            switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = hs(t)
            }
            if (!mn.has(u) && (t = h({
                    rel: "modulepreload",
                    href: t
                }, e), mn.set(u, t), a.querySelector(l) === null)) {
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(ur(u))) return
                }
                r = a.createElement("link"), Ce(r, "link", t), ye(r), a.head.appendChild(r)
            }
        }
    }

    function Nb(t, e, a) {
        Wn.S(t, e, a);
        var r = fs;
        if (r && t) {
            var l = ji(r).hoistableStyles,
                u = ds(t);
            e = e || "default";
            var p = l.get(u);
            if (!p) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (p = r.querySelector(cr(u))) b.loading = 5;
                else {
                    t = h({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a), (a = mn.get(u)) && zu(t, a);
                    var C = p = r.createElement("link");
                    ye(C), Ce(C, "link", t), C._p = new Promise(function(U, G) {
                        C.onload = U, C.onerror = G
                    }), C.addEventListener("load", function() {
                        b.loading |= 1
                    }), C.addEventListener("error", function() {
                        b.loading |= 2
                    }), b.loading |= 4, Uo(p, e, r)
                }
                p = {
                    type: "stylesheet",
                    instance: p,
                    count: 1,
                    state: b
                }, l.set(u, p)
            }
        }
    }

    function Db(t, e) {
        Wn.X(t, e);
        var a = fs;
        if (a && t) {
            var r = ji(a).hoistableScripts,
                l = hs(t),
                u = r.get(l);
            u || (u = a.querySelector(ur(l)), u || (t = h({
                src: t,
                async: !0
            }, e), (e = mn.get(l)) && Nu(t, e), u = a.createElement("script"), ye(u), Ce(u, "link", t), a.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, r.set(l, u))
        }
    }

    function jb(t, e) {
        Wn.M(t, e);
        var a = fs;
        if (a && t) {
            var r = ji(a).hoistableScripts,
                l = hs(t),
                u = r.get(l);
            u || (u = a.querySelector(ur(l)), u || (t = h({
                src: t,
                async: !0,
                type: "module"
            }, e), (e = mn.get(l)) && Nu(t, e), u = a.createElement("script"), ye(u), Ce(u, "link", t), a.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, r.set(l, u))
        }
    }

    function up(t, e, a, r) {
        var l = (l = at.current) ? Lo(l) : null;
        if (!l) throw Error(o(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (e = ds(a.href), a = ji(l).hoistableStyles, r = a.get(e), r || (r = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    t = ds(a.href);
                    var u = ji(l).hoistableStyles,
                        p = u.get(t);
                    if (p || (l = l.ownerDocument || l, p = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, p), (u = l.querySelector(cr(t))) && !u._p && (p.instance = u, p.state.loading = 5), mn.has(t) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, mn.set(t, a), u || Lb(l, t, a, p.state))), e && r === null) throw Error(o(528, ""));
                    return p
                }
                if (e && r !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = hs(a), a = ji(l).hoistableScripts, r = a.get(e), r || (r = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(e, r)), r) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, t))
        }
    }

    function ds(t) {
        return 'href="' + rn(t) + '"'
    }

    function cr(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function fp(t) {
        return h({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }

    function Lb(t, e, a, r) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
            return r.loading |= 1
        }), e.addEventListener("error", function() {
            return r.loading |= 2
        }), Ce(e, "link", a), ye(e), t.head.appendChild(e))
    }

    function hs(t) {
        return '[src="' + rn(t) + '"]'
    }

    function ur(t) {
        return "script[async]" + t
    }

    function dp(t, e, a) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var r = t.querySelector('style[data-href~="' + rn(a.href) + '"]');
                if (r) return e.instance = r, ye(r), r;
                var l = h({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return r = (t.ownerDocument || t).createElement("style"), ye(r), Ce(r, "style", l), Uo(r, a.precedence, t), e.instance = r;
            case "stylesheet":
                l = ds(a.href);
                var u = t.querySelector(cr(l));
                if (u) return e.state.loading |= 4, e.instance = u, ye(u), u;
                r = fp(a), (l = mn.get(l)) && zu(r, l), u = (t.ownerDocument || t).createElement("link"), ye(u);
                var p = u;
                return p._p = new Promise(function(b, C) {
                    p.onload = b, p.onerror = C
                }), Ce(u, "link", r), e.state.loading |= 4, Uo(u, a.precedence, t), e.instance = u;
            case "script":
                return u = hs(a.src), (l = t.querySelector(ur(u))) ? (e.instance = l, ye(l), l) : (r = a, (l = mn.get(u)) && (r = h({}, a), Nu(r, l)), t = t.ownerDocument || t, l = t.createElement("script"), ye(l), Ce(l, "link", r), t.head.appendChild(l), e.instance = l);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, Uo(r, a.precedence, t));
        return e.instance
    }

    function Uo(t, e, a) {
        for (var r = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = r.length ? r[r.length - 1] : null, u = l, p = 0; p < r.length; p++) {
            var b = r[p];
            if (b.dataset.precedence === e) u = b;
            else if (u !== l) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild))
    }

    function zu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function Nu(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }
    var Bo = null;

    function hp(t, e, a) {
        if (Bo === null) {
            var r = new Map,
                l = Bo = new Map;
            l.set(a, r)
        } else l = Bo, r = l.get(a), r || (r = new Map, l.set(a, r));
        if (r.has(t)) return r;
        for (r.set(t, null), a = a.getElementsByTagName(t), l = 0; l < a.length; l++) {
            var u = a[l];
            if (!(u[Ts] || u[_e] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var p = u.getAttribute(e) || "";
                p = t + p;
                var b = r.get(p);
                b ? b.push(u) : r.set(p, [u])
            }
        }
        return r
    }

    function mp(t, e, a) {
        t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }

    function Ub(t, e, a) {
        if (a === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function pp(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function Bb(t, e, a, r) {
        if (a.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var l = ds(r.href),
                    u = e.querySelector(cr(l));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ko.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = u, ye(u);
                    return
                }
                u = e.ownerDocument || e, r = fp(r), (l = mn.get(l)) && zu(r, l), u = u.createElement("link"), ye(u);
                var p = u;
                p._p = new Promise(function(b, C) {
                    p.onload = b, p.onerror = C
                }), Ce(u, "link", r), a.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = ko.bind(t), e.addEventListener("load", a), e.addEventListener("error", a))
        }
    }
    var Du = 0;

    function kb(t, e) {
        return t.stylesheets && t.count === 0 && qo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
            var r = setTimeout(function() {
                if (t.stylesheets && qo(t, t.stylesheets), t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Du === 0 && (Du = 62500 * vb());
            var l = setTimeout(function() {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && qo(t, t.stylesheets), t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, (t.imgBytes > Du ? 50 : 800) + e);
            return t.unsuspend = a,
                function() {
                    t.unsuspend = null, clearTimeout(r), clearTimeout(l)
                }
        } : null
    }

    function ko() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) qo(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }
    var Ho = null;

    function qo(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, Ho = new Map, e.forEach(Hb, t), Ho = null, ko.call(t))
    }

    function Hb(t, e) {
        if (!(e.state.loading & 4)) {
            var a = Ho.get(t);
            if (a) var r = a.get(null);
            else {
                a = new Map, Ho.set(t, a);
                for (var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < l.length; u++) {
                    var p = l[u];
                    (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), r = p)
                }
                r && a.set(null, r)
            }
            l = e.instance, p = l.getAttribute("data-precedence"), u = a.get(p) || r, u === r && a.set(null, l), a.set(p, l), this.count++, r = ko.bind(this), l.addEventListener("load", r), l.addEventListener("error", r), u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(l, t.firstChild)), e.state.loading |= 4
        }
    }
    var fr = {
        $$typeof: Y,
        Provider: null,
        Consumer: null,
        _currentValue: it,
        _currentValue2: it,
        _threadCount: 0
    };

    function qb(t, e, a, r, l, u, p, b, C) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = oa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oa(0), this.hiddenUpdates = oa(null), this.identifierPrefix = r, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = new Map
    }

    function gp(t, e, a, r, l, u, p, b, C, U, G, K) {
        return t = new qb(t, e, a, p, C, U, G, K, b), e = 1, u === !0 && (e |= 24), u = Je(3, null, null, e), t.current = u, u.stateNode = t, e = dc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element: r,
            isDehydrated: a,
            cache: e
        }, gc(u), t
    }

    function yp(t) {
        return t ? (t = Qi, t) : Qi
    }

    function vp(t, e, a, r, l, u) {
        l = yp(l), r.context === null ? r.context = l : r.pendingContext = l, r = pa(e), r.payload = {
            element: a
        }, u = u === void 0 ? null : u, u !== null && (r.callback = u), a = ga(t, r, e), a !== null && (Ve(a, t, e), Vs(a, t, e))
    }

    function bp(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }

    function ju(t, e) {
        bp(t, e), (t = t.alternate) && bp(t, e)
    }

    function Sp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = si(t, 67108864);
            e !== null && Ve(e, t, 67108864), ju(t, 67108864)
        }
    }

    function xp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = en();
            e = Oi(e);
            var a = si(t, e);
            a !== null && Ve(a, t, e), ju(t, e)
        }
    }
    var Yo = !0;

    function Yb(t, e, a, r) {
        var l = D.T;
        D.T = null;
        var u = F.p;
        try {
            F.p = 2, Lu(t, e, a, r)
        } finally {
            F.p = u, D.T = l
        }
    }

    function Gb(t, e, a, r) {
        var l = D.T;
        D.T = null;
        var u = F.p;
        try {
            F.p = 8, Lu(t, e, a, r)
        } finally {
            F.p = u, D.T = l
        }
    }

    function Lu(t, e, a, r) {
        if (Yo) {
            var l = Uu(r);
            if (l === null) xu(t, e, r, Go, a), _p(t, r);
            else if (Qb(l, t, e, a, r)) r.stopPropagation();
            else if (_p(t, r), e & 4 && -1 < Vb.indexOf(t)) {
                for (; l !== null;) {
                    var u = Di(l);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var p = Rn(u.pendingLanes);
                                if (p !== 0) {
                                    var b = u;
                                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p;) {
                                        var C = 1 << 31 - Ae(p);
                                        b.entanglements[1] |= C, p &= ~C
                                    }
                                    Mn(u), (Dt & 6) === 0 && (Eo = pe() + 500, sr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = si(u, 2), b !== null && Ve(b, u, 2), To(), ju(u, 2)
                    }
                    if (u = Uu(r), u === null && xu(t, e, r, Go, a), u === l) break;
                    l = u
                }
                l !== null && r.stopPropagation()
            } else xu(t, e, r, null, a)
        }
    }

    function Uu(t) {
        return t = kl(t), Bu(t)
    }
    var Go = null;

    function Bu(t) {
        if (Go = null, t = Ni(t), t !== null) {
            var e = f(t);
            if (e === null) t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = d(e), t !== null) return t;
                    t = null
                } else if (a === 31) {
                    if (t = m(e), t !== null) return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return Go = t, null
    }

    function wp(t) {
        switch (t) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Bt()) {
                    case Zt:
                        return 2;
                    case an:
                        return 8;
                    case jn:
                    case Es:
                        return 32;
                    case Ln:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var ku = !1,
        Ca = null,
        Aa = null,
        Ma = null,
        dr = new Map,
        hr = new Map,
        Oa = [],
        Vb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function _p(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                Ca = null;
                break;
            case "dragenter":
            case "dragleave":
                Aa = null;
                break;
            case "mouseover":
            case "mouseout":
                Ma = null;
                break;
            case "pointerover":
            case "pointerout":
                dr.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                hr.delete(e.pointerId)
        }
    }

    function mr(t, e, a, r, l, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: r,
            nativeEvent: u,
            targetContainers: [l]
        }, e !== null && (e = Di(e), e !== null && Sp(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, l !== null && e.indexOf(l) === -1 && e.push(l), t)
    }

    function Qb(t, e, a, r, l) {
        switch (e) {
            case "focusin":
                return Ca = mr(Ca, t, e, a, r, l), !0;
            case "dragenter":
                return Aa = mr(Aa, t, e, a, r, l), !0;
            case "mouseover":
                return Ma = mr(Ma, t, e, a, r, l), !0;
            case "pointerover":
                var u = l.pointerId;
                return dr.set(u, mr(dr.get(u) || null, t, e, a, r, l)), !0;
            case "gotpointercapture":
                return u = l.pointerId, hr.set(u, mr(hr.get(u) || null, t, e, a, r, l)), !0
        }
        return !1
    }

    function Ep(t) {
        var e = Ni(t.target);
        if (e !== null) {
            var a = f(e);
            if (a !== null) {
                if (e = a.tag, e === 13) {
                    if (e = d(a), e !== null) {
                        t.blockedOn = e, kf(t.priority, function() {
                            xp(a)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = m(a), e !== null) {
                        t.blockedOn = e, kf(t.priority, function() {
                            xp(a)
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function Vo(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var a = Uu(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var r = new a.constructor(a.type, a);
                Bl = r, a.target.dispatchEvent(r), Bl = null
            } else return e = Di(a), e !== null && Sp(e), t.blockedOn = a, !1;
            e.shift()
        }
        return !0
    }

    function Rp(t, e, a) {
        Vo(t) && a.delete(e)
    }

    function Pb() {
        ku = !1, Ca !== null && Vo(Ca) && (Ca = null), Aa !== null && Vo(Aa) && (Aa = null), Ma !== null && Vo(Ma) && (Ma = null), dr.forEach(Rp), hr.forEach(Rp)
    }

    function Qo(t, e) {
        t.blockedOn === e && (t.blockedOn = null, ku || (ku = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Pb)))
    }
    var Po = null;

    function Tp(t) {
        Po !== t && (Po = t, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Po === t && (Po = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e],
                    r = t[e + 1],
                    l = t[e + 2];
                if (typeof r != "function") {
                    if (Bu(r || a) === null) continue;
                    break
                }
                var u = Di(a);
                u !== null && (t.splice(e, 3), e -= 3, Uc(u, {
                    pending: !0,
                    data: l,
                    method: a.method,
                    action: r
                }, r, l))
            }
        }))
    }

    function ms(t) {
        function e(C) {
            return Qo(C, t)
        }
        Ca !== null && Qo(Ca, t), Aa !== null && Qo(Aa, t), Ma !== null && Qo(Ma, t), dr.forEach(e), hr.forEach(e);
        for (var a = 0; a < Oa.length; a++) {
            var r = Oa[a];
            r.blockedOn === t && (r.blockedOn = null)
        }
        for (; 0 < Oa.length && (a = Oa[0], a.blockedOn === null);) Ep(a), a.blockedOn === null && Oa.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
            for (r = 0; r < a.length; r += 3) {
                var l = a[r],
                    u = a[r + 1],
                    p = l[Be] || null;
                if (typeof u == "function") p || Tp(a);
                else if (p) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (l = u, p = u[Be] || null) b = p.formAction;
                        else if (Bu(l) !== null) continue
                    } else b = p.action;
                    typeof b == "function" ? a[r + 1] = b : (a.splice(r, 3), r -= 3), Tp(a)
                }
            }
    }

    function Cp() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(p) {
                        return l = p
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function e() {
            l !== null && (l(), l = null), r || setTimeout(a, 20)
        }

        function a() {
            if (!r && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var r = !1,
                l = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100),
                function() {
                    r = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), l !== null && (l(), l = null)
                }
        }
    }

    function Hu(t) {
        this._internalRoot = t
    }
    Xo.prototype.render = Hu.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null) throw Error(o(409));
        var a = e.current,
            r = en();
        vp(a, r, t, e, null, null)
    }, Xo.prototype.unmount = Hu.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            vp(t.current, 2, null, t, null, null), To(), e[zi] = null
        }
    };

    function Xo(t) {
        this._internalRoot = t
    }
    Xo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Ol();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < Oa.length && e !== 0 && e < Oa[a].priority; a++);
            Oa.splice(a, 0, t), a === 0 && Ep(t)
        }
    };
    var Ap = i.version;
    if (Ap !== "19.2.5") throw Error(o(527, Ap, "19.2.5"));
    F.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
        return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t
    };
    var Xb = {
        bundleType: 0,
        version: "19.2.5",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.5"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ko.isDisabled && Ko.supportsFiber) try {
            $a = Ko.inject(Xb), ze = Ko
        } catch {}
    }
    return gr.createRoot = function(t, e) {
        if (!c(t)) throw Error(o(299));
        var a = !1,
            r = "",
            l = Lh,
            u = Uh,
            p = Bh;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onUncaughtError !== void 0 && (l = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (p = e.onRecoverableError)), e = gp(t, 1, !1, null, null, a, r, null, l, u, p, Cp), t[zi] = e.current, Su(t), new Hu(e)
    }, gr.hydrateRoot = function(t, e, a) {
        if (!c(t)) throw Error(o(299));
        var r = !1,
            l = "",
            u = Lh,
            p = Uh,
            b = Bh,
            C = null;
        return a != null && (a.unstable_strictMode === !0 && (r = !0), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (b = a.onRecoverableError), a.formState !== void 0 && (C = a.formState)), e = gp(t, 1, !0, e, a ? ? null, r, l, C, u, p, b, Cp), e.context = yp(null), a = e.current, r = en(), r = Oi(r), l = pa(r), l.callback = null, ga(a, l, r), a = r, e.current.lanes = a, Ft(e, a), Mn(e), t[zi] = e.current, Su(t), new Xo(e)
    }, gr.version = "19.2.5", gr
}
var kp;

function a1() {
    if (kp) return Gu.exports;
    kp = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (i) {
            console.error(i)
        }
    }
    return n(), Gu.exports = n1(), Gu.exports
}
var i1 = a1(),
    s1 = "__TSS_CONTEXT",
    lf = Symbol.for("TSS_SERVER_FUNCTION"),
    r1 = "application/x-tss-framed",
    ta = {
        JSON: 0,
        CHUNK: 1,
        END: 2,
        ERROR: 3
    },
    o1 = /;\s*v=(\d+)/;

function l1(n) {
    const i = n.match(o1);
    return i ? parseInt(i[1], 10) : void 0
}

function c1(n) {
    const i = l1(n);
    if (i !== void 0 && i !== 1) throw new Error(`Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`)
}
var ty = () => window.__TSS_START_OPTIONS__,
    ey = !1;

function Rr(n) {
    return n[n.length - 1]
}

function u1(n) {
    return typeof n == "function"
}

function Ua(n, i) {
    return u1(n) ? n(i) : n
}
var f1 = Object.prototype.hasOwnProperty,
    Hp = Object.prototype.propertyIsEnumerable,
    d1 = () => Object.create(null),
    vi = (n, i) => Ba(n, i, d1);

function Ba(n, i, s = () => ({}), o = 0) {
    if (n === i) return n;
    if (o > 500) return i;
    const c = i,
        f = Gp(n) && Gp(c);
    if (!f && !(ws(n) && ws(c))) return c;
    const d = f ? n : qp(n);
    if (!d) return c;
    const m = f ? c : qp(c);
    if (!m) return c;
    const y = d.length,
        g = m.length,
        v = f ? new Array(g) : s();
    let h = 0;
    for (let S = 0; S < g; S++) {
        const x = f ? S : m[S],
            E = n[x],
            M = c[x];
        if (E === M) {
            v[x] = E, (f ? S < y : f1.call(n, x)) && h++;
            continue
        }
        if (E === null || M === null || typeof E != "object" || typeof M != "object") {
            v[x] = M;
            continue
        }
        const _ = Ba(E, M, s, o + 1);
        v[x] = _, _ === E && h++
    }
    return y === g && h === y ? n : v
}

function qp(n) {
    const i = Object.getOwnPropertyNames(n);
    for (const c of i)
        if (!Hp.call(n, c)) return !1;
    const s = Object.getOwnPropertySymbols(n);
    if (s.length === 0) return i;
    const o = i;
    for (const c of s) {
        if (!Hp.call(n, c)) return !1;
        o.push(c)
    }
    return o
}

function ws(n) {
    if (!Yp(n)) return !1;
    const i = n.constructor;
    if (typeof i > "u") return !0;
    const s = i.prototype;
    return !(!Yp(s) || !s.hasOwnProperty("isPrototypeOf"))
}

function Yp(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}

function Gp(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}

function Pe(n, i, s) {
    if (n === i) return !0;
    if (typeof n != typeof i) return !1;
    if (Array.isArray(n) && Array.isArray(i)) {
        if (n.length !== i.length) return !1;
        for (let o = 0, c = n.length; o < c; o++)
            if (!Pe(n[o], i[o], s)) return !1;
        return !0
    }
    if (ws(n) && ws(i)) {
        const o = s ? .ignoreUndefined ? ? !0;
        if (s ? .partial) {
            for (const d in i)
                if ((!o || i[d] !== void 0) && !Pe(n[d], i[d], s)) return !1;
            return !0
        }
        let c = 0;
        if (!o) c = Object.keys(n).length;
        else
            for (const d in n) n[d] !== void 0 && c++;
        let f = 0;
        for (const d in i)
            if ((!o || i[d] !== void 0) && (f++, f > c || !Pe(n[d], i[d], s))) return !1;
        return c === f
    }
    return !1
}

function Ei(n) {
    let i, s;
    const o = new Promise((c, f) => {
        i = c, s = f
    });
    return o.status = "pending", o.resolve = c => {
        o.status = "resolved", o.value = c, i(c), n ? .(c)
    }, o.reject = c => {
        o.status = "rejected", s(c)
    }, o
}

function h1(n) {
    return typeof n ? .message != "string" ? !1 : n.message.startsWith("Failed to fetch dynamically imported module") || n.message.startsWith("error loading dynamically imported module") || n.message.startsWith("Importing a module script failed")
}

function Tr(n) {
    return !!(n && typeof n == "object" && typeof n.then == "function")
}

function m1(n) {
    return n.replace(/[\x00-\x1f\x7f]/g, "")
}

function Vp(n) {
    let i;
    try {
        i = decodeURI(n)
    } catch {
        i = n.replaceAll(/%[0-9A-F]{2}/gi, s => {
            try {
                return decodeURI(s)
            } catch {
                return s
            }
        })
    }
    return m1(i)
}
var p1 = ["http:", "https:", "mailto:", "tel:"];

function ll(n, i) {
    if (!n) return !1;
    try {
        const s = new URL(n);
        return !i.has(s.protocol)
    } catch {
        return !1
    }
}
var g1 = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    y1 = /[&><\u2028\u2029]/g;

function v1(n) {
    return n.replace(y1, i => g1[i])
}

function yr(n) {
    if (!n) return {
        path: n,
        handledProtocolRelativeURL: !1
    };
    if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//")) return {
        path: n,
        handledProtocolRelativeURL: !1
    };
    const i = /%25|%5C/gi;
    let s = 0,
        o = "",
        c;
    for (;
        (c = i.exec(n)) !== null;) o += Vp(n.slice(s, c.index)) + c[0], s = i.lastIndex;
    o = o + Vp(s ? n.slice(s) : n);
    let f = !1;
    return o.startsWith("//") && (f = !0, o = "/" + o.replace(/^\/+/, "")), {
        path: o,
        handledProtocolRelativeURL: f
    }
}

function b1(n) {
    return /\s|[^\u0000-\u007F]/.test(n) ? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : n
}

function S1(n, i) {
    if (n === i) return !0;
    if (n.length !== i.length) return !1;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== i[s]) return !1;
    return !0
}

function Ke() {
    throw new Error("Invariant failed")
}

function Cr(n) {
    const i = new Map;
    let s, o;
    const c = f => {
        f.next && (f.prev ? (f.prev.next = f.next, f.next.prev = f.prev, f.next = void 0, o && (o.next = f, f.prev = o)) : (f.next.prev = void 0, s = f.next, f.next = void 0, o && (f.prev = o, o.next = f)), o = f)
    };
    return {
        get(f) {
            const d = i.get(f);
            if (d) return c(d), d.value
        },
        set(f, d) {
            if (i.size >= n && s) {
                const y = s;
                i.delete(y.key), y.next && (s = y.next, y.next.prev = void 0), y === o && (o = void 0)
            }
            const m = i.get(f);
            if (m) m.value = d, c(m);
            else {
                const y = {
                    key: f,
                    value: d,
                    prev: o
                };
                o && (o.next = y), o = y, s || (s = y), i.set(f, y)
            }
        },
        clear() {
            i.clear(), s = void 0, o = void 0
        }
    }
}
var ka = 4,
    ny = 5;

function x1(n) {
    const i = n.indexOf("{");
    if (i === -1) return null;
    const s = n.indexOf("}", i);
    return s === -1 || i + 1 >= n.length ? null : [i, s]
}

function Ef(n, i, s = new Uint16Array(6)) {
    const o = n.indexOf("/", i),
        c = o === -1 ? n.length : o,
        f = n.substring(i, c);
    if (!f || !f.includes("$")) return s[0] = 0, s[1] = i, s[2] = i, s[3] = c, s[4] = c, s[5] = c, s;
    if (f === "$") {
        const m = n.length;
        return s[0] = 2, s[1] = i, s[2] = i, s[3] = m, s[4] = m, s[5] = m, s
    }
    if (f.charCodeAt(0) === 36) return s[0] = 1, s[1] = i, s[2] = i + 1, s[3] = c, s[4] = c, s[5] = c, s;
    const d = x1(f);
    if (d) {
        const [m, y] = d, g = f.charCodeAt(m + 1);
        if (g === 45) {
            if (m + 2 < f.length && f.charCodeAt(m + 2) === 36) {
                const v = m + 3,
                    h = y;
                if (v < h) return s[0] = 3, s[1] = i + m, s[2] = i + v, s[3] = i + h, s[4] = i + y + 1, s[5] = c, s
            }
        } else if (g === 36) {
            const v = m + 1,
                h = m + 2;
            return h === y ? (s[0] = 2, s[1] = i + m, s[2] = i + v, s[3] = i + h, s[4] = i + y + 1, s[5] = n.length, s) : (s[0] = 1, s[1] = i + m, s[2] = i + h, s[3] = i + y, s[4] = i + y + 1, s[5] = c, s)
        }
    }
    return s[0] = 0, s[1] = i, s[2] = i, s[3] = c, s[4] = c, s[5] = c, s
}

function Sl(n, i, s, o, c, f, d) {
    d ? .(s);
    let m = o; {
        const y = s.fullPath ? ? s.from,
            g = y.length,
            v = s.options ? .caseSensitive ? ? n,
            h = !!(s.options ? .params ? .parse && s.options ? .skipRouteOnParseError ? .params);
        for (; m < g;) {
            const x = Ef(y, m, i);
            let E;
            const M = m,
                _ = x[5];
            switch (m = _ + 1, f++, x[0]) {
                case 0:
                    {
                        const R = y.substring(x[2], x[3]);
                        if (v) {
                            const q = c.static ? .get(R);
                            if (q) E = q;
                            else {
                                c.static ? ? = new Map;
                                const Y = Si(s.fullPath ? ? s.from);
                                Y.parent = c, Y.depth = f, E = Y, c.static.set(R, Y)
                            }
                        } else {
                            const q = R.toLowerCase(),
                                Y = c.staticInsensitive ? .get(q);
                            if (Y) E = Y;
                            else {
                                c.staticInsensitive ? ? = new Map;
                                const H = Si(s.fullPath ? ? s.from);
                                H.parent = c, H.depth = f, E = H, c.staticInsensitive.set(q, H)
                            }
                        }
                        break
                    }
                case 1:
                    {
                        const R = y.substring(M, x[1]),
                            q = y.substring(x[4], _),
                            Y = v && !!(R || q),
                            H = R ? Y ? R : R.toLowerCase() : void 0,
                            nt = q ? Y ? q : q.toLowerCase() : void 0,
                            I = !h && c.dynamic ? .find(P => !P.skipOnParamError && P.caseSensitive === Y && P.prefix === H && P.suffix === nt);
                        if (I) E = I;
                        else {
                            const P = Ku(1, s.fullPath ? ? s.from, Y, H, nt);
                            E = P, P.depth = f, P.parent = c, c.dynamic ? ? = [], c.dynamic.push(P)
                        }
                        break
                    }
                case 3:
                    {
                        const R = y.substring(M, x[1]),
                            q = y.substring(x[4], _),
                            Y = v && !!(R || q),
                            H = R ? Y ? R : R.toLowerCase() : void 0,
                            nt = q ? Y ? q : q.toLowerCase() : void 0,
                            I = !h && c.optional ? .find(P => !P.skipOnParamError && P.caseSensitive === Y && P.prefix === H && P.suffix === nt);
                        if (I) E = I;
                        else {
                            const P = Ku(3, s.fullPath ? ? s.from, Y, H, nt);
                            E = P, P.parent = c, P.depth = f, c.optional ? ? = [], c.optional.push(P)
                        }
                        break
                    }
                case 2:
                    {
                        const R = y.substring(M, x[1]),
                            q = y.substring(x[4], _),
                            Y = v && !!(R || q),
                            H = R ? Y ? R : R.toLowerCase() : void 0,
                            nt = q ? Y ? q : q.toLowerCase() : void 0,
                            I = Ku(2, s.fullPath ? ? s.from, Y, H, nt);E = I,
                        I.parent = c,
                        I.depth = f,
                        c.wildcard ? ? = [],
                        c.wildcard.push(I)
                    }
            }
            c = E
        }
        if (h && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
            const x = Si(s.fullPath ? ? s.from);
            x.kind = ny, x.parent = c, f++, x.depth = f, c.pathless ? ? = [], c.pathless.push(x), c = x
        }
        const S = (s.path || !s.children) && !s.isRoot;
        if (S && y.endsWith("/")) {
            const x = Si(s.fullPath ? ? s.from);
            x.kind = ka, x.parent = c, f++, x.depth = f, c.index = x, c = x
        }
        c.parse = s.options ? .params ? .parse ? ? null, c.skipOnParamError = h, c.parsingPriority = s.options ? .skipRouteOnParseError ? .priority ? ? 0, S && !c.route && (c.route = s, c.fullPath = s.fullPath ? ? s.from)
    }
    if (s.children)
        for (const y of s.children) Sl(n, i, y, m, c, f, d)
}

function Xu(n, i) {
    if (n.skipOnParamError && !i.skipOnParamError) return -1;
    if (!n.skipOnParamError && i.skipOnParamError) return 1;
    if (n.skipOnParamError && i.skipOnParamError && (n.parsingPriority || i.parsingPriority)) return i.parsingPriority - n.parsingPriority;
    if (n.prefix && i.prefix && n.prefix !== i.prefix) {
        if (n.prefix.startsWith(i.prefix)) return -1;
        if (i.prefix.startsWith(n.prefix)) return 1
    }
    if (n.suffix && i.suffix && n.suffix !== i.suffix) {
        if (n.suffix.endsWith(i.suffix)) return -1;
        if (i.suffix.endsWith(n.suffix)) return 1
    }
    return n.prefix && !i.prefix ? -1 : !n.prefix && i.prefix ? 1 : n.suffix && !i.suffix ? -1 : !n.suffix && i.suffix ? 1 : n.caseSensitive && !i.caseSensitive ? -1 : !n.caseSensitive && i.caseSensitive ? 1 : 0
}

function ja(n) {
    if (n.pathless)
        for (const i of n.pathless) ja(i);
    if (n.static)
        for (const i of n.static.values()) ja(i);
    if (n.staticInsensitive)
        for (const i of n.staticInsensitive.values()) ja(i);
    if (n.dynamic ? .length) {
        n.dynamic.sort(Xu);
        for (const i of n.dynamic) ja(i)
    }
    if (n.optional ? .length) {
        n.optional.sort(Xu);
        for (const i of n.optional) ja(i)
    }
    if (n.wildcard ? .length) {
        n.wildcard.sort(Xu);
        for (const i of n.wildcard) ja(i)
    }
}

function Si(n) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: n,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}

function Ku(n, i, s, o, c) {
    return {
        kind: n,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: i,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: s,
        prefix: o,
        suffix: c
    }
}

function w1(n, i) {
    const s = Si("/"),
        o = new Uint16Array(6);
    for (const c of n) Sl(!1, o, c, 1, s, 0);
    ja(s), i.masksTree = s, i.flatCache = Cr(1e3)
}

function _1(n, i) {
    n || = "/";
    const s = i.flatCache.get(n);
    if (s) return s;
    const o = Rf(n, i.masksTree);
    return i.flatCache.set(n, o), o
}

function E1(n, i, s, o, c) {
    n || = "/", o || = "/";
    const f = i ? `case\0${n}` : n;
    let d = c.singleCache.get(f);
    return d || (d = Si("/"), Sl(i, new Uint16Array(6), {
        from: n
    }, 1, d, 0), c.singleCache.set(f, d)), Rf(o, d, s)
}

function R1(n, i, s = !1) {
    const o = s ? n : `nofuzz\0${n}`,
        c = i.matchCache.get(o);
    if (c !== void 0) return c;
    n || = "/";
    let f;
    try {
        f = Rf(n, i.segmentTree, s)
    } catch (d) {
        if (d instanceof URIError) f = null;
        else throw d
    }
    return f && (f.branch = A1(f.route)), i.matchCache.set(o, f), f
}

function T1(n) {
    return n === "/" ? n : n.replace(/\/{1,}$/, "")
}

function C1(n, i = !1, s) {
    const o = Si(n.fullPath),
        c = new Uint16Array(6),
        f = {},
        d = {};
    let m = 0;
    return Sl(i, c, n, 1, o, 0, y => {
        if (s ? .(y, m), y.id in f && Ke(), f[y.id] = y, m !== 0 && y.path) {
            const g = T1(y.fullPath);
            (!d[g] || y.fullPath.endsWith("/")) && (d[g] = y)
        }
        m++
    }), ja(o), {
        processedTree: {
            segmentTree: o,
            singleCache: Cr(1e3),
            matchCache: Cr(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: f,
        routesByPath: d
    }
}

function Rf(n, i, s = !1) {
    const o = n.split("/"),
        c = O1(n, o, i, s);
    if (!c) return null;
    const [f] = ay(n, o, c);
    return {
        route: c.node.route,
        rawParams: f,
        parsedParams: c.parsedParams
    }
}

function ay(n, i, s) {
    const o = M1(s.node);
    let c = null;
    const f = Object.create(null);
    let d = s.extract ? .part ? ? 0,
        m = s.extract ? .node ? ? 0,
        y = s.extract ? .path ? ? 0,
        g = s.extract ? .segment ? ? 0;
    for (; m < o.length; d++, m++, y++, g++) {
        const v = o[m];
        if (v.kind === ka) break;
        if (v.kind === ny) {
            g--, d--, y--;
            continue
        }
        const h = i[d],
            S = y;
        if (h && (y += h.length), v.kind === 1) {
            c ? ? = s.node.fullPath.split("/");
            const x = c[g],
                E = v.prefix ? .length ? ? 0;
            if (x.charCodeAt(E) === 123) {
                const M = v.suffix ? .length ? ? 0,
                    _ = x.substring(E + 2, x.length - M - 1),
                    R = h.substring(E, h.length - M);
                f[_] = decodeURIComponent(R)
            } else {
                const M = x.substring(1);
                f[M] = decodeURIComponent(h)
            }
        } else if (v.kind === 3) {
            if (s.skipped & 1 << m) {
                d--, y = S - 1;
                continue
            }
            c ? ? = s.node.fullPath.split("/");
            const x = c[g],
                E = v.prefix ? .length ? ? 0,
                M = v.suffix ? .length ? ? 0,
                _ = x.substring(E + 3, x.length - M - 1),
                R = v.suffix || v.prefix ? h.substring(E, h.length - M) : h;
            R && (f[_] = decodeURIComponent(R))
        } else if (v.kind === 2) {
            const x = v,
                E = n.substring(S + (x.prefix ? .length ? ? 0), n.length - (x.suffix ? .length ? ? 0)),
                M = decodeURIComponent(E);
            f["*"] = M, f._splat = M;
            break
        }
    }
    return s.rawParams && Object.assign(f, s.rawParams), [f, {
        part: d,
        node: m,
        path: y,
        segment: g
    }]
}

function A1(n) {
    const i = [n];
    for (; n.parentRoute;) n = n.parentRoute, i.push(n);
    return i.reverse(), i
}

function M1(n) {
    const i = Array(n.depth + 1);
    do i[n.depth] = n, n = n.parent; while (n);
    return i
}

function O1(n, i, s, o) {
    if (n === "/" && s.index) return {
        node: s.index,
        skipped: 0
    };
    const c = !Rr(i),
        f = c && n !== "/",
        d = i.length - (c ? 1 : 0),
        m = [{
            node: s,
            index: 1,
            skipped: 0,
            depth: 1,
            statics: 0,
            dynamics: 0,
            optionals: 0
        }];
    let y = null,
        g = null;
    for (; m.length;) {
        const v = m.pop(),
            {
                node: h,
                index: S,
                skipped: x,
                depth: E,
                statics: M,
                dynamics: _,
                optionals: R
            } = v;
        let {
            extract: q,
            rawParams: Y,
            parsedParams: H
        } = v;
        if (h.kind === 2 && h.route && !Zo(g, v)) continue;
        if (h.skipOnParamError) {
            if (!Qp(n, i, v)) continue;
            Y = v.rawParams, q = v.extract, H = v.parsedParams
        }
        o && h.route && h.kind !== ka && Zo(y, v) && (y = v);
        const nt = S === d;
        if (nt && (h.route && (!f || h.kind === ka || h.kind === 2) && Zo(g, v) && (g = v), !h.optional && !h.wildcard && !h.index && !h.pathless)) continue;
        const I = nt ? void 0 : i[S];
        let P;
        if (nt && h.index) {
            const j = {
                node: h.index,
                index: S,
                skipped: x,
                depth: E + 1,
                statics: M,
                dynamics: _,
                optionals: R,
                extract: q,
                rawParams: Y,
                parsedParams: H
            };
            let W = !0;
            if (h.index.skipOnParamError && (Qp(n, i, j) || (W = !1)), W) {
                if (!_ && !R && !x && z1(M, d)) return j;
                Zo(g, j) && (g = j)
            }
        }
        if (h.wildcard)
            for (let j = h.wildcard.length - 1; j >= 0; j--) {
                const W = h.wildcard[j],
                    {
                        prefix: ut,
                        suffix: st
                    } = W;
                if (!(ut && (nt || !(W.caseSensitive ? I : P ? ? = I.toLowerCase()).startsWith(ut)))) {
                    if (st) {
                        if (nt) continue;
                        const pt = i.slice(S).join("/").slice(-st.length);
                        if ((W.caseSensitive ? pt : pt.toLowerCase()) !== st) continue
                    }
                    m.push({
                        node: W,
                        index: d,
                        skipped: x,
                        depth: E + 1,
                        statics: M,
                        dynamics: _,
                        optionals: R,
                        extract: q,
                        rawParams: Y,
                        parsedParams: H
                    })
                }
            }
        if (h.optional) {
            const j = x | 1 << E,
                W = E + 1;
            for (let ut = h.optional.length - 1; ut >= 0; ut--) {
                const st = h.optional[ut];
                m.push({
                    node: st,
                    index: S,
                    skipped: j,
                    depth: W,
                    statics: M,
                    dynamics: _,
                    optionals: R,
                    extract: q,
                    rawParams: Y,
                    parsedParams: H
                })
            }
            if (!nt)
                for (let ut = h.optional.length - 1; ut >= 0; ut--) {
                    const st = h.optional[ut],
                        {
                            prefix: pt,
                            suffix: bt
                        } = st;
                    if (pt || bt) {
                        const jt = st.caseSensitive ? I : P ? ? = I.toLowerCase();
                        if (pt && !jt.startsWith(pt) || bt && !jt.endsWith(bt)) continue
                    }
                    m.push({
                        node: st,
                        index: S + 1,
                        skipped: x,
                        depth: W,
                        statics: M,
                        dynamics: _,
                        optionals: R + Fo(d, S),
                        extract: q,
                        rawParams: Y,
                        parsedParams: H
                    })
                }
        }
        if (!nt && h.dynamic && I)
            for (let j = h.dynamic.length - 1; j >= 0; j--) {
                const W = h.dynamic[j],
                    {
                        prefix: ut,
                        suffix: st
                    } = W;
                if (ut || st) {
                    const pt = W.caseSensitive ? I : P ? ? = I.toLowerCase();
                    if (ut && !pt.startsWith(ut) || st && !pt.endsWith(st)) continue
                }
                m.push({
                    node: W,
                    index: S + 1,
                    skipped: x,
                    depth: E + 1,
                    statics: M,
                    dynamics: _ + Fo(d, S),
                    optionals: R,
                    extract: q,
                    rawParams: Y,
                    parsedParams: H
                })
            }
        if (!nt && h.staticInsensitive) {
            const j = h.staticInsensitive.get(P ? ? = I.toLowerCase());
            j && m.push({
                node: j,
                index: S + 1,
                skipped: x,
                depth: E + 1,
                statics: M + Fo(d, S),
                dynamics: _,
                optionals: R,
                extract: q,
                rawParams: Y,
                parsedParams: H
            })
        }
        if (!nt && h.static) {
            const j = h.static.get(I);
            j && m.push({
                node: j,
                index: S + 1,
                skipped: x,
                depth: E + 1,
                statics: M + Fo(d, S),
                dynamics: _,
                optionals: R,
                extract: q,
                rawParams: Y,
                parsedParams: H
            })
        }
        if (h.pathless) {
            const j = E + 1;
            for (let W = h.pathless.length - 1; W >= 0; W--) {
                const ut = h.pathless[W];
                m.push({
                    node: ut,
                    index: S,
                    skipped: x,
                    depth: j,
                    statics: M,
                    dynamics: _,
                    optionals: R,
                    extract: q,
                    rawParams: Y,
                    parsedParams: H
                })
            }
        }
    }
    if (g) return g;
    if (o && y) {
        let v = y.index;
        for (let S = 0; S < y.index; S++) v += i[S].length;
        const h = v === n.length ? "/" : n.slice(v);
        return y.rawParams ? ? = Object.create(null), y.rawParams["**"] = decodeURIComponent(h), y
    }
    return null
}

function Fo(n, i) {
    return 2 ** (n - i - 1)
}

function z1(n, i) {
    return n === 2 ** (i - 1) - 1
}

function Qp(n, i, s) {
    try {
        const [o, c] = ay(n, i, s);
        s.rawParams = o, s.extract = c;
        const f = s.node.parse(o);
        return s.parsedParams = Object.assign(Object.create(null), s.parsedParams, f), !0
    } catch {
        return null
    }
}

function Zo(n, i) {
    return n ? i.statics > n.statics || i.statics === n.statics && (i.dynamics > n.dynamics || i.dynamics === n.dynamics && (i.optionals > n.optionals || i.optionals === n.optionals && ((i.node.kind === ka) > (n.node.kind === ka) || i.node.kind === ka == (n.node.kind === ka) && i.depth > n.depth))) : !0
}

function al(n) {
    return Tf(n.filter(i => i !== void 0).join("/"))
}

function Tf(n) {
    return n.replace(/\/{2,}/g, "/")
}

function iy(n) {
    return n === "/" ? n : n.replace(/^\/{1,}/, "")
}

function qa(n) {
    const i = n.length;
    return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n
}

function sy(n) {
    return qa(iy(n))
}

function cl(n, i) {
    return n ? .endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n
}

function N1(n, i, s) {
    return cl(n, s) === cl(i, s)
}

function D1({
    base: n,
    to: i,
    trailingSlash: s = "never",
    cache: o
}) {
    const c = i.startsWith("/"),
        f = !c && i === ".";
    let d;
    if (o) {
        d = c ? i : f ? n : n + "\0" + i;
        const h = o.get(d);
        if (h) return h
    }
    let m;
    if (f) m = n.split("/");
    else if (c) m = i.split("/");
    else {
        for (m = n.split("/"); m.length > 1 && Rr(m) === "";) m.pop();
        const h = i.split("/");
        for (let S = 0, x = h.length; S < x; S++) {
            const E = h[S];
            E === "" ? S ? S === x - 1 && m.push(E) : m = [E] : E === ".." ? m.pop() : E === "." || m.push(E)
        }
    }
    m.length > 1 && (Rr(m) === "" ? s === "never" && m.pop() : s === "always" && m.push(""));
    let y, g = "";
    for (let h = 0; h < m.length; h++) {
        h > 0 && (g += "/");
        const S = m[h];
        if (!S) continue;
        y = Ef(S, 0, y);
        const x = y[0];
        if (x === 0) {
            g += S;
            continue
        }
        const E = y[5],
            M = S.substring(0, y[1]),
            _ = S.substring(y[4], E),
            R = S.substring(y[2], y[3]);
        x === 1 ? g += M || _ ? `${M}{$${R}}${_}` : `$${R}` : x === 2 ? g += M || _ ? `${M}{$}${_}` : "$" : g += `${M}{-$${R}}${_}`
    }
    g = Tf(g);
    const v = g || "/";
    return d && o && o.set(d, v), v
}

function j1(n) {
    const i = new Map(n.map(c => [encodeURIComponent(c), c])),
        s = Array.from(i.keys()).map(c => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
        o = new RegExp(s, "g");
    return c => c.replace(o, f => i.get(f) ? ? f)
}

function Fu(n, i, s) {
    const o = i[n];
    return typeof o != "string" ? o : n === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(o) ? o : o.split("/").map(c => Xp(c, s)).join("/") : Xp(o, s)
}

function Pp({
    path: n,
    params: i,
    decoder: s,
    ...o
}) {
    let c = !1;
    const f = Object.create(null);
    if (!n || n === "/") return {
        interpolatedPath: "/",
        usedParams: f,
        isMissingParams: c
    };
    if (!n.includes("$")) return {
        interpolatedPath: n,
        usedParams: f,
        isMissingParams: c
    };
    const d = n.length;
    let m = 0,
        y, g = "";
    for (; m < d;) {
        const v = m;
        y = Ef(n, v, y);
        const h = y[5];
        if (m = h + 1, v === h) continue;
        const S = y[0];
        if (S === 0) {
            g += "/" + n.substring(v, h);
            continue
        }
        if (S === 2) {
            const x = i._splat;
            f._splat = x, f["*"] = x;
            const E = n.substring(v, y[1]),
                M = n.substring(y[4], h);
            if (!x) {
                c = !0, (E || M) && (g += "/" + E + M);
                continue
            }
            const _ = Fu("_splat", i, s);
            g += "/" + E + _ + M;
            continue
        }
        if (S === 1) {
            const x = n.substring(y[2], y[3]);
            !c && !(x in i) && (c = !0), f[x] = i[x];
            const E = n.substring(v, y[1]),
                M = n.substring(y[4], h),
                _ = Fu(x, i, s) ? ? "undefined";
            g += "/" + E + _ + M;
            continue
        }
        if (S === 3) {
            const x = n.substring(y[2], y[3]),
                E = i[x];
            if (E == null) continue;
            f[x] = E;
            const M = n.substring(v, y[1]),
                _ = n.substring(y[4], h),
                R = Fu(x, i, s) ? ? "";
            g += "/" + M + R + _;
            continue
        }
    }
    return n.endsWith("/") && (g += "/"), {
        usedParams: f,
        interpolatedPath: g || "/",
        isMissingParams: c
    }
}

function Xp(n, i) {
    const s = encodeURIComponent(n);
    return i ? .(s) ? ? s
}

function L1(n = {}) {
    if (n.isNotFound = !0, n.throw) throw n;
    return n
}

function be(n) {
    return n ? .isNotFound === !0
}

function U1() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var B1 = "tsr-scroll-restoration-v1_3";

function k1() {
    const n = U1();
    if (!n) return null;
    let i = {};
    try {
        const o = JSON.parse(n.getItem("tsr-scroll-restoration-v1_3") || "{}");
        ws(o) && (i = o)
    } catch {}
    return {
        get state() {
            return i
        },
        set: o => {
            i = Ua(o, i) || i
        },
        persist: () => {
            try {
                n.setItem(B1, JSON.stringify(i))
            } catch {}
        }
    }
}
var Kp = k1(),
    H1 = n => n.state.__TSR_key || n.href;

function q1(n) {
    const i = [];
    let s;
    for (; s = n.parentNode;) i.push(`${n.tagName}:nth-child(${Array.prototype.indexOf.call(s.children,n)+1})`), n = s;
    return `${i.reverse().join(" > ")}`.toLowerCase()
}
var Jo = !1,
    vr = "window",
    Fp = "data-scroll-restoration-id";

function Y1(n, i) {
    if (!Kp) return;
    const s = Kp;
    if ((n.options.scrollRestoration ? ? !1) && (n.isScrollRestoring = !0), n.isScrollRestorationSetup || !s) return;
    n.isScrollRestorationSetup = !0, Jo = !1;
    const o = n.options.getScrollRestorationKey || H1,
        c = new Map;
    window.history.scrollRestoration = "manual";
    const f = m => {
            if (!(Jo || !n.isScrollRestoring))
                if (m.target === document || m.target === window) c.set(vr, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
                else {
                    const y = m.target;
                    c.set(y, {
                        scrollX: y.scrollLeft || 0,
                        scrollY: y.scrollTop || 0
                    })
                }
        },
        d = m => {
            if (!n.isScrollRestoring || !m || c.size === 0 || !s) return;
            const y = s.state[m] || = {};
            for (const [g, v] of c) {
                let h;
                if (g === vr) h = vr;
                else if (g.isConnected) {
                    const S = g.getAttribute(Fp);
                    h = S ? `[${Fp}="${S}"]` : q1(g)
                }
                h && (y[h] = v)
            }
        };
    document.addEventListener("scroll", f, !0), n.subscribe("onBeforeLoad", m => {
        d(m.fromLocation ? o(m.fromLocation) : void 0), c.clear()
    }), window.addEventListener("pagehide", () => {
        d(o(n.stores.resolvedLocation.get() ? ? n.stores.location.get())), s.persist()
    }), n.subscribe("onRendered", m => {
        const y = o(m.toLocation),
            g = n.options.scrollRestorationBehavior,
            v = n.options.scrollToTopSelectors;
        if (c.clear(), !n.resetNextScroll) {
            n.resetNextScroll = !0;
            return
        }
        if (!(typeof n.options.scrollRestoration == "function" && !n.options.scrollRestoration({
                location: n.latestLocation
            }))) {
            Jo = !0;
            try {
                const h = n.isScrollRestoring ? s.state[y] : void 0;
                let S = !1;
                if (h)
                    for (const x in h) {
                        const E = h[x];
                        if (!ws(E)) continue;
                        const {
                            scrollX: M,
                            scrollY: _
                        } = E;
                        if (!(!Number.isFinite(M) || !Number.isFinite(_))) {
                            if (x === vr) window.scrollTo({
                                top: _,
                                left: M,
                                behavior: g
                            }), S = !0;
                            else if (x) {
                                let R;
                                try {
                                    R = document.querySelector(x)
                                } catch {
                                    continue
                                }
                                R && (R.scrollLeft = M, R.scrollTop = _, S = !0)
                            }
                        }
                    }
                if (!S) {
                    const x = n.history.location.hash.slice(1);
                    if (x) {
                        const E = window.history.state ? .__hashScrollIntoViewOptions ? ? !0;
                        if (E) {
                            const M = document.getElementById(x);
                            M && M.scrollIntoView(E)
                        }
                    } else {
                        const E = {
                            top: 0,
                            left: 0,
                            behavior: g
                        };
                        if (window.scrollTo(E), v)
                            for (const M of v) {
                                if (M === vr) continue;
                                const _ = typeof M == "function" ? M() : document.querySelector(M);
                                _ && _.scrollTo(E)
                            }
                    }
                }
            } finally {
                Jo = !1
            }
            n.isScrollRestoring && s.set(h => (h[y] || = {}, h))
        }
    })
}

function ry(n, i = String) {
    const s = new URLSearchParams;
    for (const o in n) {
        const c = n[o];
        c !== void 0 && s.set(o, i(c))
    }
    return s.toString()
}

function Zu(n) {
    return n ? n === "false" ? !1 : n === "true" ? !0 : +n * 0 === 0 && +n + "" === n ? +n : n : ""
}

function G1(n) {
    const i = new URLSearchParams(n),
        s = Object.create(null);
    for (const [o, c] of i.entries()) {
        const f = s[o];
        f == null ? s[o] = Zu(c) : Array.isArray(f) ? f.push(Zu(c)) : s[o] = [f, Zu(c)]
    }
    return s
}
var V1 = P1(JSON.parse),
    Q1 = X1(JSON.stringify, JSON.parse);

function P1(n) {
    return i => {
        i[0] === "?" && (i = i.substring(1));
        const s = G1(i);
        for (const o in s) {
            const c = s[o];
            if (typeof c == "string") try {
                s[o] = n(c)
            } catch {}
        }
        return s
    }
}

function X1(n, i) {
    const s = typeof i == "function";

    function o(c) {
        if (typeof c == "object" && c !== null) try {
            return n(c)
        } catch {} else if (s && typeof c == "string") try {
            return i(c), n(c)
        } catch {}
        return c
    }
    return c => {
        const f = ry(c, o);
        return f ? `?${f}` : ""
    }
}
var wi = "__root__";

function oy(n) {
    if (n.statusCode = n.statusCode || n.code || 307, !n._builtLocation && !n.reloadDocument && typeof n.href == "string") try {
        new URL(n.href), n.reloadDocument = !0
    } catch {}
    const i = new Headers(n.headers);
    n.href && i.get("Location") === null && i.set("Location", n.href);
    const s = new Response(null, {
        status: n.statusCode,
        headers: i
    });
    if (s.options = n, n.throw) throw s;
    return s
}

function Xe(n) {
    return n instanceof Response && !!n.options
}

function K1(n) {
    if (n !== null && typeof n == "object" && n.isSerializedRedirect) return oy(n)
}

function F1(n) {
    return {
        input: ({
            url: i
        }) => {
            for (const s of n) i = cf(s, i);
            return i
        },
        output: ({
            url: i
        }) => {
            for (let s = n.length - 1; s >= 0; s--) i = ly(n[s], i);
            return i
        }
    }
}

function Z1(n) {
    const i = sy(n.basepath),
        s = `/${i}`,
        o = `${s}/`,
        c = n.caseSensitive ? s : s.toLowerCase(),
        f = n.caseSensitive ? o : o.toLowerCase();
    return {
        input: ({
            url: d
        }) => {
            const m = n.caseSensitive ? d.pathname : d.pathname.toLowerCase();
            return m === c ? d.pathname = "/" : m.startsWith(f) && (d.pathname = d.pathname.slice(s.length)), d
        },
        output: ({
            url: d
        }) => (d.pathname = al(["/", i, d.pathname]), d)
    }
}

function cf(n, i) {
    const s = n ? .input ? .({
        url: i
    });
    if (s) {
        if (typeof s == "string") return new URL(s);
        if (s instanceof URL) return s
    }
    return i
}

function ly(n, i) {
    const s = n ? .output ? .({
        url: i
    });
    if (s) {
        if (typeof s == "string") return new URL(s);
        if (s instanceof URL) return s
    }
    return i
}

function J1(n, i) {
    const {
        createMutableStore: s,
        createReadonlyStore: o,
        batch: c,
        init: f
    } = i, d = new Map, m = new Map, y = new Map, g = s(n.status), v = s(n.loadedAt), h = s(n.isLoading), S = s(n.isTransitioning), x = s(n.location), E = s(n.resolvedLocation), M = s(n.statusCode), _ = s(n.redirect), R = s([]), q = s([]), Y = s([]), H = o(() => Ju(d, R.get())), nt = o(() => Ju(m, q.get())), I = o(() => Ju(y, Y.get())), P = o(() => R.get()[0]), j = o(() => R.get().some(F => d.get(F) ? .get().status === "pending")), W = o(() => ({
        locationHref: x.get().href,
        resolvedLocationHref: E.get() ? .href,
        status: g.get()
    })), ut = o(() => ({
        status: g.get(),
        loadedAt: v.get(),
        isLoading: h.get(),
        isTransitioning: S.get(),
        matches: H.get(),
        location: x.get(),
        resolvedLocation: E.get(),
        statusCode: M.get(),
        redirect: _.get()
    })), st = Cr(64);

    function pt(F) {
        let it = st.get(F);
        return it || (it = o(() => {
            const St = R.get();
            for (const $ of St) {
                const A = d.get($);
                if (A && A.routeId === F) return A.get()
            }
        }), st.set(F, it)), it
    }
    const bt = {
        status: g,
        loadedAt: v,
        isLoading: h,
        isTransitioning: S,
        location: x,
        resolvedLocation: E,
        statusCode: M,
        redirect: _,
        matchesId: R,
        pendingIds: q,
        cachedIds: Y,
        matches: H,
        pendingMatches: nt,
        cachedMatches: I,
        firstId: P,
        hasPending: j,
        matchRouteDeps: W,
        matchStores: d,
        pendingMatchStores: m,
        cachedMatchStores: y,
        __store: ut,
        getRouteMatchStore: pt,
        setMatches: jt,
        setPending: Et,
        setCached: D
    };
    jt(n.matches), f ? .(bt);

    function jt(F) {
        Iu(F, d, R, s, c)
    }

    function Et(F) {
        Iu(F, m, q, s, c)
    }

    function D(F) {
        Iu(F, y, Y, s, c)
    }
    return bt
}

function Ju(n, i) {
    const s = [];
    for (const o of i) {
        const c = n.get(o);
        c && s.push(c.get())
    }
    return s
}

function Iu(n, i, s, o, c) {
    const f = n.map(m => m.id),
        d = new Set(f);
    c(() => {
        for (const m of i.keys()) d.has(m) || i.delete(m);
        for (const m of n) {
            const y = i.get(m.id);
            if (!y) {
                const g = o(m);
                g.routeId = m.routeId, i.set(m.id, g);
                continue
            }
            y.routeId = m.routeId, y.get() !== m && y.set(m)
        }
        S1(s.get(), f) || s.set(f)
    })
}
var uf = n => {
        if (!n.rendered) return n.rendered = !0, n.onReady ? .()
    },
    I1 = n => n.stores.matchesId.get().some(i => n.stores.matchStores.get(i) ? .get()._forcePending),
    xl = (n, i) => !!(n.preload && !n.router.stores.matchStores.has(i)),
    _i = (n, i, s = !0) => {
        const o = { ...n.router.options.context ? ? {}
            },
            c = s ? i : i - 1;
        for (let f = 0; f <= c; f++) {
            const d = n.matches[f];
            if (!d) continue;
            const m = n.router.getMatch(d.id);
            m && Object.assign(o, m.__routeContext, m.__beforeLoadContext)
        }
        return o
    },
    Zp = (n, i) => {
        if (!n.matches.length) return;
        const s = i.routeId,
            o = n.matches.findIndex(d => d.routeId === n.router.routeTree.id),
            c = o >= 0 ? o : 0;
        let f = s ? n.matches.findIndex(d => d.routeId === s) : n.firstBadMatchIndex ? ? n.matches.length - 1;
        f < 0 && (f = c);
        for (let d = f; d >= 0; d--) {
            const m = n.matches[d];
            if (n.router.looseRoutesById[m.routeId].options.notFoundComponent) return d
        }
        return s ? f : c
    },
    Ha = (n, i, s) => {
        if (!(!Xe(s) && !be(s))) throw Xe(s) && s.redirectHandled && !s.options.reloadDocument || (i && (i._nonReactive.beforeLoadPromise ? .resolve(), i._nonReactive.loaderPromise ? .resolve(), i._nonReactive.beforeLoadPromise = void 0, i._nonReactive.loaderPromise = void 0, i._nonReactive.error = s, n.updateMatch(i.id, o => ({ ...o,
            status: Xe(s) ? "redirected" : be(s) ? "notFound" : o.status === "pending" ? "success" : o.status,
            context: _i(n, i.index),
            isFetching: !1,
            error: s
        })), be(s) && !s.routeId && (s.routeId = i.routeId), i._nonReactive.loadPromise ? .resolve()), Xe(s) && (n.rendered = !0, s.options._fromLocation = n.location, s.redirectHandled = !0, s = n.router.resolveRedirect(s))), s
    },
    cy = (n, i) => {
        const s = n.router.getMatch(i);
        return !!(!s || s._nonReactive.dehydrated)
    },
    Jp = (n, i, s) => {
        const o = _i(n, s);
        n.updateMatch(i, c => ({ ...c,
            context: o
        }))
    },
    br = (n, i, s, o) => {
        const {
            id: c,
            routeId: f
        } = n.matches[i], d = n.router.looseRoutesById[f];
        if (s instanceof Promise) throw s;
        s.routerCode = o, n.firstBadMatchIndex ? ? = i, Ha(n, n.router.getMatch(c), s);
        try {
            d.options.onError ? .(s)
        } catch (m) {
            s = m, Ha(n, n.router.getMatch(c), s)
        }
        n.updateMatch(c, m => (m._nonReactive.beforeLoadPromise ? .resolve(), m._nonReactive.beforeLoadPromise = void 0, m._nonReactive.loadPromise ? .resolve(), { ...m,
            error: s,
            status: "error",
            isFetching: !1,
            updatedAt: Date.now(),
            abortController: new AbortController
        })), !n.preload && !Xe(s) && !be(s) && (n.serialError ? ? = s)
    },
    uy = (n, i, s, o) => {
        if (o._nonReactive.pendingTimeout !== void 0) return;
        const c = s.options.pendingMs ? ? n.router.options.defaultPendingMs;
        if (n.onReady && !xl(n, i) && (s.options.loader || s.options.beforeLoad || dy(s)) && typeof c == "number" && c !== 1 / 0 && (s.options.pendingComponent ? ? n.router.options ? .defaultPendingComponent)) {
            const f = setTimeout(() => {
                uf(n)
            }, c);
            o._nonReactive.pendingTimeout = f
        }
    },
    $1 = (n, i, s) => {
        const o = n.router.getMatch(i);
        if (!o._nonReactive.beforeLoadPromise && !o._nonReactive.loaderPromise) return;
        uy(n, i, s, o);
        const c = () => {
            const f = n.router.getMatch(i);
            f.preload && (f.status === "redirected" || f.status === "notFound") && Ha(n, f, f.error)
        };
        return o._nonReactive.beforeLoadPromise ? o._nonReactive.beforeLoadPromise.then(c) : c()
    },
    W1 = (n, i, s, o) => {
        const c = n.router.getMatch(i);
        let f = c._nonReactive.loadPromise;
        c._nonReactive.loadPromise = Ei(() => {
            f ? .resolve(), f = void 0
        });
        const {
            paramsError: d,
            searchError: m
        } = c;
        d && br(n, s, d, "PARSE_PARAMS"), m && br(n, s, m, "VALIDATE_SEARCH"), uy(n, i, o, c);
        const y = new AbortController;
        let g = !1;
        const v = () => {
                g || (g = !0, n.updateMatch(i, H => ({ ...H,
                    isFetching: "beforeLoad",
                    fetchCount: H.fetchCount + 1,
                    abortController: y
                })))
            },
            h = () => {
                c._nonReactive.beforeLoadPromise ? .resolve(), c._nonReactive.beforeLoadPromise = void 0, n.updateMatch(i, H => ({ ...H,
                    isFetching: !1
                }))
            };
        if (!o.options.beforeLoad) {
            n.router.batch(() => {
                v(), h()
            });
            return
        }
        c._nonReactive.beforeLoadPromise = Ei();
        const S = { ..._i(n, s, !1),
                ...c.__routeContext
            },
            {
                search: x,
                params: E,
                cause: M
            } = c,
            _ = xl(n, i),
            R = {
                search: x,
                abortController: y,
                params: E,
                preload: _,
                context: S,
                location: n.location,
                navigate: H => n.router.navigate({ ...H,
                    _fromLocation: n.location
                }),
                buildLocation: n.router.buildLocation,
                cause: _ ? "preload" : M,
                matches: n.matches,
                routeId: o.id,
                ...n.router.options.additionalContext
            },
            q = H => {
                if (H === void 0) {
                    n.router.batch(() => {
                        v(), h()
                    });
                    return
                }(Xe(H) || be(H)) && (v(), br(n, s, H, "BEFORE_LOAD")), n.router.batch(() => {
                    v(), n.updateMatch(i, nt => ({ ...nt,
                        __beforeLoadContext: H
                    })), h()
                })
            };
        let Y;
        try {
            if (Y = o.options.beforeLoad(R), Tr(Y)) return v(), Y.catch(H => {
                br(n, s, H, "BEFORE_LOAD")
            }).then(q)
        } catch (H) {
            v(), br(n, s, H, "BEFORE_LOAD")
        }
        q(Y)
    },
    tS = (n, i) => {
        const {
            id: s,
            routeId: o
        } = n.matches[i], c = n.router.looseRoutesById[o], f = () => m(), d = () => W1(n, s, i, c), m = () => {
            if (cy(n, s)) return;
            const y = $1(n, s, c);
            return Tr(y) ? y.then(d) : d()
        };
        return f()
    },
    eS = (n, i, s) => {
        const o = n.router.getMatch(i);
        if (!o || !s.options.head && !s.options.scripts && !s.options.headers) return;
        const c = {
            ssr: n.router.options.ssr,
            matches: n.matches,
            match: o,
            params: o.params,
            loaderData: o.loaderData
        };
        return Promise.all([s.options.head ? .(c), s.options.scripts ? .(c), s.options.headers ? .(c)]).then(([f, d, m]) => ({
            meta: f ? .meta,
            links: f ? .links,
            headScripts: f ? .scripts,
            headers: m,
            scripts: d,
            styles: f ? .styles
        }))
    },
    fy = (n, i, s, o, c) => {
        const f = i[o - 1],
            {
                params: d,
                loaderDeps: m,
                abortController: y,
                cause: g
            } = n.router.getMatch(s),
            v = _i(n, o),
            h = xl(n, s);
        return {
            params: d,
            deps: m,
            preload: !!h,
            parentMatchPromise: f,
            abortController: y,
            context: v,
            location: n.location,
            navigate: S => n.router.navigate({ ...S,
                _fromLocation: n.location
            }),
            cause: h ? "preload" : g,
            route: c,
            ...n.router.options.additionalContext
        }
    },
    Ip = async (n, i, s, o, c) => {
        try {
            const f = n.router.getMatch(s);
            try {
                (!(ey ? ? n.router.isServer) || f.ssr === !0) && Ar(c);
                const d = c.options.loader,
                    m = typeof d == "function" ? d : d ? .handler,
                    y = m ? .(fy(n, i, s, o, c)),
                    g = !!m && Tr(y);
                if ((g || c._lazyPromise || c._componentsPromise || c.options.head || c.options.scripts || c.options.headers || f._nonReactive.minPendingPromise) && n.updateMatch(s, h => ({ ...h,
                        isFetching: "loader"
                    })), m) {
                    const h = g ? await y : y;
                    Ha(n, n.router.getMatch(s), h), h !== void 0 && n.updateMatch(s, S => ({ ...S,
                        loaderData: h
                    }))
                }
                c._lazyPromise && await c._lazyPromise;
                const v = f._nonReactive.minPendingPromise;
                v && await v, c._componentsPromise && await c._componentsPromise, n.updateMatch(s, h => ({ ...h,
                    error: void 0,
                    context: _i(n, o),
                    status: "success",
                    isFetching: !1,
                    updatedAt: Date.now()
                }))
            } catch (d) {
                let m = d;
                if (m ? .name === "AbortError") {
                    if (f.abortController.signal.aborted) {
                        f._nonReactive.loaderPromise ? .resolve(), f._nonReactive.loaderPromise = void 0;
                        return
                    }
                    n.updateMatch(s, g => ({ ...g,
                        status: g.status === "pending" ? "success" : g.status,
                        isFetching: !1,
                        context: _i(n, o)
                    }));
                    return
                }
                const y = f._nonReactive.minPendingPromise;
                y && await y, be(d) && await c.options.notFoundComponent ? .preload ? .(), Ha(n, n.router.getMatch(s), d);
                try {
                    c.options.onError ? .(d)
                } catch (g) {
                    m = g, Ha(n, n.router.getMatch(s), g)
                }!Xe(m) && !be(m) && await Ar(c, ["errorComponent"]), n.updateMatch(s, g => ({ ...g,
                    error: m,
                    context: _i(n, o),
                    status: "error",
                    isFetching: !1
                }))
            }
        } catch (f) {
            const d = n.router.getMatch(s);
            d && (d._nonReactive.loaderPromise = void 0), Ha(n, d, f)
        }
    },
    nS = async (n, i, s) => {
        async function o(x, E, M, _, R) {
            const q = Date.now() - E.updatedAt,
                Y = x ? R.options.preloadStaleTime ? ? n.router.options.defaultPreloadStaleTime ? ? 3e4 : R.options.staleTime ? ? n.router.options.defaultStaleTime ? ? 0,
                H = R.options.shouldReload,
                nt = typeof H == "function" ? H(fy(n, i, c, s, R)) : H,
                {
                    status: I,
                    invalid: P
                } = _,
                j = q >= Y && (!!n.forceStaleReload || _.cause === "enter" || M !== void 0 && M !== _.id);
            d = I === "success" && (P || (nt ? ? j)), x && R.options.preload === !1 || (d && !n.sync && v ? (m = !0, (async () => {
                try {
                    await Ip(n, i, c, s, R);
                    const W = n.router.getMatch(c);
                    W._nonReactive.loaderPromise ? .resolve(), W._nonReactive.loadPromise ? .resolve(), W._nonReactive.loaderPromise = void 0, W._nonReactive.loadPromise = void 0
                } catch (W) {
                    Xe(W) && await n.router.navigate(W.options)
                }
            })()) : I !== "success" || d ? await Ip(n, i, c, s, R) : Jp(n, c, s))
        }
        const {
            id: c,
            routeId: f
        } = n.matches[s];
        let d = !1,
            m = !1;
        const y = n.router.looseRoutesById[f],
            g = y.options.loader,
            v = ((typeof g == "function" ? void 0 : g ? .staleReloadMode) ? ? n.router.options.defaultStaleReloadMode) !== "blocking";
        if (cy(n, c)) {
            if (!n.router.getMatch(c)) return n.matches[s];
            Jp(n, c, s)
        } else {
            const x = n.router.getMatch(c),
                E = n.router.stores.matchesId.get()[s],
                M = (E && n.router.stores.matchStores.get(E) || null) ? .routeId === f ? E : n.router.stores.matches.get().find(R => R.routeId === f) ? .id,
                _ = xl(n, c);
            if (x._nonReactive.loaderPromise) {
                if (x.status === "success" && !n.sync && !x.preload && v) return x;
                await x._nonReactive.loaderPromise;
                const R = n.router.getMatch(c),
                    q = R._nonReactive.error || R.error;
                q && Ha(n, R, q), R.status === "pending" && await o(_, x, M, R, y)
            } else {
                const R = _ && !n.router.stores.matchStores.has(c),
                    q = n.router.getMatch(c);
                q._nonReactive.loaderPromise = Ei(), R !== q.preload && n.updateMatch(c, Y => ({ ...Y,
                    preload: R
                })), await o(_, x, M, q, y)
            }
        }
        const h = n.router.getMatch(c);
        m || (h._nonReactive.loaderPromise ? .resolve(), h._nonReactive.loadPromise ? .resolve(), h._nonReactive.loadPromise = void 0), clearTimeout(h._nonReactive.pendingTimeout), h._nonReactive.pendingTimeout = void 0, m || (h._nonReactive.loaderPromise = void 0), h._nonReactive.dehydrated = void 0;
        const S = m ? h.isFetching : !1;
        return S !== h.isFetching || h.invalid !== !1 ? (n.updateMatch(c, x => ({ ...x,
            isFetching: S,
            invalid: !1
        })), n.router.getMatch(c)) : h
    };
async function $p(n) {
    const i = n,
        s = [];
    I1(i.router) && uf(i);
    let o;
    for (let S = 0; S < i.matches.length; S++) {
        try {
            const x = tS(i, S);
            Tr(x) && await x
        } catch (x) {
            if (Xe(x)) throw x;
            if (be(x)) o = x;
            else if (!i.preload) throw x;
            break
        }
        if (i.serialError || i.firstBadMatchIndex != null) break
    }
    const c = i.firstBadMatchIndex ? ? i.matches.length,
        f = o && !i.preload ? Zp(i, o) : void 0,
        d = o && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
    let m, y;
    for (let S = 0; S < d; S++) s.push(nS(i, s, S));
    try {
        await Promise.all(s)
    } catch {
        const S = await Promise.allSettled(s);
        for (const x of S) {
            if (x.status !== "rejected") continue;
            const E = x.reason;
            if (Xe(E)) throw E;
            be(E) ? m ? ? = E : y ? ? = E
        }
        if (y !== void 0) throw y
    }
    const g = m ? ? (o && !i.preload ? o : void 0);
    let v = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
    if (!g && o && i.preload) return i.matches;
    if (g) {
        const S = Zp(i, g);
        S === void 0 && Ke();
        const x = i.matches[S],
            E = i.router.looseRoutesById[x.routeId],
            M = i.router.options ? .defaultNotFoundComponent;
        !E.options.notFoundComponent && M && (E.options.notFoundComponent = M), g.routeId = x.routeId;
        const _ = x.routeId === i.router.routeTree.id;
        i.updateMatch(x.id, R => ({ ...R,
            ..._ ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: g
            },
            isFetching: !1
        })), v = S, await Ar(E, ["notFoundComponent"])
    } else if (!i.preload) {
        const S = i.matches[0];
        S.globalNotFound || i.router.getMatch(S.id) ? .globalNotFound && i.updateMatch(S.id, x => ({ ...x,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (i.serialError && i.firstBadMatchIndex !== void 0) {
        const S = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
        await Ar(S, ["errorComponent"])
    }
    for (let S = 0; S <= v; S++) {
        const {
            id: x,
            routeId: E
        } = i.matches[S], M = i.router.looseRoutesById[E];
        try {
            const _ = eS(i, x, M);
            if (_) {
                const R = await _;
                i.updateMatch(x, q => ({ ...q,
                    ...R
                }))
            }
        } catch (_) {
            console.error(`Error executing head for route ${E}:`, _)
        }
    }
    const h = uf(i);
    if (Tr(h) && await h, g) throw g;
    if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
    return i.matches
}

function Wp(n, i) {
    const s = i.map(o => n.options[o] ? .preload ? .()).filter(Boolean);
    if (s.length !== 0) return Promise.all(s)
}

function Ar(n, i = il) {
    !n._lazyLoaded && n._lazyPromise === void 0 && (n.lazyFn ? n._lazyPromise = n.lazyFn().then(o => {
        const {
            id: c,
            ...f
        } = o.options;
        Object.assign(n.options, f), n._lazyLoaded = !0, n._lazyPromise = void 0
    }) : n._lazyLoaded = !0);
    const s = () => n._componentsLoaded ? void 0 : i === il ? (() => {
        if (n._componentsPromise === void 0) {
            const o = Wp(n, il);
            o ? n._componentsPromise = o.then(() => {
                n._componentsLoaded = !0, n._componentsPromise = void 0
            }) : n._componentsLoaded = !0
        }
        return n._componentsPromise
    })() : Wp(n, i);
    return n._lazyPromise ? n._lazyPromise.then(s) : s()
}

function dy(n) {
    for (const i of il)
        if (n.options[i] ? .preload) return !0;
    return !1
}
var il = ["component", "errorComponent", "pendingComponent", "notFoundComponent"],
    Ya = "__TSR_index",
    tg = "popstate",
    eg = "beforeunload";

function aS(n) {
    let i = n.getLocation();
    const s = new Set,
        o = d => {
            i = n.getLocation(), s.forEach(m => m({
                location: i,
                action: d
            }))
        },
        c = d => {
            n.notifyOnIndexChange ? ? !0 ? o(d) : i = n.getLocation()
        },
        f = async ({
            task: d,
            navigateOpts: m,
            ...y
        }) => {
            if (m ? .ignoreBlocker ? ? !1) {
                d();
                return
            }
            const g = n.getBlockers ? .() ? ? [],
                v = y.type === "PUSH" || y.type === "REPLACE";
            if (typeof document < "u" && g.length && v)
                for (const h of g) {
                    const S = ul(y.path, y.state);
                    if (await h.blockerFn({
                            currentLocation: i,
                            nextLocation: S,
                            action: y.type
                        })) {
                        n.onBlocked ? .();
                        return
                    }
                }
            d()
        };
    return {
        get location() {
            return i
        },
        get length() {
            return n.getLength()
        },
        subscribers: s,
        subscribe: d => (s.add(d), () => {
            s.delete(d)
        }),
        push: (d, m, y) => {
            const g = i.state[Ya];
            m = ng(g + 1, m), f({
                task: () => {
                    n.pushState(d, m), o({
                        type: "PUSH"
                    })
                },
                navigateOpts: y,
                type: "PUSH",
                path: d,
                state: m
            })
        },
        replace: (d, m, y) => {
            const g = i.state[Ya];
            m = ng(g, m), f({
                task: () => {
                    n.replaceState(d, m), o({
                        type: "REPLACE"
                    })
                },
                navigateOpts: y,
                type: "REPLACE",
                path: d,
                state: m
            })
        },
        go: (d, m) => {
            f({
                task: () => {
                    n.go(d), c({
                        type: "GO",
                        index: d
                    })
                },
                navigateOpts: m,
                type: "GO"
            })
        },
        back: d => {
            f({
                task: () => {
                    n.back(d ? .ignoreBlocker ? ? !1), c({
                        type: "BACK"
                    })
                },
                navigateOpts: d,
                type: "BACK"
            })
        },
        forward: d => {
            f({
                task: () => {
                    n.forward(d ? .ignoreBlocker ? ? !1), c({
                        type: "FORWARD"
                    })
                },
                navigateOpts: d,
                type: "FORWARD"
            })
        },
        canGoBack: () => i.state[Ya] !== 0,
        createHref: d => n.createHref(d),
        block: d => {
            if (!n.setBlockers) return () => {};
            const m = n.getBlockers ? .() ? ? [];
            return n.setBlockers([...m, d]), () => {
                const y = n.getBlockers ? .() ? ? [];
                n.setBlockers ? .(y.filter(g => g !== d))
            }
        },
        flush: () => n.flush ? .(),
        destroy: () => n.destroy ? .(),
        notify: o
    }
}

function ng(n, i) {
    i || (i = {});
    const s = Cf();
    return { ...i,
        key: s,
        __TSR_key: s,
        [Ya]: n
    }
}

function iS(n) {
    const i = typeof document < "u" ? window : void 0,
        s = i.history.pushState,
        o = i.history.replaceState;
    let c = [];
    const f = () => c,
        d = j => c = j,
        m = (j => j),
        y = (() => ul(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state));
    if (!i.history.state ? .__TSR_key && !i.history.state ? .key) {
        const j = Cf();
        i.history.replaceState({
            [Ya]: 0,
            key: j,
            __TSR_key: j
        }, "")
    }
    let g = y(),
        v, h = !1,
        S = !1,
        x = !1,
        E = !1;
    const M = () => g;
    let _, R;
    const q = () => {
            _ && (P._ignoreSubscribers = !0, (_.isPush ? i.history.pushState : i.history.replaceState)(_.state, "", _.href), P._ignoreSubscribers = !1, _ = void 0, R = void 0, v = void 0)
        },
        Y = (j, W, ut) => {
            const st = m(W);
            R || (v = g), g = ul(W, ut), _ = {
                href: st,
                state: ut,
                isPush: _ ? .isPush || j === "push"
            }, R || (R = Promise.resolve().then(() => q()))
        },
        H = j => {
            g = y(), P.notify({
                type: j
            })
        },
        nt = async () => {
            if (S) {
                S = !1;
                return
            }
            const j = y(),
                W = j.state[Ya] - g.state[Ya],
                ut = W === 1,
                st = W === -1,
                pt = !ut && !st || h;
            h = !1;
            const bt = pt ? "GO" : st ? "BACK" : "FORWARD",
                jt = pt ? {
                    type: "GO",
                    index: W
                } : {
                    type: st ? "BACK" : "FORWARD"
                };
            if (x) x = !1;
            else {
                const Et = f();
                if (typeof document < "u" && Et.length) {
                    for (const D of Et)
                        if (await D.blockerFn({
                                currentLocation: g,
                                nextLocation: j,
                                action: bt
                            })) {
                            S = !0, i.history.go(1), P.notify(jt);
                            return
                        }
                }
            }
            g = y(), P.notify(jt)
        },
        I = j => {
            if (E) {
                E = !1;
                return
            }
            let W = !1;
            const ut = f();
            if (typeof document < "u" && ut.length)
                for (const st of ut) {
                    const pt = st.enableBeforeUnload ? ? !0;
                    if (pt === !0) {
                        W = !0;
                        break
                    }
                    if (typeof pt == "function" && pt() === !0) {
                        W = !0;
                        break
                    }
                }
            if (W) return j.preventDefault(), j.returnValue = ""
        },
        P = aS({
            getLocation: M,
            getLength: () => i.history.length,
            pushState: (j, W) => Y("push", j, W),
            replaceState: (j, W) => Y("replace", j, W),
            back: j => (j && (x = !0), E = !0, i.history.back()),
            forward: j => {
                j && (x = !0), E = !0, i.history.forward()
            },
            go: j => {
                h = !0, i.history.go(j)
            },
            createHref: j => m(j),
            flush: q,
            destroy: () => {
                i.history.pushState = s, i.history.replaceState = o, i.removeEventListener(eg, I, {
                    capture: !0
                }), i.removeEventListener(tg, nt)
            },
            onBlocked: () => {
                v && g !== v && (g = v)
            },
            getBlockers: f,
            setBlockers: d,
            notifyOnIndexChange: !1
        });
    return i.addEventListener(eg, I, {
        capture: !0
    }), i.addEventListener(tg, nt), i.history.pushState = function(...j) {
        const W = s.apply(i.history, j);
        return P._ignoreSubscribers || H("PUSH"), W
    }, i.history.replaceState = function(...j) {
        const W = o.apply(i.history, j);
        return P._ignoreSubscribers || H("REPLACE"), W
    }, P
}

function sS(n) {
    let i = n.replace(/[\x00-\x1f\x7f]/g, "");
    return i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i
}

function ul(n, i) {
    const s = sS(n),
        o = s.indexOf("#"),
        c = s.indexOf("?"),
        f = Cf();
    return {
        href: s,
        pathname: s.substring(0, o > 0 ? c > 0 ? Math.min(o, c) : o : c > 0 ? c : s.length),
        hash: o > -1 ? s.substring(o) : "",
        search: c > -1 ? s.slice(c, o === -1 ? void 0 : o) : "",
        state: i || {
            [Ya]: 0,
            key: f,
            __TSR_key: f
        }
    }
}

function Cf() {
    return (Math.random() + 1).toString(36).substring(7)
}

function rS(n) {
    return n instanceof Error ? {
        name: n.name,
        message: n.message
    } : {
        data: n
    }
}

function bs(n, i) {
    const s = i,
        o = n;
    return {
        fromLocation: s,
        toLocation: o,
        pathChanged: s ? .pathname !== o.pathname,
        hrefChanged: s ? .href !== o.href,
        hashChanged: s ? .hash !== o.hash
    }
}
var oS = class {
        constructor(n, i) {
            this.tempLocationKey = `${Math.round(Math.random()*1e7)}`, this.resetNextScroll = !0, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = new Set, this.isScrollRestoring = !1, this.isScrollRestorationSetup = !1, this.startTransition = s => s(), this.update = s => {
                const o = this.options,
                    c = this.basepath ? ? o ? .basepath ? ? "/",
                    f = this.basepath === void 0,
                    d = o ? .rewrite;
                if (this.options = { ...o,
                        ...s
                    }, this.isServer = this.options.isServer ? ? typeof document > "u", this.protocolAllowlist = new Set(this.options.protocolAllowlist), this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = j1(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = iS()), this.origin = this.options.origin, this.origin || (window ? .origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"), this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
                    this.routeTree = this.options.routeTree;
                    let v;
                    this.resolvePathCache = Cr(1e3), v = this.buildRouteTree(), this.setRoutes(v)
                }
                if (!this.stores && this.latestLocation) {
                    const v = this.getStoreConfig(this);
                    this.batch = v.batch, this.stores = J1(cS(this.latestLocation), v), Y1(this)
                }
                let m = !1;
                const y = this.options.basepath ? ? "/",
                    g = this.options.rewrite;
                if (f || c !== y || d !== g) {
                    this.basepath = y;
                    const v = [],
                        h = sy(y);
                    h && h !== "/" && v.push(Z1({
                        basepath: y
                    })), g && v.push(g), this.rewrite = v.length === 0 ? void 0 : v.length === 1 ? v[0] : F1(v), this.history && this.updateLatestLocation(), m = !0
                }
                m && this.stores && this.stores.location.set(this.latestLocation), typeof window < "u" && "CSS" in window && typeof window.CSS ? .supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
            }, this.updateLatestLocation = () => {
                this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
            }, this.buildRouteTree = () => {
                const s = C1(this.routeTree, this.options.caseSensitive, (o, c) => {
                    o.init({
                        originalIndex: c
                    })
                });
                return this.options.routeMasks && w1(this.options.routeMasks, s.processedTree), s
            }, this.subscribe = (s, o) => {
                const c = {
                    eventType: s,
                    fn: o
                };
                return this.subscribers.add(c), () => {
                    this.subscribers.delete(c)
                }
            }, this.emit = s => {
                this.subscribers.forEach(o => {
                    o.eventType === s.type && o.fn(s)
                })
            }, this.parseLocation = (s, o) => {
                const c = ({
                        pathname: y,
                        search: g,
                        hash: v,
                        href: h,
                        state: S
                    }) => {
                        if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(y)) {
                            const R = this.options.parseSearch(g),
                                q = this.options.stringifySearch(R);
                            return {
                                href: y + q + v,
                                publicHref: y + q + v,
                                pathname: yr(y).path,
                                external: !1,
                                searchStr: q,
                                search: vi(o ? .search, R),
                                hash: yr(v.slice(1)).path,
                                state: Ba(o ? .state, S)
                            }
                        }
                        const x = new URL(h, this.origin),
                            E = cf(this.rewrite, x),
                            M = this.options.parseSearch(E.search),
                            _ = this.options.stringifySearch(M);
                        return E.search = _, {
                            href: E.href.replace(E.origin, ""),
                            publicHref: h,
                            pathname: yr(E.pathname).path,
                            external: !!this.rewrite && E.origin !== this.origin,
                            searchStr: _,
                            search: vi(o ? .search, M),
                            hash: yr(E.hash.slice(1)).path,
                            state: Ba(o ? .state, S)
                        }
                    },
                    f = c(s),
                    {
                        __tempLocation: d,
                        __tempKey: m
                    } = f.state;
                if (d && (!m || m === this.tempLocationKey)) {
                    const y = c(d);
                    return y.state.key = f.state.key, y.state.__TSR_key = f.state.__TSR_key, delete y.state.__tempLocation, { ...y,
                        maskedLocation: f
                    }
                }
                return f
            }, this.resolvePathWithBase = (s, o) => D1({
                base: s,
                to: Tf(o),
                trailingSlash: this.options.trailingSlash,
                cache: this.resolvePathCache
            }), this.matchRoutes = (s, o, c) => typeof s == "string" ? this.matchRoutesInternal({
                pathname: s,
                search: o
            }, c) : this.matchRoutesInternal(s, o), this.getMatchedRoutes = s => uS({
                pathname: s,
                routesById: this.routesById,
                processedTree: this.processedTree
            }), this.cancelMatch = s => {
                const o = this.getMatch(s);
                o && (o.abortController.abort(), clearTimeout(o._nonReactive.pendingTimeout), o._nonReactive.pendingTimeout = void 0)
            }, this.cancelMatches = () => {
                this.stores.pendingIds.get().forEach(s => {
                    this.cancelMatch(s)
                }), this.stores.matchesId.get().forEach(s => {
                    if (this.stores.pendingMatchStores.has(s)) return;
                    const o = this.stores.matchStores.get(s) ? .get();
                    o && (o.status === "pending" || o.isFetching === "loader") && this.cancelMatch(s)
                })
            }, this.buildLocation = s => {
                const o = (f = {}) => {
                        const d = f._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                            m = this.matchRoutesLightweight(d);
                        f.from;
                        const y = f.unsafeRelative === "path" ? d.pathname : f.from ? ? m.fullPath,
                            g = this.resolvePathWithBase(y, "."),
                            v = m.search,
                            h = Object.assign(Object.create(null), m.params),
                            S = f.to ? this.resolvePathWithBase(g, `${f.to}`) : this.resolvePathWithBase(g, "."),
                            x = f.params === !1 || f.params === null ? Object.create(null) : (f.params ? ? !0) === !0 ? h : Object.assign(h, Ua(f.params, h)),
                            E = this.getMatchedRoutes(S);
                        let M = E.matchedRoutes;
                        if ((!E.foundRoute || E.foundRoute.path !== "/" && E.routeParams["**"]) && this.options.notFoundRoute && (M = [...M, this.options.notFoundRoute]), Object.keys(x).length > 0)
                            for (const ut of M) {
                                const st = ut.options.params ? .stringify ? ? ut.options.stringifyParams;
                                if (st) try {
                                    Object.assign(x, st(x))
                                } catch {}
                            }
                        const _ = s.leaveParams ? S : yr(Pp({
                            path: S,
                            params: x,
                            decoder: this.pathParamsDecoder,
                            server: this.isServer
                        }).interpolatedPath).path;
                        let R = v;
                        if (s._includeValidateSearch && this.options.search ? .strict) {
                            const ut = {};
                            M.forEach(st => {
                                if (st.options.validateSearch) try {
                                    Object.assign(ut, sl(st.options.validateSearch, { ...ut,
                                        ...R
                                    }))
                                } catch {}
                            }), R = ut
                        }
                        R = fS({
                            search: R,
                            dest: f,
                            destRoutes: M,
                            _includeValidateSearch: s._includeValidateSearch
                        }), R = vi(v, R);
                        const q = this.options.stringifySearch(R),
                            Y = f.hash === !0 ? d.hash : f.hash ? Ua(f.hash, d.hash) : void 0,
                            H = Y ? `#${Y}` : "";
                        let nt = f.state === !0 ? d.state : f.state ? Ua(f.state, d.state) : {};
                        nt = Ba(d.state, nt);
                        const I = `${_}${q}${H}`;
                        let P, j, W = !1;
                        if (this.rewrite) {
                            const ut = new URL(I, this.origin),
                                st = ly(this.rewrite, ut);
                            P = ut.href.replace(ut.origin, ""), st.origin !== this.origin ? (j = st.href, W = !0) : j = st.pathname + st.search + st.hash
                        } else P = b1(I), j = P;
                        return {
                            publicHref: j,
                            href: P,
                            pathname: _,
                            search: R,
                            searchStr: q,
                            state: nt,
                            hash: Y ? ? "",
                            external: W,
                            unmaskOnReload: f.unmaskOnReload
                        }
                    },
                    c = (f = {}, d) => {
                        const m = o(f);
                        let y = d ? o(d) : void 0;
                        if (!y) {
                            const g = Object.create(null);
                            if (this.options.routeMasks) {
                                const v = _1(m.pathname, this.processedTree);
                                if (v) {
                                    Object.assign(g, v.rawParams);
                                    const {
                                        from: h,
                                        params: S,
                                        ...x
                                    } = v.route, E = S === !1 || S === null ? Object.create(null) : (S ? ? !0) === !0 ? g : Object.assign(g, Ua(S, g));
                                    d = {
                                        from: s.from,
                                        ...x,
                                        params: E
                                    }, y = o(d)
                                }
                            }
                        }
                        return y && (m.maskedLocation = y), m
                    };
                return s.mask ? c(s, {
                    from: s.from,
                    ...s.mask
                }) : c(s)
            }, this.commitLocation = async ({
                viewTransition: s,
                ignoreBlocker: o,
                ...c
            }) => {
                const f = () => {
                        const y = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                        y.forEach(v => {
                            c.state[v] = this.latestLocation.state[v]
                        });
                        const g = Pe(c.state, this.latestLocation.state);
                        return y.forEach(v => {
                            delete c.state[v]
                        }), g
                    },
                    d = qa(this.latestLocation.href) === qa(c.href);
                let m = this.commitLocationPromise;
                if (this.commitLocationPromise = Ei(() => {
                        m ? .resolve(), m = void 0
                    }), d && f()) this.load();
                else {
                    let {
                        maskedLocation: y,
                        hashScrollIntoView: g,
                        ...v
                    } = c;
                    y && (v = { ...y,
                        state: { ...y.state,
                            __tempKey: void 0,
                            __tempLocation: { ...v,
                                search: v.searchStr,
                                state: { ...v.state,
                                    __tempKey: void 0,
                                    __tempLocation: void 0,
                                    __TSR_key: void 0,
                                    key: void 0
                                }
                            }
                        }
                    }, (v.unmaskOnReload ? ? this.options.unmaskOnReload ? ? !1) && (v.state.__tempKey = this.tempLocationKey)), v.state.__hashScrollIntoViewOptions = g ? ? this.options.defaultHashScrollIntoView ? ? !0, this.shouldViewTransition = s, this.history[c.replace ? "replace" : "push"](v.publicHref, v.state, {
                        ignoreBlocker: o
                    })
                }
                return this.resetNextScroll = c.resetScroll ? ? !0, this.history.subscribers.size || this.load(), this.commitLocationPromise
            }, this.buildAndCommitLocation = ({
                replace: s,
                resetScroll: o,
                hashScrollIntoView: c,
                viewTransition: f,
                ignoreBlocker: d,
                href: m,
                ...y
            } = {}) => {
                if (m) {
                    const h = this.history.location.state.__TSR_index,
                        S = ul(m, {
                            __TSR_index: s ? h : h + 1
                        }),
                        x = new URL(S.pathname, this.origin);
                    y.to = cf(this.rewrite, x).pathname, y.search = this.options.parseSearch(S.search), y.hash = S.hash.slice(1)
                }
                const g = this.buildLocation({ ...y,
                    _includeValidateSearch: !0
                });
                this.pendingBuiltLocation = g;
                const v = this.commitLocation({ ...g,
                    viewTransition: f,
                    replace: s,
                    resetScroll: o,
                    hashScrollIntoView: c,
                    ignoreBlocker: d
                });
                return Promise.resolve().then(() => {
                    this.pendingBuiltLocation === g && (this.pendingBuiltLocation = void 0)
                }), v
            }, this.navigate = async ({
                to: s,
                reloadDocument: o,
                href: c,
                publicHref: f,
                ...d
            }) => {
                let m = !1;
                if (c) try {
                    new URL(`${c}`), m = !0
                } catch {}
                if (m && !o && (o = !0), o) {
                    if (s !== void 0 || !c) {
                        const g = this.buildLocation({
                            to: s,
                            ...d
                        });
                        c = c ? ? g.publicHref, f = f ? ? g.publicHref
                    }
                    const y = !m && f ? f : c;
                    if (ll(y, this.protocolAllowlist)) return Promise.resolve();
                    if (!d.ignoreBlocker) {
                        const g = this.history.getBlockers ? .() ? ? [];
                        for (const v of g)
                            if (v ? .blockerFn && await v.blockerFn({
                                    currentLocation: this.latestLocation,
                                    nextLocation: this.latestLocation,
                                    action: "PUSH"
                                })) return Promise.resolve()
                    }
                    return d.replace ? window.location.replace(y) : window.location.href = y, Promise.resolve()
                }
                return this.buildAndCommitLocation({ ...d,
                    href: c,
                    to: s,
                    _isNavigate: !0
                })
            }, this.beforeLoad = () => {
                this.cancelMatches(), this.updateLatestLocation();
                const s = this.matchRoutes(this.latestLocation),
                    o = this.stores.cachedMatches.get().filter(c => !s.some(f => f.id === c.id));
                this.batch(() => {
                    this.stores.status.set("pending"), this.stores.statusCode.set(200), this.stores.isLoading.set(!0), this.stores.location.set(this.latestLocation), this.stores.setPending(s), this.stores.setCached(o)
                })
            }, this.load = async s => {
                let o, c, f;
                const d = this.stores.resolvedLocation.get() ? ? this.stores.location.get();
                for (f = new Promise(y => {
                        this.startTransition(async () => {
                            try {
                                this.beforeLoad();
                                const g = this.latestLocation,
                                    v = bs(g, this.stores.resolvedLocation.get());
                                this.stores.redirect.get() || this.emit({
                                    type: "onBeforeNavigate",
                                    ...v
                                }), this.emit({
                                    type: "onBeforeLoad",
                                    ...v
                                }), await $p({
                                    router: this,
                                    sync: s ? .sync,
                                    forceStaleReload: d.href === g.href,
                                    matches: this.stores.pendingMatches.get(),
                                    location: g,
                                    updateMatch: this.updateMatch,
                                    onReady: async () => {
                                        this.startTransition(() => {
                                            this.startViewTransition(async () => {
                                                let h = null,
                                                    S = null,
                                                    x = null,
                                                    E = null;
                                                this.batch(() => {
                                                    const M = this.stores.pendingMatches.get(),
                                                        _ = M.length,
                                                        R = this.stores.matches.get();
                                                    h = _ ? R.filter(H => !this.stores.pendingMatchStores.has(H.id)) : null;
                                                    const q = new Set;
                                                    for (const H of this.stores.pendingMatchStores.values()) H.routeId && q.add(H.routeId);
                                                    const Y = new Set;
                                                    for (const H of this.stores.matchStores.values()) H.routeId && Y.add(H.routeId);
                                                    S = _ ? R.filter(H => !q.has(H.routeId)) : null, x = _ ? M.filter(H => !Y.has(H.routeId)) : null, E = _ ? M.filter(H => Y.has(H.routeId)) : R, this.stores.isLoading.set(!1), this.stores.loadedAt.set(Date.now()), _ && (this.stores.setMatches(M), this.stores.setPending([]), this.stores.setCached([...this.stores.cachedMatches.get(), ...h.filter(H => H.status !== "error" && H.status !== "notFound" && H.status !== "redirected")]), this.clearExpiredCache())
                                                });
                                                for (const [M, _] of [
                                                        [S, "onLeave"],
                                                        [x, "onEnter"],
                                                        [E, "onStay"]
                                                    ])
                                                    if (M)
                                                        for (const R of M) this.looseRoutesById[R.routeId].options[_] ? .(R)
                                            })
                                        })
                                    }
                                })
                            } catch (g) {
                                Xe(g) ? (o = g, this.navigate({ ...o.options,
                                    replace: !0,
                                    ignoreBlocker: !0
                                })) : be(g) && (c = g);
                                const v = o ? o.status : c ? 404 : this.stores.matches.get().some(h => h.status === "error") ? 500 : 200;
                                this.batch(() => {
                                    this.stores.statusCode.set(v), this.stores.redirect.set(o)
                                })
                            }
                            this.latestLoadPromise === f && (this.commitLocationPromise ? .resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), y()
                        })
                    }), this.latestLoadPromise = f, await f; this.latestLoadPromise && f !== this.latestLoadPromise;) await this.latestLoadPromise;
                let m;
                this.hasNotFoundMatch() ? m = 404 : this.stores.matches.get().some(y => y.status === "error") && (m = 500), m !== void 0 && this.stores.statusCode.set(m)
            }, this.startViewTransition = s => {
                const o = this.shouldViewTransition ? ? this.options.defaultViewTransition;
                if (this.shouldViewTransition = void 0, o && typeof document < "u" && "startViewTransition" in document && typeof document.startViewTransition == "function") {
                    let c;
                    if (typeof o == "object" && this.isViewTransitionTypesSupported) {
                        const f = this.latestLocation,
                            d = this.stores.resolvedLocation.get(),
                            m = typeof o.types == "function" ? o.types(bs(f, d)) : o.types;
                        if (m === !1) {
                            s();
                            return
                        }
                        c = {
                            update: s,
                            types: m
                        }
                    } else c = s;
                    document.startViewTransition(c)
                } else s()
            }, this.updateMatch = (s, o) => {
                this.startTransition(() => {
                    const c = this.stores.pendingMatchStores.get(s);
                    if (c) {
                        c.set(o);
                        return
                    }
                    const f = this.stores.matchStores.get(s);
                    if (f) {
                        f.set(o);
                        return
                    }
                    const d = this.stores.cachedMatchStores.get(s);
                    if (d) {
                        const m = o(d.get());
                        m.status === "redirected" ? this.stores.cachedMatchStores.delete(s) && this.stores.cachedIds.set(y => y.filter(g => g !== s)) : d.set(m)
                    }
                })
            }, this.getMatch = s => this.stores.cachedMatchStores.get(s) ? .get() ? ? this.stores.pendingMatchStores.get(s) ? .get() ? ? this.stores.matchStores.get(s) ? .get(), this.invalidate = s => {
                const o = c => s ? .filter ? .(c) ? ? !0 ? { ...c,
                    invalid: !0,
                    ...s ? .forcePending || c.status === "error" || c.status === "notFound" ? {
                        status: "pending",
                        error: void 0
                    } : void 0
                } : c;
                return this.batch(() => {
                    this.stores.setMatches(this.stores.matches.get().map(o)), this.stores.setCached(this.stores.cachedMatches.get().map(o)), this.stores.setPending(this.stores.pendingMatches.get().map(o))
                }), this.shouldViewTransition = !1, this.load({
                    sync: s ? .sync
                })
            }, this.getParsedLocationHref = s => s.publicHref || "/", this.resolveRedirect = s => {
                const o = s.headers.get("Location");
                if (!s.options.href || s.options._builtLocation) {
                    const c = s.options._builtLocation ? ? this.buildLocation(s.options),
                        f = this.getParsedLocationHref(c);
                    s.options.href = f, s.headers.set("Location", f)
                } else if (o) try {
                    const c = new URL(o);
                    if (this.origin && c.origin === this.origin) {
                        const f = c.pathname + c.search + c.hash;
                        s.options.href = f, s.headers.set("Location", f)
                    }
                } catch {}
                if (s.options.href && !s.options._builtLocation && ll(s.options.href, this.protocolAllowlist)) throw new Error("Redirect blocked: unsafe protocol");
                return s.headers.get("Location") || s.headers.set("Location", s.options.href), s
            }, this.clearCache = s => {
                const o = s ? .filter;
                o !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(c => !o(c))) : this.stores.setCached([])
            }, this.clearExpiredCache = () => {
                const s = Date.now(),
                    o = c => {
                        const f = this.looseRoutesById[c.routeId];
                        if (!f.options.loader) return !0;
                        const d = (c.preload ? f.options.preloadGcTime ? ? this.options.defaultPreloadGcTime : f.options.gcTime ? ? this.options.defaultGcTime) ? ? 300 * 1e3;
                        return c.status === "error" ? !0 : s - c.updatedAt >= d
                    };
                this.clearCache({
                    filter: o
                })
            }, this.loadRouteChunk = Ar, this.preloadRoute = async s => {
                const o = s._builtLocation ? ? this.buildLocation(s);
                let c = this.matchRoutes(o, {
                    throwOnError: !0,
                    preload: !0,
                    dest: s
                });
                const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
                    d = new Set([...f, ...this.stores.cachedIds.get()]),
                    m = c.filter(y => !d.has(y.id));
                if (m.length) {
                    const y = this.stores.cachedMatches.get();
                    this.stores.setCached([...y, ...m])
                }
                try {
                    return c = await $p({
                        router: this,
                        matches: c,
                        location: o,
                        preload: !0,
                        updateMatch: (y, g) => {
                            f.has(y) ? c = c.map(v => v.id === y ? g(v) : v) : this.updateMatch(y, g)
                        }
                    }), c
                } catch (y) {
                    if (Xe(y)) return y.options.reloadDocument ? void 0 : await this.preloadRoute({ ...y.options,
                        _fromLocation: o
                    });
                    be(y) || console.error(y);
                    return
                }
            }, this.matchRoute = (s, o) => {
                const c = { ...s,
                        to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
                        params: s.params || {},
                        leaveParams: !0
                    },
                    f = this.buildLocation(c);
                if (o ? .pending && this.stores.status.get() !== "pending") return !1;
                const d = (o ? .pending === void 0 ? !this.stores.isLoading.get() : o.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get(),
                    m = E1(f.pathname, o ? .caseSensitive ? ? !1, o ? .fuzzy ? ? !1, d.pathname, this.processedTree);
                return !m || s.params && !Pe(m.rawParams, s.params, {
                    partial: !0
                }) ? !1 : o ? .includeSearch ? ? !0 ? Pe(d.search, f.search, {
                    partial: !0
                }) ? m.rawParams : !1 : m.rawParams
            }, this.hasNotFoundMatch = () => this.stores.matches.get().some(s => s.status === "notFound" || s.globalNotFound), this.getStoreConfig = i, this.update({
                defaultPreloadDelay: 50,
                defaultPendingMs: 1e3,
                defaultPendingMinMs: 500,
                context: void 0,
                ...n,
                caseSensitive: n.caseSensitive ? ? !1,
                notFoundMode: n.notFoundMode ? ? "fuzzy",
                stringifySearch: n.stringifySearch ? ? Q1,
                parseSearch: n.parseSearch ? ? V1,
                protocolAllowlist: n.protocolAllowlist ? ? p1
            }), typeof document < "u" && (self.__TSR_ROUTER__ = this)
        }
        isShell() {
            return !!this.options.isShell
        }
        isPrerendering() {
            return !!this.options.isPrerendering
        }
        get state() {
            return this.stores.__store.get()
        }
        setRoutes({
            routesById: n,
            routesByPath: i,
            processedTree: s
        }) {
            this.routesById = n, this.routesByPath = i, this.processedTree = s;
            const o = this.options.notFoundRoute;
            o && (o.init({
                originalIndex: 99999999999
            }), this.routesById[o.id] = o)
        }
        get looseRoutesById() {
            return this.routesById
        }
        getParentContext(n) {
            return n ? .id ? n.context ? ? this.options.context ? ? void 0 : this.options.context ? ? void 0
        }
        matchRoutesInternal(n, i) {
            const s = this.getMatchedRoutes(n.pathname),
                {
                    foundRoute: o,
                    routeParams: c,
                    parsedParams: f
                } = s;
            let {
                matchedRoutes: d
            } = s, m = !1;
            (o ? o.path !== "/" && c["**"] : qa(n.pathname)) && (this.options.notFoundRoute ? d = [...d, this.options.notFoundRoute] : m = !0);
            const y = m ? hS(this.options.notFoundMode, d) : void 0,
                g = new Array(d.length),
                v = new Map;
            for (const h of this.stores.matchStores.values()) h.routeId && v.set(h.routeId, h.get());
            for (let h = 0; h < d.length; h++) {
                const S = d[h],
                    x = g[h - 1];
                let E, M, _; {
                    const bt = x ? .search ? ? n.search,
                        jt = x ? ._strictSearch ? ? void 0;
                    try {
                        const Et = sl(S.options.validateSearch, { ...bt
                        }) ? ? void 0;
                        E = { ...bt,
                            ...Et
                        }, M = { ...jt,
                            ...Et
                        }, _ = void 0
                    } catch (Et) {
                        let D = Et;
                        if (Et instanceof fl || (D = new fl(Et.message, {
                                cause: Et
                            })), i ? .throwOnError) throw D;
                        E = bt, M = {}, _ = D
                    }
                }
                const R = S.options.loaderDeps ? .({
                        search: E
                    }) ? ? "",
                    q = R ? JSON.stringify(R) : "",
                    {
                        interpolatedPath: Y,
                        usedParams: H
                    } = Pp({
                        path: S.fullPath,
                        params: c,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer
                    }),
                    nt = S.id + Y + q,
                    I = this.getMatch(nt),
                    P = v.get(S.id),
                    j = I ? ._strictParams ? ? H;
                let W;
                if (!I) try {
                    ag(S, H, f, j)
                } catch (bt) {
                    if (be(bt) || Xe(bt) ? W = bt : W = new lS(bt.message, {
                            cause: bt
                        }), i ? .throwOnError) throw W
                }
                Object.assign(c, j);
                const ut = P ? "stay" : "enter";
                let st;
                if (I) st = { ...I,
                    cause: ut,
                    params: P ? .params ? ? c,
                    _strictParams: j,
                    search: vi(P ? P.search : I.search, E),
                    _strictSearch: M
                };
                else {
                    const bt = S.options.loader || S.options.beforeLoad || S.lazyFn || dy(S) ? "pending" : "success";
                    st = {
                        id: nt,
                        ssr: S.options.ssr,
                        index: h,
                        routeId: S.id,
                        params: P ? .params ? ? c,
                        _strictParams: j,
                        pathname: Y,
                        updatedAt: Date.now(),
                        search: P ? vi(P.search, E) : E,
                        _strictSearch: M,
                        searchError: void 0,
                        status: bt,
                        isFetching: !1,
                        error: void 0,
                        paramsError: W,
                        __routeContext: void 0,
                        _nonReactive: {
                            loadPromise: Ei()
                        },
                        __beforeLoadContext: void 0,
                        context: {},
                        abortController: new AbortController,
                        fetchCount: 0,
                        cause: ut,
                        loaderDeps: P ? Ba(P.loaderDeps, R) : R,
                        invalid: !1,
                        preload: !1,
                        links: void 0,
                        scripts: void 0,
                        headScripts: void 0,
                        meta: void 0,
                        staticData: S.options.staticData || {},
                        fullPath: S.fullPath
                    }
                }
                i ? .preload || (st.globalNotFound = y === S.id), st.searchError = _;
                const pt = this.getParentContext(x);
                st.context = { ...pt,
                    ...st.__routeContext,
                    ...st.__beforeLoadContext
                }, g[h] = st
            }
            for (let h = 0; h < g.length; h++) {
                const S = g[h],
                    x = this.looseRoutesById[S.routeId],
                    E = this.getMatch(S.id),
                    M = v.get(S.routeId);
                if (S.params = M ? vi(M.params, c) : c, !E) {
                    const _ = g[h - 1],
                        R = this.getParentContext(_);
                    if (x.options.context) {
                        const q = {
                            deps: S.loaderDeps,
                            params: S.params,
                            context: R ? ? {},
                            location: n,
                            navigate: Y => this.navigate({ ...Y,
                                _fromLocation: n
                            }),
                            buildLocation: this.buildLocation,
                            cause: S.cause,
                            abortController: S.abortController,
                            preload: !!S.preload,
                            matches: g,
                            routeId: x.id
                        };
                        S.__routeContext = x.options.context(q) ? ? void 0
                    }
                    S.context = { ...R,
                        ...S.__routeContext,
                        ...S.__beforeLoadContext
                    }
                }
            }
            return g
        }
        matchRoutesLightweight(n) {
            const {
                matchedRoutes: i,
                routeParams: s,
                parsedParams: o
            } = this.getMatchedRoutes(n.pathname), c = Rr(i), f = { ...n.search
            };
            for (const v of i) try {
                Object.assign(f, sl(v.options.validateSearch, f))
            } catch {}
            const d = Rr(this.stores.matchesId.get()),
                m = d && this.stores.matchStores.get(d) ? .get(),
                y = m && m.routeId === c.id && m.pathname === n.pathname;
            let g;
            if (y) g = m.params;
            else {
                const v = Object.assign(Object.create(null), s);
                for (const h of i) try {
                    ag(h, s, o ? ? {}, v)
                } catch {}
                g = v
            }
            return {
                matchedRoutes: i,
                fullPath: c.fullPath,
                search: f,
                params: g
            }
        }
    },
    fl = class extends Error {},
    lS = class extends Error {};

function cS(n) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: n,
        matches: [],
        statusCode: 200
    }
}

function sl(n, i) {
    if (n == null) return {};
    if ("~standard" in n) {
        const s = n["~standard"].validate(i);
        if (s instanceof Promise) throw new fl("Async validation not supported");
        if (s.issues) throw new fl(JSON.stringify(s.issues, void 0, 2), {
            cause: s
        });
        return s.value
    }
    return "parse" in n ? n.parse(i) : typeof n == "function" ? n(i) : {}
}

function uS({
    pathname: n,
    routesById: i,
    processedTree: s
}) {
    const o = Object.create(null),
        c = qa(n);
    let f, d;
    const m = R1(c, s, !0);
    return m && (f = m.route, Object.assign(o, m.rawParams), d = Object.assign(Object.create(null), m.parsedParams)), {
        matchedRoutes: m ? .branch || [i.__root__],
        routeParams: o,
        foundRoute: f,
        parsedParams: d
    }
}

function fS({
    search: n,
    dest: i,
    destRoutes: s,
    _includeValidateSearch: o
}) {
    return dS(s)(n, i, o ? ? !1)
}

function dS(n) {
    const i = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const c of n) {
        if ("search" in c.options) c.options.search ? .middlewares && i.middlewares.push(...c.options.search.middlewares);
        else if (c.options.preSearchFilters || c.options.postSearchFilters) {
            const f = ({
                search: d,
                next: m
            }) => {
                let y = d;
                "preSearchFilters" in c.options && c.options.preSearchFilters && (y = c.options.preSearchFilters.reduce((v, h) => h(v), d));
                const g = m(y);
                return "postSearchFilters" in c.options && c.options.postSearchFilters ? c.options.postSearchFilters.reduce((v, h) => h(v), g) : g
            };
            i.middlewares.push(f)
        }
        if (c.options.validateSearch) {
            const f = ({
                search: d,
                next: m
            }) => {
                const y = m(d);
                if (!i._includeValidateSearch) return y;
                try {
                    return { ...y,
                        ...sl(c.options.validateSearch, y) ? ? void 0
                    }
                } catch {
                    return y
                }
            };
            i.middlewares.push(f)
        }
    }
    const s = ({
        search: c
    }) => {
        const f = i.dest;
        return f.search ? f.search === !0 ? c : Ua(f.search, c) : {}
    };
    i.middlewares.push(s);
    const o = (c, f, d) => {
        if (c >= d.length) return f;
        const m = d[c];
        return m({
            search: f,
            next: g => o(c + 1, g, d)
        })
    };
    return function(f, d, m) {
        return i.dest = d, i._includeValidateSearch = m, o(0, f, i.middlewares)
    }
}

function hS(n, i) {
    if (n !== "root")
        for (let s = i.length - 1; s >= 0; s--) {
            const o = i[s];
            if (o.children) return o.id
        }
    return wi
}

function ag(n, i, s, o) {
    const c = n.options.params ? .parse ? ? n.options.parseParams;
    if (c)
        if (n.options.skipRouteOnParseError)
            for (const f in i) f in s && (o[f] = s[f]);
        else {
            const f = c(o);
            Object.assign(o, f)
        }
}
var Nn = Symbol.for("TSR_DEFERRED_PROMISE");

function mS(n, i) {
    const s = n;
    return s[Nn] || (s[Nn] = {
        status: "pending"
    }, s.then(o => {
        s[Nn].status = "success", s[Nn].data = o
    }).catch(o => {
        s[Nn].status = "error", s[Nn].error = {
            data: rS(o),
            __isServerError: !0
        }
    })), s
}
var pS = "Error preloading route! ☝️";

function ig(n, i) {
    if (n) return typeof n == "string" ? n : n[i]
}

function gS(n) {
    return typeof n == "string" ? {
        href: n,
        crossOrigin: void 0
    } : n
}

function yS(n) {
    if (n.tag !== "link") return;
    const i = n.attrs ? .rel,
        s = n.attrs ? .href;
    if (typeof s == "string" && (typeof i == "string" ? i.split(/\s+/) : []).includes("stylesheet")) return s
}

function vS(n, i) {
    const s = yS(i);
    return !!s && n ? .inlineCss ? .styles[s] !== void 0
}
var hy = class {
        get to() {
            return this._to
        }
        get id() {
            return this._id
        }
        get path() {
            return this._path
        }
        get fullPath() {
            return this._fullPath
        }
        constructor(n) {
            if (this.init = i => {
                    this.originalIndex = i.originalIndex;
                    const s = this.options,
                        o = !s ? .path && !s ? .id;
                    this.parentRoute = this.options.getParentRoute ? .(), o ? this._path = wi : this.parentRoute || Ke();
                    let c = o ? wi : s ? .path;
                    c && c !== "/" && (c = iy(c));
                    const f = s ? .id || c;
                    let d = o ? wi : al([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
                    c === "__root__" && (c = "/"), d !== "__root__" && (d = al(["/", d]));
                    const m = d === "__root__" ? "/" : al([this.parentRoute.fullPath, c]);
                    this._path = c, this._id = d, this._fullPath = m, this._to = qa(m)
                }, this.addChildren = i => this._addFileChildren(i), this._addFileChildren = i => (Array.isArray(i) && (this.children = i), typeof i == "object" && i !== null && (this.children = Object.values(i)), this), this._addFileTypes = () => this, this.updateLoader = i => (Object.assign(this.options, i), this), this.update = i => (Object.assign(this.options, i), this), this.lazy = i => (this.lazyFn = i, this), this.redirect = i => oy({
                    from: this.fullPath,
                    ...i
                }), this.options = n || {}, this.isRoot = !n ? .getParentRoute, n ? .id && n ? .path) throw new Error("Route cannot have both an 'id' and a 'path' option.")
        }
    },
    bS = class extends hy {
        constructor(n) {
            super(n)
        }
    };

function SS(n) {
    if (typeof document < "u" && document.querySelector) {
        const i = n.stores.location.get(),
            s = i.state.__hashScrollIntoViewOptions ? ? !0;
        if (s && i.hash !== "") {
            const o = document.getElementById(i.hash);
            o && o.scrollIntoView(s)
        }
    }
}
var xS = (n => (n[n.AggregateError = 1] = "AggregateError", n[n.ArrowFunction = 2] = "ArrowFunction", n[n.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", n[n.ObjectAssign = 8] = "ObjectAssign", n[n.BigIntTypedArray = 16] = "BigIntTypedArray", n[n.RegExp = 32] = "RegExp", n))(xS || {}),
    na = Symbol.asyncIterator,
    my = Symbol.hasInstance,
    Ss = Symbol.isConcatSpreadable,
    aa = Symbol.iterator,
    py = Symbol.match,
    gy = Symbol.matchAll,
    yy = Symbol.replace,
    vy = Symbol.search,
    by = Symbol.species,
    Sy = Symbol.split,
    xy = Symbol.toPrimitive,
    xs = Symbol.toStringTag,
    wy = Symbol.unscopables,
    _y = {
        [na]: 0,
        [my]: 1,
        [Ss]: 2,
        [aa]: 3,
        [py]: 4,
        [gy]: 5,
        [yy]: 6,
        [vy]: 7,
        [by]: 8,
        [Sy]: 9,
        [xy]: 10,
        [xs]: 11,
        [wy]: 12
    },
    wS = {
        0: na,
        1: my,
        2: Ss,
        3: aa,
        4: py,
        5: gy,
        6: yy,
        7: vy,
        8: by,
        9: Sy,
        10: xy,
        11: xs,
        12: wy
    },
    w = void 0,
    _S = {
        2: !0,
        3: !1,
        1: w,
        0: null,
        4: -0,
        5: Number.POSITIVE_INFINITY,
        6: Number.NEGATIVE_INFINITY,
        7: Number.NaN
    },
    ES = {
        0: "Error",
        1: "EvalError",
        2: "RangeError",
        3: "ReferenceError",
        4: "SyntaxError",
        5: "TypeError",
        6: "URIError"
    },
    RS = {
        0: Error,
        1: EvalError,
        2: RangeError,
        3: ReferenceError,
        4: SyntaxError,
        5: TypeError,
        6: URIError
    };

function Nt(n, i, s, o, c, f, d, m, y, g, v, h) {
    return {
        t: n,
        i,
        s,
        c: o,
        m: c,
        p: f,
        e: d,
        a: m,
        f: y,
        b: g,
        o: v,
        l: h
    }
}

function Va(n) {
    return Nt(2, w, n, w, w, w, w, w, w, w, w, w)
}
var Ey = Va(2),
    Ry = Va(3),
    TS = Va(1),
    CS = Va(0),
    AS = Va(4),
    MS = Va(5),
    OS = Va(6),
    zS = Va(7);

function NS(n) {
    switch (n) {
        case '"':
            return '\\"';
        case "\\":
            return "\\\\";
        case `
`:
            return "\\n";
        case "\r":
            return "\\r";
        case "\b":
            return "\\b";
        case "	":
            return "\\t";
        case "\f":
            return "\\f";
        case "<":
            return "\\x3C";
        case "\u2028":
            return "\\u2028";
        case "\u2029":
            return "\\u2029";
        default:
            return w
    }
}

function Qa(n) {
    let i = "",
        s = 0,
        o;
    for (let c = 0, f = n.length; c < f; c++) o = NS(n[c]), o && (i += n.slice(s, c) + o, s = c + 1);
    return s === 0 ? i = n : i += n.slice(s), i
}

function DS(n) {
    switch (n) {
        case "\\\\":
            return "\\";
        case '\\"':
            return '"';
        case "\\n":
            return `
`;
        case "\\r":
            return "\r";
        case "\\b":
            return "\b";
        case "\\t":
            return "	";
        case "\\f":
            return "\f";
        case "\\x3C":
            return "<";
        case "\\u2028":
            return "\u2028";
        case "\\u2029":
            return "\u2029";
        default:
            return n
    }
}

function Pa(n) {
    return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, DS)
}
var Io = "__SEROVAL_REFS__",
    Ty = new Map,
    ys = new Map;

function Cy(n) {
    return Ty.has(n)
}

function jS(n) {
    return ys.has(n)
}

function LS(n) {
    if (Cy(n)) return Ty.get(n);
    throw new dx(n)
}

function US(n) {
    if (jS(n)) return ys.get(n);
    throw new hx(n)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, Io, {
    value: ys,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, Io, {
    value: ys,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, Io, {
    value: ys,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, Io, {
    value: ys,
    configurable: !0,
    writable: !1,
    enumerable: !1
});

function Af(n) {
    return n instanceof EvalError ? 1 : n instanceof RangeError ? 2 : n instanceof ReferenceError ? 3 : n instanceof SyntaxError ? 4 : n instanceof TypeError ? 5 : n instanceof URIError ? 6 : 0
}

function BS(n) {
    let i = ES[Af(n)];
    return n.name !== i ? {
        name: n.name
    } : n.constructor.name !== i ? {
        name: n.constructor.name
    } : {}
}

function Ay(n, i) {
    let s = BS(n),
        o = Object.getOwnPropertyNames(n);
    for (let c = 0, f = o.length, d; c < f; c++) d = o[c], d !== "name" && d !== "message" && (d === "stack" ? i & 4 && (s = s || {}, s[d] = n[d]) : (s = s || {}, s[d] = n[d]));
    return s
}

function My(n) {
    return Object.isFrozen(n) ? 3 : Object.isSealed(n) ? 2 : Object.isExtensible(n) ? 0 : 1
}

function kS(n) {
    switch (n) {
        case Number.POSITIVE_INFINITY:
            return MS;
        case Number.NEGATIVE_INFINITY:
            return OS
    }
    return n !== n ? zS : Object.is(n, -0) ? AS : Nt(0, w, n, w, w, w, w, w, w, w, w, w)
}

function Oy(n) {
    return Nt(1, w, Qa(n), w, w, w, w, w, w, w, w, w)
}

function HS(n) {
    return Nt(3, w, "" + n, w, w, w, w, w, w, w, w, w)
}

function qS(n) {
    return Nt(4, n, w, w, w, w, w, w, w, w, w, w)
}

function YS(n, i) {
    let s = i.valueOf();
    return Nt(5, n, s !== s ? "" : i.toISOString(), w, w, w, w, w, w, w, w, w)
}

function GS(n, i) {
    return Nt(6, n, w, Qa(i.source), i.flags, w, w, w, w, w, w, w)
}

function VS(n, i) {
    return Nt(17, n, _y[i], w, w, w, w, w, w, w, w, w)
}

function QS(n, i) {
    return Nt(18, n, Qa(LS(i)), w, w, w, w, w, w, w, w, w)
}

function PS(n, i, s) {
    return Nt(25, n, s, Qa(i), w, w, w, w, w, w, w, w)
}

function XS(n, i, s) {
    return Nt(9, n, w, w, w, w, w, s, w, w, My(i), w)
}

function KS(n, i) {
    return Nt(21, n, w, w, w, w, w, w, i, w, w, w)
}

function FS(n, i, s) {
    return Nt(15, n, w, i.constructor.name, w, w, w, w, s, i.byteOffset, w, i.length)
}

function ZS(n, i, s) {
    return Nt(16, n, w, i.constructor.name, w, w, w, w, s, i.byteOffset, w, i.byteLength)
}

function JS(n, i, s) {
    return Nt(20, n, w, w, w, w, w, w, s, i.byteOffset, w, i.byteLength)
}

function IS(n, i, s) {
    return Nt(13, n, Af(i), w, Qa(i.message), s, w, w, w, w, w, w)
}

function $S(n, i, s) {
    return Nt(14, n, Af(i), w, Qa(i.message), s, w, w, w, w, w, w)
}

function WS(n, i) {
    return Nt(7, n, w, w, w, w, w, i, w, w, w, w)
}

function tx(n, i) {
    return Nt(28, w, w, w, w, w, w, [n, i], w, w, w, w)
}

function ex(n, i) {
    return Nt(30, w, w, w, w, w, w, [n, i], w, w, w, w)
}

function nx(n, i, s) {
    return Nt(31, n, w, w, w, w, w, s, i, w, w, w)
}

function ax(n, i) {
    return Nt(32, n, w, w, w, w, w, w, i, w, w, w)
}

function ix(n, i) {
    return Nt(33, n, w, w, w, w, w, w, i, w, w, w)
}

function sx(n, i) {
    return Nt(34, n, w, w, w, w, w, w, i, w, w, w)
}

function rx(n, i, s, o) {
    return Nt(35, n, s, w, w, w, w, i, w, w, w, o)
}
var ox = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};

function lx(n) {
    return `Seroval Error (step: ${ox[n]})`
}
var cx = (n, i) => lx(n),
    zy = class extends Error {
        constructor(n, i) {
            super(cx(n)), this.cause = i
        }
    },
    sg = class extends zy {
        constructor(n) {
            super("parsing", n)
        }
    },
    ux = class extends zy {
        constructor(n) {
            super("deserialization", n)
        }
    };

function ia(n) {
    return `Seroval Error (specific: ${n})`
}
var wl = class extends Error {
        constructor(i) {
            super(ia(1)), this.value = i
        }
    },
    Ny = class extends Error {
        constructor(i) {
            super(ia(2))
        }
    },
    fx = class extends Error {
        constructor(n) {
            super(ia(3))
        }
    },
    Dr = class extends Error {
        constructor(n) {
            super(ia(4))
        }
    },
    dx = class extends Error {
        constructor(n) {
            super(ia(5)), this.value = n
        }
    },
    hx = class extends Error {
        constructor(n) {
            super(ia(6))
        }
    },
    mx = class extends Error {
        constructor(n) {
            super(ia(7))
        }
    },
    Xa = class extends Error {
        constructor(n) {
            super(ia(8))
        }
    },
    px = class extends Error {
        constructor(i) {
            super(ia(9))
        }
    },
    gx = class {
        constructor(n, i) {
            this.value = n, this.replacement = i
        }
    },
    _l = () => {
        let n = {
            p: 0,
            s: 0,
            f: 0
        };
        return n.p = new Promise((i, s) => {
            n.s = i, n.f = s
        }), n
    },
    yx = (n, i) => {
        n.s(i), n.p.s = 1, n.p.v = i
    },
    vx = (n, i) => {
        n.f(i), n.p.s = 2, n.p.v = i
    };
_l.toString();
yx.toString();
vx.toString();
var bx = () => {
        let n = [],
            i = [],
            s = !0,
            o = !1,
            c = 0,
            f = (y, g, v) => {
                for (v = 0; v < c; v++) i[v] && i[v][g](y)
            },
            d = (y, g, v, h) => {
                for (g = 0, v = n.length; g < v; g++) h = n[g], !s && g === v - 1 ? y[o ? "return" : "throw"](h) : y.next(h)
            },
            m = (y, g) => (s && (g = c++, i[g] = y), d(y), () => {
                s && (i[g] = i[c], i[c--] = void 0)
            });
        return {
            __SEROVAL_STREAM__: !0,
            on: y => m(y),
            next: y => {
                s && (n.push(y), f(y, "next"))
            },
            throw: y => {
                s && (n.push(y), f(y, "throw"), s = !1, o = !1, i.length = 0)
            },
            return: y => {
                s && (n.push(y), f(y, "return"), s = !1, o = !0, i.length = 0)
            }
        }
    },
    Sx = n => i => () => {
        let s = 0,
            o = {
                [n]: () => o,
                next: () => {
                    if (s > i.d) return {
                        done: !0,
                        value: void 0
                    };
                    let c = s++,
                        f = i.v[c];
                    if (c === i.t) throw f;
                    return {
                        done: c === i.d,
                        value: f
                    }
                }
            };
        return o
    },
    xx = (n, i) => s => () => {
        let o = 0,
            c = -1,
            f = !1,
            d = [],
            m = [],
            y = (v = 0, h = m.length) => {
                for (; v < h; v++) m[v].s({
                    done: !0,
                    value: void 0
                })
            };
        s.on({
            next: v => {
                let h = m.shift();
                h && h.s({
                    done: !1,
                    value: v
                }), d.push(v)
            },
            throw: v => {
                let h = m.shift();
                h && h.f(v), y(), c = d.length, f = !0, d.push(v)
            },
            return: v => {
                let h = m.shift();
                h && h.s({
                    done: !0,
                    value: v
                }), y(), c = d.length, d.push(v)
            }
        });
        let g = {
            [n]: () => g,
            next: () => {
                if (c === -1) {
                    let S = o++;
                    if (S >= d.length) {
                        let x = i();
                        return m.push(x), x.p
                    }
                    return {
                        done: !1,
                        value: d[S]
                    }
                }
                if (o > c) return {
                    done: !0,
                    value: void 0
                };
                let v = o++,
                    h = d[v];
                if (v !== c) return {
                    done: !1,
                    value: h
                };
                if (f) throw h;
                return {
                    done: !0,
                    value: h
                }
            }
        };
        return g
    },
    Dy = n => {
        let i = atob(n),
            s = i.length,
            o = new Uint8Array(s);
        for (let c = 0; c < s; c++) o[c] = i.charCodeAt(c);
        return o.buffer
    };
Dy.toString();

function wx(n) {
    return "__SEROVAL_SEQUENCE__" in n
}

function jy(n, i, s) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: n,
        t: i,
        d: s
    }
}

function _x(n) {
    let i = [],
        s = -1,
        o = -1,
        c = n[aa]();
    for (;;) try {
        let f = c.next();
        if (i.push(f.value), f.done) {
            o = i.length - 1;
            break
        }
    } catch (f) {
        s = i.length, i.push(f)
    }
    return jy(i, s, o)
}
var Ex = Sx(aa);

function Rx(n) {
    return Ex(n)
}
var Tx = {},
    Cx = {},
    Ax = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {}
    };

function El(n) {
    return "__SEROVAL_STREAM__" in n
}

function Ri() {
    return bx()
}

function Mx(n) {
    let i = Ri(),
        s = n[na]();
    async function o() {
        try {
            let c = await s.next();
            c.done ? i.return(c.value) : (i.next(c.value), await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch(() => {}), i
}
var Ox = xx(na, _l);

function zx(n) {
    return Ox(n)
}
async function Nx(n) {
    try {
        return [1, await n]
    } catch (i) {
        return [0, i]
    }
}

function Dx(n, i) {
    return {
        plugins: i.plugins,
        mode: n,
        marked: new Set,
        features: 63 ^ (i.disabledFeatures || 0),
        refs: i.refs || new Map,
        depthLimit: i.depthLimit || 1e3
    }
}

function rl(n, i) {
    n.marked.add(i)
}

function jx(n, i) {
    let s = n.refs.size;
    return n.refs.set(i, s), s
}

function Rl(n, i) {
    let s = n.refs.get(i);
    return s != null ? (rl(n, s), {
        type: 1,
        value: qS(s)
    }) : {
        type: 0,
        value: jx(n, i)
    }
}

function Mf(n, i) {
    let s = Rl(n, i);
    return s.type === 1 ? s : Cy(i) ? {
        type: 2,
        value: QS(s.value, i)
    } : s
}

function xi(n, i) {
    let s = Mf(n, i);
    if (s.type !== 0) return s.value;
    if (i in _y) return VS(s.value, i);
    throw new wl(i)
}

function Tl(n, i) {
    let s = Rl(n, Ax[i]);
    return s.type === 1 ? s.value : Nt(26, s.value, i, w, w, w, w, w, w, w, w, w)
}

function Lx(n) {
    let i = Rl(n, Tx);
    return i.type === 1 ? i.value : Nt(27, i.value, w, w, w, w, w, w, xi(n, aa), w, w, w)
}

function Ux(n) {
    let i = Rl(n, Cx);
    return i.type === 1 ? i.value : Nt(29, i.value, w, w, w, w, w, [Tl(n, 1), xi(n, na)], w, w, w, w)
}

function Bx(n, i, s, o) {
    return Nt(s ? 11 : 10, n, w, w, w, o, w, w, w, w, My(i), w)
}

function kx(n, i, s, o) {
    return Nt(8, i, w, w, w, w, {
        k: s,
        v: o
    }, w, Tl(n, 0), w, w, w)
}

function Hx(n, i, s) {
    let o = new Uint8Array(s),
        c = "";
    for (let f = 0, d = o.length; f < d; f++) c += String.fromCharCode(o[f]);
    return Nt(19, i, Qa(btoa(c)), w, w, w, w, w, Tl(n, 5), w, w, w)
}

function qx(n, i) {
    return {
        base: Dx(n, i),
        child: void 0
    }
}
var Yx = class {
    constructor(n, i) {
        this._p = n, this.depth = i
    }
    parse(n) {
        return de(this._p, this.depth, n)
    }
};
async function Gx(n, i, s) {
    let o = [];
    for (let c = 0, f = s.length; c < f; c++) c in s ? o[c] = await de(n, i, s[c]) : o[c] = 0;
    return o
}
async function Vx(n, i, s, o) {
    return XS(s, o, await Gx(n, i, o))
}
async function Of(n, i, s) {
    let o = Object.entries(s),
        c = [],
        f = [];
    for (let d = 0, m = o.length; d < m; d++) c.push(Qa(o[d][0])), f.push(await de(n, i, o[d][1]));
    return aa in s && (c.push(xi(n.base, aa)), f.push(tx(Lx(n.base), await de(n, i, _x(s))))), na in s && (c.push(xi(n.base, na)), f.push(ex(Ux(n.base), await de(n, i, Mx(s))))), xs in s && (c.push(xi(n.base, xs)), f.push(Oy(s[xs]))), Ss in s && (c.push(xi(n.base, Ss)), f.push(s[Ss] ? Ey : Ry)), {
        k: c,
        v: f
    }
}
async function $u(n, i, s, o, c) {
    return Bx(s, o, c, await Of(n, i, o))
}
async function Qx(n, i, s, o) {
    return KS(s, await de(n, i, o.valueOf()))
}
async function Px(n, i, s, o) {
    return FS(s, o, await de(n, i, o.buffer))
}
async function Xx(n, i, s, o) {
    return ZS(s, o, await de(n, i, o.buffer))
}
async function Kx(n, i, s, o) {
    return JS(s, o, await de(n, i, o.buffer))
}
async function rg(n, i, s, o) {
    let c = Ay(o, n.base.features);
    return IS(s, o, c ? await Of(n, i, c) : w)
}
async function Fx(n, i, s, o) {
    let c = Ay(o, n.base.features);
    return $S(s, o, c ? await Of(n, i, c) : w)
}
async function Zx(n, i, s, o) {
    let c = [],
        f = [];
    for (let [d, m] of o.entries()) c.push(await de(n, i, d)), f.push(await de(n, i, m));
    return kx(n.base, s, c, f)
}
async function Jx(n, i, s, o) {
    let c = [];
    for (let f of o.keys()) c.push(await de(n, i, f));
    return WS(s, c)
}
async function Ly(n, i, s, o) {
    let c = n.base.plugins;
    if (c)
        for (let f = 0, d = c.length; f < d; f++) {
            let m = c[f];
            if (m.parse.async && m.test(o)) return PS(s, m.tag, await m.parse.async(o, new Yx(n, i), {
                id: s
            }))
        }
    return w
}
async function Ix(n, i, s, o) {
    let [c, f] = await Nx(o);
    return Nt(12, s, c, w, w, w, w, w, await de(n, i, f), w, w, w)
}

function $x(n, i, s, o, c) {
    let f = [],
        d = s.on({
            next: m => {
                rl(this.base, i), de(this, n, m).then(y => {
                    f.push(ax(i, y))
                }, y => {
                    c(y), d()
                })
            },
            throw: m => {
                rl(this.base, i), de(this, n, m).then(y => {
                    f.push(ix(i, y)), o(f), d()
                }, y => {
                    c(y), d()
                })
            },
            return: m => {
                rl(this.base, i), de(this, n, m).then(y => {
                    f.push(sx(i, y)), o(f), d()
                }, y => {
                    c(y), d()
                })
            }
        })
}
async function Wx(n, i, s, o) {
    return nx(s, Tl(n.base, 4), await new Promise($x.bind(n, i, s, o)))
}
async function tw(n, i, s, o) {
    let c = [];
    for (let f = 0, d = o.v.length; f < d; f++) c[f] = await de(n, i, o.v[f]);
    return rx(s, c, o.t, o.d)
}
async function ew(n, i, s, o) {
    if (Array.isArray(o)) return Vx(n, i, s, o);
    if (El(o)) return Wx(n, i, s, o);
    if (wx(o)) return tw(n, i, s, o);
    let c = o.constructor;
    if (c === gx) return de(n, i, o.replacement);
    let f = await Ly(n, i, s, o);
    if (f) return f;
    switch (c) {
        case Object:
            return $u(n, i, s, o, !1);
        case w:
            return $u(n, i, s, o, !0);
        case Date:
            return YS(s, o);
        case Error:
        case EvalError:
        case RangeError:
        case ReferenceError:
        case SyntaxError:
        case TypeError:
        case URIError:
            return rg(n, i, s, o);
        case Number:
        case Boolean:
        case String:
        case BigInt:
            return Qx(n, i, s, o);
        case ArrayBuffer:
            return Hx(n.base, s, o);
        case Int8Array:
        case Int16Array:
        case Int32Array:
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
        case Uint8ClampedArray:
        case Float32Array:
        case Float64Array:
            return Px(n, i, s, o);
        case DataView:
            return Kx(n, i, s, o);
        case Map:
            return Zx(n, i, s, o);
        case Set:
            return Jx(n, i, s, o)
    }
    if (c === Promise || o instanceof Promise) return Ix(n, i, s, o);
    let d = n.base.features;
    if (d & 32 && c === RegExp) return GS(s, o);
    if (d & 16) switch (c) {
        case BigInt64Array:
        case BigUint64Array:
            return Xx(n, i, s, o)
    }
    if (d & 1 && typeof AggregateError < "u" && (c === AggregateError || o instanceof AggregateError)) return Fx(n, i, s, o);
    if (o instanceof Error) return rg(n, i, s, o);
    if (aa in o || na in o) return $u(n, i, s, o, !!c);
    throw new wl(o)
}
async function nw(n, i, s) {
    let o = Mf(n.base, s);
    if (o.type !== 0) return o.value;
    let c = await Ly(n, i, o.value, s);
    if (c) return c;
    throw new wl(s)
}
async function de(n, i, s) {
    switch (typeof s) {
        case "boolean":
            return s ? Ey : Ry;
        case "undefined":
            return TS;
        case "string":
            return Oy(s);
        case "number":
            return kS(s);
        case "bigint":
            return HS(s);
        case "object":
            {
                if (s) {
                    let o = Mf(n.base, s);
                    return o.type === 0 ? await ew(n, i + 1, o.value, s) : o.value
                }
                return CS
            }
        case "symbol":
            return xi(n.base, s);
        case "function":
            return nw(n, i, s);
        default:
            throw new wl(s)
    }
}
async function aw(n, i) {
    try {
        return await de(n, 0, i)
    } catch (s) {
        throw s instanceof sg ? s : new sg(s)
    }
}
var iw = (n => (n[n.Vanilla = 1] = "Vanilla", n[n.Cross = 2] = "Cross", n))(iw || {});

function Uy(n, i) {
    for (let s = 0, o = i.length; s < o; s++) {
        let c = i[s];
        n.has(c) || (n.add(c), c.extends && Uy(n, c.extends))
    }
}

function By(n) {
    if (n) {
        let i = new Set;
        return Uy(i, n), [...i]
    }
}

function sw(n) {
    switch (n) {
        case "Int8Array":
            return Int8Array;
        case "Int16Array":
            return Int16Array;
        case "Int32Array":
            return Int32Array;
        case "Uint8Array":
            return Uint8Array;
        case "Uint16Array":
            return Uint16Array;
        case "Uint32Array":
            return Uint32Array;
        case "Uint8ClampedArray":
            return Uint8ClampedArray;
        case "Float32Array":
            return Float32Array;
        case "Float64Array":
            return Float64Array;
        case "BigInt64Array":
            return BigInt64Array;
        case "BigUint64Array":
            return BigUint64Array;
        default:
            throw new mx(n)
    }
}
var rw = 1e6,
    ow = 1e4,
    lw = 2e4;

function ky(n, i) {
    switch (i) {
        case 3:
            return Object.freeze(n);
        case 1:
            return Object.preventExtensions(n);
        case 2:
            return Object.seal(n);
        default:
            return n
    }
}
var cw = 1e3;

function uw(n, i) {
    var s;
    return {
        mode: n,
        plugins: i.plugins,
        refs: i.refs || new Map,
        features: (s = i.features) != null ? s : 63 ^ (i.disabledFeatures || 0),
        depthLimit: i.depthLimit || cw
    }
}

function fw(n) {
    return {
        mode: 2,
        base: uw(2, n),
        child: w
    }
}
var dw = class {
    constructor(n, i) {
        this._p = n, this.depth = i
    }
    deserialize(n) {
        return Gt(this._p, this.depth, n)
    }
};

function Hy(n, i) {
    if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i)) throw new Xa({
        t: 4,
        i
    });
    if (n.refs.has(i)) throw new Error("Conflicted ref id: " + i)
}

function hw(n, i, s) {
    return Hy(n.base, i), n.state.marked.has(i) && n.base.refs.set(i, s), s
}

function mw(n, i, s) {
    return Hy(n.base, i), n.base.refs.set(i, s), s
}

function he(n, i, s) {
    return n.mode === 1 ? hw(n, i, s) : mw(n, i, s)
}

function ff(n, i, s) {
    if (Object.hasOwn(i, s)) return i[s];
    throw new Xa(n)
}

function pw(n, i) {
    return he(n, i.i, US(Pa(i.s)))
}

function gw(n, i, s) {
    let o = s.a,
        c = o.length,
        f = he(n, s.i, new Array(c));
    for (let d = 0, m; d < c; d++) m = o[d], m && (f[d] = Gt(n, i, m));
    return ky(f, s.o), f
}

function yw(n) {
    switch (n) {
        case "constructor":
        case "__proto__":
        case "prototype":
        case "__defineGetter__":
        case "__defineSetter__":
        case "__lookupGetter__":
        case "__lookupSetter__":
            return !1;
        default:
            return !0
    }
}

function vw(n) {
    switch (n) {
        case na:
        case Ss:
        case xs:
        case aa:
            return !0;
        default:
            return !1
    }
}

function og(n, i, s) {
    yw(i) ? n[i] = s : Object.defineProperty(n, i, {
        value: s,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}

function bw(n, i, s, o, c) {
    if (typeof o == "string") og(s, Pa(o), Gt(n, i, c));
    else {
        let f = Gt(n, i, o);
        switch (typeof f) {
            case "string":
                og(s, f, Gt(n, i, c));
                break;
            case "symbol":
                vw(f) && (s[f] = Gt(n, i, c));
                break;
            default:
                throw new Xa(o)
        }
    }
}

function qy(n, i, s, o) {
    let c = s.k;
    if (c.length > 0)
        for (let f = 0, d = s.v, m = c.length; f < m; f++) bw(n, i, o, c[f], d[f]);
    return o
}

function Sw(n, i, s) {
    let o = he(n, s.i, s.t === 10 ? {} : Object.create(null));
    return qy(n, i, s.p, o), ky(o, s.o), o
}

function xw(n, i) {
    return he(n, i.i, new Date(i.s))
}

function ww(n, i) {
    if (n.base.features & 32) {
        let s = Pa(i.c);
        if (s.length > lw) throw new Xa(i);
        return he(n, i.i, new RegExp(s, i.m))
    }
    throw new Ny(i)
}

function _w(n, i, s) {
    let o = he(n, s.i, new Set);
    for (let c = 0, f = s.a, d = f.length; c < d; c++) o.add(Gt(n, i, f[c]));
    return o
}

function Ew(n, i, s) {
    let o = he(n, s.i, new Map);
    for (let c = 0, f = s.e.k, d = s.e.v, m = f.length; c < m; c++) o.set(Gt(n, i, f[c]), Gt(n, i, d[c]));
    return o
}

function Rw(n, i) {
    if (i.s.length > rw) throw new Xa(i);
    return he(n, i.i, Dy(Pa(i.s)))
}

function Tw(n, i, s) {
    var o;
    let c = sw(s.c),
        f = Gt(n, i, s.f),
        d = (o = s.b) != null ? o : 0;
    if (d < 0 || d > f.byteLength) throw new Xa(s);
    return he(n, s.i, new c(f, d, s.l))
}

function Cw(n, i, s) {
    var o;
    let c = Gt(n, i, s.f),
        f = (o = s.b) != null ? o : 0;
    if (f < 0 || f > c.byteLength) throw new Xa(s);
    return he(n, s.i, new DataView(c, f, s.l))
}

function Yy(n, i, s, o) {
    if (s.p) {
        let c = qy(n, i, s.p, {});
        Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
    }
    return o
}

function Aw(n, i, s) {
    let o = he(n, s.i, new AggregateError([], Pa(s.m)));
    return Yy(n, i, s, o)
}

function Mw(n, i, s) {
    let o = ff(s, RS, s.s),
        c = he(n, s.i, new o(Pa(s.m)));
    return Yy(n, i, s, c)
}

function Ow(n, i, s) {
    let o = _l(),
        c = he(n, s.i, o.p),
        f = Gt(n, i, s.f);
    return s.s ? o.s(f) : o.f(f), c
}

function zw(n, i, s) {
    return he(n, s.i, Object(Gt(n, i, s.f)))
}

function Nw(n, i, s) {
    let o = n.base.plugins;
    if (o) {
        let c = Pa(s.c);
        for (let f = 0, d = o.length; f < d; f++) {
            let m = o[f];
            if (m.tag === c) return he(n, s.i, m.deserialize(s.s, new dw(n, i), {
                id: s.i
            }))
        }
    }
    throw new fx(s.c)
}

function Dw(n, i) {
    return he(n, i.i, he(n, i.s, _l()).p)
}

function jw(n, i, s) {
    let o = n.base.refs.get(s.i);
    if (o) return o.s(Gt(n, i, s.a[1])), w;
    throw new Dr("Promise")
}

function Lw(n, i, s) {
    let o = n.base.refs.get(s.i);
    if (o) return o.f(Gt(n, i, s.a[1])), w;
    throw new Dr("Promise")
}

function Uw(n, i, s) {
    Gt(n, i, s.a[0]);
    let o = Gt(n, i, s.a[1]);
    return Rx(o)
}

function Bw(n, i, s) {
    Gt(n, i, s.a[0]);
    let o = Gt(n, i, s.a[1]);
    return zx(o)
}

function kw(n, i, s) {
    let o = he(n, s.i, Ri()),
        c = s.a,
        f = c.length;
    if (f)
        for (let d = 0; d < f; d++) Gt(n, i, c[d]);
    return o
}

function Hw(n, i, s) {
    let o = n.base.refs.get(s.i);
    if (o && El(o)) return o.next(Gt(n, i, s.f)), w;
    throw new Dr("Stream")
}

function qw(n, i, s) {
    let o = n.base.refs.get(s.i);
    if (o && El(o)) return o.throw(Gt(n, i, s.f)), w;
    throw new Dr("Stream")
}

function Yw(n, i, s) {
    let o = n.base.refs.get(s.i);
    if (o && El(o)) return o.return(Gt(n, i, s.f)), w;
    throw new Dr("Stream")
}

function Gw(n, i, s) {
    return Gt(n, i, s.f), w
}

function Vw(n, i, s) {
    return Gt(n, i, s.a[1]), w
}

function Qw(n, i, s) {
    let o = he(n, s.i, jy([], s.s, s.l));
    for (let c = 0, f = s.a.length; c < f; c++) o.v[c] = Gt(n, i, s.a[c]);
    return o
}

function Gt(n, i, s) {
    if (i > n.base.depthLimit) throw new px(n.base.depthLimit);
    switch (i += 1, s.t) {
        case 2:
            return ff(s, _S, s.s);
        case 0:
            return Number(s.s);
        case 1:
            return Pa(String(s.s));
        case 3:
            if (String(s.s).length > ow) throw new Xa(s);
            return BigInt(s.s);
        case 4:
            return n.base.refs.get(s.i);
        case 18:
            return pw(n, s);
        case 9:
            return gw(n, i, s);
        case 10:
        case 11:
            return Sw(n, i, s);
        case 5:
            return xw(n, s);
        case 6:
            return ww(n, s);
        case 7:
            return _w(n, i, s);
        case 8:
            return Ew(n, i, s);
        case 19:
            return Rw(n, s);
        case 16:
        case 15:
            return Tw(n, i, s);
        case 20:
            return Cw(n, i, s);
        case 14:
            return Aw(n, i, s);
        case 13:
            return Mw(n, i, s);
        case 12:
            return Ow(n, i, s);
        case 17:
            return ff(s, wS, s.s);
        case 21:
            return zw(n, i, s);
        case 25:
            return Nw(n, i, s);
        case 22:
            return Dw(n, s);
        case 23:
            return jw(n, i, s);
        case 24:
            return Lw(n, i, s);
        case 28:
            return Uw(n, i, s);
        case 30:
            return Bw(n, i, s);
        case 31:
            return kw(n, i, s);
        case 32:
            return Hw(n, i, s);
        case 33:
            return qw(n, i, s);
        case 34:
            return Yw(n, i, s);
        case 27:
            return Gw(n, i, s);
        case 29:
            return Vw(n, i, s);
        case 35:
            return Qw(n, i, s);
        default:
            throw new Ny(s)
    }
}

function Pw(n, i) {
    try {
        return Gt(n, 0, i)
    } catch (s) {
        throw new ux(s)
    }
}
var Xw = () => T;
Xw.toString();

function lg(n, i) {
    let s = By(i.plugins),
        o = fw({
            plugins: s,
            refs: i.refs,
            features: i.features,
            disabledFeatures: i.disabledFeatures,
            depthLimit: i.depthLimit
        });
    return Pw(o, n)
}
async function Kw(n, i = {}) {
    let s = By(i.plugins),
        o = qx(1, {
            plugins: s,
            disabledFeatures: i.disabledFeatures
        });
    return {
        t: await aw(o, n),
        f: o.base.features,
        m: Array.from(o.base.marked)
    }
}

function Fw(n) {
    return {
        tag: "$TSR/t/" + n.key,
        test: n.test,
        parse: {
            sync(i, s, o) {
                return {
                    v: s.parse(n.toSerializable(i))
                }
            },
            async async (i, s, o) {
                return {
                    v: await s.parse(n.toSerializable(i))
                }
            },
            stream(i, s, o) {
                return {
                    v: s.parse(n.toSerializable(i))
                }
            }
        },
        serialize: void 0,
        deserialize(i, s, o) {
            return n.fromSerializable(s.deserialize(i.v))
        }
    }
}
var Zw = class {
        constructor(n, i) {
            this.stream = n, this.hint = i ? .hint ? ? "binary"
        }
    },
    dl = globalThis.Buffer,
    Gy = !!dl && typeof dl.from == "function";

function Vy(n) {
    if (n.length === 0) return "";
    if (Gy) return dl.from(n).toString("base64");
    const i = 32768,
        s = [];
    for (let o = 0; o < n.length; o += i) {
        const c = n.subarray(o, o + i);
        s.push(String.fromCharCode.apply(null, c))
    }
    return btoa(s.join(""))
}

function Qy(n) {
    if (n.length === 0) return new Uint8Array(0);
    if (Gy) {
        const o = dl.from(n, "base64");
        return new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
    }
    const i = atob(n),
        s = new Uint8Array(i.length);
    for (let o = 0; o < i.length; o++) s[o] = i.charCodeAt(o);
    return s
}
var Sr = Object.create(null),
    xr = Object.create(null),
    Jw = n => new ReadableStream({
        start(i) {
            n.on({
                next(s) {
                    try {
                        i.enqueue(Qy(s))
                    } catch {}
                },
                throw (s) {
                    i.error(s)
                },
                return () {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    Iw = new TextEncoder,
    $w = n => new ReadableStream({
        start(i) {
            n.on({
                next(s) {
                    try {
                        typeof s == "string" ? i.enqueue(Iw.encode(s)) : i.enqueue(Qy(s.$b64))
                    } catch {}
                },
                throw (s) {
                    i.error(s)
                },
                return () {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    Ww = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
    t_ = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";

function cg(n) {
    const i = Ri(),
        s = n.getReader();
    return (async () => {
        try {
            for (;;) {
                const {
                    done: o,
                    value: c
                } = await s.read();
                if (o) {
                    i.return(void 0);
                    break
                }
                i.next(Vy(c))
            }
        } catch (o) {
            i.throw(o)
        } finally {
            s.releaseLock()
        }
    })(), i
}

function ug(n) {
    const i = Ri(),
        s = n.getReader(),
        o = new TextDecoder("utf-8", {
            fatal: !0
        });
    return (async () => {
        try {
            for (;;) {
                const {
                    done: c,
                    value: f
                } = await s.read();
                if (c) {
                    try {
                        const d = o.decode();
                        d.length > 0 && i.next(d)
                    } catch {}
                    i.return(void 0);
                    break
                }
                try {
                    const d = o.decode(f, {
                        stream: !0
                    });
                    d.length > 0 && i.next(d)
                } catch {
                    i.next({
                        $b64: Vy(f)
                    })
                }
            }
        } catch (c) {
            i.throw(c)
        } finally {
            s.releaseLock()
        }
    })(), i
}
var e_ = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(n) {
            return n === Sr
        },
        parse: {
            sync(n, i, s) {
                return {}
            },
            async async (n, i, s) {
                return {}
            },
            stream(n, i, s) {
                return {}
            }
        },
        serialize(n, i, s) {
            return Ww
        },
        deserialize(n, i, s) {
            return Sr
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(n) {
            return n === xr
        },
        parse: {
            sync(n, i, s) {
                return {}
            },
            async async (n, i, s) {
                return {}
            },
            stream(n, i, s) {
                return {}
            }
        },
        serialize(n, i, s) {
            return t_
        },
        deserialize(n, i, s) {
            return xr
        }
    }],
    test(n) {
        return n instanceof Zw
    },
    parse: {
        sync(n, i, s) {
            const o = n.hint === "text" ? xr : Sr;
            return {
                hint: i.parse(n.hint),
                factory: i.parse(o),
                stream: i.parse(Ri())
            }
        },
        async async (n, i, s) {
            const o = n.hint === "text" ? xr : Sr,
                c = n.hint === "text" ? ug(n.stream) : cg(n.stream);
            return {
                hint: await i.parse(n.hint),
                factory: await i.parse(o),
                stream: await i.parse(c)
            }
        },
        stream(n, i, s) {
            const o = n.hint === "text" ? xr : Sr,
                c = n.hint === "text" ? ug(n.stream) : cg(n.stream);
            return {
                hint: i.parse(n.hint),
                factory: i.parse(o),
                stream: i.parse(c)
            }
        }
    },
    serialize(n, i, s) {
        return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")"
    },
    deserialize(n, i, s) {
        const o = i.deserialize(n.stream);
        return i.deserialize(n.hint) === "text" ? $w(o) : Jw(o)
    }
};

function n_(n) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(i, s, o) {
            return n(typeof s ? .deserialize == "function" ? s.deserialize(i.streamId) : i.streamId)
        }
    }
}
var a_ = {
        tag: "$TSR/Error",
        test(n) {
            return n instanceof Error
        },
        parse: {
            sync(n, i) {
                return {
                    message: i.parse(n.message)
                }
            },
            async async (n, i) {
                return {
                    message: await i.parse(n.message)
                }
            },
            stream(n, i) {
                return {
                    message: i.parse(n.message)
                }
            }
        },
        serialize(n, i) {
            return "new Error(" + i.serialize(n.message) + ")"
        },
        deserialize(n, i) {
            return new Error(i.deserialize(n.message))
        }
    },
    La = {},
    Py = n => new ReadableStream({
        start: i => {
            n.on({
                next: s => {
                    try {
                        i.enqueue(s)
                    } catch {}
                },
                throw: s => {
                    i.error(s)
                },
                return: () => {
                    try {
                        i.close()
                    } catch {}
                }
            })
        }
    }),
    i_ = {
        tag: "seroval-plugins/web/ReadableStreamFactory",
        test(n) {
            return n === La
        },
        parse: {
            sync() {
                return La
            },
            async async () {
                return await Promise.resolve(La)
            },
            stream() {
                return La
            }
        },
        serialize() {
            return Py.toString()
        },
        deserialize() {
            return La
        }
    };

function fg(n) {
    let i = Ri(),
        s = n.getReader();
    async function o() {
        try {
            let c = await s.read();
            c.done ? i.return(c.value) : (i.next(c.value), await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch(() => {}), i
}
var s_ = {
        tag: "seroval/plugins/web/ReadableStream",
        extends: [i_],
        test(n) {
            return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream
        },
        parse: {
            sync(n, i) {
                return {
                    factory: i.parse(La),
                    stream: i.parse(Ri())
                }
            },
            async async (n, i) {
                return {
                    factory: await i.parse(La),
                    stream: await i.parse(fg(n))
                }
            },
            stream(n, i) {
                return {
                    factory: i.parse(La),
                    stream: i.parse(fg(n))
                }
            }
        },
        serialize(n, i) {
            return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")"
        },
        deserialize(n, i) {
            let s = i.deserialize(n.stream);
            return Py(s)
        }
    },
    r_ = s_,
    o_ = [a_, e_, r_];

function l_() {
    return [...ty() ? .serializationAdapters ? .map(Fw) ? ? [], ...o_]
}
var dg = new TextDecoder,
    c_ = new Uint8Array(0),
    hg = 16 * 1024 * 1024,
    mg = 32 * 1024 * 1024,
    pg = 1024,
    gg = 1e5;

function u_(n) {
    const i = new Map,
        s = new Map,
        o = new Set;
    let c = !1,
        f = null,
        d = 0,
        m;
    const y = new ReadableStream({
        start(h) {
            m = h
        },
        cancel() {
            c = !0;
            try {
                f ? .cancel()
            } catch {}
            i.forEach(h => {
                try {
                    h.error(new Error("Framed response cancelled"))
                } catch {}
            }), i.clear(), s.clear(), o.clear()
        }
    });

    function g(h) {
        const S = s.get(h);
        if (S) return S;
        if (o.has(h)) return new ReadableStream({
            start(E) {
                E.close()
            }
        });
        if (s.size >= pg) throw new Error(`Too many raw streams in framed response (max ${pg})`);
        const x = new ReadableStream({
            start(E) {
                i.set(h, E)
            },
            cancel() {
                o.add(h), i.delete(h), s.delete(h)
            }
        });
        return s.set(h, x), x
    }

    function v(h) {
        return g(h), i.get(h)
    }
    return (async () => {
        const h = n.getReader();
        f = h;
        const S = [];
        let x = 0;

        function E() {
            if (x < 9) return null;
            const _ = S[0];
            if (_.length >= 9) return {
                type: _[0],
                streamId: (_[1] << 24 | _[2] << 16 | _[3] << 8 | _[4]) >>> 0,
                length: (_[5] << 24 | _[6] << 16 | _[7] << 8 | _[8]) >>> 0
            };
            const R = new Uint8Array(9);
            let q = 0,
                Y = 9;
            for (let H = 0; H < S.length && Y > 0; H++) {
                const nt = S[H],
                    I = Math.min(nt.length, Y);
                R.set(nt.subarray(0, I), q), q += I, Y -= I
            }
            return {
                type: R[0],
                streamId: (R[1] << 24 | R[2] << 16 | R[3] << 8 | R[4]) >>> 0,
                length: (R[5] << 24 | R[6] << 16 | R[7] << 8 | R[8]) >>> 0
            }
        }

        function M(_) {
            if (_ === 0) return c_;
            const R = new Uint8Array(_);
            let q = 0,
                Y = _;
            for (; Y > 0 && S.length > 0;) {
                const H = S[0];
                if (!H) break;
                const nt = Math.min(H.length, Y);
                R.set(H.subarray(0, nt), q), q += nt, Y -= nt, nt === H.length ? S.shift() : S[0] = H.subarray(nt)
            }
            return x -= _, R
        }
        try {
            for (;;) {
                const {
                    done: _,
                    value: R
                } = await h.read();
                if (c || _) break;
                if (R) {
                    if (x + R.length > mg) throw new Error(`Framed response buffer exceeded ${mg} bytes`);
                    for (S.push(R), x += R.length;;) {
                        const q = E();
                        if (!q) break;
                        const {
                            type: Y,
                            streamId: H,
                            length: nt
                        } = q;
                        if (Y !== ta.JSON && Y !== ta.CHUNK && Y !== ta.END && Y !== ta.ERROR) throw new Error(`Unknown frame type: ${Y}`);
                        if (Y === ta.JSON) {
                            if (H !== 0) throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (H === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if (nt > hg) throw new Error(`Frame payload too large: ${nt} bytes (max ${hg})`);
                        const I = 9 + nt;
                        if (x < I) break;
                        if (++d > gg) throw new Error(`Too many frames in framed response (max ${gg})`);
                        M(9);
                        const P = M(nt);
                        switch (Y) {
                            case ta.JSON:
                                try {
                                    m.enqueue(dg.decode(P))
                                } catch {}
                                break;
                            case ta.CHUNK:
                                {
                                    const j = v(H);j && j.enqueue(P);
                                    break
                                }
                            case ta.END:
                                {
                                    const j = v(H);
                                    if (o.add(H), j) {
                                        try {
                                            j.close()
                                        } catch {}
                                        i.delete(H)
                                    }
                                    break
                                }
                            case ta.ERROR:
                                {
                                    const j = v(H);
                                    if (o.add(H), j) {
                                        const W = dg.decode(P);
                                        j.error(new Error(W)), i.delete(H)
                                    }
                                    break
                                }
                        }
                    }
                }
            }
            if (x !== 0) throw new Error("Incomplete frame at end of framed response");
            try {
                m.close()
            } catch {}
            i.forEach(_ => {
                try {
                    _.close()
                } catch {}
            }), i.clear()
        } catch (_) {
            try {
                m.error(_)
            } catch {}
            i.forEach(R => {
                try {
                    R.error(_)
                } catch {}
            }), i.clear()
        } finally {
            try {
                h.releaseLock()
            } catch {}
            f = null
        }
    })(), {
        getOrCreateStream: g,
        jsonChunks: y
    }
}
var Mr = null;
async function df(n) {
    n.length > 0 && await Promise.allSettled(n)
}
var f_ = Object.prototype.hasOwnProperty;

function Xy(n) {
    for (const i in n)
        if (f_.call(n, i)) return !0;
    return !1
}
async function d_(n, i, s) {
    Mr || (Mr = l_());
    const o = i[0],
        c = o.fetch ? ? s,
        f = o.data instanceof FormData ? "formData" : "payload",
        d = o.headers ? new Headers(o.headers) : new Headers;
    if (d.set("x-tsr-serverFn", "true"), f === "payload" && d.set("accept", `${r1}, application/x-ndjson, application/json`), o.method === "GET") {
        if (f === "formData") throw new Error("FormData is not supported with GET requests");
        const y = await Ky(o);
        if (y !== void 0) {
            const g = ry({
                payload: y
            });
            n.includes("?") ? n += `&${g}` : n += `?${g}`
        }
    }
    let m;
    if (o.method === "POST") {
        const y = await h_(o);
        y ? .contentType && d.set("content-type", y.contentType), m = y ? .body
    }
    return await m_(async () => c(n, {
        method: o.method,
        headers: d,
        signal: o.signal,
        body: m
    }))
}
async function Ky(n) {
    let i = !1;
    const s = {};
    if (n.data !== void 0 && (i = !0, s.data = n.data), n.context && Xy(n.context) && (i = !0, s.context = n.context), i) return Fy(s)
}
async function Fy(n) {
    return JSON.stringify(await Promise.resolve(Kw(n, {
        plugins: Mr
    })))
}
async function h_(n) {
    if (n.data instanceof FormData) {
        let s;
        return n.context && Xy(n.context) && (s = await Fy(n.context)), s !== void 0 && n.data.set(s1, s), {
            body: n.data
        }
    }
    const i = await Ky(n);
    if (i) return {
        body: i,
        contentType: "application/json"
    }
}
async function m_(n) {
    let i;
    try {
        i = await n()
    } catch (o) {
        if (o instanceof Response) i = o;
        else throw console.log(o), o
    }
    if (i.headers.get("x-tss-raw") === "true") return i;
    const s = i.headers.get("content-type");
    if (s || Ke(), i.headers.get("x-tss-serialized")) {
        let o;
        if (s.includes("application/x-tss-framed")) {
            if (c1(s), !i.body) throw new Error("No response body for framed response");
            const {
                getOrCreateStream: c,
                jsonChunks: f
            } = u_(i.body), d = [n_(c), ...Mr || []], m = new Map;
            o = await p_({
                jsonStream: f,
                onMessage: y => lg(y, {
                    refs: m,
                    plugins: d
                }),
                onError(y, g) {
                    console.error(y, g)
                }
            })
        } else if (s.includes("application/json")) {
            const c = await i.json(),
                f = [];
            o = lg(c, {
                plugins: Mr
            }), await df(f)
        }
        if (o || Ke(), o instanceof Error) throw o;
        return o
    }
    if (s.includes("application/json")) {
        const o = await i.json(),
            c = K1(o);
        if (c) throw c;
        if (be(o)) throw o;
        return o
    }
    if (!i.ok) throw new Error(await i.text());
    return i
}
async function p_({
    jsonStream: n,
    onMessage: i,
    onError: s
}) {
    const o = n.getReader(),
        {
            value: c,
            done: f
        } = await o.read();
    if (f || !c) throw new Error("Stream ended before first object");
    const d = JSON.parse(c);
    let m = !1;
    const y = (async () => {
        try {
            for (;;) {
                const {
                    value: h,
                    done: S
                } = await o.read();
                if (S) break;
                if (h) try {
                    const x = [];
                    try {
                        i(JSON.parse(h))
                    } finally {}
                    await df(x)
                } catch (x) {
                    s ? .(`Invalid JSON: ${h}`, x)
                }
            }
        } catch (h) {
            m || s ? .("Stream processing error:", h)
        }
    })();
    let g;
    const v = [];
    try {
        g = i(d)
    } catch (h) {
        throw m = !0, o.cancel().catch(() => {}), h
    }
    return await df(v), Promise.resolve(g).catch(() => {
        m = !0, o.cancel().catch(() => {})
    }), y.finally(() => {
        try {
            o.releaseLock()
        } catch {}
    }), g
}

function g_(n) {
    const i = "/_serverFn/" + n;
    return Object.assign((...c) => {
        const f = ty() ? .serverFns ? .fetch;
        return d_(i, c, f ? ? fetch)
    }, {
        url: i,
        serverFnMeta: {
            id: n
        },
        [lf]: !0
    })
}
var y_ = {
    key: "$TSS/serverfn",
    test: n => typeof n != "function" || !(lf in n) ? !1 : !!n[lf],
    toSerializable: ({
        serverFnMeta: n
    }) => ({
        functionId: n.id
    }),
    fromSerializable: ({
        functionId: n
    }) => g_(n)
};

function yg(n) {
    return n.replaceAll("\0", "/").replaceAll("�", "/")
}

function v_(n, i) {
    n.id = i.i, n.__beforeLoadContext = i.b, n.loaderData = i.l, n.status = i.s, n.ssr = i.ssr, n.updatedAt = i.u, n.error = i.e, i.g !== void 0 && (n.globalNotFound = i.g)
}
async function b_(n) {
    window.$_TSR || Ke();
    const i = n.options.serializationAdapters;
    if (i ? .length) {
        const _ = new Map;
        i.forEach(R => {
            _.set(R.key, R.fromSerializable)
        }), window.$_TSR.t = _, window.$_TSR.buffer.forEach(R => R())
    }
    window.$_TSR.initialized = !0, window.$_TSR.router || Ke();
    const s = window.$_TSR.router;
    s.matches.forEach(_ => {
        _.i = yg(_.i)
    }), s.lastMatchId && (s.lastMatchId = yg(s.lastMatchId));
    const {
        manifest: o,
        dehydratedData: c,
        lastMatchId: f
    } = s;
    n.ssr = {
        manifest: o
    };
    const d = document.querySelector('meta[property="csp-nonce"]') ? .content;
    n.options.ssr = {
        nonce: d
    };
    const m = n.matchRoutes(n.stores.location.get()),
        y = Promise.all(m.map(_ => n.loadRouteChunk(n.looseRoutesById[_.routeId])));

    function g(_) {
        const R = n.looseRoutesById[_.routeId].options.pendingMinMs ? ? n.options.defaultPendingMinMs;
        if (R) {
            const q = Ei();
            _._nonReactive.minPendingPromise = q, _._forcePending = !0, setTimeout(() => {
                q.resolve(), n.updateMatch(_.id, Y => (Y._nonReactive.minPendingPromise = void 0, { ...Y,
                    _forcePending: void 0
                }))
            }, R)
        }
    }

    function v(_) {
        const R = n.looseRoutesById[_.routeId];
        R && (R.options.ssr = _.ssr)
    }
    let h;
    m.forEach(_ => {
        const R = s.matches.find(q => q.i === _.id);
        if (!R) {
            _._nonReactive.dehydrated = !1, _.ssr = !1, v(_);
            return
        }
        v_(_, R), v(_), _._nonReactive.dehydrated = _.ssr !== !1, (_.ssr === "data-only" || _.ssr === !1) && h === void 0 && (h = _.index, g(_))
    }), n.stores.setMatches(m), await n.options.hydrate ? .(c);
    const S = n.stores.matches.get(),
        x = n.stores.location.get();
    await Promise.all(S.map(async _ => {
        try {
            const R = n.looseRoutesById[_.routeId],
                q = S[_.index - 1] ? .context ? ? n.options.context;
            if (R.options.context) {
                const I = {
                    deps: _.loaderDeps,
                    params: _.params,
                    context: q ? ? {},
                    location: x,
                    navigate: P => n.navigate({ ...P,
                        _fromLocation: x
                    }),
                    buildLocation: n.buildLocation,
                    cause: _.cause,
                    abortController: _.abortController,
                    preload: !1,
                    matches: m,
                    routeId: R.id
                };
                _.__routeContext = R.options.context(I) ? ? void 0
            }
            _.context = { ...q,
                ..._.__routeContext,
                ..._.__beforeLoadContext
            };
            const Y = {
                    ssr: n.options.ssr,
                    matches: S,
                    match: _,
                    params: _.params,
                    loaderData: _.loaderData
                },
                H = await R.options.head ? .(Y),
                nt = await R.options.scripts ? .(Y);
            _.meta = H ? .meta, _.links = H ? .links, _.headScripts = H ? .scripts, _.styles = H ? .styles, _.scripts = nt
        } catch (R) {
            if (be(R)) _.error = {
                isNotFound: !0
            }, console.error(`NotFound error during hydration for routeId: ${_.routeId}`, R);
            else throw _.error = R, console.error(`Error during hydration for route ${_.routeId}:`, R), R
        }
    }));
    const E = m[m.length - 1].id !== f;
    if (!m.some(_ => _.ssr === !1) && !E) return m.forEach(_ => {
        _._nonReactive.dehydrated = void 0
    }), n.stores.resolvedLocation.set(n.stores.location.get()), y;
    const M = Promise.resolve().then(() => n.load()).catch(_ => {
        console.error("Error during router hydration:", _)
    });
    if (E) {
        const _ = m[1];
        _ || Ke(), g(_), _._displayPending = !0, _._nonReactive.displayPendingPromise = M, M.then(() => {
            n.batch(() => {
                n.stores.status.get() === "pending" && (n.stores.status.set("idle"), n.stores.resolvedLocation.set(n.stores.location.get())), n.updateMatch(_.id, R => ({ ...R,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            })
        })
    }
    return y
}
var hl = et.use,
    Er = typeof window < "u" ? et.useLayoutEffect : et.useEffect;

function Wu(n) {
    const i = et.useRef({
            value: n,
            prev: null
        }),
        s = i.current.value;
    return n !== s && (i.current = {
        value: n,
        prev: s
    }), i.current.prev
}

function S_(n, i, s = {}, o = {}) {
    et.useEffect(() => {
        if (!n.current || o.disabled || typeof IntersectionObserver != "function") return;
        const c = new IntersectionObserver(([f]) => {
            i(f)
        }, s);
        return c.observe(n.current), () => {
            c.disconnect()
        }
    }, [i, s, o.disabled, n])
}

function x_(n) {
    const i = et.useRef(null);
    return et.useImperativeHandle(n, () => i.current, []), i
}

function w_({
    promise: n
}) {
    if (hl) return hl(n);
    const i = mS(n);
    if (i[Nn].status === "pending") throw i;
    if (i[Nn].status === "error") throw i[Nn].error;
    return i[Nn].data
}

function __(n) {
    const i = z.jsx(E_, { ...n
    });
    return n.fallback ? z.jsx(et.Suspense, {
        fallback: n.fallback,
        children: i
    }) : i
}

function E_(n) {
    const i = w_(n);
    return n.children(i)
}

function zf(n) {
    const i = n.errorComponent ? ? Nf;
    return z.jsx(R_, {
        getResetKey: n.getResetKey,
        onCatch: n.onCatch,
        children: ({
            error: s,
            reset: o
        }) => s ? et.createElement(i, {
            error: s,
            reset: o
        }) : n.children
    })
}
var R_ = class extends et.Component {
    constructor(...n) {
        super(...n), this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(n, i) {
        const s = n.getResetKey();
        return i.error && i.resetKey !== s ? {
            resetKey: s,
            error: null
        } : {
            resetKey: s
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(n, i) {
        this.props.onCatch && this.props.onCatch(n, i)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
};

function Nf({
    error: n
}) {
    const [i, s] = et.useState(!1);
    return z.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [z.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [z.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), z.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => s(o => !o),
                children: i ? "Hide Error" : "Show Error"
            })]
        }), z.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), i ? z.jsx("div", {
            children: z.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: n.message ? z.jsx("code", {
                    children: n.message
                }) : null
            })
        }) : null]
    })
}

function T_({
    children: n,
    fallback: i = null
}) {
    return Df() ? z.jsx(tt.Fragment, {
        children: n
    }) : z.jsx(tt.Fragment, {
        children: i
    })
}

function Df() {
    return tt.useSyncExternalStore(C_, () => !0, () => !1)
}

function C_() {
    return () => {}
}
var Zy = et.createContext(null);

function Se(n) {
    return et.useContext(Zy)
}
var Cl = et.createContext(void 0),
    A_ = et.createContext(void 0),
    Kt = (n => (n[n.None = 0] = "None", n[n.Mutable = 1] = "Mutable", n[n.Watching = 2] = "Watching", n[n.RecursedCheck = 4] = "RecursedCheck", n[n.Recursed = 8] = "Recursed", n[n.Dirty = 16] = "Dirty", n[n.Pending = 32] = "Pending", n))(Kt || {});

function M_({
    update: n,
    notify: i,
    unwatched: s
}) {
    return {
        link: o,
        unlink: c,
        propagate: f,
        checkDirty: d,
        shallowPropagate: m
    };

    function o(g, v, h) {
        const S = v.depsTail;
        if (S !== void 0 && S.dep === g) return;
        const x = S !== void 0 ? S.nextDep : v.deps;
        if (x !== void 0 && x.dep === g) {
            x.version = h, v.depsTail = x;
            return
        }
        const E = g.subsTail;
        if (E !== void 0 && E.version === h && E.sub === v) return;
        const M = v.depsTail = g.subsTail = {
            version: h,
            dep: g,
            sub: v,
            prevDep: S,
            nextDep: x,
            prevSub: E,
            nextSub: void 0
        };
        x !== void 0 && (x.prevDep = M), S !== void 0 ? S.nextDep = M : v.deps = M, E !== void 0 ? E.nextSub = M : g.subs = M
    }

    function c(g, v = g.sub) {
        const h = g.dep,
            S = g.prevDep,
            x = g.nextDep,
            E = g.nextSub,
            M = g.prevSub;
        return x !== void 0 ? x.prevDep = S : v.depsTail = S, S !== void 0 ? S.nextDep = x : v.deps = x, E !== void 0 ? E.prevSub = M : h.subsTail = M, M !== void 0 ? M.nextSub = E : (h.subs = E) === void 0 && s(h), x
    }

    function f(g) {
        let v = g.nextSub,
            h;
        t: do {
            const S = g.sub;
            let x = S.flags;
            if (x & 60 ? x & 12 ? x & 4 ? !(x & 48) && y(g, S) ? (S.flags = x | 40, x &= 1) : x = 0 : S.flags = x & -9 | 32 : x = 0 : S.flags = x | 32, x & 2 && i(S), x & 1) {
                const E = S.subs;
                if (E !== void 0) {
                    const M = (g = E).nextSub;
                    M !== void 0 && (h = {
                        value: v,
                        prev: h
                    }, v = M);
                    continue
                }
            }
            if ((g = v) !== void 0) {
                v = g.nextSub;
                continue
            }
            for (; h !== void 0;)
                if (g = h.value, h = h.prev, g !== void 0) {
                    v = g.nextSub;
                    continue t
                }
            break
        } while (!0)
    }

    function d(g, v) {
        let h, S = 0,
            x = !1;
        t: do {
            const E = g.dep,
                M = E.flags;
            if (v.flags & 16) x = !0;
            else if ((M & 17) === 17) {
                if (n(E)) {
                    const _ = E.subs;
                    _.nextSub !== void 0 && m(_), x = !0
                }
            } else if ((M & 33) === 33) {
                (g.nextSub !== void 0 || g.prevSub !== void 0) && (h = {
                    value: g,
                    prev: h
                }), g = E.deps, v = E, ++S;
                continue
            }
            if (!x) {
                const _ = g.nextDep;
                if (_ !== void 0) {
                    g = _;
                    continue
                }
            }
            for (; S--;) {
                const _ = v.subs,
                    R = _.nextSub !== void 0;
                if (R ? (g = h.value, h = h.prev) : g = _, x) {
                    if (n(v)) {
                        R && m(_), v = g.sub;
                        continue
                    }
                    x = !1
                } else v.flags &= -33;
                v = g.sub;
                const q = g.nextDep;
                if (q !== void 0) {
                    g = q;
                    continue t
                }
            }
            return x
        } while (!0)
    }

    function m(g) {
        do {
            const v = g.sub,
                h = v.flags;
            (h & 48) === 32 && (v.flags = h | 16, (h & 6) === 2 && i(v))
        } while ((g = g.nextSub) !== void 0)
    }

    function y(g, v) {
        let h = v.depsTail;
        for (; h !== void 0;) {
            if (h === g) return !0;
            h = h.prevDep
        }
        return !1
    }
}

function O_(n, i, s) {
    const o = typeof n == "object",
        c = o ? n : void 0;
    return {
        next: (o ? n.next : n) ? .bind(c),
        error: (o ? n.error : i) ? .bind(c),
        complete: (o ? n.complete : s) ? .bind(c)
    }
}
const hf = [];
let ol = 0;
const {
    link: vg,
    unlink: z_,
    propagate: N_,
    checkDirty: Jy,
    shallowPropagate: bg
} = M_({
    update(n) {
        return n._update()
    },
    notify(n) {
        hf[mf++] = n, n.flags &= ~Kt.Watching
    },
    unwatched(n) {
        n.depsTail !== void 0 && (n.depsTail = void 0, n.flags = Kt.Mutable | Kt.Dirty, ml(n))
    }
});
let $o = 0,
    mf = 0,
    zn, pf = 0;

function Iy(n) {
    try {
        ++pf, n()
    } finally {
        --pf || $y()
    }
}

function ml(n) {
    const i = n.depsTail;
    let s = i !== void 0 ? i.nextDep : n.deps;
    for (; s !== void 0;) s = z_(s, n)
}

function $y() {
    if (!(pf > 0)) {
        for (; $o < mf;) {
            const n = hf[$o];
            hf[$o++] = void 0, n.notify()
        }
        $o = 0, mf = 0
    }
}

function Sg(n, i) {
    const s = typeof n == "function",
        o = n,
        c = {
            _snapshot: s ? void 0 : n,
            subs: void 0,
            subsTail: void 0,
            deps: void 0,
            depsTail: void 0,
            flags: s ? Kt.None : Kt.Mutable,
            get() {
                return zn !== void 0 && vg(c, zn, ol), c._snapshot
            },
            subscribe(f) {
                const d = O_(f),
                    m = {
                        current: !1
                    },
                    y = D_(() => {
                        c.get(), m.current ? d.next ? .(c._snapshot) : m.current = !0
                    });
                return {
                    unsubscribe: () => {
                        y.stop()
                    }
                }
            },
            _update(f) {
                const d = zn,
                    m = i ? .compare ? ? Object.is;
                if (s) zn = c, ++ol, c.depsTail = void 0;
                else if (f === void 0) return !1;
                s && (c.flags = Kt.Mutable | Kt.RecursedCheck);
                try {
                    const y = c._snapshot,
                        g = typeof f == "function" ? f(y) : f === void 0 && s ? o(y) : f;
                    return y === void 0 || !m(y, g) ? (c._snapshot = g, !0) : !1
                } finally {
                    zn = d, s && (c.flags &= ~Kt.RecursedCheck), ml(c)
                }
            }
        };
    return s ? (c.flags = Kt.Mutable | Kt.Dirty, c.get = function() {
        const f = c.flags;
        if (f & Kt.Dirty || f & Kt.Pending && Jy(c.deps, c)) {
            if (c._update()) {
                const d = c.subs;
                d !== void 0 && bg(d)
            }
        } else f & Kt.Pending && (c.flags = f & ~Kt.Pending);
        return zn !== void 0 && vg(c, zn, ol), c._snapshot
    }) : c.set = function(f) {
        if (c._update(f)) {
            const d = c.subs;
            d !== void 0 && (N_(d), bg(d), $y())
        }
    }, c
}

function D_(n) {
    const i = () => {
            const o = zn;
            zn = s, ++ol, s.depsTail = void 0, s.flags = Kt.Watching | Kt.RecursedCheck;
            try {
                return n()
            } finally {
                zn = o, s.flags &= ~Kt.RecursedCheck, ml(s)
            }
        },
        s = {
            deps: void 0,
            depsTail: void 0,
            subs: void 0,
            subsTail: void 0,
            flags: Kt.Watching | Kt.RecursedCheck,
            notify() {
                const o = this.flags;
                o & Kt.Dirty || o & Kt.Pending && Jy(this.deps, this) ? i() : this.flags = Kt.Watching
            },
            stop() {
                this.flags = Kt.None, this.depsTail = void 0, ml(this)
            }
        };
    return i(), s
}
var tf = {
        exports: {}
    },
    ef = {},
    nf = {
        exports: {}
    },
    af = {};
var xg;

function j_() {
    if (xg) return af;
    xg = 1;
    var n = Nr();

    function i(h, S) {
        return h === S && (h !== 0 || 1 / h === 1 / S) || h !== h && S !== S
    }
    var s = typeof Object.is == "function" ? Object.is : i,
        o = n.useState,
        c = n.useEffect,
        f = n.useLayoutEffect,
        d = n.useDebugValue;

    function m(h, S) {
        var x = S(),
            E = o({
                inst: {
                    value: x,
                    getSnapshot: S
                }
            }),
            M = E[0].inst,
            _ = E[1];
        return f(function() {
            M.value = x, M.getSnapshot = S, y(M) && _({
                inst: M
            })
        }, [h, x, S]), c(function() {
            return y(M) && _({
                inst: M
            }), h(function() {
                y(M) && _({
                    inst: M
                })
            })
        }, [h]), d(x), x
    }

    function y(h) {
        var S = h.getSnapshot;
        h = h.value;
        try {
            var x = S();
            return !s(h, x)
        } catch {
            return !0
        }
    }

    function g(h, S) {
        return S()
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : m;
    return af.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v, af
}
var wg;

function L_() {
    return wg || (wg = 1, nf.exports = j_()), nf.exports
}
var _g;

function U_() {
    if (_g) return ef;
    _g = 1;
    var n = Nr(),
        i = L_();

    function s(g, v) {
        return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v
    }
    var o = typeof Object.is == "function" ? Object.is : s,
        c = i.useSyncExternalStore,
        f = n.useRef,
        d = n.useEffect,
        m = n.useMemo,
        y = n.useDebugValue;
    return ef.useSyncExternalStoreWithSelector = function(g, v, h, S, x) {
        var E = f(null);
        if (E.current === null) {
            var M = {
                hasValue: !1,
                value: null
            };
            E.current = M
        } else M = E.current;
        E = m(function() {
            function R(I) {
                if (!q) {
                    if (q = !0, Y = I, I = S(I), x !== void 0 && M.hasValue) {
                        var P = M.value;
                        if (x(P, I)) return H = P
                    }
                    return H = I
                }
                if (P = H, o(Y, I)) return P;
                var j = S(I);
                return x !== void 0 && x(P, j) ? (Y = I, P) : (Y = I, H = j)
            }
            var q = !1,
                Y, H, nt = h === void 0 ? null : h;
            return [function() {
                return R(v())
            }, nt === null ? void 0 : function() {
                return R(nt())
            }]
        }, [v, h, S, x]);
        var _ = c(g, E[0], E[1]);
        return d(function() {
            M.hasValue = !0, M.value = _
        }, [_]), y(_), _
    }, ef
}
var Eg;

function B_() {
    return Eg || (Eg = 1, tf.exports = U_()), tf.exports
}
var k_ = B_();

function H_(n, i) {
    return n === i
}

function ee(n, i, s = H_) {
    const o = et.useCallback(d => {
            if (!n) return () => {};
            const {
                unsubscribe: m
            } = n.subscribe(d);
            return m
        }, [n]),
        c = et.useCallback(() => n ? .get(), [n]);
    return k_.useSyncExternalStoreWithSelector(o, c, c, i, s)
}
var q_ = {
    get: () => {},
    subscribe: () => ({
        unsubscribe: () => {}
    })
};

function Ti(n) {
    const i = Se(),
        s = et.useContext(n.from ? A_ : Cl),
        o = n.from ? ? s,
        c = o ? n.from ? i.stores.getRouteMatchStore(o) : i.stores.matchStores.get(o) : void 0,
        f = et.useRef(void 0);
    return ee(c ? ? q_, d => {
        if ((n.shouldThrow ? ? !0) && !d && Ke(), d === void 0) return;
        const m = n.select ? n.select(d) : d;
        if (n.structuralSharing ? ? i.options.defaultStructuralSharing) {
            const y = Ba(f.current, m);
            return f.current = y, y
        }
        return m
    })
}

function Wy(n) {
    return Ti({
        from: n.from,
        strict: n.strict,
        structuralSharing: n.structuralSharing,
        select: i => n.select ? n.select(i.loaderData) : i.loaderData
    })
}

function tv(n) {
    const {
        select: i,
        ...s
    } = n;
    return Ti({ ...s,
        select: o => i ? i(o.loaderDeps) : o.loaderDeps
    })
}

function ev(n) {
    return Ti({
        from: n.from,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        strict: n.strict,
        select: i => {
            const s = n.strict === !1 ? i.params : i._strictParams;
            return n.select ? n.select(s) : s
        }
    })
}

function nv(n) {
    return Ti({
        from: n.from,
        strict: n.strict,
        shouldThrow: n.shouldThrow,
        structuralSharing: n.structuralSharing,
        select: i => n.select ? n.select(i.search) : i.search
    })
}

function av(n) {
    const i = Se();
    return et.useCallback(s => i.navigate({ ...s,
        from: s.from ? ? n ? .from
    }), [n ? .from, i])
}

function iv(n) {
    return Ti({ ...n,
        select: i => n.select ? n.select(i.context) : i.context
    })
}
var sv = Wg();
const Y_ = $g(sv);

function G_(n, i) {
    const s = Se(),
        o = x_(i),
        {
            activeProps: c,
            inactiveProps: f,
            activeOptions: d,
            to: m,
            preload: y,
            preloadDelay: g,
            preloadIntentProximity: v,
            hashScrollIntoView: h,
            replace: S,
            startTransition: x,
            resetScroll: E,
            viewTransition: M,
            children: _,
            target: R,
            disabled: q,
            style: Y,
            className: H,
            onClick: nt,
            onBlur: I,
            onFocus: P,
            onMouseEnter: j,
            onMouseLeave: W,
            onTouchStart: ut,
            ignoreBlocker: st,
            params: pt,
            search: bt,
            hash: jt,
            state: Et,
            mask: D,
            reloadDocument: F,
            unsafeRelative: it,
            from: St,
            _fromLocation: $,
            ...A
        } = n,
        V = Df(),
        X = et.useMemo(() => n, [s, n.from, n._fromLocation, n.hash, n.to, n.search, n.params, n.state, n.mask, n.unsafeRelative]),
        J = ee(s.stores.location, Bt => Bt, (Bt, Zt) => Bt.href === Zt.href),
        Z = et.useMemo(() => {
            const Bt = {
                _fromLocation: J,
                ...X
            };
            return s.buildLocation(Bt)
        }, [s, J, X]),
        at = Z.maskedLocation ? Z.maskedLocation.publicHref : Z.publicHref,
        yt = Z.maskedLocation ? Z.maskedLocation.external : Z.external,
        mt = et.useMemo(() => F_(at, yt, s.history, q), [q, yt, at, s.history]),
        dt = et.useMemo(() => {
            if (mt ? .external) return ll(mt.href, s.protocolAllowlist) ? void 0 : mt.href;
            if (!Z_(m) && !(typeof m != "string" || m.indexOf(":") === -1)) try {
                return new URL(m), ll(m, s.protocolAllowlist) ? void 0 : m
            } catch {}
        }, [m, mt, s.protocolAllowlist]),
        xe = et.useMemo(() => {
            if (dt) return !1;
            if (d ? .exact) {
                if (!N1(J.pathname, Z.pathname, s.basepath)) return !1
            } else {
                const Bt = cl(J.pathname, s.basepath),
                    Zt = cl(Z.pathname, s.basepath);
                if (!(Bt.startsWith(Zt) && (Bt.length === Zt.length || Bt[Zt.length] === "/"))) return !1
            }
            return (d ? .includeSearch ? ? !0) && !Pe(J.search, Z.search, {
                partial: !d ? .exact,
                ignoreUndefined: !d ? .explicitUndefined
            }) ? !1 : d ? .includeHash ? V && J.hash === Z.hash : !0
        }, [d ? .exact, d ? .explicitUndefined, d ? .includeHash, d ? .includeSearch, J, dt, V, Z.hash, Z.pathname, Z.search, s.basepath]),
        oe = xe ? Ua(c, {}) ? ? V_ : sf,
        ne = xe ? sf : Ua(f, {}) ? ? sf,
        pn = [H, oe.className, ne.className].filter(Boolean).join(" "),
        le = (Y || oe.style || ne.style) && { ...Y,
            ...oe.style,
            ...ne.style
        },
        [Ja, Dn] = et.useState(!1),
        wn = et.useRef(!1),
        nn = n.reloadDocument || dt ? !1 : y ? ? s.options.defaultPreload,
        we = g ? ? s.options.defaultPreloadDelay ? ? 0,
        Fe = et.useCallback(() => {
            s.preloadRoute({ ...X,
                _builtLocation: Z
            }).catch(Bt => {
                console.warn(Bt), console.warn(pS)
            })
        }, [s, X, Z]);
    S_(o, et.useCallback(Bt => {
        Bt ? .isIntersecting && Fe()
    }, [Fe]), K_, {
        disabled: !!q || nn !== "viewport"
    }), et.useEffect(() => {
        wn.current || !q && nn === "render" && (Fe(), wn.current = !0)
    }, [q, Fe, nn]);
    const Ia = Bt => {
        const Zt = Bt.currentTarget.getAttribute("target"),
            an = R !== void 0 ? R : Zt;
        if (!q && !J_(Bt) && !Bt.defaultPrevented && (!an || an === "_self") && Bt.button === 0) {
            Bt.preventDefault(), sv.flushSync(() => {
                Dn(!0)
            });
            const jn = s.subscribe("onResolved", () => {
                jn(), Dn(!1)
            });
            s.navigate({ ...X,
                replace: S,
                resetScroll: E,
                hashScrollIntoView: h,
                startTransition: x,
                viewTransition: M,
                ignoreBlocker: st
            })
        }
    };
    if (dt) return { ...A,
        ref: o,
        href: dt,
        ..._ && {
            children: _
        },
        ...R && {
            target: R
        },
        ...q && {
            disabled: q
        },
        ...Y && {
            style: Y
        },
        ...H && {
            className: H
        },
        ...nt && {
            onClick: nt
        },
        ...I && {
            onBlur: I
        },
        ...P && {
            onFocus: P
        },
        ...j && {
            onMouseEnter: j
        },
        ...W && {
            onMouseLeave: W
        },
        ...ut && {
            onTouchStart: ut
        }
    };
    const me = Bt => {
            if (q || nn !== "intent") return;
            if (!we) {
                Fe();
                return
            }
            const Zt = Bt.currentTarget;
            if (wr.has(Zt)) return;
            const an = setTimeout(() => {
                wr.delete(Zt), Fe()
            }, we);
            wr.set(Zt, an)
        },
        _n = Bt => {
            q || nn !== "intent" || Fe()
        },
        pe = Bt => {
            if (q || !nn || !we) return;
            const Zt = Bt.currentTarget,
                an = wr.get(Zt);
            an && (clearTimeout(an), wr.delete(Zt))
        };
    return { ...A,
        ...oe,
        ...ne,
        href: mt ? .href,
        ref: o,
        onClick: ps([nt, Ia]),
        onBlur: ps([I, pe]),
        onFocus: ps([P, me]),
        onMouseEnter: ps([j, me]),
        onMouseLeave: ps([W, pe]),
        onTouchStart: ps([ut, _n]),
        disabled: !!q,
        target: R,
        ...le && {
            style: le
        },
        ...pn && {
            className: pn
        },
        ...q && Q_,
        ...xe && P_,
        ...V && Ja && X_
    }
}
var sf = {},
    V_ = {
        className: "active"
    },
    Q_ = {
        role: "link",
        "aria-disabled": !0
    },
    P_ = {
        "data-status": "active",
        "aria-current": "page"
    },
    X_ = {
        "data-transitioning": "transitioning"
    },
    wr = new WeakMap,
    K_ = {
        rootMargin: "100px"
    },
    ps = n => i => {
        for (const s of n)
            if (s) {
                if (i.defaultPrevented) return;
                s(i)
            }
    };

function F_(n, i, s, o) {
    if (!o) return i ? {
        href: n,
        external: !0
    } : {
        href: s.createHref(n) || "/",
        external: !1
    }
}

function Z_(n) {
    if (typeof n != "string") return !1;
    const i = n.charCodeAt(0);
    return i === 47 ? n.charCodeAt(1) !== 47 : i === 46
}
var $t = et.forwardRef((n, i) => {
    const {
        _asChild: s,
        ...o
    } = n, {
        type: c,
        ...f
    } = G_(o, i), d = typeof o.children == "function" ? o.children({
        isActive: f["data-status"] === "active"
    }) : o.children;
    if (!s) {
        const {
            disabled: m,
            ...y
        } = f;
        return et.createElement("a", y, d)
    }
    return et.createElement(s, f, d)
});

function J_(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
var I_ = class extends hy {
    constructor(i) {
        super(i), this.useMatch = s => Ti({
            select: s ? .select,
            from: this.id,
            structuralSharing: s ? .structuralSharing
        }), this.useRouteContext = s => iv({ ...s,
            from: this.id
        }), this.useSearch = s => nv({
            select: s ? .select,
            structuralSharing: s ? .structuralSharing,
            from: this.id
        }), this.useParams = s => ev({
            select: s ? .select,
            structuralSharing: s ? .structuralSharing,
            from: this.id
        }), this.useLoaderDeps = s => tv({ ...s,
            from: this.id
        }), this.useLoaderData = s => Wy({ ...s,
            from: this.id
        }), this.useNavigate = () => av({
            from: this.fullPath
        }), this.Link = tt.forwardRef((s, o) => z.jsx($t, {
            ref: o,
            from: this.fullPath,
            ...s
        }))
    }
};

function $_(n) {
    return new I_(n)
}

function W_() {
    return n => e2(n)
}
var t2 = class extends bS {
    constructor(n) {
        super(n), this.useMatch = i => Ti({
            select: i ? .select,
            from: this.id,
            structuralSharing: i ? .structuralSharing
        }), this.useRouteContext = i => iv({ ...i,
            from: this.id
        }), this.useSearch = i => nv({
            select: i ? .select,
            structuralSharing: i ? .structuralSharing,
            from: this.id
        }), this.useParams = i => ev({
            select: i ? .select,
            structuralSharing: i ? .structuralSharing,
            from: this.id
        }), this.useLoaderDeps = i => tv({ ...i,
            from: this.id
        }), this.useLoaderData = i => Wy({ ...i,
            from: this.id
        }), this.useNavigate = () => av({
            from: this.fullPath
        }), this.Link = tt.forwardRef((i, s) => z.jsx($t, {
            ref: s,
            from: this.fullPath,
            ...i
        }))
    }
};

function e2(n) {
    return new t2(n)
}

function _s(n) {
    return new n2(n, {
        silent: !0
    }).createRoute
}
var n2 = class {
    constructor(n, i) {
        this.path = n, this.createRoute = s => {
            const o = $_(s);
            return o.isRoot = !1, o
        }, this.silent = i ? .silent
    }
};

function Ga(n, i) {
    let s, o, c, f;
    const d = () => (s || (s = n().then(y => {
            s = void 0, o = y[i ? ? "default"]
        }).catch(y => {
            if (c = y, h1(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
                const g = `tanstack_router_reload:${c.message}`;
                sessionStorage.getItem(g) || (sessionStorage.setItem(g, "1"), f = !0)
            }
        })), s),
        m = function(g) {
            if (f) throw window.location.reload(), new Promise(() => {});
            if (c) throw c;
            if (!o)
                if (hl) hl(d());
                else throw d();
            return et.createElement(o, g)
        };
    return m.preload = d, m
}

function a2(n) {
    const i = Se(),
        s = `not-found-${ee(i.stores.location,o=>o.pathname)}-${ee(i.stores.status,o=>o)}`;
    return z.jsx(zf, {
        getResetKey: () => s,
        onCatch: (o, c) => {
            if (be(o)) n.onCatch ? .(o, c);
            else throw o
        },
        errorComponent: ({
            error: o
        }) => {
            if (be(o)) return n.fallback ? .(o);
            throw o
        },
        children: n.children
    })
}

function i2() {
    return z.jsx("p", {
        children: "Not Found"
    })
}

function gs(n) {
    return z.jsx(z.Fragment, {
        children: n.children
    })
}

function rv(n, i, s) {
    return i.options.notFoundComponent ? z.jsx(i.options.notFoundComponent, { ...s
    }) : n.options.defaultNotFoundComponent ? z.jsx(n.options.defaultNotFoundComponent, { ...s
    }) : z.jsx(i2, {})
}

function s2(n) {
    return null
}

function r2() {
    return s2(Se()), null
}
var ov = et.memo(function({
    matchId: i
}) {
    const s = Se(),
        o = s.stores.matchStores.get(i);
    o || Ke();
    const c = ee(s.stores.loadedAt, d => d),
        f = ee(o, d => d);
    return z.jsx(o2, {
        router: s,
        matchId: i,
        resetKey: c,
        matchState: et.useMemo(() => {
            const d = f.routeId,
                m = s.routesById[d].parentRoute ? .id;
            return {
                routeId: d,
                ssr: f.ssr,
                _displayPending: f._displayPending,
                parentRouteId: m
            }
        }, [f._displayPending, f.routeId, f.ssr, s.routesById])
    })
});

function o2({
    router: n,
    matchId: i,
    resetKey: s,
    matchState: o
}) {
    const c = n.routesById[o.routeId],
        f = c.options.pendingComponent ? ? n.options.defaultPendingComponent,
        d = f ? z.jsx(f, {}) : null,
        m = c.options.errorComponent ? ? n.options.defaultErrorComponent,
        y = c.options.onCatch ? ? n.options.defaultOnCatch,
        g = c.isRoot ? c.options.notFoundComponent ? ? n.options.notFoundRoute ? .options.component : c.options.notFoundComponent,
        v = o.ssr === !1 || o.ssr === "data-only",
        h = (!c.isRoot || c.options.wrapInSuspense || v) && (c.options.wrapInSuspense ? ? f ? ? (c.options.errorComponent ? .preload || v)) ? et.Suspense : gs,
        S = m ? zf : gs,
        x = g ? a2 : gs;
    return z.jsxs(c.isRoot ? c.options.shellComponent ? ? gs : gs, {
        children: [z.jsx(Cl.Provider, {
            value: i,
            children: z.jsx(h, {
                fallback: d,
                children: z.jsx(S, {
                    getResetKey: () => s,
                    errorComponent: m || Nf,
                    onCatch: (E, M) => {
                        if (be(E)) throw E.routeId ? ? = o.routeId, E;
                        y ? .(E, M)
                    },
                    children: z.jsx(x, {
                        fallback: E => {
                            if (E.routeId ? ? = o.routeId, !g || E.routeId && E.routeId !== o.routeId || !E.routeId && !c.isRoot) throw E;
                            return et.createElement(g, E)
                        },
                        children: v || o._displayPending ? z.jsx(T_, {
                            fallback: d,
                            children: z.jsx(Rg, {
                                matchId: i
                            })
                        }) : z.jsx(Rg, {
                            matchId: i
                        })
                    })
                })
            })
        }), o.parentRouteId === wi ? z.jsxs(z.Fragment, {
            children: [z.jsx(l2, {
                resetKey: s
            }), n.options.scrollRestoration && ey ? z.jsx(r2, {}) : null]
        }) : null]
    })
}

function l2({
    resetKey: n
}) {
    const i = Se(),
        s = et.useRef(void 0);
    return Er(() => {
        const o = i.latestLocation.href;
        (s.current === void 0 || s.current !== o) && (i.emit({
            type: "onRendered",
            ...bs(i.stores.location.get(), i.stores.resolvedLocation.get())
        }), s.current = o)
    }, [i.latestLocation.state.__TSR_key, n, i]), null
}
var Rg = et.memo(function({
        matchId: i
    }) {
        const s = Se(),
            o = (v, h) => s.getMatch(v.id) ? ._nonReactive[h] ? ? v._nonReactive[h],
            c = s.stores.matchStores.get(i);
        c || Ke();
        const f = ee(c, v => v),
            d = f.routeId,
            m = s.routesById[d],
            y = et.useMemo(() => {
                const v = (s.routesById[d].options.remountDeps ? ? s.options.defaultRemountDeps) ? .({
                    routeId: d,
                    loaderDeps: f.loaderDeps,
                    params: f._strictParams,
                    search: f._strictSearch
                });
                return v ? JSON.stringify(v) : void 0
            }, [d, f.loaderDeps, f._strictParams, f._strictSearch, s.options.defaultRemountDeps, s.routesById]),
            g = et.useMemo(() => {
                const v = m.options.component ? ? s.options.defaultComponent;
                return v ? z.jsx(v, {}, y) : z.jsx(gf, {})
            }, [y, m.options.component, s.options.defaultComponent]);
        if (f._displayPending) throw o(f, "displayPendingPromise");
        if (f._forcePending) throw o(f, "minPendingPromise");
        if (f.status === "pending") {
            const v = m.options.pendingMinMs ? ? s.options.defaultPendingMinMs;
            if (v) {
                const h = s.getMatch(f.id);
                if (h && !h._nonReactive.minPendingPromise) {
                    const S = Ei();
                    h._nonReactive.minPendingPromise = S, setTimeout(() => {
                        S.resolve(), h._nonReactive.minPendingPromise = void 0
                    }, v)
                }
            }
            throw o(f, "loadPromise")
        }
        if (f.status === "notFound") return be(f.error) || Ke(), rv(s, m, f.error);
        if (f.status === "redirected") throw Xe(f.error) || Ke(), o(f, "loadPromise");
        if (f.status === "error") throw f.error;
        return g
    }),
    gf = et.memo(function() {
        const i = Se(),
            s = et.useContext(Cl);
        let o, c = !1,
            f; {
            const g = s ? i.stores.matchStores.get(s) : void 0;
            [o, c] = ee(g, v => [v ? .routeId, v ? .globalNotFound ? ? !1]), f = ee(i.stores.matchesId, v => v[v.findIndex(h => h === s) + 1])
        }
        const d = o ? i.routesById[o] : void 0,
            m = i.options.defaultPendingComponent ? z.jsx(i.options.defaultPendingComponent, {}) : null;
        if (c) return d || Ke(), rv(i, d, void 0);
        if (!f) return null;
        const y = z.jsx(ov, {
            matchId: f
        });
        return o === wi ? z.jsx(et.Suspense, {
            fallback: m,
            children: y
        }) : y
    });

function c2() {
    const n = Se(),
        i = et.useRef({
            router: n,
            mounted: !1
        }),
        [s, o] = et.useState(!1),
        c = ee(n.stores.isLoading, h => h),
        f = ee(n.stores.hasPending, h => h),
        d = Wu(c),
        m = c || s || f,
        y = Wu(m),
        g = c || f,
        v = Wu(g);
    return n.startTransition = h => {
        o(!0), et.startTransition(() => {
            h(), o(!1)
        })
    }, et.useEffect(() => {
        const h = n.history.subscribe(n.load),
            S = n.buildLocation({
                to: n.latestLocation.pathname,
                search: !0,
                params: !0,
                hash: !0,
                state: !0,
                _includeValidateSearch: !0
            });
        return qa(n.latestLocation.publicHref) !== qa(S.publicHref) && n.commitLocation({ ...S,
            replace: !0
        }), () => {
            h()
        }
    }, [n, n.history]), Er(() => {
        if (typeof window < "u" && n.ssr || i.current.router === n && i.current.mounted) return;
        i.current = {
            router: n,
            mounted: !0
        }, (async () => {
            try {
                await n.load()
            } catch (S) {
                console.error(S)
            }
        })()
    }, [n]), Er(() => {
        d && !c && n.emit({
            type: "onLoad",
            ...bs(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }, [d, n, c]), Er(() => {
        v && !g && n.emit({
            type: "onBeforeRouteMount",
            ...bs(n.stores.location.get(), n.stores.resolvedLocation.get())
        })
    }, [g, v, n]), Er(() => {
        if (y && !m) {
            const h = bs(n.stores.location.get(), n.stores.resolvedLocation.get());
            n.emit({
                type: "onResolved",
                ...h
            }), Iy(() => {
                n.stores.status.set("idle"), n.stores.resolvedLocation.set(n.stores.location.get())
            }), h.hrefChanged && SS(n)
        }
    }, [m, y, n]), null
}

function u2() {
    const n = Se(),
        i = n.routesById[wi].options.pendingComponent ? ? n.options.defaultPendingComponent,
        s = i ? z.jsx(i, {}) : null,
        o = z.jsxs(typeof document < "u" && n.ssr ? gs : et.Suspense, {
            fallback: s,
            children: [z.jsx(c2, {}), z.jsx(f2, {})]
        });
    return n.options.InnerWrap ? z.jsx(n.options.InnerWrap, {
        children: o
    }) : o
}

function f2() {
    const n = Se(),
        i = ee(n.stores.firstId, c => c),
        s = ee(n.stores.loadedAt, c => c),
        o = i ? z.jsx(ov, {
            matchId: i
        }) : null;
    return z.jsx(Cl.Provider, {
        value: i,
        children: n.options.disableGlobalCatchBoundary ? o : z.jsx(zf, {
            getResetKey: () => s,
            errorComponent: Nf,
            onCatch: void 0,
            children: o
        })
    })
}
var d2 = n => ({
        createMutableStore: Sg,
        createReadonlyStore: Sg,
        batch: Iy
    }),
    h2 = n => new m2(n),
    m2 = class extends oS {
        constructor(n) {
            super(n, d2)
        }
    };

function p2({
    router: n,
    children: i,
    ...s
}) {
    Object.keys(s).length > 0 && n.update({ ...n.options,
        ...s,
        context: { ...n.options.context,
            ...s.context
        }
    });
    const o = z.jsx(Zy.Provider, {
        value: n,
        children: i
    });
    return n.options.Wrap ? z.jsx(n.options.Wrap, {
        children: o
    }) : o
}

function g2({
    router: n,
    ...i
}) {
    return z.jsx(p2, {
        router: n,
        ...i,
        children: z.jsx(u2, {})
    })
}

function y2(n) {
    const i = Se({
            warn: n ? .router === void 0
        }),
        s = n ? .router || i,
        o = et.useRef(void 0);
    return ee(s.stores.__store, c => {
        if (n ? .select) {
            if (n.structuralSharing ? ? s.options.defaultStructuralSharing) {
                const f = Ba(o.current, n.select(c));
                return o.current = f, f
            }
            return n.select(c)
        }
        return c
    })
}

function lv(n) {
    const {
        attrs: i,
        children: s,
        nonce: o
    } = n;
    switch (n.tag) {
        case "title":
            return z.jsx("title", { ...i,
                suppressHydrationWarning: !0,
                children: s
            });
        case "meta":
            return z.jsx("meta", { ...i,
                suppressHydrationWarning: !0
            });
        case "link":
            return z.jsx("link", { ...i,
                precedence: i ? .precedence ? ? (i ? .rel === "stylesheet" ? "default" : void 0),
                nonce: o,
                suppressHydrationWarning: !0
            });
        case "style":
            return n.inlineCss, z.jsx("style", { ...i,
                dangerouslySetInnerHTML: {
                    __html: s
                },
                nonce: o
            });
        case "script":
            return z.jsx(v2, {
                attrs: i,
                children: s
            });
        default:
            return null
    }
}

function v2({
    attrs: n,
    children: i
}) {
    Se();
    const s = Df(),
        o = typeof n ? .type == "string" && n.type !== "" && n.type !== "text/javascript" && n.type !== "module";
    if (et.useEffect(() => {
            if (!o) {
                if (n ? .src) {
                    const c = (() => {
                        try {
                            const d = document.baseURI || window.location.href;
                            return new URL(n.src, d).href
                        } catch {
                            return n.src
                        }
                    })();
                    if (Array.from(document.querySelectorAll("script[src]")).find(d => d.src === c)) return;
                    const f = document.createElement("script");
                    for (const [d, m] of Object.entries(n)) d !== "suppressHydrationWarning" && m !== void 0 && m !== !1 && f.setAttribute(d, typeof m == "boolean" ? "" : String(m));
                    return document.head.appendChild(f), () => {
                        f.parentNode && f.parentNode.removeChild(f)
                    }
                }
                if (typeof i == "string") {
                    const c = typeof n ? .type == "string" ? n.type : "text/javascript",
                        f = typeof n ? .nonce == "string" ? n.nonce : void 0;
                    if (Array.from(document.querySelectorAll("script:not([src])")).find(m => {
                            if (!(m instanceof HTMLScriptElement)) return !1;
                            const y = m.getAttribute("type") ? ? "text/javascript",
                                g = m.getAttribute("nonce") ? ? void 0;
                            return m.textContent === i && y === c && g === f
                        })) return;
                    const d = document.createElement("script");
                    if (d.textContent = i, n)
                        for (const [m, y] of Object.entries(n)) m !== "suppressHydrationWarning" && y !== void 0 && y !== !1 && d.setAttribute(m, typeof y == "boolean" ? "" : String(y));
                    return document.head.appendChild(d), () => {
                        d.parentNode && d.parentNode.removeChild(d)
                    }
                }
            }
        }, [n, i, o]), o && typeof i == "string") return z.jsx("script", { ...n,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: i
        }
    });
    if (!s) {
        if (n ? .src) return z.jsx("script", { ...n,
            suppressHydrationWarning: !0
        });
        if (typeof i == "string") return z.jsx("script", { ...n,
            dangerouslySetInnerHTML: {
                __html: i
            },
            suppressHydrationWarning: !0
        })
    }
    return null
}
var b2 = n => {
    const i = Se(),
        s = i.options.ssr ? .nonce,
        o = ee(i.stores.matches, g => g.map(v => v.meta).filter(Boolean), Pe),
        c = et.useMemo(() => {
            const g = [],
                v = {};
            let h;
            for (let S = o.length - 1; S >= 0; S--) {
                const x = o[S];
                for (let E = x.length - 1; E >= 0; E--) {
                    const M = x[E];
                    if (M)
                        if (M.title) h || (h = {
                            tag: "title",
                            children: M.title
                        });
                        else if ("script:ld+json" in M) try {
                        const _ = JSON.stringify(M["script:ld+json"]);
                        g.push({
                            tag: "script",
                            attrs: {
                                type: "application/ld+json"
                            },
                            children: v1(_)
                        })
                    } catch {} else {
                        const _ = M.name ? ? M.property;
                        if (_) {
                            if (v[_]) continue;
                            v[_] = !0
                        }
                        g.push({
                            tag: "meta",
                            attrs: { ...M,
                                nonce: s
                            }
                        })
                    }
                }
            }
            return h && g.push(h), s && g.push({
                tag: "meta",
                attrs: {
                    property: "csp-nonce",
                    content: s
                }
            }), g.reverse(), g
        }, [o, s]),
        f = ee(i.stores.matches, g => {
            const v = g.map(x => x.links).filter(Boolean).flat(1).map(x => ({
                    tag: "link",
                    attrs: { ...x,
                        nonce: s
                    }
                })),
                h = i.ssr ? .manifest,
                S = g.map(x => h ? .routes[x.routeId] ? .assets ? ? []).filter(Boolean).flat(1).flatMap(x => x.tag === "link" ? vS(h, x) ? [] : [{
                    tag: "link",
                    attrs: { ...x.attrs,
                        crossOrigin: ig(n, "stylesheet") ? ? x.attrs ? .crossOrigin,
                        suppressHydrationWarning: !0,
                        nonce: s
                    }
                }] : x.tag === "style" ? [{
                    tag: "style",
                    attrs: { ...x.attrs,
                        nonce: s
                    },
                    children: x.children,
                    ...x.inlineCss ? {
                        inlineCss: !0
                    } : {}
                }] : []);
            return [...v, ...S]
        }, Pe),
        d = ee(i.stores.matches, g => {
            const v = [];
            return g.map(h => i.looseRoutesById[h.routeId]).forEach(h => i.ssr ? .manifest ? .routes[h.id] ? .preloads ? .filter(Boolean).forEach(S => {
                const x = gS(S);
                v.push({
                    tag: "link",
                    attrs: {
                        rel: "modulepreload",
                        href: x.href,
                        crossOrigin: ig(n, "modulepreload") ? ? x.crossOrigin,
                        nonce: s
                    }
                })
            })), v
        }, Pe),
        m = ee(i.stores.matches, g => g.map(v => v.styles).flat(1).filter(Boolean).map(({
            children: v,
            ...h
        }) => ({
            tag: "style",
            attrs: { ...h,
                nonce: s
            },
            children: v
        })), Pe),
        y = ee(i.stores.matches, g => g.map(v => v.headScripts).flat(1).filter(Boolean).map(({
            children: v,
            ...h
        }) => ({
            tag: "script",
            attrs: { ...h,
                nonce: s
            },
            children: v
        })), Pe);
    return S2([...c, ...d, ...f, ...m, ...y], g => JSON.stringify(g))
};

function S2(n, i) {
    const s = new Set;
    return n.filter(o => {
        const c = i(o);
        return s.has(c) ? !1 : (s.add(c), !0)
    })
}

function x2(n) {
    const i = b2(n.assetCrossOrigin),
        s = Se().options.ssr ? .nonce;
    return z.jsx(z.Fragment, {
        children: i.map(o => et.createElement(lv, { ...o,
            key: `tsr-meta-${JSON.stringify(o)}`,
            nonce: s
        }))
    })
}
var w2 = () => {
    const n = Se(),
        i = n.options.ssr ? .nonce,
        s = f => {
            const d = [],
                m = n.ssr ? .manifest;
            return m ? (f.map(y => n.looseRoutesById[y.routeId]).forEach(y => m.routes[y.id] ? .assets ? .filter(g => g.tag === "script").forEach(g => {
                d.push({
                    tag: "script",
                    attrs: { ...g.attrs,
                        nonce: i
                    },
                    children: g.children
                })
            })), d) : []
        },
        o = f => f.map(d => d.scripts).flat(1).filter(Boolean).map(({
            children: d,
            ...m
        }) => ({
            tag: "script",
            attrs: { ...m,
                suppressHydrationWarning: !0,
                nonce: i
            },
            children: d
        })),
        c = ee(n.stores.matches, s, Pe);
    return _2(n, ee(n.stores.matches, o, Pe), c)
};

function _2(n, i, s) {
    let o;
    n.serverSsr && (o = n.serverSsr.takeBufferedScripts());
    const c = [...i, ...s];
    return o && c.unshift(o), z.jsx(z.Fragment, {
        children: c.map((f, d) => et.createElement(lv, { ...f,
            key: `tsr-scripts-${f.tag}-${d}`
        }))
    })
}
var vs = (n, i) => {
    const s = {
        type: "request",
        ...i || n
    };
    return {
        options: s,
        middleware: o => vs({}, Object.assign(s, {
            middleware: o
        })),
        inputValidator: o => vs({}, Object.assign(s, {
            inputValidator: o
        })),
        client: o => vs({}, Object.assign(s, {
            client: o
        })),
        server: o => vs({}, Object.assign(s, {
            server: o
        }))
    }
};

function cv(n, i) {
    for (let s = 0, o = i.length; s < o; s++) {
        const c = i[s];
        n.has(c) || (n.add(c), c.extends && cv(n, c.extends))
    }
}
var E2 = n => ({
    getOptions: async () => {
        const i = await n();
        if (i.serializationAdapters) {
            const s = new Set;
            cv(s, i.serializationAdapters), i.serializationAdapters = Array.from(s)
        }
        return i
    },
    createMiddleware: vs
});
const R2 = vs(),
    Tg = E2(() => ({
        requestMiddleware: [R2]
    }));
var Al = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(n) {
            return this.listeners.add(n), this.onSubscribe(), () => {
                this.listeners.delete(n), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    T2 = class extends Al {#
        t;#
        n;#
        e;
        constructor() {
            super(), this.#e = n => {
                if (typeof window < "u" && window.addEventListener) {
                    const i = () => n();
                    return window.addEventListener("visibilitychange", i, !1), () => {
                        window.removeEventListener("visibilitychange", i)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#e)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n ? .(), this.#n = void 0)
        }
        setEventListener(n) {
            this.#e = n, this.#n ? .(), this.#n = n(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            })
        }
        setFocused(n) {
            this.#t !== n && (this.#t = n, this.onFocus())
        }
        onFocus() {
            const n = this.isFocused();
            this.listeners.forEach(i => {
                i(n)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document ? .visibilityState !== "hidden"
        }
    },
    uv = new T2,
    C2 = {
        setTimeout: (n, i) => setTimeout(n, i),
        clearTimeout: n => clearTimeout(n),
        setInterval: (n, i) => setInterval(n, i),
        clearInterval: n => clearInterval(n)
    },
    A2 = class {#
        t = C2;#
        n = !1;
        setTimeoutProvider(n) {
            this.#t = n
        }
        setTimeout(n, i) {
            return this.#t.setTimeout(n, i)
        }
        clearTimeout(n) {
            this.#t.clearTimeout(n)
        }
        setInterval(n, i) {
            return this.#t.setInterval(n, i)
        }
        clearInterval(n) {
            this.#t.clearInterval(n)
        }
    },
    yf = new A2;

function M2(n) {
    setTimeout(n, 0)
}
var O2 = typeof window > "u" || "Deno" in globalThis;

function xn() {}

function z2(n, i) {
    return typeof n == "function" ? n(i) : n
}

function N2(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}

function D2(n, i) {
    return Math.max(n + (i || 0) - Date.now(), 0)
}

function vf(n, i) {
    return typeof n == "function" ? n(i) : n
}

function j2(n, i) {
    return typeof n == "function" ? n(i) : n
}

function Cg(n, i) {
    const {
        type: s = "all",
        exact: o,
        fetchStatus: c,
        predicate: f,
        queryKey: d,
        stale: m
    } = n;
    if (d) {
        if (o) {
            if (i.queryHash !== jf(d, i.options)) return !1
        } else if (!zr(i.queryKey, d)) return !1
    }
    if (s !== "all") {
        const y = i.isActive();
        if (s === "active" && !y || s === "inactive" && y) return !1
    }
    return !(typeof m == "boolean" && i.isStale() !== m || c && c !== i.state.fetchStatus || f && !f(i))
}

function Ag(n, i) {
    const {
        exact: s,
        status: o,
        predicate: c,
        mutationKey: f
    } = n;
    if (f) {
        if (!i.options.mutationKey) return !1;
        if (s) {
            if (Or(i.options.mutationKey) !== Or(f)) return !1
        } else if (!zr(i.options.mutationKey, f)) return !1
    }
    return !(o && i.state.status !== o || c && !c(i))
}

function jf(n, i) {
    return (i ? .queryKeyHashFn || Or)(n)
}

function Or(n) {
    return JSON.stringify(n, (i, s) => bf(s) ? Object.keys(s).sort().reduce((o, c) => (o[c] = s[c], o), {}) : s)
}

function zr(n, i) {
    return n === i ? !0 : typeof n != typeof i ? !1 : n && i && typeof n == "object" && typeof i == "object" ? Object.keys(i).every(s => zr(n[s], i[s])) : !1
}
var L2 = Object.prototype.hasOwnProperty;

function fv(n, i, s = 0) {
    if (n === i) return n;
    if (s > 500) return i;
    const o = Mg(n) && Mg(i);
    if (!o && !(bf(n) && bf(i))) return i;
    const f = (o ? n : Object.keys(n)).length,
        d = o ? i : Object.keys(i),
        m = d.length,
        y = o ? new Array(m) : {};
    let g = 0;
    for (let v = 0; v < m; v++) {
        const h = o ? v : d[v],
            S = n[h],
            x = i[h];
        if (S === x) {
            y[h] = S, (o ? v < f : L2.call(n, h)) && g++;
            continue
        }
        if (S === null || x === null || typeof S != "object" || typeof x != "object") {
            y[h] = x;
            continue
        }
        const E = fv(S, x, s + 1);
        y[h] = E, E === S && g++
    }
    return f === m && g === f ? n : y
}

function Mg(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}

function bf(n) {
    if (!Og(n)) return !1;
    const i = n.constructor;
    if (i === void 0) return !0;
    const s = i.prototype;
    return !(!Og(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}

function Og(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}

function U2(n) {
    return new Promise(i => {
        yf.setTimeout(i, n)
    })
}

function B2(n, i, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(n, i) : s.structuralSharing !== !1 ? fv(n, i) : i
}

function k2(n, i, s = 0) {
    const o = [...n, i];
    return s && o.length > s ? o.slice(1) : o
}

function H2(n, i, s = 0) {
    const o = [i, ...n];
    return s && o.length > s ? o.slice(0, -1) : o
}
var Lf = Symbol();

function dv(n, i) {
    return !n.queryFn && i ? .initialPromise ? () => i.initialPromise : !n.queryFn || n.queryFn === Lf ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}

function q2(n, i, s) {
    let o = !1,
        c;
    return Object.defineProperty(n, "signal", {
        enumerable: !0,
        get: () => (c ? ? = i(), o || (o = !0, c.aborted ? s() : c.addEventListener("abort", s, {
            once: !0
        })), c)
    }), n
}
var hv = (() => {
    let n = () => O2;
    return {
        isServer() {
            return n()
        },
        setIsServer(i) {
            n = i
        }
    }
})();

function Y2() {
    let n, i;
    const s = new Promise((c, f) => {
        n = c, i = f
    });
    s.status = "pending", s.catch(() => {});

    function o(c) {
        Object.assign(s, c), delete s.resolve, delete s.reject
    }
    return s.resolve = c => {
        o({
            status: "fulfilled",
            value: c
        }), n(c)
    }, s.reject = c => {
        o({
            status: "rejected",
            reason: c
        }), i(c)
    }, s
}
var G2 = M2;

function V2() {
    let n = [],
        i = 0,
        s = m => {
            m()
        },
        o = m => {
            m()
        },
        c = G2;
    const f = m => {
            i ? n.push(m) : c(() => {
                s(m)
            })
        },
        d = () => {
            const m = n;
            n = [], m.length && c(() => {
                o(() => {
                    m.forEach(y => {
                        s(y)
                    })
                })
            })
        };
    return {
        batch: m => {
            let y;
            i++;
            try {
                y = m()
            } finally {
                i--, i || d()
            }
            return y
        },
        batchCalls: m => (...y) => {
            f(() => {
                m(...y)
            })
        },
        schedule: f,
        setNotifyFunction: m => {
            s = m
        },
        setBatchNotifyFunction: m => {
            o = m
        },
        setScheduler: m => {
            c = m
        }
    }
}
var De = V2(),
    Q2 = class extends Al {#
        t = !0;#
        n;#
        e;
        constructor() {
            super(), this.#e = n => {
                if (typeof window < "u" && window.addEventListener) {
                    const i = () => n(!0),
                        s = () => n(!1);
                    return window.addEventListener("online", i, !1), window.addEventListener("offline", s, !1), () => {
                        window.removeEventListener("online", i), window.removeEventListener("offline", s)
                    }
                }
            }
        }
        onSubscribe() {
            this.#n || this.setEventListener(this.#e)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#n ? .(), this.#n = void 0)
        }
        setEventListener(n) {
            this.#e = n, this.#n ? .(), this.#n = n(this.setOnline.bind(this))
        }
        setOnline(n) {
            this.#t !== n && (this.#t = n, this.listeners.forEach(s => {
                s(n)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    pl = new Q2;

function P2(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}

function mv(n) {
    return (n ? ? "online") === "online" ? pl.isOnline() : !0
}
var Sf = class extends Error {
    constructor(n) {
        super("CancelledError"), this.revert = n ? .revert, this.silent = n ? .silent
    }
};

function pv(n) {
    let i = !1,
        s = 0,
        o;
    const c = Y2(),
        f = () => c.status !== "pending",
        d = M => {
            if (!f()) {
                const _ = new Sf(M);
                S(_), n.onCancel ? .(_)
            }
        },
        m = () => {
            i = !0
        },
        y = () => {
            i = !1
        },
        g = () => uv.isFocused() && (n.networkMode === "always" || pl.isOnline()) && n.canRun(),
        v = () => mv(n.networkMode) && n.canRun(),
        h = M => {
            f() || (o ? .(), c.resolve(M))
        },
        S = M => {
            f() || (o ? .(), c.reject(M))
        },
        x = () => new Promise(M => {
            o = _ => {
                (f() || g()) && M(_)
            }, n.onPause ? .()
        }).then(() => {
            o = void 0, f() || n.onContinue ? .()
        }),
        E = () => {
            if (f()) return;
            let M;
            const _ = s === 0 ? n.initialPromise : void 0;
            try {
                M = _ ? ? n.fn()
            } catch (R) {
                M = Promise.reject(R)
            }
            Promise.resolve(M).then(h).catch(R => {
                if (f()) return;
                const q = n.retry ? ? (hv.isServer() ? 0 : 3),
                    Y = n.retryDelay ? ? P2,
                    H = typeof Y == "function" ? Y(s, R) : Y,
                    nt = q === !0 || typeof q == "number" && s < q || typeof q == "function" && q(s, R);
                if (i || !nt) {
                    S(R);
                    return
                }
                s++, n.onFail ? .(s, R), U2(H).then(() => g() ? void 0 : x()).then(() => {
                    i ? S(R) : E()
                })
            })
        };
    return {
        promise: c,
        status: () => c.status,
        cancel: d,
        continue: () => (o ? .(), c),
        cancelRetry: m,
        continueRetry: y,
        canStart: v,
        start: () => (v() ? E() : x().then(E), c)
    }
}
var gv = class {#
        t;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), N2(this.gcTime) && (this.#t = yf.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(n) {
            this.gcTime = Math.max(this.gcTime || 0, n ? ? (hv.isServer() ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            this.#t !== void 0 && (yf.clearTimeout(this.#t), this.#t = void 0)
        }
    },
    X2 = class extends gv {#
        t;#
        n;#
        e;#
        i;#
        a;#
        s;#
        r;
        constructor(n) {
            super(), this.#r = !1, this.#s = n.defaultOptions, this.setOptions(n.options), this.observers = [], this.#i = n.client, this.#e = this.#i.getQueryCache(), this.queryKey = n.queryKey, this.queryHash = n.queryHash, this.#t = Ng(this.options), this.state = n.state ? ? this.#t, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#a ? .promise
        }
        setOptions(n) {
            if (this.options = { ...this.#s,
                    ...n
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const i = Ng(this.options);
                i.data !== void 0 && (this.setState(zg(i.data, i.dataUpdatedAt)), this.#t = i)
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#e.remove(this)
        }
        setData(n, i) {
            const s = B2(this.state.data, n, this.options);
            return this.#o({
                data: s,
                type: "success",
                dataUpdatedAt: i ? .updatedAt,
                manual: i ? .manual
            }), s
        }
        setState(n, i) {
            this.#o({
                type: "setState",
                state: n,
                setStateOptions: i
            })
        }
        cancel(n) {
            const i = this.#a ? .promise;
            return this.#a ? .cancel(n), i ? i.then(xn).catch(xn) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        get resetState() {
            return this.#t
        }
        reset() {
            this.destroy(), this.setState(this.resetState)
        }
        isActive() {
            return this.observers.some(n => j2(n.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Lf || !this.isFetched()
        }
        isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(n => vf(n.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(n = 0) {
            return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !D2(this.state.dataUpdatedAt, n)
        }
        onFocus() {
            this.observers.find(i => i.shouldFetchOnWindowFocus()) ? .refetch({
                cancelRefetch: !1
            }), this.#a ? .continue()
        }
        onOnline() {
            this.observers.find(i => i.shouldFetchOnReconnect()) ? .refetch({
                cancelRefetch: !1
            }), this.#a ? .continue()
        }
        addObserver(n) {
            this.observers.includes(n) || (this.observers.push(n), this.clearGcTimeout(), this.#e.notify({
                type: "observerAdded",
                query: this,
                observer: n
            }))
        }
        removeObserver(n) {
            this.observers.includes(n) && (this.observers = this.observers.filter(i => i !== n), this.observers.length || (this.#a && (this.#r || this.#l() ? this.#a.cancel({
                revert: !0
            }) : this.#a.cancelRetry()), this.scheduleGc()), this.#e.notify({
                type: "observerRemoved",
                query: this,
                observer: n
            }))
        }
        getObserversCount() {
            return this.observers.length
        }#
        l() {
            return this.state.fetchStatus === "paused" && this.state.status === "pending"
        }
        invalidate() {
            this.state.isInvalidated || this.#o({
                type: "invalidate"
            })
        }
        async fetch(n, i) {
            if (this.state.fetchStatus !== "idle" && this.#a ? .status() !== "rejected") {
                if (this.state.data !== void 0 && i ? .cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#a) return this.#a.continueRetry(), this.#a.promise
            }
            if (n && this.setOptions(n), !this.options.queryFn) {
                const m = this.observers.find(y => y.options.queryFn);
                m && this.setOptions(m.options)
            }
            const s = new AbortController,
                o = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (this.#r = !0, s.signal)
                    })
                },
                c = () => {
                    const m = dv(this.options, i),
                        g = (() => {
                            const v = {
                                client: this.#i,
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(v), v
                        })();
                    return this.#r = !1, this.options.persister ? this.options.persister(m, g, this) : m(g)
                },
                d = (() => {
                    const m = {
                        fetchOptions: i,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: this.#i,
                        state: this.state,
                        fetchFn: c
                    };
                    return o(m), m
                })();
            this.options.behavior ? .onFetch(d, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions ? .meta) && this.#o({
                type: "fetch",
                meta: d.fetchOptions ? .meta
            }), this.#a = pv({
                initialPromise: i ? .initialPromise,
                fn: d.fetchFn,
                onCancel: m => {
                    m instanceof Sf && m.revert && this.setState({ ...this.#n,
                        fetchStatus: "idle"
                    }), s.abort()
                },
                onFail: (m, y) => {
                    this.#o({
                        type: "failed",
                        failureCount: m,
                        error: y
                    })
                },
                onPause: () => {
                    this.#o({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#o({
                        type: "continue"
                    })
                },
                retry: d.options.retry,
                retryDelay: d.options.retryDelay,
                networkMode: d.options.networkMode,
                canRun: () => !0
            });
            try {
                const m = await this.#a.start();
                if (m === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(m), this.#e.config.onSuccess ? .(m, this), this.#e.config.onSettled ? .(m, this.state.error, this), m
            } catch (m) {
                if (m instanceof Sf) {
                    if (m.silent) return this.#a.promise;
                    if (m.revert) {
                        if (this.state.data === void 0) throw m;
                        return this.state.data
                    }
                }
                throw this.#o({
                    type: "error",
                    error: m
                }), this.#e.config.onError ? .(m, this), this.#e.config.onSettled ? .(this.state.data, m, this), m
            } finally {
                this.scheduleGc()
            }
        }#
        o(n) {
            const i = s => {
                switch (n.type) {
                    case "failed":
                        return { ...s,
                            fetchFailureCount: n.failureCount,
                            fetchFailureReason: n.error
                        };
                    case "pause":
                        return { ...s,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return { ...s,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return { ...s,
                            ...K2(s.data, this.options),
                            fetchMeta: n.meta ? ? null
                        };
                    case "success":
                        const o = { ...s,
                            ...zg(n.data, n.dataUpdatedAt),
                            dataUpdateCount: s.dataUpdateCount + 1,
                            ...!n.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#n = n.manual ? o : void 0, o;
                    case "error":
                        const c = n.error;
                        return { ...s,
                            error: c,
                            errorUpdateCount: s.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: s.fetchFailureCount + 1,
                            fetchFailureReason: c,
                            fetchStatus: "idle",
                            status: "error",
                            isInvalidated: !0
                        };
                    case "invalidate":
                        return { ...s,
                            isInvalidated: !0
                        };
                    case "setState":
                        return { ...s,
                            ...n.state
                        }
                }
            };
            this.state = i(this.state), De.batch(() => {
                this.observers.forEach(s => {
                    s.onQueryUpdate()
                }), this.#e.notify({
                    query: this,
                    type: "updated",
                    action: n
                })
            })
        }
    };

function K2(n, i) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: mv(i.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function zg(n, i) {
    return {
        data: n,
        dataUpdatedAt: i ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Ng(n) {
    const i = typeof n.initialData == "function" ? n.initialData() : n.initialData,
        s = i !== void 0,
        o = s ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: i,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? o ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}

function Dg(n) {
    return {
        onFetch: (i, s) => {
            const o = i.options,
                c = i.fetchOptions ? .meta ? .fetchMore ? .direction,
                f = i.state.data ? .pages || [],
                d = i.state.data ? .pageParams || [];
            let m = {
                    pages: [],
                    pageParams: []
                },
                y = 0;
            const g = async () => {
                let v = !1;
                const h = E => {
                        q2(E, () => i.signal, () => v = !0)
                    },
                    S = dv(i.options, i.fetchOptions),
                    x = async (E, M, _) => {
                        if (v) return Promise.reject();
                        if (M == null && E.pages.length) return Promise.resolve(E);
                        const q = (() => {
                                const I = {
                                    client: i.client,
                                    queryKey: i.queryKey,
                                    pageParam: M,
                                    direction: _ ? "backward" : "forward",
                                    meta: i.options.meta
                                };
                                return h(I), I
                            })(),
                            Y = await S(q),
                            {
                                maxPages: H
                            } = i.options,
                            nt = _ ? H2 : k2;
                        return {
                            pages: nt(E.pages, Y, H),
                            pageParams: nt(E.pageParams, M, H)
                        }
                    };
                if (c && f.length) {
                    const E = c === "backward",
                        M = E ? F2 : jg,
                        _ = {
                            pages: f,
                            pageParams: d
                        },
                        R = M(o, _);
                    m = await x(_, R, E)
                } else {
                    const E = n ? ? f.length;
                    do {
                        const M = y === 0 ? d[0] ? ? o.initialPageParam : jg(o, m);
                        if (y > 0 && M == null) break;
                        m = await x(m, M), y++
                    } while (y < E)
                }
                return m
            };
            i.options.persister ? i.fetchFn = () => i.options.persister ? .(g, {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal
            }, s) : i.fetchFn = g
        }
    }
}

function jg(n, {
    pages: i,
    pageParams: s
}) {
    const o = i.length - 1;
    return i.length > 0 ? n.getNextPageParam(i[o], i, s[o], s) : void 0
}

function F2(n, {
    pages: i,
    pageParams: s
}) {
    return i.length > 0 ? n.getPreviousPageParam ? .(i[0], i, s[0], s) : void 0
}
var Z2 = class extends gv {#
    t;#
    n;#
    e;#
    i;
    constructor(n) {
        super(), this.#t = n.client, this.mutationId = n.mutationId, this.#e = n.mutationCache, this.#n = [], this.state = n.state || J2(), this.setOptions(n.options), this.scheduleGc()
    }
    setOptions(n) {
        this.options = n, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#n.includes(n) || (this.#n.push(n), this.clearGcTimeout(), this.#e.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#n = this.#n.filter(i => i !== n), this.scheduleGc(), this.#e.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#n.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
    }
    continue () {
        return this.#i ? .continue() ? ? this.execute(this.state.variables)
    }
    async execute(n) {
        const i = () => {
                this.#a({
                    type: "continue"
                })
            },
            s = {
                client: this.#t,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        this.#i = pv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, s) : Promise.reject(new Error("No mutationFn found")),
            onFail: (f, d) => {
                this.#a({
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            },
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            },
            onContinue: i,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#e.canRun(this)
        });
        const o = this.state.status === "pending",
            c = !this.#i.canStart();
        try {
            if (o) i();
            else {
                this.#a({
                    type: "pending",
                    variables: n,
                    isPaused: c
                }), this.#e.config.onMutate && await this.#e.config.onMutate(n, this, s);
                const d = await this.options.onMutate ? .(n, s);
                d !== this.state.context && this.#a({
                    type: "pending",
                    context: d,
                    variables: n,
                    isPaused: c
                })
            }
            const f = await this.#i.start();
            return await this.#e.config.onSuccess ? .(f, n, this.state.context, this, s), await this.options.onSuccess ? .(f, n, this.state.context, s), await this.#e.config.onSettled ? .(f, null, this.state.variables, this.state.context, this, s), await this.options.onSettled ? .(f, null, n, this.state.context, s), this.#a({
                type: "success",
                data: f
            }), f
        } catch (f) {
            try {
                await this.#e.config.onError ? .(f, n, this.state.context, this, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onError ? .(f, n, this.state.context, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.#e.config.onSettled ? .(void 0, f, this.state.variables, this.state.context, this, s)
            } catch (d) {
                Promise.reject(d)
            }
            try {
                await this.options.onSettled ? .(void 0, f, n, this.state.context, s)
            } catch (d) {
                Promise.reject(d)
            }
            throw this.#a({
                type: "error",
                error: f
            }), f
        } finally {
            this.#e.runNext(this)
        }
    }#
    a(n) {
        const i = s => {
            switch (n.type) {
                case "failed":
                    return { ...s,
                        failureCount: n.failureCount,
                        failureReason: n.error
                    };
                case "pause":
                    return { ...s,
                        isPaused: !0
                    };
                case "continue":
                    return { ...s,
                        isPaused: !1
                    };
                case "pending":
                    return { ...s,
                        context: n.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: n.isPaused,
                        status: "pending",
                        variables: n.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...s,
                        data: n.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...s,
                        data: void 0,
                        error: n.error,
                        failureCount: s.failureCount + 1,
                        failureReason: n.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = i(this.state), De.batch(() => {
            this.#n.forEach(s => {
                s.onMutationUpdate(n)
            }), this.#e.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        })
    }
};

function J2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var I2 = class extends Al {
    constructor(n = {}) {
        super(), this.config = n, this.#t = new Set, this.#n = new Map, this.#e = 0
    }#
    t;#
    n;#
    e;
    build(n, i, s) {
        const o = new Z2({
            client: n,
            mutationCache: this,
            mutationId: ++this.#e,
            options: n.defaultMutationOptions(i),
            state: s
        });
        return this.add(o), o
    }
    add(n) {
        this.#t.add(n);
        const i = Wo(n);
        if (typeof i == "string") {
            const s = this.#n.get(i);
            s ? s.push(n) : this.#n.set(i, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#t.delete(n)) {
            const i = Wo(n);
            if (typeof i == "string") {
                const s = this.#n.get(i);
                if (s)
                    if (s.length > 1) {
                        const o = s.indexOf(n);
                        o !== -1 && s.splice(o, 1)
                    } else s[0] === n && this.#n.delete(i)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const i = Wo(n);
        if (typeof i == "string") {
            const o = this.#n.get(i) ? .find(c => c.state.status === "pending");
            return !o || o === n
        } else return !0
    }
    runNext(n) {
        const i = Wo(n);
        return typeof i == "string" ? this.#n.get(i) ? .find(o => o !== n && o.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        De.batch(() => {
            this.#t.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }), this.#t.clear(), this.#n.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(n) {
        const i = {
            exact: !0,
            ...n
        };
        return this.getAll().find(s => Ag(i, s))
    }
    findAll(n = {}) {
        return this.getAll().filter(i => Ag(n, i))
    }
    notify(n) {
        De.batch(() => {
            this.listeners.forEach(i => {
                i(n)
            })
        })
    }
    resumePausedMutations() {
        const n = this.getAll().filter(i => i.state.isPaused);
        return De.batch(() => Promise.all(n.map(i => i.continue().catch(xn))))
    }
};

function Wo(n) {
    return n.options.scope ? .id
}
var $2 = class extends Al {
        constructor(n = {}) {
            super(), this.config = n, this.#t = new Map
        }#
        t;
        build(n, i, s) {
            const o = i.queryKey,
                c = i.queryHash ? ? jf(o, i);
            let f = this.get(c);
            return f || (f = new X2({
                client: n,
                queryKey: o,
                queryHash: c,
                options: n.defaultQueryOptions(i),
                state: s,
                defaultOptions: n.getQueryDefaults(o)
            }), this.add(f)), f
        }
        add(n) {
            this.#t.has(n.queryHash) || (this.#t.set(n.queryHash, n), this.notify({
                type: "added",
                query: n
            }))
        }
        remove(n) {
            const i = this.#t.get(n.queryHash);
            i && (n.destroy(), i === n && this.#t.delete(n.queryHash), this.notify({
                type: "removed",
                query: n
            }))
        }
        clear() {
            De.batch(() => {
                this.getAll().forEach(n => {
                    this.remove(n)
                })
            })
        }
        get(n) {
            return this.#t.get(n)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(n) {
            const i = {
                exact: !0,
                ...n
            };
            return this.getAll().find(s => Cg(i, s))
        }
        findAll(n = {}) {
            const i = this.getAll();
            return Object.keys(n).length > 0 ? i.filter(s => Cg(n, s)) : i
        }
        notify(n) {
            De.batch(() => {
                this.listeners.forEach(i => {
                    i(n)
                })
            })
        }
        onFocus() {
            De.batch(() => {
                this.getAll().forEach(n => {
                    n.onFocus()
                })
            })
        }
        onOnline() {
            De.batch(() => {
                this.getAll().forEach(n => {
                    n.onOnline()
                })
            })
        }
    },
    W2 = class {#
        t;#
        n;#
        e;#
        i;#
        a;#
        s;#
        r;#
        l;
        constructor(n = {}) {
            this.#t = n.queryCache || new $2, this.#n = n.mutationCache || new I2, this.#e = n.defaultOptions || {}, this.#i = new Map, this.#a = new Map, this.#s = 0
        }
        mount() {
            this.#s++, this.#s === 1 && (this.#r = uv.subscribe(async n => {
                n && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#l = pl.subscribe(async n => {
                n && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#s--, this.#s === 0 && (this.#r ? .(), this.#r = void 0, this.#l ? .(), this.#l = void 0)
        }
        isFetching(n) {
            return this.#t.findAll({ ...n,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(n) {
            return this.#n.findAll({ ...n,
                status: "pending"
            }).length
        }
        getQueryData(n) {
            const i = this.defaultQueryOptions({
                queryKey: n
            });
            return this.#t.get(i.queryHash) ? .state.data
        }
        ensureQueryData(n) {
            const i = this.defaultQueryOptions(n),
                s = this.#t.build(this, i),
                o = s.state.data;
            return o === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && s.isStaleByTime(vf(i.staleTime, s)) && this.prefetchQuery(i), Promise.resolve(o))
        }
        getQueriesData(n) {
            return this.#t.findAll(n).map(({
                queryKey: i,
                state: s
            }) => {
                const o = s.data;
                return [i, o]
            })
        }
        setQueryData(n, i, s) {
            const o = this.defaultQueryOptions({
                    queryKey: n
                }),
                f = this.#t.get(o.queryHash) ? .state.data,
                d = z2(i, f);
            if (d !== void 0) return this.#t.build(this, o).setData(d, { ...s,
                manual: !0
            })
        }
        setQueriesData(n, i, s) {
            return De.batch(() => this.#t.findAll(n).map(({
                queryKey: o
            }) => [o, this.setQueryData(o, i, s)]))
        }
        getQueryState(n) {
            const i = this.defaultQueryOptions({
                queryKey: n
            });
            return this.#t.get(i.queryHash) ? .state
        }
        removeQueries(n) {
            const i = this.#t;
            De.batch(() => {
                i.findAll(n).forEach(s => {
                    i.remove(s)
                })
            })
        }
        resetQueries(n, i) {
            const s = this.#t;
            return De.batch(() => (s.findAll(n).forEach(o => {
                o.reset()
            }), this.refetchQueries({
                type: "active",
                ...n
            }, i)))
        }
        cancelQueries(n, i = {}) {
            const s = {
                    revert: !0,
                    ...i
                },
                o = De.batch(() => this.#t.findAll(n).map(c => c.cancel(s)));
            return Promise.all(o).then(xn).catch(xn)
        }
        invalidateQueries(n, i = {}) {
            return De.batch(() => (this.#t.findAll(n).forEach(s => {
                s.invalidate()
            }), n ? .refetchType === "none" ? Promise.resolve() : this.refetchQueries({ ...n,
                type: n ? .refetchType ? ? n ? .type ? ? "active"
            }, i)))
        }
        refetchQueries(n, i = {}) {
            const s = { ...i,
                    cancelRefetch: i.cancelRefetch ? ? !0
                },
                o = De.batch(() => this.#t.findAll(n).filter(c => !c.isDisabled() && !c.isStatic()).map(c => {
                    let f = c.fetch(void 0, s);
                    return s.throwOnError || (f = f.catch(xn)), c.state.fetchStatus === "paused" ? Promise.resolve() : f
                }));
            return Promise.all(o).then(xn)
        }
        fetchQuery(n) {
            const i = this.defaultQueryOptions(n);
            i.retry === void 0 && (i.retry = !1);
            const s = this.#t.build(this, i);
            return s.isStaleByTime(vf(i.staleTime, s)) ? s.fetch(i) : Promise.resolve(s.state.data)
        }
        prefetchQuery(n) {
            return this.fetchQuery(n).then(xn).catch(xn)
        }
        fetchInfiniteQuery(n) {
            return n.behavior = Dg(n.pages), this.fetchQuery(n)
        }
        prefetchInfiniteQuery(n) {
            return this.fetchInfiniteQuery(n).then(xn).catch(xn)
        }
        ensureInfiniteQueryData(n) {
            return n.behavior = Dg(n.pages), this.ensureQueryData(n)
        }
        resumePausedMutations() {
            return pl.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#n
        }
        getDefaultOptions() {
            return this.#e
        }
        setDefaultOptions(n) {
            this.#e = n
        }
        setQueryDefaults(n, i) {
            this.#i.set(Or(n), {
                queryKey: n,
                defaultOptions: i
            })
        }
        getQueryDefaults(n) {
            const i = [...this.#i.values()],
                s = {};
            return i.forEach(o => {
                zr(n, o.queryKey) && Object.assign(s, o.defaultOptions)
            }), s
        }
        setMutationDefaults(n, i) {
            this.#a.set(Or(n), {
                mutationKey: n,
                defaultOptions: i
            })
        }
        getMutationDefaults(n) {
            const i = [...this.#a.values()],
                s = {};
            return i.forEach(o => {
                zr(n, o.mutationKey) && Object.assign(s, o.defaultOptions)
            }), s
        }
        defaultQueryOptions(n) {
            if (n._defaulted) return n;
            const i = { ...this.#e.queries,
                ...this.getQueryDefaults(n.queryKey),
                ...n,
                _defaulted: !0
            };
            return i.queryHash || (i.queryHash = jf(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === Lf && (i.enabled = !1), i
        }
        defaultMutationOptions(n) {
            return n ? ._defaulted ? n : { ...this.#e.mutations,
                ...n ? .mutationKey && this.getMutationDefaults(n.mutationKey),
                ...n,
                _defaulted : !0
            }
        }
        clear() {
            this.#t.clear(), this.#n.clear()
        }
    },
    tE = et.createContext(void 0),
    eE = ({
        client: n,
        children: i
    }) => (et.useEffect(() => (n.mount(), () => {
        n.unmount()
    }), [n]), z.jsx(tE.Provider, {
        value: n,
        children: i
    }));
const nE = "./styles-CJWnWTu1.css";
const yv = (...n) => n.filter((i, s, o) => !!i && i.trim() !== "" && o.indexOf(i) === s).join(" ").trim();
const aE = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const iE = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, s, o) => o ? o.toUpperCase() : s.toLowerCase());
const Lg = n => {
    const i = iE(n);
    return i.charAt(0).toUpperCase() + i.slice(1)
};
var sE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const rE = n => {
    for (const i in n)
        if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
    return !1
};
const oE = et.forwardRef(({
    color: n = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: f,
    iconNode: d,
    ...m
}, y) => et.createElement("svg", {
    ref: y,
    ...sE,
    width: i,
    height: i,
    stroke: n,
    strokeWidth: o ? Number(s) * 24 / Number(i) : s,
    className: yv("lucide", c),
    ...!f && !rE(m) && {
        "aria-hidden": "true"
    },
    ...m
}, [...d.map(([g, v]) => et.createElement(g, v)), ...Array.isArray(f) ? f : [f]]));
const sa = (n, i) => {
    const s = et.forwardRef(({
        className: o,
        ...c
    }, f) => et.createElement(oE, {
        ref: f,
        iconNode: i,
        className: yv(`lucide-${aE(Lg(n))}`, `lucide-${n}`, o),
        ...c
    }));
    return s.displayName = Lg(n), s
};
const lE = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    cE = sa("chevron-down", lE);
const uE = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }]
    ],
    Ug = sa("clock", uE);
const fE = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    dE = sa("mail", fE);
const hE = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    mE = sa("map-pin", hE);
const pE = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    gE = sa("menu", pE);
const yE = [
        ["path", {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }]
    ],
    vE = sa("message-circle", yE);
const bE = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    gl = sa("phone", bE);
const SE = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ],
    xE = sa("shield", SE);
const wE = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    _E = sa("x", wE),
    vv = "./crestwell-logo-gtG7JSw6.png",
    fe = {
        name: "Crestwell Facilities",
        tagline: "Clean Spaces. Strong Impressions.",
        phone: "+44 20 4525 8800",
        phoneHref: "tel:+442045258800",
        whatsappHref: "https://wa.me/447000000000?text=Hi%20Crestwell%2C%20I%27d%20like%20a%20cleaning%20quote",
        email: "hello@crestwellfacilities.co.uk",
        emailHref: "mailto:hello@crestwellfacilities.co.uk",
        address: "1 Canada Square, Canary Wharf, London E14 5AB",
        hours: "Mon–Sun · 24/7 emergency cover",
        areas: ["London", "Greater London", "Canary Wharf", "City of London", "Westminster", "Kensington", "Croydon", "Watford", "Reading"]
    },
    yl = [{
        slug: "commercial-cleaning",
        title: "Commercial Cleaning",
        short: "Daily, contract & ad-hoc cleaning for commercial sites.",
        hero: "Premium commercial cleaning for businesses that care about first impressions.",
        intro: "From corporate HQs to retail and showrooms, our vetted teams deliver consistent, audited cleaning programmes built around your operating hours.",
        benefits: ["DBS-checked, uniformed and insured cleaners", "Dedicated account manager & supervisor visits", "Eco-friendly products and HEPA equipment", "Service Level Agreements with monthly reporting"],
        faqs: [{
            q: "Do you offer out-of-hours service?",
            a: "Yes — early mornings, evenings and weekends at no premium for contracted clients."
        }, {
            q: "Are your cleaners insured?",
            a: "Every team member is fully insured with £5m public liability and employer's liability cover."
        }, {
            q: "Can you cover multiple sites?",
            a: "Absolutely. We run multi-site portfolios across London and the South East with unified reporting."
        }],
        icon: "building"
    }, {
        slug: "office-cleaning",
        title: "Office Cleaning",
        short: "Spotless workspaces that protect productivity.",
        hero: "Reliable office cleaning that keeps your workspace presentable, hygienic and on-brand.",
        intro: "Workstations, breakouts, kitchens, washrooms and meeting rooms — kept consistently clean by trained teams that respect your space and your time.",
        benefits: ["Daily, weekly or contract schedules", "Touchpoint sanitisation included", "Discreet, uniformed staff", "Digital quality audits after every visit"],
        faqs: [{
            q: "How quickly can you start?",
            a: "Most offices can be onboarded within 5 working days."
        }, {
            q: "Do you supply consumables?",
            a: "Yes — washroom, kitchen and janitorial supplies are managed for you."
        }, {
            q: "Minimum contract length?",
            a: "Flexible monthly rolling contracts — no long lock-ins."
        }],
        icon: "briefcase"
    }, {
        slug: "end-of-tenancy-cleaning",
        title: "End of Tenancy Cleaning",
        short: "Deposit-back guaranteed end of tenancy cleans.",
        hero: "Deposit-back end of tenancy cleaning, trusted by landlords and agents.",
        intro: "Comprehensive deep clean to inventory-clerk standard. Ideal for tenants, landlords and letting agents who need a property handover-ready, fast.",
        benefits: ["72-hour deposit-back guarantee", "Inside ovens, fridges, cupboards & appliances", "Limescale, grout & sanitary ware restoration", "Optional carpet & upholstery steam clean"],
        faqs: [{
            q: "Is it inventory-clerk approved?",
            a: "Yes — our checklist is built around standard inventory clerk reports used across the UK."
        }, {
            q: "What if the clerk flags something?",
            a: "We return within 72 hours and re-clean any flagged areas free of charge."
        }, {
            q: "Do you clean carpets?",
            a: "Yes — professional hot water extraction is available as an add-on."
        }],
        icon: "key"
    }, {
        slug: "airbnb-cleaning",
        title: "Airbnb / Serviced Accommodation Cleaning",
        short: "Hotel-grade turnovers for short-let hosts.",
        hero: "Five-star turnovers and linen for Airbnb & serviced accommodation hosts.",
        intro: "Same-day turnovers, hotel-standard linen, restocking and photo-verified handovers — designed to protect your ratings and your revenue.",
        benefits: ["Same-day turnovers, 7 days a week", "Hotel-grade linen & towel hire", "Restocking of consumables & welcome packs", "Photo report after every clean"],
        faqs: [{
            q: "Do you integrate with my PMS?",
            a: "Yes — we sync with Hostaway, Guesty, Hospitable and direct iCal feeds."
        }, {
            q: "Linen included?",
            a: "Optional hotel-grade linen rental on a per-changeover basis."
        }, {
            q: "What about lost & found?",
            a: "All guest items are logged, photographed and stored securely."
        }],
        icon: "bed"
    }, {
        slug: "deep-cleaning",
        title: "Deep Cleaning",
        short: "Periodic deep cleans for offices, homes & sites.",
        hero: "Top-to-bottom deep cleaning that resets your space.",
        intro: "A complete reset for any environment — descaling, degreasing, sanitising and detailing the areas your daily clean can't reach.",
        benefits: ["Kitchen degreasing & extractor cleaning", "Washroom descaling & sanitisation", "High-level dusting & vent cleaning", "Floor stripping, sealing & polishing"],
        faqs: [{
            q: "How often is a deep clean needed?",
            a: "Most commercial spaces benefit from a quarterly deep clean alongside daily service."
        }, {
            q: "Out of hours?",
            a: "Yes — overnight and weekend deep cleans are our specialty."
        }, {
            q: "Disruption to operations?",
            a: "We plan zone-by-zone to keep your team working."
        }],
        icon: "sparkles"
    }, {
        slug: "facilities-support",
        title: "Facilities Support",
        short: "Soft FM services to keep your building running.",
        hero: "Integrated facilities support that scales with your portfolio.",
        intro: "A single point of accountability for cleaning, washroom services, waste, periodics, and reactive callouts — backed by SLAs and live reporting.",
        benefits: ["Single point of contact for all soft FM", "Reactive callouts within 4 hours", "Consumables, waste & periodics included", "Live reporting dashboard for facility managers"],
        faqs: [{
            q: "Do you cover hard FM?",
            a: "We partner with vetted M&E contractors so you get one bill, one contact."
        }, {
            q: "SLA response times?",
            a: "Standard 4-hour response, 1-hour for emergencies on contracted sites."
        }, {
            q: "Compliance documentation?",
            a: "RAMS, COSHH and PPM schedules supplied as standard."
        }],
        icon: "wrench"
    }, {
        slug: "pressure-washing",
        title: "Pressure Washing",
        short: "Restore facades, forecourts and external areas.",
        hero: "Industrial pressure washing for cleaner, safer exteriors.",
        intro: "Restore the kerb appeal of your property — driveways, car parks, cladding, signage and forecourts cleaned with industrial-grade equipment.",
        benefits: ["Up to 3000 PSI hot & cold water systems", "Chewing-gum & graffiti removal", "Anti-slip treatments available", "Fully insured & risk-assessed"],
        faqs: [{
            q: "Will it damage surfaces?",
            a: "Our technicians select the correct pressure and chemistry for every substrate."
        }, {
            q: "Do you supply water?",
            a: "Yes — we bring bowsers for sites without external taps."
        }, {
            q: "Working at height?",
            a: "IPAF-trained operatives and MEWP hire are available."
        }],
        icon: "droplets"
    }, {
        slug: "emergency-cleaning",
        title: "Emergency Cleaning",
        short: "24/7 rapid response for spills, floods & incidents.",
        hero: "24/7 emergency cleaning response across London.",
        intro: "Flood, fire, sewage, biohazard or post-incident — our rapid response team mobilises within hours, day or night.",
        benefits: ["On-site within 2 hours, 24/7", "Biohazard & trauma-trained operatives", "Insurance-friendly reporting", "Decontamination & odour control"],
        faqs: [{
            q: "How fast can you arrive?",
            a: "Typical on-site arrival within 2 hours across Greater London."
        }, {
            q: "Do you work with insurers?",
            a: "Yes — we provide compliant reports, photos and itemised invoices."
        }, {
            q: "Biohazard certified?",
            a: "All operatives are trained in CAT 3 biohazard protocols."
        }],
        icon: "siren"
    }, {
        slug: "property-management-cleaning",
        title: "Property Management Cleaning",
        short: "Communal & block cleaning for managing agents.",
        hero: "Communal area cleaning for blocks, HMOs and managed portfolios.",
        intro: "Reliable communal cleaning for managing agents and freeholders — auditable, photographed and reported every visit.",
        benefits: ["QR-coded site logbooks", "Photo reports after every visit", "Bin store & refuse management", "Window, glass & entrance detailing"],
        faqs: [{
            q: "Do you work with managing agents?",
            a: "Yes — we serve multiple managing agents across London with portfolio pricing."
        }, {
            q: "Reporting to residents?",
            a: "Optional resident-facing notices and QR feedback forms."
        }, {
            q: "Can you handle multiple blocks?",
            a: "Our routing software handles multi-block, multi-borough portfolios efficiently."
        }],
        icon: "home"
    }],
    EE = n => yl.find(i => i.slug === n);

function Bg(n, i) {
    if (typeof n == "function") return n(i);
    n != null && (n.current = i)
}

function bv(...n) {
    return i => {
        let s = !1;
        const o = n.map(c => {
            const f = Bg(c, i);
            return !s && typeof f == "function" && (s = !0), f
        });
        if (s) return () => {
            for (let c = 0; c < o.length; c++) {
                const f = o[c];
                typeof f == "function" ? f() : Bg(n[c], null)
            }
        }
    }
}

function kT(...n) {
    return et.useCallback(bv(...n), n)
}
var RE = Symbol.for("react.lazy"),
    vl = $b[" use ".trim().toString()];

function TE(n) {
    return typeof n == "object" && n !== null && "then" in n
}

function Sv(n) {
    return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === RE && "_payload" in n && TE(n._payload)
}

function CE(n) {
    const i = ME(n),
        s = et.forwardRef((o, c) => {
            let {
                children: f,
                ...d
            } = o;
            Sv(f) && typeof vl == "function" && (f = vl(f._payload));
            const m = et.Children.toArray(f),
                y = m.find(zE);
            if (y) {
                const g = y.props.children,
                    v = m.map(h => h === y ? et.Children.count(g) > 1 ? et.Children.only(null) : et.isValidElement(g) ? g.props.children : null : h);
                return z.jsx(i, { ...d,
                    ref: c,
                    children: et.isValidElement(g) ? et.cloneElement(g, void 0, v) : null
                })
            }
            return z.jsx(i, { ...d,
                ref: c,
                children: f
            })
        });
    return s.displayName = `${n}.Slot`, s
}
var AE = CE("Slot");

function ME(n) {
    const i = et.forwardRef((s, o) => {
        let {
            children: c,
            ...f
        } = s;
        if (Sv(c) && typeof vl == "function" && (c = vl(c._payload)), et.isValidElement(c)) {
            const d = DE(c),
                m = NE(f, c.props);
            return c.type !== et.Fragment && (m.ref = o ? bv(o, d) : d), et.cloneElement(c, m)
        }
        return et.Children.count(c) > 1 ? et.Children.only(null) : null
    });
    return i.displayName = `${n}.SlotClone`, i
}
var OE = Symbol("radix.slottable");

function zE(n) {
    return et.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === OE
}

function NE(n, i) {
    const s = { ...i
    };
    for (const o in i) {
        const c = n[o],
            f = i[o];
        /^on[A-Z]/.test(o) ? c && f ? s[o] = (...m) => {
            const y = f(...m);
            return c(...m), y
        } : c && (s[o] = c) : o === "style" ? s[o] = { ...c,
            ...f
        } : o === "className" && (s[o] = [c, f].filter(Boolean).join(" "))
    }
    return { ...n,
        ...s
    }
}

function DE(n) {
    let i = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get,
        s = i && "isReactWarning" in i && i.isReactWarning;
    return s ? n.ref : (i = Object.getOwnPropertyDescriptor(n, "ref") ? .get, s = i && "isReactWarning" in i && i.isReactWarning, s ? n.props.ref : n.props.ref || n.ref)
}

function xv(n) {
    var i, s, o = "";
    if (typeof n == "string" || typeof n == "number") o += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var c = n.length;
            for (i = 0; i < c; i++) n[i] && (s = xv(n[i])) && (o && (o += " "), o += s)
        } else
            for (s in n) n[s] && (o && (o += " "), o += s);
    return o
}

function wv() {
    for (var n, i, s = 0, o = "", c = arguments.length; s < c; s++)(n = arguments[s]) && (i = xv(n)) && (o && (o += " "), o += i);
    return o
}
const kg = n => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n,
    Hg = wv,
    jE = (n, i) => s => {
        var o;
        if (i ? .variants == null) return Hg(n, s ? .class, s ? .className);
        const {
            variants: c,
            defaultVariants: f
        } = i, d = Object.keys(c).map(g => {
            const v = s ? .[g],
                h = f ? .[g];
            if (v === null) return null;
            const S = kg(v) || kg(h);
            return c[g][S]
        }), m = s && Object.entries(s).reduce((g, v) => {
            let [h, S] = v;
            return S === void 0 || (g[h] = S), g
        }, {}), y = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((g, v) => {
            let {
                class: h,
                className: S,
                ...x
            } = v;
            return Object.entries(x).every(E => {
                let [M, _] = E;
                return Array.isArray(_) ? _.includes({ ...f,
                    ...m
                }[M]) : { ...f,
                    ...m
                }[M] === _
            }) ? [...g, h, S] : g
        }, []);
        return Hg(n, d, y, s ? .class, s ? .className)
    },
    LE = (n, i) => {
        const s = new Array(n.length + i.length);
        for (let o = 0; o < n.length; o++) s[o] = n[o];
        for (let o = 0; o < i.length; o++) s[n.length + o] = i[o];
        return s
    },
    UE = (n, i) => ({
        classGroupId: n,
        validator: i
    }),
    _v = (n = new Map, i = null, s) => ({
        nextPart: n,
        validators: i,
        classGroupId: s
    }),
    bl = "-",
    qg = [],
    BE = "arbitrary..",
    kE = n => {
        const i = qE(n),
            {
                conflictingClassGroups: s,
                conflictingClassGroupModifiers: o
            } = n;
        return {
            getClassGroupId: d => {
                if (d.startsWith("[") && d.endsWith("]")) return HE(d);
                const m = d.split(bl),
                    y = m[0] === "" && m.length > 1 ? 1 : 0;
                return Ev(m, y, i)
            },
            getConflictingClassGroupIds: (d, m) => {
                if (m) {
                    const y = o[d],
                        g = s[d];
                    return y ? g ? LE(g, y) : y : g || qg
                }
                return s[d] || qg
            }
        }
    },
    Ev = (n, i, s) => {
        if (n.length - i === 0) return s.classGroupId;
        const c = n[i],
            f = s.nextPart.get(c);
        if (f) {
            const g = Ev(n, i + 1, f);
            if (g) return g
        }
        const d = s.validators;
        if (d === null) return;
        const m = i === 0 ? n.join(bl) : n.slice(i).join(bl),
            y = d.length;
        for (let g = 0; g < y; g++) {
            const v = d[g];
            if (v.validator(m)) return v.classGroupId
        }
    },
    HE = n => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const i = n.slice(1, -1),
            s = i.indexOf(":"),
            o = i.slice(0, s);
        return o ? BE + o : void 0
    })(),
    qE = n => {
        const {
            theme: i,
            classGroups: s
        } = n;
        return YE(s, i)
    },
    YE = (n, i) => {
        const s = _v();
        for (const o in n) {
            const c = n[o];
            Uf(c, s, o, i)
        }
        return s
    },
    Uf = (n, i, s, o) => {
        const c = n.length;
        for (let f = 0; f < c; f++) {
            const d = n[f];
            GE(d, i, s, o)
        }
    },
    GE = (n, i, s, o) => {
        if (typeof n == "string") {
            VE(n, i, s);
            return
        }
        if (typeof n == "function") {
            QE(n, i, s, o);
            return
        }
        PE(n, i, s, o)
    },
    VE = (n, i, s) => {
        const o = n === "" ? i : Rv(i, n);
        o.classGroupId = s
    },
    QE = (n, i, s, o) => {
        if (XE(n)) {
            Uf(n(o), i, s, o);
            return
        }
        i.validators === null && (i.validators = []), i.validators.push(UE(s, n))
    },
    PE = (n, i, s, o) => {
        const c = Object.entries(n),
            f = c.length;
        for (let d = 0; d < f; d++) {
            const [m, y] = c[d];
            Uf(y, Rv(i, m), s, o)
        }
    },
    Rv = (n, i) => {
        let s = n;
        const o = i.split(bl),
            c = o.length;
        for (let f = 0; f < c; f++) {
            const d = o[f];
            let m = s.nextPart.get(d);
            m || (m = _v(), s.nextPart.set(d, m)), s = m
        }
        return s
    },
    XE = n => "isThemeGetter" in n && n.isThemeGetter === !0,
    KE = n => {
        if (n < 1) return {
            get: () => {},
            set: () => {}
        };
        let i = 0,
            s = Object.create(null),
            o = Object.create(null);
        const c = (f, d) => {
            s[f] = d, i++, i > n && (i = 0, o = s, s = Object.create(null))
        };
        return {
            get(f) {
                let d = s[f];
                if (d !== void 0) return d;
                if ((d = o[f]) !== void 0) return c(f, d), d
            },
            set(f, d) {
                f in s ? s[f] = d : c(f, d)
            }
        }
    },
    xf = "!",
    Yg = ":",
    FE = [],
    Gg = (n, i, s, o, c) => ({
        modifiers: n,
        hasImportantModifier: i,
        baseClassName: s,
        maybePostfixModifierPosition: o,
        isExternal: c
    }),
    ZE = n => {
        const {
            prefix: i,
            experimentalParseClassName: s
        } = n;
        let o = c => {
            const f = [];
            let d = 0,
                m = 0,
                y = 0,
                g;
            const v = c.length;
            for (let M = 0; M < v; M++) {
                const _ = c[M];
                if (d === 0 && m === 0) {
                    if (_ === Yg) {
                        f.push(c.slice(y, M)), y = M + 1;
                        continue
                    }
                    if (_ === "/") {
                        g = M;
                        continue
                    }
                }
                _ === "[" ? d++ : _ === "]" ? d-- : _ === "(" ? m++ : _ === ")" && m--
            }
            const h = f.length === 0 ? c : c.slice(y);
            let S = h,
                x = !1;
            h.endsWith(xf) ? (S = h.slice(0, -1), x = !0) : h.startsWith(xf) && (S = h.slice(1), x = !0);
            const E = g && g > y ? g - y : void 0;
            return Gg(f, x, S, E)
        };
        if (i) {
            const c = i + Yg,
                f = o;
            o = d => d.startsWith(c) ? f(d.slice(c.length)) : Gg(FE, !1, d, void 0, !0)
        }
        if (s) {
            const c = o;
            o = f => s({
                className: f,
                parseClassName: c
            })
        }
        return o
    },
    JE = n => {
        const i = new Map;
        return n.orderSensitiveModifiers.forEach((s, o) => {
            i.set(s, 1e6 + o)
        }), s => {
            const o = [];
            let c = [];
            for (let f = 0; f < s.length; f++) {
                const d = s[f],
                    m = d[0] === "[",
                    y = i.has(d);
                m || y ? (c.length > 0 && (c.sort(), o.push(...c), c = []), o.push(d)) : c.push(d)
            }
            return c.length > 0 && (c.sort(), o.push(...c)), o
        }
    },
    IE = n => ({
        cache: KE(n.cacheSize),
        parseClassName: ZE(n),
        sortModifiers: JE(n),
        ...kE(n)
    }),
    $E = /\s+/,
    WE = (n, i) => {
        const {
            parseClassName: s,
            getClassGroupId: o,
            getConflictingClassGroupIds: c,
            sortModifiers: f
        } = i, d = [], m = n.trim().split($E);
        let y = "";
        for (let g = m.length - 1; g >= 0; g -= 1) {
            const v = m[g],
                {
                    isExternal: h,
                    modifiers: S,
                    hasImportantModifier: x,
                    baseClassName: E,
                    maybePostfixModifierPosition: M
                } = s(v);
            if (h) {
                y = v + (y.length > 0 ? " " + y : y);
                continue
            }
            let _ = !!M,
                R = o(_ ? E.substring(0, M) : E);
            if (!R) {
                if (!_) {
                    y = v + (y.length > 0 ? " " + y : y);
                    continue
                }
                if (R = o(E), !R) {
                    y = v + (y.length > 0 ? " " + y : y);
                    continue
                }
                _ = !1
            }
            const q = S.length === 0 ? "" : S.length === 1 ? S[0] : f(S).join(":"),
                Y = x ? q + xf : q,
                H = Y + R;
            if (d.indexOf(H) > -1) continue;
            d.push(H);
            const nt = c(R, _);
            for (let I = 0; I < nt.length; ++I) {
                const P = nt[I];
                d.push(Y + P)
            }
            y = v + (y.length > 0 ? " " + y : y)
        }
        return y
    },
    tR = (...n) => {
        let i = 0,
            s, o, c = "";
        for (; i < n.length;)(s = n[i++]) && (o = Tv(s)) && (c && (c += " "), c += o);
        return c
    },
    Tv = n => {
        if (typeof n == "string") return n;
        let i, s = "";
        for (let o = 0; o < n.length; o++) n[o] && (i = Tv(n[o])) && (s && (s += " "), s += i);
        return s
    },
    eR = (n, ...i) => {
        let s, o, c, f;
        const d = y => {
                const g = i.reduce((v, h) => h(v), n());
                return s = IE(g), o = s.cache.get, c = s.cache.set, f = m, m(y)
            },
            m = y => {
                const g = o(y);
                if (g) return g;
                const v = WE(y, s);
                return c(y, v), v
            };
        return f = d, (...y) => f(tR(...y))
    },
    nR = [],
    ue = n => {
        const i = s => s[n] || nR;
        return i.isThemeGetter = !0, i
    },
    Cv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Av = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    aR = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    iR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    sR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    rR = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    oR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    lR = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Na = n => aR.test(n),
    _t = n => !!n && !Number.isNaN(Number(n)),
    Da = n => !!n && Number.isInteger(Number(n)),
    rf = n => n.endsWith("%") && _t(n.slice(0, -1)),
    ea = n => iR.test(n),
    Mv = () => !0,
    cR = n => sR.test(n) && !rR.test(n),
    Bf = () => !1,
    uR = n => oR.test(n),
    fR = n => lR.test(n),
    dR = n => !ot(n) && !lt(n),
    hR = n => Ka(n, Nv, Bf),
    ot = n => Cv.test(n),
    bi = n => Ka(n, Dv, cR),
    Vg = n => Ka(n, xR, _t),
    mR = n => Ka(n, Lv, Mv),
    pR = n => Ka(n, jv, Bf),
    Qg = n => Ka(n, Ov, Bf),
    gR = n => Ka(n, zv, fR),
    tl = n => Ka(n, Uv, uR),
    lt = n => Av.test(n),
    _r = n => Ci(n, Dv),
    yR = n => Ci(n, jv),
    Pg = n => Ci(n, Ov),
    vR = n => Ci(n, Nv),
    bR = n => Ci(n, zv),
    el = n => Ci(n, Uv, !0),
    SR = n => Ci(n, Lv, !0),
    Ka = (n, i, s) => {
        const o = Cv.exec(n);
        return o ? o[1] ? i(o[1]) : s(o[2]) : !1
    },
    Ci = (n, i, s = !1) => {
        const o = Av.exec(n);
        return o ? o[1] ? i(o[1]) : s : !1
    },
    Ov = n => n === "position" || n === "percentage",
    zv = n => n === "image" || n === "url",
    Nv = n => n === "length" || n === "size" || n === "bg-size",
    Dv = n => n === "length",
    xR = n => n === "number",
    jv = n => n === "family-name",
    Lv = n => n === "number" || n === "weight",
    Uv = n => n === "shadow",
    wR = () => {
        const n = ue("color"),
            i = ue("font"),
            s = ue("text"),
            o = ue("font-weight"),
            c = ue("tracking"),
            f = ue("leading"),
            d = ue("breakpoint"),
            m = ue("container"),
            y = ue("spacing"),
            g = ue("radius"),
            v = ue("shadow"),
            h = ue("inset-shadow"),
            S = ue("text-shadow"),
            x = ue("drop-shadow"),
            E = ue("blur"),
            M = ue("perspective"),
            _ = ue("aspect"),
            R = ue("ease"),
            q = ue("animate"),
            Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            H = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            nt = () => [...H(), lt, ot],
            I = () => ["auto", "hidden", "clip", "visible", "scroll"],
            P = () => ["auto", "contain", "none"],
            j = () => [lt, ot, y],
            W = () => [Na, "full", "auto", ...j()],
            ut = () => [Da, "none", "subgrid", lt, ot],
            st = () => ["auto", {
                span: ["full", Da, lt, ot]
            }, Da, lt, ot],
            pt = () => [Da, "auto", lt, ot],
            bt = () => ["auto", "min", "max", "fr", lt, ot],
            jt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Et = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            D = () => ["auto", ...j()],
            F = () => [Na, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
            it = () => [Na, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()],
            St = () => [Na, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()],
            $ = () => [n, lt, ot],
            A = () => [...H(), Pg, Qg, {
                position: [lt, ot]
            }],
            V = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            X = () => ["auto", "cover", "contain", vR, hR, {
                size: [lt, ot]
            }],
            J = () => [rf, _r, bi],
            Z = () => ["", "none", "full", g, lt, ot],
            at = () => ["", _t, _r, bi],
            yt = () => ["solid", "dashed", "dotted", "double"],
            mt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            dt = () => [_t, rf, Pg, Qg],
            xe = () => ["", "none", E, lt, ot],
            oe = () => ["none", _t, lt, ot],
            ne = () => ["none", _t, lt, ot],
            pn = () => [_t, lt, ot],
            le = () => [Na, "full", ...j()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [ea],
                breakpoint: [ea],
                color: [Mv],
                container: [ea],
                "drop-shadow": [ea],
                ease: ["in", "out", "in-out"],
                font: [dR],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [ea],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [ea],
                shadow: [ea],
                spacing: ["px", _t],
                text: [ea],
                "text-shadow": [ea],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", Na, ot, lt, _]
                }],
                container: ["container"],
                columns: [{
                    columns: [_t, ot, lt, m]
                }],
                "break-after": [{
                    "break-after": Y()
                }],
                "break-before": [{
                    "break-before": Y()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: nt()
                }],
                overflow: [{
                    overflow: I()
                }],
                "overflow-x": [{
                    "overflow-x": I()
                }],
                "overflow-y": [{
                    "overflow-y": I()
                }],
                overscroll: [{
                    overscroll: P()
                }],
                "overscroll-x": [{
                    "overscroll-x": P()
                }],
                "overscroll-y": [{
                    "overscroll-y": P()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: W()
                }],
                "inset-x": [{
                    "inset-x": W()
                }],
                "inset-y": [{
                    "inset-y": W()
                }],
                start: [{
                    "inset-s": W(),
                    start: W()
                }],
                end: [{
                    "inset-e": W(),
                    end: W()
                }],
                "inset-bs": [{
                    "inset-bs": W()
                }],
                "inset-be": [{
                    "inset-be": W()
                }],
                top: [{
                    top: W()
                }],
                right: [{
                    right: W()
                }],
                bottom: [{
                    bottom: W()
                }],
                left: [{
                    left: W()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [Da, "auto", lt, ot]
                }],
                basis: [{
                    basis: [Na, "full", "auto", m, ...j()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [_t, Na, "auto", "initial", "none", ot]
                }],
                grow: [{
                    grow: ["", _t, lt, ot]
                }],
                shrink: [{
                    shrink: ["", _t, lt, ot]
                }],
                order: [{
                    order: [Da, "first", "last", "none", lt, ot]
                }],
                "grid-cols": [{
                    "grid-cols": ut()
                }],
                "col-start-end": [{
                    col: st()
                }],
                "col-start": [{
                    "col-start": pt()
                }],
                "col-end": [{
                    "col-end": pt()
                }],
                "grid-rows": [{
                    "grid-rows": ut()
                }],
                "row-start-end": [{
                    row: st()
                }],
                "row-start": [{
                    "row-start": pt()
                }],
                "row-end": [{
                    "row-end": pt()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": bt()
                }],
                "auto-rows": [{
                    "auto-rows": bt()
                }],
                gap: [{
                    gap: j()
                }],
                "gap-x": [{
                    "gap-x": j()
                }],
                "gap-y": [{
                    "gap-y": j()
                }],
                "justify-content": [{
                    justify: [...jt(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...Et(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...Et()]
                }],
                "align-content": [{
                    content: ["normal", ...jt()]
                }],
                "align-items": [{
                    items: [...Et(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...Et(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": jt()
                }],
                "place-items": [{
                    "place-items": [...Et(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...Et()]
                }],
                p: [{
                    p: j()
                }],
                px: [{
                    px: j()
                }],
                py: [{
                    py: j()
                }],
                ps: [{
                    ps: j()
                }],
                pe: [{
                    pe: j()
                }],
                pbs: [{
                    pbs: j()
                }],
                pbe: [{
                    pbe: j()
                }],
                pt: [{
                    pt: j()
                }],
                pr: [{
                    pr: j()
                }],
                pb: [{
                    pb: j()
                }],
                pl: [{
                    pl: j()
                }],
                m: [{
                    m: D()
                }],
                mx: [{
                    mx: D()
                }],
                my: [{
                    my: D()
                }],
                ms: [{
                    ms: D()
                }],
                me: [{
                    me: D()
                }],
                mbs: [{
                    mbs: D()
                }],
                mbe: [{
                    mbe: D()
                }],
                mt: [{
                    mt: D()
                }],
                mr: [{
                    mr: D()
                }],
                mb: [{
                    mb: D()
                }],
                ml: [{
                    ml: D()
                }],
                "space-x": [{
                    "space-x": j()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": j()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: F()
                }],
                "inline-size": [{
                    inline: ["auto", ...it()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...it()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...it()]
                }],
                "block-size": [{
                    block: ["auto", ...St()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...St()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...St()]
                }],
                w: [{
                    w: [m, "screen", ...F()]
                }],
                "min-w": [{
                    "min-w": [m, "screen", "none", ...F()]
                }],
                "max-w": [{
                    "max-w": [m, "screen", "none", "prose", {
                        screen: [d]
                    }, ...F()]
                }],
                h: [{
                    h: ["screen", "lh", ...F()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...F()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...F()]
                }],
                "font-size": [{
                    text: ["base", s, _r, bi]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [o, SR, mR]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rf, ot]
                }],
                "font-family": [{
                    font: [yR, pR, i]
                }],
                "font-features": [{
                    "font-features": [ot]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [c, lt, ot]
                }],
                "line-clamp": [{
                    "line-clamp": [_t, "none", lt, Vg]
                }],
                leading: [{
                    leading: [f, ...j()]
                }],
                "list-image": [{
                    "list-image": ["none", lt, ot]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", lt, ot]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: $()
                }],
                "text-color": [{
                    text: $()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...yt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [_t, "from-font", "auto", lt, bi]
                }],
                "text-decoration-color": [{
                    decoration: $()
                }],
                "underline-offset": [{
                    "underline-offset": [_t, "auto", lt, ot]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", lt, ot]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", lt, ot]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: A()
                }],
                "bg-repeat": [{
                    bg: V()
                }],
                "bg-size": [{
                    bg: X()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, Da, lt, ot],
                        radial: ["", lt, ot],
                        conic: [Da, lt, ot]
                    }, bR, gR]
                }],
                "bg-color": [{
                    bg: $()
                }],
                "gradient-from-pos": [{
                    from: J()
                }],
                "gradient-via-pos": [{
                    via: J()
                }],
                "gradient-to-pos": [{
                    to: J()
                }],
                "gradient-from": [{
                    from: $()
                }],
                "gradient-via": [{
                    via: $()
                }],
                "gradient-to": [{
                    to: $()
                }],
                rounded: [{
                    rounded: Z()
                }],
                "rounded-s": [{
                    "rounded-s": Z()
                }],
                "rounded-e": [{
                    "rounded-e": Z()
                }],
                "rounded-t": [{
                    "rounded-t": Z()
                }],
                "rounded-r": [{
                    "rounded-r": Z()
                }],
                "rounded-b": [{
                    "rounded-b": Z()
                }],
                "rounded-l": [{
                    "rounded-l": Z()
                }],
                "rounded-ss": [{
                    "rounded-ss": Z()
                }],
                "rounded-se": [{
                    "rounded-se": Z()
                }],
                "rounded-ee": [{
                    "rounded-ee": Z()
                }],
                "rounded-es": [{
                    "rounded-es": Z()
                }],
                "rounded-tl": [{
                    "rounded-tl": Z()
                }],
                "rounded-tr": [{
                    "rounded-tr": Z()
                }],
                "rounded-br": [{
                    "rounded-br": Z()
                }],
                "rounded-bl": [{
                    "rounded-bl": Z()
                }],
                "border-w": [{
                    border: at()
                }],
                "border-w-x": [{
                    "border-x": at()
                }],
                "border-w-y": [{
                    "border-y": at()
                }],
                "border-w-s": [{
                    "border-s": at()
                }],
                "border-w-e": [{
                    "border-e": at()
                }],
                "border-w-bs": [{
                    "border-bs": at()
                }],
                "border-w-be": [{
                    "border-be": at()
                }],
                "border-w-t": [{
                    "border-t": at()
                }],
                "border-w-r": [{
                    "border-r": at()
                }],
                "border-w-b": [{
                    "border-b": at()
                }],
                "border-w-l": [{
                    "border-l": at()
                }],
                "divide-x": [{
                    "divide-x": at()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": at()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...yt(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...yt(), "hidden", "none"]
                }],
                "border-color": [{
                    border: $()
                }],
                "border-color-x": [{
                    "border-x": $()
                }],
                "border-color-y": [{
                    "border-y": $()
                }],
                "border-color-s": [{
                    "border-s": $()
                }],
                "border-color-e": [{
                    "border-e": $()
                }],
                "border-color-bs": [{
                    "border-bs": $()
                }],
                "border-color-be": [{
                    "border-be": $()
                }],
                "border-color-t": [{
                    "border-t": $()
                }],
                "border-color-r": [{
                    "border-r": $()
                }],
                "border-color-b": [{
                    "border-b": $()
                }],
                "border-color-l": [{
                    "border-l": $()
                }],
                "divide-color": [{
                    divide: $()
                }],
                "outline-style": [{
                    outline: [...yt(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [_t, lt, ot]
                }],
                "outline-w": [{
                    outline: ["", _t, _r, bi]
                }],
                "outline-color": [{
                    outline: $()
                }],
                shadow: [{
                    shadow: ["", "none", v, el, tl]
                }],
                "shadow-color": [{
                    shadow: $()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", h, el, tl]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": $()
                }],
                "ring-w": [{
                    ring: at()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: $()
                }],
                "ring-offset-w": [{
                    "ring-offset": [_t, bi]
                }],
                "ring-offset-color": [{
                    "ring-offset": $()
                }],
                "inset-ring-w": [{
                    "inset-ring": at()
                }],
                "inset-ring-color": [{
                    "inset-ring": $()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", S, el, tl]
                }],
                "text-shadow-color": [{
                    "text-shadow": $()
                }],
                opacity: [{
                    opacity: [_t, lt, ot]
                }],
                "mix-blend": [{
                    "mix-blend": [...mt(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": mt()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [_t]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": dt()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": dt()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": $()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": $()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": dt()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": dt()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": $()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": $()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": dt()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": dt()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": $()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": $()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": dt()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": dt()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": $()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": $()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": dt()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": dt()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": $()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": $()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": dt()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": dt()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": $()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": $()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": dt()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": dt()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": $()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": $()
                }],
                "mask-image-radial": [{
                    "mask-radial": [lt, ot]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": dt()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": dt()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": $()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": $()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": H()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [_t]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": dt()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": dt()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": $()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": $()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: A()
                }],
                "mask-repeat": [{
                    mask: V()
                }],
                "mask-size": [{
                    mask: X()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", lt, ot]
                }],
                filter: [{
                    filter: ["", "none", lt, ot]
                }],
                blur: [{
                    blur: xe()
                }],
                brightness: [{
                    brightness: [_t, lt, ot]
                }],
                contrast: [{
                    contrast: [_t, lt, ot]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", x, el, tl]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": $()
                }],
                grayscale: [{
                    grayscale: ["", _t, lt, ot]
                }],
                "hue-rotate": [{
                    "hue-rotate": [_t, lt, ot]
                }],
                invert: [{
                    invert: ["", _t, lt, ot]
                }],
                saturate: [{
                    saturate: [_t, lt, ot]
                }],
                sepia: [{
                    sepia: ["", _t, lt, ot]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", lt, ot]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": xe()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [_t, lt, ot]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [_t, lt, ot]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", _t, lt, ot]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [_t, lt, ot]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", _t, lt, ot]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [_t, lt, ot]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [_t, lt, ot]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", _t, lt, ot]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": j()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": j()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": j()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", lt, ot]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [_t, "initial", lt, ot]
                }],
                ease: [{
                    ease: ["linear", "initial", R, lt, ot]
                }],
                delay: [{
                    delay: [_t, lt, ot]
                }],
                animate: [{
                    animate: ["none", q, lt, ot]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [M, lt, ot]
                }],
                "perspective-origin": [{
                    "perspective-origin": nt()
                }],
                rotate: [{
                    rotate: oe()
                }],
                "rotate-x": [{
                    "rotate-x": oe()
                }],
                "rotate-y": [{
                    "rotate-y": oe()
                }],
                "rotate-z": [{
                    "rotate-z": oe()
                }],
                scale: [{
                    scale: ne()
                }],
                "scale-x": [{
                    "scale-x": ne()
                }],
                "scale-y": [{
                    "scale-y": ne()
                }],
                "scale-z": [{
                    "scale-z": ne()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: pn()
                }],
                "skew-x": [{
                    "skew-x": pn()
                }],
                "skew-y": [{
                    "skew-y": pn()
                }],
                transform: [{
                    transform: [lt, ot, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: nt()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: le()
                }],
                "translate-x": [{
                    "translate-x": le()
                }],
                "translate-y": [{
                    "translate-y": le()
                }],
                "translate-z": [{
                    "translate-z": le()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: $()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: $()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", lt, ot]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": j()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": j()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", lt, ot]
                }],
                fill: [{
                    fill: ["none", ...$()]
                }],
                "stroke-w": [{
                    stroke: [_t, _r, bi, Vg]
                }],
                stroke: [{
                    stroke: ["none", ...$()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    _R = eR(wR);

function ER(...n) {
    return _R(wv(n))
}
const RR = jE("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    wf = et.forwardRef(({
        className: n,
        variant: i,
        size: s,
        asChild: o = !1,
        ...c
    }, f) => {
        const d = o ? AE : "button";
        return z.jsx(d, {
            className: ER(RR({
                variant: i,
                size: s,
                className: n
            })),
            ref: f,
            ...c
        })
    });
wf.displayName = "Button";

function TR() {
    const [n, i] = et.useState(!1), [s, o] = et.useState(!1);
    return z.jsxs("header", {
        className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        children: [z.jsxs("div", {
            className: "container-px mx-auto flex h-20 max-w-7xl items-center justify-between",
            children: [z.jsxs($t, {
                to: "/",
                className: "flex items-center gap-3",
                "aria-label": fe.name,
                children: [z.jsx("img", {
                    src: vv,
                    alt: `${fe.name} logo`,
                    className: "h-12 w-auto"
                }), z.jsx("span", {
                    className: "sr-only",
                    children: fe.name
                })]
            }), z.jsxs("nav", {
                className: "hidden items-center gap-1 lg:flex",
                children: [z.jsx($t, {
                    to: "/",
                    className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground",
                    activeProps: {
                        className: "text-foreground bg-secondary"
                    },
                    activeOptions: {
                        exact: !0
                    },
                    children: "Home"
                }), z.jsxs("div", {
                    className: "relative",
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    children: [z.jsxs("button", {
                        className: "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground",
                        children: ["Services ", z.jsx(cE, {
                            className: "h-4 w-4"
                        })]
                    }), s && z.jsx("div", {
                        className: "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-2",
                        children: z.jsxs("div", {
                            className: "grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-elegant animate-fade-in",
                            children: [z.jsx($t, {
                                to: "/services",
                                className: "col-span-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary/80",
                                children: "All services overview →"
                            }), yl.map(c => z.jsxs($t, {
                                to: "/services/$slug",
                                params: {
                                    slug: c.slug
                                },
                                className: "rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground",
                                children: [z.jsx("div", {
                                    className: "font-medium text-foreground",
                                    children: c.title
                                }), z.jsx("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: c.short
                                })]
                            }, c.slug))]
                        })
                    })]
                }), z.jsx($t, {
                    to: "/about",
                    className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground",
                    activeProps: {
                        className: "text-foreground bg-secondary"
                    },
                    children: "About"
                }), z.jsx($t, {
                    to: "/contact",
                    className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground",
                    activeProps: {
                        className: "text-foreground bg-secondary"
                    },
                    children: "Contact"
                })]
            }), z.jsxs("div", {
                className: "hidden items-center gap-3 lg:flex",
                children: [z.jsxs("a", {
                    href: fe.phoneHref,
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent",
                    children: [z.jsx(gl, {
                        className: "h-4 w-4"
                    }), " ", fe.phone]
                }), z.jsx(wf, {
                    asChild: !0,
                    variant: "default",
                    className: "bg-accent text-accent-foreground hover:opacity-90",
                    children: z.jsx($t, {
                        to: "/contact",
                        children: "Get Free Quote"
                    })
                })]
            }), z.jsx("button", {
                "aria-label": "Toggle menu",
                className: "inline-flex h-11 w-11 items-center justify-center rounded-md border border-border lg:hidden",
                onClick: () => i(c => !c),
                children: n ? z.jsx(_E, {
                    className: "h-5 w-5"
                }) : z.jsx(gE, {
                    className: "h-5 w-5"
                })
            })]
        }), n && z.jsx("div", {
            className: "border-t border-border bg-background lg:hidden",
            children: z.jsxs("nav", {
                className: "container-px mx-auto flex max-w-7xl flex-col gap-1 py-4",
                children: [z.jsx($t, {
                    to: "/",
                    onClick: () => i(!1),
                    className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
                    children: "Home"
                }), z.jsx($t, {
                    to: "/services",
                    onClick: () => i(!1),
                    className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
                    children: "All Services"
                }), z.jsx("div", {
                    className: "ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3",
                    children: yl.map(c => z.jsx($t, {
                        to: "/services/$slug",
                        params: {
                            slug: c.slug
                        },
                        onClick: () => i(!1),
                        className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
                        children: c.title
                    }, c.slug))
                }), z.jsx($t, {
                    to: "/about",
                    onClick: () => i(!1),
                    className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
                    children: "About"
                }), z.jsx($t, {
                    to: "/contact",
                    onClick: () => i(!1),
                    className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
                    children: "Contact"
                }), z.jsxs("a", {
                    href: fe.phoneHref,
                    className: "mt-2 inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-3 text-sm font-semibold",
                    children: [z.jsx(gl, {
                        className: "h-4 w-4"
                    }), " ", fe.phone]
                }), z.jsx(wf, {
                    asChild: !0,
                    className: "mt-1 bg-accent text-accent-foreground hover:opacity-90",
                    children: z.jsx($t, {
                        to: "/contact",
                        onClick: () => i(!1),
                        children: "Get Free Quote"
                    })
                })]
            })
        })]
    })
}

function CR() {
    return z.jsx("footer", {
        className: "border-t border-border bg-soft",
        children: z.jsxs("div", {
            className: "container-px mx-auto max-w-7xl py-16",
            children: [z.jsxs("div", {
                className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
                children: [z.jsxs("div", {
                    children: [z.jsx("img", {
                        src: vv,
                        alt: fe.name,
                        className: "h-14 w-auto"
                    }), z.jsxs("p", {
                        className: "mt-4 max-w-xs text-sm text-muted-foreground",
                        children: [fe.tagline, " Premium facilities & cleaning services for businesses and properties across the UK."]
                    }), z.jsxs("div", {
                        className: "mt-5 flex flex-wrap gap-2 text-xs",
                        children: [z.jsxs("span", {
                            className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium",
                            children: [z.jsx(xE, {
                                className: "h-3 w-3"
                            }), " Fully insured"]
                        }), z.jsxs("span", {
                            className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium",
                            children: [z.jsx(Ug, {
                                className: "h-3 w-3"
                            }), " 24/7 cover"]
                        })]
                    })]
                }), z.jsxs("div", {
                    children: [z.jsx("h4", {
                        className: "text-sm font-semibold uppercase tracking-wider text-foreground",
                        children: "Services"
                    }), z.jsxs("ul", {
                        className: "mt-4 space-y-2",
                        children: [yl.slice(0, 6).map(n => z.jsx("li", {
                            children: z.jsx($t, {
                                to: "/services/$slug",
                                params: {
                                    slug: n.slug
                                },
                                className: "text-sm text-muted-foreground hover:text-foreground",
                                children: n.title
                            })
                        }, n.slug)), z.jsx("li", {
                            children: z.jsx($t, {
                                to: "/services",
                                className: "text-sm font-medium text-accent hover:underline",
                                children: "View all →"
                            })
                        })]
                    })]
                }), z.jsxs("div", {
                    children: [z.jsx("h4", {
                        className: "text-sm font-semibold uppercase tracking-wider text-foreground",
                        children: "Company"
                    }), z.jsxs("ul", {
                        className: "mt-4 space-y-2 text-sm text-muted-foreground",
                        children: [z.jsx("li", {
                            children: z.jsx($t, {
                                to: "/about",
                                className: "hover:text-foreground",
                                children: "About us"
                            })
                        }), z.jsx("li", {
                            children: z.jsx($t, {
                                to: "/contact",
                                className: "hover:text-foreground",
                                children: "Contact"
                            })
                        }), z.jsx("li", {
                            children: z.jsx($t, {
                                to: "/contact",
                                className: "hover:text-foreground",
                                children: "Get a quote"
                            })
                        })]
                    }), z.jsx("h4", {
                        className: "mt-6 text-sm font-semibold uppercase tracking-wider text-foreground",
                        children: "Service Areas"
                    }), z.jsx("p", {
                        className: "mt-3 text-sm text-muted-foreground",
                        children: fe.areas.join(" · ")
                    })]
                }), z.jsxs("div", {
                    children: [z.jsx("h4", {
                        className: "text-sm font-semibold uppercase tracking-wider text-foreground",
                        children: "Contact"
                    }), z.jsxs("ul", {
                        className: "mt-4 space-y-3 text-sm text-muted-foreground",
                        children: [z.jsx("li", {
                            children: z.jsxs("a", {
                                href: fe.phoneHref,
                                className: "inline-flex items-center gap-2 hover:text-foreground",
                                children: [z.jsx(gl, {
                                    className: "h-4 w-4"
                                }), " ", fe.phone]
                            })
                        }), z.jsx("li", {
                            children: z.jsxs("a", {
                                href: fe.emailHref,
                                className: "inline-flex items-center gap-2 hover:text-foreground",
                                children: [z.jsx(dE, {
                                    className: "h-4 w-4"
                                }), " ", fe.email]
                            })
                        }), z.jsxs("li", {
                            className: "inline-flex items-start gap-2",
                            children: [z.jsx(mE, {
                                className: "mt-0.5 h-4 w-4 shrink-0"
                            }), " ", fe.address]
                        }), z.jsxs("li", {
                            className: "inline-flex items-center gap-2",
                            children: [z.jsx(Ug, {
                                className: "h-4 w-4"
                            }), " ", fe.hours]
                        })]
                    })]
                })]
            }), z.jsxs("div", {
                className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
                children: [z.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " ", fe.name, ". All rights reserved."]
                }), z.jsx("p", {
                    children: "Registered in England & Wales · VAT registered · ICO compliant"
                })]
            })]
        })
    })
}

function AR() {
    return z.jsx("div", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-elegant backdrop-blur lg:hidden",
        children: z.jsxs("div", {
            className: "mx-auto flex max-w-7xl items-center gap-2",
            children: [z.jsxs("a", {
                href: fe.phoneHref,
                className: "inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-3 text-sm font-semibold text-foreground",
                "aria-label": "Call us",
                children: [z.jsx(gl, {
                    className: "h-4 w-4"
                }), " Call"]
            }), z.jsxs("a", {
                href: fe.whatsappHref,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[oklch(0.72_0.18_148)] px-3 py-3 text-sm font-semibold text-white",
                "aria-label": "WhatsApp us",
                children: [z.jsx(vE, {
                    className: "h-4 w-4"
                }), " WhatsApp"]
            }), z.jsx($t, {
                to: "/contact",
                className: "inline-flex flex-[1.4] items-center justify-center rounded-lg bg-accent px-3 py-3 text-sm font-semibold text-accent-foreground shadow-glow",
                children: "Get Free Quote"
            })]
        })
    })
}

function MR(n) {
    if (typeof document > "u") return;
    let i = document.head || document.getElementsByTagName("head")[0],
        s = document.createElement("style");
    s.type = "text/css", i.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n))
}
const OR = n => {
        switch (n) {
            case "success":
                return DR;
            case "info":
                return LR;
            case "warning":
                return jR;
            case "error":
                return UR;
            default:
                return null
        }
    },
    zR = Array(12).fill(0),
    NR = ({
        visible: n,
        className: i
    }) => tt.createElement("div", {
        className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "),
        "data-visible": n
    }, tt.createElement("div", {
        className: "sonner-spinner"
    }, zR.map((s, o) => tt.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${o}`
    })))),
    DR = tt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, tt.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    jR = tt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, tt.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    LR = tt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, tt.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    UR = tt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, tt.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    BR = tt.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, tt.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), tt.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    kR = () => {
        const [n, i] = tt.useState(document.hidden);
        return tt.useEffect(() => {
            const s = () => {
                i(document.hidden)
            };
            return document.addEventListener("visibilitychange", s), () => window.removeEventListener("visibilitychange", s)
        }, []), n
    };
let _f = 1;
class HR {
    constructor() {
        this.subscribe = i => (this.subscribers.push(i), () => {
            const s = this.subscribers.indexOf(i);
            this.subscribers.splice(s, 1)
        }), this.publish = i => {
            this.subscribers.forEach(s => s(i))
        }, this.addToast = i => {
            this.publish(i), this.toasts = [...this.toasts, i]
        }, this.create = i => {
            var s;
            const {
                message: o,
                ...c
            } = i, f = typeof i ? .id == "number" || ((s = i.id) == null ? void 0 : s.length) > 0 ? i.id : _f++, d = this.toasts.find(y => y.id === f), m = i.dismissible === void 0 ? !0 : i.dismissible;
            return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f), d ? this.toasts = this.toasts.map(y => y.id === f ? (this.publish({ ...y,
                ...i,
                id: f,
                title: o
            }), { ...y,
                ...i,
                id: f,
                dismissible: m,
                title: o
            }) : y) : this.addToast({
                title: o,
                ...c,
                dismissible: m,
                id: f
            }), f
        }, this.dismiss = i => (i ? (this.dismissedToasts.add(i), requestAnimationFrame(() => this.subscribers.forEach(s => s({
            id: i,
            dismiss: !0
        })))) : this.toasts.forEach(s => {
            this.subscribers.forEach(o => o({
                id: s.id,
                dismiss: !0
            }))
        }), i), this.message = (i, s) => this.create({ ...s,
            message: i
        }), this.error = (i, s) => this.create({ ...s,
            message: i,
            type: "error"
        }), this.success = (i, s) => this.create({ ...s,
            type: "success",
            message: i
        }), this.info = (i, s) => this.create({ ...s,
            type: "info",
            message: i
        }), this.warning = (i, s) => this.create({ ...s,
            type: "warning",
            message: i
        }), this.loading = (i, s) => this.create({ ...s,
            type: "loading",
            message: i
        }), this.promise = (i, s) => {
            if (!s) return;
            let o;
            s.loading !== void 0 && (o = this.create({ ...s,
                promise: i,
                type: "loading",
                message: s.loading,
                description: typeof s.description != "function" ? s.description : void 0
            }));
            const c = Promise.resolve(i instanceof Function ? i() : i);
            let f = o !== void 0,
                d;
            const m = c.then(async g => {
                    if (d = ["resolve", g], tt.isValidElement(g)) f = !1, this.create({
                        id: o,
                        type: "default",
                        message: g
                    });
                    else if (YR(g) && !g.ok) {
                        f = !1;
                        const h = typeof s.error == "function" ? await s.error(`HTTP error! status: ${g.status}`) : s.error,
                            S = typeof s.description == "function" ? await s.description(`HTTP error! status: ${g.status}`) : s.description,
                            E = typeof h == "object" && !tt.isValidElement(h) ? h : {
                                message: h
                            };
                        this.create({
                            id: o,
                            type: "error",
                            description: S,
                            ...E
                        })
                    } else if (g instanceof Error) {
                        f = !1;
                        const h = typeof s.error == "function" ? await s.error(g) : s.error,
                            S = typeof s.description == "function" ? await s.description(g) : s.description,
                            E = typeof h == "object" && !tt.isValidElement(h) ? h : {
                                message: h
                            };
                        this.create({
                            id: o,
                            type: "error",
                            description: S,
                            ...E
                        })
                    } else if (s.success !== void 0) {
                        f = !1;
                        const h = typeof s.success == "function" ? await s.success(g) : s.success,
                            S = typeof s.description == "function" ? await s.description(g) : s.description,
                            E = typeof h == "object" && !tt.isValidElement(h) ? h : {
                                message: h
                            };
                        this.create({
                            id: o,
                            type: "success",
                            description: S,
                            ...E
                        })
                    }
                }).catch(async g => {
                    if (d = ["reject", g], s.error !== void 0) {
                        f = !1;
                        const v = typeof s.error == "function" ? await s.error(g) : s.error,
                            h = typeof s.description == "function" ? await s.description(g) : s.description,
                            x = typeof v == "object" && !tt.isValidElement(v) ? v : {
                                message: v
                            };
                        this.create({
                            id: o,
                            type: "error",
                            description: h,
                            ...x
                        })
                    }
                }).finally(() => {
                    f && (this.dismiss(o), o = void 0), s.finally == null || s.finally.call(s)
                }),
                y = () => new Promise((g, v) => m.then(() => d[0] === "reject" ? v(d[1]) : g(d[1])).catch(v));
            return typeof o != "string" && typeof o != "number" ? {
                unwrap: y
            } : Object.assign(o, {
                unwrap: y
            })
        }, this.custom = (i, s) => {
            const o = s ? .id || _f++;
            return this.create({
                jsx: i(o),
                id: o,
                ...s
            }), o
        }, this.getActiveToasts = () => this.toasts.filter(i => !this.dismissedToasts.has(i.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
    }
}
const Qe = new HR,
    qR = (n, i) => {
        const s = i ? .id || _f++;
        return Qe.addToast({
            title: n,
            ...i,
            id: s
        }), s
    },
    YR = n => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number",
    GR = qR,
    VR = () => Qe.toasts,
    QR = () => Qe.getActiveToasts(),
    HT = Object.assign(GR, {
        success: Qe.success,
        info: Qe.info,
        warning: Qe.warning,
        error: Qe.error,
        custom: Qe.custom,
        message: Qe.message,
        promise: Qe.promise,
        dismiss: Qe.dismiss,
        loading: Qe.loading
    }, {
        getHistory: VR,
        getToasts: QR
    });
MR("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");

function nl(n) {
    return n.label !== void 0
}
const PR = 3,
    XR = "24px",
    KR = "16px",
    Xg = 4e3,
    FR = 356,
    ZR = 14,
    JR = 45,
    IR = 200;

function On(...n) {
    return n.filter(Boolean).join(" ")
}

function $R(n) {
    const [i, s] = n.split("-"), o = [];
    return i && o.push(i), s && o.push(s), o
}
const WR = n => {
    var i, s, o, c, f, d, m, y, g;
    const {
        invert: v,
        toast: h,
        unstyled: S,
        interacting: x,
        setHeights: E,
        visibleToasts: M,
        heights: _,
        index: R,
        toasts: q,
        expanded: Y,
        removeToast: H,
        defaultRichColors: nt,
        closeButton: I,
        style: P,
        cancelButtonStyle: j,
        actionButtonStyle: W,
        className: ut = "",
        descriptionClassName: st = "",
        duration: pt,
        position: bt,
        gap: jt,
        expandByDefault: Et,
        classNames: D,
        icons: F,
        closeButtonAriaLabel: it = "Close toast"
    } = n, [St, $] = tt.useState(null), [A, V] = tt.useState(null), [X, J] = tt.useState(!1), [Z, at] = tt.useState(!1), [yt, mt] = tt.useState(!1), [dt, xe] = tt.useState(!1), [oe, ne] = tt.useState(!1), [pn, le] = tt.useState(0), [Ja, Dn] = tt.useState(0), wn = tt.useRef(h.duration || pt || Xg), nn = tt.useRef(null), we = tt.useRef(null), Fe = R === 0, Ia = R + 1 <= M, me = h.type, _n = h.dismissible !== !1, pe = h.className || "", Bt = h.descriptionClassName || "", Zt = tt.useMemo(() => _.findIndex(gt => gt.toastId === h.id) || 0, [_, h.id]), an = tt.useMemo(() => {
        var gt;
        return (gt = h.closeButton) != null ? gt : I
    }, [h.closeButton, I]), jn = tt.useMemo(() => h.duration || pt || Xg, [h.duration, pt]), Es = tt.useRef(0), Ln = tt.useRef(0), jr = tt.useRef(0), ra = tt.useRef(null), [$a, ze] = bt.split("-"), gn = tt.useMemo(() => _.reduce((gt, Pt, ge) => ge >= Zt ? gt : gt + Pt.height, 0), [_, Zt]), Ae = kR(), Ml = h.invert || v, Rs = me === "loading";
    Ln.current = tt.useMemo(() => Zt * jt + gn, [Zt, gn]), tt.useEffect(() => {
        wn.current = jn
    }, [jn]), tt.useEffect(() => {
        J(!0)
    }, []), tt.useEffect(() => {
        const gt = we.current;
        if (gt) {
            const Pt = gt.getBoundingClientRect().height;
            return Dn(Pt), E(ge => [{
                toastId: h.id,
                height: Pt,
                position: h.position
            }, ...ge]), () => E(ge => ge.filter(Me => Me.toastId !== h.id))
        }
    }, [E, h.id]), tt.useLayoutEffect(() => {
        if (!X) return;
        const gt = we.current,
            Pt = gt.style.height;
        gt.style.height = "auto";
        const ge = gt.getBoundingClientRect().height;
        gt.style.height = Pt, Dn(ge), E(Me => Me.find(Ft => Ft.toastId === h.id) ? Me.map(Ft => Ft.toastId === h.id ? { ...Ft,
            height: ge
        } : Ft) : [{
            toastId: h.id,
            height: ge,
            position: h.position
        }, ...Me])
    }, [X, h.title, h.description, E, h.id, h.jsx, h.action, h.cancel]);
    const En = tt.useCallback(() => {
        at(!0), le(Ln.current), E(gt => gt.filter(Pt => Pt.toastId !== h.id)), setTimeout(() => {
            H(h)
        }, IR)
    }, [h, H, E, Ln]);
    tt.useEffect(() => {
        if (h.promise && me === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
        let gt;
        return Y || x || Ae ? (() => {
            if (jr.current < Es.current) {
                const Me = new Date().getTime() - Es.current;
                wn.current = wn.current - Me
            }
            jr.current = new Date().getTime()
        })() : wn.current !== 1 / 0 && (Es.current = new Date().getTime(), gt = setTimeout(() => {
            h.onAutoClose == null || h.onAutoClose.call(h, h), En()
        }, wn.current)), () => clearTimeout(gt)
    }, [Y, x, h, me, Ae, En]), tt.useEffect(() => {
        h.delete && (En(), h.onDismiss == null || h.onDismiss.call(h, h))
    }, [En, h.delete]);

    function Ai() {
        var gt;
        if (F ? .loading) {
            var Pt;
            return tt.createElement("div", {
                className: On(D ? .loader, h == null || (Pt = h.classNames) == null ? void 0 : Pt.loader, "sonner-loader"),
                "data-visible": me === "loading"
            }, F.loading)
        }
        return tt.createElement(NR, {
            className: On(D ? .loader, h == null || (gt = h.classNames) == null ? void 0 : gt.loader),
            visible: me === "loading"
        })
    }
    const Mi = h.icon || F ? .[me] || OR(me);
    var Wa, Rn;
    return tt.createElement("li", {
        tabIndex: 0,
        ref: we,
        className: On(ut, pe, D ? .toast, h == null || (i = h.classNames) == null ? void 0 : i.toast, D ? .default, D ? .[me], h == null || (s = h.classNames) == null ? void 0 : s[me]),
        "data-sonner-toast": "",
        "data-rich-colors": (Wa = h.richColors) != null ? Wa : nt,
        "data-styled": !(h.jsx || h.unstyled || S),
        "data-mounted": X,
        "data-promise": !!h.promise,
        "data-swiped": oe,
        "data-removed": Z,
        "data-visible": Ia,
        "data-y-position": $a,
        "data-x-position": ze,
        "data-index": R,
        "data-front": Fe,
        "data-swiping": yt,
        "data-dismissible": _n,
        "data-type": me,
        "data-invert": Ml,
        "data-swipe-out": dt,
        "data-swipe-direction": A,
        "data-expanded": !!(Y || Et && X),
        "data-testid": h.testId,
        style: {
            "--index": R,
            "--toasts-before": R,
            "--z-index": q.length - R,
            "--offset": `${Z?pn:Ln.current}px`,
            "--initial-height": Et ? "auto" : `${Ja}px`,
            ...P,
            ...h.style
        },
        onDragEnd: () => {
            mt(!1), $(null), ra.current = null
        },
        onPointerDown: gt => {
            gt.button !== 2 && (Rs || !_n || (nn.current = new Date, le(Ln.current), gt.target.setPointerCapture(gt.pointerId), gt.target.tagName !== "BUTTON" && (mt(!0), ra.current = {
                x: gt.clientX,
                y: gt.clientY
            })))
        },
        onPointerUp: () => {
            var gt, Pt, ge;
            if (dt || !_n) return;
            ra.current = null;
            const Me = Number(((gt = we.current) == null ? void 0 : gt.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                oa = Number(((Pt = we.current) == null ? void 0 : Pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Ft = new Date().getTime() - ((ge = nn.current) == null ? void 0 : ge.getTime()),
                je = St === "x" ? Me : oa,
                ti = Math.abs(je) / Ft;
            if (Math.abs(je) >= JR || ti > .11) {
                le(Ln.current), h.onDismiss == null || h.onDismiss.call(h, h), V(St === "x" ? Me > 0 ? "right" : "left" : oa > 0 ? "down" : "up"), En(), xe(!0);
                return
            } else {
                var Le, Ue;
                (Le = we.current) == null || Le.style.setProperty("--swipe-amount-x", "0px"), (Ue = we.current) == null || Ue.style.setProperty("--swipe-amount-y", "0px")
            }
            ne(!1), mt(!1), $(null)
        },
        onPointerMove: gt => {
            var Pt, ge, Me;
            if (!ra.current || !_n || ((Pt = window.getSelection()) == null ? void 0 : Pt.toString().length) > 0) return;
            const Ft = gt.clientY - ra.current.y,
                je = gt.clientX - ra.current.x;
            var ti;
            const Le = (ti = n.swipeDirections) != null ? ti : $R(bt);
            !St && (Math.abs(je) > 1 || Math.abs(Ft) > 1) && $(Math.abs(je) > Math.abs(Ft) ? "x" : "y");
            let Ue = {
                x: 0,
                y: 0
            };
            const Oi = yn => 1 / (1.5 + Math.abs(yn) / 20);
            if (St === "y") {
                if (Le.includes("top") || Le.includes("bottom"))
                    if (Le.includes("top") && Ft < 0 || Le.includes("bottom") && Ft > 0) Ue.y = Ft;
                    else {
                        const yn = Ft * Oi(Ft);
                        Ue.y = Math.abs(yn) < Math.abs(Ft) ? yn : Ft
                    }
            } else if (St === "x" && (Le.includes("left") || Le.includes("right")))
                if (Le.includes("left") && je < 0 || Le.includes("right") && je > 0) Ue.x = je;
                else {
                    const yn = je * Oi(je);
                    Ue.x = Math.abs(yn) < Math.abs(je) ? yn : je
                }(Math.abs(Ue.x) > 0 || Math.abs(Ue.y) > 0) && ne(!0), (ge = we.current) == null || ge.style.setProperty("--swipe-amount-x", `${Ue.x}px`), (Me = we.current) == null || Me.style.setProperty("--swipe-amount-y", `${Ue.y}px`)
        }
    }, an && !h.jsx && me !== "loading" ? tt.createElement("button", {
        "aria-label": it,
        "data-disabled": Rs,
        "data-close-button": !0,
        onClick: Rs || !_n ? () => {} : () => {
            En(), h.onDismiss == null || h.onDismiss.call(h, h)
        },
        className: On(D ? .closeButton, h == null || (o = h.classNames) == null ? void 0 : o.closeButton)
    }, (Rn = F ? .close) != null ? Rn : BR) : null, (me || h.icon || h.promise) && h.icon !== null && (F ? .[me] !== null || h.icon) ? tt.createElement("div", {
        "data-icon": "",
        className: On(D ? .icon, h == null || (c = h.classNames) == null ? void 0 : c.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || Ai() : null, h.type !== "loading" ? Mi : null) : null, tt.createElement("div", {
        "data-content": "",
        className: On(D ? .content, h == null || (f = h.classNames) == null ? void 0 : f.content)
    }, tt.createElement("div", {
        "data-title": "",
        className: On(D ? .title, h == null || (d = h.classNames) == null ? void 0 : d.title)
    }, h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title), h.description ? tt.createElement("div", {
        "data-description": "",
        className: On(st, Bt, D ? .description, h == null || (m = h.classNames) == null ? void 0 : m.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), tt.isValidElement(h.cancel) ? h.cancel : h.cancel && nl(h.cancel) ? tt.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || j,
        onClick: gt => {
            nl(h.cancel) && _n && (h.cancel.onClick == null || h.cancel.onClick.call(h.cancel, gt), En())
        },
        className: On(D ? .cancelButton, h == null || (y = h.classNames) == null ? void 0 : y.cancelButton)
    }, h.cancel.label) : null, tt.isValidElement(h.action) ? h.action : h.action && nl(h.action) ? tt.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || W,
        onClick: gt => {
            nl(h.action) && (h.action.onClick == null || h.action.onClick.call(h.action, gt), !gt.defaultPrevented && En())
        },
        className: On(D ? .actionButton, h == null || (g = h.classNames) == null ? void 0 : g.actionButton)
    }, h.action.label) : null)
};

function Kg() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const n = document.documentElement.getAttribute("dir");
    return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n
}

function tT(n, i) {
    const s = {};
    return [n, i].forEach((o, c) => {
        const f = c === 1,
            d = f ? "--mobile-offset" : "--offset",
            m = f ? KR : XR;

        function y(g) {
            ["top", "right", "bottom", "left"].forEach(v => {
                s[`${d}-${v}`] = typeof g == "number" ? `${g}px` : g
            })
        }
        typeof o == "number" || typeof o == "string" ? y(o) : typeof o == "object" ? ["top", "right", "bottom", "left"].forEach(g => {
            o[g] === void 0 ? s[`${d}-${g}`] = m : s[`${d}-${g}`] = typeof o[g] == "number" ? `${o[g]}px` : o[g]
        }) : y(m)
    }), s
}
const eT = tt.forwardRef(function(i, s) {
        const {
            id: o,
            invert: c,
            position: f = "bottom-right",
            hotkey: d = ["altKey", "KeyT"],
            expand: m,
            closeButton: y,
            className: g,
            offset: v,
            mobileOffset: h,
            theme: S = "light",
            richColors: x,
            duration: E,
            style: M,
            visibleToasts: _ = PR,
            toastOptions: R,
            dir: q = Kg(),
            gap: Y = ZR,
            icons: H,
            containerAriaLabel: nt = "Notifications"
        } = i, [I, P] = tt.useState([]), j = tt.useMemo(() => o ? I.filter(X => X.toasterId === o) : I.filter(X => !X.toasterId), [I, o]), W = tt.useMemo(() => Array.from(new Set([f].concat(j.filter(X => X.position).map(X => X.position)))), [j, f]), [ut, st] = tt.useState([]), [pt, bt] = tt.useState(!1), [jt, Et] = tt.useState(!1), [D, F] = tt.useState(S !== "system" ? S : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), it = tt.useRef(null), St = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = tt.useRef(null), A = tt.useRef(!1), V = tt.useCallback(X => {
            P(J => {
                var Z;
                return (Z = J.find(at => at.id === X.id)) != null && Z.delete || Qe.dismiss(X.id), J.filter(({
                    id: at
                }) => at !== X.id)
            })
        }, []);
        return tt.useEffect(() => Qe.subscribe(X => {
            if (X.dismiss) {
                requestAnimationFrame(() => {
                    P(J => J.map(Z => Z.id === X.id ? { ...Z,
                        delete: !0
                    } : Z))
                });
                return
            }
            setTimeout(() => {
                Y_.flushSync(() => {
                    P(J => {
                        const Z = J.findIndex(at => at.id === X.id);
                        return Z !== -1 ? [...J.slice(0, Z), { ...J[Z],
                            ...X
                        }, ...J.slice(Z + 1)] : [X, ...J]
                    })
                })
            })
        }), [I]), tt.useEffect(() => {
            if (S !== "system") {
                F(S);
                return
            }
            if (S === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window > "u") return;
            const X = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                X.addEventListener("change", ({
                    matches: J
                }) => {
                    F(J ? "dark" : "light")
                })
            } catch {
                X.addListener(({
                    matches: Z
                }) => {
                    try {
                        F(Z ? "dark" : "light")
                    } catch (at) {
                        console.error(at)
                    }
                })
            }
        }, [S]), tt.useEffect(() => {
            I.length <= 1 && bt(!1)
        }, [I]), tt.useEffect(() => {
            const X = J => {
                var Z;
                if (d.every(mt => J[mt] || J.code === mt)) {
                    var yt;
                    bt(!0), (yt = it.current) == null || yt.focus()
                }
                J.code === "Escape" && (document.activeElement === it.current || (Z = it.current) != null && Z.contains(document.activeElement)) && bt(!1)
            };
            return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X)
        }, [d]), tt.useEffect(() => {
            if (it.current) return () => {
                $.current && ($.current.focus({
                    preventScroll: !0
                }), $.current = null, A.current = !1)
            }
        }, [it.current]), tt.createElement("section", {
            ref: s,
            "aria-label": `${nt} ${St}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0
        }, W.map((X, J) => {
            var Z;
            const [at, yt] = X.split("-");
            return j.length ? tt.createElement("ol", {
                key: X,
                dir: q === "auto" ? Kg() : q,
                tabIndex: -1,
                ref: it,
                className: g,
                "data-sonner-toaster": !0,
                "data-sonner-theme": D,
                "data-y-position": at,
                "data-x-position": yt,
                style: {
                    "--front-toast-height": `${((Z=ut[0])==null?void 0:Z.height)||0}px`,
                    "--width": `${FR}px`,
                    "--gap": `${Y}px`,
                    ...M,
                    ...tT(v, h)
                },
                onBlur: mt => {
                    A.current && !mt.currentTarget.contains(mt.relatedTarget) && (A.current = !1, $.current && ($.current.focus({
                        preventScroll: !0
                    }), $.current = null))
                },
                onFocus: mt => {
                    mt.target instanceof HTMLElement && mt.target.dataset.dismissible === "false" || A.current || (A.current = !0, $.current = mt.relatedTarget)
                },
                onMouseEnter: () => bt(!0),
                onMouseMove: () => bt(!0),
                onMouseLeave: () => {
                    jt || bt(!1)
                },
                onDragEnd: () => bt(!1),
                onPointerDown: mt => {
                    mt.target instanceof HTMLElement && mt.target.dataset.dismissible === "false" || Et(!0)
                },
                onPointerUp: () => Et(!1)
            }, j.filter(mt => !mt.position && J === 0 || mt.position === X).map((mt, dt) => {
                var xe, oe;
                return tt.createElement(WR, {
                    key: mt.id,
                    icons: H,
                    index: dt,
                    toast: mt,
                    defaultRichColors: x,
                    duration: (xe = R ? .duration) != null ? xe : E,
                    className: R ? .className,
                    descriptionClassName: R ? .descriptionClassName,
                    invert: c,
                    visibleToasts: _,
                    closeButton: (oe = R ? .closeButton) != null ? oe : y,
                    interacting: jt,
                    position: X,
                    style: R ? .style,
                    unstyled: R ? .unstyled,
                    classNames: R ? .classNames,
                    cancelButtonStyle: R ? .cancelButtonStyle,
                    actionButtonStyle: R ? .actionButtonStyle,
                    closeButtonAriaLabel: R ? .closeButtonAriaLabel,
                    removeToast: V,
                    toasts: j.filter(ne => ne.position == mt.position),
                    heights: ut.filter(ne => ne.position == mt.position),
                    setHeights: st,
                    expandByDefault: m,
                    gap: Y,
                    expanded: pt,
                    swipeDirections: i.swipeDirections
                })
            })) : null
        }))
    }),
    Fg = ({ ...n
    }) => z.jsx(eT, {
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...n
    });

function nT() {
    return z.jsx("div", {
        className: "flex min-h-[60vh] items-center justify-center px-4",
        children: z.jsxs("div", {
            className: "max-w-md text-center",
            children: [z.jsx("h1", {
                className: "text-7xl font-bold text-foreground",
                children: "404"
            }), z.jsx("h2", {
                className: "mt-4 text-xl font-semibold text-foreground",
                children: "Page not found"
            }), z.jsx("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "The page you're looking for doesn't exist or has moved."
            }), z.jsx("div", {
                className: "mt-6",
                children: z.jsx($t, {
                    to: "/",
                    className: "inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground",
                    children: "Back to home"
                })
            })]
        })
    })
}

function aT({
    error: n,
    reset: i
}) {
    console.error(n);
    const s = Se();
    return z.jsx("div", {
        className: "flex min-h-[60vh] items-center justify-center px-4",
        children: z.jsxs("div", {
            className: "max-w-md text-center",
            children: [z.jsx("h1", {
                className: "text-xl font-semibold tracking-tight text-foreground",
                children: "This page didn't load"
            }), z.jsx("p", {
                className: "mt-2 text-sm text-muted-foreground",
                children: "Something went wrong. Please try again."
            }), z.jsx("button", {
                onClick: () => {
                    s.invalidate(), i()
                },
                className: "mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground",
                children: "Try again"
            })]
        })
    })
}
const Fa = W_()({
    head: () => ({
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            title: "Crestwell Facilities — Premium Commercial Cleaning & Facilities Services"
        }, {
            name: "description",
            content: "Crestwell Facilities delivers premium commercial cleaning, office cleaning, end of tenancy, Airbnb turnovers and facilities support across London and the UK. Clean Spaces. Strong Impressions."
        }, {
            name: "author",
            content: "Crestwell Facilities"
        }, {
            name: "theme-color",
            content: "#0a2540"
        }, {
            property: "og:title",
            content: "Crestwell Facilities — Premium Commercial Cleaning & Facilities Services"
        }, {
            property: "og:description",
            content: "Crestwell Facilities delivers premium commercial cleaning, office cleaning, end of tenancy, Airbnb turnovers and facilities support across London and the UK. Clean Spaces. Strong Impressions."
        }, {
            property: "og:type",
            content: "website"
        }, {
            property: "og:site_name",
            content: "Crestwell Facilities"
        }, {
            name: "twitter:card",
            content: "summary_large_image"
        }, {
            name: "twitter:title",
            content: "Crestwell Facilities — Premium Commercial Cleaning & Facilities Services"
        }, {
            name: "twitter:description",
            content: "Crestwell Facilities delivers premium commercial cleaning, office cleaning, end of tenancy, Airbnb turnovers and facilities support across London and the UK. Clean Spaces. Strong Impressions."
        }, {
            property: "og:image",
            content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7aed195f-9991-4b21-b0fb-288896fb65ee/id-preview-a62353d9--f18ec470-7c29-41d9-ae21-b40b9cd542e0.lovable.app-1779081390968.png"
        }, {
            name: "twitter:image",
            content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7aed195f-9991-4b21-b0fb-288896fb65ee/id-preview-a62353d9--f18ec470-7c29-41d9-ae21-b40b9cd542e0.lovable.app-1779081390968.png"
        }],
        links: [{
            rel: "stylesheet",
            href: nE
        }, {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        }, {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous"
        }, {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
        }],
        scripts: [{
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Crestwell Facilities",
                description: "Premium commercial cleaning and facilities services in London and the UK.",
                telephone: "+44 20 4525 8800",
                email: "hello@crestwellfacilities.co.uk",
                areaServed: "United Kingdom",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "1 Canada Square, Canary Wharf",
                    addressLocality: "London",
                    postalCode: "E14 5AB",
                    addressCountry: "GB"
                },
                openingHours: "Mo-Su 00:00-23:59"
            })
        }]
    }),
    shellComponent: iT,
    component: sT,
    notFoundComponent: nT,
    errorComponent: aT
});

function iT({
    children: n
}) {
    return z.jsxs("html", {
        lang: "en",
        children: [z.jsx("head", {
            children: z.jsx(x2, {})
        }), z.jsxs("body", {
            children: [n, z.jsx(w2, {})]
        })]
    })
}

function sT() {
    const {
        queryClient: n
    } = Fa.useRouteContext(), s = y2({
        select: o => o.location.pathname
    }).startsWith("/admin");
    return z.jsx(eE, {
        client: n,
        children: s ? z.jsxs(z.Fragment, {
            children: [z.jsx(gf, {}), z.jsx(Fg, {
                richColors: !0,
                position: "top-center"
            })]
        }) : z.jsxs("div", {
            className: "flex min-h-screen flex-col",
            children: [z.jsx(TR, {}), z.jsx("main", {
                className: "flex-1 pb-20 lg:pb-0",
                children: z.jsx(gf, {})
            }), z.jsx(CR, {}), z.jsx(AR, {}), z.jsx(Fg, {
                richColors: !0,
                position: "top-center"
            })]
        })
    })
}
const rT = "modulepreload",
    oT = function(n) {
        return "/" + n
    },
    Zg = {},
    Za = function(i, s, o) {
        let c = Promise.resolve();
        if (s && s.length > 0) {
            let y = function(g) {
                return Promise.all(g.map(v => Promise.resolve(v).then(h => ({
                    status: "fulfilled",
                    value: h
                }), h => ({
                    status: "rejected",
                    reason: h
                }))))
            };
            document.getElementsByTagName("link");
            const d = document.querySelector("meta[property=csp-nonce]"),
                m = d ? .nonce || d ? .getAttribute("nonce");
            c = y(s.map(g => {
                if (g = oT(g), g in Zg) return;
                Zg[g] = !0;
                const v = g.endsWith(".css"),
                    h = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${h}`)) return;
                const S = document.createElement("link");
                if (S.rel = v ? "stylesheet" : rT, v || (S.as = "script"), S.crossOrigin = "", S.href = g, m && S.setAttribute("nonce", m), document.head.appendChild(S), v) return new Promise((x, E) => {
                    S.addEventListener("load", x), S.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${g}`)))
                })
            }))
        }

        function f(d) {
            const m = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (m.payload = d, window.dispatchEvent(m), !m.defaultPrevented) throw d
        }
        return c.then(d => {
            for (const m of d || []) m.status === "rejected" && f(m.reason);
            return i().catch(f)
        })
    },
    Jg = "./contact-map-B6h_JEo9.jpg",
    lT = () => Za(() =>
        import ("./contact-BQ8DwKj7.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
    cT = _s("/contact")({
        head: () => ({
            meta: [{
                title: "Contact Crestwell Facilities — Get a Free Cleaning Quote"
            }, {
                name: "description",
                content: "Contact Crestwell Facilities for a free commercial cleaning or facilities quote. Call, WhatsApp or submit our quote form — reply within 1 business hour."
            }, {
                property: "og:title",
                content: "Contact Crestwell Facilities"
            }, {
                property: "og:description",
                content: "Get a free quote in 60 seconds."
            }, {
                property: "og:url",
                content: "/contact"
            }, {
                property: "og:image",
                content: Jg
            }, {
                name: "twitter:image",
                content: Jg
            }],
            links: [{
                rel: "canonical",
                href: "/contact"
            }]
        }),
        component: Ga(lT, "component")
    }),
    uT = () => Za(() =>
        import ("./admin-DIRVmukV.js"), __vite__mapDeps([6, 2, 7, 3, 8, 9, 10, 11, 4])),
    fT = _s("/admin")({
        head: () => ({
            meta: [{
                title: "Admin · Crestwell Facilities"
            }, {
                name: "robots",
                content: "noindex, nofollow"
            }]
        }),
        component: Ga(uT, "component")
    }),
    Ig = "./about-team-BoYxSbXr.jpg",
    dT = () => Za(() =>
        import ("./about-DXF2NjG8.js"), __vite__mapDeps([12, 13, 3, 14, 4, 9])),
    hT = _s("/about")({
        head: () => ({
            meta: [{
                title: "About Crestwell Facilities — Our Mission & Values"
            }, {
                name: "description",
                content: "Crestwell Facilities is a scalable facilities management brand built on reliability, professionalism and consistent service delivery across the UK."
            }, {
                property: "og:title",
                content: "About Crestwell Facilities"
            }, {
                property: "og:description",
                content: "Reliability-focused facilities & cleaning services built to scale."
            }, {
                property: "og:url",
                content: "/about"
            }, {
                property: "og:image",
                content: Ig
            }, {
                name: "twitter:image",
                content: Ig
            }],
            links: [{
                rel: "canonical",
                href: "/about"
            }]
        }),
        component: Ga(dT, "component")
    }),
    mT = () => Za(() =>
        import ("./index-CXy4G_rk.js"), __vite__mapDeps([15, 1, 2, 13, 5, 14, 11, 16, 3, 8, 4, 17, 10])),
    pT = _s("/")({
        head: () => ({
            meta: [{
                title: "Crestwell Facilities — Commercial Cleaning & Facilities Services in London"
            }, {
                name: "description",
                content: "Premium commercial cleaning, office cleaning, end of tenancy, Airbnb turnovers, deep cleaning and 24/7 facilities support across London. Get a free quote in 60 seconds."
            }, {
                property: "og:title",
                content: "Crestwell Facilities — Clean Spaces. Strong Impressions."
            }, {
                property: "og:description",
                content: "Premium commercial cleaning & facilities services across London and the UK."
            }, {
                property: "og:url",
                content: "/"
            }],
            links: [{
                rel: "canonical",
                href: "/"
            }]
        }),
        component: Ga(mT, "component")
    }),
    gT = () => Za(() =>
        import ("./services.index-BMsvtnzn.js"), __vite__mapDeps([18, 16, 3, 8, 17])),
    yT = _s("/services/")({
        head: () => ({
            meta: [{
                title: "Services — Commercial Cleaning & Facilities Support | Crestwell"
            }, {
                name: "description",
                content: "Explore Crestwell Facilities' full range of commercial cleaning, end of tenancy, Airbnb turnovers, deep cleaning, pressure washing and 24/7 facilities support."
            }, {
                property: "og:title",
                content: "Crestwell Facilities Services"
            }, {
                property: "og:description",
                content: "Our full portfolio of cleaning and facilities services."
            }, {
                property: "og:url",
                content: "/services"
            }],
            links: [{
                rel: "canonical",
                href: "/services"
            }]
        }),
        component: Ga(gT, "component")
    }),
    vT = () => Za(() =>
        import ("./services._slug-CwlSXjL2.js"), __vite__mapDeps([19, 1, 2, 14, 11, 16, 3, 8, 7])),
    bT = () => Za(() =>
        import ("./services._slug-CV-ZgE5B.js"), []),
    ST = () => Za(() =>
        import ("./services._slug-mmjNlSKc.js"), []),
    xT = _s("/services/$slug")({
        loader: ({
            params: n
        }) => {
            const i = EE(n.slug);
            if (!i) throw L1();
            return {
                service: i
            }
        },
        head: ({
            loaderData: n,
            params: i
        }) => {
            const s = n ? .service,
                o = s ? `${s.title} | Crestwell Facilities` : "Service | Crestwell Facilities",
                c = s ? .intro ? ? "Premium cleaning and facilities services in London and the UK.";
            return {
                meta: [{
                    title: o
                }, {
                    name: "description",
                    content: c
                }, {
                    property: "og:title",
                    content: o
                }, {
                    property: "og:description",
                    content: c
                }, {
                    property: "og:url",
                    content: `/services/${i.slug}`
                }, {
                    property: "og:type",
                    content: "article"
                }],
                links: [{
                    rel: "canonical",
                    href: `/services/${i.slug}`
                }],
                scripts: s ? [{
                    type: "application/ld+json",
                    children: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        serviceType: s.title,
                        provider: {
                            "@type": "Organization",
                            name: "Crestwell Facilities"
                        },
                        areaServed: "United Kingdom",
                        description: s.intro
                    })
                }] : void 0
            }
        },
        notFoundComponent: Ga(ST, "notFoundComponent"),
        errorComponent: Ga(bT, "errorComponent"),
        component: Ga(vT, "component")
    }),
    wT = cT.update({
        id: "/contact",
        path: "/contact",
        getParentRoute: () => Fa
    }),
    _T = fT.update({
        id: "/admin",
        path: "/admin",
        getParentRoute: () => Fa
    }),
    ET = hT.update({
        id: "/about",
        path: "/about",
        getParentRoute: () => Fa
    }),
    RT = pT.update({
        id: "/",
        path: "/",
        getParentRoute: () => Fa
    }),
    TT = yT.update({
        id: "/services/",
        path: "/services/",
        getParentRoute: () => Fa
    }),
    CT = xT.update({
        id: "/services/$slug",
        path: "/services/$slug",
        getParentRoute: () => Fa
    }),
    AT = {
        IndexRoute: RT,
        AboutRoute: ET,
        AdminRoute: _T,
        ContactRoute: wT,
        ServicesSlugRoute: CT,
        ServicesIndexRoute: TT
    },
    MT = Fa._addFileChildren(AT),
    OT = () => {
        const n = new W2;
        return h2({
            routeTree: MT,
            context: {
                queryClient: n
            },
            scrollRestoration: !0,
            defaultPreloadStaleTime: 0
        })
    };
async function zT() {
    const n = await OT();
    let i;
    if (Tg) {
        const s = await Tg.getOptions();
        s.serializationAdapters = s.serializationAdapters ? ? [], window.__TSS_START_OPTIONS__ = s, i = s.serializationAdapters, n.options.defaultSsr = s.defaultSsr
    } else i = [], window.__TSS_START_OPTIONS__ = {
        serializationAdapters: i
    };
    return i.push(y_), n.options.serializationAdapters && i.push(...n.options.serializationAdapters), n.update({
        basepath: "",
        serializationAdapters: i
    }), n.stores.matchesId.get().length || await b_(n), n
}
async function NT() {
    const n = await zT();
    return window.$_TSR ? .h(), n
}
var of ;

function DT() {
    return of || ( of = NT()), z.jsx(__, {
        promise: of ,
        children: n => z.jsx(g2, {
            router: n
        })
    })
}
et.startTransition(() => {
    i1.hydrateRoot(document, z.jsx(et.StrictMode, {
        children: z.jsx(DT, {})
    }))
});
export {
    wf as B, Ug as C, $t as L, vE as M, gl as P, Y_ as R, fe as S, _E as X, Jg as a, dE as b, sa as c, mE as d, CE as e, ER as f, bv as g, jE as h, sv as i, z as j, AE as k, L_ as l, vv as m, Ig as n, yl as o, tt as p, cE as q, et as r, xT as s, $b as t, kT as u, HT as v
};