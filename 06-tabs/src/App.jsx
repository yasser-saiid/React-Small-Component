import { useState } from 'react'
import './assets/Styles/main.css'
import { useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const URL = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAnError, setIsAnError] = useState(false)
  const [jobs, setJobs] = useState([])
  const [activeJob, setActiveJob] = useState(0)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        setIsLoading(false)
        setIsAnError(true)
        return
      }
      const data = await response.json()
      setIsLoading(false)
      setJobs(data)
    } catch (error) {
      setIsLoading(false)
      setIsAnError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className='section-container full-height'>
        <div className='section-center loading-center'>
          <h2>loading...</h2>
          <div className='loading'></div>
        </div>
      </section>
    )
  }
  if (isAnError) {
    return (
      <section className='section-container full-height'>
        <div className='section-center error-center'>
          <h2>error</h2>
          <p>
            something went wrong, please check your internet connection and try
            again later
          </p>
        </div>
      </section>
    )
  }
  const { title, company, dates, duties } = jobs[activeJob]
  return (
    <section className='section-container'>
      <div className='title-wrapper'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center jobs-center'>
        {/* BTNS */}
        <article className='btn-center'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setActiveJob(index)}
                className={`btn job-btn ${index === activeJob && 'active'}`}
              >
                {job.company}
              </button>
            )
          })}
        </article>

        {/* JOB */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h5 className='job-company'>{company}</h5>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='icon' />
                <p>{duty}</p>
              </div>
            )
          })}
          <button className='btn show-more'>more info</button>
        </article>
      </div>
    </section>
  )
}

export default App
