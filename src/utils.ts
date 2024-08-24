export function assert(v: any) {
  if (!v) {
    throw new Error("Assertion Failed!");
  }
}
