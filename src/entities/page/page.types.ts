import { Document, Model } from 'mongoose';

/**
 * Modelo de dados da Entidade da collection.
 */
export interface IPage {
  url: String;
  content: String;
}

/**
 * Document that the mongoose has to return from the queries.
 */
export interface IPageDocument
  extends IPage,
    Document {}
 
/**
 * Data model for adjacent queries on the Schema,
 * can be used in methods typing as well.
 */
export interface IPageModel
  extends Model<IPageDocument> {
}