import styles from './actions.module.css'
import { IconTrash, IconGenerate, IconLeft, IconRight } from '../icon'

interface ActionProps {
  novaCor: (front: boolean) => any
  novaPaleta: () => void
  deleteSelected: () => void
}

export default function Actions(props: ActionProps) {
  return (        
    <div className={styles.actions}>
      <div onClick={() => props.novaCor(false)}>{IconLeft()}</div>
      <div onClick={() => props.novaPaleta()}>{IconGenerate()}</div>
      <div onClick={() => props.deleteSelected()}>{IconTrash()}</div>
      <div onClick={() => props.novaCor(true)}>{IconRight()}</div>
    </div>
  )
}