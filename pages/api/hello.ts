// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { connectToDatabase } from "./_connector";
// import { connectToDatabase as tt } from "./_connector";

export default async (req, res) => {
  // await connectToDatabase();
  // await connectToDatabase();
  // await tt();
  // await tt();

  res.status(200).json({ name: 'John Doe', first: 'xJohn', last: 'Doe' })
}
