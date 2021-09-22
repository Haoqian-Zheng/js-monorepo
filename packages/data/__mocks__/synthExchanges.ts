export const synthExchangesMockL1 = {
	response: {
		account: '0x60d4f28f407121bca015d47cdc9b9b4546b5a9c7',
		block: '12116438',
		feesInUSD: '747549034706154047462',
		from: '0x0eb59acd1f0b73970e5b2fd095bf373ce569e4a9',
		fromAmount: '249183011568718006275302',
		fromAmountInUSD: '249183011568718006275302',
		fromCurrencyKey: '0x7355534400000000000000000000000000000000000000000000000000000000',
		fromSynth: 'sUSD',
		gasPrice: '142100000000',
		id: '0x5771afba4755d73e1becf5b58640b48b999b01ac267c4d39334916ee90285088-232',
		timestamp: '1616785448',
		toAddress: '0x60d4f28f407121bca015d47cdc9b9b4546b5a9c7',
		toAmount: '4628088422134899435',
		toAmountInUSD: '248435462534011852227840',
		toCurrencyKey: '0x7342544300000000000000000000000000000000000000000000000000000000',
		toSynth: 'sBTC',
	},
	formatted: {
		account: '0x60d4f28f407121bca015d47cdc9b9b4546b5a9c7',
		block: 12116438,
		feesInUSD: '747.549034706154047462',
		from: '0x0eb59acd1f0b73970e5b2fd095bf373ce569e4a9',
		fromAmount: '249183.011568718006275302',
		fromAmountInUSD: '249183.011568718006275302',
		fromCurrencyKey: 'sUSD',
		fromSynth: 'sUSD',
		gasPrice: '142100000000',
		id: '0x5771afba4755d73e1becf5b58640b48b999b01ac267c4d39334916ee90285088-232',
		timestamp: 1616785448000,
		toAddress: '0x60d4f28f407121bca015d47cdc9b9b4546b5a9c7',
		toAmount: '4.628088422134899435',
		toAmountInUSD: '248435.46253401185222784',
		toCurrencyKey: 'sBTC',
		toSynth: 'sBTC',
		hash: '0x5771afba4755d73e1becf5b58640b48b999b01ac267c4d39334916ee90285088',
	},
};

export const synthExchangesMockL2 = {
	response: {
		...synthExchangesMockL1.response,
		fromAmount: '249183.011568718006275302',
		toAmount: '4.628088422134899435',
		fromAmountInUSD: '249183.011568718006275302',
		toAmountInUSD: '248435.462534011852227840',
		feesInUSD: '747.549034706154047462',
	},
	formatted: {
		...synthExchangesMockL1.formatted,
		fromAmount: '249183.011568718006275302',
		toAmount: '4.628088422134899435',
		fromAmountInUSD: '249183.01',
		toAmountInUSD: '248435.46',
		feesInUSD: '747.55',
	},
};
