import { Schema } from 'mongoose';

// ref tutorial: https://medium.com/swlh/using-typescript-with-mongodb-393caf7adfef

const PageSchema = new Schema(
  {
    url: {
      type: String,
      index: true,
      unique: true
    },
    content: String,
  },
  {
    timestamps: true,
  }
);

export default PageSchema;