// const SURVEY_ID = '17feca64-e756-4f15-beac-1dbbb293c227'
// const QUESTIONS =
//   'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_questions.json'

const SCORES =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_responses.json'

async function printSurveyReport(surveyId) {
  const data = await fetch(
    'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/surveys.json'
  )
  const surveys = await data.json()
  const question_data = await fetch(QUESTIONS)
  const questions_json = await question_data.json()
  //   const scores_data = await fetch(SCORES)
  //   const scores_json = await scores_data.json()
  //   console.log(scores_json)
  firstSurvey(surveys)
  questionPrompts(questions_json, SURVEY_ID)
  //   surveyAverage(scores_json, questions_json)
}

// const firstSurvey = (surveys) => {
//   const survey = surveys.find((survey) => survey.id === SURVEY_ID)
//   const name = survey.name
//   console.log(name)
//   return name
// }

// const questionPrompts = (surveys, SURVEY_ID) => {
//   console.log(surveys)

//   surveys.map((survey) => {
//     if (survey.survey_id === SURVEY_ID) {
//       console.log(survey.prompt)
//     }
//   })
// }

// code that associates each question with a score average
const surveyAverage = (scores, questions_json) => {
  questions_json
  // console.log("SCORES", scores)
  // console.log("QUESTIONS", questions_json)\
  const questionsObj = {}
  scores.map((score) => {
    questions_json.map((question, score) => {
      if (question.id === score.question_id) {
        questionObj.question = score
      }
      return questionsObj
    })
  })
  // scores.map((score) => {
  //   questions_json.forEach((question) => {
  //     console.log(question)
  //   })
  // })
}

;(async function run() {
  await printSurveyReport(SURVEY_ID)
})()

// *********************************

const SURVEY_ID = '17feca64-e756-4f15-beac-1dbbb293c227'

const QUESTIONS =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_questions.json'

async function printSurveyReport(surveyId) {
  try {
    const surveyResponse = await fetch(
      'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/surveys.json'
    )
    const surveys = await surveyResponse.json()
    console.log('All Surveys:', surveys)

    // Find and print the first survey's name
    firstSurvey(surveys)

    // Fetch survey questions
    const questionResponse = await fetch(QUESTIONS)
    const questions = await questionResponse.json()
    questionPrompts(questions)
  } catch (error) {
    console.error('Error fetching survey data:', error)
  }
}

const firstSurvey = (surveys) => {
  const survey = surveys.find((survey) => survey.id === SURVEY_ID)
  console.log(survey.name)
  //   return survey.name // Return the survey name
}

const questionPrompts = (questions) => {
  console.log('All Questions:', questions)

  const relevantQuestions = questions.filter(
    (question) => question.survey_id === SURVEY_ID
  )

  if (relevantQuestions.length === 0) {
    console.log(`No questions found for survey ID: ${SURVEY_ID}`)
  } else {
    console.log('Question Prompts:')
    relevantQuestions.forEach((question) => console.log(question.prompt))
  }
}
