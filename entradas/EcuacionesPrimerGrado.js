const contenidoEntrada = `
<style>
  .tarjeta {
    background: #fff;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 24px 0;
    border: 1px solid #d0dbe8;
    box-shadow: 0 2px 6px rgba(4, 55, 107, 0.08);
  }

  .tarjeta h3 {
    margin-top: 0;
    color: #1f4e79;
  }

  .regla {
    background: #f1f6fb;
    padding: 12px 16px;
    border-radius: 8px;
    line-height: 1.6;
  }

  .tabla-datos {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }

  .tabla-datos th {
    background: #04376B;
    color: #fff;
    padding: 10px 14px;
    text-align: left;
  }

  .tabla-datos td {
    padding: 10px 14px;
    border-bottom: 1px solid #d0dbe8;
  }

  .tabla-datos td:first-child {
    font-weight: 600;
    width: 30%;
  }
</style>

<section>
  <p class="regla">
  Una ecuación de primer grado es una igualdad algebraica donde la incógnita está elevada a la primera potencia y se resuelve despejando dicha incógnita.
</p>

  <article class="tarjeta">
    <h3>Procedimiento general para resolver una ecuacion de primer grado</h3>
        <table class="tabla-datos">
      <tr>
        <th>Pasos</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Paso 1 : Signos de agrupación</td>
        <td>Si hay parentesis, corchetes o llaves, se eliminan aplicando la propiedad distrivutiva.</td>
      </tr>
      <tr>
        <td>Paso 2: Denominadores</td>
        <td>
          Si hay fracciones, se calcula usando el MCM en los denomidadores 
          y  se multiplica ambos miembros completos por el.
        </td>
      </tr>
      <tr>
        <td>Paso 3: Reducir </td>
        <td>
        Reduce los terminos semejantes en cada miembro por separado.
                  
        </td>
      </tr>
      <tr>
        <td>Paso 4: Transposición</td>
        <td>
          Se pasan los términos con la incognita a un miembro y los numeros    
          otro. Al cambiar de miembro, un termino cambia al signo contario.
                  
        </td>
      </tr>
      <tr>
        <td>Paso 5: Despejar </td>
        <td>
          Se reducen de nuevo y se dividen ambos miembros entre 
          el coeficiente de la incógnita.
                  
        </td>
      </tr>
      <tr>
        <td>Paso 6: Comprobación </td>
        <td>
          Se sustituye el valor obtenido en la ecuacion original. Si ambos 
          miembros dan el miesmo número, la solución es correcta.
                  
        </td>
      </tr>

    </table>
  </article>

  <article class="tarjeta">
    <h3>Caso 1 : Eccuaciones enteras</h3>
    <p class="regla">Ecuaciones sin denominadores ni paréntesis. Solo hace falta tranponer, reducir y despejar. </p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tiene fracciones con números en el denominador</td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
         5x &minus; 7 = 2x + 11<br>
          Transposición: 5x &minus; 2x = 11 + 7<br>
          Reducción: 3x = 18<br>
          Despeje: x = 18 &divide; 3<br>
          Resultado: <strong>x = 6</strong>
        </td>
      </tr>
      <tr>
        <td>Comprobación</td>
        <td>
          Miembro izquierdo: 5(6) &minus; 7 = 30 &minus; 7 = 23<br>
          Miembro derecho: 2(6) + 11 = 12 + 11 = 23<br>
          23 = 23
        </td>
      </tr>
    </table>
  </article>

  <article class="tarjeta">
    <h3>Caso 2: Ecuaciones fraccionarias </h3>
    <p class="regla">Eccuaciones con denominadores númericos. Se eliminan multiplicando ambos miembros por el mismo MCM.</p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tienen fracciones con números en el denominador </td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
         (x + 1)/3 &minus; (x &minus; 2)/4 = 2<br>
          mcm de 3 y 4 = 12. Multiplico todo por 12:<br>
          4(x + 1) &minus; 3(x &minus; 2) = 24<br>
          Distribuyo: 4x + 4 &minus; 3x + 6 = 24<br>
          Reduzco: x + 10 = 24<br>
          Despejo: x = 24 &minus; 10<br>
          Resultado: <strong>x = 14</strong>
        </td>
      </tr>
      <tr>
        <td>Comprobación</td>
        <td>
          (14 + 1)/3 &minus; (14 &minus; 2)/4 = 15/3 &minus; 12/4 = 5 &minus; 3 = 2<br>
              
        </td>
      </tr>
     
    </table>
  </article>

  <article class="tarjeta">
    <h3>Ecuaciones con signos de agrupación</h3>
    <p class="regla">Ecuaciones con paréntesis. Se eliminan con la     propiedad distributiva, cuidando los signos negativos.</p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlas</td>
        <td>
          Tienen paréntesis, corchetes o llaves, a veces precedidos por un número o por un signo &minus;.
        </td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
           2(x &minus; 2) &minus; 3(4 &minus; x) = 5 &minus; (x &minus; 3)<br>
          Distribuyo: 2x &minus; 4 &minus; 12 + 3x = 5 &minus; x + 3<br>
          Reduzco: 5x &minus; 16 = 8 &minus; x<br>
          Transposición: 5x + x = 8 + 16<br>
          Reducción: 6x = 24<br>
          Resultado: <strong>x = 4</strong>        
</td>
      </tr>
      <tr>
        <td>Comprobacion</td>
        <td>
          Izquierdo: 2(4 &minus; 2) &minus; 3(4 &minus; 4) = 2(2) &minus; 3(0) = 4<br>
          Derecho: 5 &minus; (4 &minus; 3) = 5 &minus; 1 = 4<br>
          4 = 4
        </td>
      </tr>
    </table>
  </article>
</table>
  </article>

  <article class="tarjeta">
    <h3>Caso 1 : Eccuaciones enteras</h3>
    <p class="regla">Ecuaciones sin denominadores ni paréntesis. Solo hace falta tranponer, reducir y despejar. </p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tiene fracciones con números en el denominador</td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
         5x &minus; 7 = 2x + 11<br>
          Transposición: 5x &minus; 2x = 11 + 7<br>
          Reducción: 3x = 18<br>
          Despeje: x = 18 &divide; 3<br>
          Resultado: <strong>x = 6</strong>
        </td>
      </tr>
      <tr>
        <td>Comprobación</td>
        <td>
          Miembro izquierdo: 5(6) &minus; 7 = 30 &minus; 7 = 23<br>
          Miembro derecho: 2(6) + 11 = 12 + 11 = 23<br>
          23 = 23
        </td>
      </tr>
    </table>
  </article>

  <article class="tarjeta">
    <h3>Ecuaciones literales </h3>
    <p class="regla">Ecuaciones donde, además de la incógnita, aparecen otras letras que se tratan como constantes. El resultado queda en términos de esas letras.</p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tienen letras que representan valores conocidos (a, b, c...) junto a la incógnita (x). Se sigue el mismo procedimiento, y al final se divide entre el coeficiente literal.</td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
         Despejar x en: 5(x &minus; a) = 3x + 2a<br>
          Distribuyo: 5x &minus; 5a = 3x + 2a<br>
          Transposición: 5x &minus; 3x = 2a + 5a<br>
          Reducción: 2x = 7a<br>
          Despejo: x = 7a/2<br>
          Resultado: <strong>x = 7a/2</strong>       
        </td>
      </tr>
      <tr>
        <td>Comprobación</td>
        <td>
          Izquierdo: 5(7a/2 &minus; a) = 5(5a/2) = 25a/2<br>
          Derecho: 3(7a/2) + 2a = 21a/2 + 4a/2 = 25a/2<br>
          25a/2 = 25a/2 
              
        </td>
      </tr>
     
    </table>
  </article>
<article class="tarjeta">
    <h3>Problema de planteamiento: Comparando dos servicios de hosting</h3>
    <p class="regla">Estoy publicando mi proyecto de software y comparo dos servicios de hosting. El servicio A cobra $600 de instalación más $150 al mes. El servicio B no cobra instalación, pero cobra $300 al mes. ¿Después de cuántos meses el costo total de ambos servicios es el mismo?
</p>

    <table class="tabla-datos">
      <tr>
        <th>Incógnita</th>
        <th>Desarollo</th>
      </tr>
      <tr>
        <td>Incógnita</td>
        <td>Sea <strong>m</strong> = número de meses en que ambos servicios cuestan lo mismo.</td>
      </tr>
      <tr>
        <td>Traducción</td>
        <td>
         Costo del servicio A: instalación + mensualidad por meses = 600 + 150m<br>
          Costo del servicio B: mensualidad por meses = 300m<br>
          &ldquo;Cuestan lo mismo&rdquo; se traduce como el signo igual.     
        </td>
      </tr>
      <tr>
        <td>Comprobación</td>
        <td>
          Izquierdo: 5(7a/2 &minus; a) = 5(5a/2) = 25a/2<br>
          Derecho: 3(7a/2) + 2a = 21a/2 + 4a/2 = 25a/2<br>
          25a/2 = 25a/2 
              
        </td>
      </tr>
<tr>
        <td> ecuación</td>
        <td> 600 + 150m = 300m</td>
      </tr>
      <tr>
        <td> Solución</td>
        <td 
          Transposición: 600 = 300m &minus; 150m<br>
          Reducción: 600 = 150m<br>
          Despeje: m = 600 &divide; 150<br>
          Resultado: <strong>m = 4 meses</strong>
        </td>
      </tr>
      <tr>
        <td> 5) Validación contra el enunciado</td>
        <td>
          Servicio A a 4 meses: 600 + 150(4) = 600 + 600 = $1,200<br>
          Servicio B a 4 meses: 300(4) = $1,200<br>
          Ambos cuestan $1,200, y 4 es un número de meses positivo y razonable. &#10003;<br>
          Conclusión: si usaré el hosting menos de 4 meses conviene el B; si lo usaré más de 4 meses conviene el A.
        </td>
      </tr>
    </table>
  </article>
 
  <article class="tarjeta">
    <h3>Estrategia de resolución</h3>

    <table class="tabla-datos">
      <tr>
        <th>Si la ecuación...</th>
        <th>Acción a seguir</th>
      </tr>
      <tr>
        <td> Tiene paréntesis</td>
        <td>Elimínalos primero con la propiedad distributiva, cuidando el signo que los precede.</td>
      </tr>
      <tr>
        <td>Tiene fracciones</td>
        <td>Multiplica <strong>todos</strong> los términos de ambos miembros por el mcm de los denominadores.</td>
      </tr>
      <tr>
        <td>Tiene letras además de x</td>
        <td>Trata esas letras como números: agrupa los términos con x, factoriza si hace falta y divide entre el coeficiente literal.</td>
      </tr>
      <tr>
        <td>Es un problema redactado</td>
        <td>Sigue los 5 pasos: incógnita, traducción, ecuación, solución y validación contra el enunciado.</td>
      </tr>
      <tr>
        <td>Siempre</td>
        <td> Comprueba sustituyendo el resultado en la ecuación original.</td>
      </tr>
    </table>
  </article>

</section>
`;