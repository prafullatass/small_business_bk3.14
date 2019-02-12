(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DataManager = {
  getEmployees: () => {
    return fetch("http://localhost:8088/employees?_expand=computer&_expand=department").then(res => res.json());
  }
};
var _default = DataManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createHtml = employee => {
  return `
    <article class="employee">
    <header class="employee__name">
        <h1>${employee.firstName} ${employee.lastName}</h1>
    </header>
    <section class="employee__department">
        Works in the ${employee.department.deptName} department
    </section>
    <section class="employee__computer">
        Currently using a ${employee.computer.make} ${employee.computer.model}
    </section>
</article>
    `;
};

var _default = createHtml;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _DataManager = _interopRequireDefault(require("./DataManager"));

var _createHtml = _interopRequireDefault(require("./createHtml"));

var _printToDOM = _interopRequireDefault(require("./printToDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fetch Data
// make html
//print to DOm
_DataManager.default.getEmployees().then(employees => {
  employees.forEach(employee => {
    (0, _printToDOM.default)((0, _createHtml.default)(employee), ".employeeList");
  });
});

},{"./DataManager":1,"./createHtml":2,"./printToDOM":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const printToDom = (whatToPrint, WhereonDom) => {
  document.querySelector(WhereonDom).innerHTML += whatToPrint;
};

var _default = printToDom;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9jcmVhdGVIdG1sLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9wcmludFRvRE9NLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxZQUFZLEVBQUcsTUFBTTtBQUNqQixXQUFPLEtBQUssQ0FBQyxxRUFBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBRyxHQUFHLENBQUMsSUFBSixFQURMLENBQVA7QUFFSDtBQUplLENBQXBCO2VBUWUsVzs7Ozs7Ozs7Ozs7QUNSZixNQUFNLFVBQVUsR0FBSSxRQUFELElBQWM7QUFDN0IsU0FBUTs7O2NBR0UsUUFBUSxDQUFDLFNBQVUsSUFBRyxRQUFRLENBQUMsUUFBUzs7O3VCQUcvQixRQUFRLENBQUMsVUFBVCxDQUFvQixRQUFTOzs7NEJBR3hCLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBQUssSUFBRyxRQUFRLENBQUMsUUFBVCxDQUFrQixLQUFNOzs7S0FUMUU7QUFhSCxDQWREOztlQWdCZSxVOzs7Ozs7QUNiZjs7QUFDQTs7QUFDQTs7OztBQUxBO0FBQ0E7QUFDQTtBQUtBLHFCQUFZLFlBQVosR0FBMkIsSUFBM0IsQ0FDSSxTQUFTLElBQUk7QUFDVCxFQUFBLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFFBQVEsSUFBSTtBQUMxQiw2QkFBWSx5QkFBVyxRQUFYLENBQVosRUFBa0MsZUFBbEM7QUFDSCxHQUZEO0FBR0gsQ0FMTDs7Ozs7Ozs7OztBQ1BBLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBRCxFQUFjLFVBQWQsS0FBNkI7QUFDNUMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQyxTQUFuQyxJQUFnRCxXQUFoRDtBQUNILENBRkQ7O2VBSWUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IERhdGFNYW5hZ2VyID0ge1xyXG4gICAgZ2V0RW1wbG95ZWVzIDogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1jb21wdXRlciZfZXhwYW5kPWRlcGFydG1lbnRcIilcclxuICAgICAgICAudGhlbihyZXM9PiByZXMuanNvbigpKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU1hbmFnZXIiLCJjb25zdCBjcmVhdGVIdG1sID0gKGVtcGxveWVlKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX19uYW1lXCI+XHJcbiAgICAgICAgPGgxPiR7ZW1wbG95ZWUuZmlyc3ROYW1lfSAke2VtcGxveWVlLmxhc3ROYW1lfTwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIj5cclxuICAgICAgICBXb3JrcyBpbiB0aGUgJHtlbXBsb3llZS5kZXBhcnRtZW50LmRlcHROYW1lfSBkZXBhcnRtZW50XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19jb21wdXRlclwiPlxyXG4gICAgICAgIEN1cnJlbnRseSB1c2luZyBhICR7ZW1wbG95ZWUuY29tcHV0ZXIubWFrZX0gJHtlbXBsb3llZS5jb21wdXRlci5tb2RlbH1cclxuICAgIDwvc2VjdGlvbj5cclxuPC9hcnRpY2xlPlxyXG4gICAgYFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIdG1sIiwiLy8gZmV0Y2ggRGF0YVxyXG4vLyBtYWtlIGh0bWxcclxuLy9wcmludCB0byBET21cclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCJcclxuaW1wb3J0IGNyZWF0ZUh0bWwgZnJvbSBcIi4vY3JlYXRlSHRtbFwiXHJcbmltcG9ydCBwcmludFRvRE9NIGZyb20gXCIuL3ByaW50VG9ET01cIlxyXG5cclxuRGF0YU1hbmFnZXIuZ2V0RW1wbG95ZWVzKCkudGhlbihcclxuICAgIGVtcGxveWVlcyA9PiB7XHJcbiAgICAgICAgZW1wbG95ZWVzLmZvckVhY2goZW1wbG95ZWUgPT4ge1xyXG4gICAgICAgICAgICBwcmludFRvRE9NIChjcmVhdGVIdG1sKGVtcGxveWVlKSwgXCIuZW1wbG95ZWVMaXN0XCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbikiLCJjb25zdCBwcmludFRvRG9tID0gKHdoYXRUb1ByaW50LCBXaGVyZW9uRG9tKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFdoZXJlb25Eb20pLmlubmVySFRNTCArPSB3aGF0VG9QcmludFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludFRvRG9tIl19
