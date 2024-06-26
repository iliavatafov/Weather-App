import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import { modalActions } from "../../store/modalSlice";

import { ErrorModal } from "./ErrorModal";

const mockStore = configureStore([]);

describe("ErrorModal", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modal: {
        errorData: {
          title: "Error Title",
          message: "Error Message",
        },
      },
    });

    store.dispatch = jest.fn();

    const backdropRoot = document.createElement("div");
    backdropRoot.setAttribute("id", "backdrop-root");
    document.body.appendChild(backdropRoot);

    const overlayRoot = document.createElement("div");
    overlayRoot.setAttribute("id", "overlay-root");
    document.body.appendChild(overlayRoot);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ErrorModal />
        </BrowserRouter>
      </Provider>
    );
  });

  afterEach(() => {
    document.body.removeChild(document.getElementById("backdrop-root"));
    document.body.removeChild(document.getElementById("overlay-root"));
  });

  it("should display the error title and message correctly", () => {
    expect(screen.getByText("Error Title")).toBeInTheDocument();
    expect(screen.getByText("Error Message")).toBeInTheDocument();

    expect(screen.getByRole("error-modal")).toMatchSnapshot();
  });

  it("should close the modal when the close button is clicked", () => {
    const closeButton = screen.getByTestId("close-button");

    fireEvent.click(closeButton);

    expect(store.dispatch).toHaveBeenCalledWith(modalActions.closeModal());
  });

  it('should close the modal when the "OK" link is clicked', () => {
    const okLink = screen.getByText("OK");
    fireEvent.click(okLink);

    expect(store.dispatch).toHaveBeenCalledWith(modalActions.closeModal());
  });
});
