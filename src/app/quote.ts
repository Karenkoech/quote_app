export class Quote {
    showInfo: boolean;
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public quoteAuthor: string,
        public dateCreated: Date,
    ){
        this.showInfo=false;
    }
    
}
    


