/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "build.html",
    {
      id: "mainWindow",
      bounds: {
        width: 640,
        height: 480
      },
      innerBounds: {
        minWidth: 450,
        minHeight: 600
      }
    }
  );
});
