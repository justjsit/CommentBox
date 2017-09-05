interface Data {
    id: number;
    author: string;
    text: string;
}
interface CommentListProps {
    data: Data[];
}
interface CommentProps {
    author: string;
}
interface CommentState {

}
interface CommentFormProps {
    onCommentSubmit: ({ author: any, text: string })=>void
}
interface CommentFormState {
    author: string;
    text: string;
}
interface CommentBoxState {
    data: Data[];
}