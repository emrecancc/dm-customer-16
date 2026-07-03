import request from 'supertest';
import app from '../src/app';

describe('API responds within 600ms', () => {
  it('should respond within 600ms', async () => {
    const start = Date.now();
    await request(app).get('/api/health');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(600);
  });
});