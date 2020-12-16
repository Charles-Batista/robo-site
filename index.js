const puppeteer = require('puppeteer');

console.log('Bem vindo ao Best Conversor de Moedas');

async function robo() {
	const browser = await puppeteer.launch({ heandless: false });
	const page = await browser.newPage();
	const moedaBase = 'dolar';
	const moedaFinal = 'real';
	const qualquerUrl = `https://www.google.com/search?channel=fs&client=ubuntu&q=${moedaBase}+para+${moedaFinal}`;
	await page.goto(qualquerUrl);
	await page.screenshot({path: 'exemple.png'});

	//await browser.close();
}