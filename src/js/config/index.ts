import buildConfigForm from './buildConfigForm';
import saveConfig from './saveConfig';
import redirectToPluginSetting from './redirectToPluginSetting';

(function(PLUGIN_ID) {
  'use strict';

  buildConfigForm(kintone.app.getId(), PLUGIN_ID);

  const saveBtn = document.getElementById('save-button');
  saveBtn.addEventListener('click', (event) => {
    saveConfig(event);
  });

  const cancelBtn = document.getElementById('cancel-button');
  cancelBtn.addEventListener('click', (event) => {
    redirectToPluginSetting(event);
  });

})(kintone.$PLUGIN_ID);
