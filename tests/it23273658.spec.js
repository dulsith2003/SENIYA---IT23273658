import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata kohomadha?');
  await expect(page.getByText('ඔයාට කොහොමද?')).toBeVisible();
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('samaavenna.');
  await expect(page.getByText('සමාවෙන්න.')).toBeVisible();
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mokakdha karanne?.');
  await expect(page.getByText('මොකක්ද කරන්නේ?')).toBeVisible();
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa beheth bivvadha?');
  await expect(page.getByText('ඔයා බෙහෙත් බිව්වද?')).toBeVisible();
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vahaama enna.');
  await expect(page.getByText('වහාම එන්න.')).toBeVisible();
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aachchi rasata kaeema uyalaa.');
  await expect(page.getByText('ආච්චි රසට කෑම උයලා.')).toBeVisible();
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama bath kanna yanavaa.');
  await expect(page.getByText('මම බත් කන්න යනවා.')).toBeVisible();
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('obava hamuviima sathutak!');
  await expect(page.getByText('ඔබව හමුවීම සතුටක්!')).toBeVisible();
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata koopi ekak saadhaa dhenna puluvandha?');
  await expect(page.getByText('මට කෝපි එකක් සාදා දෙන්න පුලුවන්ද?')).toBeVisible();
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eya obata kiriimata nohaeka.');
  await expect(page.getByText(' එය ඔබට කිරීමට නොහැක.')).toBeVisible();
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakara mata lipinaya liyaa dhenavaadha?');
  await expect(page.getByText('කරුණාකර මට ලිපිනය ලියා දෙනවාද?')).toBeVisible();
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata nam epaa.');
  await expect(page.getByText('මට නම් එපා')).toBeVisible();
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('heta udhee puluvandha.');
  await expect(page.getByText('හෙට උදේ පුලුවන්ද.')).toBeVisible();
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari mama karalaa dhennam.');
  await expect(page.getByText('හරි මම කරලා දෙන්නම්.')).toBeVisible();
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyata kohomadha?');
  await expect(page.locator('div').filter({ hasText: /^ඔයාට කොහොමද?$/ })).toBeVisible();
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('anee ehema karanna epaa');
  await expect(page.getByText('අනේ එහෙම කරන්න එපා')).toBeVisible();
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('iiyee mata pothak hambavuNaa.');
  await expect(page.getByText('ඊයේ මට පොතක් හම්බවුණා.')).toBeVisible();
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama pothak ganna yanavaa.');
  await expect(page.getByText('මම පොතක් ගන්න යනවා.')).toBeVisible();
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata dhaen kathaa karanna baee.');
  await expect(page.getByText('මට දැන් කතා කරන්න බෑ.')).toBeVisible();
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('password eka mokakdha?');
  await expect(page.getByText('password එක මොකක්ද?')).toBeVisible();
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama kaemathi car ekakata.');
  await expect(page.getByText('මම කැමති  car එකකට.')).toBeVisible();
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('call ekakin eyi.');
  await expect(page.getByText('call එකකින් එයි.')).toBeVisible();
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mema potha RS. 1500 k venavaa.');
  await expect(page.getByText('මෙම පොත RS. 1500 ක් වෙනවා.')).toBeVisible();
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('maagee upandhinaya adha vee.');
  await expect(page.getByText('මාගේ උපන්දිනය අද වේ.')).toBeVisible();
});

test('Pos_Fun_0025', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('magee nivaadu dhavasa adha.');
  await expect(page.getByText('මගේ නිවාඩු දවස අද.')).toBeVisible();
});

test('Pos_Fun_0026', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata paara kiyanavadha?');
  await expect(page.getByText('මට පාර කියනවද?')).toBeVisible();
});

test('Pos_Fun_0027', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha yanavaa gamanak.');
  await expect(page.getByText('අද යනවා ගමනක්.')).toBeVisible();
});

test('Pos_Fun_0028', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa rata yanavadha?');
  await expect(page.getByText('ඔයා රට යනවද?.')).toBeVisible();
});

test('Pos_Fun_0029', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama yanavaa pansalata oyaa enavadha?');
  await expect(page.getByText('මම යනවා පන්සලට ඔයා එනවද?')).toBeVisible();
});

test('Pos_Fun_0030', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha lassana dhavasak.');
  await expect(page.getByText('අද ලස්සන දවසක්.')).toBeVisible();
});

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhaen patavanna oonedha.');
  await page.getByLabel('Clear').click();
  await expect(page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' })).toBeVisible();
  await expect(page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')).toBeVisible();
});

test('Pos_UI_0002', async ({ page }) => {
  const viewports = [
    { width: 375, height: 667, name: 'Mobile' },
    { width: 768, height: 1024, name: 'Tablet' },
    { width: 1280, height: 720, name: 'Desktop' }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('https://www.swifttranslator.com/');
    await expect(page.getByText('Singlish ↔ English TranslatorHelpSwitch Typing LanguageSinglishSinhala')).toBeVisible();
    await expect(page.getByText('FeaturesView SuggestionsUses')).toBeVisible();
    await expect(page.locator('.col-span-12 > .space-y-4 > div:nth-child(2)').first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Singlish$/ }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Swap Languages' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Sinhala$/ }).first()).toBeVisible();
    await expect(page.getByLabel('Clear')).toBeVisible();
  }
});

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('wahale hulagata giyhaa');
  await expect(page.getByText('වහලේ හුලගට ගියා')).toBeVisible();
});
