import { IPostPageRequestDTO } from "./PostPageDTO";
import { IPageRepository } from "../../repositories/IPageRepository";

export class PostPageUseCase {
  constructor(private pageRepository: IPageRepository) {}

  async execute(data: IPostPageRequestDTO) {
    const page = await this.pageRepository.show(data.url);

    if (!page) {
      this.pageRepository.create(data.url);
    }

    return page;
  }
}
