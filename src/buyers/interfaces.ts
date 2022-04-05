import { IEnty, IPerson, ISearch } from '../common';
import { IStatement } from '../sellers';

export interface ISearchBuyer extends ISearch {
  readonly taxpayer_id: string;
}
export interface IBuyer extends IPerson, IEnty, IStatement {}
