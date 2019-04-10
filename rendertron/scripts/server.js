const express = require('express');
const rendertron = require('rendertron-middleware');

const DIST_FOLDER = process.cwd() + '/build';
// Add googlebot to the list of bots we will use Rendertron for
const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');

const app = express();
app.set('view engine', 'html');

// Add Rendertron middleware to send bot requests to Rendertron
app.use(rendertron.makeMiddleware({
    proxyUrl: 'http://localhost:3000/render', // 実行中のRendertronプロキシサービスのベースURL。
    userAgentPattern: BOT_UA_PATTERN
}));

// Static Assets
app.get('*.*', express.static('build'));

// Point all routes to index...
app.get('*', (req, res) => {
  res.set('Vary', 'User-Agent');
  res.sendFile(DIST_FOLDER + '/index.html');
});

app.listen(8080);
