import data from '../../data/data.json' with { type: 'json' };

export default function handler(req, res) {
  const user = data.find((item) => item.id === String(req.query.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.status(200).json(user);
}
