import { IPageRepository } from "../IPageRepository";
import { IPageDocument } from "../../entities/page/page.types";
import { PageModel } from "../../entities/page";

export class MongoPageRepository implements IPageRepository {
  async show(url: string): Promise<IPageDocument> {
    const page = await PageModel.where("url", url).findOne();

    return page;
  }

  async create(url: string): Promise<IPageDocument> {
    const pageToCreate = {
      url,
      content: "",
    };

    await PageModel.create(pageToCreate);

    return pageToCreate;
  }

  async update(url: string, content: string): Promise<void> {
    await PageModel.updateOne(
      { url },
      {
        $set: { content },
      }
    );
  }
}
