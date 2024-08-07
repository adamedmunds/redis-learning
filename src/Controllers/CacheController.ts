import express, { Request, Response } from 'express';
import { StatusCodes } from '../Enums/statusCodes';
import { CacheManager } from '../Services/CacheManagerService';

export const cacheRouter = express.Router();

cacheRouter.get('/:id', async (req: Request, res: Response) => {
  const pokemonAccessCount = CacheManager.getPokemonAccessCount(req.params.id);
  const data =
    pokemonAccessCount !== undefined ? pokemonAccessCount : 'no data found';
  return res.status(StatusCodes.OK).send({ data: data });
});
