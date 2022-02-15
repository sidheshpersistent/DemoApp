import React from 'react';
import Labels from 'translations/have/odAgainstFd';
import { Text, Strong } from '@idfc/ccl-mobile';
import formatAccountNumber from 'helpers/formatHelper';
import { TRANSACTION_STATUSES } from './bas/transaction';

const CLOSE_OD_SUCCESS_DETAILS = {
  [TRANSACTION_STATUSES.APPROVED]: {
    image: {
      alt: 'success',
      style: {
        width: 100,
      },
    },
    title: Labels.CONGRATULATIONS,
    subtitle: serviceReqNo => (
      <>
        <Text
          fontSize={16}
          marginBottom={20}
          lineHeight={24}
          align="center"
          style={{ width: '100%' }}
          testID="success-subtitle1"
          accessibilityId="success-subtitle1"
          accessible
        >
          {Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.LINE_1}
          {'\n'}
          <Strong>{Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.LINE_2}</Strong>
        </Text>
        <Text
          fontSize={16}
          marginBottom={10}
          lineHeight={24}
          align="center"
          style={{ width: '100%' }}
          testID="success-subtitle2"
        >
          {Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.LINE_3}:{'\n'}
          <Text fontSize={18} marginBottom={10} lineHeight={24} align="center" style={{ width: '100%' }}>
            <Strong>{serviceReqNo}</Strong>
          </Text>
        </Text>
      </>
    ),
  },

  [TRANSACTION_STATUSES.IN_PROGRESS]: {
    image: {
      alt: 'success',
      style: {
        width: 100,
      },
    },
    title: Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL_TITLE,
    subtitle: accountNumber => (
      <>
        <Text
          fontSize={16}
          marginBottom={140}
          lineHeight={24}
          align="center"
          style={{ width: '100%' }}
          testID="success-subtitle"
        >
          {Labels.formatString(Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL, {
            account_number: <Strong>A/c {formatAccountNumber(accountNumber)}</Strong>,
          })}
        </Text>
      </>
    ),
  },

  [TRANSACTION_STATUSES.INITIATED]: {
    image: {
      alt: 'success',
      style: {
        width: 100,
      },
    },
    title: Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL_TITLE,
    subtitle: accountNumber => (
      <>
        <Text
          fontSize={16}
          marginBottom={140}
          lineHeight={24}
          align="center"
          style={{ width: '100%' }}
          testID="success-subtitle"
        >
          {Labels.formatString(Labels.MANAGE.CLOSE_OD_SUCCESS_MSG.SENT_FOR_APPROVAL, {
            account_number: <Strong>A/c {formatAccountNumber(accountNumber)}</Strong>,
          })}
        </Text>
      </>
    ),
  },
};

export default CLOSE_OD_SUCCESS_DETAILS;
