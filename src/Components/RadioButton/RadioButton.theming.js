import theme from 'styled-theming';
import { Colors } from '../../Utils';


const base = {
  selected: {
    backgroundColor: Colors.green_radio,
    shadowColor: Colors.black_radio,
    innerCircle: {
      backgroundColor: Colors.white_radio,
    },
  },
  unSelected: {
    borderColor: Colors.grey200,
    backgroundColor: Colors.white_radio,
    disabled: {
      backgroundColor: Colors.grey200,
      borderColor: Colors.grey200,
    },
    shadowColor: Colors.black_radio,
  },
  highlight: {
    color: Colors.grey400,
    backgroundColor: Colors.grey150,
    selected: {
      container: {
        backgroundColor: Colors.white_radio,
        shadowColor: Colors.black_radio,
      },
    },
  },
};

const dark = {
  ...base,
  selected: {
    backgroundColor: Colors.green_radio,
    shadowColor: Colors.black_radio,
    innerCircle: {
      backgroundColor: Colors.white_radio,
    },
  },
  unSelected: {
    borderColor: Colors.grey300,
    backgroundColor: Colors.black_radio,
    disabled: {
      backgroundColor: Colors.grey700,
      borderColor: Colors.grey700,
    },
    shadowColor: Colors.black_radio,
  },
  highlight: {
    color: Colors.grey200,
    backgroundColor: Colors.black_radio,
    selected: {
      container: {
        backgroundColor: Colors.black_radio,
        shadowColor: Colors.black_radio,
      },
    },
  },
};

const premium = {
  ...base,
};

const RadioButtonTheming = theme('name', {
  base,
  // dark,
  // premium,
});

export default RadioButtonTheming;
