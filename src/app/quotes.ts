export class Quotes {

    showDescription: boolean;




    constructor(public id: number, public quote:string, public author:string, public upvotes:number, public downvotes:number, public dateCreated:Date, public popular:boolean){

        this.showDescription = false;
 
    }
}
