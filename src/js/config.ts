import {Notification} from 'kintone-ui-component';

function getAttachmentFields(data) {
  const fieldCode = [];
  for (const el in data) {
    if (data[el].type === 'FILE') {
      fieldCode.push(data[el].code);
    }
  }
  return fieldCode;
}

function getFieldCodes(data) {
  const fieldCode = [];
  for (const el in data) {
    if (data[el].type === 'SINGLE_LINE_TEXT'
        || data[el].type === 'RECORD_NUMBER'
        || data[el].type === 'FILE'
        || data[el].type === 'CREATOR'
        || data[el].type === 'CREATED_TIME'
        || data[el].type === 'MODIFIER'
        || data[el].type === 'STATUS'
        || data[el].type === 'UPDATED_TIME') {
      fieldCode.push(data[el].code);
    }
  }
  return fieldCode;
}

function buildAttachmentFieldCheckbox(fieldsData, PLUGIN_ID) {
  const checkboxRow = document.getElementById('checkbox-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  const fieldCode = getAttachmentFields(fieldsData);
  for (let i = 0; i < fieldCode.length; i++) {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'kintoneplugin-input-checkbox';

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'kintoneplugin-input-checkbox-item';

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'attachment-field-checkbox';
    checkboxInput.id = `attachment-field-checkbox-${i}`;
    checkboxInput.value = fieldCode[i];
    for (const el in savedConfig) {
      if (savedConfig[el] === checkboxInput.value) {
        checkboxInput.checked = true;
      }
    }

    const checkboxLabel = document.createElement('label');
    checkboxLabel.innerText = fieldCode[i];
    checkboxLabel.htmlFor = `attachment-field-checkbox-${i}`;

    checkboxSpan.appendChild(checkboxInput);
    checkboxSpan.appendChild(checkboxLabel);

    checkboxDiv.appendChild(checkboxSpan);

    checkboxRow.appendChild(checkboxDiv);
  }
}

function buildSelectRecordsCheckbox(fieldsData, PLUGIN_ID) {
  const fieldCode = getFieldCodes(fieldsData);
  const checkboxRow = document.getElementById('config-table-row');
  // const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  for (let i = 0; i < fieldCode.length; i++) {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'kintoneplugin-input-checkbox';

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'kintoneplugin-input-checkbox-item';

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'display-field-checkbox';
    checkboxInput.id = `display-field-checkbox-${i}`;
    checkboxInput.value = fieldCode[i];

    const checkboxLabel = document.createElement('label');
    checkboxLabel.innerText = fieldCode[i];
    checkboxLabel.htmlFor = `display-field-checkbox-${i}`;

    checkboxSpan.appendChild(checkboxInput);
    checkboxSpan.appendChild(checkboxLabel);

    checkboxDiv.appendChild(checkboxSpan);

    checkboxRow.appendChild(checkboxDiv);
  }
}

function saveConfig(event, PLUGIN_ID) {
  event.preventDefault();
  const checkboxForm = document.getElementsByName('field-checkbox') as any;
  const saveConfigRequest = {};
  for (let i = 0; i < checkboxForm.length; i++) {
    if (checkboxForm[i].checked === true) {
      saveConfigRequest[`field_${i}`] = checkboxForm[i].value;
    }
  }

  if (Object.keys(saveConfigRequest).length >= 1) {
    kintone.plugin.app.setConfig(saveConfigRequest, () => {
      const saveSuccessNoti = new Notification({text: 'Plugin settings have been saved. Please update the app!', type: 'success', duration: -1});
      saveSuccessNoti.open();
      setTimeout(() => {
        window.location.href = `/k/admin/app/flow?app=${kintone.app.getId()}#section=settings`;
      }, 2500);
    });
  } else {
    const saveErrorNoti = new Notification({text: 'At least ONE field must be selected!', type: 'danger', duration: -1});
    saveErrorNoti.open();
  }
}

function redirectUser(event) {
  event.preventDefault();
  window.location.href = `/k/admin/app/${kintone.app.getId()}/plugin/`;
}

(function(PLUGIN_ID) {
  'use strict';
  kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {'app': kintone.app.getId()})
    .then(resp => {
      buildAttachmentFieldCheckbox(resp.properties, PLUGIN_ID);
      buildSelectRecordsCheckbox(resp.properties, PLUGIN_ID);
    })
    .catch(error => {
      console.error(error);
    });

  const saveBtn = document.getElementById('save-button');
  saveBtn.addEventListener('click', (event) => {
    saveConfig(event, PLUGIN_ID);
  });

  const cancelBtn = document.getElementById('cancel-button');
  cancelBtn.addEventListener('click', (event) => {
    redirectUser(event);
  });

  console.log(kintone.plugin.app.getConfig(PLUGIN_ID));
  console.log(PLUGIN_ID);

})(kintone.$PLUGIN_ID);
