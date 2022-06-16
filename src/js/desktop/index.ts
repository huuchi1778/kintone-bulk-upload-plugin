import {bulkUploadBtn} from '../ui-components/bulkUploadBtn';
import {browseFileDialog} from '../ui-components/browseFileDialog';
import {selectRecordsDialog} from '../ui-components/selectRecordsDialog';
import {getFile, handleUpload, fieldsHaveChanged} from '../common';
import {successNotify} from '../ui-components/successNotify';
import {loadingSpinner} from '../ui-components/loadingSpinner';
import {Notification} from 'kintone-ui-component';
import {EMPTY_CONFIG_WARNING_NOTIFY_TEXT, FIELDS_CHANGED_WARNING_NOTIFY_TEXT} from '../constant';
import errorHandling from './errorHandling';

(function(PLUGIN_ID) {
  kintone.events.on('app.record.index.show', (event: { records: object; }) => {
    // Get config
    const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);

    // Add button to header menu space
    const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    if (headerMenuSpaceElement === null) {
      throw new Error('The header menu element is unavailable on t/docs/rules/no-undefhis page');
    } else {
      headerMenuSpaceElement.appendChild(bulkUploadBtn);
    }

    // Error handling
    errorHandling(kintone.app.getId(), savedConfig, bulkUploadBtn);

    // Event binding
    bulkUploadBtn.addEventListener('click', () => {
      browseFileDialog();
    });

    document.addEventListener('kintone-bulk-upload:browse-file-dialog-next-click', async _ => {
      selectRecordsDialog(event.records, savedConfig);
    });

    document.addEventListener('kintone-bulk-upload:select-records-dialog-upload-click', _ => {
      handleUpload(getFile(), savedConfig);
    });

    document.addEventListener('kintone-bulk-upload:bulk-upload-success', _ => {
      successNotify();
      setTimeout(() => {
        location.reload();
      }, 1500);
    });

    loadingSpinner();

    return event;
  });
}
)(kintone.$PLUGIN_ID);