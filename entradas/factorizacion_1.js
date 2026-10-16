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

       <p>Factorizar es el proceso contrario a multiplicar.</p>

        <article class="tarjeta">
        <h3>Caso 1: Factor común</h3>
        <p class="regla">Se usa cuando todos los términos de la expresión comparten algo: un número, una letra o ambos.</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
                <td onclick="resaltarElemento(this)">Todos los términos tienen al menos un factor en común (coeficientes con un divisor común y/o la misma variable).</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Procedimiento</td>
                <td onclick="resaltarElemento(this)">
                    1) Busco el mayor número que divide a todos los coeficientes.<br>
                    2) De cada letra repetida en todos los términos, tomo la de menor exponente.<br>
                    3) Escribo ese factor común fuera de un paréntesis.<br>
                    4) Dentro del paréntesis pongo lo que queda de cada término al dividirlo entre el factor común.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">
                    12x<sup>3</sup>y<sup>2</sup> &minus; 18x<sup>2</sup>y<sup>3</sup> + 6x<sup>2</sup>y<br>
                    El mayor divisor de 12, 18 y 6 es 6; las letras comunes con menor exponente son x<sup>2</sup> y y.<br>
                    Factor común: 6x<sup>2</sup>y<br>
                    = 6x<sup>2</sup>y (2xy &minus; 3y<sup>2</sup> + 1)
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
                <td onclick="resaltarElemento(this)">
                    6x<sup>2</sup>y &middot; 2xy = 12x<sup>3</sup>y<sup>2</sup><br>
                    6x<sup>2</sup>y &middot; (&minus;3y<sup>2</sup>) = &minus;18x<sup>2</sup>y<sup>3</sup><br>
                    6x<sup>2</sup>y &middot; 1 = 6x<sup>2</sup>y<br>
                    Se obtiene la expresión original.
                </td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Caso 2: Trinomio cuadrado perfecto</h3>
        <p class="regla">Es un trinomio que sale de elevar un binomio al cuadrado: a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup> = (a &plusmn; b)<sup>2</sup></p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
                <td onclick="resaltarElemento(this)">Tiene tres términos; el primero y el último son cuadrados perfectos (y positivos), y el término del medio es el doble del producto de sus raíces.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Procedimiento</td>
                <td onclick="resaltarElemento(this)">
                    1) Saco la raíz cuadrada del primer y del último término.<br>
                    2) Verifico que el término del medio sea 2 &middot; (raíz 1) &middot; (raíz 2).<br>
                    3) Escribo un binomio con las dos raíces, usando el signo del término del medio, y lo elevo al cuadrado.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">
                    16x<sup>2</sup> &minus; 40x + 25<br>
                    Raíces: &radic;(16x<sup>2</sup>) = 4x y &radic;25 = 5.<br>
                    Verifico el medio: 2(4x)(5) = 40x, y el signo es negativo, así que va resta.<br>
                    = (4x &minus; 5)<sup>2</sup>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
                <td onclick="resaltarElemento(this)">
                    (4x &minus; 5)<sup>2</sup> = (4x)<sup>2</sup> &minus; 2(4x)(5) + (5)<sup>2</sup> = 16x<sup>2</sup> &minus; 40x + 25
                </td>
            </tr>
        </table>
    </article>

    <!-- CASO 3: DIFERENCIA DE CUADRADOS -->
    <article class="tarjeta">
        <h3>Caso 3: Diferencia de cuadrados</h3>
        <p class="regla">Es una resta de dos cuadrados perfectos, que se descompone en dos binomios conjugados: a<sup>2</sup> &minus; b<sup>2</sup> = (a + b)(a &minus; b)</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Cómo reconocerlo</td>
                <td onclick="resaltarElemento(this)">Tiene solo dos términos, hay una resta entre ellos y ambos son cuadrados perfectos.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Procedimiento</td>
                <td onclick="resaltarElemento(this)">
                    1) Saco la raíz cuadrada de cada término.<br>
                    2) Escribo dos paréntesis: en uno las raíces se suman y en el otro se restan.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">
                    81m<sup>4</sup> &minus; 100<br>
                    Raíces: &radic;(81m<sup>4</sup>) = 9m<sup>2</sup> y &radic;100 = 10.<br>
                    = (9m<sup>2</sup> + 10)(9m<sup>2</sup> &minus; 10)
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación (multiplicar de regreso)</td>
                <td onclick="resaltarElemento(this)">
                    (9m<sup>2</sup> + 10)(9m<sup>2</sup> &minus; 10) = 81m<sup>4</sup> &minus; 90m<sup>2</sup> + 90m<sup>2</sup> &minus; 100 = 81m<sup>4</sup> &minus; 100
                </td>
            </tr>
        </table>
    </article>

</section>`;