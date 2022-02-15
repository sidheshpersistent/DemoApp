import { isSystemRejectedStatus, isSuccessStatus, isSentForApprovalStatus } from './transaction';

describe('transactionTest', () => {
  describe('system rejected statuses', () => {
    [
      'SYSTEM_REJECTED',
      'SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT',
      'SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE',
    ].forEach(status => {
      it('should return true if status is one among system rejected statuses', () => {
        const isSystemRejected = isSystemRejectedStatus(status);
        expect(isSystemRejected).toStrictEqual(true);
      });
    });
    ['', 'INITIATED', 'IN-PROGRESS', 'APPROVED'].forEach(status => {
      it('should return false if status is not one among system rejected statuses', () => {
        const isSystemRejected = isSystemRejectedStatus(status);
        expect(isSystemRejected).toStrictEqual(false);
      });
    });
  });

  describe('sent for approval statuses', () => {
    ['INITIATED', 'IN-PROGRESS', 'EDIT-INITIATED', 'EDIT-IN-PROGRESS'].forEach(status => {
      it('should return true if status is one among in progress statuses', () => {
        const isSentForApproval = isSentForApprovalStatus(status);
        expect(isSentForApproval).toStrictEqual(true);
      });
    });
    [
      '',
      'SYSTEM_REJECTED',
      'APPROVED',
      'SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT',
      'SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE',
    ].forEach(status => {
      it('should return false if status is not one among sent for approval statuses', () => {
        const isSentForApproval = isSentForApprovalStatus(status);
        expect(isSentForApproval).toStrictEqual(false);
      });
    });
  });

  describe('succeeded statuses', () => {
    ['', 'APPROVED', 'EDIT-APPROVED'].forEach(status => {
      it('should return true if status is one among succeeded statuses', () => {
        const isSucceeded = isSuccessStatus(status);
        expect(isSucceeded).toStrictEqual(true);
      });
    });
    [
      'INITIATED',
      'SYSTEM_REJECTED',
      'IN-PROGRESS',
      'SYSTEM_REJECTED_DUE_TO_EXCEEDING_LIMIT',
      'SYSTEM_REJECTED_DUE_TO_APPROVERS_NOT_AVAILABLE',
    ].forEach(status => {
      it('should return false if status is not one among succeeded statuses', () => {
        const isSucceeded = isSuccessStatus(status);
        expect(isSucceeded).toStrictEqual(false);
      });
    });
  });
});
