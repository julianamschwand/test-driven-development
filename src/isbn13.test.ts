import { isValid } from "./isbn13"

describe("Testing ISBN-13 numbers to be valid", () => {
  test.each([
    "9780135781869",
    "9780321278654",
    "9787121123368",
    "9781663728234",
    "9780735619678",
    "9780201853926"
  ])("isValid(%s) == %d", (isbn) => {
    expect(isValid(isbn)).toBe(true)
  })
})
describe("Testing ISBN-13 numbers to be invalid", () => {
  test.each([
    "1234567890123",
    "9781234567891",
    "9780132350886",
    "9780735619679",
    "9780321751042",
    "9781593279289"
  ])("isValid(%s) == %d", (isbn) => {
    expect(isValid(isbn)).toBe(false)
  })
})
describe("Invalid inputs will result in an error", () => {
  test.each([
    "123456789012",
    "12345678901234",
    "9780132350883 ",
    "978-0132350883"
  ])("isValid(%s) == %d", (isbn) => {
    expect(() => isValid(isbn)).toThrow(Error("Invalid input"))
  })
})
