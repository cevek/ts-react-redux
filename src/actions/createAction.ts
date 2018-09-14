export function createAction<Args extends any[], Type extends string, Payload>(
  type: Type,
  fn: (...args: Args) => Payload
): (...args: Args) => {type: Type; payload: Payload} {
  return (...args) => ({type, payload: fn(...args)});
}
