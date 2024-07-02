export function shuffleList<T>(array: T[]): T[] {
   const shuffledArray = [...array];
   
   shuffledArray.sort(() => Math.random() - 0.5);
   
   return shuffledArray;
 }
 