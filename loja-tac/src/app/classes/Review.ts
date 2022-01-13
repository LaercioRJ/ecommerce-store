export class Review  {
    commentId!: number;
    productId: number;
    userId: number;
    title: string;
    grade: number;
    comment?: string;

    constructor(productId: number, userId: number, title: string, grade: number) {
        this.productId = productId;
        this.userId = userId;
        this.title = title;
        this.grade = grade;
    }
}
