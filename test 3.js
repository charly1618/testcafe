import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://localhost:3001/`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('#root a').withText('EDIT'))    

    await t
        .click('#system_name')
        .selectText('#system_name', 15, 0)
        .pressKey('capslock')
        .typeText('#system_name', 'RENAMED DEVICE')
        .click(Selector('#root button').withText('UPDATE'))
        Selector('#root span').withText('RENAMED DEVICE')
});