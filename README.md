# faders-css
## Basics

be sure that you include jQuery in your HTML document:
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```
and the both faders files:
```html
	<link rel="stylesheet" href="../faders.min.css">
	<script src="../faders.min.js"></script>
```

## Usage

there are 5 types of fade-animations in the library:

* fadeFromRight
* fadeFromLeft
* fadeFromTop
* fadeFromBottom
* fadeFromTransparent

just add the css class to the element that you want to animate:

```html
<div class="fadeFromRight"> ... </div>
```

in order to start the animation directly after the page is loaded add:

* fadeOnLoad

the animation can be delayed by adding the fadeDelay class:

* fadeDelay-{milliseconds}

an exaple of usage of all classes at once:

```html
<div class="fadeFromRight fadeOnLoad fadeDelay-1000"> ... </div>
```