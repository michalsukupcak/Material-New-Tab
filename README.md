# Material-New-Tab
Custom New Tab page for Google Chrome browser in material design style.

## Build
Requires npm, bower, gulp, vulcanize and crisper to work.
* install NPM (instalation process depends on your system, use Goole for that)
* install bower: ```sudo npm install bower```
* switch to project directory
* install gulp (locally): ``` npm install gulp ``` 
* install gulp-vulcanize plugin: ``` npm install gulp-vulcanize ```
* install gulp-crisper plugin: ``` npm install gulp-crisper ```
* if all gulp installs were successful, you should have ```node_modules/.bin```, ```node_modules/gulp```, ```node_modules/gulp-vulcanize``` and ```node_modules/gulp-crisper``` folders in project's root directory
* run ```bower install```
* if bower install was successful, you should have ```bower_components``` folder full of Polymer elements in project's root directory
* run ```gulp``` to execute gulp tasks
* that's it, you can load the unpacked extension into Chrome
* yes, this is too complicated, I will simplify the build process later
