/* global Office */

Office.onReady(() => {});

function open_youtube(event) {
  const url = "https://www.youtube.com/";

  if (Office?.context?.ui?.openBrowserWindow) {
    Office.context.ui.openBrowserWindow(url);
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  event.completed();
}

if (typeof window !== "undefined") {
  window.open_youtube = open_youtube;
}
