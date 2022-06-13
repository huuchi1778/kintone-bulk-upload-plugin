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
    checkboxInput.name = "field-checkbox";
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

function saveConfig (event, PLUGIN_ID) {
  event.preventDefault();
  const checkboxForm = document.getElementsByName("field-checkbox");
  const saveConfigRequest = {};
  for(let i = 0; i < checkboxForm.length; i++) {
    if(checkboxForm[i].checked === true){
      saveConfigRequest[`field_${i}`] = checkboxForm[i].value;
    }
  }
  if (Object.keys(saveConfigRequest).length >= 1){
    kintone.plugin.app.setConfig(saveConfigRequest, () => {
      console.log("Saved successfully!");
    });
  } else {
    console.log("Please select at least one field!");
  }
  
}

function redirectUser(event) {
  event.preventDefault();
  console.log("Redirecting...");
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
  
  const saveBtn = document.getElementById("save-button");
  saveBtn.addEventListener("click", (event) => {
    saveConfig(event, PLUGIN_ID)});

  const cancelBtn = document.getElementById("cancel-button");
  cancelBtn.addEventListener("click", (event) => {
    redirectUser(event);
  });

})(jQuery, kintone.$PLUGIN_ID);
