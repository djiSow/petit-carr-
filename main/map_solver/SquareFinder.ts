/*|=====================================================|
  | Author :    Belkacem SERRAYE                        |
  | Support :   Tom FLEURICOURT                         |
  | Project : "Petit Petit Carrée"                      |
  | Program : "Square Finder"                           |
  | Description :                                       |
  |     "fonction qui cherche le plus grand carré       |
  |      de '.' sur la carte, et retourne les           |
  |      coordonées de son point de déppart             | 
  |      (coin haut-gauche)"                            |
  |=====================================================|*/

function Find_Square_Size_From_Point(map : string[][], row:number, col:number): number
{
    //Déclarations
  var size:number = 0
  var stop:boolean = false

  var x:number = 0
  var y:number = 0
    
    //boucle de recherche
  do
  {
    for(x = 0 ; x < size ; x++)
    {
      for(y = 0; y < size ; y++)
      {
        if (map[row + y][col + x] != ".")
          stop = true
      }
    }
   if (stop == false)
     size++
    
  } while (stop == false && col+size < map[0].length && row+size < map.length)
  
    //retour intermédiaire
  return size
}

export function Find_Biggest_Square_In_Map(map: string[][]): number[]
{
    //Déclarations
  const nb_rows:number = map.length;
	const nb_cols:number = map[0].length;

	var start_x:number   = 0
  var start_y:number   = 0
  var sqr_size:number  = 0
  var temp_size:number = 0

  var row:number = 0
  var col:number = 0
  var x:number = 0
  var y:number = 0

    //Boucle de parcours
  for(row = 0 ; row < nb_rows ; row++)
  {
    for (col = 0; col < nb_cols ; col++)
    {
      x = col
      y = row

        //verification récursive d'un carré
      if (map[row][col] == ".")
        temp_size = Find_Square_Size_From_Point(map, y, x)  //appel de fonction taille
      
        //Attribution dynamique résultat
      if (temp_size > sqr_size)
      {
        sqr_size = temp_size
        start_x = x
        start_y = y
      }
    }
  }
    //renvoi final
  return [start_x, start_y, sqr_size]
}