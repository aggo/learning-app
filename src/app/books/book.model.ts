export class Book {
  public name: string;
  public description: string;
  public imagePath: string;
  public id: string;
  public author: string;

  constructor(name: string, desc: string, imagePath: string, id: string, author: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.id = id;
    this.author = author;
  }
}
