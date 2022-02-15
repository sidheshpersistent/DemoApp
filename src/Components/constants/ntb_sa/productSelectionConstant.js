import SpannableBuilder from '@mj-studio/react-native-spannable-string';
import { Colors, Typography } from 'styles';
import { StyleSheet } from 'react-native';
import Labels from 'translations/ntb_sa/productVarient';

const styles = StyleSheet.create({
  scheduleChargeTextStyle: {
    fontSize: 14,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    lineHeight: 30,
  },

  titleStyle: {
    fontSize: 14,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingTop: 5,
  },

  noteStyle: {
    fontSize: 12,
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

/* eslint-disable-next-line import/prefer-default-export */
export const productSelectionConstant = {
  CONCENT_TEXT2: SpannableBuilder.getInstance(styles.titleStyle)
    .append(Labels.PRODUCT_SPANNBLE.CONCENT_LINE_ONE)
    .appendBold(Labels.PRODUCT_SPANNBLE.CONCENT_LINE_TWO)
    .append(Labels.PRODUCT_SPANNBLE.CONCENT_LINE_THREE)

    .build(),

  NOTE_TEXT: SpannableBuilder.getInstance(styles.noteStyle)
    .append(Labels.PRODUCT_SPANNBLE.NOTE_TEXT_LINE_ONE)
    .appendBold(Labels.PRODUCT_SPANNBLE.NOTE_TEXT_LINE_TWO)
    .append(Labels.PRODUCT_SPANNBLE.NOTE_TEXT_LINE_THREE)
    .build(),

  SCHEDULE_CHARGE_TEXT1: SpannableBuilder.getInstance(styles.scheduleChargeTextStyle)
    .append(Labels.PRODUCT_SPANNBLE.CHECK_LINE_ONE)
    .build(),

  SCHEDULE_CHARGE_TEXT2: SpannableBuilder.getInstance(styles.scheduleChargeTextStyle)
    .append(Labels.PRODUCT_SPANNBLE.CHECK_TERMS_LINE_ONE)
    .appendCustom(Labels.PRODUCT_SPANNBLE.CHECK_TERMS_LINE_TWO, {
      color: Colors.MAROON,
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .append(Labels.PRODUCT_SPANNBLE.CHECK_TERMS_LINE_THREE)
    .build(),

  // ToDo Add common json
  FUND_ACCOUNT: 'Fund Account',
  VIEW_SCHEDULE_OF_CHARGES: 'View Schedule of Charges',
  BOOKMYSHOW_CASHBACK: 'BOOKMYSHOW CASHBACK',
  CARD_TEXT_1: 'Your account currently has restrictions of up to ₹1 lakh in a year',
  CARD_TEXT_2: 'You will get exciting offers like credit card, pre-approved personal loans',
  CARD_TEXT_3: 'It is quick and will be done before you finish your cup of coffee!',
};
