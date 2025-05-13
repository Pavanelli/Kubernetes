const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello Pavanelli</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #4e54c8, #8f94fb);
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        h1 {
          margin: 0;
          font-size: 3em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello Pavanelli</h1>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
