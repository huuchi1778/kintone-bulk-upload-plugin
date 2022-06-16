export default function redirectToPluginSetting(event: MouseEvent) {
  event.preventDefault();
  window.location.href = `/k/admin/app/${kintone.app.getId()}/plugin/`;
}