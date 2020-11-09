import { MongoPageRepository } from "../../repositories/implementations/MongoPageRepository";
import { UpdatePageUseCase } from "./UpdatePageUseCase";
import { UpdatePageController } from "./UpdatePageController";

const mongoPageRepository = new MongoPageRepository();

const updatePageUseCase = new UpdatePageUseCase(mongoPageRepository);

const updatePageController = new UpdatePageController(updatePageUseCase);

export { updatePageUseCase, updatePageController };
