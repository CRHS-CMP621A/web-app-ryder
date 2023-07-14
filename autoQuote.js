// Get the checkboxes for interior
const vacPriceCheckbox = document.getElementById('vacPriceCheckbox');
const glasPriceCheckbox = document.getElementById('glasPriceCheckbox');
const leatherPriceCheckbox = document.getElementById('leatherPriceCheckbox');
const oderElimCheckbox = document.getElementById('oderElimCheckbox');
const shampooSeatCheckbox = document.getElementById('shampooSeatCheckbox');
const washMatsCheckbox = document.getElementById('washMatsCheckbox');
const steamCleanCheckbox = document.getElementById('steamCleanCheckbox');
const stainRemovCheckbox = document.getElementById('stainRemovCheckbox');
const engineBayCheckbox = document.getElementById('engineBayCheckbox');
const intUncheckAllButton = document.querySelector('.intUncheckAllButton');
const extUncheckAllButton = document.querySelector('.extUncheckAllButton');

// Get the checkboxes for exterior
const rimsAndTiresCheckbox = document.getElementById('rimsAndTiresCheckbox');
const tireDressingCheckbox = document.getElementById('tireDressingCheckbox');
const extWashCheckbox = document.getElementById('extWashCheckbox');
const waxCheckbox = document.getElementById('waxCheckbox');
const blkTrimRestoreCheckbox = document.getElementById('blkTrimRestoreCheckbox');
const clayBarCheckbox = document.getElementById('clayBarCheckbox');
const headLightsCheckbox = document.getElementById('headLightsCheckbox');

// Get the elements to display the interior and exterior totals
const intTotalElement = document.querySelector('.intTotal');
const extTotalElement = document.querySelector('.extTotal');
const grandTotalElement = document.getElementById('grandTotalValue');

// Function to calculate the interior total
function calculateInteriorTotal() {
  const checkboxToPrice = {
    vacPrice: 68.99,
    glasPrice: 19.99,
    leatherPrice: 19.99,
    oderElim: 39.99,
    shampooSeat: 49.99,
    washMats: 19.99,
    steamClean: 45.59,
    stainRemov: 25.00,
    engineBay: 79.99
  };

  let total = 0;

  if (vacPriceCheckbox.checked) total += checkboxToPrice.vacPrice;
  if (glasPriceCheckbox.checked) total += checkboxToPrice.glasPrice;
  if (leatherPriceCheckbox.checked) total += checkboxToPrice.leatherPrice;
  if (oderElimCheckbox.checked) total += checkboxToPrice.oderElim;
  if (shampooSeatCheckbox.checked) total += checkboxToPrice.shampooSeat;
  if (washMatsCheckbox.checked) total += checkboxToPrice.washMats;
  if (steamCleanCheckbox.checked) total += checkboxToPrice.steamClean;
  if (stainRemovCheckbox.checked) total += checkboxToPrice.stainRemov;
  if (engineBayCheckbox.checked) total += checkboxToPrice.engineBay;

  intTotalElement.textContent = `Interior Total: $${total.toFixed(2)}`;
  calculateGrandTotal();
}

// Function to calculate the exterior total
function calculateExteriorTotal() {
  const checkboxToPrice = {
    rimsAndTires: 19.99,
    tireDressing: 8.99,
    extWash: 59.99,
    wax: 59.99,
    blkTrimRestore: 59.99,
    clayBar: 39.99,
    headLights: 59.99
  };

  let total = 0;

  if (rimsAndTiresCheckbox.checked) total += checkboxToPrice.rimsAndTires;
  if (tireDressingCheckbox.checked) total += checkboxToPrice.tireDressing;
  if (extWashCheckbox.checked) total += checkboxToPrice.extWash;
  if (waxCheckbox.checked) total += checkboxToPrice.wax;
  if (blkTrimRestoreCheckbox.checked) total += checkboxToPrice.blkTrimRestore;
  if (clayBarCheckbox.checked) total += checkboxToPrice.clayBar;
  if (headLightsCheckbox.checked) total += checkboxToPrice.headLights;

  extTotalElement.textContent = `Exterior Total: $${total.toFixed(2)}`;
  calculateGrandTotal();
}

// Function to calculate and update the grand total
function calculateGrandTotal() {
  const interiorTotal = parseFloat(intTotalElement.textContent.replace(/[^\d.]/g, ''));
  const exteriorTotal = parseFloat(extTotalElement.textContent.replace(/[^\d.]/g, ''));
  const grandTotal = interiorTotal + exteriorTotal;
  grandTotalElement.textContent = grandTotal.toFixed(2);
}
// Function to uncheck all interior checkboxes
function uncheckAllInterior() {
  // Uncheck interior checkboxes
  vacPriceCheckbox.checked = false;
  glasPriceCheckbox.checked = false;
  leatherPriceCheckbox.checked = false;
  oderElimCheckbox.checked = false;
  shampooSeatCheckbox.checked = false;
  washMatsCheckbox.checked = false;
  steamCleanCheckbox.checked = false;
  stainRemovCheckbox.checked = false;
  engineBayCheckbox.checked = false;

  // Recalculate interior total
  calculateInteriorTotal();
}

// Function to uncheck all exterior checkboxes
function uncheckAllExterior() {
  // Uncheck exterior checkboxes
  rimsAndTiresCheckbox.checked = false;
  tireDressingCheckbox.checked = false;
  extWashCheckbox.checked = false;
  waxCheckbox.checked = false;
  blkTrimRestoreCheckbox.checked = false;
  clayBarCheckbox.checked = false;
  headLightsCheckbox.checked = false;

  // Recalculate exterior total
  calculateExteriorTotal();
}

// Attach event listeners to interior checkboxes
vacPriceCheckbox.addEventListener('change', calculateInteriorTotal);
glasPriceCheckbox.addEventListener('change', calculateInteriorTotal);
leatherPriceCheckbox.addEventListener('change', calculateInteriorTotal);
oderElimCheckbox.addEventListener('change', calculateInteriorTotal);
shampooSeatCheckbox.addEventListener('change', calculateInteriorTotal);
washMatsCheckbox.addEventListener('change', calculateInteriorTotal);
steamCleanCheckbox.addEventListener('change', calculateInteriorTotal);
stainRemovCheckbox.addEventListener('change', calculateInteriorTotal);
engineBayCheckbox.addEventListener('change', calculateInteriorTotal);
intUncheckAllButton.addEventListener('click', uncheckAllInterior);


// Attach event listeners to exterior checkboxes
rimsAndTiresCheckbox.addEventListener('change', calculateExteriorTotal);
tireDressingCheckbox.addEventListener('change', calculateExteriorTotal);
extWashCheckbox.addEventListener('change', calculateExteriorTotal);
waxCheckbox.addEventListener('change', calculateExteriorTotal);
blkTrimRestoreCheckbox.addEventListener('change', calculateExteriorTotal);
clayBarCheckbox.addEventListener('change', calculateExteriorTotal);
headLightsCheckbox.addEventListener('change', calculateExteriorTotal);
extUncheckAllButton.addEventListener('click', uncheckAllExterior);

// Initial calculation
calculateInteriorTotal();
calculateExteriorTotal();
