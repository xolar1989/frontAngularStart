export class CommentModel {

  constructor(
    public id: number,
    public value: string,
    public image: string,
    public createdOn: Date
  ) {
  }

}
