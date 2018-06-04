# tailwind-aspect-ratio

Aspect Ratio plugin for tailwind. Generate a series of intrinsic aspect ratio containers. 

## Usage:

Add the plugin:

```
plugins: [
	// ...
    require('tailwind-aspect-ratio')
    // ...
]
```


Add your variants to `modules` as normal:

```
modules { 
	// ...
	aspectRatio: ['responsive'],
	// ...
}
```

And add config to tailwind.js like so:

```
module.exports = {

	// ...

	
	aspectRatio: {
		'3x2': 3/2,
		'4x3': 4/3,
		'2x3': 2/3,
		'5x6': 5/6,
		'16x9': 16/9
	},

	// ...

}
```

Note that the aspect ratio settings just expect a number between 0 and 1. I've inverted this from the actual ratio so for a 16:9 ratio instead of supplying `0.5625` to become `56.25%` you actually supply `1.7777777778`

Why? Because we _say_ 16-9 rather than 9-16, and thus in the config you can just write `16/9` - that's a bit of an opinionated thing that could get confusing so I could change it if people want to 'see' the percentages more explicitly. 

## Output

The examples above will output the following classes (and any variants in the config):


```
.ar-3x2 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 66.66666666666667%;
}

.ar-4x3 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 75%;
}

.ar-2x3 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 150%;
}

.ar-5x6 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 120%;
}

.ar-16x9 {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.ar-base {
  height: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}
```


## `.ar-base`

One settings-less style is generated. `.ar-base` will be added, so that you can supply inlined padding-bottom, such as server-side generated image dimensions.


```
<div class="ar-base" style="padding-bottom: 56.25%"> ... </div>
```