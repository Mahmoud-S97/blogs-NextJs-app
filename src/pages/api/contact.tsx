import { MongoClient } from 'mongodb';

const handler = async (req: any, res: any) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ error: true, message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message
        }

        let client: any;

        try {

            client = await MongoClient.connect(process.env.MONGO_DB_URL);

        } catch (error: any) {
            res.status(500).json({ error: true, message: 'Internal server error, could not connect to databse.' });
            return;
        }

        const db = client.db(process.env.MONGO_DB_NAME);

        try {
            const results = await db.collection('messages').insertOne(newMessage);
        } catch (error: any) {
            client.close();
            res.status(500).jason({ error: true, message: 'Storing message failed, please try again later.' });
            return;
        }

        client.close();

        res.status(201).json({ error: false, message: 'Stored message successfully!', data: newMessage });
    }
}

export default handler;