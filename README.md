# Material-New-Tab
Material New Tab is my take on new tab page in Google Chrome inspired by Google's Material Design and built using the Polymer framework.

![Material New Tab](https://lh3.googleusercontent.com/f_pzq1ZHbDSSGe5kEwXgygS8Z861aRP1eN-oUqBNXRTRfjN-biM3gNT3qvxe4jWNtLdx1POMXw=s640-h400-e365-rw "Material New Tab")

## Build instructions
* Requires **bower**, **gulp** and plugins **gulp-vulcanize** and **gulp-crisper**.

1. Fist install required plugins: ```npm install bower gulp gulp-vulcanize gulp-crisper```
2. Download bower dependencies: ```bower install```
3. Run gulp tasks: ```gulp```

## Directory structure
* /bower_components_build - Contains required Polymer elements dependencies that are required to run, but are ignored during vulcanization.
* /elements - Polymer elements used in application.
* /images - Self-explanatory.
* /oauth - Redirect handlers for Twitter OAuth dance.
* /scripts - Javascript files.
* /styles - CSS and Polymer styles.
