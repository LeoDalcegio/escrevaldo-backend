import { IUpdatePageRequestDTO } from "./UpdatePageDTO";
import { IPageRepository } from "../../repositories/IPageRepository";

export class UpdatePageUseCase {
  constructor(private pageRepository: IPageRepository) {}

  async execute(data: IUpdatePageRequestDTO) {
    const url = data.url;
    const content = data.content;

    await this.pageRepository.update(url, content);
  }
}
