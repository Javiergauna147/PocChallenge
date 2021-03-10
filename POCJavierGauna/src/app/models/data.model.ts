export class DataModel {

    private Departments: [];
    private Brands: [];
    private CategoriesTrees: [];
    
    /**
     * Constructor
     * @params Departments
     * @params Brands
     * @params CategoriesTrees
	*/
    constructor( Departments: [], Brands: [], CategoriesTrees: []) {
        this.Departments = Departments;
        this.Brands = Brands;
        this.CategoriesTrees = CategoriesTrees;
    }



/**** Getters ****/

    /**
     * get Departments
	*/
    getDepartments(){
        return this.Departments;
    }

    /**
     * get Brands
	*/
    getBrands(){
        return this.Brands;
    }
    
    /**
     * get CategoriesTrees
	*/
    getCategoriesTrees(){
        return this.CategoriesTrees;
    }

}
