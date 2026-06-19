import type { Specifications } from "./Specifications";

export interface Choices {
  id: number;
  categoria: string;
  subType: string;
  specifications: Specifications;
}