const contenidoEntrada = `
<style>
  .tarjeta {
    background: #EBEBD3;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 24px 0;
  }

  .tarjeta h3 {
    margin-top: 0;
    color: #083D77;
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
    border-bottom: 1px solid #8B5A2B;
  }

  .tabla-datos td:first-child {
    font-weight: 600;
    width: 30%;
  }
</style>
<section>

  <article class="tarjeta">
    <h3>Caso 1: Suma y diferencia de cubos</h3>
    <p class="regla">
      Se aplica a binomios cuyos términos son cubos perfectos.<br>
      Suma: a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> &minus; ab + b<sup>2</sup>)<br>
      Diferencia: a<sup>3</sup> &minus; b<sup>3</sup> = (a &minus; b)(a<sup>2</sup> + ab + b<sup>2</sup>)
    </p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tiene dos términos unidos por una suma o resta, donde los coeficientes tienen raíz cúbica exacta y los exponentes de las variables son múltiplos de 3.</td>
      </tr>
      <tr>
        <td>Procedimiento</td>
        <td>
          1) Obtengo la raíz cúbica de ambos términos (a y b).<br>
          2) Formo el binomio (primer paréntesis) con las dos raíces y el mismo signo original (+ o &minus;).<br>
          3) Formo el trinomio (segundo paréntesis): a<sup>2</sup>, luego el producto ab y luego b<sup>2</sup>.
          El signo del término central es <strong>contrario</strong> al del binomio, y el signo del último término es siempre <strong>+</strong>.<br>
          &nbsp;&nbsp;&bull; Suma: (a + b)(a<sup>2</sup> &minus; ab + b<sup>2</sup>)<br>
          &nbsp;&nbsp;&bull; Diferencia: (a &minus; b)(a<sup>2</sup> + ab + b<sup>2</sup>)
        </td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
          27x<sup>3</sup> &minus; 64<br>
          Raíces cúbicas: <sup>3</sup>&radic;(27x<sup>3</sup>) = 3x y <sup>3</sup>&radic;64 = 4.<br>
          Binomio: (3x &minus; 4)<br>
          Trinomio: (3x)<sup>2</sup> + (3x)(4) + (4)<sup>2</sup> = 9x<sup>2</sup> + 12x + 16<br>
          Resultado: = (3x &minus; 4)(9x<sup>2</sup> + 12x + 16)
        </td>
      </tr>
      <tr>
        <td>Comprobación (multiplicar de regreso)</td>
        <td>
          (3x &minus; 4)(9x<sup>2</sup> + 12x + 16)<br>
          = 3x(9x<sup>2</sup> + 12x + 16) &minus; 4(9x<sup>2</sup> + 12x + 16)<br>
          = 27x<sup>3</sup> + 36x<sup>2</sup> + 48x &minus; 36x<sup>2</sup> &minus; 48x &minus; 64<br>
          = 27x<sup>3</sup> &minus; 64
        </td>
      </tr>
    </table>
  </article>

  <article class="tarjeta">
    <h3>Caso 2: Trinomio de la forma x<sup>2</sup> + bx + c</h3>
    <p class="regla">Es un trinomio donde el término cuadrático tiene coeficiente 1. Se descompone en el producto de dos binomios: (x + p)(x + q).</p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tiene tres términos ordenados de forma descendente (x<sup>2</sup>, x, número independiente). El coeficiente principal siempre es 1.</td>
      </tr>
      <tr>
        <td>Procedimiento</td>
        <td>
          1) Abro dos paréntesis y coloco la raíz cuadrada del primer término (x) al inicio de cada uno.<br>
          2) El primer paréntesis lleva el signo de b; el segundo lleva el resultado de multiplicar los signos de b y c.<br>
          3) Busco dos números que multiplicados den c y que cumplan lo siguiente:<br>
          &nbsp;&nbsp;&bull; Si los signos de los paréntesis son <strong>iguales</strong>: los números se <strong>suman</strong> para dar b.<br>
          &nbsp;&nbsp;&bull; Si los signos son <strong>diferentes</strong>: los números se <strong>restan</strong> para dar b, y el mayor lleva el signo de b.
        </td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
          x<sup>2</sup> &minus; 5x &minus; 24<br>
          Raíz de x<sup>2</sup> = x.<br>
          Primer signo: el de b = &minus;. Segundo signo: (&minus;)(&minus;) = +.<br>
          Estructura: (x &minus; &nbsp;&nbsp;)(x + &nbsp;&nbsp;)<br>
          Signos diferentes, así que busco dos números que multiplicados den 24 y restados den 5: son 8 y 3.<br>
          El mayor (8) lleva el signo de b (&minus;).<br>
          Resultado: = (x &minus; 8)(x + 3)
        </td>
      </tr>
      <tr>
        <td>Comprobación (multiplicar de regreso)</td>
        <td>
          (x &minus; 8)(x + 3) = x<sup>2</sup> + 3x &minus; 8x &minus; 24 = x<sup>2</sup> &minus; 5x &minus; 24
        </td>
      </tr>
    </table>
  </article>

  <article class="tarjeta">
    <h3>Caso 3: Trinomio de la forma ax<sup>2</sup> + bx + c (Aspa simple)</h3>
    <p class="regla">Trinomio donde el coeficiente principal 'a' es diferente de 1. Se descompone buscando factores multiplicados en diagonal.</p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td>Cómo reconocerlo</td>
        <td>Tiene tres términos ordenados, el coeficiente de x<sup>2</sup> es distinto de 1 y el trinomio no es cuadrado perfecto.</td>
      </tr>
      <tr>
        <td>Procedimiento</td>
        <td>
          1) Descompongo ax<sup>2</sup> en dos factores verticales (a<sub>1</sub>x y a<sub>2</sub>x) y el término c en dos factores (c<sub>1</sub> y c<sub>2</sub>).<br>
          2) Multiplico en aspa (diagonal): (a<sub>1</sub>x &middot; c<sub>2</sub>) + (a<sub>2</sub>x &middot; c<sub>1</sub>).<br>
          3) Verifico que la suma de esos productos coincida con el término central (bx).<br>
          4) Los factores finales se agrupan en forma horizontal: (a<sub>1</sub>x + c<sub>1</sub>)(a<sub>2</sub>x + c<sub>2</sub>).
        </td>
      </tr>
      <tr>
        <td>Ejemplo</td>
        <td>
          3x<sup>2</sup> + 11x + 10<br>
          Descompongo 3x<sup>2</sup> = 3x &middot; x ; y 10 = 5 &middot; 2<br>
          Prueba en aspa:<br>
          3x &middot; 2 = 6x<br>
          x &middot; 5 = 5x<br>
          Suma: 6x + 5x = 11x (coincide con el centro).<br>
          Resultado: = (3x + 5)(x + 2)
        </td>
      </tr>
      <tr>
        <td>Comprobación (multiplicar de regreso)</td>
        <td>
          (3x + 5)(x + 2) = 3x<sup>2</sup> + 6x + 5x + 10 = 3x<sup>2</sup> + 11x + 10
        </td>
      </tr>
    </table>
  </article>

  <article class="tarjeta">
    <h3>Estrategia de factorización</h3>

    <table class="tabla-datos">
      <tr>
        <th>Paso / Criterio</th>
        <th>Acción a seguir</th>
      </tr>
      <tr>
        <td>Paso 1</td>
        <td>
          Verifica si existe un <strong>Factor común</strong>. Si lo hay, extráelo primero. Luego analiza la expresión que queda dentro del paréntesis.
        </td>
      </tr>
      <tr>
        <td>Si tiene 2 términos (Binomio)</td>
        <td>
          - Si es una <strong>resta</strong> de cuadrados: aplica <strong>Diferencia de cuadrados</strong>: a<sup>2</sup> &minus; b<sup>2</sup> = (a + b)(a &minus; b).<br>
          - Si es una <strong>suma o resta</strong> de cubos: aplica <strong>Suma o diferencia de cubos</strong> (a<sup>3</sup> &plusmn; b<sup>3</sup>).
        </td>
      </tr>
      <tr>
        <td>Si tiene 3 términos (Trinomio)</td>
        <td>
          - Revisa si es <strong>Trinomio cuadrado perfecto</strong>: a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup> = (a &plusmn; b)<sup>2</sup>.<br>
          - Si no lo es y empieza con x<sup>2</sup>: aplica <strong>Trinomio x<sup>2</sup> + bx + c</strong> (buscar dos números que multiplicados den c y que sumados o restados den b, según los signos).<br>
          - Si empieza con ax<sup>2</sup> (a distinto de 1): aplica <strong>Aspa simple (ax<sup>2</sup> + bx + c)</strong>.
        </td>
      </tr>
      <tr>
        <td>Si tiene 4 términos</td>
        <td>
          Intenta <strong>Factorización por agrupación</strong>: agrupa los términos de dos en dos, extrae el factor común de cada grupo y luego extrae el binomio común.
        </td>
      </tr>
    </table>
  </article>

</section>
`;


