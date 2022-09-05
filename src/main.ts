export function joinWords(...strs: string[]) {
  return strs.join(' ');
}

console.log(joinWords('Hello', 'NodeJS', 'with', 'typescript'));
