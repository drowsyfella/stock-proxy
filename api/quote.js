import yahooFinance from "@gadicc/yahoo-finance2";

export default async function handler(req, res) {
  try {
    const { symbol = "AAPL" } = req.query;
    const result = await yahooFinance.quote(symbol);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
