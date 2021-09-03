import styles from './pallet.module.css'
import PalletColor from "../../model/palletColor"


interface PalletProps {
  pallet: PalletColor
  selectPalette: (i: number) => void
  changeColor: (e:any, i:number) => void
  copyColor: (e:any) => void
}

export default function Pallet(props: PalletProps) {
  function renderColor() {
    return props.pallet?.getAll()?.map((color, i) => {
      let forecolor: string = PalletColor.breakHexForeground(color.value);
      return (
        <div
          onClick={() => props.selectPalette(i)}
          key={`${color.id}`}
          className={styles.cores}
          style={
            {
              backgroundColor: `#${color.value}`,
              borderBottom:  color.selected ? '25px solid #00000055' : ''
            }}>
          
          <input
            onClick={(e) => props.copyColor(e)}
            type="text" value={color.value}
            onChange={(e) => props.changeColor(e, i)}
            style={{color: forecolor}}/>
        </div>
      )
    })
  }

  return (
    <div className={styles.pallet}>
      {renderColor()}
    </div>
  )
}