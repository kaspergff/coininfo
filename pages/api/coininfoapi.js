export default function handler(req, res) {
  res.status(200).json({ 
    'BTC': 'Bitcoin' ,
    'ETH': 'Ethereum',
    'ADA': 'Cardano'

  })
}