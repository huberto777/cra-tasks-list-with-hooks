import { wait } from './wait';

const FakeAuthApi = {
  async login(credentials) {
    await wait(200);
    const { email, password } = credentials;
    if (email === 'hubert@example.com' && password === 'secret') {
      return {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBleGFtcGxlLmNvbSIsImlhdCI6MTU4OTg3OTkxNywiZXhwIjoxNTg5ODgzNTE3LCJzdWIiOiIyIn0.BRhgk1nXn4eDRrwei_No0EVom6uv8feCTOYLGOl-j1E',
      };
    }
    throw new Error('invalid credentials');
  },
};

export default FakeAuthApi;
