import { IPageDocument } from "../entities/page/page.types";

export interface IPageRepository {
  show(url: string): Promise<IPageDocument>;
  create(url: string): Promise<IPageDocument>;
  update(url: string, content: string): Promise<void>;
}
