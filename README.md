<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Rayleigh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Rayleigh distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-rayleigh-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var Rayleigh = require( '@stdlib/stats-base-dists-rayleigh-ctor' );
```

#### Rayleigh( \[sigma] )

Returns an [Rayleigh][rayleigh-distribution] distribution object.

```javascript
var rayleigh = new Rayleigh();

var mu = rayleigh.mean;
// returns ~1.253
```

By default, `sigma = 1.0`. To create a distribution having a different scale parameter `sigma`, provide a parameter value.

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mu = rayleigh.mean;
// returns ~5.013
```

* * *

## rayleigh

A [Rayleigh][rayleigh-distribution] distribution object has the following properties and methods...

### Writable Properties

#### rayleigh.sigma

Scale parameter of the distribution. `sigma` **must** be a positive number.

```javascript
var rayleigh = new Rayleigh( 2.0 );

var sigma = rayleigh.sigma;
// returns 2.0

rayleigh.sigma = 3.0;

sigma = rayleigh.sigma;
// returns 3.0
```

* * *

### Computed Properties

#### Rayleigh.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var entropy = rayleigh.entropy;
// returns ~2.328
```

#### Rayleigh.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var kurtosis = rayleigh.kurtosis;
// returns ~0.245
```

#### Rayleigh.prototype.mean

Returns the [median][expected-value].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mu = rayleigh.mean;
// returns ~5.013
```

#### Rayleigh.prototype.median

Returns the [median][median].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var median = rayleigh.median;
// returns ~4.71
```

#### Rayleigh.prototype.mode

Returns the [mode][mode].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var mode = rayleigh.mode;
// returns 4.0
```

#### Rayleigh.prototype.skewness

Returns the [skewness][skewness].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var skewness = rayleigh.skewness;
// returns ~0.631
```

#### Rayleigh.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var s = rayleigh.stdev;
// returns ~2.62
```

#### Rayleigh.prototype.variance

Returns the [variance][variance].

```javascript
var rayleigh = new Rayleigh( 4.0 );

var s2 = rayleigh.variance;
// returns ~6.867
```

* * *

### Methods

#### Rayleigh.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.cdf( 1.5 );
// returns ~0.245
```

#### Rayleigh.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.logcdf( 1.5 );
// returns ~-1.406
```

#### Rayleigh.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.logpdf( 0.8 );
// returns ~-1.689
```

#### Rayleigh.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.mgf( 0.5 );
// returns ~5.586
```

#### Rayleigh.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.pdf( 0.8 );
// returns ~0.185
```

#### Rayleigh.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var rayleigh = new Rayleigh( 2.0 );

var y = rayleigh.quantile( 0.5 );
// returns ~2.355

y = rayleigh.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Rayleigh = require( '@stdlib/stats-base-dists-rayleigh-ctor' );

var rayleigh = new Rayleigh( 2.0, 4.0 );

var mu = rayleigh.mean;
// returns ~2.507

var mode = rayleigh.mode;
// returns 2.0

var s2 = rayleigh.variance;
// returns ~1.717

var y = rayleigh.cdf( 0.8 );
// returns ~0.077
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-rayleigh-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-rayleigh-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-rayleigh-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-rayleigh-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-rayleigh-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-rayleigh-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-ctor/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-rayleigh-ctor/main/LICENSE

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
