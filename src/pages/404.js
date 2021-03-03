import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <Layout>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          Please try following the links on my page and it would be greatly
          appreciated if you let me know if one of my links has taken you here!
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Please try following the links on my page and it would be greatly
              appreciated if you let me know if one of my links has taken you
              here!
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
