export function keys<O>(o: O) {
  return Object.keys(o) as Array<keyof O>
}

export function getNestedValue(
  obj: any,
  path: Array<string | number>,
  fallback?: any,
): any {
  const last = path.length - 1

  if (last < 0) {
    return obj === undefined ? fallback : obj
  }

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback
    }
    obj = obj[path[i]]
  }

  if (obj == null) {
    return fallback
  }

  return obj[path[last]] === undefined ? fallback : obj[path[last]]
}

export const conditionally = <Props, Result>(options: {
  if: (props: Props) => any
  then: (props: Props) => Result | Result
  else: (props: Props) => Result | Result,
}) => (props: Props) => {
  return options.if(props) ? options.then(props) : options.else(props)
}

