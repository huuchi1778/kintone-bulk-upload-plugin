import {bulkUploadBtn} from './ui-components/bulkUploadBtn';
import {browseFileDialog} from './ui-components/browseFileDialog';
import {selectRecordsDialog} from './ui-components/selectRecordsDialog';
import {getFile, handleUpload} from './common';
import {successNotify} from './ui-components/successNotify';
import {loadingSpinner} from './ui-components/loadingSpinner';

(function(PLUGIN_ID) {
  kintone.events.on('app.record.index.show', (event) => {
    // Get config
    const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
    // console.log(savedConfig);

    // kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', {'app': kintone.app.getId()}, (resp) => {
    //   // success
    //   console.log(resp);
    // });

    // Add button to header menu space
    const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    if (headerMenuSpaceElement === null) {
      throw new Error('The header menu element is unavailable on t/docs/rules/no-undefhis page');
    } else {
      headerMenuSpaceElement.appendChild(bulkUploadBtn);
    }

    // Controller
    bulkUploadBtn.addEventListener('click', () => {
      browseFileDialog();
    });

    document.addEventListener('kintone-bulk-upload:browse-file-dialog-next-click', async _ => {
      selectRecordsDialog(event.records, savedConfig);
    });

    document.addEventListener('kintone-bulk-upload:select-records-dialog-upload-click', _ => {
      handleUpload(getFile());
    });

    document.addEventListener('kintone-bulk-upload:bulk-upload-success', _ => {
      successNotify();
      setTimeout(() => {
        location.reload();
      }, 1500);
    });

    // Spinner
    loadingSpinner();

    return event;
  });
}
)(kintone.$PLUGIN_ID);