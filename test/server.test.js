const server = require('../src/server');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3159);
  });

  test('responds to GET /', async () => {
    // TODO: implement test logic
  });
});

afterAll(() => server.close());