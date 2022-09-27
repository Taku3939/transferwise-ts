// import { TransferWiseConfig, useTransferWise } from "transferwise-ts";

import { CreateQuoteRequest, TransferWiseConfig, useTransferWise } from './src'

const config: TransferWiseConfig = {
  apiKey: '5de50d54-adc0-4573-b9b7-ef95a4de93d4',
  isSandBox: false,
}

const { getProfiles, createQuote } = useTransferWise(config)
getProfiles().then((p) => {
  // console.log(p)

  const postData: CreateQuoteRequest = {
    sourceCurrency: 'JPY',
    targetCurrency: 'EUR',
    sourceAmount: null,
    targetAmount: 100,
    profile: p[0].id,
  }
  createQuote(postData).then((p1) => {
    console.log(p1)
  })
})
