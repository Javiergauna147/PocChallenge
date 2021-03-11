import { PriceModel } from "./price.model";

export class ProductModel {

    private id: number;
    private name: string;
    private brandName: string;
    private quantity: number;
    private precio: PriceModel;
    private categoryName: string;
    private departmentName: string;


    /**
     * Constructor
     * @params id
     * @params name
     * @params brandName
     * @params quantity
     * @params precio
     * @params categoryName
     * @params departmentName
	*/
    constructor(id: number, name: string, brandName: string, quantity: number, precio: PriceModel, categoryName: string, departmentName: string) {

        this.id = id;
        this.name = name;
        this.brandName = brandName;
        this.quantity = quantity;
        this.precio = precio;
        this.categoryName = categoryName;
        this.departmentName = departmentName;
    }
}