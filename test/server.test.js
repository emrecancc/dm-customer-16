const server = require('../src/server');
const request = require('supertest');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3179);
  });

  afterAll(() => server.close());

  test('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});