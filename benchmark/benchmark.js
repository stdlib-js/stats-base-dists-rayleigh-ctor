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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random-base-randu' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;
var Rayleigh = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var sigma;
	var dist;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		sigma = ( randu() * 10.0 ) + EPS;
		dist = new Rayleigh( sigma );
		if ( !( dist instanceof Rayleigh ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Rayleigh ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:sigma', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.sigma;
		if ( y !== sigma ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set:sigma', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ( 10.0*randu() ) + EPS;
		dist.sigma = y;
		if ( dist.sigma !== y ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':entropy', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + EPS;
		y = dist.entropy;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':kurtosis', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + 1.0 + EPS;
		y = dist.kurtosis;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mean', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + EPS;
		y = dist.mean;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':median', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + EPS;
		y = dist.median;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + 1.0 + EPS;
		y = dist.mode;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':skewness', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + 1.0 + EPS;
		y = dist.skewness;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':stdev', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + 1.0 + EPS;
		y = dist.stdev;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':variance', function benchmark( b ) {
	var sigma;
	var dist;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.sigma = ( 10.0*randu() ) + 1.0 + EPS;
		y = dist.variance;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':cdf', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.cdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':logcdf', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.logcdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':logpdf', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.logpdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mgf', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.mgf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':pdf', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.pdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':quantile', function benchmark( b ) {
	var sigma;
	var dist;
	var x;
	var y;
	var i;

	sigma = 5.54;
	dist = new Rayleigh( sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.quantile( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
