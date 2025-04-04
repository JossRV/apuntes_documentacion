# Laravel Carbon
- Carbon permite obtener y formatear la fecha, tanto actual, como un registro existente en la base de datos o la fecha proporcionada.
- Obtener la fecha y hora actual: `$currentDate = Carbon::now();`
- Formatear la fecha: `$dateFormat = $currenDate->format('d/m/Y);`
- **d** es el dia en 2 digitos
- **m** es el mes en 1 digito
- **Y** es el año en 4 digitos