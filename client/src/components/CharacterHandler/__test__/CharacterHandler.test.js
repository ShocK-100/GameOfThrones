import { render, screen, cleanup } from "@testing-library/react";
import CharacterHandler from "../CharacterHandler";

afterEach(cleanup);

describe("CharacterHandler unit tests", () => {
  test("Header should be visible", () => {
    render(<CharacterHandler />);
    const headerElement = screen.getByTestId("CharacterHandler-header");
    expect(headerElement).toBeVisible();
  });
  test("More button should be visible", async () => {
    render(<CharacterHandler />);
    const moreButton = await screen.findByRole("button");
    expect(moreButton).toBeInTheDocument();
  });
});
