import data from '../data/data.json' with { type: 'json' };

export default function handler(req, res) {
  const number = String(req.query.number || '').trim();
  if (!number) return res.status(400).json({ error: 'Missing number parameter' });

  const results = data.filter((item) =>
    Object.values(item).some((value) => String(value).includes(number))
  );

  return res.status(200).json({ count: results.length, results });
}
