const puppeteer = require('puppeteer');

//creating a async function which allows us to use 'await'
//the async function returns an asyncFunction object..
//what this function does....
//takes url as an argument... and when called uses the url within its body..
//the await puppeeteer.launch().. method... waits for the acceptance of the url
//then.. after the argument has been set...
//calls the puppeeteer.. which is an browser..
//then when launched.. it launches a new page..
//then when complete ( on success ) it opens a new page in the puppeeteer browser..
// and directs to the browser that was set within the scrapeProduct function..
// when the browser has been loaded...and page has been loaded.. go to url
// next puppeeteer's selector grabs the xpath
async function scrapeProduct(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url

    // Getting image
  // returns an array unto the const el -- put the id of the image here..
  const [el] = await page.$x('//*[@id="imgBlkFront"]');
  const src = await el.getProperty('src');
  // converting src to json value and storing in const srcTxt
  const imageUrl = await src.jsonValue();

//getting title -- put the title of the product here..
  const [el2] = await page.$x('//*[@id="productTitle"]');
  const txt = await el2.getProperty('textContent');
  const title = await txt.jsonValue();

//getting price -- put the price for the product here ...
  const [el3] = await page.$x('//*[@id="buyNewSection"]/a/h5/div/div[2]/span[2]');
  const txt2 = await el3.getProperty('textContent');
  const price = await txt2.jsonValue();

  console.log({imageUrl, title, price});

  browser.close();
}

//suplying the above function with a valid url... -testing purposes only..

scrapeProduct('https://www.example.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2?keywords=black+swan&qid=1578786293&sr=8-2');
