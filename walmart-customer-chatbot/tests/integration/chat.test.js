import request from 'supertest';
import app from '../../src/backend/server';

describe('Chat Integration Tests', () => {
    it('should send a message and receive a response', async () => {
        const response = await request(app)
            .post('/api/chat')
            .send({ message: 'Hello, chatbot!' })
            .expect(200);

        expect(response.body).toHaveProperty('response');
        expect(response.body.response).toBeDefined();
    });

    it('should handle empty messages', async () => {
        const response = await request(app)
            .post('/api/chat')
            .send({ message: '' })
            .expect(400);

        expect(response.body).toHaveProperty('error', 'Message cannot be empty');
    });
});