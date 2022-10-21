export class Quotes {

    constructor(public id: number, public quote:string, public author:string, public dateCreated:Date){
        this.id = id;
        this.quote = quote;
        this.author =author
        
    }
}
