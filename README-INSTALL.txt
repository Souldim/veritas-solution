VERITAS ESTIMATOR MAX — FINAL FREE VERSION

WHAT IS INCLUDED
- 26 common handyman services
- Search and category filters
- 4-step estimate wizard
- Market-based Greater Cleveland labor ranges
- Quantity and condition adjustments
- Automatic exact-quote requirement for unknown electrical, plumbing, structural, or permit-sensitive scope
- EN / ES / UK interface
- Local photo preview
- Prepared SMS and email request
- Mobile layout
- FAQ and clear pricing disclaimer
- All prices editable in one file

FILES TO REPLACE
1. estimate.html
2. estimate.css
3. estimate.js
4. estimate-prices.js

INSTALLATION
1. Make a backup copy of the four existing estimate files.
2. Copy these four new files into:
   Documents/GitHub/veritas-solution/
3. Confirm Replace files.
4. Open GitHub Desktop.
5. Summary:
   Upgrade estimator to MAX version
6. Commit to main.
7. Push origin.
8. Wait 1–3 minutes.
9. Open:
   https://souldim.github.io/veritas-solution/estimate.html
10. Hard refresh with Ctrl+F5.

HOW TO CHANGE PRICES
Open estimate-prices.js.

base: [100, 145]
- first number = low end for the first unit
- second number = high end for the first unit

additionalUnit: [40, 65]
- extra range for each additional unit

add: [25, 50]
- adjustment when the customer answers Yes

IMPORTANT FREE-HOSTING LIMITATION
GitHub Pages cannot securely receive uploaded files by itself.
The photo selector only previews files locally. The prepared SMS/email tells the client to attach photos manually.
This avoids paid hosting, paid API services, passwords, and unsafe public tokens.

PRICING POLICY
- Labor only unless stated
- Customer-supplied fixtures/products
- $100 minimum service visit
- Final price requires photos, measurements, or inspection
- New circuits, wiring changes, plumbing-line changes, structural repairs, permits, and unknown hidden damage require an exact quote
