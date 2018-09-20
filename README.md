# How to Run the FeedReader Application

First, you would need to know why the application was created. This application was developed to read RSS feeds.

Several tests are running in the background.
 - 1st test- test that feeds are defined and are not empty.
 - 2nd test- checks to make sure each feed has an URL
 - 3rd test- Checks that each feed has a name.
 - 4th test- Checks that the hidden menu is hidden by default.
 - 5th test- checks to see if the hidden menu toggles from hidden to visible when the hamburger icon is clicked
 - 6th test- checks to make sure at least one entry in the feed
 - Last test- makes sure the content changes when a new feed had loaded.

 These tests will run at each refresh or page load.

 # How to install the reader locally

 1. Clone this repository by clicking the green "Clone or download" button via GitHub Desktop or Download ZIP
 2. Open the index.html file in your browser
 3. Jasmine then runs all the tests indicated in the feedreader.js file.

- Scroll to the bottom of the page to see the Jasmine test results. All tests must pass with no failures. Should there be any failures, Jasmine will indicate where the problem lies. You would review the messages and errors; pinpoint which file/files are causing the issue. You would then make code changes to that file appropriately. Console.log is your friend. Use it to see what the application is doing in the background.

NOTE: Should a test fail, the issue is most likely in the feedreader.js file. You can find the file in the spec\js folder.  
