import styles from './actions.module.css'
import { IconTrash, IconGenerate, IconLeft, IconRight } from '../icon'

interface ActionProps {
  newColor: (front: boolean) => any
  newPallet: () => void
  deleteSelected: () => void
}

export default function Actions(props: ActionProps) {
  return (        
    <div className={styles.actions}>
      <div onClick={() => props.newColor(false)}>{IconLeft()}</div>
      <div onClick={() => props.newPallet()}>{IconGenerate()}</div>
      <div onClick={() => props.deleteSelected()}>{IconTrash()}</div>
      <div onClick={() => props.newColor(true)}>{IconRight()}</div>
    </div>
  )
}