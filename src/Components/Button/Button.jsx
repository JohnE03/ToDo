import React from 'react'
import styles from './Button.module.css'

function Button({ children, onClick, type = "button" }) {
  return (
    <div>
        <button type={type} onClick={onClick} className={styles.btn}>
            {children}
        </button>
    </div>
  )
}

export default Button
