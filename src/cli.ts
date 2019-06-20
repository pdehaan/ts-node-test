#!/usr/bin/env npx ts-node

import {foo, bar} from "./lib";

async function main():Promise<void> {
  const _foo = await foo("peter");
  const _bar = await bar("piper");

  console.log(_foo);
  console.log(_bar);
}

main();
