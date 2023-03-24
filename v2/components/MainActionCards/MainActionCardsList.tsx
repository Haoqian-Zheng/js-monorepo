import { useDebtData } from '@snx-v2/useDebtData';
import { useFeePoolData } from '@snx-v2/useFeePoolData';
import { useRewardsAvailable } from '@snx-v2/useRewardsAvailable';
import { useExchangeRatesData } from '@snx-v2/useExchangeRatesData';
import { MainActionCardsUi } from './MainActionCards';
import { NetworkId } from '@snx-v2/useSynthetixContracts';
import { useContext } from 'react';
import { ContractContext } from '@snx-v2/ContractContext';
import { useFeesBurnedInPeriod } from '@snx-v2/useFeesBurnedInPeriod';

interface MainActionsCardsListProps {
  connectWallet: (chainId?: NetworkId | undefined) => Promise<void>;
}

export const MainActionCardsList = ({ connectWallet }: MainActionsCardsListProps) => {
  const { data: debtData, isLoading: isDebtDataLoading } = useDebtData();
  const { data: feePoolData, isLoading: isFeePoolDataLoading } = useFeePoolData();
  const { data: rewardsData, isLoading: isRewardsDataLoading } = useRewardsAvailable();
  const { data: exchangeRateData, isLoading: isExchangeRateDataLoading } = useExchangeRatesData();
  const { walletAddress } = useContext(ContractContext);
  const { data: feesBurned, isLoading: isFeesBurnedLoading } = useFeesBurnedInPeriod();

  const isLoading =
    isDebtDataLoading ||
    isFeePoolDataLoading ||
    isRewardsDataLoading ||
    isExchangeRateDataLoading ||
    isFeesBurnedLoading;

  return (
    <MainActionCardsUi
      connectWallet={connectWallet}
      isLoading={isLoading}
      rewardsDollarValue={rewardsData?.snxRewards.mul(exchangeRateData?.SNX || 0).toNumber() || 0}
      currentCRatioPercentage={debtData?.currentCRatioPercentage.toNumber()}
      targetCratioPercentage={debtData?.targetCRatioPercentage.toNumber()}
      liquidationCratioPercentage={debtData?.liquidationRatioPercentage.toNumber()}
      isFlagged={debtData?.liquidationDeadlineForAccount.gt(0)}
      hasClaimed={rewardsData?.hasClaimed}
      nextEpochStartDate={feePoolData?.nextFeePeriodStartDate}
      walletAddress={walletAddress}
      targetThreshold={debtData?.targetThreshold.toNumber()}
      feesBurned={feesBurned?.toNumber()}
    />
  );
};
