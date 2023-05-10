const question1 = 'Do you have indication or an estimate of the energy consumption of the equipment?'
const question2 = 'Does this guide your decision making for equipment use?'
const question3 = 'Do you make consideration around the energy impact before running?'

export const dailyActionsTree = [
  {
    question: question1,
    answer: {
      yes: question2,
      sometimes: 'disabled',
      no: question3
    }
  },
  {
    question: question2,
    answer: {
      yes: 'Done',
      sometimes: 'Done',
      no: 'Done'
    }
  },
  {
    question: question3,
    answer: {
      yes: question2,
      sometimes: question2,
      no: 'Done'
    }
  },
  {
    question: question2,
    answer: {
      yes: 'Done',
      sometimes: 'disabled',
      no: 'Done'
    }
  }
]