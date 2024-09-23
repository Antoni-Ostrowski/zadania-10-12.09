import React from 'react'

export default function ListWithObjects({ objectList }) {
  if (objectList === null) {
    console.log('wypelnij liste obiektami')
    alert('wypelnij liste obiektami')
    return
  }

  return (
    <div>
      {objectList.map((object) => {
        // console.log(object)
        return (
          <p key={object.id}>
            {object.name}: {object.value}
          </p>
        )
      })}
    </div>
  )
}
