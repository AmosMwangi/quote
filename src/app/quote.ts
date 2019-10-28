export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public name: string,public author: string,public description: string, public completeDate: Date, public upVote:number, public downVote:number){
    this.showDescription=false;
  }
}