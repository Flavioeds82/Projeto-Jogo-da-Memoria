export function clockFormatting(timer: number){

   let min = Math.floor(timer / 60);
   let sec = timer - (min * 60);

   let stringSec = `${sec < 10 ? '0'+sec: sec}`;
   let stringMin = `${min < 10 ? '0'+min: min}`;

   return `${stringMin}: ${stringSec}`;
}

