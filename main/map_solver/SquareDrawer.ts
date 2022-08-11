/*|=====================================================|
  | Author :    Tom FLEURICOURT                         |
  | Support :   Djibril SOW,                            |
  |             Belkacem SERRAYE                        |
  | Project : "Petit Petit Carrée"                      |
  | Program : "Square Drawer"                           |
  | Description :                                       |
  |     "fonction qui dessine dans le terminal la carte |
  |      résolue, comportant son plus grands carré,     |
  |      marqué par un 'X' "                            |
  |=====================================================|*/

export function Draw_Solved_Map(map: string[][], sqr: number[])
{
      //Déclarations
    const sqr_start_x:number = sqr[0]
    const sqr_start_y:number = sqr[1]
    const sqr_size:number    = sqr[2]

    const nb_rows:number = map.length;
    const nb_cols:number = map[0].length;

    var i:number = 0
    var j:number = 0

      //Ajout du carré
    for (i = 0 ; i < sqr_size; i++)
    {
      for (j = 0 ; j < sqr_size; j++)
      {
        map[sqr_start_y + j][sqr_start_x + i] = 'x'
      }
    }

      //Dessin du résultat
    for (i = 0 ; i < nb_rows; i++)
    {
      for(j = 0; j < nb_cols; j++)
      {
        process.stdout.write(map[i][j]);
        process.stdout.write(" ");
      }
      process.stdout.write("\n");
    }

    return 0
}