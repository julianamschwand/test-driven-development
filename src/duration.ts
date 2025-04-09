export function formatDuration(seconds: number): string {
  let formattedDuration: string = ""

  if (seconds / 3600 >= 1) formattedDuration += (Math.floor(seconds / 3600) + "h")
  if (seconds / 60 >= 1 && seconds % 3600 !== 0) formattedDuration += (Math.floor((seconds % 3600) / 60) + "m")
  if (seconds >= 0 && seconds % 60 !== 0) formattedDuration += (Math.round(seconds % 60) + "s")
  if (seconds === 0) formattedDuration = "0s"
  if (seconds < 0) throw new Error("Can't show the duration of negative numbers")
  
  return formattedDuration
}
