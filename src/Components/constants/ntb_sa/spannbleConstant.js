import SpannableBuilder from '@mj-studio/react-native-spannable-string';
import { AccordianBG, AccordianBGExpanded } from 'assets/images/ntb_sa';
import { Colors, Typography } from 'styles';
import { StyleSheet } from 'react-native';
import Labels from 'translations/ntb_sa/spannbleText';
import iconConstants from './icon.constants';

const styles = StyleSheet.create({
  spannable28: {
    fontSize: 28,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.DARK,
  },

  spannable24: {
    fontSize: 23,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.WHITE,
  },
  spannable20: {
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.DARK,
  },
  spannableWhite20: {
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    color: Colors.WHITE,
  },

  spannableWhite14: {
    fontSize: 14,
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    lineHeight: 20,
  },
  spannableWhite16: {
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    lineHeight: 23,
  },

  topStyle: {
    fontSize: 14,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingTop: 5,
  },
  spannableBold: {
    opacity: 0.6,
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    lineHeight: 30,
  },

  cardStyle: {
    fontSize: 14,
    color: Colors.BLACK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textAlign: 'center',
    lineHeight: 20,
  },
  systemMessages: {
    fontSize: 20,
    color: Colors.DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    // textAlign: 'center',
    lineHeight: 28,
  },
});

export const spannableIterate = (header, color) => {
  const spannable = SpannableBuilder.getInstance({
    color,
    fontFamily: Typography.FONT_FAMILY_LIGHT,
  });
  header?.map(item => {
    if (item.fontType && item.fontType === 'bold') {
      spannable.appendCustom(item.text, {
        fontSize: item.fontSize,
        lineHeight: 30,
        color,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        opacity: 1,
      });
    } else {
      spannable.appendCustom(item.text, { fontSize: item.fontSize });
    }
  });
  return spannable.build();
};
// ToDo Need to move text in spannable en json
export const paymentSuccessText = aadhaarName => {
  return SpannableBuilder.getInstance(styles.spannable20)
    .append('Congratulations ')
    .append(aadhaarName)
    .append('!\n')
    .append('Your savings account has been \n')
    .appendBold('funded successfully!')
    .build();
};
// ToDo Need to move text in spannable en json
export const childCountText = childNumberInText => {
  return SpannableBuilder.getInstance(styles.topStyle)
    .append('When is your ')
    .appendBold(`${childNumberInText} child’s birthday?`)
    .build();
};

export const spannbleConstant = {
  SYSTEM_MESSAGES: {
    SUCCESS: {
      HEADER_TEXT: SpannableBuilder.getInstance(styles.systemMessages)
        .appendBold(Labels.SYSTEM_MESSAGES.SUCCESS.HEADER_LINE_ONE)
        .append(Labels.SYSTEM_MESSAGES.SUCCESS.HEADER_LINE_TWO)
        .append(Labels.SYSTEM_MESSAGES.SUCCESS.HEADER_LINE_THREE)
        .build(),
      CONTENT_TEXT: Labels.SYSTEM_MESSAGES.SUCCESS.CONTENT,
    },
    WARNNING: {
      HEADER_TEXT: SpannableBuilder.getInstance(styles.systemMessages)
        .appendBold(Labels.SYSTEM_MESSAGES.WARNNING.HEADER_LINE_ONE)
        .append(Labels.SYSTEM_MESSAGES.WARNNING.HEADER_LINE_TWO)
        .append(Labels.SYSTEM_MESSAGES.WARNNING.HEADER_LINE_THREE)
        .build(),
      CONTENT_TEXT: SpannableBuilder.getInstance(styles.topStyle)
        .append(Labels.SYSTEM_MESSAGES.WARNNING.CONTENT_LINE_ONE)
        .appendBold(Labels.SYSTEM_MESSAGES.WARNNING.CONTENT_LINE_TWO)
        .append(Labels.SYSTEM_MESSAGES.WARNNING.CONTENT_LINE_THREE)
        .build(),
      BANNER_TEXT: SpannableBuilder.getInstance(styles.topStyle)
        .append(Labels.SYSTEM_MESSAGES.WARNNING.BANNER_LINE_ONE)
        .appendBold(Labels.SYSTEM_MESSAGES.WARNNING.BANNER_LINE_TWO)
        .build(),
    },
  },
  LOGIN: SpannableBuilder.getInstance(styles.topStyle).append('Login ').build(),

  AADHAR_TITLE: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.AADHAR_TITLE.AADHAR_TITLE_LINE_ONE)
    .appendCustom(Labels.AADHAR_TITLE.AADHAR_TITLE_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  AADHAR_SUB_TXT: SpannableBuilder.getInstance(styles.systemMessages)
    .append(Labels.AADHAR_SUB_TXT.AADHAR_SUB_TXT_ONE)
    .appendCustom(Labels.AADHAR_SUB_TXT.AADHAR_SUB_TXT_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  AADHAR_OTP_FAILED_TITLE: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.AADHAR_OTP_FAILED.AADHAR_OTP_FAILED_LINE_ONE)
    .appendCustom(Labels.AADHAR_OTP_FAILED.AADHAR_OTP_FAILED_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  AADHAR_OTP_TITLE: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.AADHAR_OTP_TITLE.AADHAR_OTP_TITLE_LINE_ONE)
    .appendCustom(Labels.AADHAR_OTP_TITLE.AADHAR_OTP_TITLE_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  EXISTING_CUSTOMER_TEXT: SpannableBuilder.getInstance(styles.spannable28)
    // .append('Open a ')
    .appendCustom(Labels.EXISTING_CUSTOMER.EXISTING_CUSTOMER_LINE_ONE, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .appendCustom(Labels.EXISTING_CUSTOMER.EXISTING_CUSTOMER_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontSize: Typography.BODY_3_REGULAR,
    })
    .appendCustom(Labels.EXISTING_CUSTOMER.EXISTING_CUSTOMER_LINE_THREE, {
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontSize: Typography.BODY_3_REGULAR,
    })
    .appendCustom(Labels.EXISTING_CUSTOMER.EXISTING_CUSTOMER_LINE_FOUR, {
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontSize: Typography.BODY_3_REGULAR,
    })
    .build(),

  MOBILE_NUMBER_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.MOBILE_NUMBER_TEXT.MOBILE_NUMBER_LINE_ONE)
    .appendCustom(Labels.MOBILE_NUMBER_TEXT.MOBILE_NUMBER_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    })
    .build(),

  THANK_YOU: SpannableBuilder.getInstance([styles.spannable28, { paddingTop: 20 }])
    .appendCustom(Labels.THANK_YOU.THANK_YOU_LINE_ONE, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .append(Labels.THANK_YOU.THANK_YOU_LINE_TWO)
    .build(),

  THANK_YOU_SUBTEXT: SpannableBuilder.getInstance([styles.spannableWhite16, { paddingTop: 20, color: Colors.DARK }])
    .append(Labels.THANK_YOU_SUBTEXT.SUBTEXT_LINE_ONE)
    .append(Labels.THANK_YOU_SUBTEXT.SUBTEXT_LINE_TWO)
    .append(Labels.THANK_YOU_SUBTEXT.SUBTEXT_LINE_THREE)
    .build(),

  // VISA_CARD: SpannableBuilder.getInstance(styles.spannableWhite20)
  //   .append('Savings Account with\n')
  //   .append('Visa Signature Card')
  //   .build(),

  // CLASIC_CARD: SpannableBuilder.getInstance({
  //   fontSize: 14,
  //   color: Colors.WHITE,
  //   lineHeight: 20,
  // })
  //   .append('Savings Account with\n')
  //   .append('Visa Classic Card')
  //   .build(),

  // OFFER_AADHAR_TEXT: SpannableBuilder.getInstance(styles.spannable28)
  //   .append('Open a power-packed\n')
  //   .appendCustom('savings account\n', {
  //     fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  //   })
  //   .append('and earn an attractive\n')
  //   .append('interest rate of\n')
  //   .appendCustom('up to 6%*\n', {
  //     fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  //   })
  //   .build(),

  WELCOME_TEXT: SpannableBuilder.getInstance(styles.spannable28)
    .append(Labels.WELCOME_TEXT.WELCOME_LINE_ONE)
    .appendCustom(Labels.WELCOME_TEXT.WELCOME_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  NO_AADHAR: SpannableBuilder.getInstance(styles.spannable20)
    .append(Labels.NO_AADHAR.NO_AADHAR_LINE_ONE)
    .appendCustom(Labels.NO_AADHAR.NO_AADHAR_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  CONCENT_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.CONCENT_TEXT.CONCENT_TEXT_LINE_ONE)
    .appendBold(Labels.CONCENT_TEXT.CONCENT_TEXT_LINE_TWO)
    .append(Labels.CONCENT_TEXT.CONCENT_TEXT_LINE_THREE)
    .build(),

  OCCUPATION_CONCENT_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.OCCUPATION_CONCENT.CONCENT_LINE_ONE)
    .appendBold(Labels.OCCUPATION_CONCENT.CONCENT_LINE_TWO)
    .append(Labels.OCCUPATION_CONCENT.CONCENT_LINE_THREE)
    .build(),

  OCCUPATION_TEXT: SpannableBuilder.getInstance(styles.spannableWhite20)
    .append(Labels.OCCUPATION_TEXT.OCCUPATION_LINE_ONE)
    .appendCustom(Labels.OCCUPATION_TEXT.OCCUPATION_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  PRODUCT_DEATILS_TEXT: SpannableBuilder.getInstance(styles.spannable24)
    .append(Labels.PRODUCT_DEATILS.PRODUCT_DEATILS_LINE_ONE)
    .appendCustom(Labels.PRODUCT_DEATILS.PRODUCT_DEATILS_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })

    .build(),

  PERSONAL_DEATILS_TEXT: SpannableBuilder.getInstance(styles.spannable24)
    .append(Labels.PERSONAL_DEATILS.PERSONAL_DEATILS_LINE_ONE)
    .append(Labels.PERSONAL_DEATILS.PERSONAL_DEATILS_LINE_TWO)
    .appendCustom(Labels.PERSONAL_DEATILS.PERSONAL_DEATILS_LINE_THREE, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })

    .build(),

  COMMUNICATION_ALERT_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .appendBold(Labels.COMMUNICATION_ADDR_NOTE.COMMUNICATION_ADDR_NOTE_LINE_ONE)
    .append(Labels.COMMUNICATION_ADDR_NOTE.COMMUNICATION_ADDR_NOTE_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  INDIAN_CITIZEN_NOTE: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.INDIAN_CITIZEN_NOTE.INDIAN_CITIZEN_NOTE_LINE_ONE)
    .appendBold(Labels.INDIAN_CITIZEN_NOTE.INDIAN_CITIZEN_NOTE_LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  POLITICAL_EXPOSE_NOTE: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.POLITICAL_EXPOSE_NOTE.LINE_ONE)
    .appendBold(Labels.POLITICAL_EXPOSE_NOTE.LINE_TWO, {
      fontFamily: Typography.FONT_FAMILY_BOLD,
    })
    .build(),

  PRODUCT_CONCENT_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.PRODUCT_CONCENT.PRODUCT_CONCENT_LINE_ONE)
    .appendBold(Labels.PRODUCT_CONCENT.PRODUCT_CONCENT_LINE_TWO)
    .build(),

  VIDEO_KYC_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.VIDEO_KYC.VIDEO_KYC_LINE_ONE)
    .appendBold(Labels.VIDEO_KYC.VIDEO_KYC_LINE_TWO)
    .build(),

  // PAYMENT_SUCCESS_MASSAGE: SpannableBuilder.getInstance(styles.spannable24)
  //   .append('Congratulations Vicky Dhanwani!\n')
  //   .append('Your savings account has been \n')
  //   .appendBold('funded successfully!')
  //   .build(),

  BENEFITS_VIDEO_KYC_TEXT: SpannableBuilder.getInstance(styles.topStyle)
    .append(Labels.BENEFITS_VIDEO_KYC.BENEFITS_VIDEO_KYC_LINE_ONE)
    .appendBold(Labels.BENEFITS_VIDEO_KYC.BENEFITS_VIDEO_KYC_LINE_TWO)
    .build(),

  ANY_WHERE_BANKING: [
    {
      Title: Labels.ANY_WHERE_BANKING.TITLE,
      subTitle: Labels.ANY_WHERE_BANKING.SUB_TITLE,
      AccordianBg: AccordianBG,
      AccordianBgExpanded: AccordianBGExpanded,

      desc: [
        {
          desc1: SpannableBuilder.getInstance(styles.spannableWhite16)
            .append(Labels.ANY_WHERE_BANKING.DESC.DESC_ONE_LINE)
            .build(),
          image: iconConstants.IC_MONEY1,
          bgColor: Colors.DARK,
        },
        {
          desc1: SpannableBuilder.getInstance(styles.spannableWhite16)
            .append(Labels.ANY_WHERE_BANKING.DESC.DESC_TWO_LINE)
            .build(),
          image: iconConstants.IC_SECURE,
          bgColor: Colors.DARK,
        },
        {
          desc1: SpannableBuilder.getInstance(styles.spannableWhite16)
            .append(Labels.ANY_WHERE_BANKING.DESC.DESC_THREE_LINE)
            .build(),
          image: iconConstants.IC_GIFTS,
          bgColor: Colors.DARK,
        },
      ],
    },
  ],

  EXPLORE_OTHER_OPT: {
    STEP1: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .appendBold(Labels.EXPLORE_OTHER_OPT.STEP1.TITLE)
      .append(Labels.EXPLORE_OTHER_OPT.STEP1.DESC, { ...styles.topStyle })
      .build(),
    STEP2: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .appendBold(Labels.EXPLORE_OTHER_OPT.STEP2.TITLE)
      .append(Labels.EXPLORE_OTHER_OPT.STEP2.DESC, { ...styles.topStyle })
      .build(),
    STEP3: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .appendBold(Labels.EXPLORE_OTHER_OPT.STEP3.TITLE)
      .append(Labels.EXPLORE_OTHER_OPT.STEP3.DESC, { ...styles.topStyle })
      .build(),
    STEP4: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .appendBold(Labels.EXPLORE_OTHER_OPT.STEP4.TITLE)
      .append(Labels.EXPLORE_OTHER_OPT.STEP4.DESC, { ...styles.topStyle })
      .build(),
    offlineJourney: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .append(Labels.EXPLORE_OTHER_OPT.OFFLINE)
      .appendBold(Labels.EXPLORE_OTHER_OPT.JOURNEY, { ...styles.topStyle, fontSize: 13 })
      .build(),
  },
  //
  SURVEY_SCREEN: {
    SURVEY_HEADING: SpannableBuilder.getInstance([
      { fontSize: 18, color: Colors.DARK, fontFamily: Typography.FONT_FAMILY_REGULAR, paddingTop: 5, lineHeight: 25 },
    ])
      .appendBold(Labels.SURVEY_SCREEN.SURVEY_TITLE.SURVEY_TITLE_NEW_BOLD)
      .append(Labels.SURVEY_SCREEN.SURVEY_TITLE.SURVEY_TITLE_NEW_REGULAR)
      .build(),
    MORE_ABOUT_Y: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 12 }])
      .append(Labels.SURVEY_SCREEN.MORE_ABOUT.MORE_ABOUT_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.MORE_ABOUT.MORE_ABOUT_LINE_TWO)
      .build(),
    INVESTMENT: {
      text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_ONE,
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_TWO)
        .appendBold(Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_THREE)
        .append(Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_FOUR)
        .build(),
      product: [
        {
          image: iconConstants.IC_MUTUAL_FUND,
          text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_FIVE,
        },
        {
          image: iconConstants.IC_FIXED_DPOSITE,
          text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_SIX,
        },
        {
          image: iconConstants.IC_GOLD,
          text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_SEVEN,
        },
        {
          image: iconConstants.IC_PMS,
          text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_EIGHT,
        },

        {
          image: iconConstants.IC_STOCK,
          text: Labels.SURVEY_SCREEN.INVESTMENT.INVESTMENT_LINE_NINE,
        },
      ],
    },
    CHILDREN: {
      text: Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_ONE,
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_TWO)
        .appendBold(Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_THREE)
        .append(Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_FOUR)
        .build(),
      product: [
        {
          image: iconConstants.IC_NO_CHILD,
          text: Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_FIVE,
        },
        {
          image: iconConstants.IC_BABY,
          text: Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_SIX,
        },
        {
          image: iconConstants.IC_BABIES,
          text: Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_SEVEN,
        },
        {
          image: iconConstants.IC_THREE_PLUS,
          text: Labels.SURVEY_SCREEN.CHILDREN.CHILDREN_LINE_EIGHT,
        },
      ],
    },
    VEHICLE: {
      text: Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_ONE,
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_TWO)
        .appendBold(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_THREE)
        .build(),
      makemodel2wheeler: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_FOUR)
        .appendBold(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_FIVE)
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_SIX)
        .appendBold(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_SEVEN)
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_EIGHT)
        .build(),
      makemodelcar: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_FOUR)
        .appendBold(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_FIVE)
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_SIX)
        .appendBold(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_SEVEN)
        .append(Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_NINE)
        .build(),
      product: [
        {
          image: iconConstants.IC_WALK,
          text: Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_TEN,
        },
        {
          image: iconConstants.IC_SCOOTER,
          text: Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_ELEVEN,
        },
        {
          image: iconConstants.IC_CAR,
          text: Labels.SURVEY_SCREEN.VEHICLE.VEHICLE_LINE_TWELVE,
        },
      ],
    },
    OLD_U_R: {
      text: '',
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_ONE)
        .appendBold(Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_TWO)
        .append(Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_THREE)
        .build(),
      product: [
        {
          image: iconConstants.IC_NEW,
          text: Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_FOUR,
        },
        {
          image: iconConstants.IC_MID_WAY,
          text: Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_FIVE,
        },
        {
          image: iconConstants.IC_OLD,
          text: Labels.SURVEY_SCREEN.OLD_U_R.OLD_U_R_LINE_SIX,
        },
      ],
    },
    LIFE_INSURANCE: {
      text: Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_ONE,
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_TWO)
        .appendBold(Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_THREE)
        .append(Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_FOUR)
        .build(),
      product: [
        {
          image: '',
          text: Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_FIVE,
        },
        {
          image: '',
          text: Labels.SURVEY_SCREEN.LIFE_INSURANCE.LIFE_INSURANCE_LINE_SIX,
        },
      ],
    },
    POLICY_INSURANCE: {
      text: Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_ONE,
      question: SpannableBuilder.getInstance([styles.topStyle])
        .append(Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_TWO)
        .appendBold(Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_THREE)
        .append(Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_FOUR)
        .build(),
      product: [
        {
          image: '',
          text: Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_FIVE,
        },
        {
          image: '',
          text: Labels.SURVEY_SCREEN.POLICY_INSURANCE.POLICY_INSURANCE_LINE_SIX,
        },
      ],
    },
    INSURANCE_PLAN: {
      text: '',
      question: SpannableBuilder.getInstance([styles.topStyle, { lineHeight: 20 }])
        .append(Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_ONE)
        .appendBold(Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_TWO)
        .build(),
      product: [
        {
          image: iconConstants.IC_CRORE,
          text: Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_THREE,
        },
        {
          image: iconConstants.IC_TWO_CRORE,
          text: Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_FOUR,
        },
        {
          image: iconConstants.IC_FIVE_CRORE,
          text: Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_FIVE,
        },
        {
          image: iconConstants.IC_OTHER,
          text: Labels.SURVEY_SCREEN.INSURANCE_PLAN.INSURANCE_PLAN_LINE_SIX,
        },
      ],
    },
    ONE_LAST_QUE: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 10 }])
      .append(Labels.SURVEY_SCREEN.ONE_LAST_QUE.ONE_LAST_QUE_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.ONE_LAST_QUE.ONE_LAST_QUE_LINE_TWO)
      .append(Labels.SURVEY_SCREEN.ONE_LAST_QUE.ONE_LAST_QUE_LINE_THREE)
      .build(),
    ABOUT_YOUR_COMPANY: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.ABOUT_YOUR_COMPANY.ABOUT_YOUR_COMPANY_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.ABOUT_YOUR_COMPANY.ABOUT_YOUR_COMPANY_LINE_TWO)
      .build(),
    ABOUT_YOUR_RESIDENCE: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.ABOUT_YOUR_RESIDENCE.ABOUT_YOUR_RESIDENCE_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.ABOUT_YOUR_RESIDENCE.ABOUT_YOUR_RESIDENCE_LINE_TWO)
      .build(),
    AUTO_INSURANCE: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.AUTO_INSURANCE.AUTO_INSURANCE_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.AUTO_INSURANCE.AUTO_INSURANCE_LINE_TWO)
      .append(Labels.SURVEY_SCREEN.AUTO_INSURANCE.AUTO_INSURANCE_LINE_THREE)
      .build(),

    FIRST_CHILD_BIRTHDAY: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.FIRST_CHILD_BIRTHDAY.FIRST_CHILD_BIRTHDAY_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.FIRST_CHILD_BIRTHDAY.FIRST_CHILD_BIRTHDAY_LINE_TWO)
      .build(),

    SECOND_CHILD_BIRTHDAY: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.SECOND_CHILD_BIRTHDAY.SECOND_CHILD_BIRTHDAY_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.SECOND_CHILD_BIRTHDAY.SECOND_CHILD_BIRTHDAY_LINE_TWO)
      .build(),

    THIRD_CHILD_BIRTHDAY: SpannableBuilder.getInstance([styles.topStyle, { fontSize: 14 }])
      .append(Labels.SURVEY_SCREEN.THIRD_CHILD_BIRTHDAY.THIRD_CHILD_BIRTHDAY_LINE_ONE)
      .appendBold(Labels.SURVEY_SCREEN.THIRD_CHILD_BIRTHDAY.THIRD_CHILD_BIRTHDAY_LINE_TWO)
      .build(),
  },

  // BENIFITES_OF_VIDIO_KYC: {
  //   restrictions: SpannableBuilder.getInstance([
  //     styles.topStyle,
  //     {lineHeight: 20},
  //   ])
  //     .append('Your account currently has restrictions of \n')
  //     .append('up to ₹1 lakh in a year')
  //     .build(),
  //   personal_loan: SpannableBuilder.getInstance([
  //     styles.topStyle,
  //     {lineHeight: 20},
  //   ])
  //     .append('You will get exciting offers like\n')
  //     .appendBold('credit card, pre-approved personal loans')
  //     .build(),
  //   quick: SpannableBuilder.getInstance([styles.topStyle, {lineHeight: 20}])
  //     .append('It is quick and will be done before\n')
  //     .appendBold('you finish your cup of coffee!')
  //     .build(),
  // },

  VIDEO_VERIFICATION: {
    panCard: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 20 }])
      .append(Labels.VIDEO_VERIFICATION.PANCARD_LINE_ONE)
      .appendBold(Labels.VIDEO_VERIFICATION.PANCARD_LINE_TWO)
      .build(),
    penPaper: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 20 }])
      .appendBold(Labels.VIDEO_VERIFICATION.PENPAPER_LINE_ONE)
      .append(Labels.VIDEO_VERIFICATION.PENPAPER_LINE_TWO)
      .build(),
    connectivity: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 20 }])
      .append(Labels.VIDEO_VERIFICATION.CONNECTIVITY_LINE_ONE)
      .appendBold(Labels.VIDEO_VERIFICATION.CONNECTIVITY_LINE_TWO)
      .build(),
  },

  SCHEDULE_LETTER_TEXT: {
    online: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 20 }])
      .appendBold(Labels.SCHEDULE_LETTER.SCHEDULE_LINE_ONE)
      .append(Labels.SCHEDULE_LETTER.SCHEDULE_LINE_TWO)
      .build(),
    notOnline: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 20 }])
      .append(Labels.SCHEDULE_LETTER.NOTONLINE_LINE_ONE)
      .appendBold(Labels.SCHEDULE_LETTER.NOTONLINE_LINE_TWO)
      .append(Labels.SCHEDULE_LETTER.NOTONLINE_LINE_THREE)
      .build(),
    vkycTime: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 18 }])
      .append(Labels.SCHEDULE_LETTER.VKYCTIME_LINE_ONE)
      .append(Labels.SCHEDULE_LETTER.VKYCTIME_LINE_TWO)
      .appendBold(Labels.SCHEDULE_LETTER.VKYCTIME_LINE_THREE)
      .build(),
    vedioVerification: SpannableBuilder.getInstance([styles.spannableWhite14, { lineHeight: 18 }])
      .append(Labels.SCHEDULE_LETTER.VEDIO_VERIFICATION_LINE_ONE)
      .appendBold(Labels.SCHEDULE_LETTER.VEDIO_VERIFICATION_LINE_TWO)
      .append(Labels.SCHEDULE_LETTER.VEDIO_VERIFICATION_LINE_THREE)
      .build(),
  },

  ACCOUNT_CREATION: {
    hereAreYourAccDetails: SpannableBuilder.getInstance([styles.spannableWhite14, { color: Colors.DARK }])
      .append(Labels.ACCOUNT_CREATION.YOUR_ACC_DETAILS_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.YOUR_ACC_DETAILS_LINE_TWO)
      .build(),
    promisedVouchers: SpannableBuilder.getInstance([styles.spannableWhite16, { color: Colors.DARK }])
      .append(Labels.ACCOUNT_CREATION.PROMISED_VOUCHERS_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.PROMISED_VOUCHERS_LINE_TWO)
      .append(Labels.ACCOUNT_CREATION.PROMISED_VOUCHERS_LINE_THREE)
      .build(),
    additionalServicesTxt: SpannableBuilder.getInstance(styles.spannableWhite16)
      .append(Labels.ACCOUNT_CREATION.ADDITIONAL_SERVICES_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.ADDITIONAL_SERVICES_LINE_TWO)
      .build(),
    uploadYourSignature: SpannableBuilder.getInstance([styles.spannableWhite16, { color: Colors.DARK }])
      .append(Labels.ACCOUNT_CREATION.UPLOAD_SIGNATURE_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.UPLOAD_SIGNATURE_LINE_TWO)
      .build(),
    winVoucherForReferl: SpannableBuilder.getInstance([styles.spannableWhite16, { color: Colors.DARK }])
      .append(Labels.ACCOUNT_CREATION.VOUCHER_REFERL_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.VOUCHER_REFERL_LINE_TWO)
      .append(Labels.ACCOUNT_CREATION.VOUCHER_REFERL_LINE_THREE)
      .appendCustom(Labels.ACCOUNT_CREATION.VOUCHER_REFERL_LINE_FOUR, {
        fontSize: 14,
      })
      .build(),
    loginToAccount: SpannableBuilder.getInstance([styles.spannableWhite16, { color: Colors.DARK }])
      .append(Labels.ACCOUNT_CREATION.LOGIN_ACCOUNT_LINE_ONE)
      .appendBold(Labels.ACCOUNT_CREATION.LOGIN_ACCOUNT_LINE_TWO)
      .append(Labels.ACCOUNT_CREATION.LOGIN_ACCOUNT_LINE_THREE)
      .build(),
    accountIsLive: SpannableBuilder.getInstance([styles.spannable20])
      .appendBold(Labels.ACCOUNT_CREATION.ACCOUNT_LIVE_LINE_ONE)
      .append(Labels.ACCOUNT_CREATION.ACCOUNT_LIVE_LINE_TWO)
      .appendBold(Labels.ACCOUNT_CREATION.ACCOUNT_LIVE_LINE_THREE)
      .append(Labels.ACCOUNT_CREATION.ACCOUNT_LIVE_LINE_FOUR)
      .build(),
  },
};
