const request = require('supertest');
const server = require('../src/server');

describe('Server', () => {
  beforeAll((done) => {
    // Use a random available port to avoid address conflicts
    server.listen(0, done);
  });

  afterAll((done) => {
    // Ensure the server is closed after all tests
    server.close(done);
  });

  test('GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
