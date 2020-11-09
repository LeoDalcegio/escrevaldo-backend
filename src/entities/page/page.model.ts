import { model } from 'mongoose';
import {
  IPageDocument,
  IPageModel,
} from './page.types';
import pageSchema from './page.schema';

export const pageCollectionName = 'Page';

export const PageModel = model<
  IPageDocument,
  IPageModel
>(pageCollectionName, pageSchema);