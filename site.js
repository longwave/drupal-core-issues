// Shows how long ago the page's data was generated, from a Unix timestamp, with the exact time on hover.
function showUpdated(generated) {
  const el = document.getElementById("updated"), seconds = Date.now() / 1000 - generated;
  const [unit, size] = [["day", 86400], ["hour", 3600], ["minute", 60]].find(([, n]) => seconds >= n) || ["minute", 60];
  el.textContent = `Updated ${new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(-Math.floor(seconds / size), unit)}`;
  el.title = new Date(generated * 1000).toLocaleString();
}
