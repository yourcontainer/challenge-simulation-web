import catalog from './products.json';

export default function handler(req, res) {
  res.status(200).json({
    products: catalog.products.map(({ id, name, year, heroImage }) => ({
      id, name, year, heroImage,
    }))
  });
}
