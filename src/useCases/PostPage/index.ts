import { MongoPageRepository } from "../../repositories/implementations/MongoPageRepository";
import { PostPageUseCase } from "./PostPageUseCase";
import { PostPageController } from "./PostPageController";

const mongoPageRepository = new MongoPageRepository();

const postPageUseCase = new PostPageUseCase(mongoPageRepository);

const postPageController = new PostPageController(postPageUseCase);

export { postPageUseCase, postPageController };
