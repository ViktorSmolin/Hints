import React from "react";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "../../04-errors/ErrorBoundary";

function Boom() {
  throw new Error("boom");
}

test("ErrorBoundary catches render errors", () => {
  const { getByText } = render(
    <ErrorBoundary fallback="Упс">
      <Boom />
    </ErrorBoundary>
  );
  getByText("Упс");
});
