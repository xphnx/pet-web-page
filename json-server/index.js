/* eslint-disable no-undef */
const e = require('cors');
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post('/login', (req, res) => {
  try {
    const { login, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromDB = users.find((user) => user.login === login && user.password === password);

    if (userFromDB) {
      return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (error) {
    console.info(e);

    return res.status(500).json({ message: error.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Authorization error' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.info('server is running on 8000 port');
});
