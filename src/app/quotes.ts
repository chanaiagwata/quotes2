export class Quotes {

    showDescription: boolean;



    constructor(public id: number, public quote:string, public author:string, public upvotes:number, public downvotes:number, public dateCreated:Date){
        this.id = id;
        this.quote = quote;
        this.author =author;
        this.showDescription = false
    }
}
