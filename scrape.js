const puppeteer = require('puppeteer');
let pageScraping = false;

//initializing puppeteer
async function scrape() {
    if (pageScraping) return;
    let browser, page;
    let pageUrl = "https://www.twitch.tv/pengu";

    try {
        pageScraping = true;
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.goto(pageUrl, { waitUntil: 'documentloaded', timeout: 60000 });


        //MAY NEED TO CHANGE
        /* wait for chat to be visible */

        let getComents = await page.evaluate(() => {
            let scrapeComments = [];
            //All comments from page are Selected
            //NEED TO: find the correct class Twitch uses
            let comments = document.querySelectorAll('.comment');

            comments.forEach(comment => {
                let commentContent = '';
                //NEED TO: find the correct query to find author and content for twitch
                let commentAuthor = commment.querySelector('');
                commentContent = comment.querySelector('');

                //push each comment to array
                scrapeComments.push({
                    'commentAuthor': commentAuthor,
                    'commentContent': commentContent,
                });
            })

            return { 'userComments': scrapeComments }

        });

        //log the comments
        console.log(await getComments);
    } catch (err) {
        console.log(err.message);
    } finally {
        if (browser) { //cjecl of borwser is open before tring to close
            await browser.close();
            console.log('closing browser');
        }
        pageScraping = fale;
        await setTimeout(scrape, 5000); //wait 5 seconds before scraping againr
    }

}