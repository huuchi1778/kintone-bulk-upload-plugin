/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ (function() {

eval("/* eslint-disable no-undef */\nfunction getAttachmentFields(data) {\n  const fieldCode = [];\n\n  for (const el in data) {\n    if (data[el].type === 'FILE') {\n      fieldCode.push(data[el].code);\n    }\n  }\n\n  return fieldCode;\n}\n\nfunction buildCheckbox(fieldCode) {\n  const checkboxRow = document.getElementById('checkbox-row');\n\n  for (let i = 0; i < fieldCode.length; i++) {\n    const checkboxDiv = document.createElement('div');\n    checkboxDiv.className = 'kintoneplugin-input-checkbox';\n    const checkboxSpan = document.createElement('span');\n    checkboxSpan.className = 'kintoneplugin-input-checkbox-item';\n    const checkboxInput = document.createElement('input');\n    checkboxInput.type = 'checkbox';\n    checkboxInput.name = 'field-checkbox';\n    checkboxInput.id = `checkbox-${i}`;\n    checkboxInput.value = fieldCode[i];\n    const checkboxLabel = document.createElement('label');\n    checkboxLabel.innerText = fieldCode[i];\n    checkboxLabel.htmlFor = `checkbox-${i}`;\n    checkboxSpan.appendChild(checkboxInput);\n    checkboxSpan.appendChild(checkboxLabel);\n    checkboxDiv.appendChild(checkboxSpan);\n    checkboxRow.appendChild(checkboxDiv);\n  }\n}\n\nfunction saveConfig(event, PLUGIN_ID) {\n  event.preventDefault();\n  const checkboxForm = document.getElementsByName('field-checkbox');\n  const saveConfigRequest = {};\n\n  for (let i = 0; i < checkboxForm.length; i++) {\n    if (checkboxForm[i].checked === true) {\n      saveConfigRequest[`field_${i}`] = checkboxForm[i].value;\n    }\n  }\n\n  if (Object.keys(saveConfigRequest).length >= 1) {\n    kintone.plugin.app.setConfig(saveConfigRequest, () => {\n      console.log('Saved successfully!');\n    });\n  } else {\n    console.log('Please select at least one field!');\n  }\n}\n\nfunction redirectUser(event) {\n  event.preventDefault();\n  window.location.href = `/k/admin/app/${kintone.app.getId()}/plugin/`;\n}\n\n(function (PLUGIN_ID) {\n  'use strict';\n\n  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {\n    'app': kintone.app.getId()\n  }).then(resp => {\n    return getAttachmentFields(resp.properties);\n  }).then(resp => {\n    buildCheckbox(resp);\n  }).catch(error => {\n    console.error(error);\n  });\n  const saveBtn = document.getElementById('save-button');\n  saveBtn.addEventListener('click', event => {\n    saveConfig(event, PLUGIN_ID);\n  });\n  const cancelBtn = document.getElementById('cancel-button');\n  cancelBtn.addEventListener('click', event => {\n    redirectUser(event);\n  });\n})(kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack://bulk-upload-plugin/./src/js/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/config.js"]();
/******/ 	
/******/ })()
;