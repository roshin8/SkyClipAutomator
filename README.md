# SkyClipAutomator
Refresh all your clips on SkyClip automatically



Download ChromeDriver from here
------------
https://sites.google.com/a/chromium.org/chromedriver/downloads


Selenium Server
---------------
Selenium Server is a Java application which Nightwatch uses to connect to the various browsers. It runs separately on the machine with the browser you want to test. You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed, minimum required version is 7. You can check this by running java -version from the command line.

Download Selenium
-----------
Download the latest version of the selenium-server-standalone-{VERSION}.jar file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place it on the computer with the browser you want to test. In most cases this will be on your local machine and typically inside your project's source folder.

A good practice is to create a separate subfolder (e.g. bin) and place it there as you might have to download other driver binaries if you want to test multiple browsers.



> For more info on Nightwatch, refer [Getting started with Nightwatch](http://nightwatchjs.org/gettingstarted#installation)

How to run:
---------
nightwatch -e chrome
