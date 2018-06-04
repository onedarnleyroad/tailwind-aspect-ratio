'use strict';

module.exports = function( ob )  {

	var { addUtilities, addComponents, e, prefix, config } = ob;
	

	let aspectRatioConfig = config('aspectRatio');
	let variantsConfig = config('modules.aspectRatio');


	// Prefix for the utility
	const className = '.ar-';
	
	// Container for all our new utilities:
	const newUtilities = {};

	// Loop through the config values, and build a collection of styles for each:
	for (const [key, value] of Object.entries(aspectRatioConfig)) {

		// value should be a number between 0 and 1, i.e. people should write 16/9,
		// we get the inverse percentage, i.e. 16/9 becomes 100 * 9/16
		let paddingBottom = 100 / ( value );
		
		newUtilities[ `${className}${key}` ] = {
			height: '0',
			width: '100%',
			position: 'relative',
			overflow: 'hidden',
			paddingBottom: `${paddingBottom}%`
		};

	}

	// Make an ar-base class. People might want to use
	// this in conjunction with a Server-side generated
	// aspect ratio, i.e. using an aspect ratio from an 
	// image asset.
	newUtilities[ `${className}base` ] = {
		height: '0',
		width: '100%',
		position: 'relative',
		overflow: 'hidden'
	};

	// add the utilities
	addUtilities(newUtilities, {
		variants: variantsConfig
	});
};