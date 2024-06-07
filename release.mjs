import process from 'node:process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { $ } from 'execa'
import pkg from './package.json' assert { type: 'json' }

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url))

const resolve = x => path.resolve(_dirname, x)

const args = process.argv.slice(2)

const mode = args[0]
const groups = ['major', 'minor', 'patch']

if (!mode || !groups.includes(mode))
  throw new Error('you must specify the mode[major, minor, patch]')

init()

async function init() {
  const version = bumpVersion(mode)
  await $`npm run build`
  await $`git add .`
  const msg = `bump ${version}`
  await $`git commit -m ${msg}`
  await $`git tag ${version}`
  await $`git push`
  await $`git push --tags`
  // eslint-disable-next-line no-console
  console.log(`version ${version} releeased.`)
}

function bumpVersion(mode) {
  const versionTuple = pkg.version.split('.').map(x => Number.parseInt(x))

  const index = groups.findIndex(x => x === mode)
  versionTuple[index]++
  if (index === 1)
    versionTuple[2] = 0
  if (index === 0) {
    versionTuple[1] = 0
    versionTuple[2] = 0
  }
  pkg.version = versionTuple.join('.')

  fs.writeFileSync(resolve('./package.json'), `${JSON.stringify(pkg, null, 2)}\n`, 'utf-8')
  return pkg.version
}
