Office.onReady(() => {});

function action(event) {
  const url = "https://localhost:3000/taskpane.html"; // or your production URL

  // Best option when supported:
  if (Office?.context?.ui?.openBrowserWindow) {
    Office.context.ui.openBrowserWindow(url);
  } else {
    // Fallback (may be blocked by pop-up settings)
    window.open(url, "_blank", "noopener,noreferrer");
  }

  event.completed();
}
