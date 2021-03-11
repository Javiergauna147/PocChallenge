import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { DepartmentModel } from './models/department.model';
import { BrandModel } from './models/brand.model';
import { CategoryModel } from './models/category.model';
import { DataModel } from './models/data.model';
import { HelpersService } from './services/helpers.service';
import { PriceModel } from './models/price.model';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'PocJavierGauna';
  deparmentsInput: DepartmentModel[] = [];
  deparmentsOutput: DepartmentModel[] = [];
  brandsInput: BrandModel[] = [];
  brandsOutput: BrandModel[] = [];
  categoriesTree: CategoryModel[] = [];
  countOfNotChildrenInlevels: any = [];
  
  /**
     * Constructor
     * @params api (inyección del api.service.ts)
     * @params helpers (inyección del helpers.services.ts)
	*/
  constructor( private api: ApiService, private helpers: HelpersService){

    this.api.getAll().subscribe((data: DataModel) => {
      this.api.setData(data);
      this.prepareData();
    });
  }
  
  /*
       Nos traemos todos los datos en el app.component porque estamos seguro que este archivo se instancia una vez, no es un componente
    que se repita y que pueda provocar multiples llamadas.
    Lo que hacemos es mediante getters sacar los datos que son necesarios
    
       Creamos data.model.ts para tener una variable que sabemos que datos va a albergar, luego instanciamos este mismo data model
    para no tener datos innecesarios o inesperados
    la razón por la cual los datos se guardan en una variable dentro del api services y no dentro del app component, es para que pueda
    ser consumida por otros componentes en el caso de que sea necesario.
  */ 

  sortDepartmentsByQuantity(){
    this.api.getDepartments().map(department => {
      this.deparmentsInput.push(new DepartmentModel(department));
    });
    this.deparmentsOutput = this.deparmentsInput.slice();
    /**
     * ordenamos el array con objetos DepartmentModel de manera ascendente según el atributo Quantity
	  */
    this.deparmentsOutput = this.helpers.sortArrayOfObjectsByQuantity(this.deparmentsOutput, true);
    console.log(this.deparmentsOutput);
  }

  sortBrandsByName(){
    this.api.getBrands().map(brand => {
      this.brandsInput.push(new BrandModel(brand));
    });
    this.brandsOutput = this.brandsInput.slice();
    /**
     * ordenamos el array con objetos BrandModel de manera descendente según el atributo Name
	  */
    this.brandsOutput = this.helpers.sortArrayOfObjectsByName(this.brandsOutput, false);
    console.log(this.brandsOutput);
  }

  manipulateTree(){
    this.api.getCategoriesTrees().map(category => {
      this.categoriesTree.push(new CategoryModel(category));
    });
    /**
     * ordenamos el tree con objetos CategoryModel de manera ascendente según el atributo Name
	  */
   this.helpers.sortTreeByName(this.categoriesTree, true);
   /**
    * Agregamos un children aleatorio a "leche" y a "Carne de aves"
	  */
   this.categoriesTree = this.helpers.addRamdonChildrenInCategorieByName(this.categoriesTree, 'Leche');
   this.categoriesTree = this.helpers.addRamdonChildrenInCategorieByName(this.categoriesTree, 'Carne de aves');
   /**
    * contamos la cantidad de categories sin children en cada nivel
    */
   this.countOfNotChildrenInlevels = Object.entries(this.helpers.countNoChildrenCategoryInlevels(this.categoriesTree));
   console.log("Cantidad de objetos sin Children en los distintos niveles:")
   console.log(this.countOfNotChildrenInlevels);
   /**
    * Imprimimos el arbol
	  */
   this.helpers.printTreeInConsole(this.categoriesTree);
  }

  exampleOfPriceAndProductModel(){
    console.log("Ejemplo de un objeto PriceModel:");
    const price: PriceModel = new PriceModel(16000, 'pesos argentinos', 'AR$', '$');
    console.log(price);

    console.log("Ejemplo de un objeto ProductModel:");
    const product: ProductModel = new ProductModel(1234, "placa madre asus", "Asus", 1, price, "Productos de pc", "tecnología");
    console.log(product);

  }

  prepareData(){
    this.sortDepartmentsByQuantity();
    this.sortBrandsByName();
    this.manipulateTree();
    this.exampleOfPriceAndProductModel();
  }
}