interface itemCor {
  value: string
  selected: boolean
  id: number
}

interface PalletColorInterface {
  objColors: itemCor[]
  qtd: number
}


//const color:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const color:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e']


export default class PalletColor implements PalletColorInterface{
  objColors: itemCor[]
  qtd: number

  constructor(objColors, qtd = 4) {
    this.objColors = objColors
    this.qtd = qtd
  }

  gerarObjColor(color): itemCor {
    return {value:color, selected:false, id:this.objColors.length + 1}
  }

  private generateClassPallet() {
    return new PalletColor(this.objColors, this.objColors.length)
  }

  addColor(color: string): PalletColor {
    this.objColors.push(this.gerarObjColor(color))
    return this.generateClassPallet()
  }

  addColorInPosition(id: number, value: string): PalletColor {
    this.objColors.splice(id, 0, this.gerarObjColor(value))
    return this.generateClassPallet()
  }

  getAll(): any[] {
    return this.objColors
  }

  deleteSelected() {
    let newObject:itemCor[] = this.objColors.filter(item => item.selected != true)
    return new PalletColor(newObject, newObject.length)
  }

  newColor(frente:boolean){
    let newColor: string = this.generateOneColor()
    let id:number = -1

    this.objColors.forEach((item, i) => {
      if (item.selected) {
        if(frente) { // Adicionar na frente do item
          id = i + 1
        } else {
          id = i // Adicionar atraz do item
        }
      }
    })

    if(id === -1) {
      if(!frente) {
        this.objColors.unshift(this.gerarObjColor(newColor))
      } else {
        this.objColors.push(this.gerarObjColor(newColor))
      }
    } else {
      this.objColors.splice(id, 0, this.gerarObjColor(newColor))
    }

    return this.generateClassPallet()
  }

  selectPalette(id:number) {
    // Marca uma cor como selecionada
    this.objColors.forEach((item, i) => {

      if (id === i) {
        if (item.selected) {
          item.selected = false // Desseleciona
        } else {
          item.selected = true
        }  
      }
    })
    return this.generateClassPallet()
  }


  static breakHexForeground(hexCode: string) {
    /* Escolhe se a cor de fundo deve ser branca ou preta */
    let red = parseInt(hexCode.slice(0, 2), 16)
    let green = parseInt(hexCode.slice(2, 4), 16)
    let blue = parseInt(hexCode.slice(4, 6), 16)

    if ((red*0.299 + green*0.587 + blue*0.114) > 150) {
      return '#000000'
    } 
    return '#ffffff'
  }

  private generateOneColor(): string {
    /* Gera uma cor de forma aleatória */
    let item = ''
    for(let i = 0; i < 6; i++) {
      item += color[Math.floor(Math.random() * color.length)]
    }
    return item
  }

  generateNewPalletColor(): PalletColor {
    /* Gera uma paleta de cor completa */
    this.objColors = []
    for(let i = 0; i < this.qtd; i++) {
      this.objColors.push(this.gerarObjColor(this.generateOneColor()))
    }
    return this.generateClassPallet()
  }

  changeColor(color:string, id:number) {
    /* Recebe uma cor e um ID da posição da cor */
    this.objColors.forEach((item, i) => {
      if (id === i) {
        item.value = color
      }
    })
    return this.generateClassPallet()
  }
}