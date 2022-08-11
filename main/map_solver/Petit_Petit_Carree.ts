/*|=====================================================|
  | Programmers :   Tom FLEURICOURT,                    |
  |                 Djibril SOW,                        |
  |                 Belkacem SERRAYE                    |
  | Project : "Petit Petit Carrée"                      |
  | Description :                                       |
  |     "trouver le plus grands carrée de points dans   |
  |     une carte générée par un script"                |
  |=====================================================|*/

    //Importations
import {Convert_Map_To_Matrice}     from "./Matricize"
import {Find_Biggest_Square_In_Map} from "./SquareFinder"
import {Draw_Solved_Map}            from "./SquareDrawer"
import {argv}                     from "process"  

let pathtofile = process.argv[2]
Map_Solver(pathtofile)

    //Fonction principale
export function Map_Solver (path: string)
{
        //Déclarations
    var matrix:string[][] = [[""], [""]]   //matrice de la carte
    var sqrvalues:number[] = [0, 0, 0]    //coordonées du point de départ du carré le plus grand (x, y, size)
    var statuscode:number = 0               //code de status du programme et ses erreures

        //Matriçage
    matrix = Convert_Map_To_Matrice(path)

        //Recherche
    sqrvalues = Find_Biggest_Square_In_Map(matrix)

        //Dessin du résultat
    Draw_Solved_Map(matrix, sqrvalues)

    return 0
}
