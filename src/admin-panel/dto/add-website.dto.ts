export interface AddWebsiteDto {
  name: string;
  searchUrl: string;
  baseUrl: string;
  isBaseUrlNeeded: boolean;
  spaceHandler: string;
  rowSelector: string;
  nameSelector: string;
  linkSelector: string;
  seedsSelector: string;
  leechesSelector: string;
  dateSelector: string;
  sizeSelector: string;
  magnetSelector: string;
  skipRows: number;
  endSymbols: string;
}
