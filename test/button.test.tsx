import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/button"

describe("Button", () => {
  it("renders button variants with expected semantic role", () => {
    render(<Button variant="outline">Open profile</Button>)

    const button = screen.getByRole("button", { name: "Open profile" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("data-slot", "button")
  })

  it("supports asChild rendering for links", () => {
    render(
      <Button asChild>
        <a href="/resume">Resume</a>
      </Button>,
    )

    const link = screen.getByRole("link", { name: "Resume" })
    expect(link).toHaveAttribute("href", "/resume")
  })
})
