function syncLoop(iterations, process, exit){
    // https://whitfin.io/handling-synchronous-asynchronous-loops-javascriptnode-js/
    var index = 1,
        done = false,
        shouldExit = false;
    var loop = {
        next:function(){
            if(done){
                if(shouldExit && exit){
                    return exit(); // Exit if we're done
                }
            }
            // If we're not finished
            if(index < iterations){
                index++; // Increment our index
                process(loop); // Run our process, pass in the loop
            // Otherwise we're done
            } else {
                done = true; // Make sure we say we're done
                if(exit) exit(); // Call the callback on exit
            }
        },
        iteration:function(){
            return index - 1; // Return the loop number we're on
        },
        break:function(end){
            done = true; // End the loop
            shouldExit = end; // Passing end as true means we still call the exit callback
        }
    };
    loop.next();
    return loop;
}

module.exports = {
    'SkyClip': function (browser) {
        browser
            .url('https://skyclip.co/login')
            .setValue('#userName', 'username')
            .setValue('#password', 'password')
            .click('#main > div > div > div.content > div > div > div > div > div > div > form > div.form-actions > button')
            .perform(function () {
                browser.useXpath()
                syncLoop(100, function(loop){
                    var i = loop.iteration();
                    console.log(i);
                    var ele = '//*[@id="main"]/div/div[2]/div[2]/div/div[1]/div[4]/ul/li['+ i + ']/div/div[2]/div[3]/div[1]/button[3]/i'
                    browser.keys(browser.Keys.ARROW_DOWN)
                    browser.keys(browser.Keys.ARROW_DOWN)
                    browser.pause(1200)
                    browser.getText('//*[@id="main"]/div/div[2]/div[2]/div/div[1]/div[5]/div/div/div[3]/p', function(result) {
                        var finished = "That's all, folks!"
                        if (result.value === finished) {
                            console.log(finished)
                            loop.break()
                            browser.end();
                        } else {
                            browser.click(ele)
                            loop.next();
                        }
                    });
                }, function(){
                    console.log('Done');
                });
            })
        }
};
