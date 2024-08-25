export default async function handler(req, res) {
    if (req.method === 'POST') {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(response.status).json(data);
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
