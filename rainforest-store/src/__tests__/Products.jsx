import { render, screen } from "@testing-library/react";
import Products from "../pages/Products";
// import useFetch from "../hooks/useFetch";

describe("Products testing", () => { 
  test("renders loading and error alert", () => {
    render(<Products />);
    const loading = screen.getByRole("alert");
    expect(loading).toBeInTheDocument();

    const error = screen.getByRole("alert");
    expect(error).toBeInTheDocument();
  });
})

