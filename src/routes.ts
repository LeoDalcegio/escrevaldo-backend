import { Router, Request, Response } from "express";
import { postPageController } from "./useCases/PostPage";
import { updatePageController } from "./useCases/UpdatePage";

const router = Router();

router.post("/*", (request: Request, response: Response) => {
  return postPageController.handle(request, response);
});

router.put("/*", (request: Request, response: Response) => {
  return updatePageController.handle(request, response);
});

export { router };
