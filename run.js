import { run } from 'node:test'
import { spec } from 'node:test/reporters'

run({
    execArgv: ['--enable-source-maps', '--import', '@cucumber/node/bootstrap'],
    globPatterns: ['features/**/*.feature'],
})
  .compose(spec)
  .pipe(process.stdout)

