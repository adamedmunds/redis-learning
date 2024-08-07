import { Ability } from './PokemonComponents/Ability';
import { Cries } from './PokemonComponents/Cries';
import { GameIndex } from './PokemonComponents/GameIndex';
import { GenericApiResponse } from './PokemonComponents/GenericApiResponse';
import { HeldItem } from './PokemonComponents/HeldItem';
import { PokemonMove } from './PokemonComponents/Move';
import { PastType } from './PokemonComponents/PastType';
import { Sprite } from './PokemonComponents/Sprite';
import { Stat } from './PokemonComponents/Stat';
import { PokemonType } from './PokemonComponents/Type';

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<Ability>;
  forms: Array<GenericApiResponse>;
  game_indices: Array<GameIndex>;
  held_items: Array<HeldItem>;
  location_area_encounters: string;
  moves: Array<PokemonMove>;
  past_types: Array<PastType>;
  sprites: Sprite;
  cries: Cries;
  species: GenericApiResponse;
  stats: Array<Stat>;
  types: Array<PokemonType>;
};
