export default function ErrorPage() {

  return (
    <div className="vh-100 position-relative text-center text-bg-dark">
      <div
        className="error-page position-absolute top-50 start-50 translate-middle mx-auto"
        style={{ width: "fit-content" }}
      >
        <h1 className="fs-1">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <button className="btn btn-primary mt-2" onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );
}
