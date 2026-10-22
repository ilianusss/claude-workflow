const IMPORT =
  /^(?:import\b|export\s+(?:\*|\{[^}]*\})\s+from\b|from\s+\S+\s+import\b|use\s|#include\b|(?:const|let|var|local)\s+[\w{}\s,]+=\s*require\s*\(|require\s*\()/

function significantLines(text: string): string[] {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0 && !IMPORT.test(line))
}

export function removedLines(before: string, after: string): string[] {
  const remaining = new Map<string, number>()
  for (const line of significantLines(after)) remaining.set(line, (remaining.get(line) ?? 0) + 1)
  const removed: string[] = []
  for (const line of significantLines(before)) {
    const count = remaining.get(line) ?? 0
    if (count > 0) remaining.set(line, count - 1)
    else removed.push(line)
  }
  return removed
}
