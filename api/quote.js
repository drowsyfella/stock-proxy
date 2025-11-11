import yahooFinance from "@gadicc/yahoo-finance2";

export default async function handler(req, res) {
  try {
    const { symbol } = req.query;

    if (!symbol) {
      return res.status(400).json({ error: "Missing symbol parameter" });
    }

    const result = await yahooFinance.quote(symbol);
    res.status(200).json(result);
  } catch (error) {
    console.error("Yahoo Finance API Error:", error);
    res.status(500).json({ error: "Failed to fetch data", details: error.message });
  }
}
