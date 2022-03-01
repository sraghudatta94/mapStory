import React from "react";
import { Link } from "react-router-dom";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>What you are looking is not available !</h2>
      <Link to="/">Please go back to home page</Link>
    </div>
  );
}

export default NotFoundPage;
