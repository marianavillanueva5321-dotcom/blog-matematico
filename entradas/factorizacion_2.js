const contenidoEntrada = `
<style>
  .tarjeta {
    background: #fff;
    border-radius: 10px;
    padding: 20px 24px;
    margin: 24px 0;
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
    border-bottom: 1px solid #191970;
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
      Fórmulas: a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> &minus; ab + b<sup>2</sup>)<br>
      a<sup>3</sup> &minus; b<sup>3</sup> = (a &minus; b)(a<sup>2</sup> + ab + b<sup>2</sup>)
    </p>

    <table class="tabla-datos">
      <tr>
        <th>Componentes</th>
        <th>Descripción</th>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
        <td onclick="resaltarElemento(this)">Tiene dos términos unidos por una suma o resta, donde los coeficientes tienen raíz cúbica exacta y los exponentes de las variables son múltiplos de 3.</td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Procedimiento</td>
        <td onclick="resaltarElemento(this)">
          1) Obtengo la raíz cúbica de ambos términos.<br>
          2) Formo un binomio (primer paréntesis) con las dos raíces usando el mismo signo original (+ o &minus;).<br>
          3) Formo un trinomio (segundo paréntesis): (a &minus; b)(a<sup>2</sup> + ab + b<sup>2</sup>) </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Ejemplo</td>
        <td onclick="resaltarElemento(this)">
          27x<sup>3</sup> &minus; 64<br>
          Raíces cúbicas: <sup>3</sup>&radic;(27x<sup>3</sup>) = 3x y <sup>3</sup>&radic;64 = 4.<br>
          Binomio: (3x &minus; 4)<br>
          Trinomio: (3x)<sup>2</sup> + (3x)(4) + (4)<sup>2</sup> = 9x<sup>2</sup> + 12x + 16<br>
          Resultado: = (3x &minus; 4)(9x<sup>2</sup> + 12x + 16)
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
        <td onclick="resaltarElemento(this)">
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
        <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
        <td onclick="resaltarElemento(this)">Tiene tres términos ordenados de forma descendente (x<sup>2</sup>, x, número independiente). El coeficiente principal siempre es 1.</td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Procedimiento</td>
        <td onclick="resaltarElemento(this)">
          1) Abro dos paréntesis y coloco la raíz cuadrada del primer término (x) al inicio de cada uno.<br>
          2) El primer paréntesis lleva el signo de b; el segundo paréntesis lleva la multiplicación de los signos de b y c.<br>
          3) Busco dos números que multiplicados den c y que sumados o restados (según los signos del paso 2) den b.
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Ejemplo</td>
        <td onclick="resaltarElemento(this)">
          x<sup>2</sup> &minus; 5x &minus; 24<br>
          Raíz de x<sup>2</sup> = x. Estructura: (x &minus;  )(x +  ).<br>
          Busco dos números que multiplicados den 24 y restados den 5: son 8 y 3.<br>
          Resultado: = (x &minus; 8)(x + 3)
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
        <td onclick="resaltarElemento(this)">
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
        <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
        <td onclick="resaltarElemento(this)">Tiene tres términos ordenados y el coeficiente del término cuadrático (a) es diferente de 1 (y no es un cuadrado perfecto directo o no se puede simplificar fácilmente).</td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Procedimiento</td>
        <td onclick="resaltarElemento(this)">
          1) Descompongo ax<sup>2</sup> en dos factores verticales (a<sub>1</sub>x y a<sub>2</sub>x) y el término c en dos factores (c<sub>1</sub> y c<sub>2</sub>).<br>
          2) Multiplico en aspa (diagonal): (a<sub>1</sub>x &middot; c<sub>2</sub>) + (a<sub>2</sub>x &middot; c<sub>1</sub>).<br>
          3) Verifico que la suma de esos productos coincida con el término central (bx).<br>
          4) Los factores finales se agrupan en forma horizontal: (a<sub>1</sub>x + c<sub>1</sub>)(a<sub>2</sub>x + c<sub>2</sub>).
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Ejemplo</td>
        <td onclick="resaltarElemento(this)">
          3x<sup>2</sup> + 11x + 10<br>
          Descompongo 3x<sup>2</sup> = 3x &middot; x ; y 10 = 2 &middot; 5<br>
          Prueba en aspa:<br>
          3x &middot; 2 = 6x<br>
          x &middot; 5 = 5x<br>
          Suma: 6x + 5x = 11x (coincide con el centro).<br>
          Resultado: = (3x + 5)(x + 2)
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
        <td onclick="resaltarElemento(this)">
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
        <td onclick="resaltarElemento(this)">Paso 1 </td>
        <td onclick="resaltarElemento(this)">
          Verifica si existe un <strong>Factor común</strong>. Si lo hay, extráelo primero. Luego analiza la expresión que queda dentro del paréntesis.
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Si tiene 2 términos (Binomio)</td>
        <td onclick="resaltarElemento(this)">
          - Si es una <strong>resta</strong> de cuadrados: aplica <strong>Diferencia de cuadrados</strong> (a<sup>2</sup> &minus; b<sup>2</sup>).<br>
          - Si es una <strong>suma o resta</strong> de cubos: aplica <strong>Suma o diferencia de cubos</strong> (a<sup>3</sup> &plusmn; b<sup>3</sup>).
        </td>
      </tr>
      <tr>
        <td onclick="resaltarElemento(this)">Si tiene 3 términos (Trinomio)</td>
        <td onclick="resaltarElemento(this)">
          - Revisa si es <strong>Trinomio cuadrado perfecto</strong><br>
          - Si no lo es y empieza con x<sup>2</sup>: aplica <strong>Trinomio x<sup>2</sup> + bx + c</strong> (buscar dos números que sumados den b y multiplicados den c).<br>
          - Si empieza con ax<sup>2</sup>: aplica <strong>Aspa simple (ax<sup>2</sup> + bx + c)</strong>.
        </td>
      </tr>
    </table>
  </article>

</section>
`;

