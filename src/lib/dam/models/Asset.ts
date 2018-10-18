/**
 * The Asset model used by the resources modal to show or store the resources parameters.
 */
export class Asset {

  /**
   * The title of the asset
   */
  title: string;
  /**
   * The description text for the asset
   */
  description: string;
  /**
   * The author of the asset
   */
  author: string;
  /**
   * The external URL for the file of the asset
   */
  externalUrl: string;
  /**
   * The file for the asset
   */
  resource: File;
  /**
   * The file extension of the asset
   */
  extension: string;
  /**
   * The type of resource attached to the asset
   */
  type: string;

  /**@ignore */
  constructor(
    title?: string,
    description?: string,
    author?: string,
    url?: string,
    resource?: File,
    extension?: string,
    type?: string
    ) {
    this.title = title || '';
    this.description = description || '';
    this.author = author || '';
    this.externalUrl = url || '';
    this.resource = resource || null;
    this.extension = extension || '';
    this.type = type || '';

  }
}
