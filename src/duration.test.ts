import { formatDuration } from "./duration"

describe("forming durations from seconds                                       ", () => {
  test("33 is 33 seconds", () => {
    expect(formatDuration(33)).toBe("33s")
  })
  test("123 is 2 minutes and 3 seconds", () => {
    expect(formatDuration(123)).toBe("2m3s")
  })
  test("500 is 8 minutes and 20 seconds", () => {
    expect(formatDuration(500)).toBe("8m20s")
  })
  test("3600 is 1 hour", () => {
    expect(formatDuration(3600)).toBe("1h")
  })
  test("3999 is 1 hour, 6 minutes and 39 seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s")
  })
  test("0 is 0 seconds", () => {
    expect(formatDuration(0)).toBe("0s")
  })
  test("-1 is an error", () => {
    expect(() => formatDuration(-1)).toThrow(Error("Can't show the duration of negative numbers"))
  })
}) 