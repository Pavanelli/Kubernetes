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
          background: black;
          color: #00ff00;
          font-family: monospace;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          flex-direction: column;
        }

        h1 {
          z-index: 1;
          text-shadow: 0 0 10px #00ff00;
        }

        .matrix {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #00ff00;
          opacity: 0.1;
          font-size: 14px;
          white-space: pre;
          line-height: 14px;
          pointer-events: none;
        }
      </style>
    </head>
    <body>
      <div class="matrix" id="matrix"></div>
      <h1>Hello Pavanelli</h1>
      <script>
        const matrix = document.getElementById('matrix');
        const chars = '01アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const rows = 40;
        const cols = 80;

        function getRandomChar() {
          return chars[Math.floor(Math.random() * chars.length)];
        }

        function generateMatrixText() {
          let text = '';
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
              text += Math.random() > 0.975 ? getRandomChar() : ' ';
            }
            text += '\\n';
          }
          return text;
        }

        setInterval(() => {
          matrix.textContent = generateMatrixText();
        }, 100);
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
