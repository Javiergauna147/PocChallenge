import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  /**
     * Constructor
	*/
  constructor() { }


  /**
     * sortArrayOfObjectsByName()
     * Ordena un array de objetos, los cuales deben tener un atributo Name y su respectivo método
     * Get, de lo contrario no funciona.
     * @params arrayOfObjects
     * @params ascending (si es true ordena de manera ascendente, false de manera descendente)
	*/
  sortArrayOfObjectsByName(arrayOfObjects: any[], ascending: boolean): any {
    arrayOfObjects.sort((a, b) => {
      if(a.getName() > b.getName()) return ascending ? 1 : -1;
      if(a.getName() < b.getName()) return ascending ? -1 : 1;
       return 0;
    });
    return arrayOfObjects;
  }

  /**
     * sortArrayOfObjectsByQuantity()
     * Ordena un array de objetos, los cuales deben tener un atributo Quantity y su respectivo método
     * Get, de lo contrario no funciona.
     * @params arrayOfObjects
     * @params ascending (si es true ordena de manera ascendente, false de manera descendente)
	*/
  sortArrayOfObjectsByQuantity(arrayOfObjects: any[], ascending: boolean): any {
    arrayOfObjects.sort((a, b) => {
      if(a.getQuantity() > b.getQuantity()) return ascending ? 1 : -1;
      if(a.getQuantity() < b.getQuantity()) return ascending ? -1 : 1;
       return 0;
    });
    return arrayOfObjects;
  }
  
  /**
     * sortTreeByName()
     * Ordena un arbol de objetos, los cuales deben tener un atributo Name, su respectivo método
     * Get y su respectivo array de objetos Children con su método get, de lo contrario no funciona.
     * @params treeOfObjects
     * @params ascending (si es true ordena de manera ascendente, false de manera descendente)
	*/
  sortTreeByName(treeOfObjects: any[], ascending: boolean): any {
    treeOfObjects = this.sortArrayOfObjectsByName(treeOfObjects, ascending);
    treeOfObjects.map(object => {
      if(object.getChildren().length > 0){
        this.sortTreeByName(object.getChildren(), ascending);
      }
    });
    return treeOfObjects;
  }

  /**
     * printTreeInConsole()
     * Imprime un tree de manera tabulada por nivel en consola.
     * @params treeOfObjects
     * @params level
	*/
  printTreeInConsole(treeOfObjects: any[], level: number = 0): any {
    treeOfObjects.map(object => {
      console.log(this.tabulateText(object.getName(), level));
      if(object.getChildren().length > 0){
        this.printTreeInConsole(object.getChildren(), level+1);
      }
    });
    return treeOfObjects;
  }

  /**
     * tabulateText()
     * Tabula X cantidad de veces un texto dependiendo el parametro amountOfTabs
     * @params text
     * @params amountOfTabs
	*/
  tabulateText(text: string, amountOfTabs: number = 0): string {
    let tabs: string = '';
    for (let i = 0; i < amountOfTabs; i++) {
      tabs += '\t';
    }
    return tabs + text;
  }
}