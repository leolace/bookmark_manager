import React from "react"
import styles from "./Input.module.scss"

const Input = ({
  type,
  id,
  label,
  value,
  error,
  onBlur,
  onChange,
  validate,
  ...props
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Input
