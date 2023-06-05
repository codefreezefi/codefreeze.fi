var W, s, l_, H, J, i_, j, D = {}, c_ = [], b_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, R = Array.isArray;
function b(_, e) {
  for (var t in e)
    _[t] = e[t];
  return _;
}
function u_(_) {
  var e = _.parentNode;
  e && e.removeChild(_);
}
function H_(_, e, t) {
  var r, l, o, f = {};
  for (o in e)
    o == "key" ? r = e[o] : o == "ref" ? l = e[o] : f[o] = e[o];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? W.call(arguments, 2) : t), typeof _ == "function" && _.defaultProps != null)
    for (o in _.defaultProps)
      f[o] === void 0 && (f[o] = _.defaultProps[o]);
  return C(_, f, r, l, null);
}
function C(_, e, t, r, l) {
  var o = { type: _, props: e, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l ?? ++l_ };
  return l == null && s.vnode != null && s.vnode(o), o;
}
function I(_) {
  return _.children;
}
function T(_, e) {
  this.props = _, this.context = e;
}
function x(_, e) {
  if (e == null)
    return _.__ ? x(_.__, _.__.__k.indexOf(_) + 1) : null;
  for (var t; e < _.__k.length; e++)
    if ((t = _.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof _.type == "function" ? x(_) : null;
}
function f_(_) {
  var e, t;
  if ((_ = _.__) != null && _.__c != null) {
    for (_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++)
      if ((t = _.__k[e]) != null && t.__e != null) {
        _.__e = _.__c.base = t.__e;
        break;
      }
    return f_(_);
  }
}
function K(_) {
  (!_.__d && (_.__d = !0) && H.push(_) && !A.__r++ || J !== s.debounceRendering) && ((J = s.debounceRendering) || i_)(A);
}
function A() {
  var _, e, t, r, l, o, f, u;
  for (H.sort(j); _ = H.shift(); )
    _.__d && (e = H.length, r = void 0, l = void 0, f = (o = (t = _).__v).__e, (u = t.__P) && (r = [], (l = b({}, o)).__v = o.__v + 1, z(u, o, l, t.__n, u.ownerSVGElement !== void 0, o.__h != null ? [f] : null, r, f ?? x(o), o.__h), d_(r, o), o.__e != f && f_(o)), H.length > e && H.sort(j));
  A.__r = 0;
}
function s_(_, e, t, r, l, o, f, u, a, p) {
  var n, d, c, i, h, $, v, y = r && r.__k || c_, k = y.length;
  for (t.__k = [], n = 0; n < e.length; n++)
    if ((i = t.__k[n] = (i = e[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? C(null, i, null, null, i) : R(i) ? C(I, { children: i }, null, null, null) : i.__b > 0 ? C(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
      if (i.__ = t, i.__b = t.__b + 1, (c = y[n]) === null || c && i.key == c.key && i.type === c.type)
        y[n] = void 0;
      else
        for (d = 0; d < k; d++) {
          if ((c = y[d]) && i.key == c.key && i.type === c.type) {
            y[d] = void 0;
            break;
          }
          c = null;
        }
      z(_, i, c = c || D, l, o, f, u, a, p), h = i.__e, (d = i.ref) && c.ref != d && (v || (v = []), c.ref && v.push(c.ref, null, i), v.push(d, i.__c || h, i)), h != null ? ($ == null && ($ = h), typeof i.type == "function" && i.__k === c.__k ? i.__d = a = a_(i, a, _) : a = p_(_, i, c, y, h, a), typeof t.type == "function" && (t.__d = a)) : a && c.__e == a && a.parentNode != _ && (a = x(c));
    }
  for (t.__e = $, n = k; n--; )
    y[n] != null && (typeof t.type == "function" && y[n].__e != null && y[n].__e == t.__d && (t.__d = h_(r).nextSibling), m_(y[n], y[n]));
  if (v)
    for (n = 0; n < v.length; n++)
      v_(v[n], v[++n], v[++n]);
}
function a_(_, e, t) {
  for (var r, l = _.__k, o = 0; l && o < l.length; o++)
    (r = l[o]) && (r.__ = _, e = typeof r.type == "function" ? a_(r, e, t) : p_(t, r, r, l, r.__e, e));
  return e;
}
function p_(_, e, t, r, l, o) {
  var f, u, a;
  if (e.__d !== void 0)
    f = e.__d, e.__d = void 0;
  else if (t == null || l != o || l.parentNode == null)
    _:
      if (o == null || o.parentNode !== _)
        _.appendChild(l), f = null;
      else {
        for (u = o, a = 0; (u = u.nextSibling) && a < r.length; a += 1)
          if (u == l)
            break _;
        _.insertBefore(l, o), f = o;
      }
  return f !== void 0 ? f : l.nextSibling;
}
function h_(_) {
  var e, t, r;
  if (_.type == null || typeof _.type == "string")
    return _.__e;
  if (_.__k) {
    for (e = _.__k.length - 1; e >= 0; e--)
      if ((t = _.__k[e]) && (r = h_(t)))
        return r;
  }
  return null;
}
function $_(_, e, t, r, l) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || F(_, o, null, t[o], r);
  for (o in e)
    l && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || F(_, o, e[o], t[o], r);
}
function Q(_, e, t) {
  e[0] === "-" ? _.setProperty(e, t ?? "") : _[e] = t == null ? "" : typeof t != "number" || b_.test(e) ? t : t + "px";
}
function F(_, e, t, r, l) {
  var o;
  _:
    if (e === "style")
      if (typeof t == "string")
        _.style.cssText = t;
      else {
        if (typeof r == "string" && (_.style.cssText = r = ""), r)
          for (e in r)
            t && e in t || Q(_.style, e, "");
        if (t)
          for (e in t)
            r && t[e] === r[e] || Q(_.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in _ ? e.toLowerCase().slice(2) : e.slice(2), _.l || (_.l = {}), _.l[e + o] = t, t ? r || _.addEventListener(e, o ? Y : X, o) : _.removeEventListener(e, o ? Y : X, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (l)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in _)
        try {
          _[e] = t ?? "";
          break _;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? _.removeAttribute(e) : _.setAttribute(e, t));
    }
}
function X(_) {
  return this.l[_.type + !1](s.event ? s.event(_) : _);
}
function Y(_) {
  return this.l[_.type + !0](s.event ? s.event(_) : _);
}
function z(_, e, t, r, l, o, f, u, a) {
  var p, n, d, c, i, h, $, v, y, k, N, S, G, w, V, g = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (a = t.__h, u = e.__e = t.__e, e.__h = null, o = [u]), (p = s.__b) && p(e);
  try {
    _:
      if (typeof g == "function") {
        if (v = e.props, y = (p = g.contextType) && r[p.__c], k = p ? y ? y.props.value : p.__ : r, t.__c ? $ = (n = e.__c = t.__c).__ = n.__E : ("prototype" in g && g.prototype.render ? e.__c = n = new g(v, k) : (e.__c = n = new T(v, k), n.constructor = g, n.render = x_), y && y.sub(n), n.props = v, n.state || (n.state = {}), n.context = k, n.__n = r, d = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), g.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = b({}, n.__s)), b(n.__s, g.getDerivedStateFromProps(v, n.__s))), c = n.props, i = n.state, n.__v = e, d)
          g.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && v !== c && n.componentWillReceiveProps != null && n.componentWillReceiveProps(v, k), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(v, n.__s, k) === !1 || e.__v === t.__v) {
            for (e.__v !== t.__v && (n.props = v, n.state = n.__s, n.__d = !1), n.__e = !1, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(P) {
              P && (P.__ = e);
            }), N = 0; N < n._sb.length; N++)
              n.__h.push(n._sb[N]);
            n._sb = [], n.__h.length && f.push(n);
            break _;
          }
          n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, k), n.componentDidUpdate != null && n.__h.push(function() {
            n.componentDidUpdate(c, i, h);
          });
        }
        if (n.context = k, n.props = v, n.__P = _, S = s.__r, G = 0, "prototype" in g && g.prototype.render) {
          for (n.state = n.__s, n.__d = !1, S && S(e), p = n.render(n.props, n.state, n.context), w = 0; w < n._sb.length; w++)
            n.__h.push(n._sb[w]);
          n._sb = [];
        } else
          do
            n.__d = !1, S && S(e), p = n.render(n.props, n.state, n.context), n.state = n.__s;
          while (n.__d && ++G < 25);
        n.state = n.__s, n.getChildContext != null && (r = b(b({}, r), n.getChildContext())), d || n.getSnapshotBeforeUpdate == null || (h = n.getSnapshotBeforeUpdate(c, i)), s_(_, R(V = p != null && p.type === I && p.key == null ? p.props.children : p) ? V : [V], e, t, r, l, o, f, u, a), n.base = e.__e, e.__h = null, n.__h.length && f.push(n), $ && (n.__E = n.__ = null), n.__e = !1;
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = S_(t.__e, e, t, r, l, o, f, a);
    (p = s.diffed) && p(e);
  } catch (P) {
    e.__v = null, (a || o != null) && (e.__e = u, e.__h = !!a, o[o.indexOf(u)] = null), s.__e(P, e, t);
  }
}
function d_(_, e) {
  s.__c && s.__c(e, _), _.some(function(t) {
    try {
      _ = t.__h, t.__h = [], _.some(function(r) {
        r.call(t);
      });
    } catch (r) {
      s.__e(r, t.__v);
    }
  });
}
function S_(_, e, t, r, l, o, f, u) {
  var a, p, n, d = t.props, c = e.props, i = e.type, h = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; h < o.length; h++)
      if ((a = o[h]) && "setAttribute" in a == !!i && (i ? a.localName === i : a.nodeType === 3)) {
        _ = a, o[h] = null;
        break;
      }
  }
  if (_ == null) {
    if (i === null)
      return document.createTextNode(c);
    _ = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, c.is && c), o = null, u = !1;
  }
  if (i === null)
    d === c || u && _.data === c || (_.data = c);
  else {
    if (o = o && W.call(_.childNodes), p = (d = t.props || D).dangerouslySetInnerHTML, n = c.dangerouslySetInnerHTML, !u) {
      if (o != null)
        for (d = {}, h = 0; h < _.attributes.length; h++)
          d[_.attributes[h].name] = _.attributes[h].value;
      (n || p) && (n && (p && n.__html == p.__html || n.__html === _.innerHTML) || (_.innerHTML = n && n.__html || ""));
    }
    if ($_(_, c, d, l, u), n)
      e.__k = [];
    else if (s_(_, R(h = e.props.children) ? h : [h], e, t, r, l && i !== "foreignObject", o, f, o ? o[0] : t.__k && x(t, 0), u), o != null)
      for (h = o.length; h--; )
        o[h] != null && u_(o[h]);
    u || ("value" in c && (h = c.value) !== void 0 && (h !== _.value || i === "progress" && !h || i === "option" && h !== d.value) && F(_, "value", h, d.value, !1), "checked" in c && (h = c.checked) !== void 0 && h !== _.checked && F(_, "checked", h, d.checked, !1));
  }
  return _;
}
function v_(_, e, t) {
  try {
    typeof _ == "function" ? _(e) : _.current = e;
  } catch (r) {
    s.__e(r, t);
  }
}
function m_(_, e, t) {
  var r, l;
  if (s.unmount && s.unmount(_), (r = _.ref) && (r.current && r.current !== _.__e || v_(r, null, e)), (r = _.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        s.__e(o, e);
      }
    r.base = r.__P = null, _.__c = void 0;
  }
  if (r = _.__k)
    for (l = 0; l < r.length; l++)
      r[l] && m_(r[l], e, t || typeof _.type != "function");
  t || _.__e == null || u_(_.__e), _.__ = _.__e = _.__d = void 0;
}
function x_(_, e, t) {
  return this.constructor(_, t);
}
function E_(_, e, t) {
  var r, l, o;
  s.__ && s.__(_, e), l = (r = typeof t == "function") ? null : t && t.__k || e.__k, o = [], z(e, _ = (!r && t || e).__k = H_(I, null, [_]), l || D, D, e.ownerSVGElement !== void 0, !r && t ? [t] : l ? null : e.firstChild ? W.call(e.childNodes) : null, o, !r && t ? t : l ? l.__e : e.firstChild, r), d_(o, _);
}
W = c_.slice, s = { __e: function(_, e, t, r) {
  for (var l, o, f; e = e.__; )
    if ((l = e.__c) && !l.__)
      try {
        if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(_)), f = l.__d), l.componentDidCatch != null && (l.componentDidCatch(_, r || {}), f = l.__d), f)
          return l.__E = l;
      } catch (u) {
        _ = u;
      }
  throw _;
} }, l_ = 0, T.prototype.setState = function(_, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), typeof _ == "function" && (_ = _(b({}, t), this.props)), _ && b(t, _), _ != null && this.__v && (e && this._sb.push(e), K(this));
}, T.prototype.forceUpdate = function(_) {
  this.__v && (this.__e = !0, _ && this.__h.push(_), K(this));
}, T.prototype.render = I, H = [], i_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, j = function(_, e) {
  return _.__v.__b - e.__v.__b;
}, A.__r = 0;
var L, m, B, Z, q = 0, y_ = [], M = [], __ = s.__b, e_ = s.__r, t_ = s.diffed, n_ = s.__c, o_ = s.unmount;
function g_(_, e) {
  s.__h && s.__h(m, _, q || e), q = 0;
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return _ >= t.__.length && t.__.push({ __V: M }), t.__[_];
}
function N_(_) {
  return q = 1, w_(k_, _);
}
function w_(_, e, t) {
  var r = g_(L++, 2);
  if (r.t = _, !r.__c && (r.__ = [t ? t(e) : k_(void 0, e), function(u) {
    var a = r.__N ? r.__N[0] : r.__[0], p = r.t(a, u);
    a !== p && (r.__N = [p, r.__[1]], r.__c.setState({}));
  }], r.__c = m, !m.u)) {
    var l = function(u, a, p) {
      if (!r.__c.__H)
        return !0;
      var n = r.__c.__H.__.filter(function(c) {
        return c.__c;
      });
      if (n.every(function(c) {
        return !c.__N;
      }))
        return !o || o.call(this, u, a, p);
      var d = !1;
      return n.forEach(function(c) {
        if (c.__N) {
          var i = c.__[0];
          c.__ = c.__N, c.__N = void 0, i !== c.__[0] && (d = !0);
        }
      }), !(!d && r.__c.props === u) && (!o || o.call(this, u, a, p));
    };
    m.u = !0;
    var o = m.shouldComponentUpdate, f = m.componentWillUpdate;
    m.componentWillUpdate = function(u, a, p) {
      if (this.__e) {
        var n = o;
        o = void 0, l(u, a, p), o = n;
      }
      f && f.call(this, u, a, p);
    }, m.shouldComponentUpdate = l;
  }
  return r.__N || r.__;
}
function P_(_, e) {
  var t = g_(L++, 3);
  !s.__s && M_(t.__H, e) && (t.__ = _, t.i = e, m.__H.__h.push(t));
}
function C_() {
  for (var _; _ = y_.shift(); )
    if (_.__P && _.__H)
      try {
        _.__H.__h.forEach(U), _.__H.__h.forEach(O), _.__H.__h = [];
      } catch (e) {
        _.__H.__h = [], s.__e(e, _.__v);
      }
}
s.__b = function(_) {
  m = null, __ && __(_);
}, s.__r = function(_) {
  e_ && e_(_), L = 0;
  var e = (m = _.__c).__H;
  e && (B === m ? (e.__h = [], m.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = M, t.__N = t.i = void 0;
  })) : (e.__h.forEach(U), e.__h.forEach(O), e.__h = [], L = 0)), B = m;
}, s.diffed = function(_) {
  t_ && t_(_);
  var e = _.__c;
  e && e.__H && (e.__H.__h.length && (y_.push(e) !== 1 && Z === s.requestAnimationFrame || ((Z = s.requestAnimationFrame) || T_)(C_)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== M && (t.__ = t.__V), t.i = void 0, t.__V = M;
  })), B = m = null;
}, s.__c = function(_, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(U), t.__h = t.__h.filter(function(r) {
        return !r.__ || O(r);
      });
    } catch (r) {
      e.some(function(l) {
        l.__h && (l.__h = []);
      }), e = [], s.__e(r, t.__v);
    }
  }), n_ && n_(_, e);
}, s.unmount = function(_) {
  o_ && o_(_);
  var e, t = _.__c;
  t && t.__H && (t.__H.__.forEach(function(r) {
    try {
      U(r);
    } catch (l) {
      e = l;
    }
  }), t.__H = void 0, e && s.__e(e, t.__v));
};
var r_ = typeof requestAnimationFrame == "function";
function T_(_) {
  var e, t = function() {
    clearTimeout(r), r_ && cancelAnimationFrame(e), setTimeout(_);
  }, r = setTimeout(t, 100);
  r_ && (e = requestAnimationFrame(t));
}
function U(_) {
  var e = m, t = _.__c;
  typeof t == "function" && (_.__c = void 0, t()), m = e;
}
function O(_) {
  var e = m;
  _.__c = _.__(), m = e;
}
function M_(_, e) {
  return !_ || _.length !== e.length || e.some(function(t, r) {
    return t !== _[r];
  });
}
function k_(_, e) {
  return typeof e == "function" ? e(_) : e;
}
var U_ = 0;
function E(_, e, t, r, l, o) {
  var f, u, a = {};
  for (u in e)
    u == "ref" ? f = e[u] : a[u] = e[u];
  var p = { type: _, props: a, key: t, ref: f, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --U_, __source: l, __self: o };
  if (typeof _ == "function" && (f = _.defaultProps))
    for (u in f)
      a[u] === void 0 && (a[u] = f[u]);
  return s.vnode && s.vnode(p), p;
}
const D_ = () => {
  const [_, e] = N_([]);
  return P_(() => {
    fetch("/status.json").then((t) => t.json()).then((t) => {
      const r = t.map(({
        media: l,
        content: o
      }) => (l ?? []).map((f) => ({
        filename: f,
        content: o
      }))).flat().filter((l) => !l.filename.endsWith("mp4")).sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 10);
      e(r);
    }).catch(console.error);
  }, []), E("div", {
    class: "gallery",
    children: _.map((t) => E(A_, {
      filename: t.filename,
      content: t.content
    }))
  });
}, A_ = ({
  filename: _,
  content: e
}) => E("div", {
  style: {
    backgroundImage: `url(/images/status/thumb-500-${_})`
  },
  children: E("div", {
    class: "content",
    dangerouslySetInnerHTML: {
      __html: e
    }
  })
});
E_(E(D_, {}), document.getElementById("status"));
