/*|=====================================================|
  | Author :    Djibril SOW                             |
  | Support :   Tom FLEURICOURT                         |
  | Project : "Petit Petit Carrée"                      |
  | Program : "Matricize"                               |
  | Description :                                       |
  |     "fonction qui, à partir d'une addresse de carte |
  |      en format ".txt" extrait et renvoie la matrice |
  |      numérique correspondante à cette carte"        |
  |=====================================================|*/

    //Importations
import {readFileSync} from 'fs'

export function Convert_Map_To_Matrice(path: string): string[][]
{
      //Déclarations
    let intake:string
    let array:string[]
    let matrix:string[][]

      //Methodes
    const readTextFile: any= (path: string) => {
      try {
        return readFileSync(path, "utf8")

      } catch (error) {
        console.log(error)
      }
    }

      //Processing
    intake = readTextFile(path).trim()  //extraction du texte
    array = intake.split('\n'); array.shift()   //Passage en Tableau, retrait du premier element
    matrix = array.map((current) => current.split("")) //Passage en Matrice

      //Renvoi
    return matrix
}