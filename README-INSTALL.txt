VERITAS FREE ESTIMATOR — INSTALLATION

FILES
- estimate.html
- estimate.css
- estimate.js
- estimate-prices.js

INSTALL
1. Copy all four files into:
   Documents/GitHub/veritas-solution/

2. In GitHub Desktop:
   Summary: Add free price estimator
   Commit to main
   Push origin

3. After 1–3 minutes open:
   https://souldim.github.io/veritas-solution/estimate.html

HOW TO CHANGE PRICES
Open estimate-prices.js in VS Code.

Example:
base: [190, 275]

190 = lower end
275 = upper end

Example extra:
add: [40, 70]

40 = lower additional charge
70 = upper additional charge

CURRENT SERVICES
- Window blinds
- Storm door
- Prehung interior door
- TV mounting
- Drywall repair
- Faucet replacement
- Light fixture
- Furniture assembly

IMPORTANT
The calculator shows preliminary labor ranges, not binding quotes.
Materials, permits, hidden damage, major electrical/plumbing changes,
structural work, and difficult access require final review.

OPTIONAL MAIN MENU LINK
Inside index.html, add this link inside <nav class="menu">:

<a href="estimate.html">Price Guide</a>
