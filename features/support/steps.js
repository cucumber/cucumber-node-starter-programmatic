import { Given, When, Then } from '@cucumber/node'

Given('{word} has {float} in their account', async (t, customer, balance) => {
    t.todo()
})

When('{word} tries to withdraw {float}', async (t, customer, amount) => {
    t.todo()
})

Then('the withdrawal is successful', async (t) => {
    t.todo()
})

Then('the withdrawal is declined', async (t) => {
    t.todo()
})