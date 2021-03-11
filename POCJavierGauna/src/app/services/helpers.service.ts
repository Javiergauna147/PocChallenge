import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category.model';

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

  /**
     * addRamdonChildrenInCategorie()
     * Agrega un children con valores aleatorios a la categoria cuyo nombre coincida con el nombre que pasamos como parametro
     * @params treeOfObjects
     * @params categorieName
	*/
  addRamdonChildrenInCategorieByName(treeOfObjects: any[], categorieName:string): any{
    treeOfObjects.map(object => {
      /**
      * Si el nombre de la categoria coincide con el nombre pasado por parametro, se crea
      * un nuevo objeto del tipo Category Model y se agrega al tree
      */
      if(object.getName() === categorieName){
        const randomNumber = Math.floor(Math.random()*10000).toString();
        const randomCategory = {
          Name: 'RamdonCategory' + randomNumber,
          Link: '/' + 'RamdonCategory' + randomNumber + '/',
          LinkEncoded: '/' + 'RamdonCategory' + randomNumber + '/',
          Map: 'c',
          Value: 'RamdonCategory' + randomNumber,
          Id: Math.floor(Math.random()*10000),
          Quantity: Math.floor(Math.random()*1000),
          Position: randomNumber,
          Children: []
        }
        object.pushNewChildren(new CategoryModel(randomCategory));
        console.log(`ENCONTRADO a "${categorieName}" agregando nuevo objeto`);
        console.log(randomCategory);
      }
      if(object.getChildren().length > 0){
        this.addRamdonChildrenInCategorieByName(object.getChildren(),categorieName);
      }
    });
    return treeOfObjects;
  }

  /**
     * countNoChildrenCategoryInlevels()
     * Cuenta la cantidad de cateogries por nivel que no tienen Childrens
     * @params treeOfObjects
     * @params level (Identificador de nivel del nodo)
     * @params levelsMap (mapa de los niveles con la cantidad de
     *         nodos sin childrens en el respectivo nivel, esta variable
     *         se va pasando por referencia a travez de toda la recursividad y va acumulando
     *         los valores categories sin children en cada nivel)
	*/
  countNoChildrenCategoryInlevels(treeOfObjects: any[], level: number = 0, levelsMap: any = {}): any{

  /**
     * si el nivel no existe en el mapa, lo agrego y le asigno valor 0
  */
    if(!levelsMap[('nivel ' + level.toString())]){
      levelsMap[('nivel ' + level.toString())] = 0;
    }

    treeOfObjects.map(object => {
      if(object.getChildren().length > 0){
        this.countNoChildrenCategoryInlevels(object.getChildren(), level+1, levelsMap);
      } else {
      /**
       * Si el nivel no tiene childrens sumo una unidad al valor del respectivo nivel 
       */
        levelsMap[('nivel ' + level.toString())] += 1;
      }
    });

    return levelsMap;
  }

}