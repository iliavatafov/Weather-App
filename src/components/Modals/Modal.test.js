import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    const backdropRoot = document.createElement("div");
    backdropRoot.setAttribute("id", "backdrop-root");
    document.body.appendChild(backdropRoot);

    const overlayRoot = document.createElement("div");
    overlayRoot.setAttribute("id", "overlay-root");
    document.body.appendChild(overlayRoot);

    render(
      <Modal>
        <div>Test Content</div>
      </Modal>
    );
  });

  afterEach(() => {
    document.body.removeChild(document.getElementById("backdrop-root"));
    document.body.removeChild(document.getElementById("overlay-root"));
  });

  it("renders backdrop portal correctly", () => {
    expect(screen.getByRole("backdrop")).toBeInTheDocument();
  });

  it("renders overlay portal with children correctly", () => {
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(
      <Modal>
        <div>Snapshot Test Content</div>
      </Modal>
    );

    expect(container).toMatchSnapshot();
  });
});
