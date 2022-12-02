import {AsyncStorageUtils} from '../Utils/index';

const accessToken = 'accessToken';
const userID = 'userID';
const nullKey = null;
const objKey = 'objKey';
const objKey1 = 'objKey2';
const objValue = {key1: 'value1', key2: 'value2'};

test('Async Storage Utils key value', async () => {
  expect(await AsyncStorageUtils.getItem(accessToken)).toBe(null);
  expect(
    await AsyncStorageUtils.storeItemKey(accessToken, accessToken),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(accessToken)).toBe(accessToken);
  expect(await AsyncStorageUtils.removeItem(accessToken)).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(accessToken)).toBe(null);
  expect(
    await AsyncStorageUtils.storeItemKey(nullKey, nullKey),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(nullKey)).toBe(null);
  expect(await AsyncStorageUtils.removeItem(nullKey)).toBeUndefined();
});

test('Async Storage Utils clear All', async () => {
  expect(await AsyncStorageUtils.storeItemKey(userID, userID)).toBeUndefined();
  expect(
    await AsyncStorageUtils.storeItemKey(accessToken, accessToken),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(accessToken)).toBe(accessToken);
  expect(await AsyncStorageUtils.clearAll()).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(accessToken)).toBe(null);
  expect(await AsyncStorageUtils.getItem(userID)).toBe(null);
});

test('Async Storage Utils key Object', async () => {
  expect(await AsyncStorageUtils.getObjectItem(objKey)).toBe(null);
  expect(await AsyncStorageUtils.getObjectItem('randomKey')).toBe(null);
  expect(
    await AsyncStorageUtils.storeObjectKeyItem(objKey, objValue),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(objKey)).toBe(
    JSON.stringify(objValue),
  );
  expect(await AsyncStorageUtils.removeItem(objKey)).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(objKey)).toBe(null);
  expect(await AsyncStorageUtils.clearAll()).toBeUndefined();

  expect(
    await AsyncStorageUtils.storeObjectKeyItem(nullKey, nullKey),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(nullKey)).toBe('null');
  expect(await AsyncStorageUtils.removeItem(nullKey)).toBeUndefined();
  expect(await AsyncStorageUtils.getItem(nullKey)).toBe(null);
});

test('Async Storage Utils key Object clearAll', async () => {
  expect(await AsyncStorageUtils.getObjectItem(objKey)).toBe(null);
  expect(
    await AsyncStorageUtils.storeObjectKeyItem(objKey, objValue),
  ).toBeUndefined();
  expect(
    await AsyncStorageUtils.storeObjectKeyItem(objKey, objValue),
  ).toBeUndefined();
  expect(await AsyncStorageUtils.clearAll()).toBeUndefined();

  expect(await AsyncStorageUtils.getItem(objKey)).toBe(null);
  expect(await AsyncStorageUtils.getItem(objKey1)).toBe(null);
});
