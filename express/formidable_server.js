const express = require('express');
const path = require('path');
const formidable = require('formidable');

const server = express();
server.listen(3030, () => {
  console.log('running http://localhost:3030/');
});

server.post('/file', (req, res, next) => {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
    uploadDir: path.resolve(__dirname, '../post_file/upload'),
  });

  form.parse(req, (err, fields, files) => {
    if (err) throw err
    console.log(fields, files)
    res.send(JSON.stringify({ fields, files }));
  })

});
