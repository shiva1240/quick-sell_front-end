import React from 'react'
import Column from '../Column/Column'
import styles from '../Main/Main.module.css'

const Main = ({gridData,ordering,grouping}) => {
  

  const listOfKeys = Object.keys(gridData)
  return (
    <div className={styles.main}>
     

    {listOfKeys.map((key,i)=>{
      return (<Column key={i} title={key} tickets={gridData[key]}  ordering={ordering} grouping={grouping} />)
    })}



    
      
       
     
    </div>
  )
}

export default Main