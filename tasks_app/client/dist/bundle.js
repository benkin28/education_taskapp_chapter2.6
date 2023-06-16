/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const TaskList = ({\n  tasks\n}) => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"taskList\"\n  }, tasks.map(({\n    summary,\n    description\n  }) => /*#__PURE__*/React.createElement(\"p\", null, `${summary}: ${description}`)));\n};\nconst tasks = [{\n  summary: 'Read the MERN book',\n  description: 'Read and understand the MERN book.'\n}, {\n  summary: 'Write a website',\n  description: 'Create a new and cool website.'\n}];\nconst app = /*#__PURE__*/React.createElement(\"div\", {\n  id: \"app\"\n}, /*#__PURE__*/React.createElement(\"h1\", null, \"Tasks\"), /*#__PURE__*/React.createElement(TaskList, {\n  tasks: tasks\n}));\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(app);\n\n//# sourceURL=webpack://client/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;