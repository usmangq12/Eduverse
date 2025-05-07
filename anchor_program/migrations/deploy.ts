import * as anchor from "@coral-xyz/anchor";

type AnchorProvider = typeof anchor.AnchorProvider extends new (...args: any) => infer R ? R : never;


export default async function (provider: AnchorProvider) {
  anchor.setProvider(provider);
}

