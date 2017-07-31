# Material New Tab Page

Chrome New Tab Page replacement inspired by Material Design.

![G Suite New Tab](https://lh3.googleusercontent.com/kGegnIGdu7_VlCbJMqDtQDx9EbHWJJd73Ig3VnC8GkUuwgJDwrnY6f8Bs0yhvmuzMKC4xYis=w640-h400-e365)

You can install the final product for free from the [Chrome Web Store](https://chrome.google.com/webstore/detail/material-new-tab/ipenfbpnekpojbhhgkpchnomcmbblbda).

### Requirements

Build process requires following CLI software:

- npm: ````$ sudo apt-get install npm````
- bower: ````$ sudo npm install -g bower````
- vulcanize: ````$ sudo npm install -g vulcanize```` 
- crisper: ````$ sudo npm install -g crisper````
- zip: ````$ sudo apt-get install zip````

### Build

Before running build, make sure you have all required dependencies from bower repositories installed:

        $ bower install
        
If you're returning to continue work on the extension after some time, consider updating dependencies to their latest versions using ````bower update````.

Build process creates a ````dist```` folder and a ````dist.zip```` file. You can run the ````build.sh```` file (from project's root folder) to execute entire build process:

        $ sh build.sh

**Alternatively**, you can run parts of the build process yourself. All commands below must be executed in the project's root folder.

1) Run vulcanize (make sure ````dist```` folder and ````dist/index.vulcanized.html```` and ````dist/index.vulcanized.js```` files exist before running the command):
    
        $ vulcanize index.html --inline-script | crisper --html dist/index.vulcanized.html --js dist/index.vulcanized.js 
     
2) Copy manifest.json and images folders to dist folder.

        $ cp -av manifest.json dist/manifest.json
        $ cp -avr images dist/images 
        
3) Now you have two options: Either load contents of the ````dist```` folder into Chrome as unpacked extension, or create zip file from the ````dist```` folder and upload it to Chrome Web Store: 
        
        $ zip -r dist.zip dist

