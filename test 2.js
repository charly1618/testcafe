import { Selector } from 'testcafe';
fixture `New Fixture`
    .page `http://localhost:3001/`;
  
test(`New Test`, async t => {
    await t
        .click(Selector('#root a').withText('ADD DEVICE'))    
        .click('#system_name')
        .pressKey('capslock')
        .typeText('#system_name', 'DEVICE_NEW')
        .typeText('#hdd_capacity', '505')
        .click(Selector('#root button').withText('SAVE'))
        .pressKey('capslock')
        Selector('#root span').withText('DEVICE_NEW')
        Selector('#root span').withText('WINDOWS WORKSTATION').nth(1)
        Selector('#root span').withText('505 GB').nth(1)
        Selector('#root div').withText('DEVICE_NEW').nth(4)
});