import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://localhost:3001/`;

test('New Test 1', async t => {
    await t
        .click(Selector('#root button').withText('REMOVE').nth(9))    
});