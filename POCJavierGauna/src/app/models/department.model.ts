export class DepartmentModel {

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
    constructor( department: any) {
        this.Name = department.Name;
        this.Link = department.Link;
        this.LinkEncoded = department.LinkEncoded;
        this.Map = department.Map;
        this.Value = department.Value;
        this.Quantity = department.Quantity;
        this.Position = department.Position;
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