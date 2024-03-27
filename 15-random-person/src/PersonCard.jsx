import React, { useEffect, useState } from 'react'
import {
  FaUser,
  FaEnvelope,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const labelValues = [
  {
    icon: <FaUser />,
    label: 'name',
  },
  {
    icon: <FaEnvelope />,
    label: 'email',
  },
  {
    icon: <FaCalendarTimes />,
    label: 'age',
  },
  {
    icon: <FaMap />,
    label: 'address',
  },
  {
    icon: <FaPhone />,
    label: 'phone',
  },
]

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/57.jpg'

const PersonCard = () => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')
  const [active, setActive] = useState(0)

  const getPerson = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const person = data.results[0]

      const { email, phone } = person
      const { large: image } = person.picture
      const { age } = person.dob
      const { first, last } = person.name
      const { city, country } = person.location

      const newPerson = {
        email,
        phone,
        image,
        age,
        name: `${first} ${last}`,
        address: `${city} ${country}`,
      }
      setLoading(false)
      setPerson(newPerson)
      setTitle('name')
      setValue(newPerson.name)
      setActive(0)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPerson()
  }, [])

  const handelValue = (e) => {
    if (e.target.classList.contains('btn-icon')) {
      const labelValue = e.target.dataset.label
      const index = e.target.dataset.index
      setTitle(labelValue)
      setValue(person[labelValue])
      setActive(parseInt(index))
    }
  }

  return (
    <article className='person-card'>
      <img
        src={(person && person.image) || defaultImage}
        alt='person-image'
        className='img person-img'
      />
      <p>my {title} is</p>
      <h5>{value}</h5>
      <div className='icons-container'>
        {labelValues.map((item, index) => {
          const { icon, label } = item
          return (
            <button
              type='button'
              className={active === index ? 'btn-icon active' : 'btn-icon'}
              data-label={label}
              data-index={index}
              key={index}
              onMouseOver={handelValue}
            >
              {icon}
            </button>
          )
        })}
      </div>
      <button className='btn' type='button' onClick={getPerson}>
        {loading ? 'loading' : 'new person'}
      </button>
    </article>
  )
}

export default PersonCard
