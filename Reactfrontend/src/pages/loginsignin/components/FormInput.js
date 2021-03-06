import React from 'react'
import styles from '../stylesheets/formInput.module.sass'
//import capitalizeString from '../utils/capitalizeString'


export default function FormInput() {
  return (
    <div className={styles.outbox}>
      <div className={styles.label}>
        <label>capitalizeString name</label>
      </div>
      <div className={styles.input}>
        <input type='text'/>
      </div>
      <div className={styles.errMsg}>
        errorMessage
      </div>
    </div>
  )
}

// const validate = (validations, val) => {
//   if (validations) {
//     for (const validation of validations) {
//       if (!validation.check(val)) {
//         return {
//           isValid: false,
//           errorMsg: validation.errMsg
//         }
//       }
//     }
//   }
//   return { isValid: true }
// }

