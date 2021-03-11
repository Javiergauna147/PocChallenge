export class CategoryModel {
  private Name: string;
  private Link: string;
  private LinkEncoded: string;
  private Map: string;
  private Value: string;
  private Id: number;
  private Quantity: number;
  private Position: any;
  private Children: CategoryModel[] = [];

  /**
   * Constructor
   * @params _category
   */
  constructor(category: any) {
    this.Name = category.Quantity < 7 ? '(*)' + category.Name : category.Name;
    this.Link = category.Link;
    this.LinkEncoded = category.LinkEncoded;
    this.Map = category.Map;
    this.Value = category.Value;
    this.Id = category.Id;
    this.Quantity = category.Quantity;
    this.Position = category.Position;

    this.createBranches(category);
  }

  /**
   * createBranches()
   * Recorre las distintas ramas del tree recibido desde la api y a medida
   * que lo recorre lo va modelando en objetos CategoryModel
   * @params category
   */
  createBranches(category: any) {
    if (category.Children.length > 0) {
      category.Children.map((category) => {
        this.Children.push(new CategoryModel(category));
      });
    }
  }

  /**** Getters ****/

  /**
   * get category Childrens
   */
  getChildren(): CategoryModel[] {
    return this.Children;
  }
  /**
   * get category Name
   */
  getName(): string {
    return this.Name;
  }

  /**** Metods ****/
  /**
   * Agrega un nuevo children al objeto
   */
  pushNewChildren(newChildren: CategoryModel) {
    this.Children.push(newChildren);
  }
}
