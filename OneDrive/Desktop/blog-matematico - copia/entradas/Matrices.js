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

  .mat {
    display: inline-table;
    border-collapse: separate;
    border-spacing: 0;
    border-left: 2px solid #222;
    border-right: 2px solid #222;
    border-radius: 6px;
    margin: 4px 6px;
    vertical-align: middle;
  }

  .tabla-datos .mat td {
    border: none;
    width: auto;
    font-weight: normal;
    padding: 3px 12px;
    text-align: center;
    white-space: nowrap;
  }

  .tabla-datos .mat td:first-child {
    width: auto;
    font-weight: normal;
  }

  .fila-mat {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
  }

  .fila-mat .op {
    font-size: 1.2em;
    font-weight: 600;
    padding: 0 4px;
  }
</style>
<section>

    <p>Una matriz es una forma de ordenar números en renglones y columnas. Piensa en ella como una hoja de calificaciones: cada número tiene su lugar exacto.</p>

  
    <article class="tarjeta">
        <h3>¿Qué es una matriz?</h3>
        <p class="regla">Una matriz de orden m &times; n tiene m renglones y n columnas. Para ubicar un número, se dice primero el renglón y después la columna. Por ejemplo, a<sub>23</sub> es el número del renglón 2, columna 3.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Ubicar un número en la matriz</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>1</td><td>2</td><td>3</td></tr>
                            <tr><td>4</td><td>5</td><td>6</td></tr>
                        </table>
                        es de orden 2 &times; 3.
                    </div>
                    El número que está en el renglón 2, columna 3 es el 6.<br>
                </td>
                </td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Tipos de matrices según su forma</h3>
        <p class="regla">Dependiendo de cuántos renglones y columnas tenga, una matriz recibe un nombre distinto.</p>

        <table class="tabla-datos">
            <tr>
                <th>Tipo</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Renglón</td>
                <td onclick="resaltarElemento(this)">
                    Tiene un solo renglón y varias columnas. Ejemplo:
                    <table class="mat">
                        <tr><td>3</td><td>&minus;1</td><td>7</td></tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Columna</td>
                <td onclick="resaltarElemento(this)">
                    Tiene una sola columna y varios renglones, como si estuviera parada. Ejemplo:
                    <table class="mat">
                        <tr><td>2</td></tr>
                        <tr><td>0</td></tr>
                        <tr><td>5</td></tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Cuadrada</td>
                <td onclick="resaltarElemento(this)">
                    Tiene la misma cantidad de renglones que de columnas. Ejemplo:
                    <table class="mat">
                        <tr><td>1</td><td>4</td></tr>
                        <tr><td>&minus;2</td><td>3</td></tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Rectangular</td>
                <td onclick="resaltarElemento(this)">Tiene distinta cantidad de renglones y columnas. Es cualquier matriz que no sea cuadrada.</td>
            </tr>
        </table>
    </article>

   
    <article class="tarjeta">
        <h3>Suma y resta de matrices</h3>
        <p class="regla">Solo puedes sumar o restar matrices que tengan el mismo orden. La operación se hace elemento por elemento: cada número se junta con el que está en la misma posición de la otra matriz. Si los órdenes no coinciden, la operación simplemente no existe.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(A &plusmn; B)<sub>ij</sub> = a<sub>ij</sub> &plusmn; b<sub>ij</sub></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Suma de dos matrices 2 &times; 2</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>2</td></tr>
                            <tr><td>3</td><td>4</td></tr>
                        </table>
                        <span class="op">+</span>
                        <table class="mat">
                            <tr><td>5</td><td>6</td></tr>
                            <tr><td>7</td><td>8</td></tr>
                        </table>
                        <span class="op">=</span>
                        <table class="mat">
                            <tr><td>6</td><td>8</td></tr>
                            <tr><td>10</td><td>12</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Resta con números negativos</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>3</td><td>&minus;1</td><td>0</td></tr>
                            <tr><td>2</td><td>5</td><td>&minus;4</td></tr>
                        </table>
                        <span class="op">&minus;</span>
                        <table class="mat">
                            <tr><td>1</td><td>2</td><td>&minus;3</td></tr>
                            <tr><td>&minus;2</td><td>0</td><td>6</td></tr>
                        </table>
                        <span class="op">=</span>
                        <table class="mat">
                            <tr><td>2</td><td>&minus;3</td><td>3</td></tr>
                            <tr><td>4</td><td>5</td><td>&minus;10</td></tr>
                        </table>
                    </div>
                    Ojo: 0 &minus; (&minus;3) da +3.
                </td>
            </tr>
        </table>
    </article>

   
    <article class="tarjeta">
        <h3>Multiplicación por un escalar</h3>
        <p class="regla">Un escalar es un número solo, no una matriz. Para multiplicar una matriz por un escalar, cada uno de sus elementos se multiplica por ese número. Si la imagen está hecha de números, multiplicar por un número mayor que 1 la aclara, y por uno menor que 1 la oscurece.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(k &middot; A)<sub>ij</sub> = k &middot; a<sub>ij</sub></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Aclarar o oscurecer una imagen</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        3 &middot;
                        <table class="mat">
                            <tr><td>2</td><td>&minus;1</td></tr>
                            <tr><td>0</td><td>4</td></tr>
                        </table>
                        <span class="op">=</span>
                        <table class="mat">
                            <tr><td>6</td><td>&minus;3</td></tr>
                            <tr><td>0</td><td>12</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </article>

  
    <article class="tarjeta">
        <h3>Matriz transpuesta</h3>
        <p class="regla">Transponer una matriz es cambiar sus renglones por columnas. Si la matriz original es de orden m &times; n, la transpuesta será de orden n &times; m. Cuando una matriz cuadrada es igual a su transpuesta, decimos que es simétrica.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(A<sup>T</sup>)<sub>ij</sub> = a<sub>ji</sub></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Transponer una matriz 2 &times; 3</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>1</td><td>2</td><td>3</td></tr>
                            <tr><td>4</td><td>5</td><td>6</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        A<sup>T</sup> =
                        <table class="mat">
                            <tr><td>1</td><td>4</td></tr>
                            <tr><td>2</td><td>5</td></tr>
                            <tr><td>3</td><td>6</td></tr>
                        </table>
                    </div>
                    El primer renglón de A se convierte en la primera columna de A<sup>T</sup>.
                </td>
            </tr>
        </table>
    </article>

   
    <article class="tarjeta">
        <h3>Multiplicación de matrices</h3>
        <p class="regla">Para multiplicar, tomas cada renglón de la primera matriz, lo multiplicas por cada columna de la segunda, término a término, y luego sumas. Esto solo se puede hacer si la cantidad de columnas de la primera matriz es igual a la cantidad de renglones de la segunda. Además, el orden importa: AB normalmente no es igual a BA.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">c<sub>ij</sub> = a<sub>i1</sub>b<sub>1j</sub> + a<sub>i2</sub>b<sub>2j</sub> + &hellip; + a<sub>in</sub>b<sub>nj</sub></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Multiplicar una matriz 2 &times; 3 por una 3 &times; 2</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>1</td><td>0</td><td>2</td></tr>
                            <tr><td>&minus;1</td><td>3</td><td>1</td></tr>
                        </table>
                        y B =
                        <table class="mat">
                            <tr><td>3</td><td>1</td></tr>
                            <tr><td>2</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td></tr>
                        </table>
                    </div>
                    Primer elemento: (1)(3) + (0)(2) + (2)(1) = 5<br>
                    Segundo elemento del primer renglón: (1)(1) + (0)(1) + (2)(0) = 1<br>
                    Primer elemento del segundo renglón: (&minus;1)(3) + (3)(2) + (1)(1) = 4<br>
                    Último elemento: (&minus;1)(1) + (3)(1) + (1)(0) = 2<br>
                    <div class="fila-mat">
                        <b>Resultado AB =</b>
                        <table class="mat">
                            <tr><td>5</td><td>1</td></tr>
                            <tr><td>4</td><td>2</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </article>


    <article class="tarjeta">
        <h3>Matriz inversa de orden 2 &times; 2</h3>
        <p class="regla">La inversa de una matriz A, escrita como A<sup>-1</sup>, es la matriz que "deshace" lo que hizo A. Si multiplicas A por su inversa, obtienes la identidad, que es la matriz con unos en la diagonal y ceros en el resto. No todas las matrices cuadradas tienen inversa.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">
                    Si
                    <table class="mat">
                        <tr><td>a</td><td>b</td></tr>
                        <tr><td>c</td><td>d</td></tr>
                    </table>
                    entonces su inversa es
                    <div class="fila-mat">
                        (1 / (ad &minus; bc)) &middot;
                        <table class="mat">
                            <tr><td>d</td><td>&minus;b</td></tr>
                            <tr><td>&minus;c</td><td>a</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Calcular la inversa de una matriz</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>3</td><td>5</td></tr>
                            <tr><td>1</td><td>2</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        ad &minus; bc = (3)(2) &minus; (5)(1) = 1
                    </div>
                    <div class="fila-mat">
                        A<sup>-1</sup> =
                        <table class="mat">
                            <tr><td>2</td><td>&minus;5</td></tr>
                            <tr><td>&minus;1</td><td>3</td></tr>
                        </table>
                    </div>
                    <div class="fila-mat">
                        Comprobación: A &middot; A<sup>-1</sup> =
                        <table class="mat">
                            <tr><td>1</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td></tr>
                        </table>
                        (la identidad)
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Matriz que no tiene inversa</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>2</td><td>4</td></tr>
                            <tr><td>1</td><td>2</td></tr>
                        </table>
                    </div>
                    Como ad &minus; bc = (2)(2) &minus; (4)(1) = 0, la fórmula tendría que dividir entre cero. Por eso A no tiene inversa.
                </td>
            </tr>
        </table>
    </article>

</section>`;