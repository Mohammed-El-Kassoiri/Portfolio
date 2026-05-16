import { getResearchPaperById, researchPapers } from "@/lib/research-data"

describe("research-data", () => {
  it("returns a paper when id exists", () => {
    const id = researchPapers[0]?.id
    expect(id).toBeDefined()

    const paper = getResearchPaperById(id as string)
    expect(paper?.id).toBe(id)
  })

  it("returns undefined for unknown id", () => {
    expect(getResearchPaperById("does-not-exist")).toBeUndefined()
  })
})
