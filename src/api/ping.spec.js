import request from 'supertest';
import server from '../../app';

describe('ping endpoint', () =>  {
  test('should respond to the get method', async() => {
    const response =  await request(server).get('/api/ping');
    expect(response.statusCode).toBe(200);
  })
});
