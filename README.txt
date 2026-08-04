VERITAS SOLUTION LLC — WEBSITE V2

UPLOAD TO GITHUB
1. Open the veritas-solution repository.
2. Click Add file → Upload files.
3. Upload:
   index.html
   styles.css
   script.js
   content.js
   the entire images folder
4. GitHub will ask whether to replace existing files. Confirm the upload/commit.
5. Click Commit changes.
6. GitHub Pages updates automatically in about 1–3 minutes.

HOW TO ADD A NEW PROJECT PHOTO
1. Upload the new photo into the images folder in GitHub.
2. Open content.js.
3. Find the projects section.
4. Copy one existing project entry and change:
   image
   title
   meta
5. Commit changes.

Example:
{image:'images/new-door.jpg',
 title:{en:'Storm Door Installation',es:'Instalación de puerta contra tormentas',uk:'Встановлення штормових дверей'},
 meta:{en:'Parma, Ohio',es:'Parma, Ohio',uk:'Parma, Ohio'}}

IMPORTANT
- Use lowercase file names without spaces, for example:
  storm-door-parma.jpg
- Recommended image size: 1600–2400 pixels on the long side.
- Avoid uploading blurry screenshots.
- The first project image is also the main hero background.
