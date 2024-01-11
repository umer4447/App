import React from 'react';
import Button from '@components/Button';
import FeatureList from '@components/FeatureList';
import * as Illustrations from '@components/Icon/Illustrations';
import IllustratedHeaderPageLayout from '@components/IllustratedHeaderPageLayout';
import LottieAnimations from '@components/LottieAnimations';
import useLocalize from '@hooks/useLocalize';
import useTheme from '@hooks/useTheme';
import Navigation from '@libs/Navigation/Navigation';
import ROUTES from '@src/ROUTES';
import SCREENS from '@src/SCREENS';

type WalletEmptyStateProps = {
    onAddPaymentMethod: () => void;
};

const WALLET_FEATURES = [
    {
        icon: Illustrations.MoneyIntoWallet,
        translationKey: 'walletPage.getPaidBackFaster',
    },
    {
        icon: Illustrations.OpenSafe,
        translationKey: 'walletPage.secureAccessToYourMoney',
    },
    {
        icon: Illustrations.HandEarth,
        translationKey: 'walletPage.receiveMoney',
    },
];

function WalletEmptyState({onAddPaymentMethod}: WalletEmptyStateProps) {
    const theme = useTheme();
    const {translate} = useLocalize();
    return (
        <IllustratedHeaderPageLayout
            backgroundColor={theme.PAGE_THEMES[SCREENS.SETTINGS.WALLET.ROOT].backgroundColor}
            illustration={LottieAnimations.FastMoney}
            onBackButtonPress={() => Navigation.goBack(ROUTES.SETTINGS)}
            title={translate('common.wallet')}
            footer={
                <Button
                    accessibilityLabel={translate('paymentMethodList.addPaymentMethod')}
                    success
                    text={translate('paymentMethodList.addPaymentMethod')}
                    onPress={onAddPaymentMethod}
                />
            }
        >
            <FeatureList
                menuItems={WALLET_FEATURES}
                headline="walletPage.getPaidFaster"
                description="walletPage.addPaymentMethod"
            />
        </IllustratedHeaderPageLayout>
    );
}

export default WalletEmptyState;
