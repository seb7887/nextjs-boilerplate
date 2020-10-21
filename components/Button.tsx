import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import styles from './Button.module.css'

export const Button: React.FC = () => {
  return (
    <button arial-label="button" className={styles.button}>
      <HiSun color="#f6e05e" />
      <HiMoon color="#f605e" />
      <span />
    </button>
  )
}
