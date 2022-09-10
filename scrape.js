const puppeteer = require('puppeteer');
let pageScraping = false;

//initializing puppeteer
async function scrape() {
    if (pageScraping) return;
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto(pageUrl, { waitUntil: 'documentloaded', timeout: 60000 });


    //MAY NEED TO CHANGE
    /* wait for chat to be visible */

    async function getComments() {
        let scrapeComments = [];
        let comments = document.querySelectorAll('.comment');

    }
}