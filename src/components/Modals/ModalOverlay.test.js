import { render, screen } from "@testing-library/react";

import { ModalOverlay } from "./ModalOverlay";

describe("ModalOverlay", () => {
  it("renders children correctly inside modal-container", () => {
    render(
      <ModalOverlay>
        <div>Test Content</div>
      </ModalOverlay>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();

    const modalContainer = screen.getByTestId("modal-container");
    expect(modalContainer).toHaveClass("modal-container");
  });
});
