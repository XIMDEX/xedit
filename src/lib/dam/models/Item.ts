/**
 * The item model used by the table component to show info about every single resource.
 */
export class Item {
  /**
   * The id of the resource
   */
  id: number;
  /**
   * The title of the resource
   */
  title: string;
  /**
   * The hash of the resource
   */
  hash: string;
  /**
   * The file size of the resource
   */
  size: string;
  /**
   * The type of the resource
   */
  type: string;
  /**
   * The image src of the resource
   */
  image: string;

  /**@ignore */
  constructor(id, tit?, h?, siz?, tp?, img?) {
    this.id = id;
    this.title = tit || '';
    this.hash = h || '';
    this.size = siz || '';
    this.type = tp || '';
    this.image = img || '';
  }
}
