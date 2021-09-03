import styles from './cores.module.css'
import Actions from "../components/Actions/Actions"
import Pallet from "../components/Pallet/Pallet"
import usePallet from '../hooks/usePallets'

export default function Home() {
  const { pallet, selectPalette, copyColor, deleteSelected, newColor, changeColor, newPallet } = usePallet()

  return (
    <div className={styles.container}>
      <Pallet 
        pallet={pallet}
        selectPalette={selectPalette}
        copyColor={copyColor}
        changeColor={changeColor} />
    
      <Actions 
        newColor={newColor}
        newPallet={newPallet}
        deleteSelected={deleteSelected} />
    </div>
  )
}
