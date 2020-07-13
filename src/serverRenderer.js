import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './index';
import configureStore from './store/index';

const renderHTML = (html, preloadedState) => (
  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Title</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
        <link rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous"
        >
        ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
    </head>
    <body>
        <div id="reactRoot">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
    </body>
    </html>`
);

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
