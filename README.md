# Angular ngPerf

version 0.1

ngPerf is a tiny module (485 bytes minified) to help you measure the loading time of the various components of your single-page-application.

### Installation
Download and place the script before your angular application script and after the core angular module.
```html
    <script src="angular.min.js"></script>
    <script src="angular-jsperf.min.js"></script>
    <script src="yourApp.js"></script>
```
Then inject the module into your application:

```js
angular.module('yourApp',['angular-ngperf']);
```

Include the `ng-perf` directive in the components you want to measure.
e.g.
```html
<nav class="navbar navbar-default"
    ng-perf
    ng-perf-enable="true"
    ng-perf-name="navbar"
    ng-perf-threshold="10">

  <div class="container-fluid">
    <div class="navbar-header"
        ng-perf
        ng-perf-enable="true"
        ng-perf-name="navbar-header"
        ng-perf-threshold="300">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
  </div>
</nav>
```

Load the page and open the console on the developers tools, you will see something like:

[![Resulte](http://oi57.tinypic.com/6egrk1.jpg)](http://oi57.tinypic.com/6egrk1.jpg)

### Options


| Options       | Type          | Explanation  |
| ------------- |:-------------:| -----:|
| `ng-pref-enable`     | boolean | Enable/Disable, default true |
| `ng-pref-threshold`     | number (in ms)      | Determines the color of the log, default 200 |
| `ng-pref-name`| string | The name of the component on the log |

### Βrowser support table

[![Resulte](http://oi61.tinypic.com/1zdmccm.jpg)](http://oi61.tinypic.com/1zdmccm.jpg)
