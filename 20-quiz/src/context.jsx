import axios from 'axios'
import { useState, createContext, useContext, useEffect } from 'react'

// const temp_api = `https://opentdb.com/api.php?amount=11&category=21&difficulty=easy&type=multiple`

const api_endpoint = `https://opentdb.com/api.php?`

const AppContext = createContext()

const categoryCode = {
  sport: 21,
  history: 23,
  art: 25,
}

export const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sport',
    difficulty: 'easy',
  })

  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await axios(url)
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
      } else {
        setWaiting(true)
        setError(true)
      }
    } catch (error) {
      // console.log(error)
    }
    setLoading(false)
    // const response = await axios(url).catch((err) => console.log(err))
    // if (response) {
    //   const data = response.data.results
    //   if (data.length > 0) {
    //     setQuestions(data)
    //     setWaiting(false)
    //     setLoading(false)
    //     setError(false)
    //   } else {
    //     setWaiting(true)
    //     setError(true)
    //   }
    // } else {
    //   setWaiting(true)
    // }
  }

  const nextQuestion = () => {
    setIndex((prevState) => {
      let index = prevState + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      }
      return index
    })
  }

  const correctAnswer = (answer) => {
    if (answer) {
      setCorrect((prevState) => prevState + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setWaiting(true)
    setCorrect(0)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // const temp_api = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`
    const { amount, category, difficulty } = quiz
    let url = `${api_endpoint}amount=${amount}&category=${categoryCode[category]}&difficulty=${difficulty}&type=multiple`
    fetchQuestions(url)
  }

  // useEffect(() => {
  //   fetchQuestions(temp_api)
  // }, [])

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        modalOpen,
        quiz,
        nextQuestion,
        correctAnswer,
        closeModal,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
