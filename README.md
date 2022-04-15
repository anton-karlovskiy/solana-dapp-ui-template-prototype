# Solana dApp UI template

## Tech stacks
- create-react-app (v5.0.0)
- TypeScript (v^4.6.3)
- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)

## References
- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)
- [@solana/wallet-adapter-example](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/example)
- [The Complete Guide to Full Stack Solana Development with React, Anchor, Rust, and Phantom](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291)

## Getting the project up and running

## TODOs
- Add scripts for `Getting the project up and running`.
- Currently some type related errors are suppressed by `@ts-expect-error`. This comment should be removed by typing them correctly.
- Consider [You'll notice that when you refresh, you lose the state of the program. This is because we are dynamically generating the base account when the program loads. If you wanted to read and interact with the program data across various clients, you would need to create and store the Keypair somewhere in your project. I've put together a gist of a naive approach of how this might look](https://gist.github.com/dabit3/7cbd18b8bc4b495c4831f8674902eb42).