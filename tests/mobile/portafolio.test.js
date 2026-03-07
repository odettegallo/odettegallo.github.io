import { remote } from 'webdriverio';

let driver;

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554', // Usa el nombre exacto de tu sesión [cite: 3]
  browserName: 'Chrome',
  'appium:chromedriver_autodownload': true,
  'wdio:enforceWebDriverClassic': true
};


beforeAll(async () => {
  driver = await remote({
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities,
  });
},60000);

afterAll(async () => {
  if (driver) {
    await driver.deleteSession();
  }
});

test('Debe mostrar el nombre correcto en la Hero Section', async () => {
  // Puedes usar tu IP local o la URL de producción
  await driver.url('https://odettegallo.github.io/');

  const nameElement = await driver.$('h1.text-h4'); 
  const text = await nameElement.getText();

  // Comparamos con el nombre definido en tu Store [cite: 4]
  expect(text).toBe('Odette Gallo Martínez');
});