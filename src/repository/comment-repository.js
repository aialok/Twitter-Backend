import Comment from "../models/comment.js";

import CrudRepository from "./crud-repository.js";

export default class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}
