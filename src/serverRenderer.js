import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '@root/src/root';

const renderHTML = (html) => (
  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Title</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    </head>
    <body>
        <div id="reactRoot">${html}</div>
    </body>
    </html>`
);

export default () => (req, res) => {
  const htmlString = renderToString(<App />);
  res.send(renderHTML(htmlString));
};
