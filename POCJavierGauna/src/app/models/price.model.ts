
export class PriceModel {

    private amount: number;
    private currencyName: string;
    private isoCode: string;
    private symbol: string;


    /**
     * Constructor
     * @params amount
     * @params currencyName
     * @params isoCode
     * @params symbol
	*/
    constructor( amount: number, currencyName: string, isoCode:string, symbol: string ) {
        this.amount = amount;
        this.currencyName = currencyName;
        this.isoCode = isoCode;
        this.symbol = symbol;
    }
}