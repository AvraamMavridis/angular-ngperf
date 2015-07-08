/**
 * Author Avraam Mavridis (avr.mav@gmail.com)
 * https://github.com/AvraamMavridis
 */
angular.module('angular-jsperf', [])
  .provider('$ngPerf',function(){
    this.$get = [function(){

        return {
          load: performance.now()
        }
    }];
  })
  .directive('ngPerf',['$ngPerf',function($ngPerf){
    return {
      restrict: 'A',
      $scope: {},
      link: function($scope, element, attrs){
        var _timeToLoad = performance.now() - $ngPerf.load;
        var _enable = !(attrs['ngPerfEnable'] === 'false')
        var _threshold = parseFloat(attrs['ngPerfThreshold']) || 200;
        var _name = element[0].nodeName + ' ' + (attrs['ngPerfName'] || '');
        var _numberOfChildNodes = angular.element(element).children().length;
        var _color = _timeToLoad >= _threshold ? 'color:red;' : 'color:green;';

        if(_enable){
          console.log('%c' + _name + ': Time to load: ' + _timeToLoad + ' ms', _color);
        }

      }
    }
  }]);
