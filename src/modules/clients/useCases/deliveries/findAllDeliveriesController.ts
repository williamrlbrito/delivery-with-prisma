import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./findAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request.params;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(id_client);

    return response.json(deliveries);
  }
}