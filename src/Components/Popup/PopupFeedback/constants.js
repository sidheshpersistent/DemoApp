import {cloneDeep} from 'lodash';

export const feedback_data = [
    { id: 0, isSelected: false },
    { id: 1, isSelected: false },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
  ];

  export const clonedFeedbackData =()=> {
    return cloneDeep(feedback_data)
  }
