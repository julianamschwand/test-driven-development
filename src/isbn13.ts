export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) { //regex
    throw new Error("Invalid input")
  }

  const num_isbn13: number[] = Array.from(isbn13).map(char => Number(char))
  
  if ((num_isbn13[0] + num_isbn13[2] + num_isbn13[4] + num_isbn13[6] + num_isbn13[8] + num_isbn13[10] + num_isbn13[12] + 3 * (num_isbn13[1] + num_isbn13[3] + num_isbn13[5] + num_isbn13[7] + num_isbn13[9] + num_isbn13[11])) % 10 == 0) return true
  else return false
}
