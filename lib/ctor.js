/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-rayleigh-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-rayleigh-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-rayleigh-mean' );
var median = require( '@stdlib/stats-base-dists-rayleigh-median' );
var mode = require( '@stdlib/stats-base-dists-rayleigh-mode' );
var skewness = require( '@stdlib/stats-base-dists-rayleigh-skewness' );
var stdev = require( '@stdlib/stats-base-dists-rayleigh-stdev' );
var variance = require( '@stdlib/stats-base-dists-rayleigh-variance' );
var cdf = require( '@stdlib/stats-base-dists-rayleigh-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-rayleigh-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-rayleigh-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-rayleigh-mgf' );
var pdf = require( '@stdlib/stats-base-dists-rayleigh-pdf' );
var quantile = require( '@stdlib/stats-base-dists-rayleigh-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function rayleighCDF( x ) {
	return cdf( x, this.sigma );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function rayleighLogCDF( x ) {
	return logcdf( x, this.sigma );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function rayleighLogPDF( x ) {
	return logpdf( x, this.sigma );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function rayleighMGF( t ) {
	return mgf( t, this.sigma );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function rayleighPDF( x ) {
	return pdf( x, this.sigma );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function rayleighQuantile( p ) {
	return quantile( p, this.sigma );
}


// MAIN //

/**
* Rayleigh distribution constructor.
*
* @constructor
* @param {PositiveNumber} [sigma=1.0] - scale parameter
* @throws {TypeError} `sigma` must be a positive number
* @returns {Rayleigh} distribution instance
*
* @example
* var rayleigh = new Rayleigh( 1.0 );
*
* var y = rayleigh.cdf( 0.8 );
* // returns ~0.274
*
* var v = rayleigh.mode;
* // returns 1.0
*/
function Rayleigh() {
	var sigma;
	if ( !(this instanceof Rayleigh) ) {
		if ( arguments.length === 0 ) {
			return new Rayleigh();
		}
		return new Rayleigh( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		sigma = arguments[ 0 ];
		if ( !isPositive( sigma ) ) {
			throw new TypeError( format( 'invalid argument. Scale parameter must be a positive number. Value: `%s`.', sigma ) );
		}
	} else {
		sigma = 1.0;
	}
	defineProperty( this, 'sigma', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return sigma;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			sigma = value;
		}
	});
	return this;
}

/**
* Rayleigh distribution differential entropy.
*
* @name entropy
* @memberof Rayleigh.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.entropy;
* // returns ~2.328
*/
setReadOnlyAccessor( Rayleigh.prototype, 'entropy', function get() {
	return entropy( this.sigma );
});

/**
* Rayleigh distribution excess kurtosis.
*
* @name kurtosis
* @memberof Rayleigh.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.kurtosis;
* // returns ~0.245
*/
setReadOnlyAccessor( Rayleigh.prototype, 'kurtosis', function get() {
	return kurtosis( this.sigma );
});

/**
* Rayleigh distribution expected value.
*
* @name mean
* @memberof Rayleigh.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.mean;
* // returns ~5.013
*/
setReadOnlyAccessor( Rayleigh.prototype, 'mean', function get() {
	return mean( this.sigma );
});

/**
* Rayleigh distribution median.
*
* @name median
* @memberof Rayleigh.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.median;
* // returns ~4.71
*/
setReadOnlyAccessor( Rayleigh.prototype, 'median', function get() {
	return median( this.sigma );
});

/**
* Rayleigh distribution mode.
*
* @name mode
* @memberof Rayleigh.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Rayleigh.prototype, 'mode', function get() {
	return mode( this.sigma );
});

/**
* Rayleigh distribution skewness.
*
* @name skewness
* @memberof Rayleigh.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.skewness;
* // returns ~0.631
*/
setReadOnlyAccessor( Rayleigh.prototype, 'skewness', function get() {
	return skewness( this.k, this.sigma );
});

/**
* Rayleigh distribution standard deviation.
*
* @name stdev
* @memberof Rayleigh.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.stdev;
* // returns ~2.62
*/
setReadOnlyAccessor( Rayleigh.prototype, 'stdev', function get() {
	return stdev( this.sigma );
});

/**
* Rayleigh distribution variance.
*
* @name variance
* @memberof Rayleigh.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var rayleigh = new Rayleigh( 4.0 );
*
* var v = rayleigh.variance;
* // returns ~6.867
*/
setReadOnlyAccessor( Rayleigh.prototype, 'variance', function get() {
	return variance( this.sigma );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Rayleigh.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.cdf( 0.5 );
* // returns ~0.031
*/
setReadOnly( Rayleigh.prototype, 'cdf', rayleighCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Rayleigh.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.logcdf( 0.5 );
* // returns ~-3.481
*/
setReadOnly( Rayleigh.prototype, 'logcdf', rayleighLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name pdf
* @memberof Rayleigh.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.logpdf( 0.8 );
* // returns ~-1.689
*/
setReadOnly( Rayleigh.prototype, 'logpdf', rayleighLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Rayleigh.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.mgf( 0.5 );
* // returns ~5.586
*/
setReadOnly( Rayleigh.prototype, 'mgf', rayleighMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Rayleigh.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.pdf( 4.0 );
* // returns ~0.135
*/
setReadOnly( Rayleigh.prototype, 'pdf', rayleighPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Rayleigh.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var rayleigh = new Rayleigh( 2.0 );
*
* var v = rayleigh.quantile( 0.5 );
* // returns ~2.355
*/
setReadOnly( Rayleigh.prototype, 'quantile', rayleighQuantile );


// EXPORTS //

module.exports = Rayleigh;
