import PalletColor from "../model/palletColor"
import { useEffect, useState } from 'react'

export default function sePallets() {
  const [pallet, setPallet] = useState<PalletColor>(null)

  useEffect(() => {
    setPallet(new PalletColor([], 5).generateNewPalletColor())
  }, [])

  function selectPalette(id: number): void{
    setPallet(pallet.selectPalette(id))
  }

  function copyColor(e): void {
    e.stopPropagation()
  }

  function deleteSelected(): void {
    setPallet(pallet.deleteSelected())
  }

  function newColor(frente:boolean=false): void {
    setPallet(pallet.newColor(frente))
  }

  function changeColor(e, i): void {
    setPallet(pallet.changeColor(e.target.value, i))
  }

  function newPallet(): void {
    setPallet(pallet.generateNewPalletColor())
  }

  return {
    pallet,
    setPallet,
    selectPalette,
    copyColor,
    deleteSelected,
    newColor,
    changeColor,
    newPallet   
  }
}