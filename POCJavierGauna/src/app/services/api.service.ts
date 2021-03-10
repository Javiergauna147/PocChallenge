import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//importación del operador map de rxjs para filtrar data recibida desde la API en el observable.
import { DataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url : string = '/api/catalog_system/pub/facets/search/_all?map=b';

  private data : DataModel;
  
  constructor( private http: HttpClient ) {
  }
  
  /**
   * Get toda la data de la API.
   * @return observable
	 */
   getAll(){
    return this.http.get(this.url);
  }

  /**
   * Get solo "Departments" del atributo data.
   * @return observable
	 */
  getDepartments(){
    return this.data.getDepartments() || null;
  }

  /**
   * Get solo "Brands" del atributo data.
   * @return observable
	 */
   getBrands(){
    return this.data.getBrands() || null;
  }

  /**
   * Get solo "CategoriesTrees" del atributo data.
   * @return observable
	 */
   getCategoriesTrees(){
    return this.data.getCategoriesTrees() || null;
  }


  /**** Setters ****/

  /**
   * set Data
   * @params data (La data recibida desde la API)
	 */
   setData(data: any){
    this.data = new DataModel(data.Departments, data.Brands, data.CategoriesTrees);
  }

}
