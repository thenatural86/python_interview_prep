const SURVEY_ID = '17feca64-e756-4f15-beac-1dbbb293c227'

const QUESTIONS =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_questions.json'

const SCORES =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_responses.json'

async function printSurveyReport() {
  try {
    // Fetch survey data
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

    // Fetch survey scores
    const scoresResponse = await fetch(SCORES)
    const scores = await scoresResponse.json()

    // Calculate and print the average scores for the survey
    surveyAverage(scores, questions)
  } catch (error) {
    console.error('Error fetching survey data:', error)
  }
}

const firstSurvey = (surveys) => {
  const survey = surveys.find((survey) => survey.id === SURVEY_ID)

  if (survey) {
    console.log('Survey Name:', survey.name)
  } else {
    console.error(`Survey with ID ${SURVEY_ID} not found.`)
  }
}

const questionPrompts = (questions) => {
  console.log('All Questions:', questions)

  const relevantQuestions = questions.filter(
    (question) => question.survey_id === SURVEY_ID
  )

  if (relevantQuestions.length > 0) {
    console.log('Question Prompts:')
    relevantQuestions.forEach((question) => console.log(question.prompt))
  } else {
    console.log(`No questions found for survey ID: ${SURVEY_ID}`)
  }
}

const surveyAverage = (scores, questions) => {
  // Filter questions for the current survey
  const relevantQuestions = questions.filter(
    (question) => question.survey_id === SURVEY_ID
  )

  // Create a map of question IDs to prompts
  const questionMap = {}
  relevantQuestions.forEach((question) => {
    questionMap[question.id] = question.prompt
  })

  // Filter scores for relevant questions and calculate averages using reduce
  const scoresByQuestion = scores.reduce((acc, score) => {
    if (questionMap[score.question_id]) {
      if (!acc[score.question_id]) {
        acc[score.question_id] = { total: 0, count: 0 }
      }
      acc[score.question_id].total += score.score
      acc[score.question_id].count += 1
    }
    return acc
  }, {})

  // Print results
  console.log('Average Scores for Survey Questions:')
  Object.entries(scoresByQuestion).forEach(([questionId, data]) => {
    const average = data.total / data.count
    console.log(
      `Question: ${questionMap[questionId]} | Average Score: ${average.toFixed(
        2
      )}`
    )
  })
}

// Execute the function
;(async function run() {
  await printSurveyReport()
})()
