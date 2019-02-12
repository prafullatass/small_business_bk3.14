(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DataManager = {
  getEmployees: () => {
    return fetch("http://localhost:8088/employees?_expand=computer&_expand=department").then(res => res.json());
  },
  // get employees from computer
  getComputerDetails: () => {
    return fetch("http://localhost:8088/computers?_embed=employees").then(res => res.json());
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
const createHtml = {
  employeeHtml: employee => {
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
</article><hr/>
    `;
  },
  computerHtml: computer => {
    let stringHtml = `<article class="employee">
        <header class="employee__name">
            <h1>${computer.make} ${computer.model} computer users :</h1>
        </header>`;
    computer.employees.forEach(employee => {
      stringHtml += `<section class="employee__department">
            ${employee.firstName} ${employee.lastName}
        </section>`;
    });
    return stringHtml;
  }
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
    (0, _printToDOM.default)(_createHtml.default.employeeHtml(employee), ".employeeList");
  });
});

_DataManager.default.getComputerDetails().then(computers => {
  computers.forEach(computer => {
    (0, _printToDOM.default)(_createHtml.default.computerHtml(computer), ".computerList");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9jcmVhdGVIdG1sLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9wcmludFRvRE9NLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxZQUFZLEVBQUcsTUFBTTtBQUNqQixXQUFPLEtBQUssQ0FBQyxxRUFBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBRyxHQUFHLENBQUMsSUFBSixFQURMLENBQVA7QUFFSCxHQUplO0FBS2hCO0FBQ0EsRUFBQSxrQkFBa0IsRUFBRyxNQUFNO0FBQ3ZCLFdBQU8sS0FBSyxDQUFDLGtEQUFELENBQUwsQ0FDTixJQURNLENBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFKLEVBRE4sQ0FBUDtBQUVIO0FBVGUsQ0FBcEI7ZUFhZSxXOzs7Ozs7Ozs7O0FDYmYsTUFBTSxVQUFVLEdBQUc7QUFDZixFQUFBLFlBQVksRUFBRyxRQUFELElBQWM7QUFDeEIsV0FBUTs7O2NBR0YsUUFBUSxDQUFDLFNBQVUsSUFBRyxRQUFRLENBQUMsUUFBUzs7O3VCQUcvQixRQUFRLENBQUMsVUFBVCxDQUFvQixRQUFTOzs7NEJBR3hCLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBQUssSUFBRyxRQUFRLENBQUMsUUFBVCxDQUFrQixLQUFNOzs7S0FUdEU7QUFhSCxHQWZjO0FBZ0JmLEVBQUEsWUFBWSxFQUFHLFFBQUQsSUFBYztBQUN4QixRQUFJLFVBQVUsR0FBSTs7a0JBRVIsUUFBUSxDQUFDLElBQUssSUFBRyxRQUFRLENBQUMsS0FBTTtrQkFGMUM7QUFJQSxJQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE9BQW5CLENBQTJCLFFBQVEsSUFBSTtBQUNuQyxNQUFBLFVBQVUsSUFBSztjQUNiLFFBQVEsQ0FBQyxTQUFVLElBQUcsUUFBUSxDQUFDLFFBQVM7bUJBRDFDO0FBR0gsS0FKRDtBQUtBLFdBQU8sVUFBUDtBQUNIO0FBM0JjLENBQW5CO2VBOEJlLFU7Ozs7OztBQzNCZjs7QUFDQTs7QUFDQTs7OztBQUxBO0FBQ0E7QUFDQTtBQUtBLHFCQUFZLFlBQVosR0FBMkIsSUFBM0IsQ0FDSSxTQUFTLElBQUk7QUFDVCxFQUFBLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFFBQVEsSUFBSTtBQUMxQiw2QkFBWSxvQkFBVyxZQUFYLENBQXdCLFFBQXhCLENBQVosRUFBK0MsZUFBL0M7QUFDSCxHQUZEO0FBR0gsQ0FMTDs7QUFPQSxxQkFBWSxrQkFBWixHQUFpQyxJQUFqQyxDQUNJLFNBQVMsSUFBSTtBQUNULEVBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsUUFBUSxJQUFJO0FBQzFCLDZCQUFZLG9CQUFXLFlBQVgsQ0FBd0IsUUFBeEIsQ0FBWixFQUErQyxlQUEvQztBQUNILEdBRkQ7QUFHSCxDQUxMOzs7Ozs7Ozs7O0FDZEEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxXQUFELEVBQWMsVUFBZCxLQUE2QjtBQUM1QyxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLFNBQW5DLElBQWdELFdBQWhEO0FBQ0gsQ0FGRDs7ZUFJZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgRGF0YU1hbmFnZXIgPSB7XHJcbiAgICBnZXRFbXBsb3llZXMgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlcz9fZXhwYW5kPWNvbXB1dGVyJl9leHBhbmQ9ZGVwYXJ0bWVudFwiKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHJlcy5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgLy8gZ2V0IGVtcGxveWVlcyBmcm9tIGNvbXB1dGVyXHJcbiAgICBnZXRDb21wdXRlckRldGFpbHMgOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbXB1dGVycz9fZW1iZWQ9ZW1wbG95ZWVzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlciIsImNvbnN0IGNyZWF0ZUh0bWwgPSB7XHJcbiAgICBlbXBsb3llZUh0bWw6IChlbXBsb3llZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICA8YXJ0aWNsZSBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cclxuICAgICAgICA8aDE+JHtlbXBsb3llZS5maXJzdE5hbWV9ICR7ZW1wbG95ZWUubGFzdE5hbWV9PC9oMT5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fZGVwYXJ0bWVudFwiPlxyXG4gICAgICAgIFdvcmtzIGluIHRoZSAke2VtcGxveWVlLmRlcGFydG1lbnQuZGVwdE5hbWV9IGRlcGFydG1lbnRcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XHJcbiAgICAgICAgQ3VycmVudGx5IHVzaW5nIGEgJHtlbXBsb3llZS5jb21wdXRlci5tYWtlfSAke2VtcGxveWVlLmNvbXB1dGVyLm1vZGVsfVxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FydGljbGU+PGhyLz5cclxuICAgIGBcclxuICAgIH0sXHJcbiAgICBjb21wdXRlckh0bWw6IChjb21wdXRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzdHJpbmdIdG1sID0gYDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cclxuICAgICAgICAgICAgPGgxPiR7Y29tcHV0ZXIubWFrZX0gJHtjb21wdXRlci5tb2RlbH0gY29tcHV0ZXIgdXNlcnMgOjwvaDE+XHJcbiAgICAgICAgPC9oZWFkZXI+YFxyXG4gICAgICAgIGNvbXB1dGVyLmVtcGxveWVlcy5mb3JFYWNoKGVtcGxveWVlID0+IHtcclxuICAgICAgICAgICAgc3RyaW5nSHRtbCArPSBgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fZGVwYXJ0bWVudFwiPlxyXG4gICAgICAgICAgICAke2VtcGxveWVlLmZpcnN0TmFtZX0gJHtlbXBsb3llZS5sYXN0TmFtZX1cclxuICAgICAgICA8L3NlY3Rpb24+YFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdIdG1sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUh0bWwiLCIvLyBmZXRjaCBEYXRhXHJcbi8vIG1ha2UgaHRtbFxyXG4vL3ByaW50IHRvIERPbVxyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIlxyXG5pbXBvcnQgY3JlYXRlSHRtbCBmcm9tIFwiLi9jcmVhdGVIdG1sXCJcclxuaW1wb3J0IHByaW50VG9ET00gZnJvbSBcIi4vcHJpbnRUb0RPTVwiXHJcblxyXG5EYXRhTWFuYWdlci5nZXRFbXBsb3llZXMoKS50aGVuKFxyXG4gICAgZW1wbG95ZWVzID0+IHtcclxuICAgICAgICBlbXBsb3llZXMuZm9yRWFjaChlbXBsb3llZSA9PiB7XHJcbiAgICAgICAgICAgIHByaW50VG9ET00gKGNyZWF0ZUh0bWwuZW1wbG95ZWVIdG1sKGVtcGxveWVlKSwgXCIuZW1wbG95ZWVMaXN0XCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbilcclxuRGF0YU1hbmFnZXIuZ2V0Q29tcHV0ZXJEZXRhaWxzKCkudGhlbihcclxuICAgIGNvbXB1dGVycyA9PiB7XHJcbiAgICAgICAgY29tcHV0ZXJzLmZvckVhY2goY29tcHV0ZXIgPT4ge1xyXG4gICAgICAgICAgICBwcmludFRvRE9NIChjcmVhdGVIdG1sLmNvbXB1dGVySHRtbChjb21wdXRlciksIFwiLmNvbXB1dGVyTGlzdFwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4pIiwiY29uc3QgcHJpbnRUb0RvbSA9ICh3aGF0VG9QcmludCwgV2hlcmVvbkRvbSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihXaGVyZW9uRG9tKS5pbm5lckhUTUwgKz0gd2hhdFRvUHJpbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRUb0RvbSJdfQ==
