const question1 = 'Do you consider principles of green chemistry when constructing a design for your experiment?'
const question2 = 'Do you often refer to solvent/ reagent selection guides?'
const question3 = 'Do you revisit protocols to reduce the solvent and material usage for the experiment?'
const question4 = 'Are you aware of the risk assessments conducted in the lab?'
const question5 = 'Do you research or attempt to implement eco-friendly/environmentally friendly solvents or  reeagents?'
const question6 = 'Have you made considerations towards replacing fossil fuel based materials or cleaner/renewable resources?'

export const researchPlanningDesignTree = [
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
      yes: question5,
      sometimes: question5,
      no: question6
    }
  },
  {
    question: question3,
    answer: {
      yes: 'Done',
      sometimes: 'Done',
      no: question4
    }
  },
  {
    question: question4,
    answer: {
      yes: 'Done',
      sometimes: 'disabled',
      no: 'Done'
    }
  },
  {
    question: question5,
    answer: {
      yes: 'Done',
      sometimes: 'Done',
      no: 'Done'
    }
  },
  {
    question: question6,
    answer: {
      yes: 'Done',
      sometimes: 'disabled',
      no: 'Done'
    }
  }
]
