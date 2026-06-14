import type { Specifications } from "./Specifications";

export interface Escolha {
  id: number;
  categoria: string;
  subType: string;
  specifications: Specifications;
}