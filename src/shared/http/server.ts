import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Heeloo World' });
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server running on port 3000! 🔥'));
