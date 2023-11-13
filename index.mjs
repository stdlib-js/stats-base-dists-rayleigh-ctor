// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-entropy@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-kurtosis@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-mean@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-median@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-mode@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-skewness@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-stdev@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-variance@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-cdf@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-logcdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-logpdf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-mgf@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-pdf@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-quantile@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function b(){var t;if(!(this instanceof b))return 0===arguments.length?new b:new b(arguments[0]);if(arguments.length){if(!i(t=arguments[0]))throw new TypeError(v("17V7c,HN",t))}else t=1;return s(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return t},set:function(s){if(!i(s))throw new TypeError(v("17V8k,HE",s));t=s}}),this}e(b.prototype,"entropy",(function(){return r(this.sigma)})),e(b.prototype,"kurtosis",(function(){return n(this.sigma)})),e(b.prototype,"mean",(function(){return o(this.sigma)})),e(b.prototype,"median",(function(){return d(this.sigma)})),e(b.prototype,"mode",(function(){return m(this.sigma)})),e(b.prototype,"skewness",(function(){return p(this.k,this.sigma)})),e(b.prototype,"stdev",(function(){return a(this.sigma)})),e(b.prototype,"variance",(function(){return h(this.sigma)})),t(b.prototype,"cdf",(function(s){return l(s,this.sigma)})),t(b.prototype,"logcdf",(function(s){return g(s,this.sigma)})),t(b.prototype,"logpdf",(function(s){return f(s,this.sigma)})),t(b.prototype,"mgf",(function(s){return j(s,this.sigma)})),t(b.prototype,"pdf",(function(s){return c(s,this.sigma)})),t(b.prototype,"quantile",(function(s){return u(s,this.sigma)}));export{b as default};
//# sourceMappingURL=index.mjs.map
