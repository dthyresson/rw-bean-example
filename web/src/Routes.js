// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={CommentsPage} name="home" />

      <Route path="/comments/new" page={NewCommentPage} name="newComment" />
      <Route
        path="/comments/{id:Int}/edit"
        page={EditCommentPage}
        name="editComment"
      />
      <Route path="/comments/{id:Int}" page={CommentPage} name="comment" />
      <Route path="/comments" page={CommentsPage} name="comments" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
