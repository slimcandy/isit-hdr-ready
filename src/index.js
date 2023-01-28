function isitHDRReady() {
  // Check if browser supports hdr media queries
  var mediaCheck = window.matchMedia(
    "(dynamic-range: high) and (color-gamut: p3)"
  ).matches;

  // Check if browser supports color() function
  var supportCheck =
    window.CSS && window.CSS.supports("color", "color(display-p3 1 1 1)");

  if (mediaCheck && supportCheck) {
    return true;
  }

  return false;
}

export default isitHDRReady;
