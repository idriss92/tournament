export const db = process.env.MONGOHQ_URL || process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/ReactWebpackNode';

export default {
  db
};
