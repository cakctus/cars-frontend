import { useRouteError } from "react-router-dom"

type Props = {}

const ErrorPage = (props: Props) => {
  const error = useRouteError() as Error
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
