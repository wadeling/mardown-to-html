var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '# hello, markdown!';

const fs = require('fs')

try {
	const data = fs.readFileSync('Api.md', 'utf8')
	converter.setOption('tables', 'true');
    html      = converter.makeHtml(data)
	console.log(html)
} catch (err) {
  console.error(err)
}

