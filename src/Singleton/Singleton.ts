export class Singleton {
    private static _instance: Singleton | null = null;

    private constructor() {}

    public static getInstance(): Singleton {
       if( this._instance === null ) {
           this._instance = new Singleton();
       }

       return this._instance;
    }

}