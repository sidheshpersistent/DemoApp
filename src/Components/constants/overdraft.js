import React from 'react';
import Labels from 'translations/have/odAgainstFd';
import { View } from 'react-native';
import { Amount, ProcessStatus, Text } from '@idfc/ccl-mobile';
import { FontSize } from '@idfc/ccl-commons/enums';
import BrandHeroSize from 'constants/brand-hero-constants';
import formatAccountNumber from 'helpers/formatHelper';
import { TRANSACTION_STATUSES } from './bas/transaction';

export const CREATE_OD_STATUS = {
  APPROVED: 'APPROVED',
  SYSTEM_REJECTED: 'SYSTEM_REJECTED',
  PENDING: 'INITIATED',
  INITIATED: 'INITIATED',
  EDIT_IN_PROGRESS: 'EDIT-IN-PROGRESS',
  EDIT_APPROVED: 'EDIT-APPROVED',
  EDIT_INITIATED: 'EDIT-INITIATED',
  EDIT_PENDING: 'EDIT-INITIATED',
};

export const FDKeys = {
  DEPOSIT_AMOUNT: 'depositAmount',
};

export const OD_SUCCESS_DETAILS = {
  [TRANSACTION_STATUSES.APPROVED]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.CONGRATULATIONS,
    subtitle: ({ ODAmount }, testID = 'od-amount') => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_16} align="center">
        {Labels.formatString(Labels.SUCCESSFUL.LINE_1, {
          amount: <Amount value={`${ODAmount}`} testID={testID} resizeFractionPart={false} bold />,
        })}
        {'\n'}
        {Labels.SUCCESSFUL.LINE_2}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.EDIT_APPROVED]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.CONGRATULATIONS,
    // eslint-disable-next-line react/prop-types
    subtitle: ({ srNumber }, testID = 'sr-number') => (
      <View testID="od-success-message">
        <Text marginBottom={30} lineHeight={26} fontSize={16} align="center" testID="success-subtitle1">
          {Labels.EDIT_OD_AGAINST_FD.SUCCESSFULLY_CREATED.LINE_1}
        </Text>
        <Text lineHeight={26} fontSize={16} align="center">
          {Labels.EDIT_OD_AGAINST_FD.SUCCESSFULLY_CREATED.LINE_2}
        </Text>
        <Text bold testID={testID} marginTop={20} align="center">{`${srNumber}`}</Text>
      </View>
    ),
  },

  [TRANSACTION_STATUSES.EMPTY_STATUS]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.CONGRATULATIONS,
    subtitle: ({ ODAmount }, testID = 'od-amount') => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_16} align="center">
        {Labels.formatString(Labels.SUCCESSFUL.LINE_1, {
          amount: <Amount value={`${ODAmount}`} testID={testID} resizeFractionPart={false} bold />,
        })}
        {'\n'}
        {Labels.SUCCESSFUL.LINE_2}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.IN_PROGRESS]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.CONGRATULATIONS,
    subtitle: ({ ODAmount }, testID = 'od-amount') => (
      <Text testID="od-success-message" lineHeight={26} fontSize={16} align="center">
        {Labels.formatString(Labels.SENT_FOR_APPROVAL, {
          amount: (
            <Amount value={`${ODAmount}`} testID={testID} resizeFractionPart={false} bold fontSize={FontSize.SIZE_12} />
          ),
        })}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.EDIT_IN_PROGRESS]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL_TITLE,
    subtitle: ({ accountNumber }, testID = 'account-number') => (
      <Text testID="od-success-message" lineHeight={26} fontSize={16} align="center">
        {Labels.formatString(Labels.EDIT_OD_AGAINST_FD.SENT_FOR_APPROVAL, {
          accountNumber: (
            <Text bold testID={testID} align="center">
              {Labels.formatString(Labels.ACCOUNT_NUMBER, {
                account_number: `${formatAccountNumber(accountNumber)}`,
              })}
            </Text>
          ),
        })}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.INITIATED]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.CONGRATULATIONS,
    subtitle: ({ ODAmount }, testID = 'od-amount') => (
      <Text testID="od-success-message" lineHeight={26} fontSize={16} align="center">
        {Labels.formatString(Labels.SENT_FOR_APPROVAL, {
          amount: (
            <Amount value={`${ODAmount}`} testID={testID} resizeFractionPart={false} bold fontSize={FontSize.SIZE_12} />
          ),
        })}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.EDIT_INITIATED]: {
    renderImage: () => <ProcessStatus variant="success" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL_TITLE,
    subtitle: ({ accountNumber }, testID = 'account-number') => (
      <Text testID="od-success-message" lineHeight={26} fontSize={16} align="center">
        {Labels.formatString(Labels.EDIT_OD_AGAINST_FD.SENT_FOR_APPROVAL, {
          accountNumber: (
            <Text bold testID={testID}>
              {Labels.formatString(Labels.ACCOUNT_NUMBER, {
                account_number: formatAccountNumber(accountNumber),
              })}
            </Text>
          ),
        })}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.SYSTEM_REJECTED]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE}
      </Text>
    ),
  },
  [TRANSACTION_STATUSES.EDIT_SYSTEM_REJECTED]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.EDIT_SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT}
      </Text>
    ),
  },

  [TRANSACTION_STATUSES.EDIT_SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE]: {
    renderImage: () => <ProcessStatus variant="error" brandHeroSize={BrandHeroSize.SIZE_90} />,
    title: Labels.ERROR,
    subtitle: () => (
      <Text testID="od-success-message" fontSize={FontSize.SIZE_12} lineHeight={20} align="center">
        {Labels.SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE}
      </Text>
    ),
  },
};
