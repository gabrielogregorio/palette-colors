import PalletColor from "../model/palletColor"
import { useEffect, useState } from 'react'
import styles from './cores.module.css'
import Actions from "../components/Actions/Actions"
import Pallet from "../components/Pallet/Pallet"


export default function Home() {
  const [pallet, setPallet] = useState<PalletColor>(null)

  useEffect(() => {
    setPallet(new PalletColor([], 5).generateNewPalletColor())
  }, [])

  function selectColor(id: number): void{
    setPallet(pallet.selectColor(id))
  }

  function copyColor(e): void {
    e.stopPropagation()
  }


  function deleteSelected(): void {
    setPallet(pallet.deleteSelected())
  }

  function novaCor(frente:boolean=false): void {
    setPallet(pallet.novaCor(frente))
  }

  function alterarCor(e, i): void {
    setPallet(pallet.alterarCor(e.target.value, i))
  }

  function novaPaleta(): void {
    setPallet(pallet.generateNewPalletColor())
  }

  return (
    <div className={styles.container}>

      <Pallet
        palletItem={pallet}
        selectColor={selectColor}
        copyColor={copyColor}
        alterarCor={alterarCor} />
    
      <Actions
        novaCor={novaCor}
        novaPaleta={novaPaleta}
        deleteSelected={deleteSelected} />
    </div>
  )
}
