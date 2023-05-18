import LeasingArticle from "./LeasingArticle/LeasingArticle"
import ArticleTwo from "./ArticleTwo/ArticleTwo"
import ArticleThree from "./ArticleThree/ArticleThree"
import ArticleFour from "./ArticleFour/ArticleFour"
import ArticeFive from "./ArticleFive/ArticeFive"

type Props = {}

const MainArticles = (props: Props) => {
  return (
    <>
      <LeasingArticle />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <ArticeFive />
    </>
  )
}

export default MainArticles
