'use strict';

window.load = (function () {
  var errorHandler = function (err) {
    // do something real (e.g. display custom modal window or popup with error)
    // ESLint disallows use of alert() and console.log()
  };

  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status >= 400) {
        errorHandler('Failed to load data. Server returned status: ' + evt.target.status);
      } else if (evt.target.status >= 200) {
        onLoad(evt.target.response);
      } else {
        onLoad([]);
      }
    });
    xhr.addEventListener('error', errorHandler);
    xhr.addEventListener('timeout', errorHandler);

    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.send();
  };
})();
