jQuery.noConflict();

function getAttachmentFields (data) {
  const fieldCode = [];
  for(const el in data) {
    if (data[el]["type"] === "FILE"){
      fieldCode.push(data[el]["code"]);
    } 
  }
  return fieldCode;
}

function buildCheckbox (fieldCode) {
  const checkboxRow = document.getElementById("checkbox-row");
  for(let i = 0; i < fieldCode.length; i++) {
    let checkboxDiv = document.createElement("div");
    checkboxDiv.className = "kintoneplugin-input-checkbox";

    let checkboxSpan = document.createElement("span");
    checkboxSpan.className = "kintoneplugin-input-checkbox-item";

    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.name = "checkbox";
    checkboxInput.id = `checkbox-${i}`
    checkboxInput.value = fieldCode[i];

    let checkboxLabel = document.createElement("label");
    checkboxLabel.innerText = fieldCode[i];
    checkboxLabel.htmlFor = `checkbox-${i}`;

    checkboxSpan.appendChild(checkboxInput);
    checkboxSpan.appendChild(checkboxLabel);

    checkboxDiv.appendChild(checkboxSpan);

    checkboxRow.appendChild(checkboxDiv);
  }
}

(function($, PLUGIN_ID) {
  'use strict';
  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {'app': kintone.app.getId()})
    .then(resp => {
      return getAttachmentFields(resp.properties);
    })
    .then(resp => {
      buildCheckbox(resp);
    })
    .catch(error => {
      console.error(error);
    });
})(jQuery, kintone.$PLUGIN_ID);
