const path = require('path')
const nunjucks = require('nunjucks')
const TemplateLoader = require('../lib')

const filename = path.join(__dirname, 'custom-template.yml')

const env = new nunjucks.Environment()
env.addFilter('locale', str => str.toLocaleString())

const templateLoader = new TemplateLoader(env)
const template = templateLoader.compileSync(filename)
const message = template.message.renderSync(template.meta)

console.log(message)

/* Output:
This product is 100,000 yen.
*/
