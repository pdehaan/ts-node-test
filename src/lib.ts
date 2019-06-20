export async function foo(name:string):Promise<string> {
  return `Greetings, ${name}!`;
};

export function bar(name:string):number {
  return name.length;
}
