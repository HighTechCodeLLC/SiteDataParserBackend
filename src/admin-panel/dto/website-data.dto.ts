export interface WebsiteDataDto {
  id: number;
  name: string;
  baseUrl: string;
  searchUrl: string;
  spaceHandler: string;
  isBaseUrlNeeded: boolean;
  endSymbols: string;
  dateSelector: string;
  leechesSelector: string;
  linkSelector: string;
  magnetSelector: string;
  nameSelector: string;
  rowSelector: string;
  seedsSelector: string;
  sizeSelector: string;
  dateFormat: string;
  skipStartRows: number;
  skipEndRows: number;
}
