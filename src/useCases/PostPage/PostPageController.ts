import { PostPageUseCase } from "./PostPageUseCase";
import { Request, Response } from "express";

export class PostPageController {
  constructor(private postPageUseCase: PostPageUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const url = request.params[0];

    try {
      const page = await this.postPageUseCase.execute({
        url,
      });

      return response.status(201).send(page);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
