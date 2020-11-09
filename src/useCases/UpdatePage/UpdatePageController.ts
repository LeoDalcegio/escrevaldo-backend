import { UpdatePageUseCase } from "./UpdatePageUseCase";
import { Request, Response } from "express";

export class UpdatePageController {
  constructor(private updatePageUseCase: UpdatePageUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const url = request.params[0];
    const { content } = request.body;

    try {
      await this.updatePageUseCase.execute({
        url,
        content,
      });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
