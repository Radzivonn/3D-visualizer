(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Pa = '171',
  Rc = 0,
  vo = 1,
  Pc = 2,
  Pl = 1,
  Dc = 2,
  hn = 3,
  Pn = 0,
  Ct = 1,
  fn = 2,
  _n = 0,
  Si = 1,
  Is = 2,
  xo = 3,
  So = 4,
  Lc = 5,
  Yn = 100,
  Uc = 101,
  Ic = 102,
  Nc = 103,
  Fc = 104,
  Oc = 200,
  Bc = 201,
  zc = 202,
  Hc = 203,
  Ns = 204,
  Fs = 205,
  kc = 206,
  Vc = 207,
  Gc = 208,
  Wc = 209,
  Xc = 210,
  qc = 211,
  Yc = 212,
  $c = 213,
  Kc = 214,
  Os = 0,
  Bs = 1,
  zs = 2,
  bi = 3,
  Hs = 4,
  ks = 5,
  Vs = 6,
  Gs = 7,
  Dl = 0,
  Zc = 1,
  jc = 2,
  gn = 0,
  Da = 1,
  La = 2,
  Ua = 3,
  Ia = 4,
  Jc = 5,
  Na = 6,
  Fa = 7,
  Ll = 300,
  Ti = 301,
  Ai = 302,
  Ws = 303,
  Xs = 304,
  Kr = 306,
  qs = 1e3,
  Kn = 1001,
  Ys = 1002,
  Yt = 1003,
  Qc = 1004,
  hr = 1005,
  tn = 1006,
  ns = 1007,
  Zn = 1008,
  Sn = 1009,
  Ul = 1010,
  Il = 1011,
  ji = 1012,
  Oa = 1013,
  Jn = 1014,
  pn = 1015,
  vn = 1016,
  Ba = 1017,
  za = 1018,
  wi = 1020,
  Nl = 35902,
  Fl = 1021,
  Ol = 1022,
  Wt = 1023,
  Bl = 1024,
  zl = 1025,
  Mi = 1026,
  Ci = 1027,
  Hl = 1028,
  Ha = 1029,
  kl = 1030,
  ka = 1031,
  Va = 1033,
  Br = 33776,
  zr = 33777,
  Hr = 33778,
  kr = 33779,
  $s = 35840,
  Ks = 35841,
  Zs = 35842,
  js = 35843,
  Js = 36196,
  Qs = 37492,
  ea = 37496,
  ta = 37808,
  na = 37809,
  ia = 37810,
  ra = 37811,
  sa = 37812,
  aa = 37813,
  oa = 37814,
  la = 37815,
  ca = 37816,
  ua = 37817,
  ha = 37818,
  da = 37819,
  fa = 37820,
  pa = 37821,
  Vr = 36492,
  ma = 36494,
  _a = 36495,
  Vl = 36283,
  ga = 36284,
  va = 36285,
  xa = 36286,
  eu = 3200,
  tu = 3201,
  nu = 0,
  iu = 1,
  Rn = '',
  Ft = 'srgb',
  Ri = 'srgb-linear',
  Wr = 'linear',
  je = 'srgb',
  ti = 7680,
  Mo = 519,
  ru = 512,
  su = 513,
  au = 514,
  Gl = 515,
  ou = 516,
  lu = 517,
  cu = 518,
  uu = 519,
  Eo = 35044,
  yo = '300 es',
  mn = 2e3,
  Xr = 2001;
class Li {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const xt = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0a',
    '0b',
    '0c',
    '0d',
    '0e',
    '0f',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '1a',
    '1b',
    '1c',
    '1d',
    '1e',
    '1f',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '2a',
    '2b',
    '2c',
    '2d',
    '2e',
    '2f',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '3a',
    '3b',
    '3c',
    '3d',
    '3e',
    '3f',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '4a',
    '4b',
    '4c',
    '4d',
    '4e',
    '4f',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '5a',
    '5b',
    '5c',
    '5d',
    '5e',
    '5f',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '6a',
    '6b',
    '6c',
    '6d',
    '6e',
    '6f',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '7a',
    '7b',
    '7c',
    '7d',
    '7e',
    '7f',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '8a',
    '8b',
    '8c',
    '8d',
    '8e',
    '8f',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '9a',
    '9b',
    '9c',
    '9d',
    '9e',
    '9f',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'ba',
    'bb',
    'bc',
    'bd',
    'be',
    'bf',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'd0',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'da',
    'db',
    'dc',
    'dd',
    'de',
    'df',
    'e0',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'ea',
    'eb',
    'ec',
    'ed',
    'ee',
    'ef',
    'f0',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'fa',
    'fb',
    'fc',
    'fd',
    'fe',
    'ff',
  ],
  is = Math.PI / 180,
  Sa = 180 / Math.PI;
function tr() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    xt[i & 255] +
    xt[(i >> 8) & 255] +
    xt[(i >> 16) & 255] +
    xt[(i >> 24) & 255] +
    '-' +
    xt[e & 255] +
    xt[(e >> 8) & 255] +
    '-' +
    xt[((e >> 16) & 15) | 64] +
    xt[(e >> 24) & 255] +
    '-' +
    xt[(t & 63) | 128] +
    xt[(t >> 8) & 255] +
    '-' +
    xt[(t >> 16) & 255] +
    xt[(t >> 24) & 255] +
    xt[n & 255] +
    xt[(n >> 8) & 255] +
    xt[(n >> 16) & 255] +
    xt[(n >> 24) & 255]
  ).toLowerCase();
}
function Be(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function hu(i, e) {
  return ((i % e) + e) % e;
}
function rs(i, e, t) {
  return (1 - t) * i + t * e;
}
function Hi(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function wt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
class Ue {
  constructor(e = 0, t = 0) {
    (Ue.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)), (this.y = Be(this.y, e.y, t.y)), this
    );
  }
  clampScalar(e, t) {
    return (this.x = Be(this.x, e, t)), (this.y = Be(this.y, e, t)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * r + e.x), (this.y = s * r + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Le {
  constructor(e, t, n, r, s, a, o, l, c) {
    (Le.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = r),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      h = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      S = r[0],
      p = r[3],
      d = r[6],
      T = r[1],
      y = r[4],
      E = r[7],
      D = r[2],
      C = r[5],
      A = r[8];
    return (
      (s[0] = a * S + o * T + l * D),
      (s[3] = a * p + o * y + l * C),
      (s[6] = a * d + o * E + l * A),
      (s[1] = c * S + u * T + h * D),
      (s[4] = c * p + u * y + h * C),
      (s[7] = c * d + u * E + h * A),
      (s[2] = f * S + m * T + g * D),
      (s[5] = f * p + m * y + g * C),
      (s[8] = f * d + m * E + g * A),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - n * s * u + n * o * l + r * s * c - r * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = u * a - o * c,
      f = o * l - u * s,
      m = c * s - a * l,
      g = t * h + n * f + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / g;
    return (
      (e[0] = h * S),
      (e[1] = (r * c - u * n) * S),
      (e[2] = (o * n - r * a) * S),
      (e[3] = f * S),
      (e[4] = (u * t - r * l) * S),
      (e[5] = (r * s - o * t) * S),
      (e[6] = m * S),
      (e[7] = (n * l - c * t) * S),
      (e[8] = (a * t - n * s) * S),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(ss.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ss.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ss.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ss = new Le();
function Wl(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Ji(i) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', i);
}
function du() {
  const i = Ji('canvas');
  return (i.style.display = 'block'), i;
}
const bo = {};
function mi(i) {
  i in bo || ((bo[i] = !0), console.warn(i));
}
function fu(i, e, t) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function pu(i) {
  const e = i.elements;
  (e[2] = 0.5 * e[2] + 0.5 * e[3]),
    (e[6] = 0.5 * e[6] + 0.5 * e[7]),
    (e[10] = 0.5 * e[10] + 0.5 * e[11]),
    (e[14] = 0.5 * e[14] + 0.5 * e[15]);
}
function mu(i) {
  const e = i.elements;
  e[11] === -1
    ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
    : ((e[10] = -e[10]), (e[14] = -e[14] + 1));
}
const To = new Le().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Ao = new Le().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function _u() {
  const i = {
      enabled: !0,
      workingColorSpace: Ri,
      spaces: {},
      convert: function (r, s, a) {
        return (
          this.enabled === !1 ||
            s === a ||
            !s ||
            !a ||
            (this.spaces[s].transfer === je &&
              ((r.r = xn(r.r)), (r.g = xn(r.g)), (r.b = xn(r.b))),
            this.spaces[s].primaries !== this.spaces[a].primaries &&
              (r.applyMatrix3(this.spaces[s].toXYZ),
              r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === je &&
              ((r.r = Ei(r.r)), (r.g = Ei(r.g)), (r.b = Ei(r.b)))),
          r
        );
      },
      fromWorkingColorSpace: function (r, s) {
        return this.convert(r, this.workingColorSpace, s);
      },
      toWorkingColorSpace: function (r, s) {
        return this.convert(r, s, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === Rn ? Wr : this.spaces[r].transfer;
      },
      getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
        return r.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, s, a) {
        return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [Ri]: {
        primaries: e,
        whitePoint: n,
        transfer: Wr,
        toXYZ: To,
        fromXYZ: Ao,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: Ft },
        outputColorSpaceConfig: { drawingBufferColorSpace: Ft },
      },
      [Ft]: {
        primaries: e,
        whitePoint: n,
        transfer: je,
        toXYZ: To,
        fromXYZ: Ao,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: Ft },
      },
    }),
    i
  );
}
const qe = _u();
function xn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Ei(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let ni;
class gu {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      ni === void 0 && (ni = Ji('canvas')),
        (ni.width = e.width),
        (ni.height = e.height);
      const n = ni.getContext('2d');
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = ni);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          e,
        ),
        t.toDataURL('image/jpeg', 0.6))
      : t.toDataURL('image/png');
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ) {
      const t = Ji('canvas');
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext('2d');
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = xn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(xn(t[n] / 255) * 255))
          : (t[n] = xn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.',
        ),
        e
      );
  }
}
let vu = 0;
class Xl {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, 'id', { value: vu++ }),
      (this.uuid = tr()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: '' },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(as(r[a].image)) : s.push(as(r[a]));
      } else s = as(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function as(i) {
  return (typeof HTMLImageElement < 'u' && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && i instanceof ImageBitmap)
    ? gu.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let xu = 0;
class Tt extends Li {
  constructor(
    e = Tt.DEFAULT_IMAGE,
    t = Tt.DEFAULT_MAPPING,
    n = Kn,
    r = Kn,
    s = tn,
    a = Zn,
    o = Wt,
    l = Sn,
    c = Tt.DEFAULT_ANISOTROPY,
    u = Rn,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: xu++ }),
      (this.uuid = tr()),
      (this.name = ''),
      (this.source = new Xl(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ue(0, 0)),
      (this.repeat = new Ue(1, 1)),
      (this.center = new Ue(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Le()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== Ll) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case qs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Kn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ys:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case qs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Kn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ys:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Tt.DEFAULT_IMAGE = null;
Tt.DEFAULT_MAPPING = Ll;
Tt.DEFAULT_ANISOTROPY = 1;
class ot {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (ot.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      h = l[8],
      f = l[1],
      m = l[5],
      g = l[9],
      S = l[2],
      p = l[6],
      d = l[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(h - S) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(h + S) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + m + d - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2,
        E = (m + 1) / 2,
        D = (d + 1) / 2,
        C = (u + f) / 4,
        A = (h + S) / 4,
        R = (g + p) / 4;
      return (
        y > E && y > D
          ? y < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(y)), (r = C / n), (s = A / n))
          : E > D
          ? E < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(E)), (n = C / r), (s = R / r))
          : D < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(D)), (n = A / s), (r = R / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let T = Math.sqrt(
      (p - g) * (p - g) + (h - S) * (h - S) + (f - u) * (f - u),
    );
    return (
      Math.abs(T) < 0.001 && (T = 1),
      (this.x = (p - g) / T),
      (this.y = (h - S) / T),
      (this.z = (f - u) / T),
      (this.w = Math.acos((c + m + d - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      (this.w = Be(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      (this.w = Be(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Su extends Li {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ot(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ot(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: tn,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n,
    );
    const s = new Tt(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    );
    (s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, r = e.textures.length; n < r; n++)
      (this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Xl(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class $t extends Su {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class ql extends Tt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Yt),
      (this.minFilter = Yt),
      (this.wrapR = Kn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Mu extends Tt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = Yt),
      (this.minFilter = Yt),
      (this.wrapR = Kn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ui {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      h = n[r + 3];
    const f = s[a + 0],
      m = s[a + 1],
      g = s[a + 2],
      S = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = S);
      return;
    }
    if (h !== S || l !== f || c !== m || u !== g) {
      let p = 1 - o;
      const d = l * f + c * m + u * g + h * S,
        T = d >= 0 ? 1 : -1,
        y = 1 - d * d;
      if (y > Number.EPSILON) {
        const D = Math.sqrt(y),
          C = Math.atan2(D, d * T);
        (p = Math.sin(p * C) / D), (o = Math.sin(o * C) / D);
      }
      const E = o * T;
      if (
        ((l = l * p + f * E),
        (c = c * p + m * E),
        (u = u * p + g * E),
        (h = h * p + S * E),
        p === 1 - o)
      ) {
        const D = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        (l *= D), (c *= D), (u *= D), (h *= D);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      h = s[a],
      f = s[a + 1],
      m = s[a + 2],
      g = s[a + 3];
    return (
      (e[t] = o * g + u * h + l * m - c * f),
      (e[t + 1] = l * g + u * f + c * h - o * m),
      (e[t + 2] = c * g + u * m + o * f - l * h),
      (e[t + 3] = u * g - o * h - l * f - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(r / 2),
      h = o(s / 2),
      f = l(n / 2),
      m = l(r / 2),
      g = l(s / 2);
    switch (a) {
      case 'XYZ':
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case 'YXZ':
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      case 'ZXY':
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case 'ZYX':
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      case 'YZX':
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case 'XZY':
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      default:
        console.warn(
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
            a,
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      h = t[10],
      f = n + o + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (a - r) * m);
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + a) / m),
        (this._z = (s + c) / m);
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (s - c) / m),
        (this._x = (r + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + r * c - s * l),
      (this._y = r * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - r * o),
      (this._w = a * u - n * o - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      h = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = a * h + this._w * f),
      (this._x = n * h + this._x * f),
      (this._y = r * h + this._y * f),
      (this._z = s * h + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class N {
  constructor(e = 0, t = 0, n = 0) {
    (N.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(wo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(wo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * r - o * n),
      u = 2 * (o * t - s * r),
      h = 2 * (s * n - a * t);
    return (
      (this.x = t + l * c + a * h - o * u),
      (this.y = n + l * u + o * c - s * h),
      (this.z = r + l * h + s * u - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Be(this.x, e.x, t.x)),
      (this.y = Be(this.y, e.y, t.y)),
      (this.z = Be(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Be(this.x, e, t)),
      (this.y = Be(this.y, e, t)),
      (this.z = Be(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return os.copy(this).projectOnVector(e), this.sub(os);
  }
  reflect(e) {
    return this.sub(os.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const os = new N(),
  wo = new Ui();
class nr {
  constructor(
    e = new N(1 / 0, 1 / 0, 1 / 0),
    t = new N(-1 / 0, -1 / 0, -1 / 0),
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ht.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ht.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ht.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute('position');
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Ht)
            : Ht.fromBufferAttribute(s, a),
            Ht.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Ht);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            dr.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            dr.copy(n.boundingBox)),
          dr.applyMatrix4(e.matrixWorld),
          this.union(dr);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ht),
      Ht.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ki),
      fr.subVectors(this.max, ki),
      ii.subVectors(e.a, ki),
      ri.subVectors(e.b, ki),
      si.subVectors(e.c, ki),
      yn.subVectors(ri, ii),
      bn.subVectors(si, ri),
      On.subVectors(ii, si);
    let t = [
      0,
      -yn.z,
      yn.y,
      0,
      -bn.z,
      bn.y,
      0,
      -On.z,
      On.y,
      yn.z,
      0,
      -yn.x,
      bn.z,
      0,
      -bn.x,
      On.z,
      0,
      -On.x,
      -yn.y,
      yn.x,
      0,
      -bn.y,
      bn.x,
      0,
      -On.y,
      On.x,
      0,
    ];
    return !ls(t, ii, ri, si, fr) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ls(t, ii, ri, si, fr))
      ? !1
      : (pr.crossVectors(yn, bn),
        (t = [pr.x, pr.y, pr.z]),
        ls(t, ii, ri, si, fr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ht).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Ht).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(sn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const sn = [
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
    new N(),
  ],
  Ht = new N(),
  dr = new nr(),
  ii = new N(),
  ri = new N(),
  si = new N(),
  yn = new N(),
  bn = new N(),
  On = new N(),
  ki = new N(),
  fr = new N(),
  pr = new N(),
  Bn = new N();
function ls(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Bn.fromArray(i, s);
    const o =
        r.x * Math.abs(Bn.x) + r.y * Math.abs(Bn.y) + r.z * Math.abs(Bn.z),
      l = e.dot(Bn),
      c = t.dot(Bn),
      u = n.dot(Bn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const Eu = new nr(),
  Vi = new N(),
  cs = new N();
class Zr {
  constructor(e = new N(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Eu.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Vi.subVectors(e, this.center);
    const t = Vi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Vi, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (cs.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Vi.copy(e.center).add(cs)),
            this.expandByPoint(Vi.copy(e.center).sub(cs))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const an = new N(),
  us = new N(),
  mr = new N(),
  Tn = new N(),
  hs = new N(),
  _r = new N(),
  ds = new N();
class Yl {
  constructor(e = new N(), t = new N(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, an)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = an.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (an.copy(this.origin).addScaledVector(this.direction, t),
        an.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    us.copy(e).add(t).multiplyScalar(0.5),
      mr.copy(t).sub(e).normalize(),
      Tn.copy(this.origin).sub(us);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(mr),
      o = Tn.dot(this.direction),
      l = -Tn.dot(mr),
      c = Tn.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, f, m, g;
    if (u > 0)
      if (((h = a * l - o), (f = a * o - l), (g = s * u), h >= 0))
        if (f >= -g)
          if (f <= g) {
            const S = 1 / u;
            (h *= S),
              (f *= S),
              (m = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c);
          } else
            (f = s),
              (h = Math.max(0, -(a * f + o))),
              (m = -h * h + f * (f + 2 * l) + c);
        else
          (f = -s),
            (h = Math.max(0, -(a * f + o))),
            (m = -h * h + f * (f + 2 * l) + c);
      else
        f <= -g
          ? ((h = Math.max(0, -(-a * s + o))),
            (f = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + f * (f + 2 * l) + c))
          : f <= g
          ? ((h = 0),
            (f = Math.min(Math.max(-s, -l), s)),
            (m = f * (f + 2 * l) + c))
          : ((h = Math.max(0, -(a * s + o))),
            (f = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + f * (f + 2 * l) + c));
    else
      (f = a > 0 ? -s : s),
        (h = Math.max(0, -(a * f + o))),
        (m = -h * h + f * (f + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      r && r.copy(us).addScaledVector(mr, f),
      m
    );
  }
  intersectSphere(e, t) {
    an.subVectors(e.center, this.origin);
    const n = an.dot(this.direction),
      r = an.dot(an) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (r = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (r = (e.min.x - f.x) * c)),
      u >= 0
        ? ((s = (e.min.y - f.y) * u), (a = (e.max.y - f.y) * u))
        : ((s = (e.max.y - f.y) * u), (a = (e.min.y - f.y) * u)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      h >= 0
        ? ((o = (e.min.z - f.z) * h), (l = (e.max.z - f.z) * h))
        : ((o = (e.max.z - f.z) * h), (l = (e.min.z - f.z) * h)),
      n > l || o > r) ||
      ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, an) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    hs.subVectors(t, e), _r.subVectors(n, e), ds.crossVectors(hs, _r);
    let a = this.direction.dot(ds),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Tn.subVectors(this.origin, e);
    const l = o * this.direction.dot(_r.crossVectors(Tn, _r));
    if (l < 0) return null;
    const c = o * this.direction.dot(hs.cross(Tn));
    if (c < 0 || l + c > a) return null;
    const u = -o * Tn.dot(ds);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class lt {
  constructor(e, t, n, r, s, a, o, l, c, u, h, f, m, g, S, p) {
    (lt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, u, h, f, m, g, S, p);
  }
  set(e, t, n, r, s, a, o, l, c, u, h, f, m, g, S, p) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[4] = t),
      (d[8] = n),
      (d[12] = r),
      (d[1] = s),
      (d[5] = a),
      (d[9] = o),
      (d[13] = l),
      (d[2] = c),
      (d[6] = u),
      (d[10] = h),
      (d[14] = f),
      (d[3] = m),
      (d[7] = g),
      (d[11] = S),
      (d[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new lt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / ai.setFromMatrixColumn(e, 0).length(),
      s = 1 / ai.setFromMatrixColumn(e, 1).length(),
      a = 1 / ai.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      h = Math.sin(s);
    if (e.order === 'XYZ') {
      const f = a * u,
        m = a * h,
        g = o * u,
        S = o * h;
      (t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = f - S * c),
        (t[9] = -o * l),
        (t[2] = S - f * c),
        (t[6] = g + m * c),
        (t[10] = a * l);
    } else if (e.order === 'YXZ') {
      const f = l * u,
        m = l * h,
        g = c * u,
        S = c * h;
      (t[0] = f + S * o),
        (t[4] = g * o - m),
        (t[8] = a * c),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = m * o - g),
        (t[6] = S + f * o),
        (t[10] = a * l);
    } else if (e.order === 'ZXY') {
      const f = l * u,
        m = l * h,
        g = c * u,
        S = c * h;
      (t[0] = f - S * o),
        (t[4] = -a * h),
        (t[8] = g + m * o),
        (t[1] = m + g * o),
        (t[5] = a * u),
        (t[9] = S - f * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === 'ZYX') {
      const f = a * u,
        m = a * h,
        g = o * u,
        S = o * h;
      (t[0] = l * u),
        (t[4] = g * c - m),
        (t[8] = f * c + S),
        (t[1] = l * h),
        (t[5] = S * c + f),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === 'YZX') {
      const f = a * l,
        m = a * c,
        g = o * l,
        S = o * c;
      (t[0] = l * u),
        (t[4] = S - f * h),
        (t[8] = g * h + m),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = m * h + g),
        (t[10] = f - S * h);
    } else if (e.order === 'XZY') {
      const f = a * l,
        m = a * c,
        g = o * l,
        S = o * c;
      (t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = f * h + S),
        (t[5] = a * u),
        (t[9] = m * h - g),
        (t[2] = g * h - m),
        (t[6] = o * u),
        (t[10] = S * h + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(yu, e, bu);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Pt.subVectors(e, t),
      Pt.lengthSq() === 0 && (Pt.z = 1),
      Pt.normalize(),
      An.crossVectors(n, Pt),
      An.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Pt.x += 1e-4) : (Pt.z += 1e-4),
        Pt.normalize(),
        An.crossVectors(n, Pt)),
      An.normalize(),
      gr.crossVectors(Pt, An),
      (r[0] = An.x),
      (r[4] = gr.x),
      (r[8] = Pt.x),
      (r[1] = An.y),
      (r[5] = gr.y),
      (r[9] = Pt.y),
      (r[2] = An.z),
      (r[6] = gr.z),
      (r[10] = Pt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      h = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      S = n[6],
      p = n[10],
      d = n[14],
      T = n[3],
      y = n[7],
      E = n[11],
      D = n[15],
      C = r[0],
      A = r[4],
      R = r[8],
      M = r[12],
      v = r[1],
      w = r[5],
      B = r[9],
      k = r[13],
      W = r[2],
      j = r[6],
      $ = r[10],
      Q = r[14],
      G = r[3],
      ae = r[7],
      de = r[11],
      xe = r[15];
    return (
      (s[0] = a * C + o * v + l * W + c * G),
      (s[4] = a * A + o * w + l * j + c * ae),
      (s[8] = a * R + o * B + l * $ + c * de),
      (s[12] = a * M + o * k + l * Q + c * xe),
      (s[1] = u * C + h * v + f * W + m * G),
      (s[5] = u * A + h * w + f * j + m * ae),
      (s[9] = u * R + h * B + f * $ + m * de),
      (s[13] = u * M + h * k + f * Q + m * xe),
      (s[2] = g * C + S * v + p * W + d * G),
      (s[6] = g * A + S * w + p * j + d * ae),
      (s[10] = g * R + S * B + p * $ + d * de),
      (s[14] = g * M + S * k + p * Q + d * xe),
      (s[3] = T * C + y * v + E * W + D * G),
      (s[7] = T * A + y * w + E * j + D * ae),
      (s[11] = T * R + y * B + E * $ + D * de),
      (s[15] = T * M + y * k + E * Q + D * xe),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      h = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      S = e[7],
      p = e[11],
      d = e[15];
    return (
      g *
        (+s * l * h -
          r * c * h -
          s * o * f +
          n * c * f +
          r * o * m -
          n * l * m) +
      S *
        (+t * l * m -
          t * c * f +
          s * a * f -
          r * a * m +
          r * c * u -
          s * l * u) +
      p *
        (+t * c * h -
          t * o * m -
          s * a * h +
          n * a * m +
          s * o * u -
          n * c * u) +
      d *
        (-r * o * u - t * l * h + t * o * f + r * a * h - n * a * f + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      S = e[13],
      p = e[14],
      d = e[15],
      T = h * p * c - S * f * c + S * l * m - o * p * m - h * l * d + o * f * d,
      y = g * f * c - u * p * c - g * l * m + a * p * m + u * l * d - a * f * d,
      E = u * S * c - g * h * c + g * o * m - a * S * m - u * o * d + a * h * d,
      D = g * h * l - u * S * l - g * o * f + a * S * f + u * o * p - a * h * p,
      C = t * T + n * y + r * E + s * D;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / C;
    return (
      (e[0] = T * A),
      (e[1] =
        (S * f * s -
          h * p * s -
          S * r * m +
          n * p * m +
          h * r * d -
          n * f * d) *
        A),
      (e[2] =
        (o * p * s -
          S * l * s +
          S * r * c -
          n * p * c -
          o * r * d +
          n * l * d) *
        A),
      (e[3] =
        (h * l * s -
          o * f * s -
          h * r * c +
          n * f * c +
          o * r * m -
          n * l * m) *
        A),
      (e[4] = y * A),
      (e[5] =
        (u * p * s -
          g * f * s +
          g * r * m -
          t * p * m -
          u * r * d +
          t * f * d) *
        A),
      (e[6] =
        (g * l * s -
          a * p * s -
          g * r * c +
          t * p * c +
          a * r * d -
          t * l * d) *
        A),
      (e[7] =
        (a * f * s -
          u * l * s +
          u * r * c -
          t * f * c -
          a * r * m +
          t * l * m) *
        A),
      (e[8] = E * A),
      (e[9] =
        (g * h * s -
          u * S * s -
          g * n * m +
          t * S * m +
          u * n * d -
          t * h * d) *
        A),
      (e[10] =
        (a * S * s -
          g * o * s +
          g * n * c -
          t * S * c -
          a * n * d +
          t * o * d) *
        A),
      (e[11] =
        (u * o * s -
          a * h * s -
          u * n * c +
          t * h * c +
          a * n * m -
          t * o * m) *
        A),
      (e[12] = D * A),
      (e[13] =
        (u * S * r -
          g * h * r +
          g * n * f -
          t * S * f -
          u * n * p +
          t * h * p) *
        A),
      (e[14] =
        (g * o * r -
          a * S * r -
          g * n * l +
          t * S * l +
          a * n * p -
          t * o * p) *
        A),
      (e[15] =
        (a * h * r -
          u * o * r +
          u * n * l -
          t * h * l -
          a * n * f +
          t * o * f) *
        A),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        u * o + n,
        u * l - r * a,
        0,
        c * l - r * o,
        u * l + r * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      h = o + o,
      f = s * c,
      m = s * u,
      g = s * h,
      S = a * u,
      p = a * h,
      d = o * h,
      T = l * c,
      y = l * u,
      E = l * h,
      D = n.x,
      C = n.y,
      A = n.z;
    return (
      (r[0] = (1 - (S + d)) * D),
      (r[1] = (m + E) * D),
      (r[2] = (g - y) * D),
      (r[3] = 0),
      (r[4] = (m - E) * C),
      (r[5] = (1 - (f + d)) * C),
      (r[6] = (p + T) * C),
      (r[7] = 0),
      (r[8] = (g + y) * A),
      (r[9] = (p - T) * A),
      (r[10] = (1 - (f + S)) * A),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = ai.set(r[0], r[1], r[2]).length();
    const a = ai.set(r[4], r[5], r[6]).length(),
      o = ai.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      kt.copy(this);
    const c = 1 / s,
      u = 1 / a,
      h = 1 / o;
    return (
      (kt.elements[0] *= c),
      (kt.elements[1] *= c),
      (kt.elements[2] *= c),
      (kt.elements[4] *= u),
      (kt.elements[5] *= u),
      (kt.elements[6] *= u),
      (kt.elements[8] *= h),
      (kt.elements[9] *= h),
      (kt.elements[10] *= h),
      t.setFromRotationMatrix(kt),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, r, s, a, o = mn) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - r),
      h = (t + e) / (t - e),
      f = (n + r) / (n - r);
    let m, g;
    if (o === mn) (m = -(a + s) / (a - s)), (g = (-2 * a * s) / (a - s));
    else if (o === Xr) (m = -a / (a - s)), (g = (-a * s) / (a - s));
    else
      throw new Error(
        'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + o,
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, a, o = mn) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - r),
      h = 1 / (a - s),
      f = (t + e) * c,
      m = (n + r) * u;
    let g, S;
    if (o === mn) (g = (a + s) * h), (S = -2 * h);
    else if (o === Xr) (g = s * h), (S = -1 * h);
    else
      throw new Error(
        'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + o,
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = S),
      (l[14] = -g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const ai = new N(),
  kt = new lt(),
  yu = new N(0, 0, 0),
  bu = new N(1, 1, 1),
  An = new N(),
  gr = new N(),
  Pt = new N(),
  Co = new lt(),
  Ro = new Ui();
class Mn {
  constructor(e = 0, t = 0, n = 0, r = Mn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      h = r[2],
      f = r[6],
      m = r[10];
    switch (t) {
      case 'XYZ':
        (this._y = Math.asin(Be(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-Be(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(Be(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-Be(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(Be(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case 'XZY':
        (this._z = Math.asin(-Be(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
            t,
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Co.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Co, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ro.setFromEuler(this), this.setFromQuaternion(Ro, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Mn.DEFAULT_ORDER = 'XYZ';
class $l {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Tu = 0;
const Po = new N(),
  oi = new Ui(),
  on = new lt(),
  vr = new N(),
  Gi = new N(),
  Au = new N(),
  wu = new Ui(),
  Do = new N(1, 0, 0),
  Lo = new N(0, 1, 0),
  Uo = new N(0, 0, 1),
  Io = { type: 'added' },
  Cu = { type: 'removed' },
  li = { type: 'childadded', child: null },
  fs = { type: 'childremoved', child: null };
class Mt extends Li {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Tu++ }),
      (this.uuid = tr()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Mt.DEFAULT_UP.clone());
    const e = new N(),
      t = new Mn(),
      n = new Ui(),
      r = new N(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new lt() },
        normalMatrix: { value: new Le() },
      }),
      (this.matrix = new lt()),
      (this.matrixWorld = new lt()),
      (this.matrixAutoUpdate = Mt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new $l()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return oi.setFromAxisAngle(e, t), this.quaternion.multiply(oi), this;
  }
  rotateOnWorldAxis(e, t) {
    return oi.setFromAxisAngle(e, t), this.quaternion.premultiply(oi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Do, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Lo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Uo, e);
  }
  translateOnAxis(e, t) {
    return (
      Po.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Po.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Do, e);
  }
  translateY(e) {
    return this.translateOnAxis(Lo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Uo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(on.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? vr.copy(e) : vr.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Gi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? on.lookAt(Gi, vr, this.up)
        : on.lookAt(vr, Gi, this.up),
      this.quaternion.setFromRotationMatrix(on),
      r &&
        (on.extractRotation(r.matrixWorld),
        oi.setFromRotationMatrix(on),
        this.quaternion.premultiply(oi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Io),
            (li.child = e),
            this.dispatchEvent(li),
            (li.child = null))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Cu),
        (fs.child = e),
        this.dispatchEvent(fs),
        (fs.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      on.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), on.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(on),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Io),
      (li.child = e),
      this.dispatchEvent(li),
      (li.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty('id', e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty('name', e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, e, Au), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Gi, wu, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string',
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: 'Object',
        generator: 'Object3D.toJSON',
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== '' && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = 'InstancedMesh'),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = 'BatchedMesh'),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        f = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = r), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Mt.DEFAULT_UP = new N(0, 1, 0);
Mt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Vt = new N(),
  ln = new N(),
  ps = new N(),
  cn = new N(),
  ci = new N(),
  ui = new N(),
  No = new N(),
  ms = new N(),
  _s = new N(),
  gs = new N(),
  vs = new ot(),
  xs = new ot(),
  Ss = new ot();
class Gt {
  constructor(e = new N(), t = new N(), n = new N()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Vt.subVectors(e, t), r.cross(Vt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Vt.subVectors(r, t), ln.subVectors(n, t), ps.subVectors(e, t);
    const a = Vt.dot(Vt),
      o = Vt.dot(ln),
      l = Vt.dot(ps),
      c = ln.dot(ln),
      u = ln.dot(ps),
      h = a * c - o * o;
    if (h === 0) return s.set(0, 0, 0), null;
    const f = 1 / h,
      m = (c * l - o * u) * f,
      g = (a * u - o * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, cn) === null
      ? !1
      : cn.x >= 0 && cn.y >= 0 && cn.x + cn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, cn) === null
      ? ((l.x = 0),
        (l.y = 0),
        'z' in l && (l.z = 0),
        'w' in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, cn.x),
        l.addScaledVector(a, cn.y),
        l.addScaledVector(o, cn.z),
        l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return (
      vs.setScalar(0),
      xs.setScalar(0),
      Ss.setScalar(0),
      vs.fromBufferAttribute(e, t),
      xs.fromBufferAttribute(e, n),
      Ss.fromBufferAttribute(e, r),
      a.setScalar(0),
      a.addScaledVector(vs, s.x),
      a.addScaledVector(xs, s.y),
      a.addScaledVector(Ss, s.z),
      a
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Vt.subVectors(n, t), ln.subVectors(e, t), Vt.cross(ln).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Vt.subVectors(this.c, this.b),
      ln.subVectors(this.a, this.b),
      Vt.cross(ln).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Gt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Gt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    ci.subVectors(r, n), ui.subVectors(s, n), ms.subVectors(e, n);
    const l = ci.dot(ms),
      c = ui.dot(ms);
    if (l <= 0 && c <= 0) return t.copy(n);
    _s.subVectors(e, r);
    const u = ci.dot(_s),
      h = ui.dot(_s);
    if (u >= 0 && h <= u) return t.copy(r);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return (a = l / (l - u)), t.copy(n).addScaledVector(ci, a);
    gs.subVectors(e, s);
    const m = ci.dot(gs),
      g = ui.dot(gs);
    if (g >= 0 && m <= g) return t.copy(s);
    const S = m * c - l * g;
    if (S <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(n).addScaledVector(ui, o);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return (
        No.subVectors(s, r),
        (o = (h - u) / (h - u + (m - g))),
        t.copy(r).addScaledVector(No, o)
      );
    const d = 1 / (p + S + f);
    return (
      (a = S * d),
      (o = f * d),
      t.copy(n).addScaledVector(ci, a).addScaledVector(ui, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Kl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  wn = { h: 0, s: 0, l: 0 },
  xr = { h: 0, s: 0, l: 0 };
function Ms(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
let ze = class {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == 'number'
        ? this.setHex(r)
        : typeof r == 'string' && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ft) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      qe.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = qe.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      qe.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = qe.workingColorSpace) {
    if (((e = hu(e, 1)), (t = Be(t, 0, 1)), (n = Be(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = Ms(a, s, e + 1 / 3)),
        (this.g = Ms(a, s, e)),
        (this.b = Ms(a, s, e - 1 / 3));
    }
    return qe.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ft) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          'THREE.Color: Alpha component of ' + e + ' will be ignored.',
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case 'rgb':
        case 'rgba':
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t,
              )
            );
          break;
        case 'hsl':
        case 'hsla':
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn('THREE.Color: Unknown color model ' + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn('THREE.Color: Invalid hex color ' + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ft) {
    const n = Kl[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn('THREE.Color: Unknown color ' + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = xn(e.r)), (this.g = xn(e.g)), (this.b = xn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Ei(e.r)), (this.g = Ei(e.g)), (this.b = Ei(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ft) {
    return (
      qe.fromWorkingColorSpace(St.copy(this), e),
      Math.round(Be(St.r * 255, 0, 255)) * 65536 +
        Math.round(Be(St.g * 255, 0, 255)) * 256 +
        Math.round(Be(St.b * 255, 0, 255))
    );
  }
  getHexString(e = Ft) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(St.copy(this), t);
    const n = St.r,
      r = St.g,
      s = St.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const h = a - o;
      switch (((c = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          l = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - r) / h + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return (
      qe.fromWorkingColorSpace(St.copy(this), t),
      (e.r = St.r),
      (e.g = St.g),
      (e.b = St.b),
      e
    );
  }
  getStyle(e = Ft) {
    qe.fromWorkingColorSpace(St.copy(this), e);
    const t = St.r,
      n = St.g,
      r = St.b;
    return e !== Ft
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255,
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(wn), this.setHSL(wn.h + e, wn.s + t, wn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(wn), e.getHSL(xr);
    const n = rs(wn.h, xr.h, t),
      r = rs(wn.s, xr.s, t),
      s = rs(wn.l, xr.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
const St = new ze();
ze.NAMES = Kl;
let Ru = 0;
class ir extends Li {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: Ru++ }),
      (this.uuid = tr()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = Si),
      (this.side = Pn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Ns),
      (this.blendDst = Fs),
      (this.blendEquation = Yn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new ze(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = bi),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Mo),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ti),
      (this.stencilZFail = ti),
      (this.stencilZPass = ti),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == 'string';
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== '' && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Si && (n.blending = this.blending),
      this.side !== Pn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Ns && (n.blendSrc = this.blendSrc),
      this.blendDst !== Fs && (n.blendDst = this.blendDst),
      this.blendEquation !== Yn && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== bi && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Mo && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== ti && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== ti && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== ti && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn('Material: onBuild() has been removed.');
  }
}
class Ga extends ir {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new ze(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Mn()),
      (this.combine = Dl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const ut = new N(),
  Sr = new Ue();
class nn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.',
      );
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Eo),
      (this.updateRanges = []),
      (this.gpuType = pn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Sr.fromBufferAttribute(this, t),
          Sr.applyMatrix3(e),
          this.setXY(t, Sr.x, Sr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ut.fromBufferAttribute(this, t),
          ut.applyMatrix3(e),
          this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.applyMatrix4(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.applyNormalMatrix(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t),
        ut.transformDirection(e),
        this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Hi(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = wt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Hi(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Hi(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Hi(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Hi(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = wt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = wt(t, this.array)), (n = wt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = wt(t, this.array)),
        (n = wt(n, this.array)),
        (r = wt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = wt(t, this.array)),
        (n = wt(n, this.array)),
        (r = wt(r, this.array)),
        (s = wt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== '' && (e.name = this.name),
      this.usage !== Eo && (e.usage = this.usage),
      e
    );
  }
}
class Zl extends nn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class jl extends nn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ht extends nn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Pu = 0;
const Nt = new lt(),
  Es = new Mt(),
  hi = new N(),
  Dt = new nr(),
  Wi = new nr(),
  pt = new N();
class Zt extends Li {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: Pu++ }),
      (this.uuid = tr()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Wl(e) ? jl : Zl)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Le().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return Es.lookAt(e), Es.updateMatrix(), this.applyMatrix4(Es.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(hi).negate(),
      this.translate(hi.x, hi.y, hi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute('position');
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute('position', new ht(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count &&
        console.warn(
          'THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.',
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new nr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.',
        this,
      ),
        this.boundingBox.set(
          new N(-1 / 0, -1 / 0, -1 / 0),
          new N(1 / 0, 1 / 0, 1 / 0),
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (pt.addVectors(this.boundingBox.min, Dt.min),
                this.boundingBox.expandByPoint(pt),
                pt.addVectors(this.boundingBox.max, Dt.max),
                this.boundingBox.expandByPoint(pt))
              : (this.boundingBox.expandByPoint(Dt.min),
                this.boundingBox.expandByPoint(Dt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.',
        this,
      ),
        this.boundingSphere.set(new N(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Dt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Wi.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (pt.addVectors(Dt.min, Wi.min),
                Dt.expandByPoint(pt),
                pt.addVectors(Dt.max, Wi.max),
                Dt.expandByPoint(pt))
              : (Dt.expandByPoint(Wi.min), Dt.expandByPoint(Wi.max));
        }
      Dt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        pt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(pt)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            pt.fromBufferAttribute(o, c),
              l && (hi.fromBufferAttribute(e, c), pt.add(hi)),
              (r = Math.max(r, n.distanceToSquared(pt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)',
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      s = t.uv;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new nn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute('tangent'),
      o = [],
      l = [];
    for (let R = 0; R < n.count; R++) (o[R] = new N()), (l[R] = new N());
    const c = new N(),
      u = new N(),
      h = new N(),
      f = new Ue(),
      m = new Ue(),
      g = new Ue(),
      S = new N(),
      p = new N();
    function d(R, M, v) {
      c.fromBufferAttribute(n, R),
        u.fromBufferAttribute(n, M),
        h.fromBufferAttribute(n, v),
        f.fromBufferAttribute(s, R),
        m.fromBufferAttribute(s, M),
        g.fromBufferAttribute(s, v),
        u.sub(c),
        h.sub(c),
        m.sub(f),
        g.sub(f);
      const w = 1 / (m.x * g.y - g.x * m.y);
      isFinite(w) &&
        (S.copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(h, -m.y)
          .multiplyScalar(w),
        p
          .copy(h)
          .multiplyScalar(m.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(w),
        o[R].add(S),
        o[M].add(S),
        o[v].add(S),
        l[R].add(p),
        l[M].add(p),
        l[v].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let R = 0, M = T.length; R < M; ++R) {
      const v = T[R],
        w = v.start,
        B = v.count;
      for (let k = w, W = w + B; k < W; k += 3)
        d(e.getX(k + 0), e.getX(k + 1), e.getX(k + 2));
    }
    const y = new N(),
      E = new N(),
      D = new N(),
      C = new N();
    function A(R) {
      D.fromBufferAttribute(r, R), C.copy(D);
      const M = o[R];
      y.copy(M),
        y.sub(D.multiplyScalar(D.dot(M))).normalize(),
        E.crossVectors(C, M);
      const w = E.dot(l[R]) < 0 ? -1 : 1;
      a.setXYZW(R, y.x, y.y, y.z, w);
    }
    for (let R = 0, M = T.length; R < M; ++R) {
      const v = T[R],
        w = v.start,
        B = v.count;
      for (let k = w, W = w + B; k < W; k += 3)
        A(e.getX(k + 0)), A(e.getX(k + 1)), A(e.getX(k + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute('position');
    if (t !== void 0) {
      let n = this.getAttribute('normal');
      if (n === void 0)
        (n = new nn(new Float32Array(t.count * 3), 3)),
          this.setAttribute('normal', n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const r = new N(),
        s = new N(),
        a = new N(),
        o = new N(),
        l = new N(),
        c = new N(),
        u = new N(),
        h = new N();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            S = e.getX(f + 1),
            p = e.getX(f + 2);
          r.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, S),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, s),
            h.subVectors(r, s),
            u.cross(h),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, S),
            c.fromBufferAttribute(n, p),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(S, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            u.subVectors(a, s),
            h.subVectors(r, s),
            u.cross(h),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      pt.fromBufferAttribute(e, t),
        pt.normalize(),
        e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        h = o.normalized,
        f = new c.constructor(l.length * u);
      let m = 0,
        g = 0;
      for (let S = 0, p = l.length; S < p; S++) {
        o.isInterleavedBufferAttribute
          ? (m = l[S] * o.data.stride + o.offset)
          : (m = l[S] * u);
        for (let d = 0; d < u; d++) f[g++] = c[m++];
      }
      return new nn(f, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.',
        ),
        this
      );
    const t = new Zt(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u],
          m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON',
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== '' && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        h = s[c];
      for (let f = 0, m = h.length; f < m; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const Fo = new lt(),
  zn = new Yl(),
  Mr = new Zr(),
  Oo = new N(),
  Er = new N(),
  yr = new N(),
  br = new N(),
  ys = new N(),
  Tr = new N(),
  Bo = new N(),
  Ar = new N();
class Xt extends Mt {
  constructor(e = new Zt(), t = new Ga()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Tr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          h = s[l];
        u !== 0 &&
          (ys.fromBufferAttribute(h, e),
          a ? Tr.addScaledVector(ys, u) : Tr.addScaledVector(ys.sub(t), u));
      }
      t.add(Tr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Mr.copy(n.boundingSphere),
      Mr.applyMatrix4(s),
      zn.copy(e.ray).recast(e.near),
      !(
        Mr.containsPoint(zn.origin) === !1 &&
        (zn.intersectSphere(Mr, Oo) === null ||
          zn.origin.distanceToSquared(Oo) > (e.far - e.near) ** 2)
      ) &&
        (Fo.copy(s).invert(),
        zn.copy(e.ray).applyMatrix4(Fo),
        !(n.boundingBox !== null && zn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, zn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      h = s.attributes.normal,
      f = s.groups,
      m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, S = f.length; g < S; g++) {
          const p = f[g],
            d = a[p.materialIndex],
            T = Math.max(p.start, m.start),
            y = Math.min(
              o.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let E = T, D = y; E < D; E += 3) {
            const C = o.getX(E),
              A = o.getX(E + 1),
              R = o.getX(E + 2);
            (r = wr(this, d, e, n, c, u, h, C, A, R)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start),
          S = Math.min(o.count, m.start + m.count);
        for (let p = g, d = S; p < d; p += 3) {
          const T = o.getX(p),
            y = o.getX(p + 1),
            E = o.getX(p + 2);
          (r = wr(this, a, e, n, c, u, h, T, y, E)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, S = f.length; g < S; g++) {
          const p = f[g],
            d = a[p.materialIndex],
            T = Math.max(p.start, m.start),
            y = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count),
            );
          for (let E = T, D = y; E < D; E += 3) {
            const C = E,
              A = E + 1,
              R = E + 2;
            (r = wr(this, d, e, n, c, u, h, C, A, R)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = p.materialIndex),
                t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start),
          S = Math.min(l.count, m.start + m.count);
        for (let p = g, d = S; p < d; p += 3) {
          const T = p,
            y = p + 1,
            E = p + 2;
          (r = wr(this, a, e, n, c, u, h, T, y, E)),
            r && ((r.faceIndex = Math.floor(p / 3)), t.push(r));
        }
      }
  }
}
function Du(i, e, t, n, r, s, a, o) {
  let l;
  if (
    (e.side === Ct
      ? (l = n.intersectTriangle(a, s, r, !0, o))
      : (l = n.intersectTriangle(r, s, a, e.side === Pn, o)),
    l === null)
  )
    return null;
  Ar.copy(o), Ar.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Ar);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ar.clone(), object: i };
}
function wr(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Er),
    i.getVertexPosition(l, yr),
    i.getVertexPosition(c, br);
  const u = Du(i, e, t, n, Er, yr, br, Bo);
  if (u) {
    const h = new N();
    Gt.getBarycoord(Bo, Er, yr, br, h),
      r && (u.uv = Gt.getInterpolatedAttribute(r, o, l, c, h, new Ue())),
      s && (u.uv1 = Gt.getInterpolatedAttribute(s, o, l, c, h, new Ue())),
      a &&
        ((u.normal = Gt.getInterpolatedAttribute(a, o, l, c, h, new N())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new N(), materialIndex: 0 };
    Gt.getNormal(Er, yr, br, f.normal), (u.face = f), (u.barycoord = h);
  }
  return u;
}
class rr extends Zt {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      u = [],
      h = [];
    let f = 0,
      m = 0;
    g('z', 'y', 'x', -1, -1, n, t, e, a, s, 0),
      g('z', 'y', 'x', 1, -1, n, t, -e, a, s, 1),
      g('x', 'z', 'y', 1, 1, e, n, t, r, a, 2),
      g('x', 'z', 'y', 1, -1, e, n, -t, r, a, 3),
      g('x', 'y', 'z', 1, -1, e, t, n, r, s, 4),
      g('x', 'y', 'z', -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new ht(c, 3)),
      this.setAttribute('normal', new ht(u, 3)),
      this.setAttribute('uv', new ht(h, 2));
    function g(S, p, d, T, y, E, D, C, A, R, M) {
      const v = E / A,
        w = D / R,
        B = E / 2,
        k = D / 2,
        W = C / 2,
        j = A + 1,
        $ = R + 1;
      let Q = 0,
        G = 0;
      const ae = new N();
      for (let de = 0; de < $; de++) {
        const xe = de * w - k;
        for (let Fe = 0; Fe < j; Fe++) {
          const Je = Fe * v - B;
          (ae[S] = Je * T),
            (ae[p] = xe * y),
            (ae[d] = W),
            c.push(ae.x, ae.y, ae.z),
            (ae[S] = 0),
            (ae[p] = 0),
            (ae[d] = C > 0 ? 1 : -1),
            u.push(ae.x, ae.y, ae.z),
            h.push(Fe / A),
            h.push(1 - de / R),
            (Q += 1);
        }
      }
      for (let de = 0; de < R; de++)
        for (let xe = 0; xe < A; xe++) {
          const Fe = f + xe + j * de,
            Je = f + xe + j * (de + 1),
            q = f + (xe + 1) + j * (de + 1),
            ne = f + (xe + 1) + j * de;
          l.push(Fe, Je, ne), l.push(Je, q, ne), (G += 6);
        }
      o.addGroup(m, G, M), (m += G), (f += Q);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new rr(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Pi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().',
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function yt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Pi(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Lu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function Jl(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : qe.workingColorSpace;
}
const Qi = { clone: Pi, merge: yt };
var Uu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Iu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class gt extends ir {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Uu),
      (this.fragmentShader = Iu),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Pi(e.uniforms)),
      (this.uniformsGroups = Lu(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: 't', value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[r] = { type: 'c', value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[r] = { type: 'v2', value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[r] = { type: 'v3', value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[r] = { type: 'v4', value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[r] = { type: 'm3', value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[r] = { type: 'm4', value: a.toArray() })
        : (t.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ql extends Mt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new lt()),
      (this.projectionMatrix = new lt()),
      (this.projectionMatrixInverse = new lt()),
      (this.coordinateSystem = mn);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = new N(),
  zo = new Ue(),
  Ho = new Ue();
class Ot extends Ql {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Sa * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(is * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Sa * 2 * Math.atan(Math.tan(is * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Cn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z),
      Cn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, zo, Ho), t.subVectors(Ho, zo);
  }
  setViewOffset(e, t, n, r, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(is * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * r) / l),
        (t -= (a.offsetY * n) / c),
        (r *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const di = -90,
  fi = 1;
class Nu extends Mt {
  constructor(e, t, n) {
    super(),
      (this.type = 'CubeCamera'),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new Ot(di, fi, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new Ot(di, fi, e, t);
    (s.layers = this.layers), this.add(s);
    const a = new Ot(di, fi, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Ot(di, fi, e, t);
    (o.layers = this.layers), this.add(o);
    const l = new Ot(di, fi, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Ot(di, fi, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === mn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Xr)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' +
          e,
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children,
      h = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      e.render(t, l),
      e.setRenderTarget(n, 4, r),
      e.render(t, c),
      (n.texture.generateMipmaps = S),
      e.setRenderTarget(n, 5, r),
      e.render(t, u),
      e.setRenderTarget(h, f, m),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ec extends Tt {
  constructor(e, t, n, r, s, a, o, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Ti),
      super(e, t, n, r, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Fu extends $t {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new ec(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : tn);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new rr(5, 5, 5),
      s = new gt({
        name: 'CubemapFromEquirect',
        uniforms: Pi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ct,
        blending: _n,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Xt(r, s),
      o = t.minFilter;
    return (
      t.minFilter === Zn && (t.minFilter = tn),
      new Nu(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class Ou extends Mt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Mn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Mn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this }),
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const bs = new N(),
  Bu = new N(),
  zu = new Le();
class Xn {
  constructor(e = new N(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = bs.subVectors(n, t).cross(Bu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(bs),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || zu.getNormalMatrix(e),
      r = this.coplanarPoint(bs).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Hn = new Zr(),
  Cr = new N();
class tc {
  constructor(
    e = new Xn(),
    t = new Xn(),
    n = new Xn(),
    r = new Xn(),
    s = new Xn(),
    a = new Xn(),
  ) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = mn) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      a = r[1],
      o = r[2],
      l = r[3],
      c = r[4],
      u = r[5],
      h = r[6],
      f = r[7],
      m = r[8],
      g = r[9],
      S = r[10],
      p = r[11],
      d = r[12],
      T = r[13],
      y = r[14],
      E = r[15];
    if (
      (n[0].setComponents(l - s, f - c, p - m, E - d).normalize(),
      n[1].setComponents(l + s, f + c, p + m, E + d).normalize(),
      n[2].setComponents(l + a, f + u, p + g, E + T).normalize(),
      n[3].setComponents(l - a, f - u, p - g, E - T).normalize(),
      n[4].setComponents(l - o, f - h, p - S, E - y).normalize(),
      t === mn)
    )
      n[5].setComponents(l + o, f + h, p + S, E + y).normalize();
    else if (t === Xr) n[5].setComponents(o, h, S, y).normalize();
    else
      throw new Error(
        'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Hn);
  }
  intersectsSprite(e) {
    return (
      Hn.center.set(0, 0, 0),
      (Hn.radius = 0.7071067811865476),
      Hn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Hn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((Cr.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (Cr.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (Cr.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(Cr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Hu extends ir {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = 'PointsMaterial'),
      (this.color = new ze(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const ko = new lt(),
  Ma = new Yl(),
  Rr = new Zr(),
  Pr = new N();
class ku extends Mt {
  constructor(e = new Zt(), t = new Hu()) {
    super(),
      (this.isPoints = !0),
      (this.type = 'Points'),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Rr.copy(n.boundingSphere),
      Rr.applyMatrix4(r),
      (Rr.radius += s),
      e.ray.intersectsSphere(Rr) === !1)
    )
      return;
    ko.copy(r).invert(), Ma.copy(e.ray).applyMatrix4(ko);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      h = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start),
        m = Math.min(c.count, a.start + a.count);
      for (let g = f, S = m; g < S; g++) {
        const p = c.getX(g);
        Pr.fromBufferAttribute(h, p), Vo(Pr, p, l, r, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start),
        m = Math.min(h.count, a.start + a.count);
      for (let g = f, S = m; g < S; g++)
        Pr.fromBufferAttribute(h, g), Vo(Pr, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Vo(i, e, t, n, r, s, a) {
  const o = Ma.distanceSqToPoint(i);
  if (o < t) {
    const l = new N();
    Ma.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class Dr extends Mt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
class nc extends Tt {
  constructor(e, t, n, r, s, a, o, l, c, u = Mi) {
    if (u !== Mi && u !== Ci)
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat',
      );
    n === void 0 && u === Mi && (n = Jn),
      n === void 0 && u === Ci && (n = wi),
      super(null, r, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Yt),
      (this.minFilter = l !== void 0 ? l : Yt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Wa extends Zt {
  constructor(e = [], t = [], n = 1, r = 0) {
    super(),
      (this.type = 'PolyhedronGeometry'),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: r });
    const s = [],
      a = [];
    o(r),
      c(n),
      u(),
      this.setAttribute('position', new ht(s, 3)),
      this.setAttribute('normal', new ht(s.slice(), 3)),
      this.setAttribute('uv', new ht(a, 2)),
      r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(T) {
      const y = new N(),
        E = new N(),
        D = new N();
      for (let C = 0; C < t.length; C += 3)
        m(t[C + 0], y), m(t[C + 1], E), m(t[C + 2], D), l(y, E, D, T);
    }
    function l(T, y, E, D) {
      const C = D + 1,
        A = [];
      for (let R = 0; R <= C; R++) {
        A[R] = [];
        const M = T.clone().lerp(E, R / C),
          v = y.clone().lerp(E, R / C),
          w = C - R;
        for (let B = 0; B <= w; B++)
          B === 0 && R === C
            ? (A[R][B] = M)
            : (A[R][B] = M.clone().lerp(v, B / w));
      }
      for (let R = 0; R < C; R++)
        for (let M = 0; M < 2 * (C - R) - 1; M++) {
          const v = Math.floor(M / 2);
          M % 2 === 0
            ? (f(A[R][v + 1]), f(A[R + 1][v]), f(A[R][v]))
            : (f(A[R][v + 1]), f(A[R + 1][v + 1]), f(A[R + 1][v]));
        }
    }
    function c(T) {
      const y = new N();
      for (let E = 0; E < s.length; E += 3)
        (y.x = s[E + 0]),
          (y.y = s[E + 1]),
          (y.z = s[E + 2]),
          y.normalize().multiplyScalar(T),
          (s[E + 0] = y.x),
          (s[E + 1] = y.y),
          (s[E + 2] = y.z);
    }
    function u() {
      const T = new N();
      for (let y = 0; y < s.length; y += 3) {
        (T.x = s[y + 0]), (T.y = s[y + 1]), (T.z = s[y + 2]);
        const E = p(T) / 2 / Math.PI + 0.5,
          D = d(T) / Math.PI + 0.5;
        a.push(E, 1 - D);
      }
      g(), h();
    }
    function h() {
      for (let T = 0; T < a.length; T += 6) {
        const y = a[T + 0],
          E = a[T + 2],
          D = a[T + 4],
          C = Math.max(y, E, D),
          A = Math.min(y, E, D);
        C > 0.9 &&
          A < 0.1 &&
          (y < 0.2 && (a[T + 0] += 1),
          E < 0.2 && (a[T + 2] += 1),
          D < 0.2 && (a[T + 4] += 1));
      }
    }
    function f(T) {
      s.push(T.x, T.y, T.z);
    }
    function m(T, y) {
      const E = T * 3;
      (y.x = e[E + 0]), (y.y = e[E + 1]), (y.z = e[E + 2]);
    }
    function g() {
      const T = new N(),
        y = new N(),
        E = new N(),
        D = new N(),
        C = new Ue(),
        A = new Ue(),
        R = new Ue();
      for (let M = 0, v = 0; M < s.length; M += 9, v += 6) {
        T.set(s[M + 0], s[M + 1], s[M + 2]),
          y.set(s[M + 3], s[M + 4], s[M + 5]),
          E.set(s[M + 6], s[M + 7], s[M + 8]),
          C.set(a[v + 0], a[v + 1]),
          A.set(a[v + 2], a[v + 3]),
          R.set(a[v + 4], a[v + 5]),
          D.copy(T).add(y).add(E).divideScalar(3);
        const w = p(D);
        S(C, v + 0, T, w), S(A, v + 2, y, w), S(R, v + 4, E, w);
      }
    }
    function S(T, y, E, D) {
      D < 0 && T.x === 1 && (a[y] = T.x - 1),
        E.x === 0 && E.z === 0 && (a[y] = D / 2 / Math.PI + 0.5);
    }
    function p(T) {
      return Math.atan2(T.z, -T.x);
    }
    function d(T) {
      return Math.atan2(-T.y, Math.sqrt(T.x * T.x + T.z * T.z));
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Wa(e.vertices, e.indices, e.radius, e.details);
  }
}
class Xa extends Wa {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      r = [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      s = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    super(r, s, e, t),
      (this.type = 'IcosahedronGeometry'),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Xa(e.radius, e.detail);
  }
}
class jr extends Zt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(r),
      c = o + 1,
      u = l + 1,
      h = e / o,
      f = t / l,
      m = [],
      g = [],
      S = [],
      p = [];
    for (let d = 0; d < u; d++) {
      const T = d * f - a;
      for (let y = 0; y < c; y++) {
        const E = y * h - s;
        g.push(E, -T, 0), S.push(0, 0, 1), p.push(y / o), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++)
      for (let T = 0; T < o; T++) {
        const y = T + c * d,
          E = T + c * (d + 1),
          D = T + 1 + c * (d + 1),
          C = T + 1 + c * d;
        m.push(y, E, C), m.push(E, D, C);
      }
    this.setIndex(m),
      this.setAttribute('position', new ht(g, 3)),
      this.setAttribute('normal', new ht(S, 3)),
      this.setAttribute('uv', new ht(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new jr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Vu extends gt {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = 'RawShaderMaterial');
  }
}
class Gu extends ir {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = eu),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Wu extends ir {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const qr = {
  enabled: !1,
  files: {},
  add: function (i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class Xu {
  constructor(e, t, n) {
    const r = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), (s = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          r.onProgress !== void 0 && r.onProgress(u, a, o),
          a === o && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, h) {
        return c.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = c.indexOf(u);
        return h !== -1 && c.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, f = c.length; h < f; h += 2) {
          const m = c[h],
            g = c[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const qu = new Xu();
class sr {
  constructor(e) {
    (this.manager = e !== void 0 ? e : qu),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
sr.DEFAULT_MATERIAL_NAME = '__DEFAULT';
const un = {};
class Yu extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class $u extends sr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ''),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = qr.get(e);
    if (s !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(s), this.manager.itemEnd(e);
        }, 0),
        s
      );
    if (un[e] !== void 0) {
      un[e].push({ onLoad: t, onProgress: n, onError: r });
      return;
    }
    (un[e] = []), un[e].push({ onLoad: t, onProgress: n, onError: r });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? 'include' : 'same-origin',
      }),
      o = this.mimeType,
      l = this.responseType;
    fetch(a)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn('THREE.FileLoader: HTTP Status 0 received.'),
            typeof ReadableStream > 'u' ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const u = un[e],
            h = c.body.getReader(),
            f = c.headers.get('X-File-Size') || c.headers.get('Content-Length'),
            m = f ? parseInt(f) : 0,
            g = m !== 0;
          let S = 0;
          const p = new ReadableStream({
            start(d) {
              T();
              function T() {
                h.read().then(
                  ({ done: y, value: E }) => {
                    if (y) d.close();
                    else {
                      S += E.byteLength;
                      const D = new ProgressEvent('progress', {
                        lengthComputable: g,
                        loaded: S,
                        total: m,
                      });
                      for (let C = 0, A = u.length; C < A; C++) {
                        const R = u[C];
                        R.onProgress && R.onProgress(D);
                      }
                      d.enqueue(E), T();
                    }
                  },
                  (y) => {
                    d.error(y);
                  },
                );
              }
            },
          });
          return new Response(p);
        } else
          throw new Yu(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
            c,
          );
      })
      .then((c) => {
        switch (l) {
          case 'arraybuffer':
            return c.arrayBuffer();
          case 'blob':
            return c.blob();
          case 'document':
            return c.text().then((u) => new DOMParser().parseFromString(u, o));
          case 'json':
            return c.json();
          default:
            if (o === void 0) return c.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(o),
                f = h && h[1] ? h[1].toLowerCase() : void 0,
                m = new TextDecoder(f);
              return c.arrayBuffer().then((g) => m.decode(g));
            }
        }
      })
      .then((c) => {
        qr.add(e, c);
        const u = un[e];
        delete un[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const m = u[h];
          m.onLoad && m.onLoad(c);
        }
      })
      .catch((c) => {
        const u = un[e];
        if (u === void 0) throw (this.manager.itemError(e), c);
        delete un[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const m = u[h];
          m.onError && m.onError(c);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class Ku extends sr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = qr.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = Ji('img');
    function l() {
      u(), qr.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), r && r(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener('load', l, !1),
        o.removeEventListener('error', c, !1);
    }
    return (
      o.addEventListener('load', l, !1),
      o.addEventListener('error', c, !1),
      e.slice(0, 5) !== 'data:' &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Zu extends sr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new Tt(),
      a = new Ku(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        r,
      ),
      s
    );
  }
}
class ic extends Ql {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
let Lr;
class rc {
  static getContext() {
    return (
      Lr === void 0 &&
        (Lr = new (window.AudioContext || window.webkitAudioContext)()),
      Lr
    );
  }
  static setContext(e) {
    Lr = e;
  }
}
class ju extends sr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = this,
      a = new $u(this.manager);
    a.setResponseType('arraybuffer'),
      a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (l) {
          try {
            const c = l.slice(0);
            rc.getContext()
              .decodeAudioData(c, function (h) {
                t(h);
              })
              .catch(o);
          } catch (c) {
            o(c);
          }
        },
        n,
        r,
      );
    function o(l) {
      r ? r(l) : console.error(l), s.manager.itemError(e);
    }
  }
}
class Ju extends Ot {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class qa {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Go()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Go();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Go() {
  return performance.now();
}
const kn = new N(),
  Wo = new Ui(),
  Qu = new N(),
  Vn = new N();
class eh extends Mt {
  constructor() {
    super(),
      (this.type = 'AudioListener'),
      (this.context = rc.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new qa());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      this.filter !== null &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      this.filter !== null
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener,
      n = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(kn, Wo, Qu),
      Vn.set(0, 0, -1).applyQuaternion(Wo),
      t.positionX)
    ) {
      const r = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(kn.x, r),
        t.positionY.linearRampToValueAtTime(kn.y, r),
        t.positionZ.linearRampToValueAtTime(kn.z, r),
        t.forwardX.linearRampToValueAtTime(Vn.x, r),
        t.forwardY.linearRampToValueAtTime(Vn.y, r),
        t.forwardZ.linearRampToValueAtTime(Vn.z, r),
        t.upX.linearRampToValueAtTime(n.x, r),
        t.upY.linearRampToValueAtTime(n.y, r),
        t.upZ.linearRampToValueAtTime(n.z, r);
    } else
      t.setPosition(kn.x, kn.y, kn.z),
        t.setOrientation(Vn.x, Vn.y, Vn.z, n.x, n.y, n.z);
  }
}
class th extends Mt {
  constructor(e) {
    super(),
      (this.type = 'Audio'),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = 'empty'),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = 'audioNode'),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = 'mediaNode'),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = 'mediaStreamNode'),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = 'buffer'),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn('THREE.Audio: Audio is already playing.');
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn('THREE.Audio: this Audio has no playback control.');
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn('THREE.Audio: this Audio has no playback control.');
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === !1) {
      console.warn('THREE.Audio: this Audio has no playback control.');
      return;
    }
    return (
      (this._progress = 0),
      this.source !== null &&
        (this.source.stop(this.context.currentTime + e),
        (this.source.onended = null)),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return (this._connected = !1), this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    return (
      (this.detune = e),
      this.isPlaying === !0 &&
        this.source.detune !== void 0 &&
        this.source.detune.setTargetAtTime(
          this.detune,
          this.context.currentTime,
          0.01,
        ),
      this
    );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn('THREE.Audio: this Audio has no playback control.');
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01,
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    (this.isPlaying = !1), (this._progress = 0);
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn('THREE.Audio: this Audio has no playback control.'), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn('THREE.Audio: this Audio has no playback control.');
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.sourceType !== 'buffer'
        ? (console.warn('THREE.Audio: Audio source type cannot be copied.'),
          this)
        : ((this.autoplay = e.autoplay),
          (this.buffer = e.buffer),
          (this.detune = e.detune),
          (this.loop = e.loop),
          (this.loopStart = e.loopStart),
          (this.loopEnd = e.loopEnd),
          (this.offset = e.offset),
          (this.duration = e.duration),
          (this.playbackRate = e.playbackRate),
          (this.hasPlaybackControl = e.hasPlaybackControl),
          (this.sourceType = e.sourceType),
          (this.filters = e.filters.slice()),
          this)
    );
  }
  clone(e) {
    return new this.constructor(this.listener).copy(this, e);
  }
}
class nh {
  constructor(e, t = 2048) {
    (this.analyser = e.context.createAnalyser()),
      (this.analyser.fftSize = t),
      (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
      e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let n = 0; n < t.length; n++) e += t[n];
    return e / t.length;
  }
}
function Xo(i, e, t, n) {
  const r = ih(n);
  switch (t) {
    case Fl:
      return i * e;
    case Bl:
      return i * e;
    case zl:
      return i * e * 2;
    case Hl:
      return ((i * e) / r.components) * r.byteLength;
    case Ha:
      return ((i * e) / r.components) * r.byteLength;
    case kl:
      return ((i * e * 2) / r.components) * r.byteLength;
    case ka:
      return ((i * e * 2) / r.components) * r.byteLength;
    case Ol:
      return ((i * e * 3) / r.components) * r.byteLength;
    case Wt:
      return ((i * e * 4) / r.components) * r.byteLength;
    case Va:
      return ((i * e * 4) / r.components) * r.byteLength;
    case Br:
    case zr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Hr:
    case kr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ks:
    case js:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case $s:
    case Zs:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case Js:
    case Qs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ea:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ta:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case na:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case ia:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ra:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case sa:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case aa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case oa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case la:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ca:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ua:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ha:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case da:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case fa:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case pa:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Vr:
    case ma:
    case _a:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Vl:
    case ga:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case va:
    case xa:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function ih(i) {
  switch (i) {
    case Sn:
    case Ul:
      return { byteLength: 1, components: 1 };
    case ji:
    case Il:
    case vn:
      return { byteLength: 2, components: 1 };
    case Ba:
    case za:
      return { byteLength: 2, components: 4 };
    case Jn:
    case Oa:
    case pn:
      return { byteLength: 4, components: 1 };
    case Nl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', { detail: { revision: Pa } }),
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Pa));
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function sc() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, a) {
    t(s, a), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function rh(i) {
  const e = new WeakMap();
  function t(o, l) {
    const c = o.array,
      u = o.usage,
      h = c.byteLength,
      f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (m = i.HALF_FLOAT) : (m = i.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else
      throw new Error(
        'THREE.WebGLAttributes: Unsupported buffer data format: ' + c,
      );
    return {
      buffer: f,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h,
    };
  }
  function n(o, l, c) {
    const u = l.array,
      h = l.updateRanges;
    if ((i.bindBuffer(c, o), h.length === 0)) i.bufferSubData(c, 0, u);
    else {
      h.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < h.length; m++) {
        const g = h[f],
          S = h[m];
        S.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, S.start + S.count - g.start))
          : (++f, (h[f] = S));
      }
      h.length = f + 1;
      for (let m = 0, g = h.length; m < g; m++) {
        const S = h[m];
        i.bufferSubData(c, S.start * u.BYTES_PER_ELEMENT, u, S.start, S.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      n(c.buffer, o, l), (c.version = o.version);
    }
  }
  return { get: r, remove: s, update: a };
}
var sh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  ah = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  oh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  lh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ch = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  uh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  hh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  dh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  fh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  ph = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  mh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  _h = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  gh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  vh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  xh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Sh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Mh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Eh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  yh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  bh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Th = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Ah = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  wh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Ch = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Rh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Ph = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Dh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Lh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Uh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Ih = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Nh = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  Fh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Oh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Bh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  zh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Hh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  kh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Vh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Gh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Wh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Xh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  qh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Yh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  $h = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Kh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Zh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  jh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Jh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Qh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  ed = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  td = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  nd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  id = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  rd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  sd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  ad = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  od = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  ld = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  cd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  ud = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  hd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  dd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  fd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  pd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  md = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  _d = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  gd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  vd = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  xd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Sd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Md = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Ed = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  yd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  bd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Td = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ad = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  wd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Cd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Rd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Pd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Dd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Ld = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Ud = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Id = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Nd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Fd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Od = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Bd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  zd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Hd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  kd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Vd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Gd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Wd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Xd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  qd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Yd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  $d = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Kd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Zd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  jd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Jd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Qd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  tf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  nf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  rf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const sf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  af = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  of = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  lf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  uf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  hf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  df = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  ff = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  pf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  _f = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  gf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  vf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  xf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Sf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Mf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ef = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  yf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  bf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Tf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Af = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  wf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Cf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Rf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Pf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Df = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Lf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Uf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  If = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Nf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ff = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Of = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Bf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ne = {
    alphahash_fragment: sh,
    alphahash_pars_fragment: ah,
    alphamap_fragment: oh,
    alphamap_pars_fragment: lh,
    alphatest_fragment: ch,
    alphatest_pars_fragment: uh,
    aomap_fragment: hh,
    aomap_pars_fragment: dh,
    batching_pars_vertex: fh,
    batching_vertex: ph,
    begin_vertex: mh,
    beginnormal_vertex: _h,
    bsdfs: gh,
    iridescence_fragment: vh,
    bumpmap_pars_fragment: xh,
    clipping_planes_fragment: Sh,
    clipping_planes_pars_fragment: Mh,
    clipping_planes_pars_vertex: Eh,
    clipping_planes_vertex: yh,
    color_fragment: bh,
    color_pars_fragment: Th,
    color_pars_vertex: Ah,
    color_vertex: wh,
    common: Ch,
    cube_uv_reflection_fragment: Rh,
    defaultnormal_vertex: Ph,
    displacementmap_pars_vertex: Dh,
    displacementmap_vertex: Lh,
    emissivemap_fragment: Uh,
    emissivemap_pars_fragment: Ih,
    colorspace_fragment: Nh,
    colorspace_pars_fragment: Fh,
    envmap_fragment: Oh,
    envmap_common_pars_fragment: Bh,
    envmap_pars_fragment: zh,
    envmap_pars_vertex: Hh,
    envmap_physical_pars_fragment: jh,
    envmap_vertex: kh,
    fog_vertex: Vh,
    fog_pars_vertex: Gh,
    fog_fragment: Wh,
    fog_pars_fragment: Xh,
    gradientmap_pars_fragment: qh,
    lightmap_pars_fragment: Yh,
    lights_lambert_fragment: $h,
    lights_lambert_pars_fragment: Kh,
    lights_pars_begin: Zh,
    lights_toon_fragment: Jh,
    lights_toon_pars_fragment: Qh,
    lights_phong_fragment: ed,
    lights_phong_pars_fragment: td,
    lights_physical_fragment: nd,
    lights_physical_pars_fragment: id,
    lights_fragment_begin: rd,
    lights_fragment_maps: sd,
    lights_fragment_end: ad,
    logdepthbuf_fragment: od,
    logdepthbuf_pars_fragment: ld,
    logdepthbuf_pars_vertex: cd,
    logdepthbuf_vertex: ud,
    map_fragment: hd,
    map_pars_fragment: dd,
    map_particle_fragment: fd,
    map_particle_pars_fragment: pd,
    metalnessmap_fragment: md,
    metalnessmap_pars_fragment: _d,
    morphinstance_vertex: gd,
    morphcolor_vertex: vd,
    morphnormal_vertex: xd,
    morphtarget_pars_vertex: Sd,
    morphtarget_vertex: Md,
    normal_fragment_begin: Ed,
    normal_fragment_maps: yd,
    normal_pars_fragment: bd,
    normal_pars_vertex: Td,
    normal_vertex: Ad,
    normalmap_pars_fragment: wd,
    clearcoat_normal_fragment_begin: Cd,
    clearcoat_normal_fragment_maps: Rd,
    clearcoat_pars_fragment: Pd,
    iridescence_pars_fragment: Dd,
    opaque_fragment: Ld,
    packing: Ud,
    premultiplied_alpha_fragment: Id,
    project_vertex: Nd,
    dithering_fragment: Fd,
    dithering_pars_fragment: Od,
    roughnessmap_fragment: Bd,
    roughnessmap_pars_fragment: zd,
    shadowmap_pars_fragment: Hd,
    shadowmap_pars_vertex: kd,
    shadowmap_vertex: Vd,
    shadowmask_pars_fragment: Gd,
    skinbase_vertex: Wd,
    skinning_pars_vertex: Xd,
    skinning_vertex: qd,
    skinnormal_vertex: Yd,
    specularmap_fragment: $d,
    specularmap_pars_fragment: Kd,
    tonemapping_fragment: Zd,
    tonemapping_pars_fragment: jd,
    transmission_fragment: Jd,
    transmission_pars_fragment: Qd,
    uv_pars_fragment: ef,
    uv_pars_vertex: tf,
    uv_vertex: nf,
    worldpos_vertex: rf,
    background_vert: sf,
    background_frag: af,
    backgroundCube_vert: of,
    backgroundCube_frag: lf,
    cube_vert: cf,
    cube_frag: uf,
    depth_vert: hf,
    depth_frag: df,
    distanceRGBA_vert: ff,
    distanceRGBA_frag: pf,
    equirect_vert: mf,
    equirect_frag: _f,
    linedashed_vert: gf,
    linedashed_frag: vf,
    meshbasic_vert: xf,
    meshbasic_frag: Sf,
    meshlambert_vert: Mf,
    meshlambert_frag: Ef,
    meshmatcap_vert: yf,
    meshmatcap_frag: bf,
    meshnormal_vert: Tf,
    meshnormal_frag: Af,
    meshphong_vert: wf,
    meshphong_frag: Cf,
    meshphysical_vert: Rf,
    meshphysical_frag: Pf,
    meshtoon_vert: Df,
    meshtoon_frag: Lf,
    points_vert: Uf,
    points_frag: If,
    shadow_vert: Nf,
    shadow_frag: Ff,
    sprite_vert: Of,
    sprite_frag: Bf,
  },
  ie = {
    common: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Le() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Le() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Le() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Le() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Le() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Le() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Le() },
      normalScale: { value: new Ue(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Le() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Le() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Le() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Le() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new ze(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Le() },
    },
    sprite: {
      diffuse: { value: new ze(16777215) },
      opacity: { value: 1 },
      center: { value: new Ue(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Le() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Le() },
      alphaTest: { value: 0 },
    },
  },
  en = {
    basic: {
      uniforms: yt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.fog,
      ]),
      vertexShader: Ne.meshbasic_vert,
      fragmentShader: Ne.meshbasic_frag,
    },
    lambert: {
      uniforms: yt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Ne.meshlambert_vert,
      fragmentShader: Ne.meshlambert_frag,
    },
    phong: {
      uniforms: yt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new ze(0) },
          specular: { value: new ze(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ne.meshphong_vert,
      fragmentShader: Ne.meshphong_frag,
    },
    standard: {
      uniforms: yt([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new ze(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ne.meshphysical_vert,
      fragmentShader: Ne.meshphysical_frag,
    },
    toon: {
      uniforms: yt([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new ze(0) } },
      ]),
      vertexShader: Ne.meshtoon_vert,
      fragmentShader: Ne.meshtoon_frag,
    },
    matcap: {
      uniforms: yt([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ne.meshmatcap_vert,
      fragmentShader: Ne.meshmatcap_frag,
    },
    points: {
      uniforms: yt([ie.points, ie.fog]),
      vertexShader: Ne.points_vert,
      fragmentShader: Ne.points_frag,
    },
    dashed: {
      uniforms: yt([
        ie.common,
        ie.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ne.linedashed_vert,
      fragmentShader: Ne.linedashed_frag,
    },
    depth: {
      uniforms: yt([ie.common, ie.displacementmap]),
      vertexShader: Ne.depth_vert,
      fragmentShader: Ne.depth_frag,
    },
    normal: {
      uniforms: yt([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ne.meshnormal_vert,
      fragmentShader: Ne.meshnormal_frag,
    },
    sprite: {
      uniforms: yt([ie.sprite, ie.fog]),
      vertexShader: Ne.sprite_vert,
      fragmentShader: Ne.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Le() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ne.background_vert,
      fragmentShader: Ne.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Le() },
      },
      vertexShader: Ne.backgroundCube_vert,
      fragmentShader: Ne.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ne.cube_vert,
      fragmentShader: Ne.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ne.equirect_vert,
      fragmentShader: Ne.equirect_frag,
    },
    distanceRGBA: {
      uniforms: yt([
        ie.common,
        ie.displacementmap,
        {
          referencePosition: { value: new N() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ne.distanceRGBA_vert,
      fragmentShader: Ne.distanceRGBA_frag,
    },
    shadow: {
      uniforms: yt([
        ie.lights,
        ie.fog,
        { color: { value: new ze(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ne.shadow_vert,
      fragmentShader: Ne.shadow_frag,
    },
  };
en.physical = {
  uniforms: yt([
    en.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Le() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Le() },
      clearcoatNormalScale: { value: new Ue(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Le() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Le() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Le() },
      sheen: { value: 0 },
      sheenColor: { value: new ze(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Le() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Le() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Le() },
      transmissionSamplerSize: { value: new Ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Le() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new ze(0) },
      specularColor: { value: new ze(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Le() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Le() },
      anisotropyVector: { value: new Ue() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Le() },
    },
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag,
};
const Ur = { r: 0, b: 0, g: 0 },
  Gn = new Mn(),
  zf = new lt();
function Hf(i, e, t, n, r, s, a) {
  const o = new ze(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    f = 0,
    m = null;
  function g(y) {
    let E = y.isScene === !0 ? y.background : null;
    return (
      E && E.isTexture && (E = (y.backgroundBlurriness > 0 ? t : e).get(E)), E
    );
  }
  function S(y) {
    let E = !1;
    const D = g(y);
    D === null ? d(o, l) : D && D.isColor && (d(D, 1), (E = !0));
    const C = i.xr.getEnvironmentBlendMode();
    C === 'additive'
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : C === 'alpha-blend' && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || E) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(y, E) {
    const D = g(E);
    D && (D.isCubeTexture || D.mapping === Kr)
      ? (u === void 0 &&
          ((u = new Xt(
            new rr(1, 1, 1),
            new gt({
              name: 'BackgroundCubeMaterial',
              uniforms: Pi(en.backgroundCube.uniforms),
              vertexShader: en.backgroundCube.vertexShader,
              fragmentShader: en.backgroundCube.fragmentShader,
              side: Ct,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          u.geometry.deleteAttribute('normal'),
          u.geometry.deleteAttribute('uv'),
          (u.onBeforeRender = function (C, A, R) {
            this.matrixWorld.copyPosition(R.matrixWorld);
          }),
          Object.defineProperty(u.material, 'envMap', {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(u)),
        Gn.copy(E.backgroundRotation),
        (Gn.x *= -1),
        (Gn.y *= -1),
        (Gn.z *= -1),
        D.isCubeTexture &&
          D.isRenderTargetTexture === !1 &&
          ((Gn.y *= -1), (Gn.z *= -1)),
        (u.material.uniforms.envMap.value = D),
        (u.material.uniforms.flipEnvMap.value =
          D.isCubeTexture && D.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          E.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          zf.makeRotationFromEuler(Gn),
        ),
        (u.material.toneMapped = qe.getTransfer(D.colorSpace) !== je),
        (h !== D || f !== D.version || m !== i.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = D),
          (f = D.version),
          (m = i.toneMapping)),
        u.layers.enableAll(),
        y.unshift(u, u.geometry, u.material, 0, 0, null))
      : D &&
        D.isTexture &&
        (c === void 0 &&
          ((c = new Xt(
            new jr(2, 2),
            new gt({
              name: 'BackgroundMaterial',
              uniforms: Pi(en.background.uniforms),
              vertexShader: en.background.vertexShader,
              fragmentShader: en.background.fragmentShader,
              side: Pn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          c.geometry.deleteAttribute('normal'),
          Object.defineProperty(c.material, 'map', {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = D),
        (c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity),
        (c.material.toneMapped = qe.getTransfer(D.colorSpace) !== je),
        D.matrixAutoUpdate === !0 && D.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(D.matrix),
        (h !== D || f !== D.version || m !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = D),
          (f = D.version),
          (m = i.toneMapping)),
        c.layers.enableAll(),
        y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(y, E) {
    y.getRGB(Ur, Jl(i)), n.buffers.color.setClear(Ur.r, Ur.g, Ur.b, E, a);
  }
  function T() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose()),
      c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (y, E = 1) {
      o.set(y), (l = E), d(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (y) {
      (l = y), d(o, l);
    },
    render: S,
    addToRenderList: p,
    dispose: T,
  };
}
function kf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = f(null);
  let s = r,
    a = !1;
  function o(v, w, B, k, W) {
    let j = !1;
    const $ = h(k, B, w);
    s !== $ && ((s = $), c(s.object)),
      (j = m(v, k, B, W)),
      j && g(v, k, B, W),
      W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER),
      (j || a) &&
        ((a = !1),
        E(v, w, B, k),
        W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(v) {
    return i.bindVertexArray(v);
  }
  function u(v) {
    return i.deleteVertexArray(v);
  }
  function h(v, w, B) {
    const k = B.wireframe === !0;
    let W = n[v.id];
    W === void 0 && ((W = {}), (n[v.id] = W));
    let j = W[w.id];
    j === void 0 && ((j = {}), (W[w.id] = j));
    let $ = j[k];
    return $ === void 0 && (($ = f(l())), (j[k] = $)), $;
  }
  function f(v) {
    const w = [],
      B = [],
      k = [];
    for (let W = 0; W < t; W++) (w[W] = 0), (B[W] = 0), (k[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: w,
      enabledAttributes: B,
      attributeDivisors: k,
      object: v,
      attributes: {},
      index: null,
    };
  }
  function m(v, w, B, k) {
    const W = s.attributes,
      j = w.attributes;
    let $ = 0;
    const Q = B.getAttributes();
    for (const G in Q)
      if (Q[G].location >= 0) {
        const de = W[G];
        let xe = j[G];
        if (
          (xe === void 0 &&
            (G === 'instanceMatrix' &&
              v.instanceMatrix &&
              (xe = v.instanceMatrix),
            G === 'instanceColor' && v.instanceColor && (xe = v.instanceColor)),
          de === void 0 || de.attribute !== xe || (xe && de.data !== xe.data))
        )
          return !0;
        $++;
      }
    return s.attributesNum !== $ || s.index !== k;
  }
  function g(v, w, B, k) {
    const W = {},
      j = w.attributes;
    let $ = 0;
    const Q = B.getAttributes();
    for (const G in Q)
      if (Q[G].location >= 0) {
        let de = j[G];
        de === void 0 &&
          (G === 'instanceMatrix' &&
            v.instanceMatrix &&
            (de = v.instanceMatrix),
          G === 'instanceColor' && v.instanceColor && (de = v.instanceColor));
        const xe = {};
        (xe.attribute = de),
          de && de.data && (xe.data = de.data),
          (W[G] = xe),
          $++;
      }
    (s.attributes = W), (s.attributesNum = $), (s.index = k);
  }
  function S() {
    const v = s.newAttributes;
    for (let w = 0, B = v.length; w < B; w++) v[w] = 0;
  }
  function p(v) {
    d(v, 0);
  }
  function d(v, w) {
    const B = s.newAttributes,
      k = s.enabledAttributes,
      W = s.attributeDivisors;
    (B[v] = 1),
      k[v] === 0 && (i.enableVertexAttribArray(v), (k[v] = 1)),
      W[v] !== w && (i.vertexAttribDivisor(v, w), (W[v] = w));
  }
  function T() {
    const v = s.newAttributes,
      w = s.enabledAttributes;
    for (let B = 0, k = w.length; B < k; B++)
      w[B] !== v[B] && (i.disableVertexAttribArray(B), (w[B] = 0));
  }
  function y(v, w, B, k, W, j, $) {
    $ === !0
      ? i.vertexAttribIPointer(v, w, B, W, j)
      : i.vertexAttribPointer(v, w, B, k, W, j);
  }
  function E(v, w, B, k) {
    S();
    const W = k.attributes,
      j = B.getAttributes(),
      $ = w.defaultAttributeValues;
    for (const Q in j) {
      const G = j[Q];
      if (G.location >= 0) {
        let ae = W[Q];
        if (
          (ae === void 0 &&
            (Q === 'instanceMatrix' &&
              v.instanceMatrix &&
              (ae = v.instanceMatrix),
            Q === 'instanceColor' && v.instanceColor && (ae = v.instanceColor)),
          ae !== void 0)
        ) {
          const de = ae.normalized,
            xe = ae.itemSize,
            Fe = e.get(ae);
          if (Fe === void 0) continue;
          const Je = Fe.buffer,
            q = Fe.type,
            ne = Fe.bytesPerElement,
            ge = q === i.INT || q === i.UNSIGNED_INT || ae.gpuType === Oa;
          if (ae.isInterleavedBufferAttribute) {
            const oe = ae.data,
              Ae = oe.stride,
              Pe = ae.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let Oe = 0; Oe < G.locationSize; Oe++)
                d(G.location + Oe, oe.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let Oe = 0; Oe < G.locationSize; Oe++) p(G.location + Oe);
            i.bindBuffer(i.ARRAY_BUFFER, Je);
            for (let Oe = 0; Oe < G.locationSize; Oe++)
              y(
                G.location + Oe,
                xe / G.locationSize,
                q,
                de,
                Ae * ne,
                (Pe + (xe / G.locationSize) * Oe) * ne,
                ge,
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let oe = 0; oe < G.locationSize; oe++)
                d(G.location + oe, ae.meshPerAttribute);
              v.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let oe = 0; oe < G.locationSize; oe++) p(G.location + oe);
            i.bindBuffer(i.ARRAY_BUFFER, Je);
            for (let oe = 0; oe < G.locationSize; oe++)
              y(
                G.location + oe,
                xe / G.locationSize,
                q,
                de,
                xe * ne,
                (xe / G.locationSize) * oe * ne,
                ge,
              );
          }
        } else if ($ !== void 0) {
          const de = $[Q];
          if (de !== void 0)
            switch (de.length) {
              case 2:
                i.vertexAttrib2fv(G.location, de);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, de);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, de);
                break;
              default:
                i.vertexAttrib1fv(G.location, de);
            }
        }
      }
    }
    T();
  }
  function D() {
    R();
    for (const v in n) {
      const w = n[v];
      for (const B in w) {
        const k = w[B];
        for (const W in k) u(k[W].object), delete k[W];
        delete w[B];
      }
      delete n[v];
    }
  }
  function C(v) {
    if (n[v.id] === void 0) return;
    const w = n[v.id];
    for (const B in w) {
      const k = w[B];
      for (const W in k) u(k[W].object), delete k[W];
      delete w[B];
    }
    delete n[v.id];
  }
  function A(v) {
    for (const w in n) {
      const B = n[w];
      if (B[v.id] === void 0) continue;
      const k = B[v.id];
      for (const W in k) u(k[W].object), delete k[W];
      delete B[v.id];
    }
  }
  function R() {
    M(), (a = !0), s !== r && ((s = r), c(s.object));
  }
  function M() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: o,
    reset: R,
    resetDefaultState: M,
    dispose: D,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: A,
    initAttributes: S,
    enableAttribute: p,
    disableUnusedAttributes: T,
  };
}
function Vf(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (i.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    e.get('WEBGL_multi_draw').multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let m = 0;
    for (let g = 0; g < h; g++) m += u[g];
    t.update(m, n, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const m = e.get('WEBGL_multi_draw');
    if (m === null) for (let g = 0; g < c.length; g++) a(c[g], u[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
      let g = 0;
      for (let S = 0; S < h; S++) g += u[S] * f[S];
      t.update(g, n, 1);
    }
  }
  (this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = l);
}
function Gf(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const A = e.get('EXT_texture_filter_anisotropic');
      r = i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(A) {
    return !(
      A !== Wt &&
      n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(A) {
    const R =
      A === vn &&
      (e.has('EXT_color_buffer_half_float') || e.has('EXT_color_buffer_float'));
    return !(
      A !== Sn &&
      n.convert(A) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      A !== pn &&
      !R
    );
  }
  function l(A) {
    if (A === 'highp') {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return 'highp';
      A = 'mediump';
    }
    return A === 'mediump' &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? 'mediump'
      : 'lowp';
  }
  let c = t.precision !== void 0 ? t.precision : 'highp';
  const u = l(c);
  u !== c &&
    (console.warn(
      'THREE.WebGLRenderer:',
      c,
      'not supported, using',
      u,
      'instead.',
    ),
    (c = u));
  const h = t.logarithmicDepthBuffer === !0,
    f = t.reverseDepthBuffer === !0 && e.has('EXT_clip_control'),
    m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    S = i.getParameter(i.MAX_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    d = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    y = i.getParameter(i.MAX_VARYING_VECTORS),
    E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    D = g > 0,
    C = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    reverseDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: S,
    maxCubemapSize: p,
    maxAttributes: d,
    maxVertexUniforms: T,
    maxVaryings: y,
    maxFragmentUniforms: E,
    vertexTextures: D,
    maxSamples: C,
  };
}
function Wf(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Xn(),
    o = new Le(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, f) {
      const m = h.length !== 0 || f || n !== 0 || r;
      return (r = f), (n = h.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, f) {
      t = u(h, f, 0);
    }),
    (this.setState = function (h, f, m) {
      const g = h.clippingPlanes,
        S = h.clipIntersection,
        p = h.clipShadows,
        d = i.get(h);
      if (!r || g === null || g.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const T = s ? 0 : n,
          y = T * 4;
        let E = d.clippingState || null;
        (l.value = E), (E = u(g, f, y, m));
        for (let D = 0; D !== y; ++D) E[D] = t[D];
        (d.clippingState = E),
          (this.numIntersection = S ? this.numPlanes : 0),
          (this.numPlanes += T);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, f, m, g) {
    const S = h !== null ? h.length : 0;
    let p = null;
    if (S !== 0) {
      if (((p = l.value), g !== !0 || p === null)) {
        const d = m + S * 4,
          T = f.matrixWorldInverse;
        o.getNormalMatrix(T),
          (p === null || p.length < d) && (p = new Float32Array(d));
        for (let y = 0, E = m; y !== S; ++y, E += 4)
          a.copy(h[y]).applyMatrix4(T, o),
            a.normal.toArray(p, E),
            (p[E + 3] = a.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = S), (e.numIntersection = 0), p;
  }
}
function Xf(i) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Ws ? (a.mapping = Ti) : o === Xs && (a.mapping = Ai), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ws || o === Xs)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Fu(l.height);
            return (
              c.fromEquirectangularTexture(i, a),
              e.set(a, c),
              a.addEventListener('dispose', r),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener('dispose', r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
const vi = 4,
  qo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  $n = 20,
  Ts = new ic(),
  Yo = new ze();
let As = null,
  ws = 0,
  Cs = 0,
  Rs = !1;
const qn = (1 + Math.sqrt(5)) / 2,
  pi = 1 / qn,
  $o = [
    new N(-qn, pi, 0),
    new N(qn, pi, 0),
    new N(-pi, 0, qn),
    new N(pi, 0, qn),
    new N(0, qn, -pi),
    new N(0, qn, pi),
    new N(-1, 1, -1),
    new N(1, 1, -1),
    new N(-1, 1, 1),
    new N(1, 1, 1),
  ];
class Ko {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (As = this._renderer.getRenderTarget()),
      (ws = this._renderer.getActiveCubeFace()),
      (Cs = this._renderer.getActiveMipmapLevel()),
      (Rs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Jo()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = jo()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(As, ws, Cs),
      (this._renderer.xr.enabled = Rs),
      (e.scissorTest = !1),
      Ir(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ti || e.mapping === Ai
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (As = this._renderer.getRenderTarget()),
      (ws = this._renderer.getActiveCubeFace()),
      (Cs = this._renderer.getActiveMipmapLevel()),
      (Rs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: tn,
        minFilter: tn,
        generateMipmaps: !1,
        type: vn,
        format: Wt,
        colorSpace: Ri,
        depthBuffer: !1,
      },
      r = Zo(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Zo(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = qf(s)),
        (this._blurMaterial = Yf(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Xt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ts);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Ot(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(Yo), (u.toneMapping = gn), (u.autoClear = !1);
    const m = new Ga({
        name: 'PMREM.Background',
        side: Ct,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Xt(new rr(), m);
    let S = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (S = !0))
      : (m.color.copy(Yo), (S = !0));
    for (let d = 0; d < 6; d++) {
      const T = d % 3;
      T === 0
        ? (o.up.set(0, l[d], 0), o.lookAt(c[d], 0, 0))
        : T === 1
        ? (o.up.set(0, 0, l[d]), o.lookAt(0, c[d], 0))
        : (o.up.set(0, l[d], 0), o.lookAt(0, 0, c[d]));
      const y = this._cubeSize;
      Ir(r, T * y, d > 2 ? y : 0, y, y),
        u.setRenderTarget(r),
        S && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = h),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === Ti || e.mapping === Ai;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Jo()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = jo());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Xt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Ir(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Ts);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1],
        ),
        o = $o[(r - s - 1) % $o.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, 'latitudinal', s),
      this._halfBlur(a, e, n, n, r, 'longitudinal', s);
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== 'latitudinal' &&
      a !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!',
      );
    const u = 3,
      h = new Xt(this._lodPlanes[r], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * $n - 1),
      S = s / g,
      p = isFinite(s) ? 1 + Math.floor(u * S) : $n;
    p > $n &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$n}`,
      );
    const d = [];
    let T = 0;
    for (let A = 0; A < $n; ++A) {
      const R = A / S,
        M = Math.exp((-R * R) / 2);
      d.push(M), A === 0 ? (T += M) : A < p && (T += 2 * M);
    }
    for (let A = 0; A < d.length; A++) d[A] = d[A] / T;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = d),
      (f.latitudinal.value = a === 'latitudinal'),
      o && (f.poleAxis.value = o);
    const { _lodMax: y } = this;
    (f.dTheta.value = g), (f.mipInt.value = y - n);
    const E = this._sizeLods[r],
      D = 3 * E * (r > y - vi ? r - y + vi : 0),
      C = 4 * (this._cubeSize - E);
    Ir(t, D, C, 3 * E, 2 * E), l.setRenderTarget(t), l.render(h, Ts);
  }
}
function qf(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - vi + 1 + qo.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - vi ? (l = qo[a - i + vi - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      u = -c,
      h = 1 + c,
      f = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      g = 6,
      S = 3,
      p = 2,
      d = 1,
      T = new Float32Array(S * g * m),
      y = new Float32Array(p * g * m),
      E = new Float32Array(d * g * m);
    for (let C = 0; C < m; C++) {
      const A = ((C % 3) * 2) / 3 - 1,
        R = C > 2 ? 0 : -1,
        M = [
          A,
          R,
          0,
          A + 2 / 3,
          R,
          0,
          A + 2 / 3,
          R + 1,
          0,
          A,
          R,
          0,
          A + 2 / 3,
          R + 1,
          0,
          A,
          R + 1,
          0,
        ];
      T.set(M, S * g * C), y.set(f, p * g * C);
      const v = [C, C, C, C, C, C];
      E.set(v, d * g * C);
    }
    const D = new Zt();
    D.setAttribute('position', new nn(T, S)),
      D.setAttribute('uv', new nn(y, p)),
      D.setAttribute('faceIndex', new nn(E, d)),
      e.push(D),
      r > vi && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Zo(i, e, t) {
  const n = new $t(i, e, t);
  return (
    (n.texture.mapping = Kr),
    (n.texture.name = 'PMREM.cubeUv'),
    (n.scissorTest = !0),
    n
  );
}
function Ir(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Yf(i, e, t) {
  const n = new Float32Array($n),
    r = new N(0, 1, 0);
  return new gt({
    name: 'SphericalGaussianBlur',
    defines: {
      n: $n,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: _n,
    depthTest: !1,
    depthWrite: !1,
  });
}
function jo() {
  return new gt({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: _n,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Jo() {
  return new gt({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ya(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: _n,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ya() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function $f(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Ws || l === Xs,
        u = l === Ti || l === Ai;
      if (c || u) {
        let h = e.get(o);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new Ko(i)),
            (h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            (h.texture.pmremVersion = o.pmremVersion),
            e.set(o, h),
            h.texture
          );
        if (h !== void 0) return h.texture;
        {
          const m = o.image;
          return (c && m && m.height > 0) || (u && m && r(m))
            ? (t === null && (t = new Ko(i)),
              (h = c ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (h.texture.pmremVersion = o.pmremVersion),
              e.set(o, h),
              o.addEventListener('dispose', s),
              h.texture)
            : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener('dispose', s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function Kf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case 'WEBGL_depth_texture':
        r =
          i.getExtension('WEBGL_depth_texture') ||
          i.getExtension('MOZ_WEBGL_depth_texture') ||
          i.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        r =
          i.getExtension('EXT_texture_filter_anisotropic') ||
          i.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          i.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        r =
          i.getExtension('WEBGL_compressed_texture_s3tc') ||
          i.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          i.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        r =
          i.getExtension('WEBGL_compressed_texture_pvrtc') ||
          i.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t('EXT_color_buffer_float'),
        t('WEBGL_clip_cull_distance'),
        t('OES_texture_float_linear'),
        t('EXT_color_buffer_half_float'),
        t('WEBGL_multisampled_render_to_texture'),
        t('WEBGL_render_shared_exponent');
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          mi('THREE.WebGLRenderer: ' + n + ' extension not supported.'),
        r
      );
    },
  };
}
function Zf(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener('dispose', a), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, f) {
    return (
      r[f.id] === !0 ||
        (f.addEventListener('dispose', a),
        (r[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function l(h) {
    const f = h.attributes;
    for (const m in f) e.update(f[m], i.ARRAY_BUFFER);
  }
  function c(h) {
    const f = [],
      m = h.index,
      g = h.attributes.position;
    let S = 0;
    if (m !== null) {
      const T = m.array;
      S = m.version;
      for (let y = 0, E = T.length; y < E; y += 3) {
        const D = T[y + 0],
          C = T[y + 1],
          A = T[y + 2];
        f.push(D, C, C, A, A, D);
      }
    } else if (g !== void 0) {
      const T = g.array;
      S = g.version;
      for (let y = 0, E = T.length / 3 - 1; y < E; y += 3) {
        const D = y + 0,
          C = y + 1,
          A = y + 2;
        f.push(D, C, C, A, A, D);
      }
    } else return;
    const p = new (Wl(f) ? jl : Zl)(f, 1);
    p.version = S;
    const d = s.get(h);
    d && e.remove(d), s.set(h, p);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function jf(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    (s = f.type), (a = f.bytesPerElement);
  }
  function l(f, m) {
    i.drawElements(n, m, s, f * a), t.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, s, f * a, g), t.update(m, n, g));
  }
  function u(f, m, g) {
    if (g === 0) return;
    e.get('WEBGL_multi_draw').multiDrawElementsWEBGL(n, m, 0, s, f, 0, g);
    let p = 0;
    for (let d = 0; d < g; d++) p += m[d];
    t.update(p, n, 1);
  }
  function h(f, m, g, S) {
    if (g === 0) return;
    const p = e.get('WEBGL_multi_draw');
    if (p === null) for (let d = 0; d < f.length; d++) c(f[d] / a, m[d], S[d]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, S, 0, g);
      let d = 0;
      for (let T = 0; T < g; T++) d += m[T] * S[T];
      t.update(d, n, 1);
    }
  }
  (this.setMode = r),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = h);
}
function Jf(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', a);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Qf(i, e, t) {
  const n = new WeakMap(),
    r = new ot();
  function s(a, o, l) {
    const c = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      h = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== h) {
      let v = function () {
        R.dispose(), n.delete(o), o.removeEventListener('dispose', v);
      };
      var m = v;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0,
        S = o.morphAttributes.normal !== void 0,
        p = o.morphAttributes.color !== void 0,
        d = o.morphAttributes.position || [],
        T = o.morphAttributes.normal || [],
        y = o.morphAttributes.color || [];
      let E = 0;
      g === !0 && (E = 1), S === !0 && (E = 2), p === !0 && (E = 3);
      let D = o.attributes.position.count * E,
        C = 1;
      D > e.maxTextureSize &&
        ((C = Math.ceil(D / e.maxTextureSize)), (D = e.maxTextureSize));
      const A = new Float32Array(D * C * 4 * h),
        R = new ql(A, D, C, h);
      (R.type = pn), (R.needsUpdate = !0);
      const M = E * 4;
      for (let w = 0; w < h; w++) {
        const B = d[w],
          k = T[w],
          W = y[w],
          j = D * C * 4 * w;
        for (let $ = 0; $ < B.count; $++) {
          const Q = $ * M;
          g === !0 &&
            (r.fromBufferAttribute(B, $),
            (A[j + Q + 0] = r.x),
            (A[j + Q + 1] = r.y),
            (A[j + Q + 2] = r.z),
            (A[j + Q + 3] = 0)),
            S === !0 &&
              (r.fromBufferAttribute(k, $),
              (A[j + Q + 4] = r.x),
              (A[j + Q + 5] = r.y),
              (A[j + Q + 6] = r.z),
              (A[j + Q + 7] = 0)),
            p === !0 &&
              (r.fromBufferAttribute(W, $),
              (A[j + Q + 8] = r.x),
              (A[j + Q + 9] = r.y),
              (A[j + Q + 10] = r.z),
              (A[j + Q + 11] = W.itemSize === 4 ? r.w : 1));
        }
      }
      (f = { count: h, texture: R, size: new Ue(D, C) }),
        n.set(o, f),
        o.addEventListener('dispose', v);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, 'morphTexture', a.morphTexture, t);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++) g += c[p];
      const S = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(i, 'morphTargetBaseInfluence', S),
        l.getUniforms().setValue(i, 'morphTargetInfluences', c);
    }
    l.getUniforms().setValue(i, 'morphTargetsTexture', f.texture, t),
      l.getUniforms().setValue(i, 'morphTargetsTextureSize', f.size);
  }
  return { update: s };
}
function ep(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      h = e.get(l, u);
    if (
      (r.get(h) !== c && (e.update(h), r.set(h, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', o) === !1 &&
          l.addEventListener('dispose', o),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return h;
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener('dispose', o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const ac = new Tt(),
  Qo = new nc(1, 1),
  oc = new ql(),
  lc = new Mu(),
  cc = new ec(),
  el = [],
  tl = [],
  nl = new Float32Array(16),
  il = new Float32Array(9),
  rl = new Float32Array(4);
function Ii(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = el[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (el[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), i[a].toArray(s, o);
  }
  return s;
}
function dt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function ft(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Jr(i, e) {
  let t = tl[e];
  t === void 0 && ((t = new Int32Array(e)), (tl[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function tp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function np(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    i.uniform2fv(this.addr, e), ft(t, e);
  }
}
function ip(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (dt(t, e)) return;
    i.uniform3fv(this.addr, e), ft(t, e);
  }
}
function rp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    i.uniform4fv(this.addr, e), ft(t, e);
  }
}
function sp(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    rl.set(n), i.uniformMatrix2fv(this.addr, !1, rl), ft(t, n);
  }
}
function ap(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    il.set(n), i.uniformMatrix3fv(this.addr, !1, il), ft(t, n);
  }
}
function op(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (dt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), ft(t, e);
  } else {
    if (dt(t, n)) return;
    nl.set(n), i.uniformMatrix4fv(this.addr, !1, nl), ft(t, n);
  }
}
function lp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function cp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    i.uniform2iv(this.addr, e), ft(t, e);
  }
}
function up(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    i.uniform3iv(this.addr, e), ft(t, e);
  }
}
function hp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    i.uniform4iv(this.addr, e), ft(t, e);
  }
}
function dp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function fp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (dt(t, e)) return;
    i.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function pp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (dt(t, e)) return;
    i.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function mp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (dt(t, e)) return;
    i.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function _p(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let s;
  this.type === i.SAMPLER_2D_SHADOW
    ? ((Qo.compareFunction = Gl), (s = Qo))
    : (s = ac),
    t.setTexture2D(e || s, r);
}
function gp(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || lc, r);
}
function vp(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || cc, r);
}
function xp(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || oc, r);
}
function Sp(i) {
  switch (i) {
    case 5126:
      return tp;
    case 35664:
      return np;
    case 35665:
      return ip;
    case 35666:
      return rp;
    case 35674:
      return sp;
    case 35675:
      return ap;
    case 35676:
      return op;
    case 5124:
    case 35670:
      return lp;
    case 35667:
    case 35671:
      return cp;
    case 35668:
    case 35672:
      return up;
    case 35669:
    case 35673:
      return hp;
    case 5125:
      return dp;
    case 36294:
      return fp;
    case 36295:
      return pp;
    case 36296:
      return mp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _p;
    case 35679:
    case 36299:
    case 36307:
      return gp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return vp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xp;
  }
}
function Mp(i, e) {
  i.uniform1fv(this.addr, e);
}
function Ep(i, e) {
  const t = Ii(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function yp(i, e) {
  const t = Ii(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function bp(i, e) {
  const t = Ii(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Tp(i, e) {
  const t = Ii(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Ap(i, e) {
  const t = Ii(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function wp(i, e) {
  const t = Ii(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Cp(i, e) {
  i.uniform1iv(this.addr, e);
}
function Rp(i, e) {
  i.uniform2iv(this.addr, e);
}
function Pp(i, e) {
  i.uniform3iv(this.addr, e);
}
function Dp(i, e) {
  i.uniform4iv(this.addr, e);
}
function Lp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Up(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Ip(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Np(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Fp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Jr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || ac, s[a]);
}
function Op(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Jr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || lc, s[a]);
}
function Bp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Jr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || cc, s[a]);
}
function zp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Jr(t, r);
  dt(n, s) || (i.uniform1iv(this.addr, s), ft(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || oc, s[a]);
}
function Hp(i) {
  switch (i) {
    case 5126:
      return Mp;
    case 35664:
      return Ep;
    case 35665:
      return yp;
    case 35666:
      return bp;
    case 35674:
      return Tp;
    case 35675:
      return Ap;
    case 35676:
      return wp;
    case 5124:
    case 35670:
      return Cp;
    case 35667:
    case 35671:
      return Rp;
    case 35668:
    case 35672:
      return Pp;
    case 35669:
    case 35673:
      return Dp;
    case 5125:
      return Lp;
    case 36294:
      return Up;
    case 36295:
      return Ip;
    case 36296:
      return Np;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Fp;
    case 35679:
    case 36299:
    case 36307:
      return Op;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Bp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return zp;
  }
}
class kp {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Sp(t.type));
  }
}
class Vp {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Hp(t.type));
  }
}
class Gp {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Ps = /(\w+)(\])?(\[|\.)?/g;
function sl(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function Wp(i, e, t) {
  const n = i.name,
    r = n.length;
  for (Ps.lastIndex = 0; ; ) {
    const s = Ps.exec(n),
      a = Ps.lastIndex;
    let o = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === '[' && a + 2 === r))) {
      sl(t, c === void 0 ? new kp(o, i, e) : new Vp(o, i, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new Gp(o)), sl(t, h)), (t = h);
    }
  }
}
class Gr {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        a = e.getUniformLocation(t, s.name);
      Wp(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function al(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Xp = 37297;
let qp = 0;
function Yp(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? '>' : ' '} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const ol = new Le();
function $p(i) {
  qe._getMatrix(ol, qe.workingColorSpace, i);
  const e = `mat3( ${ol.elements.map((t) => t.toFixed(4))} )`;
  switch (qe.getTransfer(i)) {
    case Wr:
      return [e, 'LinearTransferOETF'];
    case je:
      return [e, 'sRGBTransferOETF'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported color space: ', i),
        [e, 'LinearTransferOETF']
      );
  }
}
function ll(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === '') return '';
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Yp(i.getShaderSource(e), a)
    );
  } else return r;
}
function Kp(i, e) {
  const t = $p(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    '}',
  ].join(`
`);
}
function Zp(i, e) {
  let t;
  switch (e) {
    case Da:
      t = 'Linear';
      break;
    case La:
      t = 'Reinhard';
      break;
    case Ua:
      t = 'Cineon';
      break;
    case Ia:
      t = 'ACESFilmic';
      break;
    case Na:
      t = 'AgX';
      break;
    case Fa:
      t = 'Neutral';
      break;
    case Jc:
      t = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
        (t = 'Linear');
  }
  return (
    'vec3 ' + i + '( vec3 color ) { return ' + t + 'ToneMapping( color ); }'
  );
}
const Nr = new N();
function jp() {
  qe.getLuminanceCoefficients(Nr);
  const i = Nr.x.toFixed(4),
    e = Nr.y.toFixed(4),
    t = Nr.z.toFixed(4);
  return [
    'float luminance( const in vec3 rgb ) {',
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    '	return dot( weights, rgb );',
    '}',
  ].join(`
`);
}
function Jp(i) {
  return [
    i.extensionClipCullDistance
      ? '#extension GL_ANGLE_clip_cull_distance : require'
      : '',
    i.extensionMultiDraw ? '#extension GL_ANGLE_multi_draw : require' : '',
  ].filter(Yi).join(`
`);
}
function Qp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push('#define ' + t + ' ' + n);
  }
  return e.join(`
`);
}
function em(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Yi(i) {
  return i !== '';
}
function cl(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ul(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const tm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ea(i) {
  return i.replace(tm, im);
}
const nm = new Map();
function im(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = nm.get(e);
    if (n !== void 0)
      (t = Ne[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        );
    else throw new Error('Can not resolve #include <' + e + '>');
  }
  return Ea(t);
}
const rm =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function hl(i) {
  return i.replace(rm, sm);
}
function sm(i, e, t, n) {
  let r = '';
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function dl(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function am(i) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    i.shadowMapType === Pl
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : i.shadowMapType === Dc
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : i.shadowMapType === hn && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function om(i) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (i.envMap)
    switch (i.envMapMode) {
      case Ti:
      case Ai:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case Kr:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function lm(i) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (i.envMap)
    switch (i.envMapMode) {
      case Ai:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function cm(i) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (i.envMap)
    switch (i.combine) {
      case Dl:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case Zc:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case jc:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function um(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function hm(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = am(t),
    c = om(t),
    u = lm(t),
    h = cm(t),
    f = um(t),
    m = Jp(t),
    g = Qp(s),
    S = r.createProgram();
  let p,
    d,
    T = t.glslVersion
      ? '#version ' +
        t.glslVersion +
        `
`
      : '';
  t.isRawShaderMaterial
    ? ((p = [
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        g,
      ].filter(Yi).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (d = [
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        g,
      ].filter(Yi).join(`
`)),
      d.length > 0 &&
        (d += `
`))
    : ((p = [
        dl(t),
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        g,
        t.extensionClipCullDistance ? '#define USE_CLIP_DISTANCE' : '',
        t.batching ? '#define USE_BATCHING' : '',
        t.batchingColor ? '#define USE_BATCHING_COLOR' : '',
        t.instancing ? '#define USE_INSTANCING' : '',
        t.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        t.instancingMorph ? '#define USE_INSTANCING_MORPH' : '',
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.map ? '#define USE_MAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + u : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        t.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.anisotropy ? '#define USE_ANISOTROPY' : '',
        t.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaHash ? '#define USE_ALPHAHASH' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        t.mapUv ? '#define MAP_UV ' + t.mapUv : '',
        t.alphaMapUv ? '#define ALPHAMAP_UV ' + t.alphaMapUv : '',
        t.lightMapUv ? '#define LIGHTMAP_UV ' + t.lightMapUv : '',
        t.aoMapUv ? '#define AOMAP_UV ' + t.aoMapUv : '',
        t.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + t.emissiveMapUv : '',
        t.bumpMapUv ? '#define BUMPMAP_UV ' + t.bumpMapUv : '',
        t.normalMapUv ? '#define NORMALMAP_UV ' + t.normalMapUv : '',
        t.displacementMapUv
          ? '#define DISPLACEMENTMAP_UV ' + t.displacementMapUv
          : '',
        t.metalnessMapUv ? '#define METALNESSMAP_UV ' + t.metalnessMapUv : '',
        t.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + t.roughnessMapUv : '',
        t.anisotropyMapUv
          ? '#define ANISOTROPYMAP_UV ' + t.anisotropyMapUv
          : '',
        t.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + t.clearcoatMapUv : '',
        t.clearcoatNormalMapUv
          ? '#define CLEARCOAT_NORMALMAP_UV ' + t.clearcoatNormalMapUv
          : '',
        t.clearcoatRoughnessMapUv
          ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + t.clearcoatRoughnessMapUv
          : '',
        t.iridescenceMapUv
          ? '#define IRIDESCENCEMAP_UV ' + t.iridescenceMapUv
          : '',
        t.iridescenceThicknessMapUv
          ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + t.iridescenceThicknessMapUv
          : '',
        t.sheenColorMapUv
          ? '#define SHEEN_COLORMAP_UV ' + t.sheenColorMapUv
          : '',
        t.sheenRoughnessMapUv
          ? '#define SHEEN_ROUGHNESSMAP_UV ' + t.sheenRoughnessMapUv
          : '',
        t.specularMapUv ? '#define SPECULARMAP_UV ' + t.specularMapUv : '',
        t.specularColorMapUv
          ? '#define SPECULAR_COLORMAP_UV ' + t.specularColorMapUv
          : '',
        t.specularIntensityMapUv
          ? '#define SPECULAR_INTENSITYMAP_UV ' + t.specularIntensityMapUv
          : '',
        t.transmissionMapUv
          ? '#define TRANSMISSIONMAP_UV ' + t.transmissionMapUv
          : '',
        t.thicknessMapUv ? '#define THICKNESSMAP_UV ' + t.thicknessMapUv : '',
        t.vertexTangents && t.flatShading === !1 ? '#define USE_TANGENT' : '',
        t.vertexColors ? '#define USE_COLOR' : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUv1s ? '#define USE_UV1' : '',
        t.vertexUv2s ? '#define USE_UV2' : '',
        t.vertexUv3s ? '#define USE_UV3' : '',
        t.pointsUvs ? '#define USE_POINTS_UV' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.skinning ? '#define USE_SKINNING' : '',
        t.morphTargets ? '#define USE_MORPHTARGETS' : '',
        t.morphNormals && t.flatShading === !1
          ? '#define USE_MORPHNORMALS'
          : '',
        t.morphColors ? '#define USE_MORPHCOLORS' : '',
        t.morphTargetsCount > 0
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + t.morphTextureStride
          : '',
        t.morphTargetsCount > 0
          ? '#define MORPHTARGETS_COUNT ' + t.morphTargetsCount
          : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        t.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.reverseDepthBuffer ? '#define USE_REVERSEDEPTHBUF' : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        '#ifdef USE_INSTANCING_MORPH',
        '	uniform sampler2D morphTexture;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_UV1',
        '	attribute vec2 uv1;',
        '#endif',
        '#ifdef USE_UV2',
        '	attribute vec2 uv2;',
        '#endif',
        '#ifdef USE_UV3',
        '	attribute vec2 uv3;',
        '#endif',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(Yi).join(`
`)),
      (d = [
        dl(t),
        '#define SHADER_TYPE ' + t.shaderType,
        '#define SHADER_NAME ' + t.shaderName,
        g,
        t.useFog && t.fog ? '#define USE_FOG' : '',
        t.useFog && t.fogExp2 ? '#define FOG_EXP2' : '',
        t.alphaToCoverage ? '#define ALPHA_TO_COVERAGE' : '',
        t.map ? '#define USE_MAP' : '',
        t.matcap ? '#define USE_MATCAP' : '',
        t.envMap ? '#define USE_ENVMAP' : '',
        t.envMap ? '#define ' + c : '',
        t.envMap ? '#define ' + u : '',
        t.envMap ? '#define ' + h : '',
        f ? '#define CUBEUV_TEXEL_WIDTH ' + f.texelWidth : '',
        f ? '#define CUBEUV_TEXEL_HEIGHT ' + f.texelHeight : '',
        f ? '#define CUBEUV_MAX_MIP ' + f.maxMip + '.0' : '',
        t.lightMap ? '#define USE_LIGHTMAP' : '',
        t.aoMap ? '#define USE_AOMAP' : '',
        t.bumpMap ? '#define USE_BUMPMAP' : '',
        t.normalMap ? '#define USE_NORMALMAP' : '',
        t.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        t.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        t.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        t.anisotropy ? '#define USE_ANISOTROPY' : '',
        t.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        t.clearcoat ? '#define USE_CLEARCOAT' : '',
        t.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        t.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        t.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        t.dispersion ? '#define USE_DISPERSION' : '',
        t.iridescence ? '#define USE_IRIDESCENCE' : '',
        t.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        t.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        t.specularMap ? '#define USE_SPECULARMAP' : '',
        t.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        t.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        t.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        t.metalnessMap ? '#define USE_METALNESSMAP' : '',
        t.alphaMap ? '#define USE_ALPHAMAP' : '',
        t.alphaTest ? '#define USE_ALPHATEST' : '',
        t.alphaHash ? '#define USE_ALPHAHASH' : '',
        t.sheen ? '#define USE_SHEEN' : '',
        t.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        t.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        t.transmission ? '#define USE_TRANSMISSION' : '',
        t.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        t.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        t.vertexTangents && t.flatShading === !1 ? '#define USE_TANGENT' : '',
        t.vertexColors || t.instancingColor || t.batchingColor
          ? '#define USE_COLOR'
          : '',
        t.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        t.vertexUv1s ? '#define USE_UV1' : '',
        t.vertexUv2s ? '#define USE_UV2' : '',
        t.vertexUv3s ? '#define USE_UV3' : '',
        t.pointsUvs ? '#define USE_POINTS_UV' : '',
        t.gradientMap ? '#define USE_GRADIENTMAP' : '',
        t.flatShading ? '#define FLAT_SHADED' : '',
        t.doubleSided ? '#define DOUBLE_SIDED' : '',
        t.flipSided ? '#define FLIP_SIDED' : '',
        t.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        t.shadowMapEnabled ? '#define ' + l : '',
        t.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        t.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        t.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        t.decodeVideoTextureEmissive
          ? '#define DECODE_VIDEO_TEXTURE_EMISSIVE'
          : '',
        t.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        t.reverseDepthBuffer ? '#define USE_REVERSEDEPTHBUF' : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        t.toneMapping !== gn ? '#define TONE_MAPPING' : '',
        t.toneMapping !== gn ? Ne.tonemapping_pars_fragment : '',
        t.toneMapping !== gn ? Zp('toneMapping', t.toneMapping) : '',
        t.dithering ? '#define DITHERING' : '',
        t.opaque ? '#define OPAQUE' : '',
        Ne.colorspace_pars_fragment,
        Kp('linearToOutputTexel', t.outputColorSpace),
        jp(),
        t.useDepthPacking ? '#define DEPTH_PACKING ' + t.depthPacking : '',
        `
`,
      ].filter(Yi).join(`
`))),
    (a = Ea(a)),
    (a = cl(a, t)),
    (a = ul(a, t)),
    (o = Ea(o)),
    (o = cl(o, t)),
    (o = ul(o, t)),
    (a = hl(a)),
    (o = hl(o)),
    t.isRawShaderMaterial !== !0 &&
      ((T = `#version 300 es
`),
      (p =
        [
          m,
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        p),
      (d =
        [
          '#define varying in',
          t.glslVersion === yo
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          t.glslVersion === yo ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        d));
  const y = T + p + a,
    E = T + d + o,
    D = al(r, r.VERTEX_SHADER, y),
    C = al(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, D),
    r.attachShader(S, C),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(S, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(S, 0, 'position'),
    r.linkProgram(S);
  function A(w) {
    if (i.debug.checkShaderErrors) {
      const B = r.getProgramInfoLog(S).trim(),
        k = r.getShaderInfoLog(D).trim(),
        W = r.getShaderInfoLog(C).trim();
      let j = !0,
        $ = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (((j = !1), typeof i.debug.onShaderError == 'function'))
          i.debug.onShaderError(r, S, D, C);
        else {
          const Q = ll(r, D, 'vertex'),
            G = ll(r, C, 'fragment');
          console.error(
            'THREE.WebGLProgram: Shader Error ' +
              r.getError() +
              ' - VALIDATE_STATUS ' +
              r.getProgramParameter(S, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              w.name +
              `
Material Type: ` +
              w.type +
              `

Program Info Log: ` +
              B +
              `
` +
              Q +
              `
` +
              G,
          );
        }
      else
        B !== ''
          ? console.warn('THREE.WebGLProgram: Program Info Log:', B)
          : (k === '' || W === '') && ($ = !1);
      $ &&
        (w.diagnostics = {
          runnable: j,
          programLog: B,
          vertexShader: { log: k, prefix: p },
          fragmentShader: { log: W, prefix: d },
        });
    }
    r.deleteShader(D), r.deleteShader(C), (R = new Gr(r, S)), (M = em(r, S));
  }
  let R;
  this.getUniforms = function () {
    return R === void 0 && A(this), R;
  };
  let M;
  this.getAttributes = function () {
    return M === void 0 && A(this), M;
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return v === !1 && (v = r.getProgramParameter(S, Xp)), v;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(S),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = qp++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = S),
    (this.vertexShader = D),
    (this.fragmentShader = C),
    this
  );
}
let dm = 0;
class fm {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new pm(e)), t.set(e, n)), n;
  }
}
class pm {
  constructor(e) {
    (this.id = dm++), (this.code = e), (this.usedTimes = 0);
  }
}
function mm(i, e, t, n, r, s, a) {
  const o = new $l(),
    l = new fm(),
    c = new Set(),
    u = [],
    h = r.logarithmicDepthBuffer,
    f = r.vertexTextures;
  let m = r.precision;
  const g = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  };
  function S(M) {
    return c.add(M), M === 0 ? 'uv' : `uv${M}`;
  }
  function p(M, v, w, B, k) {
    const W = B.fog,
      j = k.geometry,
      $ = M.isMeshStandardMaterial ? B.environment : null,
      Q = (M.isMeshStandardMaterial ? t : e).get(M.envMap || $),
      G = Q && Q.mapping === Kr ? Q.image.height : null,
      ae = g[M.type];
    M.precision !== null &&
      ((m = r.getMaxPrecision(M.precision)),
      m !== M.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          M.precision,
          'not supported, using',
          m,
          'instead.',
        ));
    const de =
        j.morphAttributes.position ||
        j.morphAttributes.normal ||
        j.morphAttributes.color,
      xe = de !== void 0 ? de.length : 0;
    let Fe = 0;
    j.morphAttributes.position !== void 0 && (Fe = 1),
      j.morphAttributes.normal !== void 0 && (Fe = 2),
      j.morphAttributes.color !== void 0 && (Fe = 3);
    let Je, q, ne, ge;
    if (ae) {
      const Ze = en[ae];
      (Je = Ze.vertexShader), (q = Ze.fragmentShader);
    } else
      (Je = M.vertexShader),
        (q = M.fragmentShader),
        l.update(M),
        (ne = l.getVertexShaderID(M)),
        (ge = l.getFragmentShaderID(M));
    const oe = i.getRenderTarget(),
      Ae = i.state.buffers.depth.getReversed(),
      Pe = k.isInstancedMesh === !0,
      Oe = k.isBatchedMesh === !0,
      it = !!M.map,
      Ge = !!M.matcap,
      at = !!Q,
      P = !!M.aoMap,
      Lt = !!M.lightMap,
      He = !!M.bumpMap,
      ke = !!M.normalMap,
      Se = !!M.displacementMap,
      tt = !!M.emissiveMap,
      Me = !!M.metalnessMap,
      b = !!M.roughnessMap,
      _ = M.anisotropy > 0,
      F = M.clearcoat > 0,
      K = M.dispersion > 0,
      J = M.iridescence > 0,
      X = M.sheen > 0,
      ve = M.transmission > 0,
      le = _ && !!M.anisotropyMap,
      fe = F && !!M.clearcoatMap,
      We = F && !!M.clearcoatNormalMap,
      te = F && !!M.clearcoatRoughnessMap,
      pe = J && !!M.iridescenceMap,
      be = J && !!M.iridescenceThicknessMap,
      we = X && !!M.sheenColorMap,
      me = X && !!M.sheenRoughnessMap,
      Ve = !!M.specularMap,
      Ie = !!M.specularColorMap,
      Qe = !!M.specularIntensityMap,
      L = ve && !!M.transmissionMap,
      re = ve && !!M.thicknessMap,
      V = !!M.gradientMap,
      Z = !!M.alphaMap,
      ue = M.alphaTest > 0,
      ce = !!M.alphaHash,
      De = !!M.extensions;
    let rt = gn;
    M.toneMapped &&
      (oe === null || oe.isXRRenderTarget === !0) &&
      (rt = i.toneMapping);
    const vt = {
      shaderID: ae,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: Je,
      fragmentShader: q,
      defines: M.defines,
      customVertexShaderID: ne,
      customFragmentShaderID: ge,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: m,
      batching: Oe,
      batchingColor: Oe && k._colorsTexture !== null,
      instancing: Pe,
      instancingColor: Pe && k.instanceColor !== null,
      instancingMorph: Pe && k.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        oe === null
          ? i.outputColorSpace
          : oe.isXRRenderTarget === !0
          ? oe.texture.colorSpace
          : Ri,
      alphaToCoverage: !!M.alphaToCoverage,
      map: it,
      matcap: Ge,
      envMap: at,
      envMapMode: at && Q.mapping,
      envMapCubeUVHeight: G,
      aoMap: P,
      lightMap: Lt,
      bumpMap: He,
      normalMap: ke,
      displacementMap: f && Se,
      emissiveMap: tt,
      normalMapObjectSpace: ke && M.normalMapType === iu,
      normalMapTangentSpace: ke && M.normalMapType === nu,
      metalnessMap: Me,
      roughnessMap: b,
      anisotropy: _,
      anisotropyMap: le,
      clearcoat: F,
      clearcoatMap: fe,
      clearcoatNormalMap: We,
      clearcoatRoughnessMap: te,
      dispersion: K,
      iridescence: J,
      iridescenceMap: pe,
      iridescenceThicknessMap: be,
      sheen: X,
      sheenColorMap: we,
      sheenRoughnessMap: me,
      specularMap: Ve,
      specularColorMap: Ie,
      specularIntensityMap: Qe,
      transmission: ve,
      transmissionMap: L,
      thicknessMap: re,
      gradientMap: V,
      opaque:
        M.transparent === !1 && M.blending === Si && M.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: ue,
      alphaHash: ce,
      combine: M.combine,
      mapUv: it && S(M.map.channel),
      aoMapUv: P && S(M.aoMap.channel),
      lightMapUv: Lt && S(M.lightMap.channel),
      bumpMapUv: He && S(M.bumpMap.channel),
      normalMapUv: ke && S(M.normalMap.channel),
      displacementMapUv: Se && S(M.displacementMap.channel),
      emissiveMapUv: tt && S(M.emissiveMap.channel),
      metalnessMapUv: Me && S(M.metalnessMap.channel),
      roughnessMapUv: b && S(M.roughnessMap.channel),
      anisotropyMapUv: le && S(M.anisotropyMap.channel),
      clearcoatMapUv: fe && S(M.clearcoatMap.channel),
      clearcoatNormalMapUv: We && S(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: te && S(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: pe && S(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: be && S(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: we && S(M.sheenColorMap.channel),
      sheenRoughnessMapUv: me && S(M.sheenRoughnessMap.channel),
      specularMapUv: Ve && S(M.specularMap.channel),
      specularColorMapUv: Ie && S(M.specularColorMap.channel),
      specularIntensityMapUv: Qe && S(M.specularIntensityMap.channel),
      transmissionMapUv: L && S(M.transmissionMap.channel),
      thicknessMapUv: re && S(M.thicknessMap.channel),
      alphaMapUv: Z && S(M.alphaMap.channel),
      vertexTangents: !!j.attributes.tangent && (ke || _),
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!j.attributes.color &&
        j.attributes.color.itemSize === 4,
      pointsUvs: k.isPoints === !0 && !!j.attributes.uv && (it || Z),
      fog: !!W,
      useFog: M.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: Ae,
      skinning: k.isSkinnedMesh === !0,
      morphTargets: j.morphAttributes.position !== void 0,
      morphNormals: j.morphAttributes.normal !== void 0,
      morphColors: j.morphAttributes.color !== void 0,
      morphTargetsCount: xe,
      morphTextureStride: Fe,
      numDirLights: v.directional.length,
      numPointLights: v.point.length,
      numSpotLights: v.spot.length,
      numSpotLightMaps: v.spotLightMap.length,
      numRectAreaLights: v.rectArea.length,
      numHemiLights: v.hemi.length,
      numDirLightShadows: v.directionalShadowMap.length,
      numPointLightShadows: v.pointShadowMap.length,
      numSpotLightShadows: v.spotShadowMap.length,
      numSpotLightShadowsWithMaps: v.numSpotLightShadowsWithMaps,
      numLightProbes: v.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: i.shadowMap.enabled && w.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: rt,
      decodeVideoTexture:
        it &&
        M.map.isVideoTexture === !0 &&
        qe.getTransfer(M.map.colorSpace) === je,
      decodeVideoTextureEmissive:
        tt &&
        M.emissiveMap.isVideoTexture === !0 &&
        qe.getTransfer(M.emissiveMap.colorSpace) === je,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === fn,
      flipSided: M.side === Ct,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance:
        De &&
        M.extensions.clipCullDistance === !0 &&
        n.has('WEBGL_clip_cull_distance'),
      extensionMultiDraw:
        ((De && M.extensions.multiDraw === !0) || Oe) &&
        n.has('WEBGL_multi_draw'),
      rendererExtensionParallelShaderCompile: n.has(
        'KHR_parallel_shader_compile',
      ),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
    return (
      (vt.vertexUv1s = c.has(1)),
      (vt.vertexUv2s = c.has(2)),
      (vt.vertexUv3s = c.has(3)),
      c.clear(),
      vt
    );
  }
  function d(M) {
    const v = [];
    if (
      (M.shaderID
        ? v.push(M.shaderID)
        : (v.push(M.customVertexShaderID), v.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const w in M.defines) v.push(w), v.push(M.defines[w]);
    return (
      M.isRawShaderMaterial === !1 &&
        (T(v, M), y(v, M), v.push(i.outputColorSpace)),
      v.push(M.customProgramCacheKey),
      v.join()
    );
  }
  function T(M, v) {
    M.push(v.precision),
      M.push(v.outputColorSpace),
      M.push(v.envMapMode),
      M.push(v.envMapCubeUVHeight),
      M.push(v.mapUv),
      M.push(v.alphaMapUv),
      M.push(v.lightMapUv),
      M.push(v.aoMapUv),
      M.push(v.bumpMapUv),
      M.push(v.normalMapUv),
      M.push(v.displacementMapUv),
      M.push(v.emissiveMapUv),
      M.push(v.metalnessMapUv),
      M.push(v.roughnessMapUv),
      M.push(v.anisotropyMapUv),
      M.push(v.clearcoatMapUv),
      M.push(v.clearcoatNormalMapUv),
      M.push(v.clearcoatRoughnessMapUv),
      M.push(v.iridescenceMapUv),
      M.push(v.iridescenceThicknessMapUv),
      M.push(v.sheenColorMapUv),
      M.push(v.sheenRoughnessMapUv),
      M.push(v.specularMapUv),
      M.push(v.specularColorMapUv),
      M.push(v.specularIntensityMapUv),
      M.push(v.transmissionMapUv),
      M.push(v.thicknessMapUv),
      M.push(v.combine),
      M.push(v.fogExp2),
      M.push(v.sizeAttenuation),
      M.push(v.morphTargetsCount),
      M.push(v.morphAttributeCount),
      M.push(v.numDirLights),
      M.push(v.numPointLights),
      M.push(v.numSpotLights),
      M.push(v.numSpotLightMaps),
      M.push(v.numHemiLights),
      M.push(v.numRectAreaLights),
      M.push(v.numDirLightShadows),
      M.push(v.numPointLightShadows),
      M.push(v.numSpotLightShadows),
      M.push(v.numSpotLightShadowsWithMaps),
      M.push(v.numLightProbes),
      M.push(v.shadowMapType),
      M.push(v.toneMapping),
      M.push(v.numClippingPlanes),
      M.push(v.numClipIntersection),
      M.push(v.depthPacking);
  }
  function y(M, v) {
    o.disableAll(),
      v.supportsVertexTextures && o.enable(0),
      v.instancing && o.enable(1),
      v.instancingColor && o.enable(2),
      v.instancingMorph && o.enable(3),
      v.matcap && o.enable(4),
      v.envMap && o.enable(5),
      v.normalMapObjectSpace && o.enable(6),
      v.normalMapTangentSpace && o.enable(7),
      v.clearcoat && o.enable(8),
      v.iridescence && o.enable(9),
      v.alphaTest && o.enable(10),
      v.vertexColors && o.enable(11),
      v.vertexAlphas && o.enable(12),
      v.vertexUv1s && o.enable(13),
      v.vertexUv2s && o.enable(14),
      v.vertexUv3s && o.enable(15),
      v.vertexTangents && o.enable(16),
      v.anisotropy && o.enable(17),
      v.alphaHash && o.enable(18),
      v.batching && o.enable(19),
      v.dispersion && o.enable(20),
      v.batchingColor && o.enable(21),
      M.push(o.mask),
      o.disableAll(),
      v.fog && o.enable(0),
      v.useFog && o.enable(1),
      v.flatShading && o.enable(2),
      v.logarithmicDepthBuffer && o.enable(3),
      v.reverseDepthBuffer && o.enable(4),
      v.skinning && o.enable(5),
      v.morphTargets && o.enable(6),
      v.morphNormals && o.enable(7),
      v.morphColors && o.enable(8),
      v.premultipliedAlpha && o.enable(9),
      v.shadowMapEnabled && o.enable(10),
      v.doubleSided && o.enable(11),
      v.flipSided && o.enable(12),
      v.useDepthPacking && o.enable(13),
      v.dithering && o.enable(14),
      v.transmission && o.enable(15),
      v.sheen && o.enable(16),
      v.opaque && o.enable(17),
      v.pointsUvs && o.enable(18),
      v.decodeVideoTexture && o.enable(19),
      v.decodeVideoTextureEmissive && o.enable(20),
      v.alphaToCoverage && o.enable(21),
      M.push(o.mask);
  }
  function E(M) {
    const v = g[M.type];
    let w;
    if (v) {
      const B = en[v];
      w = Qi.clone(B.uniforms);
    } else w = M.uniforms;
    return w;
  }
  function D(M, v) {
    let w;
    for (let B = 0, k = u.length; B < k; B++) {
      const W = u[B];
      if (W.cacheKey === v) {
        (w = W), ++w.usedTimes;
        break;
      }
    }
    return w === void 0 && ((w = new hm(i, v, M, s)), u.push(w)), w;
  }
  function C(M) {
    if (--M.usedTimes === 0) {
      const v = u.indexOf(M);
      (u[v] = u[u.length - 1]), u.pop(), M.destroy();
    }
  }
  function A(M) {
    l.remove(M);
  }
  function R() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: d,
    getUniforms: E,
    acquireProgram: D,
    releaseProgram: C,
    releaseShaderCache: A,
    programs: u,
    dispose: R,
  };
}
function _m() {
  let i = new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && ((o = {}), i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function gm(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function fl(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function pl() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function a(h, f, m, g, S, p) {
    let d = i[e];
    return (
      d === void 0
        ? ((d = {
            id: h.id,
            object: h,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: S,
            group: p,
          }),
          (i[e] = d))
        : ((d.id = h.id),
          (d.object = h),
          (d.geometry = f),
          (d.material = m),
          (d.groupOrder = g),
          (d.renderOrder = h.renderOrder),
          (d.z = S),
          (d.group = p)),
      e++,
      d
    );
  }
  function o(h, f, m, g, S, p) {
    const d = a(h, f, m, g, S, p);
    m.transmission > 0
      ? n.push(d)
      : m.transparent === !0
      ? r.push(d)
      : t.push(d);
  }
  function l(h, f, m, g, S, p) {
    const d = a(h, f, m, g, S, p);
    m.transmission > 0
      ? n.unshift(d)
      : m.transparent === !0
      ? r.unshift(d)
      : t.unshift(d);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || gm),
      n.length > 1 && n.sort(f || fl),
      r.length > 1 && r.sort(f || fl);
  }
  function u() {
    for (let h = e, f = i.length; h < f; h++) {
      const m = i[h];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function vm() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new pl()), i.set(n, [a]))
        : r >= s.length
        ? ((a = new pl()), s.push(a))
        : (a = s[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function xm() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = { direction: new N(), color: new ze() };
          break;
        case 'SpotLight':
          t = {
            position: new N(),
            direction: new N(),
            color: new ze(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          t = { position: new N(), color: new ze(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          t = { direction: new N(), skyColor: new ze(), groundColor: new ze() };
          break;
        case 'RectAreaLight':
          t = {
            color: new ze(),
            position: new N(),
            halfWidth: new N(),
            halfHeight: new N(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Sm() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case 'DirectionalLight':
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
          };
          break;
        case 'SpotLight':
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
          };
          break;
        case 'PointLight':
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let Mm = 0;
function Em(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function ym(i) {
  const e = new xm(),
    t = Sm(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new N());
  const r = new N(),
    s = new lt(),
    a = new lt();
  function o(c) {
    let u = 0,
      h = 0,
      f = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let m = 0,
      g = 0,
      S = 0,
      p = 0,
      d = 0,
      T = 0,
      y = 0,
      E = 0,
      D = 0,
      C = 0,
      A = 0;
    c.sort(Em);
    for (let M = 0, v = c.length; M < v; M++) {
      const w = c[M],
        B = w.color,
        k = w.intensity,
        W = w.distance,
        j = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
      if (w.isAmbientLight) (u += B.r * k), (h += B.g * k), (f += B.b * k);
      else if (w.isLightProbe) {
        for (let $ = 0; $ < 9; $++)
          n.probe[$].addScaledVector(w.sh.coefficients[$], k);
        A++;
      } else if (w.isDirectionalLight) {
        const $ = e.get(w);
        if (($.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow)) {
          const Q = w.shadow,
            G = t.get(w);
          (G.shadowIntensity = Q.intensity),
            (G.shadowBias = Q.bias),
            (G.shadowNormalBias = Q.normalBias),
            (G.shadowRadius = Q.radius),
            (G.shadowMapSize = Q.mapSize),
            (n.directionalShadow[m] = G),
            (n.directionalShadowMap[m] = j),
            (n.directionalShadowMatrix[m] = w.shadow.matrix),
            T++;
        }
        (n.directional[m] = $), m++;
      } else if (w.isSpotLight) {
        const $ = e.get(w);
        $.position.setFromMatrixPosition(w.matrixWorld),
          $.color.copy(B).multiplyScalar(k),
          ($.distance = W),
          ($.coneCos = Math.cos(w.angle)),
          ($.penumbraCos = Math.cos(w.angle * (1 - w.penumbra))),
          ($.decay = w.decay),
          (n.spot[S] = $);
        const Q = w.shadow;
        if (
          (w.map &&
            ((n.spotLightMap[D] = w.map),
            D++,
            Q.updateMatrices(w),
            w.castShadow && C++),
          (n.spotLightMatrix[S] = Q.matrix),
          w.castShadow)
        ) {
          const G = t.get(w);
          (G.shadowIntensity = Q.intensity),
            (G.shadowBias = Q.bias),
            (G.shadowNormalBias = Q.normalBias),
            (G.shadowRadius = Q.radius),
            (G.shadowMapSize = Q.mapSize),
            (n.spotShadow[S] = G),
            (n.spotShadowMap[S] = j),
            E++;
        }
        S++;
      } else if (w.isRectAreaLight) {
        const $ = e.get(w);
        $.color.copy(B).multiplyScalar(k),
          $.halfWidth.set(w.width * 0.5, 0, 0),
          $.halfHeight.set(0, w.height * 0.5, 0),
          (n.rectArea[p] = $),
          p++;
      } else if (w.isPointLight) {
        const $ = e.get(w);
        if (
          ($.color.copy(w.color).multiplyScalar(w.intensity),
          ($.distance = w.distance),
          ($.decay = w.decay),
          w.castShadow)
        ) {
          const Q = w.shadow,
            G = t.get(w);
          (G.shadowIntensity = Q.intensity),
            (G.shadowBias = Q.bias),
            (G.shadowNormalBias = Q.normalBias),
            (G.shadowRadius = Q.radius),
            (G.shadowMapSize = Q.mapSize),
            (G.shadowCameraNear = Q.camera.near),
            (G.shadowCameraFar = Q.camera.far),
            (n.pointShadow[g] = G),
            (n.pointShadowMap[g] = j),
            (n.pointShadowMatrix[g] = w.shadow.matrix),
            y++;
        }
        (n.point[g] = $), g++;
      } else if (w.isHemisphereLight) {
        const $ = e.get(w);
        $.skyColor.copy(w.color).multiplyScalar(k),
          $.groundColor.copy(w.groundColor).multiplyScalar(k),
          (n.hemi[d] = $),
          d++;
      }
    }
    p > 0 &&
      (i.has('OES_texture_float_linear') === !0
        ? ((n.rectAreaLTC1 = ie.LTC_FLOAT_1), (n.rectAreaLTC2 = ie.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = ie.LTC_HALF_1), (n.rectAreaLTC2 = ie.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = h),
      (n.ambient[2] = f);
    const R = n.hash;
    (R.directionalLength !== m ||
      R.pointLength !== g ||
      R.spotLength !== S ||
      R.rectAreaLength !== p ||
      R.hemiLength !== d ||
      R.numDirectionalShadows !== T ||
      R.numPointShadows !== y ||
      R.numSpotShadows !== E ||
      R.numSpotMaps !== D ||
      R.numLightProbes !== A) &&
      ((n.directional.length = m),
      (n.spot.length = S),
      (n.rectArea.length = p),
      (n.point.length = g),
      (n.hemi.length = d),
      (n.directionalShadow.length = T),
      (n.directionalShadowMap.length = T),
      (n.pointShadow.length = y),
      (n.pointShadowMap.length = y),
      (n.spotShadow.length = E),
      (n.spotShadowMap.length = E),
      (n.directionalShadowMatrix.length = T),
      (n.pointShadowMatrix.length = y),
      (n.spotLightMatrix.length = E + D - C),
      (n.spotLightMap.length = D),
      (n.numSpotLightShadowsWithMaps = C),
      (n.numLightProbes = A),
      (R.directionalLength = m),
      (R.pointLength = g),
      (R.spotLength = S),
      (R.rectAreaLength = p),
      (R.hemiLength = d),
      (R.numDirectionalShadows = T),
      (R.numPointShadows = y),
      (R.numSpotShadows = E),
      (R.numSpotMaps = D),
      (R.numLightProbes = A),
      (n.version = Mm++));
  }
  function l(c, u) {
    let h = 0,
      f = 0,
      m = 0,
      g = 0,
      S = 0;
    const p = u.matrixWorldInverse;
    for (let d = 0, T = c.length; d < T; d++) {
      const y = c[d];
      if (y.isDirectionalLight) {
        const E = n.directional[h];
        E.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(p),
          h++;
      } else if (y.isSpotLight) {
        const E = n.spot[m];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(p),
          E.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          E.direction.sub(r),
          E.direction.transformDirection(p),
          m++;
      } else if (y.isRectAreaLight) {
        const E = n.rectArea[g];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(p),
          a.identity(),
          s.copy(y.matrixWorld),
          s.premultiply(p),
          a.extractRotation(s),
          E.halfWidth.set(y.width * 0.5, 0, 0),
          E.halfHeight.set(0, y.height * 0.5, 0),
          E.halfWidth.applyMatrix4(a),
          E.halfHeight.applyMatrix4(a),
          g++;
      } else if (y.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(y.matrixWorld),
          E.position.applyMatrix4(p),
          f++;
      } else if (y.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(y.matrixWorld),
          E.direction.transformDirection(p),
          S++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function ml(i) {
  const e = new ym(i),
    t = [],
    n = [];
  function r(u) {
    (c.camera = u), (t.length = 0), (n.length = 0);
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a,
  };
}
function bm(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new ml(i)), e.set(r, [o]))
        : s >= a.length
        ? ((o = new ml(i)), a.push(o))
        : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Tm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Am = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function wm(i, e, t) {
  let n = new tc();
  const r = new Ue(),
    s = new Ue(),
    a = new ot(),
    o = new Gu({ depthPacking: tu }),
    l = new Wu(),
    c = {},
    u = t.maxTextureSize,
    h = { [Pn]: Ct, [Ct]: Pn, [fn]: fn },
    f = new gt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ue() },
        radius: { value: 4 },
      },
      vertexShader: Tm,
      fragmentShader: Am,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Zt();
  g.setAttribute(
    'position',
    new nn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const S = new Xt(g, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Pl);
  let d = this.type;
  this.render = function (C, A, R) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      C.length === 0
    )
      return;
    const M = i.getRenderTarget(),
      v = i.getActiveCubeFace(),
      w = i.getActiveMipmapLevel(),
      B = i.state;
    B.setBlending(_n),
      B.buffers.color.setClear(1, 1, 1, 1),
      B.buffers.depth.setTest(!0),
      B.setScissorTest(!1);
    const k = d !== hn && this.type === hn,
      W = d === hn && this.type !== hn;
    for (let j = 0, $ = C.length; j < $; j++) {
      const Q = C[j],
        G = Q.shadow;
      if (G === void 0) {
        console.warn('THREE.WebGLShadowMap:', Q, 'has no shadow.');
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      r.copy(G.mapSize);
      const ae = G.getFrameExtents();
      if (
        (r.multiply(ae),
        s.copy(G.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / ae.x)),
            (r.x = s.x * ae.x),
            (G.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / ae.y)),
            (r.y = s.y * ae.y),
            (G.mapSize.y = s.y))),
        G.map === null || k === !0 || W === !0)
      ) {
        const xe = this.type !== hn ? { minFilter: Yt, magFilter: Yt } : {};
        G.map !== null && G.map.dispose(),
          (G.map = new $t(r.x, r.y, xe)),
          (G.map.texture.name = Q.name + '.shadowMap'),
          G.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(G.map), i.clear();
      const de = G.getViewportCount();
      for (let xe = 0; xe < de; xe++) {
        const Fe = G.getViewport(xe);
        a.set(s.x * Fe.x, s.y * Fe.y, s.x * Fe.z, s.y * Fe.w),
          B.viewport(a),
          G.updateMatrices(Q, xe),
          (n = G.getFrustum()),
          E(A, R, G.camera, Q, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === hn && T(G, R),
        (G.needsUpdate = !1);
    }
    (d = this.type), (p.needsUpdate = !1), i.setRenderTarget(M, v, w);
  };
  function T(C, A) {
    const R = e.update(S);
    f.defines.VSM_SAMPLES !== C.blurSamples &&
      ((f.defines.VSM_SAMPLES = C.blurSamples),
      (m.defines.VSM_SAMPLES = C.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      C.mapPass === null && (C.mapPass = new $t(r.x, r.y)),
      (f.uniforms.shadow_pass.value = C.map.texture),
      (f.uniforms.resolution.value = C.mapSize),
      (f.uniforms.radius.value = C.radius),
      i.setRenderTarget(C.mapPass),
      i.clear(),
      i.renderBufferDirect(A, null, R, f, S, null),
      (m.uniforms.shadow_pass.value = C.mapPass.texture),
      (m.uniforms.resolution.value = C.mapSize),
      (m.uniforms.radius.value = C.radius),
      i.setRenderTarget(C.map),
      i.clear(),
      i.renderBufferDirect(A, null, R, m, S, null);
  }
  function y(C, A, R, M) {
    let v = null;
    const w =
      R.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (w !== void 0) v = w;
    else if (
      ((v = R.isPointLight === !0 ? l : o),
      (i.localClippingEnabled &&
        A.clipShadows === !0 &&
        Array.isArray(A.clippingPlanes) &&
        A.clippingPlanes.length !== 0) ||
        (A.displacementMap && A.displacementScale !== 0) ||
        (A.alphaMap && A.alphaTest > 0) ||
        (A.map && A.alphaTest > 0))
    ) {
      const B = v.uuid,
        k = A.uuid;
      let W = c[B];
      W === void 0 && ((W = {}), (c[B] = W));
      let j = W[k];
      j === void 0 &&
        ((j = v.clone()), (W[k] = j), A.addEventListener('dispose', D)),
        (v = j);
    }
    if (
      ((v.visible = A.visible),
      (v.wireframe = A.wireframe),
      M === hn
        ? (v.side = A.shadowSide !== null ? A.shadowSide : A.side)
        : (v.side = A.shadowSide !== null ? A.shadowSide : h[A.side]),
      (v.alphaMap = A.alphaMap),
      (v.alphaTest = A.alphaTest),
      (v.map = A.map),
      (v.clipShadows = A.clipShadows),
      (v.clippingPlanes = A.clippingPlanes),
      (v.clipIntersection = A.clipIntersection),
      (v.displacementMap = A.displacementMap),
      (v.displacementScale = A.displacementScale),
      (v.displacementBias = A.displacementBias),
      (v.wireframeLinewidth = A.wireframeLinewidth),
      (v.linewidth = A.linewidth),
      R.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const B = i.properties.get(v);
      B.light = R;
    }
    return v;
  }
  function E(C, A, R, M, v) {
    if (C.visible === !1) return;
    if (
      C.layers.test(A.layers) &&
      (C.isMesh || C.isLine || C.isPoints) &&
      (C.castShadow || (C.receiveShadow && v === hn)) &&
      (!C.frustumCulled || n.intersectsObject(C))
    ) {
      C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, C.matrixWorld);
      const k = e.update(C),
        W = C.material;
      if (Array.isArray(W)) {
        const j = k.groups;
        for (let $ = 0, Q = j.length; $ < Q; $++) {
          const G = j[$],
            ae = W[G.materialIndex];
          if (ae && ae.visible) {
            const de = y(C, ae, M, v);
            C.onBeforeShadow(i, C, A, R, k, de, G),
              i.renderBufferDirect(R, null, k, de, C, G),
              C.onAfterShadow(i, C, A, R, k, de, G);
          }
        }
      } else if (W.visible) {
        const j = y(C, W, M, v);
        C.onBeforeShadow(i, C, A, R, k, j, null),
          i.renderBufferDirect(R, null, k, j, C, null),
          C.onAfterShadow(i, C, A, R, k, j, null);
      }
    }
    const B = C.children;
    for (let k = 0, W = B.length; k < W; k++) E(B[k], A, R, M, v);
  }
  function D(C) {
    C.target.removeEventListener('dispose', D);
    for (const R in c) {
      const M = c[R],
        v = C.target.uuid;
      v in M && (M[v].dispose(), delete M[v]);
    }
  }
}
const Cm = {
  [Os]: Bs,
  [zs]: Vs,
  [Hs]: Gs,
  [bi]: ks,
  [Bs]: Os,
  [Vs]: zs,
  [Gs]: Hs,
  [ks]: bi,
};
function Rm(i, e) {
  function t() {
    let L = !1;
    const re = new ot();
    let V = null;
    const Z = new ot(0, 0, 0, 0);
    return {
      setMask: function (ue) {
        V !== ue && !L && (i.colorMask(ue, ue, ue, ue), (V = ue));
      },
      setLocked: function (ue) {
        L = ue;
      },
      setClear: function (ue, ce, De, rt, vt) {
        vt === !0 && ((ue *= rt), (ce *= rt), (De *= rt)),
          re.set(ue, ce, De, rt),
          Z.equals(re) === !1 && (i.clearColor(ue, ce, De, rt), Z.copy(re));
      },
      reset: function () {
        (L = !1), (V = null), Z.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let L = !1,
      re = !1,
      V = null,
      Z = null,
      ue = null;
    return {
      setReversed: function (ce) {
        if (re !== ce) {
          const De = e.get('EXT_clip_control');
          re
            ? De.clipControlEXT(De.LOWER_LEFT_EXT, De.ZERO_TO_ONE_EXT)
            : De.clipControlEXT(De.LOWER_LEFT_EXT, De.NEGATIVE_ONE_TO_ONE_EXT);
          const rt = ue;
          (ue = null), this.setClear(rt);
        }
        re = ce;
      },
      getReversed: function () {
        return re;
      },
      setTest: function (ce) {
        ce ? oe(i.DEPTH_TEST) : Ae(i.DEPTH_TEST);
      },
      setMask: function (ce) {
        V !== ce && !L && (i.depthMask(ce), (V = ce));
      },
      setFunc: function (ce) {
        if ((re && (ce = Cm[ce]), Z !== ce)) {
          switch (ce) {
            case Os:
              i.depthFunc(i.NEVER);
              break;
            case Bs:
              i.depthFunc(i.ALWAYS);
              break;
            case zs:
              i.depthFunc(i.LESS);
              break;
            case bi:
              i.depthFunc(i.LEQUAL);
              break;
            case Hs:
              i.depthFunc(i.EQUAL);
              break;
            case ks:
              i.depthFunc(i.GEQUAL);
              break;
            case Vs:
              i.depthFunc(i.GREATER);
              break;
            case Gs:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Z = ce;
        }
      },
      setLocked: function (ce) {
        L = ce;
      },
      setClear: function (ce) {
        ue !== ce && (re && (ce = 1 - ce), i.clearDepth(ce), (ue = ce));
      },
      reset: function () {
        (L = !1), (V = null), (Z = null), (ue = null), (re = !1);
      },
    };
  }
  function r() {
    let L = !1,
      re = null,
      V = null,
      Z = null,
      ue = null,
      ce = null,
      De = null,
      rt = null,
      vt = null;
    return {
      setTest: function (Ze) {
        L || (Ze ? oe(i.STENCIL_TEST) : Ae(i.STENCIL_TEST));
      },
      setMask: function (Ze) {
        re !== Ze && !L && (i.stencilMask(Ze), (re = Ze));
      },
      setFunc: function (Ze, Bt, rn) {
        (V !== Ze || Z !== Bt || ue !== rn) &&
          (i.stencilFunc(Ze, Bt, rn), (V = Ze), (Z = Bt), (ue = rn));
      },
      setOp: function (Ze, Bt, rn) {
        (ce !== Ze || De !== Bt || rt !== rn) &&
          (i.stencilOp(Ze, Bt, rn), (ce = Ze), (De = Bt), (rt = rn));
      },
      setLocked: function (Ze) {
        L = Ze;
      },
      setClear: function (Ze) {
        vt !== Ze && (i.clearStencil(Ze), (vt = Ze));
      },
      reset: function () {
        (L = !1),
          (re = null),
          (V = null),
          (Z = null),
          (ue = null),
          (ce = null),
          (De = null),
          (rt = null),
          (vt = null);
      },
    };
  }
  const s = new t(),
    a = new n(),
    o = new r(),
    l = new WeakMap(),
    c = new WeakMap();
  let u = {},
    h = {},
    f = new WeakMap(),
    m = [],
    g = null,
    S = !1,
    p = null,
    d = null,
    T = null,
    y = null,
    E = null,
    D = null,
    C = null,
    A = new ze(0, 0, 0),
    R = 0,
    M = !1,
    v = null,
    w = null,
    B = null,
    k = null,
    W = null;
  const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1,
    Q = 0;
  const G = i.getParameter(i.VERSION);
  G.indexOf('WebGL') !== -1
    ? ((Q = parseFloat(/^WebGL (\d)/.exec(G)[1])), ($ = Q >= 1))
    : G.indexOf('OpenGL ES') !== -1 &&
      ((Q = parseFloat(/^OpenGL ES (\d)/.exec(G)[1])), ($ = Q >= 2));
  let ae = null,
    de = {};
  const xe = i.getParameter(i.SCISSOR_BOX),
    Fe = i.getParameter(i.VIEWPORT),
    Je = new ot().fromArray(xe),
    q = new ot().fromArray(Fe);
  function ne(L, re, V, Z) {
    const ue = new Uint8Array(4),
      ce = i.createTexture();
    i.bindTexture(L, ce),
      i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let De = 0; De < V; De++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(re, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, ue)
        : i.texImage2D(
            re + De,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            ue,
          );
    return ce;
  }
  const ge = {};
  (ge[i.TEXTURE_2D] = ne(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (ge[i.TEXTURE_CUBE_MAP] = ne(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (ge[i.TEXTURE_2D_ARRAY] = ne(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (ge[i.TEXTURE_3D] = ne(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    oe(i.DEPTH_TEST),
    a.setFunc(bi),
    He(!1),
    ke(vo),
    oe(i.CULL_FACE),
    P(_n);
  function oe(L) {
    u[L] !== !0 && (i.enable(L), (u[L] = !0));
  }
  function Ae(L) {
    u[L] !== !1 && (i.disable(L), (u[L] = !1));
  }
  function Pe(L, re) {
    return h[L] !== re
      ? (i.bindFramebuffer(L, re),
        (h[L] = re),
        L === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = re),
        L === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = re),
        !0)
      : !1;
  }
  function Oe(L, re) {
    let V = m,
      Z = !1;
    if (L) {
      (V = f.get(re)), V === void 0 && ((V = []), f.set(re, V));
      const ue = L.textures;
      if (V.length !== ue.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let ce = 0, De = ue.length; ce < De; ce++)
          V[ce] = i.COLOR_ATTACHMENT0 + ce;
        (V.length = ue.length), (Z = !0);
      }
    } else V[0] !== i.BACK && ((V[0] = i.BACK), (Z = !0));
    Z && i.drawBuffers(V);
  }
  function it(L) {
    return g !== L ? (i.useProgram(L), (g = L), !0) : !1;
  }
  const Ge = {
    [Yn]: i.FUNC_ADD,
    [Uc]: i.FUNC_SUBTRACT,
    [Ic]: i.FUNC_REVERSE_SUBTRACT,
  };
  (Ge[Nc] = i.MIN), (Ge[Fc] = i.MAX);
  const at = {
    [Oc]: i.ZERO,
    [Bc]: i.ONE,
    [zc]: i.SRC_COLOR,
    [Ns]: i.SRC_ALPHA,
    [Xc]: i.SRC_ALPHA_SATURATE,
    [Gc]: i.DST_COLOR,
    [kc]: i.DST_ALPHA,
    [Hc]: i.ONE_MINUS_SRC_COLOR,
    [Fs]: i.ONE_MINUS_SRC_ALPHA,
    [Wc]: i.ONE_MINUS_DST_COLOR,
    [Vc]: i.ONE_MINUS_DST_ALPHA,
    [qc]: i.CONSTANT_COLOR,
    [Yc]: i.ONE_MINUS_CONSTANT_COLOR,
    [$c]: i.CONSTANT_ALPHA,
    [Kc]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function P(L, re, V, Z, ue, ce, De, rt, vt, Ze) {
    if (L === _n) {
      S === !0 && (Ae(i.BLEND), (S = !1));
      return;
    }
    if ((S === !1 && (oe(i.BLEND), (S = !0)), L !== Lc)) {
      if (L !== p || Ze !== M) {
        if (
          ((d !== Yn || E !== Yn) &&
            (i.blendEquation(i.FUNC_ADD), (d = Yn), (E = Yn)),
          Ze)
        )
          switch (L) {
            case Si:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Is:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case xo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case So:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', L);
              break;
          }
        else
          switch (L) {
            case Si:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case Is:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case xo:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case So:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', L);
              break;
          }
        (T = null),
          (y = null),
          (D = null),
          (C = null),
          A.set(0, 0, 0),
          (R = 0),
          (p = L),
          (M = Ze);
      }
      return;
    }
    (ue = ue || re),
      (ce = ce || V),
      (De = De || Z),
      (re !== d || ue !== E) &&
        (i.blendEquationSeparate(Ge[re], Ge[ue]), (d = re), (E = ue)),
      (V !== T || Z !== y || ce !== D || De !== C) &&
        (i.blendFuncSeparate(at[V], at[Z], at[ce], at[De]),
        (T = V),
        (y = Z),
        (D = ce),
        (C = De)),
      (rt.equals(A) === !1 || vt !== R) &&
        (i.blendColor(rt.r, rt.g, rt.b, vt), A.copy(rt), (R = vt)),
      (p = L),
      (M = !1);
  }
  function Lt(L, re) {
    L.side === fn ? Ae(i.CULL_FACE) : oe(i.CULL_FACE);
    let V = L.side === Ct;
    re && (V = !V),
      He(V),
      L.blending === Si && L.transparent === !1
        ? P(_n)
        : P(
            L.blending,
            L.blendEquation,
            L.blendSrc,
            L.blendDst,
            L.blendEquationAlpha,
            L.blendSrcAlpha,
            L.blendDstAlpha,
            L.blendColor,
            L.blendAlpha,
            L.premultipliedAlpha,
          ),
      a.setFunc(L.depthFunc),
      a.setTest(L.depthTest),
      a.setMask(L.depthWrite),
      s.setMask(L.colorWrite);
    const Z = L.stencilWrite;
    o.setTest(Z),
      Z &&
        (o.setMask(L.stencilWriteMask),
        o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask),
        o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)),
      tt(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits),
      L.alphaToCoverage === !0
        ? oe(i.SAMPLE_ALPHA_TO_COVERAGE)
        : Ae(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function He(L) {
    v !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), (v = L));
  }
  function ke(L) {
    L !== Rc
      ? (oe(i.CULL_FACE),
        L !== w &&
          (L === vo
            ? i.cullFace(i.BACK)
            : L === Pc
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : Ae(i.CULL_FACE),
      (w = L);
  }
  function Se(L) {
    L !== B && ($ && i.lineWidth(L), (B = L));
  }
  function tt(L, re, V) {
    L
      ? (oe(i.POLYGON_OFFSET_FILL),
        (k !== re || W !== V) && (i.polygonOffset(re, V), (k = re), (W = V)))
      : Ae(i.POLYGON_OFFSET_FILL);
  }
  function Me(L) {
    L ? oe(i.SCISSOR_TEST) : Ae(i.SCISSOR_TEST);
  }
  function b(L) {
    L === void 0 && (L = i.TEXTURE0 + j - 1),
      ae !== L && (i.activeTexture(L), (ae = L));
  }
  function _(L, re, V) {
    V === void 0 && (ae === null ? (V = i.TEXTURE0 + j - 1) : (V = ae));
    let Z = de[V];
    Z === void 0 && ((Z = { type: void 0, texture: void 0 }), (de[V] = Z)),
      (Z.type !== L || Z.texture !== re) &&
        (ae !== V && (i.activeTexture(V), (ae = V)),
        i.bindTexture(L, re || ge[L]),
        (Z.type = L),
        (Z.texture = re));
  }
  function F() {
    const L = de[ae];
    L !== void 0 &&
      L.type !== void 0 &&
      (i.bindTexture(L.type, null), (L.type = void 0), (L.texture = void 0));
  }
  function K() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function J() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function X() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function ve() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function le() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function fe() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function We() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function te() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function pe() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function be() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error('THREE.WebGLState:', L);
    }
  }
  function we(L) {
    Je.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), Je.copy(L));
  }
  function me(L) {
    q.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), q.copy(L));
  }
  function Ve(L, re) {
    let V = c.get(re);
    V === void 0 && ((V = new WeakMap()), c.set(re, V));
    let Z = V.get(L);
    Z === void 0 && ((Z = i.getUniformBlockIndex(re, L.name)), V.set(L, Z));
  }
  function Ie(L, re) {
    const Z = c.get(re).get(L);
    l.get(re) !== Z &&
      (i.uniformBlockBinding(re, Z, L.__bindingPointIndex), l.set(re, Z));
  }
  function Qe() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (u = {}),
      (ae = null),
      (de = {}),
      (h = {}),
      (f = new WeakMap()),
      (m = []),
      (g = null),
      (S = !1),
      (p = null),
      (d = null),
      (T = null),
      (y = null),
      (E = null),
      (D = null),
      (C = null),
      (A = new ze(0, 0, 0)),
      (R = 0),
      (M = !1),
      (v = null),
      (w = null),
      (B = null),
      (k = null),
      (W = null),
      Je.set(0, 0, i.canvas.width, i.canvas.height),
      q.set(0, 0, i.canvas.width, i.canvas.height),
      s.reset(),
      a.reset(),
      o.reset();
  }
  return {
    buffers: { color: s, depth: a, stencil: o },
    enable: oe,
    disable: Ae,
    bindFramebuffer: Pe,
    drawBuffers: Oe,
    useProgram: it,
    setBlending: P,
    setMaterial: Lt,
    setFlipSided: He,
    setCullFace: ke,
    setLineWidth: Se,
    setPolygonOffset: tt,
    setScissorTest: Me,
    activeTexture: b,
    bindTexture: _,
    unbindTexture: F,
    compressedTexImage2D: K,
    compressedTexImage3D: J,
    texImage2D: pe,
    texImage3D: be,
    updateUBOMapping: Ve,
    uniformBlockBinding: Ie,
    texStorage2D: We,
    texStorage3D: te,
    texSubImage2D: X,
    texSubImage3D: ve,
    compressedTexSubImage2D: le,
    compressedTexSubImage3D: fe,
    scissor: we,
    viewport: me,
    reset: Qe,
  };
}
function Pm(i, e, t, n, r, s, a) {
  const o = e.has('WEBGL_multisampled_render_to_texture')
      ? e.get('WEBGL_multisampled_render_to_texture')
      : null,
    l =
      typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Ue(),
    u = new WeakMap();
  let h;
  const f = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function g(b, _) {
    return m ? new OffscreenCanvas(b, _) : Ji('canvas');
  }
  function S(b, _, F) {
    let K = 1;
    const J = Me(b);
    if (
      ((J.width > F || J.height > F) && (K = F / Math.max(J.width, J.height)),
      K < 1)
    )
      if (
        (typeof HTMLImageElement < 'u' && b instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && b instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && b instanceof ImageBitmap) ||
        (typeof VideoFrame < 'u' && b instanceof VideoFrame)
      ) {
        const X = Math.floor(K * J.width),
          ve = Math.floor(K * J.height);
        h === void 0 && (h = g(X, ve));
        const le = _ ? g(X, ve) : h;
        return (
          (le.width = X),
          (le.height = ve),
          le.getContext('2d').drawImage(b, 0, 0, X, ve),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              J.width +
              'x' +
              J.height +
              ') to (' +
              X +
              'x' +
              ve +
              ').',
          ),
          le
        );
      } else
        return (
          'data' in b &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                J.width +
                'x' +
                J.height +
                ').',
            ),
          b
        );
    return b;
  }
  function p(b) {
    return b.generateMipmaps;
  }
  function d(b) {
    i.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : b.isWebGL3DRenderTarget
      ? i.TEXTURE_3D
      : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture
      ? i.TEXTURE_2D_ARRAY
      : i.TEXTURE_2D;
  }
  function y(b, _, F, K, J = !1) {
    if (b !== null) {
      if (i[b] !== void 0) return i[b];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          b +
          "'",
      );
    }
    let X = _;
    if (
      (_ === i.RED &&
        (F === i.FLOAT && (X = i.R32F),
        F === i.HALF_FLOAT && (X = i.R16F),
        F === i.UNSIGNED_BYTE && (X = i.R8)),
      _ === i.RED_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.R8UI),
        F === i.UNSIGNED_SHORT && (X = i.R16UI),
        F === i.UNSIGNED_INT && (X = i.R32UI),
        F === i.BYTE && (X = i.R8I),
        F === i.SHORT && (X = i.R16I),
        F === i.INT && (X = i.R32I)),
      _ === i.RG &&
        (F === i.FLOAT && (X = i.RG32F),
        F === i.HALF_FLOAT && (X = i.RG16F),
        F === i.UNSIGNED_BYTE && (X = i.RG8)),
      _ === i.RG_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RG8UI),
        F === i.UNSIGNED_SHORT && (X = i.RG16UI),
        F === i.UNSIGNED_INT && (X = i.RG32UI),
        F === i.BYTE && (X = i.RG8I),
        F === i.SHORT && (X = i.RG16I),
        F === i.INT && (X = i.RG32I)),
      _ === i.RGB_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RGB8UI),
        F === i.UNSIGNED_SHORT && (X = i.RGB16UI),
        F === i.UNSIGNED_INT && (X = i.RGB32UI),
        F === i.BYTE && (X = i.RGB8I),
        F === i.SHORT && (X = i.RGB16I),
        F === i.INT && (X = i.RGB32I)),
      _ === i.RGBA_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RGBA8UI),
        F === i.UNSIGNED_SHORT && (X = i.RGBA16UI),
        F === i.UNSIGNED_INT && (X = i.RGBA32UI),
        F === i.BYTE && (X = i.RGBA8I),
        F === i.SHORT && (X = i.RGBA16I),
        F === i.INT && (X = i.RGBA32I)),
      _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5),
      _ === i.RGBA)
    ) {
      const ve = J ? Wr : qe.getTransfer(K);
      F === i.FLOAT && (X = i.RGBA32F),
        F === i.HALF_FLOAT && (X = i.RGBA16F),
        F === i.UNSIGNED_BYTE && (X = ve === je ? i.SRGB8_ALPHA8 : i.RGBA8),
        F === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4),
        F === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (
      (X === i.R16F ||
        X === i.R32F ||
        X === i.RG16F ||
        X === i.RG32F ||
        X === i.RGBA16F ||
        X === i.RGBA32F) &&
        e.get('EXT_color_buffer_float'),
      X
    );
  }
  function E(b, _) {
    let F;
    return (
      b
        ? _ === null || _ === Jn || _ === wi
          ? (F = i.DEPTH24_STENCIL8)
          : _ === pn
          ? (F = i.DEPTH32F_STENCIL8)
          : _ === ji &&
            ((F = i.DEPTH24_STENCIL8),
            console.warn(
              'DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.',
            ))
        : _ === null || _ === Jn || _ === wi
        ? (F = i.DEPTH_COMPONENT24)
        : _ === pn
        ? (F = i.DEPTH_COMPONENT32F)
        : _ === ji && (F = i.DEPTH_COMPONENT16),
      F
    );
  }
  function D(b, _) {
    return p(b) === !0 ||
      (b.isFramebufferTexture && b.minFilter !== Yt && b.minFilter !== tn)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : b.mipmaps !== void 0 && b.mipmaps.length > 0
      ? b.mipmaps.length
      : b.isCompressedTexture && Array.isArray(b.image)
      ? _.mipmaps.length
      : 1;
  }
  function C(b) {
    const _ = b.target;
    _.removeEventListener('dispose', C), R(_), _.isVideoTexture && u.delete(_);
  }
  function A(b) {
    const _ = b.target;
    _.removeEventListener('dispose', A), v(_);
  }
  function R(b) {
    const _ = n.get(b);
    if (_.__webglInit === void 0) return;
    const F = b.source,
      K = f.get(F);
    if (K) {
      const J = K[_.__cacheKey];
      J.usedTimes--,
        J.usedTimes === 0 && M(b),
        Object.keys(K).length === 0 && f.delete(F);
    }
    n.remove(b);
  }
  function M(b) {
    const _ = n.get(b);
    i.deleteTexture(_.__webglTexture);
    const F = b.source,
      K = f.get(F);
    delete K[_.__cacheKey], a.memory.textures--;
  }
  function v(b) {
    const _ = n.get(b);
    if (
      (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)),
      b.isWebGLCubeRenderTarget)
    )
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(_.__webglFramebuffer[K]))
          for (let J = 0; J < _.__webglFramebuffer[K].length; J++)
            i.deleteFramebuffer(_.__webglFramebuffer[K][J]);
        else i.deleteFramebuffer(_.__webglFramebuffer[K]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let K = 0; K < _.__webglFramebuffer.length; K++)
          i.deleteFramebuffer(_.__webglFramebuffer[K]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let K = 0; K < _.__webglColorRenderbuffer.length; K++)
          _.__webglColorRenderbuffer[K] &&
            i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);
      _.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = b.textures;
    for (let K = 0, J = F.length; K < J; K++) {
      const X = n.get(F[K]);
      X.__webglTexture &&
        (i.deleteTexture(X.__webglTexture), a.memory.textures--),
        n.remove(F[K]);
    }
    n.remove(b);
  }
  let w = 0;
  function B() {
    w = 0;
  }
  function k() {
    const b = w;
    return (
      b >= r.maxTextures &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            b +
            ' texture units while this GPU supports only ' +
            r.maxTextures,
        ),
      (w += 1),
      b
    );
  }
  function W(b) {
    const _ = [];
    return (
      _.push(b.wrapS),
      _.push(b.wrapT),
      _.push(b.wrapR || 0),
      _.push(b.magFilter),
      _.push(b.minFilter),
      _.push(b.anisotropy),
      _.push(b.internalFormat),
      _.push(b.format),
      _.push(b.type),
      _.push(b.generateMipmaps),
      _.push(b.premultiplyAlpha),
      _.push(b.flipY),
      _.push(b.unpackAlignment),
      _.push(b.colorSpace),
      _.join()
    );
  }
  function j(b, _) {
    const F = n.get(b);
    if (
      (b.isVideoTexture && Se(b),
      b.isRenderTargetTexture === !1 &&
        b.version > 0 &&
        F.__version !== b.version)
    ) {
      const K = b.image;
      if (K === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.',
        );
      else if (K.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete',
        );
      else {
        q(F, b, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function $(b, _) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      q(F, b, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function Q(b, _) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      q(F, b, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function G(b, _) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      ne(F, b, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const ae = { [qs]: i.REPEAT, [Kn]: i.CLAMP_TO_EDGE, [Ys]: i.MIRRORED_REPEAT },
    de = {
      [Yt]: i.NEAREST,
      [Qc]: i.NEAREST_MIPMAP_NEAREST,
      [hr]: i.NEAREST_MIPMAP_LINEAR,
      [tn]: i.LINEAR,
      [ns]: i.LINEAR_MIPMAP_NEAREST,
      [Zn]: i.LINEAR_MIPMAP_LINEAR,
    },
    xe = {
      [ru]: i.NEVER,
      [uu]: i.ALWAYS,
      [su]: i.LESS,
      [Gl]: i.LEQUAL,
      [au]: i.EQUAL,
      [cu]: i.GEQUAL,
      [ou]: i.GREATER,
      [lu]: i.NOTEQUAL,
    };
  function Fe(b, _) {
    if (
      (_.type === pn &&
        e.has('OES_texture_float_linear') === !1 &&
        (_.magFilter === tn ||
          _.magFilter === ns ||
          _.magFilter === hr ||
          _.magFilter === Zn ||
          _.minFilter === tn ||
          _.minFilter === ns ||
          _.minFilter === hr ||
          _.minFilter === Zn) &&
        console.warn(
          'THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.',
        ),
      i.texParameteri(b, i.TEXTURE_WRAP_S, ae[_.wrapS]),
      i.texParameteri(b, i.TEXTURE_WRAP_T, ae[_.wrapT]),
      (b === i.TEXTURE_3D || b === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(b, i.TEXTURE_WRAP_R, ae[_.wrapR]),
      i.texParameteri(b, i.TEXTURE_MAG_FILTER, de[_.magFilter]),
      i.texParameteri(b, i.TEXTURE_MIN_FILTER, de[_.minFilter]),
      _.compareFunction &&
        (i.texParameteri(b, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(b, i.TEXTURE_COMPARE_FUNC, xe[_.compareFunction])),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      if (
        _.magFilter === Yt ||
        (_.minFilter !== hr && _.minFilter !== Zn) ||
        (_.type === pn && e.has('OES_texture_float_linear') === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = e.get('EXT_texture_filter_anisotropic');
        i.texParameterf(
          b,
          F.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy()),
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy);
      }
    }
  }
  function Je(b, _) {
    let F = !1;
    b.__webglInit === void 0 &&
      ((b.__webglInit = !0), _.addEventListener('dispose', C));
    const K = _.source;
    let J = f.get(K);
    J === void 0 && ((J = {}), f.set(K, J));
    const X = W(_);
    if (X !== b.__cacheKey) {
      J[X] === void 0 &&
        ((J[X] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (F = !0)),
        J[X].usedTimes++;
      const ve = J[b.__cacheKey];
      ve !== void 0 &&
        (J[b.__cacheKey].usedTimes--, ve.usedTimes === 0 && M(_)),
        (b.__cacheKey = X),
        (b.__webglTexture = J[X].texture);
    }
    return F;
  }
  function q(b, _, F) {
    let K = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (K = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (K = i.TEXTURE_3D);
    const J = Je(b, _),
      X = _.source;
    t.bindTexture(K, b.__webglTexture, i.TEXTURE0 + F);
    const ve = n.get(X);
    if (X.version !== ve.__version || J === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const le = qe.getPrimaries(qe.workingColorSpace),
        fe = _.colorSpace === Rn ? null : qe.getPrimaries(_.colorSpace),
        We =
          _.colorSpace === Rn || le === fe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
      let te = S(_.image, !1, r.maxTextureSize);
      te = tt(_, te);
      const pe = s.convert(_.format, _.colorSpace),
        be = s.convert(_.type);
      let we = y(_.internalFormat, pe, be, _.colorSpace, _.isVideoTexture);
      Fe(K, _);
      let me;
      const Ve = _.mipmaps,
        Ie = _.isVideoTexture !== !0,
        Qe = ve.__version === void 0 || J === !0,
        L = X.dataReady,
        re = D(_, te);
      if (_.isDepthTexture)
        (we = E(_.format === Ci, _.type)),
          Qe &&
            (Ie
              ? t.texStorage2D(i.TEXTURE_2D, 1, we, te.width, te.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  we,
                  te.width,
                  te.height,
                  0,
                  pe,
                  be,
                  null,
                ));
      else if (_.isDataTexture)
        if (Ve.length > 0) {
          Ie &&
            Qe &&
            t.texStorage2D(i.TEXTURE_2D, re, we, Ve[0].width, Ve[0].height);
          for (let V = 0, Z = Ve.length; V < Z; V++)
            (me = Ve[V]),
              Ie
                ? L &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    V,
                    0,
                    0,
                    me.width,
                    me.height,
                    pe,
                    be,
                    me.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    V,
                    we,
                    me.width,
                    me.height,
                    0,
                    pe,
                    be,
                    me.data,
                  );
          _.generateMipmaps = !1;
        } else
          Ie
            ? (Qe && t.texStorage2D(i.TEXTURE_2D, re, we, te.width, te.height),
              L &&
                t.texSubImage2D(
                  i.TEXTURE_2D,
                  0,
                  0,
                  0,
                  te.width,
                  te.height,
                  pe,
                  be,
                  te.data,
                ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                we,
                te.width,
                te.height,
                0,
                pe,
                be,
                te.data,
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ie &&
            Qe &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              re,
              we,
              Ve[0].width,
              Ve[0].height,
              te.depth,
            );
          for (let V = 0, Z = Ve.length; V < Z; V++)
            if (((me = Ve[V]), _.format !== Wt))
              if (pe !== null)
                if (Ie) {
                  if (L)
                    if (_.layerUpdates.size > 0) {
                      const ue = Xo(me.width, me.height, _.format, _.type);
                      for (const ce of _.layerUpdates) {
                        const De = me.data.subarray(
                          (ce * ue) / me.data.BYTES_PER_ELEMENT,
                          ((ce + 1) * ue) / me.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          V,
                          0,
                          0,
                          ce,
                          me.width,
                          me.height,
                          1,
                          pe,
                          De,
                        );
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        V,
                        0,
                        0,
                        0,
                        me.width,
                        me.height,
                        te.depth,
                        pe,
                        me.data,
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    we,
                    me.width,
                    me.height,
                    te.depth,
                    0,
                    me.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                );
            else
              Ie
                ? L &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    0,
                    0,
                    0,
                    me.width,
                    me.height,
                    te.depth,
                    pe,
                    be,
                    me.data,
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    V,
                    we,
                    me.width,
                    me.height,
                    te.depth,
                    0,
                    pe,
                    be,
                    me.data,
                  );
        } else {
          Ie &&
            Qe &&
            t.texStorage2D(i.TEXTURE_2D, re, we, Ve[0].width, Ve[0].height);
          for (let V = 0, Z = Ve.length; V < Z; V++)
            (me = Ve[V]),
              _.format !== Wt
                ? pe !== null
                  ? Ie
                    ? L &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        V,
                        0,
                        0,
                        me.width,
                        me.height,
                        pe,
                        me.data,
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        V,
                        we,
                        me.width,
                        me.height,
                        0,
                        me.data,
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : Ie
                ? L &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    V,
                    0,
                    0,
                    me.width,
                    me.height,
                    pe,
                    be,
                    me.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    V,
                    we,
                    me.width,
                    me.height,
                    0,
                    pe,
                    be,
                    me.data,
                  );
        }
      else if (_.isDataArrayTexture)
        if (Ie) {
          if (
            (Qe &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                re,
                we,
                te.width,
                te.height,
                te.depth,
              ),
            L)
          )
            if (_.layerUpdates.size > 0) {
              const V = Xo(te.width, te.height, _.format, _.type);
              for (const Z of _.layerUpdates) {
                const ue = te.data.subarray(
                  (Z * V) / te.data.BYTES_PER_ELEMENT,
                  ((Z + 1) * V) / te.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  Z,
                  te.width,
                  te.height,
                  1,
                  pe,
                  be,
                  ue,
                );
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                pe,
                be,
                te.data,
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            we,
            te.width,
            te.height,
            te.depth,
            0,
            pe,
            be,
            te.data,
          );
      else if (_.isData3DTexture)
        Ie
          ? (Qe &&
              t.texStorage3D(
                i.TEXTURE_3D,
                re,
                we,
                te.width,
                te.height,
                te.depth,
              ),
            L &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                pe,
                be,
                te.data,
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              we,
              te.width,
              te.height,
              te.depth,
              0,
              pe,
              be,
              te.data,
            );
      else if (_.isFramebufferTexture) {
        if (Qe)
          if (Ie) t.texStorage2D(i.TEXTURE_2D, re, we, te.width, te.height);
          else {
            let V = te.width,
              Z = te.height;
            for (let ue = 0; ue < re; ue++)
              t.texImage2D(i.TEXTURE_2D, ue, we, V, Z, 0, pe, be, null),
                (V >>= 1),
                (Z >>= 1);
          }
      } else if (Ve.length > 0) {
        if (Ie && Qe) {
          const V = Me(Ve[0]);
          t.texStorage2D(i.TEXTURE_2D, re, we, V.width, V.height);
        }
        for (let V = 0, Z = Ve.length; V < Z; V++)
          (me = Ve[V]),
            Ie
              ? L && t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, pe, be, me)
              : t.texImage2D(i.TEXTURE_2D, V, we, pe, be, me);
        _.generateMipmaps = !1;
      } else if (Ie) {
        if (Qe) {
          const V = Me(te);
          t.texStorage2D(i.TEXTURE_2D, re, we, V.width, V.height);
        }
        L && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pe, be, te);
      } else t.texImage2D(i.TEXTURE_2D, 0, we, pe, be, te);
      p(_) && d(K), (ve.__version = X.version), _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function ne(b, _, F) {
    if (_.image.length !== 6) return;
    const K = Je(b, _),
      J = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, b.__webglTexture, i.TEXTURE0 + F);
    const X = n.get(J);
    if (J.version !== X.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const ve = qe.getPrimaries(qe.workingColorSpace),
        le = _.colorSpace === Rn ? null : qe.getPrimaries(_.colorSpace),
        fe =
          _.colorSpace === Rn || ve === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const We = _.isCompressedTexture || _.image[0].isCompressedTexture,
        te = _.image[0] && _.image[0].isDataTexture,
        pe = [];
      for (let Z = 0; Z < 6; Z++)
        !We && !te
          ? (pe[Z] = S(_.image[Z], !0, r.maxCubemapSize))
          : (pe[Z] = te ? _.image[Z].image : _.image[Z]),
          (pe[Z] = tt(_, pe[Z]));
      const be = pe[0],
        we = s.convert(_.format, _.colorSpace),
        me = s.convert(_.type),
        Ve = y(_.internalFormat, we, me, _.colorSpace),
        Ie = _.isVideoTexture !== !0,
        Qe = X.__version === void 0 || K === !0,
        L = J.dataReady;
      let re = D(_, be);
      Fe(i.TEXTURE_CUBE_MAP, _);
      let V;
      if (We) {
        Ie &&
          Qe &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, re, Ve, be.width, be.height);
        for (let Z = 0; Z < 6; Z++) {
          V = pe[Z].mipmaps;
          for (let ue = 0; ue < V.length; ue++) {
            const ce = V[ue];
            _.format !== Wt
              ? we !== null
                ? Ie
                  ? L &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      ue,
                      0,
                      0,
                      ce.width,
                      ce.height,
                      we,
                      ce.data,
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      ue,
                      Ve,
                      ce.width,
                      ce.height,
                      0,
                      ce.data,
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()',
                  )
              : Ie
              ? L &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  ue,
                  0,
                  0,
                  ce.width,
                  ce.height,
                  we,
                  me,
                  ce.data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  ue,
                  Ve,
                  ce.width,
                  ce.height,
                  0,
                  we,
                  me,
                  ce.data,
                );
          }
        }
      } else {
        if (((V = _.mipmaps), Ie && Qe)) {
          V.length > 0 && re++;
          const Z = Me(pe[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, re, Ve, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (te) {
            Ie
              ? L &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  pe[Z].width,
                  pe[Z].height,
                  we,
                  me,
                  pe[Z].data,
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ve,
                  pe[Z].width,
                  pe[Z].height,
                  0,
                  we,
                  me,
                  pe[Z].data,
                );
            for (let ue = 0; ue < V.length; ue++) {
              const De = V[ue].image[Z].image;
              Ie
                ? L &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    ue + 1,
                    0,
                    0,
                    De.width,
                    De.height,
                    we,
                    me,
                    De.data,
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    ue + 1,
                    Ve,
                    De.width,
                    De.height,
                    0,
                    we,
                    me,
                    De.data,
                  );
            }
          } else {
            Ie
              ? L &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  we,
                  me,
                  pe[Z],
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ve,
                  we,
                  me,
                  pe[Z],
                );
            for (let ue = 0; ue < V.length; ue++) {
              const ce = V[ue];
              Ie
                ? L &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    ue + 1,
                    0,
                    0,
                    we,
                    me,
                    ce.image[Z],
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    ue + 1,
                    Ve,
                    we,
                    me,
                    ce.image[Z],
                  );
            }
          }
      }
      p(_) && d(i.TEXTURE_CUBE_MAP),
        (X.__version = J.version),
        _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function ge(b, _, F, K, J, X) {
    const ve = s.convert(F.format, F.colorSpace),
      le = s.convert(F.type),
      fe = y(F.internalFormat, ve, le, F.colorSpace),
      We = n.get(_),
      te = n.get(F);
    if (((te.__renderTarget = _), !We.__hasExternalTextures)) {
      const pe = Math.max(1, _.width >> X),
        be = Math.max(1, _.height >> X);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(J, X, fe, pe, be, _.depth, 0, ve, le, null)
        : t.texImage2D(J, X, fe, pe, be, 0, ve, le, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, b),
      ke(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            K,
            J,
            te.__webglTexture,
            0,
            He(_),
          )
        : (J === i.TEXTURE_2D ||
            (J >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, K, J, te.__webglTexture, X),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function oe(b, _, F) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, b), _.depthBuffer)) {
      const K = _.depthTexture,
        J = K && K.isDepthTexture ? K.type : null,
        X = E(_.stencilBuffer, J),
        ve = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        le = He(_);
      ke(_)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            le,
            X,
            _.width,
            _.height,
          )
        : F
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            le,
            X,
            _.width,
            _.height,
          )
        : i.renderbufferStorage(i.RENDERBUFFER, X, _.width, _.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, ve, i.RENDERBUFFER, b);
    } else {
      const K = _.textures;
      for (let J = 0; J < K.length; J++) {
        const X = K[J],
          ve = s.convert(X.format, X.colorSpace),
          le = s.convert(X.type),
          fe = y(X.internalFormat, ve, le, X.colorSpace),
          We = He(_);
        F && ke(_) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              We,
              fe,
              _.width,
              _.height,
            )
          : ke(_)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              We,
              fe,
              _.width,
              _.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, fe, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ae(b, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        'Depth Texture with cube render targets is not supported',
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, b),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture',
      );
    const K = n.get(_.depthTexture);
    (K.__renderTarget = _),
      (!K.__webglTexture ||
        _.depthTexture.image.width !== _.width ||
        _.depthTexture.image.height !== _.height) &&
        ((_.depthTexture.image.width = _.width),
        (_.depthTexture.image.height = _.height),
        (_.depthTexture.needsUpdate = !0)),
      j(_.depthTexture, 0);
    const J = K.__webglTexture,
      X = He(_);
    if (_.depthTexture.format === Mi)
      ke(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
          );
    else if (_.depthTexture.format === Ci)
      ke(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
          );
    else throw new Error('Unknown depthTexture format');
  }
  function Pe(b) {
    const _ = n.get(b),
      F = b.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== b.depthTexture) {
      const K = b.depthTexture;
      if ((_.__depthDisposeCallback && _.__depthDisposeCallback(), K)) {
        const J = () => {
          delete _.__boundDepthTexture,
            delete _.__depthDisposeCallback,
            K.removeEventListener('dispose', J);
        };
        K.addEventListener('dispose', J), (_.__depthDisposeCallback = J);
      }
      _.__boundDepthTexture = K;
    }
    if (b.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F)
        throw new Error(
          'target.depthTexture not supported in Cube render targets',
        );
      Ae(_.__webglFramebuffer, b);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[K]),
          _.__webglDepthbuffer[K] === void 0)
        )
          (_.__webglDepthbuffer[K] = i.createRenderbuffer()),
            oe(_.__webglDepthbuffer[K], b, !1);
        else {
          const J = b.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            X = _.__webglDepthbuffer[K];
          i.bindRenderbuffer(i.RENDERBUFFER, X),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X);
        }
    } else if (
      (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
      _.__webglDepthbuffer === void 0)
    )
      (_.__webglDepthbuffer = i.createRenderbuffer()),
        oe(_.__webglDepthbuffer, b, !1);
    else {
      const K = b.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT,
        J = _.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, J),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, J);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Oe(b, _, F) {
    const K = n.get(b);
    _ !== void 0 &&
      ge(
        K.__webglFramebuffer,
        b,
        b.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      F !== void 0 && Pe(b);
  }
  function it(b) {
    const _ = b.texture,
      F = n.get(b),
      K = n.get(_);
    b.addEventListener('dispose', A);
    const J = b.textures,
      X = b.isWebGLCubeRenderTarget === !0,
      ve = J.length > 1;
    if (
      (ve ||
        (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()),
        (K.__version = _.version),
        a.memory.textures++),
      X)
    ) {
      F.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          F.__webglFramebuffer[le] = [];
          for (let fe = 0; fe < _.mipmaps.length; fe++)
            F.__webglFramebuffer[le][fe] = i.createFramebuffer();
        } else F.__webglFramebuffer[le] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let le = 0; le < _.mipmaps.length; le++)
          F.__webglFramebuffer[le] = i.createFramebuffer();
      } else F.__webglFramebuffer = i.createFramebuffer();
      if (ve)
        for (let le = 0, fe = J.length; le < fe; le++) {
          const We = n.get(J[le]);
          We.__webglTexture === void 0 &&
            ((We.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (b.samples > 0 && ke(b) === !1) {
        (F.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (F.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let le = 0; le < J.length; le++) {
          const fe = J[le];
          (F.__webglColorRenderbuffer[le] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
          const We = s.convert(fe.format, fe.colorSpace),
            te = s.convert(fe.type),
            pe = y(
              fe.internalFormat,
              We,
              te,
              fe.colorSpace,
              b.isXRRenderTarget === !0,
            ),
            be = He(b);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            be,
            pe,
            b.width,
            b.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + le,
              i.RENDERBUFFER,
              F.__webglColorRenderbuffer[le],
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          b.depthBuffer &&
            ((F.__webglDepthRenderbuffer = i.createRenderbuffer()),
            oe(F.__webglDepthRenderbuffer, b, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture),
        Fe(i.TEXTURE_CUBE_MAP, _);
      for (let le = 0; le < 6; le++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let fe = 0; fe < _.mipmaps.length; fe++)
            ge(
              F.__webglFramebuffer[le][fe],
              b,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + le,
              fe,
            );
        else
          ge(
            F.__webglFramebuffer[le],
            b,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + le,
            0,
          );
      p(_) && d(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ve) {
      for (let le = 0, fe = J.length; le < fe; le++) {
        const We = J[le],
          te = n.get(We);
        t.bindTexture(i.TEXTURE_2D, te.__webglTexture),
          Fe(i.TEXTURE_2D, We),
          ge(
            F.__webglFramebuffer,
            b,
            We,
            i.COLOR_ATTACHMENT0 + le,
            i.TEXTURE_2D,
            0,
          ),
          p(We) && d(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = i.TEXTURE_2D;
      if (
        ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) &&
          (le = b.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(le, K.__webglTexture),
        Fe(le, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let fe = 0; fe < _.mipmaps.length; fe++)
          ge(F.__webglFramebuffer[fe], b, _, i.COLOR_ATTACHMENT0, le, fe);
      else ge(F.__webglFramebuffer, b, _, i.COLOR_ATTACHMENT0, le, 0);
      p(_) && d(le), t.unbindTexture();
    }
    b.depthBuffer && Pe(b);
  }
  function Ge(b) {
    const _ = b.textures;
    for (let F = 0, K = _.length; F < K; F++) {
      const J = _[F];
      if (p(J)) {
        const X = T(b),
          ve = n.get(J).__webglTexture;
        t.bindTexture(X, ve), d(X), t.unbindTexture();
      }
    }
  }
  const at = [],
    P = [];
  function Lt(b) {
    if (b.samples > 0) {
      if (ke(b) === !1) {
        const _ = b.textures,
          F = b.width,
          K = b.height;
        let J = i.COLOR_BUFFER_BIT;
        const X = b.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ve = n.get(b),
          le = _.length > 1;
        if (le)
          for (let fe = 0; fe < _.length; fe++)
            t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + fe,
                i.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + fe,
                i.TEXTURE_2D,
                null,
                0,
              );
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let fe = 0; fe < _.length; fe++) {
          if (
            (b.resolveDepthBuffer &&
              (b.depthBuffer && (J |= i.DEPTH_BUFFER_BIT),
              b.stencilBuffer &&
                b.resolveStencilBuffer &&
                (J |= i.STENCIL_BUFFER_BIT)),
            le)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              ve.__webglColorRenderbuffer[fe],
            );
            const We = n.get(_[fe]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              We,
              0,
            );
          }
          i.blitFramebuffer(0, 0, F, K, 0, 0, F, K, J, i.NEAREST),
            l === !0 &&
              ((at.length = 0),
              (P.length = 0),
              at.push(i.COLOR_ATTACHMENT0 + fe),
              b.depthBuffer &&
                b.resolveDepthBuffer === !1 &&
                (at.push(X),
                P.push(X),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, P)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, at));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          le)
        )
          for (let fe = 0; fe < _.length; fe++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + fe,
                i.RENDERBUFFER,
                ve.__webglColorRenderbuffer[fe],
              );
            const We = n.get(_[fe]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ve.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + fe,
                i.TEXTURE_2D,
                We,
                0,
              );
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer,
        );
      } else if (b.depthBuffer && b.resolveDepthBuffer === !1 && l) {
        const _ = b.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function He(b) {
    return Math.min(r.maxSamples, b.samples);
  }
  function ke(b) {
    const _ = n.get(b);
    return (
      b.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Se(b) {
    const _ = a.render.frame;
    u.get(b) !== _ && (u.set(b, _), b.update());
  }
  function tt(b, _) {
    const F = b.colorSpace,
      K = b.format,
      J = b.type;
    return (
      b.isCompressedTexture === !0 ||
        b.isVideoTexture === !0 ||
        (F !== Ri &&
          F !== Rn &&
          (qe.getTransfer(F) === je
            ? (K !== Wt || J !== Sn) &&
              console.warn(
                'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.',
              )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture color space:',
                F,
              ))),
      _
    );
  }
  function Me(b) {
    return (
      typeof HTMLImageElement < 'u' && b instanceof HTMLImageElement
        ? ((c.width = b.naturalWidth || b.width),
          (c.height = b.naturalHeight || b.height))
        : typeof VideoFrame < 'u' && b instanceof VideoFrame
        ? ((c.width = b.displayWidth), (c.height = b.displayHeight))
        : ((c.width = b.width), (c.height = b.height)),
      c
    );
  }
  (this.allocateTextureUnit = k),
    (this.resetTextureUnits = B),
    (this.setTexture2D = j),
    (this.setTexture2DArray = $),
    (this.setTexture3D = Q),
    (this.setTextureCube = G),
    (this.rebindTextures = Oe),
    (this.setupRenderTarget = it),
    (this.updateRenderTargetMipmap = Ge),
    (this.updateMultisampleRenderTarget = Lt),
    (this.setupDepthRenderbuffer = Pe),
    (this.setupFrameBufferTexture = ge),
    (this.useMultisampledRTT = ke);
}
function Dm(i, e) {
  function t(n, r = Rn) {
    let s;
    const a = qe.getTransfer(r);
    if (n === Sn) return i.UNSIGNED_BYTE;
    if (n === Ba) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === za) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Nl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ul) return i.BYTE;
    if (n === Il) return i.SHORT;
    if (n === ji) return i.UNSIGNED_SHORT;
    if (n === Oa) return i.INT;
    if (n === Jn) return i.UNSIGNED_INT;
    if (n === pn) return i.FLOAT;
    if (n === vn) return i.HALF_FLOAT;
    if (n === Fl) return i.ALPHA;
    if (n === Ol) return i.RGB;
    if (n === Wt) return i.RGBA;
    if (n === Bl) return i.LUMINANCE;
    if (n === zl) return i.LUMINANCE_ALPHA;
    if (n === Mi) return i.DEPTH_COMPONENT;
    if (n === Ci) return i.DEPTH_STENCIL;
    if (n === Hl) return i.RED;
    if (n === Ha) return i.RED_INTEGER;
    if (n === kl) return i.RG;
    if (n === ka) return i.RG_INTEGER;
    if (n === Va) return i.RGBA_INTEGER;
    if (n === Br || n === zr || n === Hr || n === kr)
      if (a === je)
        if (((s = e.get('WEBGL_compressed_texture_s3tc_srgb')), s !== null)) {
          if (n === Br) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === zr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Hr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === kr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get('WEBGL_compressed_texture_s3tc')), s !== null)) {
        if (n === Br) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === zr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Hr) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === kr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === $s || n === Ks || n === Zs || n === js)
      if (((s = e.get('WEBGL_compressed_texture_pvrtc')), s !== null)) {
        if (n === $s) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ks) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Zs) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === js) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Js || n === Qs || n === ea)
      if (((s = e.get('WEBGL_compressed_texture_etc')), s !== null)) {
        if (n === Js || n === Qs)
          return a === je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === ea)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === ta ||
      n === na ||
      n === ia ||
      n === ra ||
      n === sa ||
      n === aa ||
      n === oa ||
      n === la ||
      n === ca ||
      n === ua ||
      n === ha ||
      n === da ||
      n === fa ||
      n === pa
    )
      if (((s = e.get('WEBGL_compressed_texture_astc')), s !== null)) {
        if (n === ta)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === na)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === ia)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ra)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === sa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === aa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === oa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === la)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ca)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ua)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ha)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === da)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === fa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === pa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === Vr || n === ma || n === _a)
      if (((s = e.get('EXT_texture_compression_bptc')), s !== null)) {
        if (n === Vr)
          return a === je
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ma) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === _a) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Vl || n === ga || n === va || n === xa)
      if (((s = e.get('EXT_texture_compression_rgtc')), s !== null)) {
        if (n === Vr) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ga) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === va) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === xa) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === wi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Lm = { type: 'move' };
class Ds {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Dr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Dr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new N()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new N())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Dr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new N()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new N())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: 'connected', data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        a = !0;
        for (const S of e.hand.values()) {
          const p = t.getJointPose(S, n),
            d = this._getHandJoint(c, S);
          p !== null &&
            (d.matrix.fromArray(p.transform.matrix),
            d.matrix.decompose(d.position, d.rotation, d.scale),
            (d.matrixWorldNeedsUpdate = !0),
            (d.jointRadius = p.radius)),
            (d.visible = p !== null);
        }
        const u = c.joints['index-finger-tip'],
          h = c.joints['thumb-tip'],
          f = u.position.distanceTo(h.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && f > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: 'pinchstart',
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Lm)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Dr();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Um = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Im = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Nm {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new Tt(),
        s = e.properties.get(r);
      (s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new gt({
          vertexShader: Um,
          fragmentShader: Im,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Xt(new jr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Fm extends Li {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = 'local-floor',
      l = 1,
      c = null,
      u = null,
      h = null,
      f = null,
      m = null,
      g = null;
    const S = new Nm(),
      p = t.getContextAttributes();
    let d = null,
      T = null;
    const y = [],
      E = [],
      D = new Ue();
    let C = null;
    const A = new Ot();
    A.viewport = new ot();
    const R = new Ot();
    R.viewport = new ot();
    const M = [A, R],
      v = new Ju();
    let w = null,
      B = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (q) {
        let ne = y[q];
        return (
          ne === void 0 && ((ne = new Ds()), (y[q] = ne)),
          ne.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (q) {
        let ne = y[q];
        return (
          ne === void 0 && ((ne = new Ds()), (y[q] = ne)), ne.getGripSpace()
        );
      }),
      (this.getHand = function (q) {
        let ne = y[q];
        return (
          ne === void 0 && ((ne = new Ds()), (y[q] = ne)), ne.getHandSpace()
        );
      });
    function k(q) {
      const ne = E.indexOf(q.inputSource);
      if (ne === -1) return;
      const ge = y[ne];
      ge !== void 0 &&
        (ge.update(q.inputSource, q.frame, c || a),
        ge.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      r.removeEventListener('select', k),
        r.removeEventListener('selectstart', k),
        r.removeEventListener('selectend', k),
        r.removeEventListener('squeeze', k),
        r.removeEventListener('squeezestart', k),
        r.removeEventListener('squeezeend', k),
        r.removeEventListener('end', W),
        r.removeEventListener('inputsourceschange', j);
      for (let q = 0; q < y.length; q++) {
        const ne = E[q];
        ne !== null && ((E[q] = null), y[q].disconnect(ne));
      }
      (w = null),
        (B = null),
        S.reset(),
        e.setRenderTarget(d),
        (m = null),
        (f = null),
        (h = null),
        (r = null),
        (T = null),
        Je.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(C),
        e.setSize(D.width, D.height, !1),
        n.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (q) {
      (s = q),
        n.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.',
          );
    }),
      (this.setReferenceSpaceType = function (q) {
        (o = q),
          n.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.',
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (q) {
        c = q;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (q) {
        if (((r = q), r !== null)) {
          if (
            ((d = e.getRenderTarget()),
            r.addEventListener('select', k),
            r.addEventListener('selectstart', k),
            r.addEventListener('selectend', k),
            r.addEventListener('squeeze', k),
            r.addEventListener('squeezestart', k),
            r.addEventListener('squeezeend', k),
            r.addEventListener('end', W),
            r.addEventListener('inputsourceschange', j),
            p.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (C = e.getPixelRatio()),
            e.getSize(D),
            r.renderState.layers === void 0)
          ) {
            const ne = {
              antialias: p.antialias,
              alpha: !0,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, t, ne)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (T = new $t(m.framebufferWidth, m.framebufferHeight, {
                format: Wt,
                type: Sn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: p.stencil,
              }));
          } else {
            let ne = null,
              ge = null,
              oe = null;
            p.depth &&
              ((oe = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ne = p.stencil ? Ci : Mi),
              (ge = p.stencil ? wi : Jn));
            const Ae = {
              colorFormat: t.RGBA8,
              depthFormat: oe,
              scaleFactor: s,
            };
            (h = new XRWebGLBinding(r, t)),
              (f = h.createProjectionLayer(Ae)),
              r.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (T = new $t(f.textureWidth, f.textureHeight, {
                format: Wt,
                type: Sn,
                depthTexture: new nc(
                  f.textureWidth,
                  f.textureHeight,
                  ge,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ne,
                ),
                stencilBuffer: p.stencil,
                colorSpace: e.outputColorSpace,
                samples: p.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
              }));
          }
          (T.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await r.requestReferenceSpace(o)),
            Je.setContext(r),
            Je.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: 'sessionstart' });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return S.getDepthTexture();
      });
    function j(q) {
      for (let ne = 0; ne < q.removed.length; ne++) {
        const ge = q.removed[ne],
          oe = E.indexOf(ge);
        oe >= 0 && ((E[oe] = null), y[oe].disconnect(ge));
      }
      for (let ne = 0; ne < q.added.length; ne++) {
        const ge = q.added[ne];
        let oe = E.indexOf(ge);
        if (oe === -1) {
          for (let Pe = 0; Pe < y.length; Pe++)
            if (Pe >= E.length) {
              E.push(ge), (oe = Pe);
              break;
            } else if (E[Pe] === null) {
              (E[Pe] = ge), (oe = Pe);
              break;
            }
          if (oe === -1) break;
        }
        const Ae = y[oe];
        Ae && Ae.connect(ge);
      }
    }
    const $ = new N(),
      Q = new N();
    function G(q, ne, ge) {
      $.setFromMatrixPosition(ne.matrixWorld),
        Q.setFromMatrixPosition(ge.matrixWorld);
      const oe = $.distanceTo(Q),
        Ae = ne.projectionMatrix.elements,
        Pe = ge.projectionMatrix.elements,
        Oe = Ae[14] / (Ae[10] - 1),
        it = Ae[14] / (Ae[10] + 1),
        Ge = (Ae[9] + 1) / Ae[5],
        at = (Ae[9] - 1) / Ae[5],
        P = (Ae[8] - 1) / Ae[0],
        Lt = (Pe[8] + 1) / Pe[0],
        He = Oe * P,
        ke = Oe * Lt,
        Se = oe / (-P + Lt),
        tt = Se * -P;
      if (
        (ne.matrixWorld.decompose(q.position, q.quaternion, q.scale),
        q.translateX(tt),
        q.translateZ(Se),
        q.matrixWorld.compose(q.position, q.quaternion, q.scale),
        q.matrixWorldInverse.copy(q.matrixWorld).invert(),
        Ae[10] === -1)
      )
        q.projectionMatrix.copy(ne.projectionMatrix),
          q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const Me = Oe + Se,
          b = it + Se,
          _ = He - tt,
          F = ke + (oe - tt),
          K = ((Ge * it) / b) * Me,
          J = ((at * it) / b) * Me;
        q.projectionMatrix.makePerspective(_, F, K, J, Me, b),
          q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function ae(q, ne) {
      ne === null
        ? q.matrixWorld.copy(q.matrix)
        : q.matrixWorld.multiplyMatrices(ne.matrixWorld, q.matrix),
        q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function (q) {
      if (r === null) return;
      let ne = q.near,
        ge = q.far;
      S.texture !== null &&
        (S.depthNear > 0 && (ne = S.depthNear),
        S.depthFar > 0 && (ge = S.depthFar)),
        (v.near = R.near = A.near = ne),
        (v.far = R.far = A.far = ge),
        (w !== v.near || B !== v.far) &&
          (r.updateRenderState({ depthNear: v.near, depthFar: v.far }),
          (w = v.near),
          (B = v.far)),
        (A.layers.mask = q.layers.mask | 2),
        (R.layers.mask = q.layers.mask | 4),
        (v.layers.mask = A.layers.mask | R.layers.mask);
      const oe = q.parent,
        Ae = v.cameras;
      ae(v, oe);
      for (let Pe = 0; Pe < Ae.length; Pe++) ae(Ae[Pe], oe);
      Ae.length === 2
        ? G(v, A, R)
        : v.projectionMatrix.copy(A.projectionMatrix),
        de(q, v, oe);
    };
    function de(q, ne, ge) {
      ge === null
        ? q.matrix.copy(ne.matrixWorld)
        : (q.matrix.copy(ge.matrixWorld),
          q.matrix.invert(),
          q.matrix.multiply(ne.matrixWorld)),
        q.matrix.decompose(q.position, q.quaternion, q.scale),
        q.updateMatrixWorld(!0),
        q.projectionMatrix.copy(ne.projectionMatrix),
        q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),
        q.isPerspectiveCamera &&
          ((q.fov = Sa * 2 * Math.atan(1 / q.projectionMatrix.elements[5])),
          (q.zoom = 1));
    }
    (this.getCamera = function () {
      return v;
    }),
      (this.getFoveation = function () {
        if (!(f === null && m === null)) return l;
      }),
      (this.setFoveation = function (q) {
        (l = q),
          f !== null && (f.fixedFoveation = q),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = q);
      }),
      (this.hasDepthSensing = function () {
        return S.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return S.getMesh(v);
      });
    let xe = null;
    function Fe(q, ne) {
      if (((u = ne.getViewerPose(c || a)), (g = ne), u !== null)) {
        const ge = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(T, m.framebuffer),
          e.setRenderTarget(T));
        let oe = !1;
        ge.length !== v.cameras.length && ((v.cameras.length = 0), (oe = !0));
        for (let Pe = 0; Pe < ge.length; Pe++) {
          const Oe = ge[Pe];
          let it = null;
          if (m !== null) it = m.getViewport(Oe);
          else {
            const at = h.getViewSubImage(f, Oe);
            (it = at.viewport),
              Pe === 0 &&
                (e.setRenderTargetTextures(
                  T,
                  at.colorTexture,
                  f.ignoreDepthValues ? void 0 : at.depthStencilTexture,
                ),
                e.setRenderTarget(T));
          }
          let Ge = M[Pe];
          Ge === void 0 &&
            ((Ge = new Ot()),
            Ge.layers.enable(Pe),
            (Ge.viewport = new ot()),
            (M[Pe] = Ge)),
            Ge.matrix.fromArray(Oe.transform.matrix),
            Ge.matrix.decompose(Ge.position, Ge.quaternion, Ge.scale),
            Ge.projectionMatrix.fromArray(Oe.projectionMatrix),
            Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),
            Ge.viewport.set(it.x, it.y, it.width, it.height),
            Pe === 0 &&
              (v.matrix.copy(Ge.matrix),
              v.matrix.decompose(v.position, v.quaternion, v.scale)),
            oe === !0 && v.cameras.push(Ge);
        }
        const Ae = r.enabledFeatures;
        if (Ae && Ae.includes('depth-sensing')) {
          const Pe = h.getDepthInformation(ge[0]);
          Pe && Pe.isValid && Pe.texture && S.init(e, Pe, r.renderState);
        }
      }
      for (let ge = 0; ge < y.length; ge++) {
        const oe = E[ge],
          Ae = y[ge];
        oe !== null && Ae !== void 0 && Ae.update(oe, ne, c || a);
      }
      xe && xe(q, ne),
        ne.detectedPlanes &&
          n.dispatchEvent({ type: 'planesdetected', data: ne }),
        (g = null);
    }
    const Je = new sc();
    Je.setAnimationLoop(Fe),
      (this.setAnimationLoop = function (q) {
        xe = q;
      }),
      (this.dispose = function () {});
  }
}
const Wn = new Mn(),
  Om = new lt();
function Bm(i, e) {
  function t(p, d) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, Jl(i)),
      d.isFog
        ? ((p.fogNear.value = d.near), (p.fogFar.value = d.far))
        : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function r(p, d, T, y, E) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial
      ? s(p, d)
      : d.isMeshToonMaterial
      ? (s(p, d), h(p, d))
      : d.isMeshPhongMaterial
      ? (s(p, d), u(p, d))
      : d.isMeshStandardMaterial
      ? (s(p, d), f(p, d), d.isMeshPhysicalMaterial && m(p, d, E))
      : d.isMeshMatcapMaterial
      ? (s(p, d), g(p, d))
      : d.isMeshDepthMaterial
      ? s(p, d)
      : d.isMeshDistanceMaterial
      ? (s(p, d), S(p, d))
      : d.isMeshNormalMaterial
      ? s(p, d)
      : d.isLineBasicMaterial
      ? (a(p, d), d.isLineDashedMaterial && o(p, d))
      : d.isPointsMaterial
      ? l(p, d, T, y)
      : d.isSpriteMaterial
      ? c(p, d)
      : d.isShadowMaterial
      ? (p.color.value.copy(d.color), (p.opacity.value = d.opacity))
      : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function s(p, d) {
    (p.opacity.value = d.opacity),
      d.color && p.diffuse.value.copy(d.color),
      d.emissive &&
        p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && ((p.map.value = d.map), t(d.map, p.mapTransform)),
      d.alphaMap &&
        ((p.alphaMap.value = d.alphaMap), t(d.alphaMap, p.alphaMapTransform)),
      d.bumpMap &&
        ((p.bumpMap.value = d.bumpMap),
        t(d.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = d.bumpScale),
        d.side === Ct && (p.bumpScale.value *= -1)),
      d.normalMap &&
        ((p.normalMap.value = d.normalMap),
        t(d.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(d.normalScale),
        d.side === Ct && p.normalScale.value.negate()),
      d.displacementMap &&
        ((p.displacementMap.value = d.displacementMap),
        t(d.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = d.displacementScale),
        (p.displacementBias.value = d.displacementBias)),
      d.emissiveMap &&
        ((p.emissiveMap.value = d.emissiveMap),
        t(d.emissiveMap, p.emissiveMapTransform)),
      d.specularMap &&
        ((p.specularMap.value = d.specularMap),
        t(d.specularMap, p.specularMapTransform)),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const T = e.get(d),
      y = T.envMap,
      E = T.envMapRotation;
    y &&
      ((p.envMap.value = y),
      Wn.copy(E),
      (Wn.x *= -1),
      (Wn.y *= -1),
      (Wn.z *= -1),
      y.isCubeTexture &&
        y.isRenderTargetTexture === !1 &&
        ((Wn.y *= -1), (Wn.z *= -1)),
      p.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(Wn)),
      (p.flipEnvMap.value =
        y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
      (p.reflectivity.value = d.reflectivity),
      (p.ior.value = d.ior),
      (p.refractionRatio.value = d.refractionRatio)),
      d.lightMap &&
        ((p.lightMap.value = d.lightMap),
        (p.lightMapIntensity.value = d.lightMapIntensity),
        t(d.lightMap, p.lightMapTransform)),
      d.aoMap &&
        ((p.aoMap.value = d.aoMap),
        (p.aoMapIntensity.value = d.aoMapIntensity),
        t(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color),
      (p.opacity.value = d.opacity),
      d.map && ((p.map.value = d.map), t(d.map, p.mapTransform));
  }
  function o(p, d) {
    (p.dashSize.value = d.dashSize),
      (p.totalSize.value = d.dashSize + d.gapSize),
      (p.scale.value = d.scale);
  }
  function l(p, d, T, y) {
    p.diffuse.value.copy(d.color),
      (p.opacity.value = d.opacity),
      (p.size.value = d.size * T),
      (p.scale.value = y * 0.5),
      d.map && ((p.map.value = d.map), t(d.map, p.uvTransform)),
      d.alphaMap &&
        ((p.alphaMap.value = d.alphaMap), t(d.alphaMap, p.alphaMapTransform)),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color),
      (p.opacity.value = d.opacity),
      (p.rotation.value = d.rotation),
      d.map && ((p.map.value = d.map), t(d.map, p.mapTransform)),
      d.alphaMap &&
        ((p.alphaMap.value = d.alphaMap), t(d.alphaMap, p.alphaMapTransform)),
      d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function u(p, d) {
    p.specular.value.copy(d.specular),
      (p.shininess.value = Math.max(d.shininess, 1e-4));
  }
  function h(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function f(p, d) {
    (p.metalness.value = d.metalness),
      d.metalnessMap &&
        ((p.metalnessMap.value = d.metalnessMap),
        t(d.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = d.roughness),
      d.roughnessMap &&
        ((p.roughnessMap.value = d.roughnessMap),
        t(d.roughnessMap, p.roughnessMapTransform)),
      d.envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, T) {
    (p.ior.value = d.ior),
      d.sheen > 0 &&
        (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (p.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap &&
          ((p.sheenColorMap.value = d.sheenColorMap),
          t(d.sheenColorMap, p.sheenColorMapTransform)),
        d.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = d.sheenRoughnessMap),
          t(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      d.clearcoat > 0 &&
        ((p.clearcoat.value = d.clearcoat),
        (p.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap &&
          ((p.clearcoatMap.value = d.clearcoatMap),
          t(d.clearcoatMap, p.clearcoatMapTransform)),
        d.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
          t(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = d.clearcoatNormalMap),
          t(d.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          d.side === Ct && p.clearcoatNormalScale.value.negate())),
      d.dispersion > 0 && (p.dispersion.value = d.dispersion),
      d.iridescence > 0 &&
        ((p.iridescence.value = d.iridescence),
        (p.iridescenceIOR.value = d.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1]),
        d.iridescenceMap &&
          ((p.iridescenceMap.value = d.iridescenceMap),
          t(d.iridescenceMap, p.iridescenceMapTransform)),
        d.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = d.iridescenceThicknessMap),
          t(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      d.transmission > 0 &&
        ((p.transmission.value = d.transmission),
        (p.transmissionSamplerMap.value = T.texture),
        p.transmissionSamplerSize.value.set(T.width, T.height),
        d.transmissionMap &&
          ((p.transmissionMap.value = d.transmissionMap),
          t(d.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = d.thickness),
        d.thicknessMap &&
          ((p.thicknessMap.value = d.thicknessMap),
          t(d.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = d.attenuationDistance),
        p.attenuationColor.value.copy(d.attenuationColor)),
      d.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          d.anisotropy * Math.cos(d.anisotropyRotation),
          d.anisotropy * Math.sin(d.anisotropyRotation),
        ),
        d.anisotropyMap &&
          ((p.anisotropyMap.value = d.anisotropyMap),
          t(d.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = d.specularIntensity),
      p.specularColor.value.copy(d.specularColor),
      d.specularColorMap &&
        ((p.specularColorMap.value = d.specularColorMap),
        t(d.specularColorMap, p.specularColorMapTransform)),
      d.specularIntensityMap &&
        ((p.specularIntensityMap.value = d.specularIntensityMap),
        t(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function S(p, d) {
    const T = e.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
      (p.nearDistance.value = T.shadow.camera.near),
      (p.farDistance.value = T.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function zm(i, e, t, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, y) {
    const E = y.program;
    n.uniformBlockBinding(T, E);
  }
  function c(T, y) {
    let E = r[T.id];
    E === void 0 &&
      (g(T), (E = u(T)), (r[T.id] = E), T.addEventListener('dispose', p));
    const D = y.program;
    n.updateUBOMapping(T, D);
    const C = e.render.frame;
    s[T.id] !== C && (f(T), (s[T.id] = C));
  }
  function u(T) {
    const y = h();
    T.__bindingPointIndex = y;
    const E = i.createBuffer(),
      D = T.__size,
      C = T.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, E),
      i.bufferData(i.UNIFORM_BUFFER, D, C),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, y, E),
      E
    );
  }
  function h() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.',
      ),
      0
    );
  }
  function f(T) {
    const y = r[T.id],
      E = T.uniforms,
      D = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let C = 0, A = E.length; C < A; C++) {
      const R = Array.isArray(E[C]) ? E[C] : [E[C]];
      for (let M = 0, v = R.length; M < v; M++) {
        const w = R[M];
        if (m(w, C, M, D) === !0) {
          const B = w.__offset,
            k = Array.isArray(w.value) ? w.value : [w.value];
          let W = 0;
          for (let j = 0; j < k.length; j++) {
            const $ = k[j],
              Q = S($);
            typeof $ == 'number' || typeof $ == 'boolean'
              ? ((w.__data[0] = $),
                i.bufferSubData(i.UNIFORM_BUFFER, B + W, w.__data))
              : $.isMatrix3
              ? ((w.__data[0] = $.elements[0]),
                (w.__data[1] = $.elements[1]),
                (w.__data[2] = $.elements[2]),
                (w.__data[3] = 0),
                (w.__data[4] = $.elements[3]),
                (w.__data[5] = $.elements[4]),
                (w.__data[6] = $.elements[5]),
                (w.__data[7] = 0),
                (w.__data[8] = $.elements[6]),
                (w.__data[9] = $.elements[7]),
                (w.__data[10] = $.elements[8]),
                (w.__data[11] = 0))
              : ($.toArray(w.__data, W),
                (W += Q.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, B, w.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, y, E, D) {
    const C = T.value,
      A = y + '_' + E;
    if (D[A] === void 0)
      return (
        typeof C == 'number' || typeof C == 'boolean'
          ? (D[A] = C)
          : (D[A] = C.clone()),
        !0
      );
    {
      const R = D[A];
      if (typeof C == 'number' || typeof C == 'boolean') {
        if (R !== C) return (D[A] = C), !0;
      } else if (R.equals(C) === !1) return R.copy(C), !0;
    }
    return !1;
  }
  function g(T) {
    const y = T.uniforms;
    let E = 0;
    const D = 16;
    for (let A = 0, R = y.length; A < R; A++) {
      const M = Array.isArray(y[A]) ? y[A] : [y[A]];
      for (let v = 0, w = M.length; v < w; v++) {
        const B = M[v],
          k = Array.isArray(B.value) ? B.value : [B.value];
        for (let W = 0, j = k.length; W < j; W++) {
          const $ = k[W],
            Q = S($),
            G = E % D,
            ae = G % Q.boundary,
            de = G + ae;
          (E += ae),
            de !== 0 && D - de < Q.storage && (E += D - de),
            (B.__data = new Float32Array(
              Q.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (B.__offset = E),
            (E += Q.storage);
        }
      }
    }
    const C = E % D;
    return C > 0 && (E += D - C), (T.__size = E), (T.__cache = {}), this;
  }
  function S(T) {
    const y = { boundary: 0, storage: 0 };
    return (
      typeof T == 'number' || typeof T == 'boolean'
        ? ((y.boundary = 4), (y.storage = 4))
        : T.isVector2
        ? ((y.boundary = 8), (y.storage = 8))
        : T.isVector3 || T.isColor
        ? ((y.boundary = 16), (y.storage = 12))
        : T.isVector4
        ? ((y.boundary = 16), (y.storage = 16))
        : T.isMatrix3
        ? ((y.boundary = 48), (y.storage = 48))
        : T.isMatrix4
        ? ((y.boundary = 64), (y.storage = 64))
        : T.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.',
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            T,
          ),
      y
    );
  }
  function p(T) {
    const y = T.target;
    y.removeEventListener('dispose', p);
    const E = a.indexOf(y.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function d() {
    for (const T in r) i.deleteBuffer(r[T]);
    (a = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: d };
}
class Hm {
  constructor(e = {}) {
    const {
      canvas: t = du(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = 'default',
      failIfMajorPerformanceCaveat: h = !1,
      reverseDepthBuffer: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let m;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < 'u' &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          'THREE.WebGLRenderer: WebGL 1 is not supported since r163.',
        );
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Uint32Array(4),
      S = new Int32Array(4);
    let p = null,
      d = null;
    const T = [],
      y = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Ft),
      (this.toneMapping = gn),
      (this.toneMappingExposure = 1);
    const E = this;
    let D = !1,
      C = 0,
      A = 0,
      R = null,
      M = -1,
      v = null;
    const w = new ot(),
      B = new ot();
    let k = null;
    const W = new ze(0);
    let j = 0,
      $ = t.width,
      Q = t.height,
      G = 1,
      ae = null,
      de = null;
    const xe = new ot(0, 0, $, Q),
      Fe = new ot(0, 0, $, Q);
    let Je = !1;
    const q = new tc();
    let ne = !1,
      ge = !1;
    const oe = new lt(),
      Ae = new lt(),
      Pe = new N(),
      Oe = new ot(),
      it = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Ge = !1;
    function at() {
      return R === null ? G : 1;
    }
    let P = n;
    function Lt(x, U) {
      return t.getContext(x, U);
    }
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ('setAttribute' in t &&
          t.setAttribute('data-engine', `three.js r${Pa}`),
        t.addEventListener('webglcontextlost', Z, !1),
        t.addEventListener('webglcontextrestored', ue, !1),
        t.addEventListener('webglcontextcreationerror', ce, !1),
        P === null)
      ) {
        const U = 'webgl2';
        if (((P = Lt(U, x)), P === null))
          throw Lt(U)
            ? new Error(
                'Error creating WebGL context with your selected attributes.',
              )
            : new Error('Error creating WebGL context.');
      }
    } catch (x) {
      throw (console.error('THREE.WebGLRenderer: ' + x.message), x);
    }
    let He,
      ke,
      Se,
      tt,
      Me,
      b,
      _,
      F,
      K,
      J,
      X,
      ve,
      le,
      fe,
      We,
      te,
      pe,
      be,
      we,
      me,
      Ve,
      Ie,
      Qe,
      L;
    function re() {
      (He = new Kf(P)),
        He.init(),
        (Ie = new Dm(P, He)),
        (ke = new Gf(P, He, e, Ie)),
        (Se = new Rm(P, He)),
        ke.reverseDepthBuffer && f && Se.buffers.depth.setReversed(!0),
        (tt = new Jf(P)),
        (Me = new _m()),
        (b = new Pm(P, He, Se, Me, ke, Ie, tt)),
        (_ = new Xf(E)),
        (F = new $f(E)),
        (K = new rh(P)),
        (Qe = new kf(P, K)),
        (J = new Zf(P, K, tt, Qe)),
        (X = new ep(P, J, K, tt)),
        (we = new Qf(P, ke, b)),
        (te = new Wf(Me)),
        (ve = new mm(E, _, F, He, ke, Qe, te)),
        (le = new Bm(E, Me)),
        (fe = new vm()),
        (We = new bm(He)),
        (be = new Hf(E, _, F, Se, X, m, l)),
        (pe = new wm(E, X, ke)),
        (L = new zm(P, tt, ke, Se)),
        (me = new Vf(P, He, tt)),
        (Ve = new jf(P, He, tt)),
        (tt.programs = ve.programs),
        (E.capabilities = ke),
        (E.extensions = He),
        (E.properties = Me),
        (E.renderLists = fe),
        (E.shadowMap = pe),
        (E.state = Se),
        (E.info = tt);
    }
    re();
    const V = new Fm(E, P);
    (this.xr = V),
      (this.getContext = function () {
        return P;
      }),
      (this.getContextAttributes = function () {
        return P.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const x = He.get('WEBGL_lose_context');
        x && x.loseContext();
      }),
      (this.forceContextRestore = function () {
        const x = He.get('WEBGL_lose_context');
        x && x.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return G;
      }),
      (this.setPixelRatio = function (x) {
        x !== void 0 && ((G = x), this.setSize($, Q, !1));
      }),
      (this.getSize = function (x) {
        return x.set($, Q);
      }),
      (this.setSize = function (x, U, z = !0) {
        if (V.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ($ = x),
          (Q = U),
          (t.width = Math.floor(x * G)),
          (t.height = Math.floor(U * G)),
          z === !0 && ((t.style.width = x + 'px'), (t.style.height = U + 'px')),
          this.setViewport(0, 0, x, U);
      }),
      (this.getDrawingBufferSize = function (x) {
        return x.set($ * G, Q * G).floor();
      }),
      (this.setDrawingBufferSize = function (x, U, z) {
        ($ = x),
          (Q = U),
          (G = z),
          (t.width = Math.floor(x * z)),
          (t.height = Math.floor(U * z)),
          this.setViewport(0, 0, x, U);
      }),
      (this.getCurrentViewport = function (x) {
        return x.copy(w);
      }),
      (this.getViewport = function (x) {
        return x.copy(xe);
      }),
      (this.setViewport = function (x, U, z, H) {
        x.isVector4 ? xe.set(x.x, x.y, x.z, x.w) : xe.set(x, U, z, H),
          Se.viewport(w.copy(xe).multiplyScalar(G).round());
      }),
      (this.getScissor = function (x) {
        return x.copy(Fe);
      }),
      (this.setScissor = function (x, U, z, H) {
        x.isVector4 ? Fe.set(x.x, x.y, x.z, x.w) : Fe.set(x, U, z, H),
          Se.scissor(B.copy(Fe).multiplyScalar(G).round());
      }),
      (this.getScissorTest = function () {
        return Je;
      }),
      (this.setScissorTest = function (x) {
        Se.setScissorTest((Je = x));
      }),
      (this.setOpaqueSort = function (x) {
        ae = x;
      }),
      (this.setTransparentSort = function (x) {
        de = x;
      }),
      (this.getClearColor = function (x) {
        return x.copy(be.getClearColor());
      }),
      (this.setClearColor = function () {
        be.setClearColor.apply(be, arguments);
      }),
      (this.getClearAlpha = function () {
        return be.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        be.setClearAlpha.apply(be, arguments);
      }),
      (this.clear = function (x = !0, U = !0, z = !0) {
        let H = 0;
        if (x) {
          let I = !1;
          if (R !== null) {
            const ee = R.texture.format;
            I = ee === Va || ee === ka || ee === Ha;
          }
          if (I) {
            const ee = R.texture.type,
              se =
                ee === Sn ||
                ee === Jn ||
                ee === ji ||
                ee === wi ||
                ee === Ba ||
                ee === za,
              he = be.getClearColor(),
              _e = be.getClearAlpha(),
              Ce = he.r,
              Re = he.g,
              Ee = he.b;
            se
              ? ((g[0] = Ce),
                (g[1] = Re),
                (g[2] = Ee),
                (g[3] = _e),
                P.clearBufferuiv(P.COLOR, 0, g))
              : ((S[0] = Ce),
                (S[1] = Re),
                (S[2] = Ee),
                (S[3] = _e),
                P.clearBufferiv(P.COLOR, 0, S));
          } else H |= P.COLOR_BUFFER_BIT;
        }
        U && (H |= P.DEPTH_BUFFER_BIT),
          z &&
            ((H |= P.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          P.clear(H);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener('webglcontextlost', Z, !1),
          t.removeEventListener('webglcontextrestored', ue, !1),
          t.removeEventListener('webglcontextcreationerror', ce, !1),
          be.dispose(),
          fe.dispose(),
          We.dispose(),
          Me.dispose(),
          _.dispose(),
          F.dispose(),
          X.dispose(),
          Qe.dispose(),
          L.dispose(),
          ve.dispose(),
          V.dispose(),
          V.removeEventListener('sessionstart', uo),
          V.removeEventListener('sessionend', ho),
          Nn.stop();
      });
    function Z(x) {
      x.preventDefault(),
        console.log('THREE.WebGLRenderer: Context Lost.'),
        (D = !0);
    }
    function ue() {
      console.log('THREE.WebGLRenderer: Context Restored.'), (D = !1);
      const x = tt.autoReset,
        U = pe.enabled,
        z = pe.autoUpdate,
        H = pe.needsUpdate,
        I = pe.type;
      re(),
        (tt.autoReset = x),
        (pe.enabled = U),
        (pe.autoUpdate = z),
        (pe.needsUpdate = H),
        (pe.type = I);
    }
    function ce(x) {
      console.error(
        'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
        x.statusMessage,
      );
    }
    function De(x) {
      const U = x.target;
      U.removeEventListener('dispose', De), rt(U);
    }
    function rt(x) {
      vt(x), Me.remove(x);
    }
    function vt(x) {
      const U = Me.get(x).programs;
      U !== void 0 &&
        (U.forEach(function (z) {
          ve.releaseProgram(z);
        }),
        x.isShaderMaterial && ve.releaseShaderCache(x));
    }
    this.renderBufferDirect = function (x, U, z, H, I, ee) {
      U === null && (U = it);
      const se = I.isMesh && I.matrixWorld.determinant() < 0,
        he = bc(x, U, z, H, I);
      Se.setMaterial(H, se);
      let _e = z.index,
        Ce = 1;
      if (H.wireframe === !0) {
        if (((_e = J.getWireframeAttribute(z)), _e === void 0)) return;
        Ce = 2;
      }
      const Re = z.drawRange,
        Ee = z.attributes.position;
      let Xe = Re.start * Ce,
        $e = (Re.start + Re.count) * Ce;
      ee !== null &&
        ((Xe = Math.max(Xe, ee.start * Ce)),
        ($e = Math.min($e, (ee.start + ee.count) * Ce))),
        _e !== null
          ? ((Xe = Math.max(Xe, 0)), ($e = Math.min($e, _e.count)))
          : Ee != null &&
            ((Xe = Math.max(Xe, 0)), ($e = Math.min($e, Ee.count)));
      const ct = $e - Xe;
      if (ct < 0 || ct === 1 / 0) return;
      Qe.setup(I, H, he, z, _e);
      let st,
        Ye = me;
      if (
        (_e !== null && ((st = K.get(_e)), (Ye = Ve), Ye.setIndex(st)),
        I.isMesh)
      )
        H.wireframe === !0
          ? (Se.setLineWidth(H.wireframeLinewidth * at()), Ye.setMode(P.LINES))
          : Ye.setMode(P.TRIANGLES);
      else if (I.isLine) {
        let ye = H.linewidth;
        ye === void 0 && (ye = 1),
          Se.setLineWidth(ye * at()),
          I.isLineSegments
            ? Ye.setMode(P.LINES)
            : I.isLineLoop
            ? Ye.setMode(P.LINE_LOOP)
            : Ye.setMode(P.LINE_STRIP);
      } else
        I.isPoints
          ? Ye.setMode(P.POINTS)
          : I.isSprite && Ye.setMode(P.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          Ye.renderMultiDrawInstances(
            I._multiDrawStarts,
            I._multiDrawCounts,
            I._multiDrawCount,
            I._multiDrawInstances,
          );
        else if (He.get('WEBGL_multi_draw'))
          Ye.renderMultiDraw(
            I._multiDrawStarts,
            I._multiDrawCounts,
            I._multiDrawCount,
          );
        else {
          const ye = I._multiDrawStarts,
            _t = I._multiDrawCounts,
            Ke = I._multiDrawCount,
            zt = _e ? K.get(_e).bytesPerElement : 1,
            ei = Me.get(H).currentProgram.getUniforms();
          for (let Rt = 0; Rt < Ke; Rt++)
            ei.setValue(P, '_gl_DrawID', Rt), Ye.render(ye[Rt] / zt, _t[Rt]);
        }
      else if (I.isInstancedMesh) Ye.renderInstances(Xe, ct, I.count);
      else if (z.isInstancedBufferGeometry) {
        const ye = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          _t = Math.min(z.instanceCount, ye);
        Ye.renderInstances(Xe, ct, _t);
      } else Ye.render(Xe, ct);
    };
    function Ze(x, U, z) {
      x.transparent === !0 && x.side === fn && x.forceSinglePass === !1
        ? ((x.side = Ct),
          (x.needsUpdate = !0),
          ur(x, U, z),
          (x.side = Pn),
          (x.needsUpdate = !0),
          ur(x, U, z),
          (x.side = fn))
        : ur(x, U, z);
    }
    (this.compile = function (x, U, z = null) {
      z === null && (z = x),
        (d = We.get(z)),
        d.init(U),
        y.push(d),
        z.traverseVisible(function (I) {
          I.isLight &&
            I.layers.test(U.layers) &&
            (d.pushLight(I), I.castShadow && d.pushShadow(I));
        }),
        x !== z &&
          x.traverseVisible(function (I) {
            I.isLight &&
              I.layers.test(U.layers) &&
              (d.pushLight(I), I.castShadow && d.pushShadow(I));
          }),
        d.setupLights();
      const H = new Set();
      return (
        x.traverse(function (I) {
          if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite)) return;
          const ee = I.material;
          if (ee)
            if (Array.isArray(ee))
              for (let se = 0; se < ee.length; se++) {
                const he = ee[se];
                Ze(he, z, I), H.add(he);
              }
            else Ze(ee, z, I), H.add(ee);
        }),
        y.pop(),
        (d = null),
        H
      );
    }),
      (this.compileAsync = function (x, U, z = null) {
        const H = this.compile(x, U, z);
        return new Promise((I) => {
          function ee() {
            if (
              (H.forEach(function (se) {
                Me.get(se).currentProgram.isReady() && H.delete(se);
              }),
              H.size === 0)
            ) {
              I(x);
              return;
            }
            setTimeout(ee, 10);
          }
          He.get('KHR_parallel_shader_compile') !== null
            ? ee()
            : setTimeout(ee, 10);
        });
      });
    let Bt = null;
    function rn(x) {
      Bt && Bt(x);
    }
    function uo() {
      Nn.stop();
    }
    function ho() {
      Nn.start();
    }
    const Nn = new sc();
    Nn.setAnimationLoop(rn),
      typeof self < 'u' && Nn.setContext(self),
      (this.setAnimationLoop = function (x) {
        (Bt = x), V.setAnimationLoop(x), x === null ? Nn.stop() : Nn.start();
      }),
      V.addEventListener('sessionstart', uo),
      V.addEventListener('sessionend', ho),
      (this.render = function (x, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error(
            'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.',
          );
          return;
        }
        if (D === !0) return;
        if (
          (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(),
          U.parent === null &&
            U.matrixWorldAutoUpdate === !0 &&
            U.updateMatrixWorld(),
          V.enabled === !0 &&
            V.isPresenting === !0 &&
            (V.cameraAutoUpdate === !0 && V.updateCamera(U),
            (U = V.getCamera())),
          x.isScene === !0 && x.onBeforeRender(E, x, U, R),
          (d = We.get(x, y.length)),
          d.init(U),
          y.push(d),
          Ae.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          q.setFromProjectionMatrix(Ae),
          (ge = this.localClippingEnabled),
          (ne = te.init(this.clippingPlanes, ge)),
          (p = fe.get(x, T.length)),
          p.init(),
          T.push(p),
          V.enabled === !0 && V.isPresenting === !0)
        ) {
          const ee = E.xr.getDepthSensingMesh();
          ee !== null && es(ee, U, -1 / 0, E.sortObjects);
        }
        es(x, U, 0, E.sortObjects),
          p.finish(),
          E.sortObjects === !0 && p.sort(ae, de),
          (Ge =
            V.enabled === !1 ||
            V.isPresenting === !1 ||
            V.hasDepthSensing() === !1),
          Ge && be.addToRenderList(p, x),
          this.info.render.frame++,
          ne === !0 && te.beginShadows();
        const z = d.state.shadowsArray;
        pe.render(z, x, U),
          ne === !0 && te.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const H = p.opaque,
          I = p.transmissive;
        if ((d.setupLights(), U.isArrayCamera)) {
          const ee = U.cameras;
          if (I.length > 0)
            for (let se = 0, he = ee.length; se < he; se++) {
              const _e = ee[se];
              po(H, I, x, _e);
            }
          Ge && be.render(x);
          for (let se = 0, he = ee.length; se < he; se++) {
            const _e = ee[se];
            fo(p, x, _e, _e.viewport);
          }
        } else I.length > 0 && po(H, I, x, U), Ge && be.render(x), fo(p, x, U);
        R !== null &&
          (b.updateMultisampleRenderTarget(R), b.updateRenderTargetMipmap(R)),
          x.isScene === !0 && x.onAfterRender(E, x, U),
          Qe.resetDefaultState(),
          (M = -1),
          (v = null),
          y.pop(),
          y.length > 0
            ? ((d = y[y.length - 1]),
              ne === !0 && te.setGlobalState(E.clippingPlanes, d.state.camera))
            : (d = null),
          T.pop(),
          T.length > 0 ? (p = T[T.length - 1]) : (p = null);
      });
    function es(x, U, z, H) {
      if (x.visible === !1) return;
      if (x.layers.test(U.layers)) {
        if (x.isGroup) z = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === !0 && x.update(U);
        else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || q.intersectsSprite(x)) {
            H && Oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ae);
            const se = X.update(x),
              he = x.material;
            he.visible && p.push(x, se, he, z, Oe.z, null);
          }
        } else if (
          (x.isMesh || x.isLine || x.isPoints) &&
          (!x.frustumCulled || q.intersectsObject(x))
        ) {
          const se = X.update(x),
            he = x.material;
          if (
            (H &&
              (x.boundingSphere !== void 0
                ? (x.boundingSphere === null && x.computeBoundingSphere(),
                  Oe.copy(x.boundingSphere.center))
                : (se.boundingSphere === null && se.computeBoundingSphere(),
                  Oe.copy(se.boundingSphere.center)),
              Oe.applyMatrix4(x.matrixWorld).applyMatrix4(Ae)),
            Array.isArray(he))
          ) {
            const _e = se.groups;
            for (let Ce = 0, Re = _e.length; Ce < Re; Ce++) {
              const Ee = _e[Ce],
                Xe = he[Ee.materialIndex];
              Xe && Xe.visible && p.push(x, se, Xe, z, Oe.z, Ee);
            }
          } else he.visible && p.push(x, se, he, z, Oe.z, null);
        }
      }
      const ee = x.children;
      for (let se = 0, he = ee.length; se < he; se++) es(ee[se], U, z, H);
    }
    function fo(x, U, z, H) {
      const I = x.opaque,
        ee = x.transmissive,
        se = x.transparent;
      d.setupLightsView(z),
        ne === !0 && te.setGlobalState(E.clippingPlanes, z),
        H && Se.viewport(w.copy(H)),
        I.length > 0 && cr(I, U, z),
        ee.length > 0 && cr(ee, U, z),
        se.length > 0 && cr(se, U, z),
        Se.buffers.depth.setTest(!0),
        Se.buffers.depth.setMask(!0),
        Se.buffers.color.setMask(!0),
        Se.setPolygonOffset(!1);
    }
    function po(x, U, z, H) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[H.id] === void 0 &&
        (d.state.transmissionRenderTarget[H.id] = new $t(1, 1, {
          generateMipmaps: !0,
          type:
            He.has('EXT_color_buffer_half_float') ||
            He.has('EXT_color_buffer_float')
              ? vn
              : Sn,
          minFilter: Zn,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: qe.workingColorSpace,
        }));
      const ee = d.state.transmissionRenderTarget[H.id],
        se = H.viewport || w;
      ee.setSize(se.z, se.w);
      const he = E.getRenderTarget();
      E.setRenderTarget(ee),
        E.getClearColor(W),
        (j = E.getClearAlpha()),
        j < 1 && E.setClearColor(16777215, 0.5),
        E.clear(),
        Ge && be.render(z);
      const _e = E.toneMapping;
      E.toneMapping = gn;
      const Ce = H.viewport;
      if (
        (H.viewport !== void 0 && (H.viewport = void 0),
        d.setupLightsView(H),
        ne === !0 && te.setGlobalState(E.clippingPlanes, H),
        cr(x, z, H),
        b.updateMultisampleRenderTarget(ee),
        b.updateRenderTargetMipmap(ee),
        He.has('WEBGL_multisampled_render_to_texture') === !1)
      ) {
        let Re = !1;
        for (let Ee = 0, Xe = U.length; Ee < Xe; Ee++) {
          const $e = U[Ee],
            ct = $e.object,
            st = $e.geometry,
            Ye = $e.material,
            ye = $e.group;
          if (Ye.side === fn && ct.layers.test(H.layers)) {
            const _t = Ye.side;
            (Ye.side = Ct),
              (Ye.needsUpdate = !0),
              mo(ct, z, H, st, Ye, ye),
              (Ye.side = _t),
              (Ye.needsUpdate = !0),
              (Re = !0);
          }
        }
        Re === !0 &&
          (b.updateMultisampleRenderTarget(ee), b.updateRenderTargetMipmap(ee));
      }
      E.setRenderTarget(he),
        E.setClearColor(W, j),
        Ce !== void 0 && (H.viewport = Ce),
        (E.toneMapping = _e);
    }
    function cr(x, U, z) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let I = 0, ee = x.length; I < ee; I++) {
        const se = x[I],
          he = se.object,
          _e = se.geometry,
          Ce = H === null ? se.material : H,
          Re = se.group;
        he.layers.test(z.layers) && mo(he, U, z, _e, Ce, Re);
      }
    }
    function mo(x, U, z, H, I, ee) {
      x.onBeforeRender(E, U, z, H, I, ee),
        x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, x.matrixWorld),
        x.normalMatrix.getNormalMatrix(x.modelViewMatrix),
        I.onBeforeRender(E, U, z, H, x, ee),
        I.transparent === !0 && I.side === fn && I.forceSinglePass === !1
          ? ((I.side = Ct),
            (I.needsUpdate = !0),
            E.renderBufferDirect(z, U, H, I, x, ee),
            (I.side = Pn),
            (I.needsUpdate = !0),
            E.renderBufferDirect(z, U, H, I, x, ee),
            (I.side = fn))
          : E.renderBufferDirect(z, U, H, I, x, ee),
        x.onAfterRender(E, U, z, H, I, ee);
    }
    function ur(x, U, z) {
      U.isScene !== !0 && (U = it);
      const H = Me.get(x),
        I = d.state.lights,
        ee = d.state.shadowsArray,
        se = I.state.version,
        he = ve.getParameters(x, I.state, ee, U, z),
        _e = ve.getProgramCacheKey(he);
      let Ce = H.programs;
      (H.environment = x.isMeshStandardMaterial ? U.environment : null),
        (H.fog = U.fog),
        (H.envMap = (x.isMeshStandardMaterial ? F : _).get(
          x.envMap || H.environment,
        )),
        (H.envMapRotation =
          H.environment !== null && x.envMap === null
            ? U.environmentRotation
            : x.envMapRotation),
        Ce === void 0 &&
          (x.addEventListener('dispose', De),
          (Ce = new Map()),
          (H.programs = Ce));
      let Re = Ce.get(_e);
      if (Re !== void 0) {
        if (H.currentProgram === Re && H.lightsStateVersion === se)
          return go(x, he), Re;
      } else
        (he.uniforms = ve.getUniforms(x)),
          x.onBeforeCompile(he, E),
          (Re = ve.acquireProgram(he, _e)),
          Ce.set(_e, Re),
          (H.uniforms = he.uniforms);
      const Ee = H.uniforms;
      return (
        ((!x.isShaderMaterial && !x.isRawShaderMaterial) ||
          x.clipping === !0) &&
          (Ee.clippingPlanes = te.uniform),
        go(x, he),
        (H.needsLights = Ac(x)),
        (H.lightsStateVersion = se),
        H.needsLights &&
          ((Ee.ambientLightColor.value = I.state.ambient),
          (Ee.lightProbe.value = I.state.probe),
          (Ee.directionalLights.value = I.state.directional),
          (Ee.directionalLightShadows.value = I.state.directionalShadow),
          (Ee.spotLights.value = I.state.spot),
          (Ee.spotLightShadows.value = I.state.spotShadow),
          (Ee.rectAreaLights.value = I.state.rectArea),
          (Ee.ltc_1.value = I.state.rectAreaLTC1),
          (Ee.ltc_2.value = I.state.rectAreaLTC2),
          (Ee.pointLights.value = I.state.point),
          (Ee.pointLightShadows.value = I.state.pointShadow),
          (Ee.hemisphereLights.value = I.state.hemi),
          (Ee.directionalShadowMap.value = I.state.directionalShadowMap),
          (Ee.directionalShadowMatrix.value = I.state.directionalShadowMatrix),
          (Ee.spotShadowMap.value = I.state.spotShadowMap),
          (Ee.spotLightMatrix.value = I.state.spotLightMatrix),
          (Ee.spotLightMap.value = I.state.spotLightMap),
          (Ee.pointShadowMap.value = I.state.pointShadowMap),
          (Ee.pointShadowMatrix.value = I.state.pointShadowMatrix)),
        (H.currentProgram = Re),
        (H.uniformsList = null),
        Re
      );
    }
    function _o(x) {
      if (x.uniformsList === null) {
        const U = x.currentProgram.getUniforms();
        x.uniformsList = Gr.seqWithValue(U.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function go(x, U) {
      const z = Me.get(x);
      (z.outputColorSpace = U.outputColorSpace),
        (z.batching = U.batching),
        (z.batchingColor = U.batchingColor),
        (z.instancing = U.instancing),
        (z.instancingColor = U.instancingColor),
        (z.instancingMorph = U.instancingMorph),
        (z.skinning = U.skinning),
        (z.morphTargets = U.morphTargets),
        (z.morphNormals = U.morphNormals),
        (z.morphColors = U.morphColors),
        (z.morphTargetsCount = U.morphTargetsCount),
        (z.numClippingPlanes = U.numClippingPlanes),
        (z.numIntersection = U.numClipIntersection),
        (z.vertexAlphas = U.vertexAlphas),
        (z.vertexTangents = U.vertexTangents),
        (z.toneMapping = U.toneMapping);
    }
    function bc(x, U, z, H, I) {
      U.isScene !== !0 && (U = it), b.resetTextureUnits();
      const ee = U.fog,
        se = H.isMeshStandardMaterial ? U.environment : null,
        he =
          R === null
            ? E.outputColorSpace
            : R.isXRRenderTarget === !0
            ? R.texture.colorSpace
            : Ri,
        _e = (H.isMeshStandardMaterial ? F : _).get(H.envMap || se),
        Ce =
          H.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        Re = !!z.attributes.tangent && (!!H.normalMap || H.anisotropy > 0),
        Ee = !!z.morphAttributes.position,
        Xe = !!z.morphAttributes.normal,
        $e = !!z.morphAttributes.color;
      let ct = gn;
      H.toneMapped &&
        (R === null || R.isXRRenderTarget === !0) &&
        (ct = E.toneMapping);
      const st =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        Ye = st !== void 0 ? st.length : 0,
        ye = Me.get(H),
        _t = d.state.lights;
      if (ne === !0 && (ge === !0 || x !== v)) {
        const Et = x === v && H.id === M;
        te.setState(H, x, Et);
      }
      let Ke = !1;
      H.version === ye.__version
        ? ((ye.needsLights && ye.lightsStateVersion !== _t.state.version) ||
            ye.outputColorSpace !== he ||
            (I.isBatchedMesh && ye.batching === !1) ||
            (!I.isBatchedMesh && ye.batching === !0) ||
            (I.isBatchedMesh &&
              ye.batchingColor === !0 &&
              I.colorTexture === null) ||
            (I.isBatchedMesh &&
              ye.batchingColor === !1 &&
              I.colorTexture !== null) ||
            (I.isInstancedMesh && ye.instancing === !1) ||
            (!I.isInstancedMesh && ye.instancing === !0) ||
            (I.isSkinnedMesh && ye.skinning === !1) ||
            (!I.isSkinnedMesh && ye.skinning === !0) ||
            (I.isInstancedMesh &&
              ye.instancingColor === !0 &&
              I.instanceColor === null) ||
            (I.isInstancedMesh &&
              ye.instancingColor === !1 &&
              I.instanceColor !== null) ||
            (I.isInstancedMesh &&
              ye.instancingMorph === !0 &&
              I.morphTexture === null) ||
            (I.isInstancedMesh &&
              ye.instancingMorph === !1 &&
              I.morphTexture !== null) ||
            ye.envMap !== _e ||
            (H.fog === !0 && ye.fog !== ee) ||
            (ye.numClippingPlanes !== void 0 &&
              (ye.numClippingPlanes !== te.numPlanes ||
                ye.numIntersection !== te.numIntersection)) ||
            ye.vertexAlphas !== Ce ||
            ye.vertexTangents !== Re ||
            ye.morphTargets !== Ee ||
            ye.morphNormals !== Xe ||
            ye.morphColors !== $e ||
            ye.toneMapping !== ct ||
            ye.morphTargetsCount !== Ye) &&
          (Ke = !0)
        : ((Ke = !0), (ye.__version = H.version));
      let zt = ye.currentProgram;
      Ke === !0 && (zt = ur(H, U, I));
      let ei = !1,
        Rt = !1,
        zi = !1;
      const nt = zt.getUniforms(),
        Ut = ye.uniforms;
      if (
        (Se.useProgram(zt.program) && ((ei = !0), (Rt = !0), (zi = !0)),
        H.id !== M && ((M = H.id), (Rt = !0)),
        ei || v !== x)
      ) {
        Se.buffers.depth.getReversed()
          ? (oe.copy(x.projectionMatrix),
            pu(oe),
            mu(oe),
            nt.setValue(P, 'projectionMatrix', oe))
          : nt.setValue(P, 'projectionMatrix', x.projectionMatrix),
          nt.setValue(P, 'viewMatrix', x.matrixWorldInverse);
        const At = nt.map.cameraPosition;
        At !== void 0 &&
          At.setValue(P, Pe.setFromMatrixPosition(x.matrixWorld)),
          ke.logarithmicDepthBuffer &&
            nt.setValue(
              P,
              'logDepthBufFC',
              2 / (Math.log(x.far + 1) / Math.LN2),
            ),
          (H.isMeshPhongMaterial ||
            H.isMeshToonMaterial ||
            H.isMeshLambertMaterial ||
            H.isMeshBasicMaterial ||
            H.isMeshStandardMaterial ||
            H.isShaderMaterial) &&
            nt.setValue(P, 'isOrthographic', x.isOrthographicCamera === !0),
          v !== x && ((v = x), (Rt = !0), (zi = !0));
      }
      if (I.isSkinnedMesh) {
        nt.setOptional(P, I, 'bindMatrix'),
          nt.setOptional(P, I, 'bindMatrixInverse');
        const Et = I.skeleton;
        Et &&
          (Et.boneTexture === null && Et.computeBoneTexture(),
          nt.setValue(P, 'boneTexture', Et.boneTexture, b));
      }
      I.isBatchedMesh &&
        (nt.setOptional(P, I, 'batchingTexture'),
        nt.setValue(P, 'batchingTexture', I._matricesTexture, b),
        nt.setOptional(P, I, 'batchingIdTexture'),
        nt.setValue(P, 'batchingIdTexture', I._indirectTexture, b),
        nt.setOptional(P, I, 'batchingColorTexture'),
        I._colorsTexture !== null &&
          nt.setValue(P, 'batchingColorTexture', I._colorsTexture, b));
      const It = z.morphAttributes;
      if (
        ((It.position !== void 0 ||
          It.normal !== void 0 ||
          It.color !== void 0) &&
          we.update(I, z, zt),
        (Rt || ye.receiveShadow !== I.receiveShadow) &&
          ((ye.receiveShadow = I.receiveShadow),
          nt.setValue(P, 'receiveShadow', I.receiveShadow)),
        H.isMeshGouraudMaterial &&
          H.envMap !== null &&
          ((Ut.envMap.value = _e),
          (Ut.flipEnvMap.value =
            _e.isCubeTexture && _e.isRenderTargetTexture === !1 ? -1 : 1)),
        H.isMeshStandardMaterial &&
          H.envMap === null &&
          U.environment !== null &&
          (Ut.envMapIntensity.value = U.environmentIntensity),
        Rt &&
          (nt.setValue(P, 'toneMappingExposure', E.toneMappingExposure),
          ye.needsLights && Tc(Ut, zi),
          ee && H.fog === !0 && le.refreshFogUniforms(Ut, ee),
          le.refreshMaterialUniforms(
            Ut,
            H,
            G,
            Q,
            d.state.transmissionRenderTarget[x.id],
          ),
          Gr.upload(P, _o(ye), Ut, b)),
        H.isShaderMaterial &&
          H.uniformsNeedUpdate === !0 &&
          (Gr.upload(P, _o(ye), Ut, b), (H.uniformsNeedUpdate = !1)),
        H.isSpriteMaterial && nt.setValue(P, 'center', I.center),
        nt.setValue(P, 'modelViewMatrix', I.modelViewMatrix),
        nt.setValue(P, 'normalMatrix', I.normalMatrix),
        nt.setValue(P, 'modelMatrix', I.matrixWorld),
        H.isShaderMaterial || H.isRawShaderMaterial)
      ) {
        const Et = H.uniformsGroups;
        for (let At = 0, ts = Et.length; At < ts; At++) {
          const Fn = Et[At];
          L.update(Fn, zt), L.bind(Fn, zt);
        }
      }
      return zt;
    }
    function Tc(x, U) {
      (x.ambientLightColor.needsUpdate = U),
        (x.lightProbe.needsUpdate = U),
        (x.directionalLights.needsUpdate = U),
        (x.directionalLightShadows.needsUpdate = U),
        (x.pointLights.needsUpdate = U),
        (x.pointLightShadows.needsUpdate = U),
        (x.spotLights.needsUpdate = U),
        (x.spotLightShadows.needsUpdate = U),
        (x.rectAreaLights.needsUpdate = U),
        (x.hemisphereLights.needsUpdate = U);
    }
    function Ac(x) {
      return (
        x.isMeshLambertMaterial ||
        x.isMeshToonMaterial ||
        x.isMeshPhongMaterial ||
        x.isMeshStandardMaterial ||
        x.isShadowMaterial ||
        (x.isShaderMaterial && x.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return C;
    }),
      (this.getActiveMipmapLevel = function () {
        return A;
      }),
      (this.getRenderTarget = function () {
        return R;
      }),
      (this.setRenderTargetTextures = function (x, U, z) {
        (Me.get(x.texture).__webglTexture = U),
          (Me.get(x.depthTexture).__webglTexture = z);
        const H = Me.get(x);
        (H.__hasExternalTextures = !0),
          (H.__autoAllocateDepthBuffer = z === void 0),
          H.__autoAllocateDepthBuffer ||
            (He.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided',
              ),
              (H.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (x, U) {
        const z = Me.get(x);
        (z.__webglFramebuffer = U), (z.__useDefaultFramebuffer = U === void 0);
      }),
      (this.setRenderTarget = function (x, U = 0, z = 0) {
        (R = x), (C = U), (A = z);
        let H = !0,
          I = null,
          ee = !1,
          se = !1;
        if (x) {
          const _e = Me.get(x);
          if (_e.__useDefaultFramebuffer !== void 0)
            Se.bindFramebuffer(P.FRAMEBUFFER, null), (H = !1);
          else if (_e.__webglFramebuffer === void 0) b.setupRenderTarget(x);
          else if (_e.__hasExternalTextures)
            b.rebindTextures(
              x,
              Me.get(x.texture).__webglTexture,
              Me.get(x.depthTexture).__webglTexture,
            );
          else if (x.depthBuffer) {
            const Ee = x.depthTexture;
            if (_e.__boundDepthTexture !== Ee) {
              if (
                Ee !== null &&
                Me.has(Ee) &&
                (x.width !== Ee.image.width || x.height !== Ee.image.height)
              )
                throw new Error(
                  'WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.',
                );
              b.setupDepthRenderbuffer(x);
            }
          }
          const Ce = x.texture;
          (Ce.isData3DTexture ||
            Ce.isDataArrayTexture ||
            Ce.isCompressedArrayTexture) &&
            (se = !0);
          const Re = Me.get(x).__webglFramebuffer;
          x.isWebGLCubeRenderTarget
            ? (Array.isArray(Re[U]) ? (I = Re[U][z]) : (I = Re[U]), (ee = !0))
            : x.samples > 0 && b.useMultisampledRTT(x) === !1
            ? (I = Me.get(x).__webglMultisampledFramebuffer)
            : Array.isArray(Re)
            ? (I = Re[z])
            : (I = Re),
            w.copy(x.viewport),
            B.copy(x.scissor),
            (k = x.scissorTest);
        } else
          w.copy(xe).multiplyScalar(G).floor(),
            B.copy(Fe).multiplyScalar(G).floor(),
            (k = Je);
        if (
          (Se.bindFramebuffer(P.FRAMEBUFFER, I) && H && Se.drawBuffers(x, I),
          Se.viewport(w),
          Se.scissor(B),
          Se.setScissorTest(k),
          ee)
        ) {
          const _e = Me.get(x.texture);
          P.framebufferTexture2D(
            P.FRAMEBUFFER,
            P.COLOR_ATTACHMENT0,
            P.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            _e.__webglTexture,
            z,
          );
        } else if (se) {
          const _e = Me.get(x.texture),
            Ce = U || 0;
          P.framebufferTextureLayer(
            P.FRAMEBUFFER,
            P.COLOR_ATTACHMENT0,
            _e.__webglTexture,
            z || 0,
            Ce,
          );
        }
        M = -1;
      }),
      (this.readRenderTargetPixels = function (x, U, z, H, I, ee, se) {
        if (!(x && x.isWebGLRenderTarget)) {
          console.error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
          );
          return;
        }
        let he = Me.get(x).__webglFramebuffer;
        if ((x.isWebGLCubeRenderTarget && se !== void 0 && (he = he[se]), he)) {
          Se.bindFramebuffer(P.FRAMEBUFFER, he);
          try {
            const _e = x.texture,
              Ce = _e.format,
              Re = _e.type;
            if (!ke.textureFormatReadable(Ce)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.',
              );
              return;
            }
            if (!ke.textureTypeReadable(Re)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.',
              );
              return;
            }
            U >= 0 &&
              U <= x.width - H &&
              z >= 0 &&
              z <= x.height - I &&
              P.readPixels(U, z, H, I, Ie.convert(Ce), Ie.convert(Re), ee);
          } finally {
            const _e = R !== null ? Me.get(R).__webglFramebuffer : null;
            Se.bindFramebuffer(P.FRAMEBUFFER, _e);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        x,
        U,
        z,
        H,
        I,
        ee,
        se,
      ) {
        if (!(x && x.isWebGLRenderTarget))
          throw new Error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
          );
        let he = Me.get(x).__webglFramebuffer;
        if ((x.isWebGLCubeRenderTarget && se !== void 0 && (he = he[se]), he)) {
          const _e = x.texture,
            Ce = _e.format,
            Re = _e.type;
          if (!ke.textureFormatReadable(Ce))
            throw new Error(
              'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.',
            );
          if (!ke.textureTypeReadable(Re))
            throw new Error(
              'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.',
            );
          if (U >= 0 && U <= x.width - H && z >= 0 && z <= x.height - I) {
            Se.bindFramebuffer(P.FRAMEBUFFER, he);
            const Ee = P.createBuffer();
            P.bindBuffer(P.PIXEL_PACK_BUFFER, Ee),
              P.bufferData(P.PIXEL_PACK_BUFFER, ee.byteLength, P.STREAM_READ),
              P.readPixels(U, z, H, I, Ie.convert(Ce), Ie.convert(Re), 0);
            const Xe = R !== null ? Me.get(R).__webglFramebuffer : null;
            Se.bindFramebuffer(P.FRAMEBUFFER, Xe);
            const $e = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              P.flush(),
              await fu(P, $e, 4),
              P.bindBuffer(P.PIXEL_PACK_BUFFER, Ee),
              P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, ee),
              P.deleteBuffer(Ee),
              P.deleteSync($e),
              ee
            );
          } else
            throw new Error(
              'THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.',
            );
        }
      }),
      (this.copyFramebufferToTexture = function (x, U = null, z = 0) {
        x.isTexture !== !0 &&
          (mi(
            'WebGLRenderer: copyFramebufferToTexture function signature has changed.',
          ),
          (U = arguments[0] || null),
          (x = arguments[1]));
        const H = Math.pow(2, -z),
          I = Math.floor(x.image.width * H),
          ee = Math.floor(x.image.height * H),
          se = U !== null ? U.x : 0,
          he = U !== null ? U.y : 0;
        b.setTexture2D(x, 0),
          P.copyTexSubImage2D(P.TEXTURE_2D, z, 0, 0, se, he, I, ee),
          Se.unbindTexture();
      });
    const wc = P.createFramebuffer(),
      Cc = P.createFramebuffer();
    (this.copyTextureToTexture = function (
      x,
      U,
      z = null,
      H = null,
      I = 0,
      ee = null,
    ) {
      x.isTexture !== !0 &&
        (mi(
          'WebGLRenderer: copyTextureToTexture function signature has changed.',
        ),
        (H = arguments[0] || null),
        (x = arguments[1]),
        (U = arguments[2]),
        (ee = arguments[3] || 0),
        (z = null)),
        ee === null &&
          (I !== 0
            ? (mi(
                'WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.',
              ),
              (ee = I),
              (I = 0))
            : (ee = 0));
      let se, he, _e, Ce, Re, Ee, Xe, $e, ct;
      const st = x.isCompressedTexture ? x.mipmaps[ee] : x.image;
      if (z !== null)
        (se = z.max.x - z.min.x),
          (he = z.max.y - z.min.y),
          (_e = z.isBox3 ? z.max.z - z.min.z : 1),
          (Ce = z.min.x),
          (Re = z.min.y),
          (Ee = z.isBox3 ? z.min.z : 0);
      else {
        const It = Math.pow(2, -I);
        (se = Math.floor(st.width * It)),
          (he = Math.floor(st.height * It)),
          x.isDataArrayTexture
            ? (_e = st.depth)
            : x.isData3DTexture
            ? (_e = Math.floor(st.depth * It))
            : (_e = 1),
          (Ce = 0),
          (Re = 0),
          (Ee = 0);
      }
      H !== null
        ? ((Xe = H.x), ($e = H.y), (ct = H.z))
        : ((Xe = 0), ($e = 0), (ct = 0));
      const Ye = Ie.convert(U.format),
        ye = Ie.convert(U.type);
      let _t;
      U.isData3DTexture
        ? (b.setTexture3D(U, 0), (_t = P.TEXTURE_3D))
        : U.isDataArrayTexture || U.isCompressedArrayTexture
        ? (b.setTexture2DArray(U, 0), (_t = P.TEXTURE_2D_ARRAY))
        : (b.setTexture2D(U, 0), (_t = P.TEXTURE_2D)),
        P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, U.flipY),
        P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha),
        P.pixelStorei(P.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Ke = P.getParameter(P.UNPACK_ROW_LENGTH),
        zt = P.getParameter(P.UNPACK_IMAGE_HEIGHT),
        ei = P.getParameter(P.UNPACK_SKIP_PIXELS),
        Rt = P.getParameter(P.UNPACK_SKIP_ROWS),
        zi = P.getParameter(P.UNPACK_SKIP_IMAGES);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, st.width),
        P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, st.height),
        P.pixelStorei(P.UNPACK_SKIP_PIXELS, Ce),
        P.pixelStorei(P.UNPACK_SKIP_ROWS, Re),
        P.pixelStorei(P.UNPACK_SKIP_IMAGES, Ee);
      const nt = x.isDataArrayTexture || x.isData3DTexture,
        Ut = U.isDataArrayTexture || U.isData3DTexture;
      if (x.isDepthTexture) {
        const It = Me.get(x),
          Et = Me.get(U),
          At = Me.get(It.__renderTarget),
          ts = Me.get(Et.__renderTarget);
        Se.bindFramebuffer(P.READ_FRAMEBUFFER, At.__webglFramebuffer),
          Se.bindFramebuffer(P.DRAW_FRAMEBUFFER, ts.__webglFramebuffer);
        for (let Fn = 0; Fn < _e; Fn++)
          nt &&
            (P.framebufferTextureLayer(
              P.READ_FRAMEBUFFER,
              P.COLOR_ATTACHMENT0,
              Me.get(x).__webglTexture,
              I,
              Ee + Fn,
            ),
            P.framebufferTextureLayer(
              P.DRAW_FRAMEBUFFER,
              P.COLOR_ATTACHMENT0,
              Me.get(U).__webglTexture,
              ee,
              ct + Fn,
            )),
            P.blitFramebuffer(
              Ce,
              Re,
              se,
              he,
              Xe,
              $e,
              se,
              he,
              P.DEPTH_BUFFER_BIT,
              P.NEAREST,
            );
        Se.bindFramebuffer(P.READ_FRAMEBUFFER, null),
          Se.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || x.isRenderTargetTexture || Me.has(x)) {
        const It = Me.get(x),
          Et = Me.get(U);
        Se.bindFramebuffer(P.READ_FRAMEBUFFER, wc),
          Se.bindFramebuffer(P.DRAW_FRAMEBUFFER, Cc);
        for (let At = 0; At < _e; At++)
          nt
            ? P.framebufferTextureLayer(
                P.READ_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                It.__webglTexture,
                I,
                Ee + At,
              )
            : P.framebufferTexture2D(
                P.READ_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                P.TEXTURE_2D,
                It.__webglTexture,
                I,
              ),
            Ut
              ? P.framebufferTextureLayer(
                  P.DRAW_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  Et.__webglTexture,
                  ee,
                  ct + At,
                )
              : P.framebufferTexture2D(
                  P.DRAW_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  P.TEXTURE_2D,
                  Et.__webglTexture,
                  ee,
                ),
            I !== 0
              ? P.blitFramebuffer(
                  Ce,
                  Re,
                  se,
                  he,
                  Xe,
                  $e,
                  se,
                  he,
                  P.COLOR_BUFFER_BIT,
                  P.NEAREST,
                )
              : Ut
              ? P.copyTexSubImage3D(_t, ee, Xe, $e, ct + At, Ce, Re, se, he)
              : P.copyTexSubImage2D(_t, ee, Xe, $e, Ce, Re, se, he);
        Se.bindFramebuffer(P.READ_FRAMEBUFFER, null),
          Se.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
      } else
        Ut
          ? x.isDataTexture || x.isData3DTexture
            ? P.texSubImage3D(_t, ee, Xe, $e, ct, se, he, _e, Ye, ye, st.data)
            : U.isCompressedArrayTexture
            ? P.compressedTexSubImage3D(
                _t,
                ee,
                Xe,
                $e,
                ct,
                se,
                he,
                _e,
                Ye,
                st.data,
              )
            : P.texSubImage3D(_t, ee, Xe, $e, ct, se, he, _e, Ye, ye, st)
          : x.isDataTexture
          ? P.texSubImage2D(P.TEXTURE_2D, ee, Xe, $e, se, he, Ye, ye, st.data)
          : x.isCompressedTexture
          ? P.compressedTexSubImage2D(
              P.TEXTURE_2D,
              ee,
              Xe,
              $e,
              st.width,
              st.height,
              Ye,
              st.data,
            )
          : P.texSubImage2D(P.TEXTURE_2D, ee, Xe, $e, se, he, Ye, ye, st);
      P.pixelStorei(P.UNPACK_ROW_LENGTH, Ke),
        P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, zt),
        P.pixelStorei(P.UNPACK_SKIP_PIXELS, ei),
        P.pixelStorei(P.UNPACK_SKIP_ROWS, Rt),
        P.pixelStorei(P.UNPACK_SKIP_IMAGES, zi),
        ee === 0 && U.generateMipmaps && P.generateMipmap(_t),
        Se.unbindTexture();
    }),
      (this.copyTextureToTexture3D = function (
        x,
        U,
        z = null,
        H = null,
        I = 0,
      ) {
        return (
          x.isTexture !== !0 &&
            (mi(
              'WebGLRenderer: copyTextureToTexture3D function signature has changed.',
            ),
            (z = arguments[0] || null),
            (H = arguments[1] || null),
            (x = arguments[2]),
            (U = arguments[3]),
            (I = arguments[4] || 0)),
          mi(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.',
          ),
          this.copyTextureToTexture(x, U, z, H, I)
        );
      }),
      (this.initRenderTarget = function (x) {
        Me.get(x).__webglFramebuffer === void 0 && b.setupRenderTarget(x);
      }),
      (this.initTexture = function (x) {
        x.isCubeTexture
          ? b.setTextureCube(x, 0)
          : x.isData3DTexture
          ? b.setTexture3D(x, 0)
          : x.isDataArrayTexture || x.isCompressedArrayTexture
          ? b.setTexture2DArray(x, 0)
          : b.setTexture2D(x, 0),
          Se.unbindTexture();
      }),
      (this.resetState = function () {
        (C = 0), (A = 0), (R = null), Se.reset(), Qe.reset();
      }),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this }),
        );
  }
  get coordinateSystem() {
    return mn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorspace = qe._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = qe._getUnpackColorSpace());
  }
}
class Ni {
  constructor() {
    (this.isPass = !0),
      (this.enabled = !0),
      (this.needsSwap = !0),
      (this.clear = !1),
      (this.renderToScreen = !1);
  }
  setSize() {}
  render() {
    console.error('THREE.Pass: .render() must be implemented in derived pass.');
  }
  dispose() {}
}
const km = new ic(-1, 1, 1, -1, 0, 1);
class Vm extends Zt {
  constructor() {
    super(),
      this.setAttribute('position', new ht([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
      this.setAttribute('uv', new ht([0, 2, 0, 0, 2, 0], 2));
  }
}
const Gm = new Vm();
class $a {
  constructor(e) {
    this._mesh = new Xt(Gm, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, km);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class Wm extends Ni {
  constructor(e, t, n = null, r = null, s = null) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.overrideMaterial = n),
      (this.clearColor = r),
      (this.clearAlpha = s),
      (this.clear = !0),
      (this.clearDepth = !1),
      (this.needsSwap = !1),
      (this._oldClearColor = new ze());
  }
  render(e, t, n) {
    const r = e.autoClear;
    e.autoClear = !1;
    let s, a;
    this.overrideMaterial !== null &&
      ((a = this.scene.overrideMaterial),
      (this.scene.overrideMaterial = this.overrideMaterial)),
      this.clearColor !== null &&
        (e.getClearColor(this._oldClearColor),
        e.setClearColor(this.clearColor, e.getClearAlpha())),
      this.clearAlpha !== null &&
        ((s = e.getClearAlpha()), e.setClearAlpha(this.clearAlpha)),
      this.clearDepth == !0 && e.clearDepth(),
      e.setRenderTarget(this.renderToScreen ? null : n),
      this.clear === !0 &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      e.render(this.scene, this.camera),
      this.clearColor !== null && e.setClearColor(this._oldClearColor),
      this.clearAlpha !== null && e.setClearAlpha(s),
      this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
      (e.autoClear = r);
  }
}
const uc = {
  name: 'CopyShader',
  uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
};
class Xm extends Ni {
  constructor(e, t) {
    super(),
      (this.textureID = t !== void 0 ? t : 'tDiffuse'),
      e instanceof gt
        ? ((this.uniforms = e.uniforms), (this.material = e))
        : e &&
          ((this.uniforms = Qi.clone(e.uniforms)),
          (this.material = new gt({
            name: e.name !== void 0 ? e.name : 'unspecified',
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
          }))),
      (this.fsQuad = new $a(this.material));
  }
  render(e, t, n) {
    this.uniforms[this.textureID] &&
      (this.uniforms[this.textureID].value = n.texture),
      (this.fsQuad.material = this.material),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class _l extends Ni {
  constructor(e, t) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.clear = !0),
      (this.needsSwap = !1),
      (this.inverse = !1);
  }
  render(e, t, n) {
    const r = e.getContext(),
      s = e.state;
    s.buffers.color.setMask(!1),
      s.buffers.depth.setMask(!1),
      s.buffers.color.setLocked(!0),
      s.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? ((a = 0), (o = 1)) : ((a = 1), (o = 0)),
      s.buffers.stencil.setTest(!0),
      s.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
      s.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295),
      s.buffers.stencil.setClear(o),
      s.buffers.stencil.setLocked(!0),
      e.setRenderTarget(n),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      e.setRenderTarget(t),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      s.buffers.color.setLocked(!1),
      s.buffers.depth.setLocked(!1),
      s.buffers.color.setMask(!0),
      s.buffers.depth.setMask(!0),
      s.buffers.stencil.setLocked(!1),
      s.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295),
      s.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
      s.buffers.stencil.setLocked(!0);
  }
}
class qm extends Ni {
  constructor() {
    super(), (this.needsSwap = !1);
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Ym {
  constructor(e, t) {
    if (
      ((this.renderer = e),
      (this._pixelRatio = e.getPixelRatio()),
      t === void 0)
    ) {
      const n = e.getSize(new Ue());
      (this._width = n.width),
        (this._height = n.height),
        (t = new $t(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
          { type: vn },
        )),
        (t.texture.name = 'EffectComposer.rt1');
    } else (this._width = t.width), (this._height = t.height);
    (this.renderTarget1 = t),
      (this.renderTarget2 = t.clone()),
      (this.renderTarget2.texture.name = 'EffectComposer.rt2'),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2),
      (this.renderToScreen = !0),
      (this.passes = []),
      (this.copyPass = new Xm(uc)),
      (this.copyPass.material.blending = _n),
      (this.clock = new qa());
  }
  swapBuffers() {
    const e = this.readBuffer;
    (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
  }
  addPass(e) {
    this.passes.push(e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio,
      );
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio,
      );
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let r = 0, s = this.passes.length; r < s; r++) {
      const a = this.passes[r];
      if (a.enabled !== !1) {
        if (
          ((a.renderToScreen =
            this.renderToScreen && this.isLastEnabledPass(r)),
          a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
          a.needsSwap)
        ) {
          if (n) {
            const o = this.renderer.getContext(),
              l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295),
              this.copyPass.render(
                this.renderer,
                this.writeBuffer,
                this.readBuffer,
                e,
              ),
              l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        _l !== void 0 &&
          (a instanceof _l ? (n = !0) : a instanceof qm && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Ue());
      (this._pixelRatio = this.renderer.getPixelRatio()),
        (this._width = t.width),
        (this._height = t.height),
        (e = this.renderTarget1.clone()),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio,
        );
    }
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      (this.renderTarget1 = e),
      (this.renderTarget2 = e.clone()),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
    const n = this._width * this._pixelRatio,
      r = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
    for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, r);
  }
  setPixelRatio(e) {
    (this._pixelRatio = e), this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      this.copyPass.dispose();
  }
}
const $m = {
  name: 'OutputShader',
  uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } },
  vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`,
};
class Km extends Ni {
  constructor() {
    super();
    const e = $m;
    (this.uniforms = Qi.clone(e.uniforms)),
      (this.material = new Vu({
        name: e.name,
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader,
      })),
      (this.fsQuad = new $a(this.material)),
      (this._outputColorSpace = null),
      (this._toneMapping = null);
  }
  render(e, t, n) {
    (this.uniforms.tDiffuse.value = n.texture),
      (this.uniforms.toneMappingExposure.value = e.toneMappingExposure),
      (this._outputColorSpace !== e.outputColorSpace ||
        this._toneMapping !== e.toneMapping) &&
        ((this._outputColorSpace = e.outputColorSpace),
        (this._toneMapping = e.toneMapping),
        (this.material.defines = {}),
        qe.getTransfer(this._outputColorSpace) === je &&
          (this.material.defines.SRGB_TRANSFER = ''),
        this._toneMapping === Da
          ? (this.material.defines.LINEAR_TONE_MAPPING = '')
          : this._toneMapping === La
          ? (this.material.defines.REINHARD_TONE_MAPPING = '')
          : this._toneMapping === Ua
          ? (this.material.defines.CINEON_TONE_MAPPING = '')
          : this._toneMapping === Ia
          ? (this.material.defines.ACES_FILMIC_TONE_MAPPING = '')
          : this._toneMapping === Na
          ? (this.material.defines.AGX_TONE_MAPPING = '')
          : this._toneMapping === Fa &&
            (this.material.defines.NEUTRAL_TONE_MAPPING = ''),
        (this.material.needsUpdate = !0)),
      this.renderToScreen === !0
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const Zm = {
  name: 'LuminosityHighPassShader',
  shaderID: 'luminosityHighPass',
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new ze(0) },
    defaultOpacity: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
};
class Di extends Ni {
  constructor(e, t, n, r) {
    super(),
      (this.strength = t !== void 0 ? t : 1),
      (this.radius = n),
      (this.threshold = r),
      (this.resolution = e !== void 0 ? new Ue(e.x, e.y) : new Ue(256, 256)),
      (this.clearColor = new ze(0, 0, 0)),
      (this.renderTargetsHorizontal = []),
      (this.renderTargetsVertical = []),
      (this.nMips = 5);
    let s = Math.round(this.resolution.x / 2),
      a = Math.round(this.resolution.y / 2);
    (this.renderTargetBright = new $t(s, a, { type: vn })),
      (this.renderTargetBright.texture.name = 'UnrealBloomPass.bright'),
      (this.renderTargetBright.texture.generateMipmaps = !1);
    for (let h = 0; h < this.nMips; h++) {
      const f = new $t(s, a, { type: vn });
      (f.texture.name = 'UnrealBloomPass.h' + h),
        (f.texture.generateMipmaps = !1),
        this.renderTargetsHorizontal.push(f);
      const m = new $t(s, a, { type: vn });
      (m.texture.name = 'UnrealBloomPass.v' + h),
        (m.texture.generateMipmaps = !1),
        this.renderTargetsVertical.push(m),
        (s = Math.round(s / 2)),
        (a = Math.round(a / 2));
    }
    const o = Zm;
    (this.highPassUniforms = Qi.clone(o.uniforms)),
      (this.highPassUniforms.luminosityThreshold.value = r),
      (this.highPassUniforms.smoothWidth.value = 0.01),
      (this.materialHighPassFilter = new gt({
        uniforms: this.highPassUniforms,
        vertexShader: o.vertexShader,
        fragmentShader: o.fragmentShader,
      })),
      (this.separableBlurMaterials = []);
    const l = [3, 5, 7, 9, 11];
    (s = Math.round(this.resolution.x / 2)),
      (a = Math.round(this.resolution.y / 2));
    for (let h = 0; h < this.nMips; h++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),
        (this.separableBlurMaterials[h].uniforms.invSize.value = new Ue(
          1 / s,
          1 / a,
        )),
        (s = Math.round(s / 2)),
        (a = Math.round(a / 2));
    (this.compositeMaterial = this.getCompositeMaterial(this.nMips)),
      (this.compositeMaterial.uniforms.blurTexture1.value =
        this.renderTargetsVertical[0].texture),
      (this.compositeMaterial.uniforms.blurTexture2.value =
        this.renderTargetsVertical[1].texture),
      (this.compositeMaterial.uniforms.blurTexture3.value =
        this.renderTargetsVertical[2].texture),
      (this.compositeMaterial.uniforms.blurTexture4.value =
        this.renderTargetsVertical[3].texture),
      (this.compositeMaterial.uniforms.blurTexture5.value =
        this.renderTargetsVertical[4].texture),
      (this.compositeMaterial.uniforms.bloomStrength.value = t),
      (this.compositeMaterial.uniforms.bloomRadius.value = 0.1);
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    (this.compositeMaterial.uniforms.bloomFactors.value = c),
      (this.bloomTintColors = [
        new N(1, 1, 1),
        new N(1, 1, 1),
        new N(1, 1, 1),
        new N(1, 1, 1),
        new N(1, 1, 1),
      ]),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors);
    const u = uc;
    (this.copyUniforms = Qi.clone(u.uniforms)),
      (this.blendMaterial = new gt({
        uniforms: this.copyUniforms,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: Is,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      (this.enabled = !0),
      (this.needsSwap = !1),
      (this._oldClearColor = new ze()),
      (this.oldClearAlpha = 1),
      (this.basic = new Ga()),
      (this.fsQuad = new $a(null));
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(),
      this.blendMaterial.dispose(),
      this.basic.dispose(),
      this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2),
      r = Math.round(t / 2);
    this.renderTargetBright.setSize(n, r);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, r),
        this.renderTargetsVertical[s].setSize(n, r),
        (this.separableBlurMaterials[s].uniforms.invSize.value = new Ue(
          1 / n,
          1 / r,
        )),
        (n = Math.round(n / 2)),
        (r = Math.round(r / 2));
  }
  render(e, t, n, r, s) {
    e.getClearColor(this._oldClearColor),
      (this.oldClearAlpha = e.getClearAlpha());
    const a = e.autoClear;
    (e.autoClear = !1),
      e.setClearColor(this.clearColor, 0),
      s && e.state.buffers.stencil.setTest(!1),
      this.renderToScreen &&
        ((this.fsQuad.material = this.basic),
        (this.basic.map = n.texture),
        e.setRenderTarget(null),
        e.clear(),
        this.fsQuad.render(e)),
      (this.highPassUniforms.tDiffuse.value = n.texture),
      (this.highPassUniforms.luminosityThreshold.value = this.threshold),
      (this.fsQuad.material = this.materialHighPassFilter),
      e.setRenderTarget(this.renderTargetBright),
      e.clear(),
      this.fsQuad.render(e);
    let o = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      (this.fsQuad.material = this.separableBlurMaterials[l]),
        (this.separableBlurMaterials[l].uniforms.colorTexture.value =
          o.texture),
        (this.separableBlurMaterials[l].uniforms.direction.value =
          Di.BlurDirectionX),
        e.setRenderTarget(this.renderTargetsHorizontal[l]),
        e.clear(),
        this.fsQuad.render(e),
        (this.separableBlurMaterials[l].uniforms.colorTexture.value =
          this.renderTargetsHorizontal[l].texture),
        (this.separableBlurMaterials[l].uniforms.direction.value =
          Di.BlurDirectionY),
        e.setRenderTarget(this.renderTargetsVertical[l]),
        e.clear(),
        this.fsQuad.render(e),
        (o = this.renderTargetsVertical[l]);
    (this.fsQuad.material = this.compositeMaterial),
      (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
      (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      e.setRenderTarget(this.renderTargetsHorizontal[0]),
      e.clear(),
      this.fsQuad.render(e),
      (this.fsQuad.material = this.blendMaterial),
      (this.copyUniforms.tDiffuse.value =
        this.renderTargetsHorizontal[0].texture),
      s && e.state.buffers.stencil.setTest(!0),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(n), this.fsQuad.render(e)),
      e.setClearColor(this._oldClearColor, this.oldClearAlpha),
      (e.autoClear = a);
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push((0.39894 * Math.exp((-0.5 * n * n) / (e * e))) / e);
    return new gt({
      defines: { KERNEL_RADIUS: e },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new Ue(0.5, 0.5) },
        direction: { value: new Ue(0.5, 0.5) },
        gaussianCoefficients: { value: t },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
    });
  }
  getCompositeMaterial(e) {
    return new gt({
      defines: { NUM_MIPS: e },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,
    });
  }
}
Di.BlurDirectionX = new Ue(1, 0);
Di.BlurDirectionY = new Ue(0, 1);
function jm(i) {
  if (!(typeof window > 'u')) {
    var e = document.createElement('style');
    return (
      e.setAttribute('type', 'text/css'),
      (e.innerHTML = i),
      document.head.appendChild(e),
      i
    );
  }
}
function xi(i, e) {
  var t = i.__state.conversionName.toString(),
    n = Math.round(i.r),
    r = Math.round(i.g),
    s = Math.round(i.b),
    a = i.a,
    o = Math.round(i.h),
    l = i.s.toFixed(1),
    c = i.v.toFixed(1);
  if (e || t === 'THREE_CHAR_HEX' || t === 'SIX_CHAR_HEX') {
    for (var u = i.hex.toString(16); u.length < 6; ) u = '0' + u;
    return '#' + u;
  } else {
    if (t === 'CSS_RGB') return 'rgb(' + n + ',' + r + ',' + s + ')';
    if (t === 'CSS_RGBA')
      return 'rgba(' + n + ',' + r + ',' + s + ',' + a + ')';
    if (t === 'HEX') return '0x' + i.hex.toString(16);
    if (t === 'RGB_ARRAY') return '[' + n + ',' + r + ',' + s + ']';
    if (t === 'RGBA_ARRAY') return '[' + n + ',' + r + ',' + s + ',' + a + ']';
    if (t === 'RGB_OBJ') return '{r:' + n + ',g:' + r + ',b:' + s + '}';
    if (t === 'RGBA_OBJ')
      return '{r:' + n + ',g:' + r + ',b:' + s + ',a:' + a + '}';
    if (t === 'HSV_OBJ') return '{h:' + o + ',s:' + l + ',v:' + c + '}';
    if (t === 'HSVA_OBJ')
      return '{h:' + o + ',s:' + l + ',v:' + c + ',a:' + a + '}';
  }
  return 'unknown format';
}
var gl = Array.prototype.forEach,
  Xi = Array.prototype.slice,
  Y = {
    BREAK: {},
    extend: function (e) {
      return (
        this.each(
          Xi.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (r) {
                this.isUndefined(t[r]) || (e[r] = t[r]);
              }.bind(this),
            );
          },
          this,
        ),
        e
      );
    },
    defaults: function (e) {
      return (
        this.each(
          Xi.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (r) {
                this.isUndefined(e[r]) && (e[r] = t[r]);
              }.bind(this),
            );
          },
          this,
        ),
        e
      );
    },
    compose: function () {
      var e = Xi.call(arguments);
      return function () {
        for (var t = Xi.call(arguments), n = e.length - 1; n >= 0; n--)
          t = [e[n].apply(this, t)];
        return t[0];
      };
    },
    each: function (e, t, n) {
      if (e) {
        if (gl && e.forEach && e.forEach === gl) e.forEach(t, n);
        else if (e.length === e.length + 0) {
          var r = void 0,
            s = void 0;
          for (r = 0, s = e.length; r < s; r++)
            if (r in e && t.call(n, e[r], r) === this.BREAK) return;
        } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
      }
    },
    defer: function (e) {
      setTimeout(e, 0);
    },
    debounce: function (e, t, n) {
      var r = void 0;
      return function () {
        var s = this,
          a = arguments;
        function o() {
          (r = null), n || e.apply(s, a);
        }
        var l = n || !r;
        clearTimeout(r), (r = setTimeout(o, t)), l && e.apply(s, a);
      };
    },
    toArray: function (e) {
      return e.toArray ? e.toArray() : Xi.call(e);
    },
    isUndefined: function (e) {
      return e === void 0;
    },
    isNull: function (e) {
      return e === null;
    },
    isNaN: (function (i) {
      function e(t) {
        return i.apply(this, arguments);
      }
      return (
        (e.toString = function () {
          return i.toString();
        }),
        e
      );
    })(function (i) {
      return isNaN(i);
    }),
    isArray:
      Array.isArray ||
      function (i) {
        return i.constructor === Array;
      },
    isObject: function (e) {
      return e === Object(e);
    },
    isNumber: function (e) {
      return e === e + 0;
    },
    isString: function (e) {
      return e === e + '';
    },
    isBoolean: function (e) {
      return e === !1 || e === !0;
    },
    isFunction: function (e) {
      return e instanceof Function;
    },
  },
  Jm = [
    {
      litmus: Y.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return t === null
              ? !1
              : {
                  space: 'HEX',
                  hex: parseInt(
                    '0x' +
                      t[1].toString() +
                      t[1].toString() +
                      t[2].toString() +
                      t[2].toString() +
                      t[3].toString() +
                      t[3].toString(),
                    0,
                  ),
                };
          },
          write: xi,
        },
        SIX_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9]{6})$/i);
            return t === null
              ? !1
              : { space: 'HEX', hex: parseInt('0x' + t[1].toString(), 0) };
          },
          write: xi,
        },
        CSS_RGB: {
          read: function (e) {
            var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
            return t === null
              ? !1
              : {
                  space: 'RGB',
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                };
          },
          write: xi,
        },
        CSS_RGBA: {
          read: function (e) {
            var t = e.match(
              /^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/,
            );
            return t === null
              ? !1
              : {
                  space: 'RGB',
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                  a: parseFloat(t[4]),
                };
          },
          write: xi,
        },
      },
    },
    {
      litmus: Y.isNumber,
      conversions: {
        HEX: {
          read: function (e) {
            return { space: 'HEX', hex: e, conversionName: 'HEX' };
          },
          write: function (e) {
            return e.hex;
          },
        },
      },
    },
    {
      litmus: Y.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function (e) {
            return e.length !== 3
              ? !1
              : { space: 'RGB', r: e[0], g: e[1], b: e[2] };
          },
          write: function (e) {
            return [e.r, e.g, e.b];
          },
        },
        RGBA_ARRAY: {
          read: function (e) {
            return e.length !== 4
              ? !1
              : { space: 'RGB', r: e[0], g: e[1], b: e[2], a: e[3] };
          },
          write: function (e) {
            return [e.r, e.g, e.b, e.a];
          },
        },
      },
    },
    {
      litmus: Y.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function (e) {
            return Y.isNumber(e.r) &&
              Y.isNumber(e.g) &&
              Y.isNumber(e.b) &&
              Y.isNumber(e.a)
              ? { space: 'RGB', r: e.r, g: e.g, b: e.b, a: e.a }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b, a: e.a };
          },
        },
        RGB_OBJ: {
          read: function (e) {
            return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b)
              ? { space: 'RGB', r: e.r, g: e.g, b: e.b }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b };
          },
        },
        HSVA_OBJ: {
          read: function (e) {
            return Y.isNumber(e.h) &&
              Y.isNumber(e.s) &&
              Y.isNumber(e.v) &&
              Y.isNumber(e.a)
              ? { space: 'HSV', h: e.h, s: e.s, v: e.v, a: e.a }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v, a: e.a };
          },
        },
        HSV_OBJ: {
          read: function (e) {
            return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v)
              ? { space: 'HSV', h: e.h, s: e.s, v: e.v }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v };
          },
        },
      },
    },
  ],
  qi = void 0,
  Fr = void 0,
  ya = function () {
    Fr = !1;
    var e = arguments.length > 1 ? Y.toArray(arguments) : arguments[0];
    return (
      Y.each(Jm, function (t) {
        if (t.litmus(e))
          return (
            Y.each(t.conversions, function (n, r) {
              if (((qi = n.read(e)), Fr === !1 && qi !== !1))
                return (
                  (Fr = qi),
                  (qi.conversionName = r),
                  (qi.conversion = n),
                  Y.BREAK
                );
            }),
            Y.BREAK
          );
      }),
      Fr
    );
  },
  vl = void 0,
  Yr = {
    hsv_to_rgb: function (e, t, n) {
      var r = Math.floor(e / 60) % 6,
        s = e / 60 - Math.floor(e / 60),
        a = n * (1 - t),
        o = n * (1 - s * t),
        l = n * (1 - (1 - s) * t),
        c = [
          [n, l, a],
          [o, n, a],
          [a, n, l],
          [a, o, n],
          [l, a, n],
          [n, a, o],
        ][r];
      return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
    },
    rgb_to_hsv: function (e, t, n) {
      var r = Math.min(e, t, n),
        s = Math.max(e, t, n),
        a = s - r,
        o = void 0,
        l = void 0;
      if (s !== 0) l = a / s;
      else return { h: NaN, s: 0, v: 0 };
      return (
        e === s
          ? (o = (t - n) / a)
          : t === s
          ? (o = 2 + (n - e) / a)
          : (o = 4 + (e - t) / a),
        (o /= 6),
        o < 0 && (o += 1),
        { h: o * 360, s: l, v: s / 255 }
      );
    },
    rgb_to_hex: function (e, t, n) {
      var r = this.hex_with_component(0, 2, e);
      return (
        (r = this.hex_with_component(r, 1, t)),
        (r = this.hex_with_component(r, 0, n)),
        r
      );
    },
    component_from_hex: function (e, t) {
      return (e >> (t * 8)) & 255;
    },
    hex_with_component: function (e, t, n) {
      return (n << (vl = t * 8)) | (e & ~(255 << vl));
    },
  },
  Qm =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (i) {
          return typeof i;
        }
      : function (i) {
          return i &&
            typeof Symbol == 'function' &&
            i.constructor === Symbol &&
            i !== Symbol.prototype
            ? 'symbol'
            : typeof i;
        },
  jt = function (i, e) {
    if (!(i instanceof e))
      throw new TypeError('Cannot call a class as a function');
  },
  Jt = (function () {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    return function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  })(),
  Dn = function i(e, t, n) {
    e === null && (e = Function.prototype);
    var r = Object.getOwnPropertyDescriptor(e, t);
    if (r === void 0) {
      var s = Object.getPrototypeOf(e);
      return s === null ? void 0 : i(s, t, n);
    } else {
      if ('value' in r) return r.value;
      var a = r.get;
      return a === void 0 ? void 0 : a.call(n);
    }
  },
  Un = function (i, e) {
    if (typeof e != 'function' && e !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof e,
      );
    (i.prototype = Object.create(e && e.prototype, {
      constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(i, e)
          : (i.__proto__ = e));
  },
  In = function (i, e) {
    if (!i)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e && (typeof e == 'object' || typeof e == 'function') ? e : i;
  },
  mt = (function () {
    function i() {
      if (
        (jt(this, i),
        (this.__state = ya.apply(this, arguments)),
        this.__state === !1)
      )
        throw new Error('Failed to interpret color arguments');
      this.__state.a = this.__state.a || 1;
    }
    return (
      Jt(i, [
        {
          key: 'toString',
          value: function () {
            return xi(this);
          },
        },
        {
          key: 'toHexString',
          value: function () {
            return xi(this, !0);
          },
        },
        {
          key: 'toOriginal',
          value: function () {
            return this.__state.conversion.write(this);
          },
        },
      ]),
      i
    );
  })();
function Ka(i, e, t) {
  Object.defineProperty(i, e, {
    get: function () {
      return this.__state.space === 'RGB'
        ? this.__state[e]
        : (mt.recalculateRGB(this, e, t), this.__state[e]);
    },
    set: function (r) {
      this.__state.space !== 'RGB' &&
        (mt.recalculateRGB(this, e, t), (this.__state.space = 'RGB')),
        (this.__state[e] = r);
    },
  });
}
function Za(i, e) {
  Object.defineProperty(i, e, {
    get: function () {
      return this.__state.space === 'HSV'
        ? this.__state[e]
        : (mt.recalculateHSV(this), this.__state[e]);
    },
    set: function (n) {
      this.__state.space !== 'HSV' &&
        (mt.recalculateHSV(this), (this.__state.space = 'HSV')),
        (this.__state[e] = n);
    },
  });
}
mt.recalculateRGB = function (i, e, t) {
  if (i.__state.space === 'HEX')
    i.__state[e] = Yr.component_from_hex(i.__state.hex, t);
  else if (i.__state.space === 'HSV')
    Y.extend(i.__state, Yr.hsv_to_rgb(i.__state.h, i.__state.s, i.__state.v));
  else throw new Error('Corrupted color state');
};
mt.recalculateHSV = function (i) {
  var e = Yr.rgb_to_hsv(i.r, i.g, i.b);
  Y.extend(i.__state, { s: e.s, v: e.v }),
    Y.isNaN(e.h)
      ? Y.isUndefined(i.__state.h) && (i.__state.h = 0)
      : (i.__state.h = e.h);
};
mt.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
Ka(mt.prototype, 'r', 2);
Ka(mt.prototype, 'g', 1);
Ka(mt.prototype, 'b', 0);
Za(mt.prototype, 'h');
Za(mt.prototype, 's');
Za(mt.prototype, 'v');
Object.defineProperty(mt.prototype, 'a', {
  get: function () {
    return this.__state.a;
  },
  set: function (e) {
    this.__state.a = e;
  },
});
Object.defineProperty(mt.prototype, 'hex', {
  get: function () {
    return (
      this.__state.space !== 'HEX' &&
        ((this.__state.hex = Yr.rgb_to_hex(this.r, this.g, this.b)),
        (this.__state.space = 'HEX')),
      this.__state.hex
    );
  },
  set: function (e) {
    (this.__state.space = 'HEX'), (this.__state.hex = e);
  },
});
var Qn = (function () {
    function i(e, t) {
      jt(this, i),
        (this.initialValue = e[t]),
        (this.domElement = document.createElement('div')),
        (this.object = e),
        (this.property = t),
        (this.__onChange = void 0),
        (this.__onFinishChange = void 0);
    }
    return (
      Jt(i, [
        {
          key: 'onChange',
          value: function (t) {
            return (this.__onChange = t), this;
          },
        },
        {
          key: 'onFinishChange',
          value: function (t) {
            return (this.__onFinishChange = t), this;
          },
        },
        {
          key: 'setValue',
          value: function (t) {
            return (
              (this.object[this.property] = t),
              this.__onChange && this.__onChange.call(this, t),
              this.updateDisplay(),
              this
            );
          },
        },
        {
          key: 'getValue',
          value: function () {
            return this.object[this.property];
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return this;
          },
        },
        {
          key: 'isModified',
          value: function () {
            return this.initialValue !== this.getValue();
          },
        },
      ]),
      i
    );
  })(),
  e_ = {
    HTMLEvents: ['change'],
    MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
    KeyboardEvents: ['keydown'],
  },
  hc = {};
Y.each(e_, function (i, e) {
  Y.each(i, function (t) {
    hc[t] = e;
  });
});
var t_ = /(\d+(\.\d+)?)px/;
function Qt(i) {
  if (i === '0' || Y.isUndefined(i)) return 0;
  var e = i.match(t_);
  return Y.isNull(e) ? 0 : parseFloat(e[1]);
}
var O = {
    makeSelectable: function (e, t) {
      e === void 0 ||
        e.style === void 0 ||
        ((e.onselectstart = t
          ? function () {
              return !1;
            }
          : function () {}),
        (e.style.MozUserSelect = t ? 'auto' : 'none'),
        (e.style.KhtmlUserSelect = t ? 'auto' : 'none'),
        (e.unselectable = t ? 'on' : 'off'));
    },
    makeFullscreen: function (e, t, n) {
      var r = n,
        s = t;
      Y.isUndefined(s) && (s = !0),
        Y.isUndefined(r) && (r = !0),
        (e.style.position = 'absolute'),
        s && ((e.style.left = 0), (e.style.right = 0)),
        r && ((e.style.top = 0), (e.style.bottom = 0));
    },
    fakeEvent: function (e, t, n, r) {
      var s = n || {},
        a = hc[t];
      if (!a) throw new Error('Event type ' + t + ' not supported.');
      var o = document.createEvent(a);
      switch (a) {
        case 'MouseEvents': {
          var l = s.x || s.clientX || 0,
            c = s.y || s.clientY || 0;
          o.initMouseEvent(
            t,
            s.bubbles || !1,
            s.cancelable || !0,
            window,
            s.clickCount || 1,
            0,
            0,
            l,
            c,
            !1,
            !1,
            !1,
            !1,
            0,
            null,
          );
          break;
        }
        case 'KeyboardEvents': {
          var u = o.initKeyboardEvent || o.initKeyEvent;
          Y.defaults(s, {
            cancelable: !0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: void 0,
            charCode: void 0,
          }),
            u(
              t,
              s.bubbles || !1,
              s.cancelable,
              window,
              s.ctrlKey,
              s.altKey,
              s.shiftKey,
              s.metaKey,
              s.keyCode,
              s.charCode,
            );
          break;
        }
        default: {
          o.initEvent(t, s.bubbles || !1, s.cancelable || !0);
          break;
        }
      }
      Y.defaults(o, r), e.dispatchEvent(o);
    },
    bind: function (e, t, n, r) {
      var s = r || !1;
      return (
        e.addEventListener
          ? e.addEventListener(t, n, s)
          : e.attachEvent && e.attachEvent('on' + t, n),
        O
      );
    },
    unbind: function (e, t, n, r) {
      var s = r || !1;
      return (
        e.removeEventListener
          ? e.removeEventListener(t, n, s)
          : e.detachEvent && e.detachEvent('on' + t, n),
        O
      );
    },
    addClass: function (e, t) {
      if (e.className === void 0) e.className = t;
      else if (e.className !== t) {
        var n = e.className.split(/ +/);
        n.indexOf(t) === -1 &&
          (n.push(t),
          (e.className = n.join(' ').replace(/^\s+/, '').replace(/\s+$/, '')));
      }
      return O;
    },
    removeClass: function (e, t) {
      if (t)
        if (e.className === t) e.removeAttribute('class');
        else {
          var n = e.className.split(/ +/),
            r = n.indexOf(t);
          r !== -1 && (n.splice(r, 1), (e.className = n.join(' ')));
        }
      else e.className = void 0;
      return O;
    },
    hasClass: function (e, t) {
      return (
        new RegExp('(?:^|\\s+)' + t + '(?:\\s+|$)').test(e.className) || !1
      );
    },
    getWidth: function (e) {
      var t = getComputedStyle(e);
      return (
        Qt(t['border-left-width']) +
        Qt(t['border-right-width']) +
        Qt(t['padding-left']) +
        Qt(t['padding-right']) +
        Qt(t.width)
      );
    },
    getHeight: function (e) {
      var t = getComputedStyle(e);
      return (
        Qt(t['border-top-width']) +
        Qt(t['border-bottom-width']) +
        Qt(t['padding-top']) +
        Qt(t['padding-bottom']) +
        Qt(t.height)
      );
    },
    getOffset: function (e) {
      var t = e,
        n = { left: 0, top: 0 };
      if (t.offsetParent)
        do
          (n.left += t.offsetLeft),
            (n.top += t.offsetTop),
            (t = t.offsetParent);
        while (t);
      return n;
    },
    isActive: function (e) {
      return e === document.activeElement && (e.type || e.href);
    },
  },
  dc = (function (i) {
    Un(e, i);
    function e(t, n) {
      jt(this, e);
      var r = In(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        s = r;
      (r.__prev = r.getValue()),
        (r.__checkbox = document.createElement('input')),
        r.__checkbox.setAttribute('type', 'checkbox');
      function a() {
        s.setValue(!s.__prev);
      }
      return (
        O.bind(r.__checkbox, 'change', a, !1),
        r.domElement.appendChild(r.__checkbox),
        r.updateDisplay(),
        r
      );
    }
    return (
      Jt(e, [
        {
          key: 'setValue',
          value: function (n) {
            var r = Dn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              (this.__prev = this.getValue()),
              r
            );
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return (
              this.getValue() === !0
                ? (this.__checkbox.setAttribute('checked', 'checked'),
                  (this.__checkbox.checked = !0),
                  (this.__prev = !0))
                : ((this.__checkbox.checked = !1), (this.__prev = !1)),
              Dn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(Qn),
  n_ = (function (i) {
    Un(e, i);
    function e(t, n, r) {
      jt(this, e);
      var s = In(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        a = r,
        o = s;
      if (((s.__select = document.createElement('select')), Y.isArray(a))) {
        var l = {};
        Y.each(a, function (c) {
          l[c] = c;
        }),
          (a = l);
      }
      return (
        Y.each(a, function (c, u) {
          var h = document.createElement('option');
          (h.innerHTML = u),
            h.setAttribute('value', c),
            o.__select.appendChild(h);
        }),
        s.updateDisplay(),
        O.bind(s.__select, 'change', function () {
          var c = this.options[this.selectedIndex].value;
          o.setValue(c);
        }),
        s.domElement.appendChild(s.__select),
        s
      );
    }
    return (
      Jt(e, [
        {
          key: 'setValue',
          value: function (n) {
            var r = Dn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              r
            );
          },
        },
        {
          key: 'updateDisplay',
          value: function () {
            return O.isActive(this.__select)
              ? this
              : ((this.__select.value = this.getValue()),
                Dn(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  'updateDisplay',
                  this,
                ).call(this));
          },
        },
      ]),
      e
    );
  })(Qn),
  i_ = (function (i) {
    Un(e, i);
    function e(t, n) {
      jt(this, e);
      var r = In(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        s = r;
      function a() {
        s.setValue(s.__input.value);
      }
      function o() {
        s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
      }
      return (
        (r.__input = document.createElement('input')),
        r.__input.setAttribute('type', 'text'),
        O.bind(r.__input, 'keyup', a),
        O.bind(r.__input, 'change', a),
        O.bind(r.__input, 'blur', o),
        O.bind(r.__input, 'keydown', function (l) {
          l.keyCode === 13 && this.blur();
        }),
        r.updateDisplay(),
        r.domElement.appendChild(r.__input),
        r
      );
    }
    return (
      Jt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            return (
              O.isActive(this.__input) ||
                (this.__input.value = this.getValue()),
              Dn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(Qn);
function xl(i) {
  var e = i.toString();
  return e.indexOf('.') > -1 ? e.length - e.indexOf('.') - 1 : 0;
}
var fc = (function (i) {
  Un(e, i);
  function e(t, n, r) {
    jt(this, e);
    var s = In(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
      ),
      a = r || {};
    return (
      (s.__min = a.min),
      (s.__max = a.max),
      (s.__step = a.step),
      Y.isUndefined(s.__step)
        ? s.initialValue === 0
          ? (s.__impliedStep = 1)
          : (s.__impliedStep =
              Math.pow(
                10,
                Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10),
              ) / 10)
        : (s.__impliedStep = s.__step),
      (s.__precision = xl(s.__impliedStep)),
      s
    );
  }
  return (
    Jt(e, [
      {
        key: 'setValue',
        value: function (n) {
          var r = n;
          return (
            this.__min !== void 0 && r < this.__min
              ? (r = this.__min)
              : this.__max !== void 0 && r > this.__max && (r = this.__max),
            this.__step !== void 0 &&
              r % this.__step !== 0 &&
              (r = Math.round(r / this.__step) * this.__step),
            Dn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'setValue',
              this,
            ).call(this, r)
          );
        },
      },
      {
        key: 'min',
        value: function (n) {
          return (this.__min = n), this;
        },
      },
      {
        key: 'max',
        value: function (n) {
          return (this.__max = n), this;
        },
      },
      {
        key: 'step',
        value: function (n) {
          return (
            (this.__step = n),
            (this.__impliedStep = n),
            (this.__precision = xl(n)),
            this
          );
        },
      },
    ]),
    e
  );
})(Qn);
function r_(i, e) {
  var t = Math.pow(10, e);
  return Math.round(i * t) / t;
}
var $r = (function (i) {
  Un(e, i);
  function e(t, n, r) {
    jt(this, e);
    var s = In(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, r),
    );
    s.__truncationSuspended = !1;
    var a = s,
      o = void 0;
    function l() {
      var g = parseFloat(a.__input.value);
      Y.isNaN(g) || a.setValue(g);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function u() {
      c();
    }
    function h(g) {
      var S = o - g.clientY;
      a.setValue(a.getValue() + S * a.__impliedStep), (o = g.clientY);
    }
    function f() {
      O.unbind(window, 'mousemove', h), O.unbind(window, 'mouseup', f), c();
    }
    function m(g) {
      O.bind(window, 'mousemove', h),
        O.bind(window, 'mouseup', f),
        (o = g.clientY);
    }
    return (
      (s.__input = document.createElement('input')),
      s.__input.setAttribute('type', 'text'),
      O.bind(s.__input, 'change', l),
      O.bind(s.__input, 'blur', u),
      O.bind(s.__input, 'mousedown', m),
      O.bind(s.__input, 'keydown', function (g) {
        g.keyCode === 13 &&
          ((a.__truncationSuspended = !0),
          this.blur(),
          (a.__truncationSuspended = !1),
          c());
      }),
      s.updateDisplay(),
      s.domElement.appendChild(s.__input),
      s
    );
  }
  return (
    Jt(e, [
      {
        key: 'updateDisplay',
        value: function () {
          return (
            (this.__input.value = this.__truncationSuspended
              ? this.getValue()
              : r_(this.getValue(), this.__precision)),
            Dn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              'updateDisplay',
              this,
            ).call(this)
          );
        },
      },
    ]),
    e
  );
})(fc);
function Sl(i, e, t, n, r) {
  return n + (r - n) * ((i - e) / (t - e));
}
var ba = (function (i) {
    Un(e, i);
    function e(t, n, r, s, a) {
      jt(this, e);
      var o = In(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, {
            min: r,
            max: s,
            step: a,
          }),
        ),
        l = o;
      (o.__background = document.createElement('div')),
        (o.__foreground = document.createElement('div')),
        O.bind(o.__background, 'mousedown', c),
        O.bind(o.__background, 'touchstart', f),
        O.addClass(o.__background, 'slider'),
        O.addClass(o.__foreground, 'slider-fg');
      function c(S) {
        document.activeElement.blur(),
          O.bind(window, 'mousemove', u),
          O.bind(window, 'mouseup', h),
          u(S);
      }
      function u(S) {
        S.preventDefault();
        var p = l.__background.getBoundingClientRect();
        return l.setValue(Sl(S.clientX, p.left, p.right, l.__min, l.__max)), !1;
      }
      function h() {
        O.unbind(window, 'mousemove', u),
          O.unbind(window, 'mouseup', h),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      function f(S) {
        S.touches.length === 1 &&
          (O.bind(window, 'touchmove', m), O.bind(window, 'touchend', g), m(S));
      }
      function m(S) {
        var p = S.touches[0].clientX,
          d = l.__background.getBoundingClientRect();
        l.setValue(Sl(p, d.left, d.right, l.__min, l.__max));
      }
      function g() {
        O.unbind(window, 'touchmove', m),
          O.unbind(window, 'touchend', g),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      return (
        o.updateDisplay(),
        o.__background.appendChild(o.__foreground),
        o.domElement.appendChild(o.__background),
        o
      );
    }
    return (
      Jt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            var n = (this.getValue() - this.__min) / (this.__max - this.__min);
            return (
              (this.__foreground.style.width = n * 100 + '%'),
              Dn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                'updateDisplay',
                this,
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(fc),
  pc = (function (i) {
    Un(e, i);
    function e(t, n, r) {
      jt(this, e);
      var s = In(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
        ),
        a = s;
      return (
        (s.__button = document.createElement('div')),
        (s.__button.innerHTML = r === void 0 ? 'Fire' : r),
        O.bind(s.__button, 'click', function (o) {
          return o.preventDefault(), a.fire(), !1;
        }),
        O.addClass(s.__button, 'button'),
        s.domElement.appendChild(s.__button),
        s
      );
    }
    return (
      Jt(e, [
        {
          key: 'fire',
          value: function () {
            this.__onChange && this.__onChange.call(this),
              this.getValue().call(this.object),
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue());
          },
        },
      ]),
      e
    );
  })(Qn),
  Ta = (function (i) {
    Un(e, i);
    function e(t, n) {
      jt(this, e);
      var r = In(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n),
      );
      (r.__color = new mt(r.getValue())), (r.__temp = new mt(0));
      var s = r;
      (r.domElement = document.createElement('div')),
        O.makeSelectable(r.domElement, !1),
        (r.__selector = document.createElement('div')),
        (r.__selector.className = 'selector'),
        (r.__saturation_field = document.createElement('div')),
        (r.__saturation_field.className = 'saturation-field'),
        (r.__field_knob = document.createElement('div')),
        (r.__field_knob.className = 'field-knob'),
        (r.__field_knob_border = '2px solid '),
        (r.__hue_knob = document.createElement('div')),
        (r.__hue_knob.className = 'hue-knob'),
        (r.__hue_field = document.createElement('div')),
        (r.__hue_field.className = 'hue-field'),
        (r.__input = document.createElement('input')),
        (r.__input.type = 'text'),
        (r.__input_textShadow = '0 1px 1px '),
        O.bind(r.__input, 'keydown', function (S) {
          S.keyCode === 13 && h.call(this);
        }),
        O.bind(r.__input, 'blur', h),
        O.bind(r.__selector, 'mousedown', function () {
          O.addClass(this, 'drag').bind(window, 'mouseup', function () {
            O.removeClass(s.__selector, 'drag');
          });
        }),
        O.bind(r.__selector, 'touchstart', function () {
          O.addClass(this, 'drag').bind(window, 'touchend', function () {
            O.removeClass(s.__selector, 'drag');
          });
        });
      var a = document.createElement('div');
      Y.extend(r.__selector.style, {
        width: '122px',
        height: '102px',
        padding: '3px',
        backgroundColor: '#222',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.3)',
      }),
        Y.extend(r.__field_knob.style, {
          position: 'absolute',
          width: '12px',
          height: '12px',
          border: r.__field_knob_border + (r.__color.v < 0.5 ? '#fff' : '#000'),
          boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
          borderRadius: '12px',
          zIndex: 1,
        }),
        Y.extend(r.__hue_knob.style, {
          position: 'absolute',
          width: '15px',
          height: '2px',
          borderRight: '4px solid #fff',
          zIndex: 1,
        }),
        Y.extend(r.__saturation_field.style, {
          width: '100px',
          height: '100px',
          border: '1px solid #555',
          marginRight: '3px',
          display: 'inline-block',
          cursor: 'pointer',
        }),
        Y.extend(a.style, {
          width: '100%',
          height: '100%',
          background: 'none',
        }),
        Ml(a, 'top', 'rgba(0,0,0,0)', '#000'),
        Y.extend(r.__hue_field.style, {
          width: '15px',
          height: '100px',
          border: '1px solid #555',
          cursor: 'ns-resize',
          position: 'absolute',
          top: '3px',
          right: '3px',
        }),
        a_(r.__hue_field),
        Y.extend(r.__input.style, {
          outline: 'none',
          textAlign: 'center',
          color: '#fff',
          border: 0,
          fontWeight: 'bold',
          textShadow: r.__input_textShadow + 'rgba(0,0,0,0.7)',
        }),
        O.bind(r.__saturation_field, 'mousedown', o),
        O.bind(r.__saturation_field, 'touchstart', o),
        O.bind(r.__field_knob, 'mousedown', o),
        O.bind(r.__field_knob, 'touchstart', o),
        O.bind(r.__hue_field, 'mousedown', l),
        O.bind(r.__hue_field, 'touchstart', l);
      function o(S) {
        m(S),
          O.bind(window, 'mousemove', m),
          O.bind(window, 'touchmove', m),
          O.bind(window, 'mouseup', c),
          O.bind(window, 'touchend', c);
      }
      function l(S) {
        g(S),
          O.bind(window, 'mousemove', g),
          O.bind(window, 'touchmove', g),
          O.bind(window, 'mouseup', u),
          O.bind(window, 'touchend', u);
      }
      function c() {
        O.unbind(window, 'mousemove', m),
          O.unbind(window, 'touchmove', m),
          O.unbind(window, 'mouseup', c),
          O.unbind(window, 'touchend', c),
          f();
      }
      function u() {
        O.unbind(window, 'mousemove', g),
          O.unbind(window, 'touchmove', g),
          O.unbind(window, 'mouseup', u),
          O.unbind(window, 'touchend', u),
          f();
      }
      function h() {
        var S = ya(this.value);
        S !== !1
          ? ((s.__color.__state = S), s.setValue(s.__color.toOriginal()))
          : (this.value = s.__color.toString());
      }
      function f() {
        s.__onFinishChange &&
          s.__onFinishChange.call(s, s.__color.toOriginal());
      }
      r.__saturation_field.appendChild(a),
        r.__selector.appendChild(r.__field_knob),
        r.__selector.appendChild(r.__saturation_field),
        r.__selector.appendChild(r.__hue_field),
        r.__hue_field.appendChild(r.__hue_knob),
        r.domElement.appendChild(r.__input),
        r.domElement.appendChild(r.__selector),
        r.updateDisplay();
      function m(S) {
        S.type.indexOf('touch') === -1 && S.preventDefault();
        var p = s.__saturation_field.getBoundingClientRect(),
          d = (S.touches && S.touches[0]) || S,
          T = d.clientX,
          y = d.clientY,
          E = (T - p.left) / (p.right - p.left),
          D = 1 - (y - p.top) / (p.bottom - p.top);
        return (
          D > 1 ? (D = 1) : D < 0 && (D = 0),
          E > 1 ? (E = 1) : E < 0 && (E = 0),
          (s.__color.v = D),
          (s.__color.s = E),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      function g(S) {
        S.type.indexOf('touch') === -1 && S.preventDefault();
        var p = s.__hue_field.getBoundingClientRect(),
          d = (S.touches && S.touches[0]) || S,
          T = d.clientY,
          y = 1 - (T - p.top) / (p.bottom - p.top);
        return (
          y > 1 ? (y = 1) : y < 0 && (y = 0),
          (s.__color.h = y * 360),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      return r;
    }
    return (
      Jt(e, [
        {
          key: 'updateDisplay',
          value: function () {
            var n = ya(this.getValue());
            if (n !== !1) {
              var r = !1;
              Y.each(
                mt.COMPONENTS,
                function (o) {
                  if (
                    !Y.isUndefined(n[o]) &&
                    !Y.isUndefined(this.__color.__state[o]) &&
                    n[o] !== this.__color.__state[o]
                  )
                    return (r = !0), {};
                },
                this,
              ),
                r && Y.extend(this.__color.__state, n);
            }
            Y.extend(this.__temp.__state, this.__color.__state),
              (this.__temp.a = 1);
            var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
              a = 255 - s;
            Y.extend(this.__field_knob.style, {
              marginLeft: 100 * this.__color.s - 7 + 'px',
              marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
              backgroundColor: this.__temp.toHexString(),
              border:
                this.__field_knob_border + 'rgb(' + s + ',' + s + ',' + s + ')',
            }),
              (this.__hue_knob.style.marginTop =
                (1 - this.__color.h / 360) * 100 + 'px'),
              (this.__temp.s = 1),
              (this.__temp.v = 1),
              Ml(
                this.__saturation_field,
                'left',
                '#fff',
                this.__temp.toHexString(),
              ),
              (this.__input.value = this.__color.toString()),
              Y.extend(this.__input.style, {
                backgroundColor: this.__color.toHexString(),
                color: 'rgb(' + s + ',' + s + ',' + s + ')',
                textShadow:
                  this.__input_textShadow +
                  'rgba(' +
                  a +
                  ',' +
                  a +
                  ',' +
                  a +
                  ',.7)',
              });
          },
        },
      ]),
      e
    );
  })(Qn),
  s_ = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function Ml(i, e, t, n) {
  (i.style.background = ''),
    Y.each(s_, function (r) {
      i.style.cssText +=
        'background: ' +
        r +
        'linear-gradient(' +
        e +
        ', ' +
        t +
        ' 0%, ' +
        n +
        ' 100%); ';
    });
}
function a_(i) {
  (i.style.background = ''),
    (i.style.cssText +=
      'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'),
    (i.style.cssText +=
      'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (i.style.cssText +=
      'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (i.style.cssText +=
      'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'),
    (i.style.cssText +=
      'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);');
}
var o_ = {
    load: function (e, t) {
      var n = t || document,
        r = n.createElement('link');
      (r.type = 'text/css'),
        (r.rel = 'stylesheet'),
        (r.href = e),
        n.getElementsByTagName('head')[0].appendChild(r);
    },
    inject: function (e, t) {
      var n = t || document,
        r = document.createElement('style');
      (r.type = 'text/css'), (r.innerHTML = e);
      var s = n.getElementsByTagName('head')[0];
      try {
        s.appendChild(r);
      } catch {}
    },
  },
  l_ = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
  c_ = function (e, t) {
    var n = e[t];
    return Y.isArray(arguments[2]) || Y.isObject(arguments[2])
      ? new n_(e, t, arguments[2])
      : Y.isNumber(n)
      ? Y.isNumber(arguments[2]) && Y.isNumber(arguments[3])
        ? Y.isNumber(arguments[4])
          ? new ba(e, t, arguments[2], arguments[3], arguments[4])
          : new ba(e, t, arguments[2], arguments[3])
        : Y.isNumber(arguments[4])
        ? new $r(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4],
          })
        : new $r(e, t, { min: arguments[2], max: arguments[3] })
      : Y.isString(n)
      ? new i_(e, t)
      : Y.isFunction(n)
      ? new pc(e, t, '')
      : Y.isBoolean(n)
      ? new dc(e, t)
      : null;
  };
function u_(i) {
  setTimeout(i, 1e3 / 60);
}
var h_ =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    u_,
  d_ = (function () {
    function i() {
      jt(this, i),
        (this.backgroundElement = document.createElement('div')),
        Y.extend(this.backgroundElement.style, {
          backgroundColor: 'rgba(0,0,0,0.8)',
          top: 0,
          left: 0,
          display: 'none',
          zIndex: '1000',
          opacity: 0,
          WebkitTransition: 'opacity 0.2s linear',
          transition: 'opacity 0.2s linear',
        }),
        O.makeFullscreen(this.backgroundElement),
        (this.backgroundElement.style.position = 'fixed'),
        (this.domElement = document.createElement('div')),
        Y.extend(this.domElement.style, {
          position: 'fixed',
          display: 'none',
          zIndex: '1001',
          opacity: 0,
          WebkitTransition:
            '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
          transition: 'transform 0.2s ease-out, opacity 0.2s linear',
        }),
        document.body.appendChild(this.backgroundElement),
        document.body.appendChild(this.domElement);
      var e = this;
      O.bind(this.backgroundElement, 'click', function () {
        e.hide();
      });
    }
    return (
      Jt(i, [
        {
          key: 'show',
          value: function () {
            var t = this;
            (this.backgroundElement.style.display = 'block'),
              (this.domElement.style.display = 'block'),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = 'scale(1.1)'),
              this.layout(),
              Y.defer(function () {
                (t.backgroundElement.style.opacity = 1),
                  (t.domElement.style.opacity = 1),
                  (t.domElement.style.webkitTransform = 'scale(1)');
              });
          },
        },
        {
          key: 'hide',
          value: function () {
            var t = this,
              n = function r() {
                (t.domElement.style.display = 'none'),
                  (t.backgroundElement.style.display = 'none'),
                  O.unbind(t.domElement, 'webkitTransitionEnd', r),
                  O.unbind(t.domElement, 'transitionend', r),
                  O.unbind(t.domElement, 'oTransitionEnd', r);
              };
            O.bind(this.domElement, 'webkitTransitionEnd', n),
              O.bind(this.domElement, 'transitionend', n),
              O.bind(this.domElement, 'oTransitionEnd', n),
              (this.backgroundElement.style.opacity = 0),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = 'scale(1.1)');
          },
        },
        {
          key: 'layout',
          value: function () {
            (this.domElement.style.left =
              window.innerWidth / 2 - O.getWidth(this.domElement) / 2 + 'px'),
              (this.domElement.style.top =
                window.innerHeight / 2 -
                O.getHeight(this.domElement) / 2 +
                'px');
          },
        },
      ]),
      i
    );
  })(),
  f_ =
    jm(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
o_.inject(f_);
var El = 'dg',
  yl = 72,
  bl = 20,
  er = 'Default',
  $i = (function () {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  })(),
  Ki = void 0,
  Tl = !0,
  _i = void 0,
  Ls = !1,
  mc = [],
  et = function i(e) {
    var t = this,
      n = e || {};
    (this.domElement = document.createElement('div')),
      (this.__ul = document.createElement('ul')),
      this.domElement.appendChild(this.__ul),
      O.addClass(this.domElement, El),
      (this.__folders = {}),
      (this.__controllers = []),
      (this.__rememberedObjects = []),
      (this.__rememberedObjectIndecesToControllers = []),
      (this.__listening = []),
      (n = Y.defaults(n, {
        closeOnTop: !1,
        autoPlace: !0,
        width: i.DEFAULT_WIDTH,
      })),
      (n = Y.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace })),
      Y.isUndefined(n.load)
        ? (n.load = { preset: er })
        : n.preset && (n.load.preset = n.preset),
      Y.isUndefined(n.parent) && n.hideable && mc.push(this),
      (n.resizable = Y.isUndefined(n.parent) && n.resizable),
      n.autoPlace && Y.isUndefined(n.scrollable) && (n.scrollable = !0);
    var r = $i && localStorage.getItem(gi(this, 'isLocal')) === 'true',
      s = void 0,
      a = void 0;
    if (
      (Object.defineProperties(this, {
        parent: {
          get: function () {
            return n.parent;
          },
        },
        scrollable: {
          get: function () {
            return n.scrollable;
          },
        },
        autoPlace: {
          get: function () {
            return n.autoPlace;
          },
        },
        closeOnTop: {
          get: function () {
            return n.closeOnTop;
          },
        },
        preset: {
          get: function () {
            return t.parent ? t.getRoot().preset : n.load.preset;
          },
          set: function (f) {
            t.parent ? (t.getRoot().preset = f) : (n.load.preset = f),
              g_(this),
              t.revert();
          },
        },
        width: {
          get: function () {
            return n.width;
          },
          set: function (f) {
            (n.width = f), Ca(t, f);
          },
        },
        name: {
          get: function () {
            return n.name;
          },
          set: function (f) {
            (n.name = f), a && (a.innerHTML = n.name);
          },
        },
        closed: {
          get: function () {
            return n.closed;
          },
          set: function (f) {
            (n.closed = f),
              n.closed
                ? O.addClass(t.__ul, i.CLASS_CLOSED)
                : O.removeClass(t.__ul, i.CLASS_CLOSED),
              this.onResize(),
              t.__closeButton &&
                (t.__closeButton.innerHTML = f ? i.TEXT_OPEN : i.TEXT_CLOSED);
          },
        },
        load: {
          get: function () {
            return n.load;
          },
        },
        useLocalStorage: {
          get: function () {
            return r;
          },
          set: function (f) {
            $i &&
              ((r = f),
              f ? O.bind(window, 'unload', s) : O.unbind(window, 'unload', s),
              localStorage.setItem(gi(t, 'isLocal'), f));
          },
        },
      }),
      Y.isUndefined(n.parent))
    ) {
      if (
        ((this.closed = n.closed || !1),
        O.addClass(this.domElement, i.CLASS_MAIN),
        O.makeSelectable(this.domElement, !1),
        $i && r)
      ) {
        t.useLocalStorage = !0;
        var o = localStorage.getItem(gi(this, 'gui'));
        o && (n.load = JSON.parse(o));
      }
      (this.__closeButton = document.createElement('div')),
        (this.__closeButton.innerHTML = i.TEXT_CLOSED),
        O.addClass(this.__closeButton, i.CLASS_CLOSE_BUTTON),
        n.closeOnTop
          ? (O.addClass(this.__closeButton, i.CLASS_CLOSE_TOP),
            this.domElement.insertBefore(
              this.__closeButton,
              this.domElement.childNodes[0],
            ))
          : (O.addClass(this.__closeButton, i.CLASS_CLOSE_BOTTOM),
            this.domElement.appendChild(this.__closeButton)),
        O.bind(this.__closeButton, 'click', function () {
          t.closed = !t.closed;
        });
    } else {
      n.closed === void 0 && (n.closed = !0);
      var l = document.createTextNode(n.name);
      O.addClass(l, 'controller-name'), (a = ja(t, l));
      var c = function (f) {
        return f.preventDefault(), (t.closed = !t.closed), !1;
      };
      O.addClass(this.__ul, i.CLASS_CLOSED),
        O.addClass(a, 'title'),
        O.bind(a, 'click', c),
        n.closed || (this.closed = !1);
    }
    n.autoPlace &&
      (Y.isUndefined(n.parent) &&
        (Tl &&
          ((_i = document.createElement('div')),
          O.addClass(_i, El),
          O.addClass(_i, i.CLASS_AUTO_PLACE_CONTAINER),
          document.body.appendChild(_i),
          (Tl = !1)),
        _i.appendChild(this.domElement),
        O.addClass(this.domElement, i.CLASS_AUTO_PLACE)),
      this.parent || Ca(t, n.width)),
      (this.__resizeHandler = function () {
        t.onResizeDebounced();
      }),
      O.bind(window, 'resize', this.__resizeHandler),
      O.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler),
      O.bind(this.__ul, 'transitionend', this.__resizeHandler),
      O.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler),
      this.onResize(),
      n.resizable && __(this),
      (s = function () {
        $i &&
          localStorage.getItem(gi(t, 'isLocal')) === 'true' &&
          localStorage.setItem(gi(t, 'gui'), JSON.stringify(t.getSaveObject()));
      }),
      (this.saveToLocalStorageIfPossible = s);
    function u() {
      var h = t.getRoot();
      (h.width += 1),
        Y.defer(function () {
          h.width -= 1;
        });
    }
    n.parent || u();
  };
et.toggleHide = function () {
  (Ls = !Ls),
    Y.each(mc, function (i) {
      i.domElement.style.display = Ls ? 'none' : '';
    });
};
et.CLASS_AUTO_PLACE = 'a';
et.CLASS_AUTO_PLACE_CONTAINER = 'ac';
et.CLASS_MAIN = 'main';
et.CLASS_CONTROLLER_ROW = 'cr';
et.CLASS_TOO_TALL = 'taller-than-window';
et.CLASS_CLOSED = 'closed';
et.CLASS_CLOSE_BUTTON = 'close-button';
et.CLASS_CLOSE_TOP = 'close-top';
et.CLASS_CLOSE_BOTTOM = 'close-bottom';
et.CLASS_DRAG = 'drag';
et.DEFAULT_WIDTH = 245;
et.TEXT_CLOSED = 'Close Controls';
et.TEXT_OPEN = 'Open Controls';
et._keydownHandler = function (i) {
  document.activeElement.type !== 'text' &&
    (i.which === yl || i.keyCode === yl) &&
    et.toggleHide();
};
O.bind(window, 'keydown', et._keydownHandler, !1);
Y.extend(et.prototype, {
  add: function (e, t) {
    return Zi(this, e, t, {
      factoryArgs: Array.prototype.slice.call(arguments, 2),
    });
  },
  addColor: function (e, t) {
    return Zi(this, e, t, { color: !0 });
  },
  remove: function (e) {
    this.__ul.removeChild(e.__li),
      this.__controllers.splice(this.__controllers.indexOf(e), 1);
    var t = this;
    Y.defer(function () {
      t.onResize();
    });
  },
  destroy: function () {
    if (this.parent)
      throw new Error(
        'Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.',
      );
    this.autoPlace && _i.removeChild(this.domElement);
    var e = this;
    Y.each(this.__folders, function (t) {
      e.removeFolder(t);
    }),
      O.unbind(window, 'keydown', et._keydownHandler, !1),
      Al(this);
  },
  addFolder: function (e) {
    if (this.__folders[e] !== void 0)
      throw new Error(
        'You already have a folder in this GUI by the name "' + e + '"',
      );
    var t = { name: e, parent: this };
    (t.autoPlace = this.autoPlace),
      this.load &&
        this.load.folders &&
        this.load.folders[e] &&
        ((t.closed = this.load.folders[e].closed),
        (t.load = this.load.folders[e]));
    var n = new et(t);
    this.__folders[e] = n;
    var r = ja(this, n.domElement);
    return O.addClass(r, 'folder'), n;
  },
  removeFolder: function (e) {
    this.__ul.removeChild(e.domElement.parentElement),
      delete this.__folders[e.name],
      this.load &&
        this.load.folders &&
        this.load.folders[e.name] &&
        delete this.load.folders[e.name],
      Al(e);
    var t = this;
    Y.each(e.__folders, function (n) {
      e.removeFolder(n);
    }),
      Y.defer(function () {
        t.onResize();
      });
  },
  open: function () {
    this.closed = !1;
  },
  close: function () {
    this.closed = !0;
  },
  hide: function () {
    this.domElement.style.display = 'none';
  },
  show: function () {
    this.domElement.style.display = '';
  },
  onResize: function () {
    var e = this.getRoot();
    if (e.scrollable) {
      var t = O.getOffset(e.__ul).top,
        n = 0;
      Y.each(e.__ul.childNodes, function (r) {
        (e.autoPlace && r === e.__save_row) || (n += O.getHeight(r));
      }),
        window.innerHeight - t - bl < n
          ? (O.addClass(e.domElement, et.CLASS_TOO_TALL),
            (e.__ul.style.height = window.innerHeight - t - bl + 'px'))
          : (O.removeClass(e.domElement, et.CLASS_TOO_TALL),
            (e.__ul.style.height = 'auto'));
    }
    e.__resize_handle &&
      Y.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + 'px';
      }),
      e.__closeButton && (e.__closeButton.style.width = e.width + 'px');
  },
  onResizeDebounced: Y.debounce(function () {
    this.onResize();
  }, 50),
  remember: function () {
    if (
      (Y.isUndefined(Ki) && ((Ki = new d_()), (Ki.domElement.innerHTML = l_)),
      this.parent)
    )
      throw new Error('You can only call remember on a top level GUI.');
    var e = this;
    Y.each(Array.prototype.slice.call(arguments), function (t) {
      e.__rememberedObjects.length === 0 && m_(e),
        e.__rememberedObjects.indexOf(t) === -1 &&
          e.__rememberedObjects.push(t);
    }),
      this.autoPlace && Ca(this, this.width);
  },
  getRoot: function () {
    for (var e = this; e.parent; ) e = e.parent;
    return e;
  },
  getSaveObject: function () {
    var e = this.load;
    return (
      (e.closed = this.closed),
      this.__rememberedObjects.length > 0 &&
        ((e.preset = this.preset),
        e.remembered || (e.remembered = {}),
        (e.remembered[this.preset] = Or(this))),
      (e.folders = {}),
      Y.each(this.__folders, function (t, n) {
        e.folders[n] = t.getSaveObject();
      }),
      e
    );
  },
  save: function () {
    this.load.remembered || (this.load.remembered = {}),
      (this.load.remembered[this.preset] = Or(this)),
      Aa(this, !1),
      this.saveToLocalStorageIfPossible();
  },
  saveAs: function (e) {
    this.load.remembered ||
      ((this.load.remembered = {}), (this.load.remembered[er] = Or(this, !0))),
      (this.load.remembered[e] = Or(this)),
      (this.preset = e),
      wa(this, e, !0),
      this.saveToLocalStorageIfPossible();
  },
  revert: function (e) {
    Y.each(
      this.__controllers,
      function (t) {
        this.getRoot().load.remembered
          ? _c(e || this.getRoot(), t)
          : t.setValue(t.initialValue),
          t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
      },
      this,
    ),
      Y.each(this.__folders, function (t) {
        t.revert(t);
      }),
      e || Aa(this.getRoot(), !1);
  },
  listen: function (e) {
    var t = this.__listening.length === 0;
    this.__listening.push(e), t && gc(this.__listening);
  },
  updateDisplay: function () {
    Y.each(this.__controllers, function (e) {
      e.updateDisplay();
    }),
      Y.each(this.__folders, function (e) {
        e.updateDisplay();
      });
  },
});
function ja(i, e, t) {
  var n = document.createElement('li');
  return (
    e && n.appendChild(e),
    t ? i.__ul.insertBefore(n, t) : i.__ul.appendChild(n),
    i.onResize(),
    n
  );
}
function Al(i) {
  O.unbind(window, 'resize', i.__resizeHandler),
    i.saveToLocalStorageIfPossible &&
      O.unbind(window, 'unload', i.saveToLocalStorageIfPossible);
}
function Aa(i, e) {
  var t = i.__preset_select[i.__preset_select.selectedIndex];
  e ? (t.innerHTML = t.value + '*') : (t.innerHTML = t.value);
}
function p_(i, e, t) {
  if (
    ((t.__li = e),
    (t.__gui = i),
    Y.extend(t, {
      options: function (a) {
        if (arguments.length > 1) {
          var o = t.__li.nextElementSibling;
          return (
            t.remove(),
            Zi(i, t.object, t.property, {
              before: o,
              factoryArgs: [Y.toArray(arguments)],
            })
          );
        }
        if (Y.isArray(a) || Y.isObject(a)) {
          var l = t.__li.nextElementSibling;
          return (
            t.remove(),
            Zi(i, t.object, t.property, { before: l, factoryArgs: [a] })
          );
        }
      },
      name: function (a) {
        return (t.__li.firstElementChild.firstElementChild.innerHTML = a), t;
      },
      listen: function () {
        return t.__gui.listen(t), t;
      },
      remove: function () {
        return t.__gui.remove(t), t;
      },
    }),
    t instanceof ba)
  ) {
    var n = new $r(t.object, t.property, {
      min: t.__min,
      max: t.__max,
      step: t.__step,
    });
    Y.each(
      ['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'],
      function (s) {
        var a = t[s],
          o = n[s];
        t[s] = n[s] = function () {
          var l = Array.prototype.slice.call(arguments);
          return o.apply(n, l), a.apply(t, l);
        };
      },
    ),
      O.addClass(e, 'has-slider'),
      t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof $r) {
    var r = function (a) {
      if (Y.isNumber(t.__min) && Y.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML,
          l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Zi(i, t.object, t.property, {
          before: t.__li.nextElementSibling,
          factoryArgs: [t.__min, t.__max, t.__step],
        });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    (t.min = Y.compose(r, t.min)), (t.max = Y.compose(r, t.max));
  } else
    t instanceof dc
      ? (O.bind(e, 'click', function () {
          O.fakeEvent(t.__checkbox, 'click');
        }),
        O.bind(t.__checkbox, 'click', function (s) {
          s.stopPropagation();
        }))
      : t instanceof pc
      ? (O.bind(e, 'click', function () {
          O.fakeEvent(t.__button, 'click');
        }),
        O.bind(e, 'mouseover', function () {
          O.addClass(t.__button, 'hover');
        }),
        O.bind(e, 'mouseout', function () {
          O.removeClass(t.__button, 'hover');
        }))
      : t instanceof Ta &&
        (O.addClass(e, 'color'),
        (t.updateDisplay = Y.compose(function (s) {
          return (e.style.borderLeftColor = t.__color.toString()), s;
        }, t.updateDisplay)),
        t.updateDisplay());
  t.setValue = Y.compose(function (s) {
    return (
      i.getRoot().__preset_select && t.isModified() && Aa(i.getRoot(), !0), s
    );
  }, t.setValue);
}
function _c(i, e) {
  var t = i.getRoot(),
    n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var r = t.__rememberedObjectIndecesToControllers[n];
    if (
      (r === void 0 &&
        ((r = {}), (t.__rememberedObjectIndecesToControllers[n] = r)),
      (r[e.property] = e),
      t.load && t.load.remembered)
    ) {
      var s = t.load.remembered,
        a = void 0;
      if (s[i.preset]) a = s[i.preset];
      else if (s[er]) a = s[er];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        (e.initialValue = o), e.setValue(o);
      }
    }
  }
}
function Zi(i, e, t, n) {
  if (e[t] === void 0)
    throw new Error('Object "' + e + '" has no property "' + t + '"');
  var r = void 0;
  if (n.color) r = new Ta(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    r = c_.apply(i, s);
  }
  n.before instanceof Qn && (n.before = n.before.__li),
    _c(i, r),
    O.addClass(r.domElement, 'c');
  var a = document.createElement('span');
  O.addClass(a, 'property-name'), (a.innerHTML = r.property);
  var o = document.createElement('div');
  o.appendChild(a), o.appendChild(r.domElement);
  var l = ja(i, o, n.before);
  return (
    O.addClass(l, et.CLASS_CONTROLLER_ROW),
    r instanceof Ta ? O.addClass(l, 'color') : O.addClass(l, Qm(r.getValue())),
    p_(i, l, r),
    i.__controllers.push(r),
    r
  );
}
function gi(i, e) {
  return document.location.href + '.' + e;
}
function wa(i, e, t) {
  var n = document.createElement('option');
  (n.innerHTML = e),
    (n.value = e),
    i.__preset_select.appendChild(n),
    t && (i.__preset_select.selectedIndex = i.__preset_select.length - 1);
}
function wl(i, e) {
  e.style.display = i.useLocalStorage ? 'block' : 'none';
}
function m_(i) {
  var e = (i.__save_row = document.createElement('li'));
  O.addClass(i.domElement, 'has-save'),
    i.__ul.insertBefore(e, i.__ul.firstChild),
    O.addClass(e, 'save-row');
  var t = document.createElement('span');
  (t.innerHTML = '&nbsp;'), O.addClass(t, 'button gears');
  var n = document.createElement('span');
  (n.innerHTML = 'Save'), O.addClass(n, 'button'), O.addClass(n, 'save');
  var r = document.createElement('span');
  (r.innerHTML = 'New'), O.addClass(r, 'button'), O.addClass(r, 'save-as');
  var s = document.createElement('span');
  (s.innerHTML = 'Revert'), O.addClass(s, 'button'), O.addClass(s, 'revert');
  var a = (i.__preset_select = document.createElement('select'));
  if (
    (i.load && i.load.remembered
      ? Y.each(i.load.remembered, function (h, f) {
          wa(i, f, f === i.preset);
        })
      : wa(i, er, !1),
    O.bind(a, 'change', function () {
      for (var h = 0; h < i.__preset_select.length; h++)
        i.__preset_select[h].innerHTML = i.__preset_select[h].value;
      i.preset = this.value;
    }),
    e.appendChild(a),
    e.appendChild(t),
    e.appendChild(n),
    e.appendChild(r),
    e.appendChild(s),
    $i)
  ) {
    var o = document.getElementById('dg-local-explain'),
      l = document.getElementById('dg-local-storage'),
      c = document.getElementById('dg-save-locally');
    (c.style.display = 'block'),
      localStorage.getItem(gi(i, 'isLocal')) === 'true' &&
        l.setAttribute('checked', 'checked'),
      wl(i, o),
      O.bind(l, 'change', function () {
        (i.useLocalStorage = !i.useLocalStorage), wl(i, o);
      });
  }
  var u = document.getElementById('dg-new-constructor');
  O.bind(u, 'keydown', function (h) {
    h.metaKey && (h.which === 67 || h.keyCode === 67) && Ki.hide();
  }),
    O.bind(t, 'click', function () {
      (u.innerHTML = JSON.stringify(i.getSaveObject(), void 0, 2)),
        Ki.show(),
        u.focus(),
        u.select();
    }),
    O.bind(n, 'click', function () {
      i.save();
    }),
    O.bind(r, 'click', function () {
      var h = prompt('Enter a new preset name.');
      h && i.saveAs(h);
    }),
    O.bind(s, 'click', function () {
      i.revert();
    });
}
function __(i) {
  var e = void 0;
  (i.__resize_handle = document.createElement('div')),
    Y.extend(i.__resize_handle.style, {
      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute',
    });
  function t(s) {
    return (
      s.preventDefault(),
      (i.width += e - s.clientX),
      i.onResize(),
      (e = s.clientX),
      !1
    );
  }
  function n() {
    O.removeClass(i.__closeButton, et.CLASS_DRAG),
      O.unbind(window, 'mousemove', t),
      O.unbind(window, 'mouseup', n);
  }
  function r(s) {
    return (
      s.preventDefault(),
      (e = s.clientX),
      O.addClass(i.__closeButton, et.CLASS_DRAG),
      O.bind(window, 'mousemove', t),
      O.bind(window, 'mouseup', n),
      !1
    );
  }
  O.bind(i.__resize_handle, 'mousedown', r),
    O.bind(i.__closeButton, 'mousedown', r),
    i.domElement.insertBefore(
      i.__resize_handle,
      i.domElement.firstElementChild,
    );
}
function Ca(i, e) {
  (i.domElement.style.width = e + 'px'),
    i.__save_row && i.autoPlace && (i.__save_row.style.width = e + 'px'),
    i.__closeButton && (i.__closeButton.style.width = e + 'px');
}
function Or(i, e) {
  var t = {};
  return (
    Y.each(i.__rememberedObjects, function (n, r) {
      var s = {},
        a = i.__rememberedObjectIndecesToControllers[r];
      Y.each(a, function (o, l) {
        s[l] = e ? o.initialValue : o.getValue();
      }),
        (t[r] = s);
    }),
    t
  );
}
function g_(i) {
  for (var e = 0; e < i.__preset_select.length; e++)
    i.__preset_select[e].value === i.preset &&
      (i.__preset_select.selectedIndex = e);
}
function gc(i) {
  i.length !== 0 &&
    h_.call(window, function () {
      gc(i);
    }),
    Y.each(i, function (e) {
      e.updateDisplay();
    });
}
var v_ = et;
const x_ = `
uniform float pointMultiplier;

attribute float size;
attribute float angle;
attribute vec4 aColor;

varying vec4 vColor;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;

  vAngle = vec2(cos(angle), sin(angle));
  vColor = aColor;
}`,
  S_ = `
uniform sampler2D diffuseTexture;

varying vec4 vColor;
varying vec2 vAngle;

void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColor;
}`;
function Us(i) {
  const e = [],
    t = i;
  function n(s, a) {
    e.push([s, a]);
  }
  function r(s) {
    let a = 0;
    for (let l = 0; l < e.length && !(e[l][0] >= s); l++) a = l;
    const o = Math.min(e.length - 1, a + 1);
    return a == o
      ? e[a][1]
      : t((s - e[a][0]) / (e[o][0] - e[a][0]), e[a][1], e[o][1]);
  }
  return { addPoint: n, getValueAt: r };
}
function M_(i, e) {
  return Math.floor(Math.random() * (e - i)) + i;
}
function E_(i) {
  const { camera: e, parent: t, rate: n, texture: r } = i,
    s = {
      diffuseTexture: { value: new Zu().load(r) },
      pointMultiplier: {
        value: window.innerHeight / (2 * Math.tan((30 * Math.PI) / 180)),
      },
    },
    a = new gt({
      uniforms: s,
      vertexShader: x_,
      fragmentShader: S_,
      depthTest: !0,
      depthWrite: !1,
      transparent: !0,
      vertexColors: !0,
    });
  let o = [];
  const l = new Zt();
  l.setAttribute('position', new ht([], 3)),
    l.setAttribute('size', new ht([], 1)),
    l.setAttribute('aColor', new ht([], 4)),
    l.setAttribute('angle', new ht([], 1));
  const c = new ku(l, a);
  t.add(c);
  const u = Us((A, R, M) => R + A * (M - R));
  u.addPoint(0, 0),
    u.addPoint(0.6, 1),
    u.addPoint(1, 0),
    Us((A, R, M) => R.clone().lerp(M, A)).addPoint(0, new ze(16777215));
  const f = Us((A, R, M) => R + A * (M - R));
  f.addPoint(0, 0), f.addPoint(1, 1);
  const m = 1,
    g = 30,
    S = 4,
    p = 0.15,
    d = 0.2;
  let T = 0;
  function y(A) {
    T += A;
    const R = Math.floor(T * n);
    T -= R / n;
    for (let M = 0; M < R; M += 1) {
      const v = (Math.random() * 0.75 + 0.25) * g;
      o.push({
        position: new N(
          (Math.random() * 2 - 1) * m,
          (Math.random() * 2 - 1) * m,
          (Math.random() * 2 - 1) * m,
        ),
        size: M_(p, d),
        color: new ze(),
        alpha: 1,
        life: v,
        maxLife: v,
        rotation: Math.random() * 2 * Math.PI,
        rotationRate: Math.random() * 0.01 - 0.005,
        velocity: new N(
          (Math.random() * 2 - 1) * S,
          (Math.random() * 2 - 1) * S,
          (Math.random() * 2 - 1) * S,
        ),
      });
    }
  }
  function E() {
    const A = [],
      R = [],
      M = [],
      v = [];
    for (let w of o)
      A.push(w.position.x, w.position.y, w.position.z),
        M.push(w.color.r, w.color.g, w.color.b, w.alpha),
        R.push(w.currentSize),
        v.push(w.rotation);
    l.setAttribute('position', new ht(A, 3)),
      l.setAttribute('size', new ht(R, 1)),
      l.setAttribute('aColor', new ht(M, 4)),
      l.setAttribute('angle', new ht(v, 1)),
      (l.attributes.position.needsUpdate = !0),
      (l.attributes.size.needsUpdate = !0),
      (l.attributes.aColor.needsUpdate = !0),
      (l.attributes.angle.needsUpdate = !0);
  }
  E();
  function D(A, R, M, v, w) {
    for (let B of o) B.life -= A;
    o = o.filter((B) => B.life > 0);
    for (let B of o) {
      const k = 1 - B.life / B.maxLife;
      (B.rotation += B.rotationRate),
        (B.alpha = u.getValueAt(k)),
        (B.currentSize = B.size * f.getValueAt(k)),
        B.color.copy(M),
        B.position.add(B.velocity.clone().multiplyScalar(A)),
        (B.position.z += Math.pow(R, w) * 6e-6 * v);
      const W = B.velocity.clone();
      W.multiplyScalar(A * 0.1),
        (W.x =
          Math.sign(B.velocity.x) *
          Math.min(Math.abs(W.x), Math.abs(B.velocity.x))),
        (W.y =
          Math.sign(B.velocity.y) *
          Math.min(Math.abs(W.y), Math.abs(B.velocity.y))),
        (W.z =
          Math.sign(B.velocity.z) *
          Math.min(Math.abs(W.z), Math.abs(B.velocity.z))),
        B.velocity.sub(W);
    }
    o.sort((B, k) => {
      const W = e.position.distanceTo(B.position),
        j = e.position.distanceTo(k.position);
      return W > j ? -1 : W < j ? 1 : 0;
    });
  }
  function C(A, R, M, v, w) {
    y(A), D(A, R, M, v, w), E();
  }
  return { update: C };
}
const Ra = { FFTSIZE: 512 },
  y_ = navigator.userAgent,
  b_ = /Mobile|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    y_,
  );
b_ && ((Ra.FFTSIZE = 256), (Ra.BARS_PARTICLES_SIZE = 1));
const Ja = new Ou(),
  bt = new Ot(75, window.innerWidth / window.innerHeight, 0.1, 4e3);
bt.position.set(0, -2, 20);
bt.lookAt(0, 0, 0);
const Cl = [0, 32],
  Kt = new Hm();
Kt.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Kt.domElement);
const T_ = new Wm(Ja, bt),
  ar = new Ym(Kt),
  yi = { strength: 0.7, radius: 0.2, threshold: 0.1 },
  or = new Di(
    new Ue(window.innerWidth, window, innerHeight),
    yi.strength,
    yi.radius,
    yi.threshold,
  ),
  A_ = new Km();
ar.addPass(T_);
ar.addPass(or);
ar.addPass(A_);
let Ln = 0,
  Qa = 200,
  eo = 1,
  to = 2,
  no = !0,
  io = !0,
  ro = !0;
const w_ = 1,
  C_ = (i, e, t) => {
    if (e >= w_ && t) {
      const n = e >= Qa ? 0.12 : 0.025,
        r = e * n,
        s = 1 / (e * 0.002);
      return { ...i, r, b: s };
    }
    return i;
  },
  jn = {
    toneMapping: 'NeutralToneMapping',
    toneMappingOptions: {
      NoToneMapping: gn,
      LinearToneMapping: Da,
      ReinhardToneMapping: La,
      CineonToneMapping: Ua,
      ACESFilmicToneMapping: Ia,
      AgXToneMapping: Na,
      NeutralToneMapping: Fa,
    },
    toneMappingExposure: 0.25,
  };
Kt.toneMapping = jn.toneMappingOptions[jn.toneMapping];
Kt.toneMappingExposure = jn.toneMappingExposure;
const vc = new eh();
bt.add(vc);
const Te = new th(vc),
  xc = new nh(Te, Ra.FFTSIZE),
  dn = {
    u_time: { type: 'f', value: 0 },
    u_frequency: { type: 'f', value: 0 },
    u_kickThreshold: { type: 'f', value: 0.7 },
    u_red: { type: 'f', value: 0.25 },
    u_green: { type: 'f', value: 0 },
    u_blue: { type: 'f', value: 1 },
  },
  R_ = new gt({
    uniforms: dn,
    vertexShader: document.getElementById('vertexshader').textContent,
    fragmentShader: document.getElementById('fragmentshader').textContent,
  }),
  P_ = new Xa(8, 30),
  Sc = new Xt(P_, R_);
Ja.add(Sc);
Sc.material.wireframe = !0;
const D_ = E_({
    camera: bt,
    parent: Ja,
    rate: 80,
    texture: './assets/circle.png',
  }),
  qt = {
    play: function () {
      Te.isPlaying || ao();
    },
    pause: function () {
      Te.isPlaying && so();
    },
    stop: function () {
      Te.stop(), (Ln = 0);
    },
    seek: 0,
    currentTime: '0:00',
    duration: '0:00',
  },
  so = () => {
    Te.pause(), Te.context.suspend(), (Ln = Te.context.currentTime - Ln);
  },
  ao = () => {
    Mc(Ln), Te.context.resume();
  },
  Mc = (i) => {
    Te.stop(),
      (Te.source = Te.context.createBufferSource()),
      (Te.source.buffer = Te.buffer),
      Te.source.connect(Te.gain),
      (Te.source.loop = !0),
      (Ln = Te.context.currentTime - i),
      Te.source.start(0, i),
      (Te.isPlaying = !0);
  },
  Ec = (i) => {
    const e = Math.floor(i / 60),
      t = Math.floor(i % 60);
    return `${e}:${t < 10 ? '0' : ''}${t}`;
  },
  L_ = () => {
    if (Te.buffer) {
      const i = Te.context.currentTime - Ln;
      if (i >= Te.buffer.duration)
        (Ln = Te.context.currentTime),
          (qt.currentTime = '0:00'),
          (qt.seek = 0),
          Rl.updateDisplay();
      else if (i && Te.isPlaying) {
        const e = Ec(i);
        (qt.currentTime = e),
          (qt.seek = (i / Te.buffer.duration) * 100),
          Rl.updateDisplay();
      }
    }
  };
window.addEventListener('mousemove', (i) => {
  if (i.buttons === 2) {
    const e = window.innerWidth / 2,
      t = window.innerHeight / 2,
      n = (i.clientX - e) * 0.03,
      r = (i.clientY - t) * 0.03;
    (bt.position.x += n - bt.position.x),
      (bt.position.y += -r - bt.position.y),
      bt.lookAt(0, 0, 0);
  }
});
window.addEventListener('contextmenu', (i) => i.preventDefault());
window.addEventListener('wheel', (i) => {
  const e = i.deltaY * 0.015;
  bt.position.z + e > Cl[0] && bt.position.z + e < Cl[1] && bt.translateZ(e);
});
window.addEventListener('keydown', (i) => {
  i.code === 'Space' && Te.source && Te.isPlaying
    ? so()
    : i.code === 'Space' && Te.source && !Te.isPlaying && ao();
});
window.addEventListener('touchstart', (i) => {
  i.touches.length === 2 && Te.source && Te.isPlaying
    ? so()
    : i.touches.length === 2 && Te.source && !Te.isPlaying && ao();
});
window.addEventListener('resize', () => {
  (bt.aspect = window.innerWidth / window.innerHeight),
    bt.updateProjectionMatrix(),
    Kt.setSize(window.innerWidth, window.innerHeight),
    ar.setSize(window.innerWidth, window.innerHeight),
    Kt.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
let oo = { r: 1, g: 1, b: 1 },
  lo = { r: 1, g: 1, b: 1 };
const U_ = new qa();
function I_() {
  const i = xc.getAverageFrequency(),
    e = C_(
      { r: dn.u_red.value, g: dn.u_green.value, b: dn.u_blue.value },
      i,
      Te.isPlaying,
    );
  if (
    (Te.isPlaying &&
      no &&
      ((or.strength = i * 0.001), (Kt.toneMappingExposure = i * 0.007)),
    Te.isPlaying)
  ) {
    const t = io ? e : oo;
    (dn.u_red.value = t.r), (dn.u_green.value = t.g), (dn.u_blue.value = t.b);
  }
  (dn.u_time.value = U_.getElapsedTime()),
    (dn.u_frequency.value = i),
    D_.update(0.05, i, ro ? e : lo, eo, to),
    L_(),
    ar.render();
}
Kt.setAnimationLoop(I_);
const Fi = new v_(),
  Oi = document.createElement('input');
Oi.type = 'file';
Oi.accept = 'audio/*';
Oi.style.display = 'none';
Oi.addEventListener('change', (i) => {
  const e = i.target.files[0];
  if (e) {
    Te.stop(), Te.setBuffer(null);
    const t = URL.createObjectURL(e);
    new ju().load(t, (r) => {
      (qt.duration = Ec(r.duration)),
        Te.setBuffer(r),
        Te.setLoop(!0),
        Te.setVolume(1),
        Te.play();
    }),
      N_.name(e.name),
      (Te.AudioStartTime = Te.context.currentTime),
      (Ln = Te.context.currentTime);
  }
});
document.body.appendChild(Oi);
const N_ = Fi.add({ click: () => Oi.click() }, 'click').name('Choose file'),
  En = {
    dynamicBloom: no,
    dynamicEqualizerColor: io,
    dynamicParticlesColor: ro,
    equalizerColor: oo,
    particlesColor: lo,
    dropThreshold: Qa,
    particlesSpeed: eo,
    pulsation: to,
    smoothing: 0.8,
  },
  lr = Fi.addFolder('Equalizer Effects');
lr.add(En, 'dynamicBloom')
  .name('Dynamic bloom')
  .onChange((i) => {
    no = i;
  });
lr.add(En, 'dynamicEqualizerColor')
  .name('Dynamic color')
  .onChange((i) => {
    io = i;
  });
lr.addColor(En, 'equalizerColor')
  .name('Default equalizer color')
  .onChange((i) => {
    oo = i;
  });
lr.add(En, 'dropThreshold', 0, 200, 1)
  .name('drop threshold')
  .onChange((i) => {
    Qa = i;
  });
lr.add(En, 'smoothing', 0, 0.99, 0.01).onChange((i) => {
  xc.analyser.smoothingTimeConstant = i;
});
const Qr = Fi.addFolder('Particles Effects');
Qr.add(En, 'dynamicParticlesColor')
  .name('Dynamic color')
  .onChange((i) => {
    ro = i;
  });
Qr.addColor(En, 'particlesColor')
  .name('Default equalizer color')
  .onChange((i) => {
    lo = i;
  });
Qr.add(En, 'particlesSpeed', 0, 2)
  .name('acceleration')
  .onChange((i) => {
    eo = i;
  });
Qr.add(En, 'pulsation', 0.1, 2.5)
  .name('pulsation')
  .onChange((i) => {
    to = i;
  });
const yc = Fi.addFolder('Tone Mapping');
yc.add(jn, 'toneMapping', Object.keys(jn.toneMappingOptions))
  .name('tone mapping')
  .onChange((i) => {
    Kt.toneMapping = jn.toneMappingOptions[i];
  });
yc.add(jn, 'toneMappingExposure', 0, 1)
  .name('mapping exposure')
  .onChange((i) => {
    Kt.toneMappingExposure = Number(i);
  });
const co = Fi.addFolder('Bloom');
co.add(yi, 'strength', 0, 1).onChange((i) => {
  or.strength = Number(i);
});
co.add(yi, 'radius', 0, 2).onChange((i) => {
  or.radius = Number(i);
});
co.add(yi, 'threshold', 0, 1).onChange((i) => {
  or.threshold = Number(i);
});
const Bi = Fi.addFolder('Controls');
Bi.add(qt, 'play').name('Play');
Bi.add(qt, 'pause').name('Pause');
Bi.add(qt, 'stop').name('Stop');
const Rl = Bi.add(qt, 'seek', 0, 100)
  .onChange((i) => {
    if (Te.buffer) {
      const e = (i / 100) * Te.buffer.duration;
      Te.isPlaying && Mc(e);
    }
  })
  .name('Progress(%)');
Bi.add(qt, 'currentTime').name('Current Time').listen();
Bi.add(qt, 'duration').name('Duration').listen();
