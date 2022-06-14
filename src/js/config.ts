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

function buildCheckbox(fieldCode, PLUGIN_ID) {
  const checkboxRow = document.getElementById('checkbox-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  for (let i = 0; i < fieldCode.length; i++) {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'kintoneplugin-input-checkbox';

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'kintoneplugin-input-checkbox-item';

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'field-checkbox';
    checkboxInput.id = `checkbox-${i}`;
    checkboxInput.value = fieldCode[i];
    for (const el in savedConfig) {
      if (savedConfig[el] === checkboxInput.value) {
        checkboxInput.checked = true;
      }
    }

    const checkboxLabel = document.createElement('label');
    checkboxLabel.innerText = fieldCode[i];
    checkboxLabel.htmlFor = `checkbox-${i}`;

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
      return getAttachmentFields(resp.properties);
    })
    .then(resp => {
      buildCheckbox(resp, PLUGIN_ID);
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
