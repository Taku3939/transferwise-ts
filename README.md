## ※warning　: obsoluete

# TransferWise TS

[Wise Platform API](https://api-docs.transferwise.com/#wise-platform-api)をもとに型定義をつけた API パッケージ

開発中、開発がこれ以上行われることはないです

## Usage

```ts
import { TransferWiseConfig, useTransferWise } from "transferwise-ts";

const config: TransferWiseConfig = {
  apiKey: "<ApiKey>",
  isSandBox: false,
};

const { getProfiles, createQuote } = useTransferWise(config);

const TestMethod = () => {
  const profiles = await getProfiles();

  console.log(profiles);
};
```
