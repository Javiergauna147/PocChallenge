export class BrandModel {
  private Name: string;
  private Link: string;
  private LinkEncoded: string;
  private Map: string;
  private Value: string;
  private Quantity: number;
  private Position: any;

  /**
   * Constructor
   * @params department
   */
  constructor(brand: any) {
    this.Name = brand.Name;
    this.Link = brand.Link;
    this.LinkEncoded = brand.LinkEncoded;
    this.Map = brand.Map;
    this.Value = brand.Value;
    this.Quantity = brand.Quantity;
    this.Position = brand.Position;
  }

  /**** Getters ****/

  /**
   * get department name
   */
  getName(): string {
    return this.Name;
  }

  /**
   * get department link
   */
  getLink(): string {
    return this.Link;
  }

  /**
   * get department map
   */
  getMap(): string {
    return this.Map;
  }

  /**
   * get department quantity
   */
  getQuantity(): number {
    return this.Quantity;
  }
}
