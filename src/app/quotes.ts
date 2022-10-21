export class Quotes {

    showDescription: boolean;

    constructor(public id: number, public title:string, public author:string, public dateCreated:Date){
        this.id = id;
        this.title = title;
        this.author =author;
        this.showDescription = false
    }
}
