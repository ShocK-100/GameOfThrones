import { render, screen, cleanup } from "@testing-library/react";
import Card from "../Card";

afterEach(cleanup);

describe("Card unit tests", () => {
  test("Full Name should be visible", () => {
    render(
      <Card
        family={"House Targaryen"}
        fullName={"Israel Israeli"}
        imageUrl={"https://thronesapi.com/assets/images/daenerys.jpg"}
        title={"Mother of Dragons"}
      />
    );
    const fullNameElement = screen.getByTestId("card-full-name");
    expect(fullNameElement).toBeVisible();
  });
  test("info button should be visible", () => {
    render(
      <Card
        family={"House Targaryen"}
        fullName={"Israel Israeli"}
        imageUrl={"https://thronesapi.com/assets/images/daenerys.jpg"}
        title={"Mother of Dragons"}
      />
    );
    const fullNameElement = screen.getByTestId("card-info-button");
    expect(fullNameElement).toBeVisible();
  });
  test("Image should be visible", () => {
    render(
      <Card
        family={"House Targaryen"}
        fullName={"Israel Israeli"}
        imageUrl={"https://thronesapi.com/assets/images/daenerys.jpg"}
        title={"Mother of Dragons"}
      />
    );
    const fullNameElement = screen.getByTestId("card-image");
    expect(fullNameElement).toBeVisible();
  });
});
