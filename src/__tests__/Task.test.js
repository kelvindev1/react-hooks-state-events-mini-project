import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  const taskText = screen.getByText((content, element) => {
    if (
      element.tagName.toLowerCase() === "div" &&
      element.classList.contains("text")
    ) {
      return content.trim() === "text!";
    }
    return false;
  });
  expect(taskText).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  const taskCategory = screen.getByText((content, element) => {
    if (
      element.tagName.toLowerCase() === "div" &&
      element.classList.contains("label")
    ) {
      return content.trim() === "category!";
    }
    return false;
  });
  expect(taskCategory).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.getByText((content, element) => {
    if (
      element.tagName.toLowerCase() === "div" &&
      element.classList.contains("text")
    ) {
      return content.trim() === "Buy rice";
    }
    return false;
  });
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText("Buy rice")).toBeNull();
});
