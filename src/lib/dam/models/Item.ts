export class Item {
  id: number;
  title: string;
  hash: string;
  size: string;
  type: string;
  constructor(id, tit?, h?, siz?, tp?) {
    this.id = id;
    this.title = tit || '';
    this.hash = h || '';
    this.size = siz || '';
    this.type = tp || '';
  }
}
