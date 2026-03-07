export default async function handler(req, res) {
  const url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCpw1kTVo3tHS1YnQuWwWo2Q';
  try {
    const response = await fetch(url);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
