export class Quotes {

    showDescription: boolean;
quote: any;
name: any;

    constructor(public id: number, public title:string, public author:string, public upvotes:number, public downvotes:number, public dateCreated:Date){
        this.id = id;
        this.title = title;
        this.author =author;
        this.showDescription = false
    }
}
