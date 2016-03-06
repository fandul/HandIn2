// Ready to Hand in...
/*---------------------------------------------------------------------------------------------------------------------
                 1 - Why would you consider a scripting language as JavaScript as your backend platform?
 ----------------------------------------------------------------------------------------------------------------------

    JavaScript as a Backend Platform could be considered in companies where there is no divided separate front end and
backend teams. So basically you could have end to end development where all code is handled with JS.
    If your webapp does not need CPU bound tasks then JS could be your option for developing backend with help of Node.js
 */

/*---------------------------------------------------------------------------------------------------------------------
                 2 - Explain pros & cons in using Node.js + Express to implement your backend compared
                 	to a strategy using for example java/jax-rs/tomcat
 ----------------------------------------------------------------------------------------------------------------------

                        PROS                                                    CONS

    1.Node.js in some cases can be faster then Java based           1.Java has better IDEs
      backend.                                                      2.Lack of good debugging and monitoring tools.
    2.Node.js and JavaScript make it much easier to migrate         3.Node.js has only one thread, if one request runs
    code. For example logic you built for the browser be moved      too slow, everything will slow down.
    to server.                                                      4. Can`t be used for CPU-intensive operations.
    3.Build process is simplified by using same language.
    4. Queries for DB are written in JS, no need to remember
    syntax differences.
    5. many Web services and DB return data in JSON which is
    part of JavaScript.

 */

/*---------------------------------------------------------------------------------------------------------------------
                 3 - Explain strategies to implement a Node.js based server architecture that still could
                 	take advantage of a multi-core server.
 ----------------------------------------------------------------------------------------------------------------------

    To implement Node.js based server architecture that could take advantage of multi-core Server, there is two main
    choices. The first choice is to let resource allocation happen in the system level where incoming requests are
    distributed to multiple single-threaded Node.js processes each running in a virtual machine assigned a single core
    from the multi-core processor.
        Second choice is using Clustering module. Node.js server consists of multiple processes executing on same
    processor, usually one process for each core. You can start main process which is called master process. Master
    process starts worker processes which handles all incoming requests.
 */

/*---------------------------------------------------------------------------------------------------------------------
                 4 - Explain, using relevant examples, concepts related to the testing a REST-API using
                 	Node/JavaScript + relevant packages
 ----------------------------------------------------------------------------------------------------------------------

            to be updated....

 */

/*---------------------------------------------------------------------------------------------------------------------
                5 - Explain, using relevant examples, the Express concept; Middleware
 ----------------------------------------------------------------------------------------------------------------------

    Express middleware is core concept behind express request processing and routing. Middleware is any number of
    functions that are invoked by Express.js routing layer before your final request handler is. Middleware has access to
    request and response objects. Middleware has also third arguments - next. In order for request to continue (with next
    middleware or route handlers) you must call this argument with next().
*/
    // simple example of middleware where we console.log time on every request.

     var app = express();

     app.use(function (req, res, next) {
     console.log('Time:', Date.now());
     next(); // this call is very important to pass control to next middleware.
     });

/*---------------------------------------------------------------------------------------------------------------------
                 6 - Explain, using relevant examples, how to implement sessions,
                 	and the legal implications of doing this
 ----------------------------------------------------------------------------------------------------------------------

    Sessions are useful for keeping users authenticated after they have logged in your site, so if they reload the
    page they are still logged on.
 */

    // setting up session handler middleware
    var session = require('client-sessions');

    app.use(session({
        cookieName: 'session',
        secret: 'random_string_goes_here',  // high-entropy string to encrypt the cookie.
        duration: 30 * 60 * 1000,           // defines how long session will live in milliseconds.
        activeDuration: 5 * 60 * 1000,      // in case user is active this allows to lengthen session.
    }));

    // to store user data in session
    app.post('/login', function(req, res) {
        User.findOne({ email: req.body.email }, function(err, user) { // checking for user in DB
            if (!user) {
                res.render('login.jade', { error: 'Invalid email or password.' });
            } else {
                if (req.body.password === user.password) {
                    // sets a cookie with the user's info
                    req.session.user = user;
                    res.redirect('/dashboard');
                } else {
                    res.render('login.jade', { error: 'Invalid email or password.' });
                }
            }
        });
    });

/*---------------------------------------------------------------------------------------------------------------------
 7 - Compare the express strategy toward (server side) templating with the one
 you used with Java on 2nd semester
 ----------------------------------------------------------------------------------------------------------------------

 Comparing to second semester server side templating Express strategy seems more simple. During second semester we had
 lots of jsp pages for different views and it took us a lot of lines of code to show them. Syntax is quite similar
 using <% %> tags if we compare JSP with EJS. Strategy used in second semester: Model -> Controller -> Servlet -> .jsp
 Node/Express strategy: Model -> Controller/Router -> .jade
 * /

 /*---------------------------------------------------------------------------------------------------------------------
 8 - Explain, using relevant examples, your strategy for implementing a REST-API with
 Node/Express and show how you can “test” all the four CRUD operations programmatically
 using for example the Request package
 ----------------------------------------------------------------------------------------------------------------------

       For implementing REST-API with Node/Express we could use Express VERB methods.
 * /

 /*---------------------------------------------------------------------------------------------------------------------
 9 - Explain, using relevant examples, about testing JavaScript code, relevant packages
 (Mocha etc.) and how to test asynchronous code
 ----------------------------------------------------------------------------------------------------------------------

 For testing Node we will use Mocha and Chai. For testing asynchronous code we will use Mochas done callback.

 */

 //asynchronous Test example
 it('should be asynchronous', function(done) { // it() block sets up code for a single test
 setTimeout(function() {
 done();
 }, 500);
 });

/*---------------------------------------------------------------------------------------------------------------------
             10 - Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
 ----------------------------------------------------------------------------------------------------------------------



*/

