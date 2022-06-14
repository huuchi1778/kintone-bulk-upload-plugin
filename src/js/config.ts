import {Notification, MultiChoice} from 'kintone-ui-component';

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
  const attachmentCheckboxRow = document.getElementById('attachment-field-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  const fieldCode = getAttachmentFields(fieldsData);
  const multiChoice = new MultiChoice({id: 'select-attachment-field-multichoice'});
  for (let i = 0; i < fieldCode.length; i++) {
    multiChoice.items.push({label: fieldCode[i], value: fieldCode[i]});
    for (const el in savedConfig) {
      if (savedConfig[el] === fieldCode[i]) {
        multiChoice.value.push(fieldCode[i]);
      }
    }
  }
  attachmentCheckboxRow.appendChild(multiChoice);
}

function buildSelectRecordsCheckbox(fieldsData, PLUGIN_ID) {
  const fieldCode = getFieldCodes(fieldsData);
  const displayTableCheckboxRow = document.getElementById('config-display-table-row');
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
  const multiChoice = new MultiChoice({id: 'select-display-field-multichoice'});
  for (let i = 0; i < fieldCode.length; i++) {
    multiChoice.items.push({label: fieldCode[i], value: fieldCode[i]});
    for (const el in savedConfig) {
      if (savedConfig[el] === fieldCode[i]) {
        multiChoice.value.push(fieldCode[i]);
      }
    }
  }
  displayTableCheckboxRow.appendChild(multiChoice);
}

function saveConfig(event, PLUGIN_ID) {
  event.preventDefault();
  const attachmentMultiChoice = document.getElementById('select-attachment-field-multichoice') as any;
  const displayTableMutliChoice = document.getElementById('select-display-field-multichoice') as any;
  const saveConfigRequest = {};
  if (attachmentMultiChoice.value.length >= 1 && displayTableMutliChoice.value.length >= 1) {
    for (let i = 0; i < attachmentMultiChoice.value.length; i++) {
      saveConfigRequest[`attachment_field_${i}`] = attachmentMultiChoice.value[i];
    }

    for (let i = 0; i < displayTableMutliChoice.value.length; i++) {
      saveConfigRequest[`display_field_${i}`] = displayTableMutliChoice.value[i];
    }

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
