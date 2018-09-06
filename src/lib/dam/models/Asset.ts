export class Asset {

    title: string;
    description: string;
    author: string;
    externalUrl: string;
    resource: File;
    extension: string;
    items: Object;
    type: string;
    category: string;

    constructor(title?, desc?, aut?, url?, f?, ext?,  it?, ty?, cat?) {
      this.title = title || '';
      this.description = desc || '';
      this.author = aut || '';
      this.externalUrl = url || '';
      this.resource = f || null;
      this.extension = ext || '';
      this.items = it || null;
      this.type = ty || '';
      this.category = cat || '';
    }
}
