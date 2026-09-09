import data from '../data/data.json' with { type: 'json' };

export default function handler(req, res) {
  const q = String(req.query.q || '').trim().toLowerCase();
  if (!q) return res.status(400).json({ error: 'Missing q parameter' });

  const results = data.filter((item) =>
    Object.values(item).some((value) => String(value).toLowerCase().includes(q))
  );

  return res.status(200).json({ count: results.length, results });
}
