const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/message', async (req, res) => {
    const userMessage = req.body.message;
    try {
        const response = await axios.post('https://api.huggingface.co/models/CohereForAI/c4ai-command-r-plus', {
            inputs: userMessage,
        }, {
            headers: {
                'Authorization': 'Bearer your-token'
            }
        });
        const botMessage = response.data.generated_text;
        res.json({ message: botMessage });
    } catch (error) {
        res.json({ error: 'Error in processing request' });
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
