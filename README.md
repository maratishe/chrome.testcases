
Several testcases for Chrome extensions

Installation: very easy, just point Chrome extension creation to this folder and it will create an extension with a simple big letter T in browser panel.  All the functions run locally becase they are all testcases for individual functionalities.  In this respect, this is not an application -- do not treat it as such. 


### Metromaps (added 2014-02-02)

This is my own layout for browser-based metromaps. Normally one would use a layout engine from Graphviz, but it is unaccessible in browsers, plus browsers like when layout is right-angled.  Not saying that it is impossible to draw -- it is in fact possible to use CANVAS or SVG, but for interactivity and general clarity of layout it is better to do right angles. 

So, this layout comes in 4 flavors, each with a slightly different metric used for optimization.  Meaning of metrics can be somewhat guessed from their names -- shown in the header. 

Map is dynamic -- you can change distance between stations and lines, as well as fontsize.  Your setting is remembered in local storage and will be recreated next time. 

Test data comes from my own photo database. See `07.metromap.js` for the tester and how it creates a DUMMY data handler to pass data into the actual layout engine. 

DUMMY -- you can find it in `serverless.js` simply passes the following data when its `info()` is called:

JSON: `{ S2L: { station to lines hash}, L2S: { line to stations hash}}`
Each of these should have the following structure: 
`S2L: { station: { line1: true, line2: true, ...},...}` and `L2S: { line: { station: next station, ...., last station: null}, ...}`.  These are used by the layout engine to figure out how to plot it. 


### LOGs and MISC
