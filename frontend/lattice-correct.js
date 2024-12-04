const SURVEY_ID = '17feca64-e756-4f15-beac-1dbbb293c227'
const QUESTIONS =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_questions.json'

const SCORES =
  'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/survey_responses.json'

async function printSurveyReport(surveyId) {
  // Fetch surveys, questions, and scores
  const [surveysData, questionsData, scoresData] = await Promise.all([
    fetch(
      'https://interview-data-mock-api.s3.us-west-2.amazonaws.com/surveys.json'
    ).then((res) => res.json()),
    fetch(QUESTIONS).then((res) => res.json()),
    fetch(SCORES).then((res) => res.json()),
  ])

  // Get the survey name
  const surveyName = getSurveyName(surveysData, surveyId)
  console.log(`Survey Name: ${surveyName}`)

  // Get the question prompts
  const questionPrompts = getQuestionPrompts(questionsData, surveyId)
  console.log('Question Prompts:')
  questionPrompts.forEach((prompt, idx) => console.log(`${idx + 1}. ${prompt}`))

  // Get average scores for each question
  const averages = calculateSurveyAverages(scoresData, questionsData)
  console.log('Survey Averages:')
  averages.forEach(({ prompt, average }) =>
    console.log(`${prompt}: ${average.toFixed(2)}`)
  )
}

// Function to get the survey name
function getSurveyName(surveys, surveyId) {
  const survey = surveys.find((s) => s.id === surveyId)
  return survey ? survey.name : 'Survey Not Found'
}

// Function to get question prompts for a survey
function getQuestionPrompts(questions, surveyId) {
  return questions.filter((q) => q.survey_id === surveyId).map((q) => q.prompt)
}

// Function to calculate averages for survey questions
function calculateSurveyAverages(scores, questions) {
  // Group scores by question ID
  const scoresByQuestion = scores.reduce((acc, score) => {
    if (!acc[score.question_id]) acc[score.question_id] = []
    acc[score.question_id].push(score.score)
    return acc
  }, {})

  // Calculate averages for each question
  return questions
    .map((question) => {
      const scores = scoresByQuestion[question.id] || []
      const average =
        scores.length > 0
          ? scores.reduce((sum, value) => sum + value, 0) / scores.length
          : 0
      return {
        prompt: question.prompt,
        average,
      }
    })
    .filter(({ average }) => average > 0) // Exclude questions with no scores
}

// Run the program
;(async function run() {
  await printSurveyReport(SURVEY_ID)
})()
