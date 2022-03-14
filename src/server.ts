import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: true });
});

app.listen(3000, () =>
  console.log('🚀 Server is running at http://localhost:3000')
);
