import {Notification} from 'kintone-ui-component';
import {CONFIG_SUCCESS_NOTIFY_TEXT, CONFIG_WARNING_NOTIFY_TEXT} from '../constant';

export default function saveConfig(event: MouseEvent) {
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
      const saveSuccessNoti = new Notification({text: CONFIG_SUCCESS_NOTIFY_TEXT, type: 'success', duration: -1});
      saveSuccessNoti.open();
      setTimeout(() => {
        window.location.href = `/k/admin/app/flow?app=${kintone.app.getId()}#section=settings`;
      }, 2500);
    });
  } else {
    const saveErrorNoti = new Notification({text: CONFIG_WARNING_NOTIFY_TEXT, type: 'danger', duration: -1});
    saveErrorNoti.open();
  }
}
