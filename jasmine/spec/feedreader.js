/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has URL defined', function() {
          allFeeds.forEach(function (allFeed) {
              expect(allFeed.url).toBeDefined();
              expect(allFeed.url.length).not.toBe(0);
           });
         });


        /* Test loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has a name defined', function() {
           allFeeds.forEach(function (allFeed) {
              expect(allFeed.name).toBeDefined();
              expect(allFeed.name.length).not.toBe(0);
           });
         });
    });


    /*  Write a new test suite named "The menu" */

    describe('The menu', function() {


        /* Test that ensures the menu element is hidden by default.  */

          var hiddenMenu = document.querySelector('body').classList.contains('menu-hidden');
          it('has menu element hidden by default', function() {
            expect(hiddenMenu).toBe(true);

          });



         /* Test that ensures the menu shows/hides when the menu icon is clicked.*/

          it('hides and shows when menu icon is clicked', function() {
            var menuClick = document.querySelector('.menu-icon-link')
            menuClick.click();
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(false);

            menuClick.click();
          });



    });


    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('checks that loadFeed is called and completes its job', function() {
           var feed = document.querySelector('.feed');
           expect(feed.children.length).toBeGreaterThan(0);
         });


    });

  describe('New Feed Selection', function() {
        /*Test that ensures when a new feed is loaded that the content actually changes.
         *
         */

         initialFeed = [];
         var feed = document.querySelector('.feed');

         beforeEach(function(done) {
           loadFeed(0, done);
           Array.from(feed.children).forEach(function(entry) {
             initialFeed.push(entry);
           });

           loadFeed(1, done);
         });



         it('checks that content changes when new feed is loaded', function() {
          Array.from(feed.children).forEach(function(entry,index) {
            expect(entry === initialFeed[index]).toBe(false);
          });
        });
  });

}());
