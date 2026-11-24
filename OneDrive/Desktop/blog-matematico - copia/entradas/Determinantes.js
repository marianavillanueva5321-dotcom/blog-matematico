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

    <p>Un determinante es un solo número que sale de una matriz cuadrada. Su gran utilidad es decirte si la matriz tiene inversa: si el número es 0, no la tiene.</p>

   
    <article class="tarjeta">
        <h3>¿Qué es un determinante?</h3>
        <p class="regla">El determinante se escribe det(A) o con barras verticales |A|. Esas barras no significan valor absoluto: el resultado puede ser negativo. Solo existe para matrices cuadradas, es decir, de 2 &times; 2, 3 &times; 3, 4 &times; 4, etcétera.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Identificar una matriz que se puede calcular</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>3</td><td>2</td></tr>
                            <tr><td>1</td><td>4</td></tr>
                        </table>
                        es cuadrada (2 &times; 2), así que sí tiene determinante.
                    </div>
                </td>
            </tr>
        </table>
    </article>

    
    <article class="tarjeta">
        <h3>Determinante de una matriz 2 &times; 2</h3>
        <p class="regla">Para una matriz de 2 &times; 2 se multiplica la diagonal principal (de arriba a la izquierda hacia abajo a la derecha) y de ese resultado se resta el producto de la diagonal secundaria.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        det
                        <table class="mat">
                            <tr><td>a</td><td>b</td></tr>
                            <tr><td>c</td><td>d</td></tr>
                        </table>
                        = ad &minus; bc
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Determinante positivo</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>3</td><td>2</td></tr>
                            <tr><td>1</td><td>4</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        (3)(4) &minus; (2)(1) = 12 &minus; 2 = <b>10</b>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Determinante negativo</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>&minus;2</td><td>5</td></tr>
                            <tr><td>3</td><td>&minus;1</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        (&minus;2)(&minus;1) &minus; (5)(3) = 2 &minus; 15 = <b>&minus;13</b>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Determinante cero</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>6</td><td>4</td></tr>
                            <tr><td>3</td><td>2</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        (6)(2) &minus; (4)(3) = 12 &minus; 12 = <b>0</b>
                    </div>
                    Como da cero, esta matriz no tiene inversa. Su primer renglón es el doble del segundo.
                </td>
            </tr>
        </table>
    </article>

    
    <article class="tarjeta">
        <table class="tabla-datos">
            <tr>
                <th>Si el determinante es...</th>
                <th>Lo que le pasa a la figura</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Mayor que 1</td>
                <td onclick="resaltarElemento(this)">Crece.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Entre 0 y 1</td>
                <td onclick="resaltarElemento(this)">Se encoge.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Negativo</td>
                <td onclick="resaltarElemento(this)">Se voltea, como si la vieras en un espejo.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Cero</td>
                <td onclick="resaltarElemento(this)">Se aplasta en una línea o en un punto, y se pierde información. Por eso no tiene inversa.</td>
            </tr>
        </table>
    </article>


    <article class="tarjeta">
        <h3>Regla de Sarrus (matrices 3 &times; 3)</h3>
        <p class="regla">Sarrus sirve solo para matrices de 3 &times; 3. Se copian las dos primeras filas debajo de la matriz. Luego se suman los productos de las tres diagonales que bajan hacia la derecha y se restan los productos de las tres diagonales que suben. Sarrus no funciona para matrices de 4 &times; 4 o más grandes.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">det(A) = (aei + dhc + gbf) &minus; (gec + ahf + dbi)</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Calcular con Sarrus una matriz 3 &times; 3</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>1</td><td>2</td><td>3</td></tr>
                            <tr><td>0</td><td>1</td><td>4</td></tr>
                            <tr><td>5</td><td>6</td><td>0</td></tr>
                        </table>
                    </div>
                    Diagonales que bajan: (1)(1)(0) + (0)(6)(3) + (5)(2)(4) = 40<br>
                    Diagonales que suben: (5)(1)(3) + (1)(6)(4) + (0)(2)(0) = 39<br>
                    Resultado: 40 &minus; 39 = <b>1</b>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Matriz con determinante negativo</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>2</td><td>&minus;1</td><td>3</td></tr>
                            <tr><td>1</td><td>4</td><td>&minus;2</td></tr>
                            <tr><td>0</td><td>5</td><td>1</td></tr>
                        </table>
                    </div>
                    Diagonales que bajan: 8 + 15 + 0 = 23<br>
                    Diagonales que suben: 0 &minus; 20 &minus; 1 = &minus;21<br>
                    Resultado: 23 &minus; (&minus;21) = 23 + 21 = <b>44</b><br>
                    Cuidado: restar un número negativo lo vuelve suma.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Matriz con determinante cero</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>2</td><td>3</td></tr>
                            <tr><td>4</td><td>5</td><td>6</td></tr>
                            <tr><td>7</td><td>8</td><td>9</td></tr>
                        </table>
                    </div>
                    Diagonales que bajan: 225 y diagonales que suben: 225<br>
                    Resultado: 225 &minus; 225 = <b>0</b>, así que no tiene inversa. El tercer renglón se puede construir con los otros dos, por lo que no aporta información nueva.
                </td>
            </tr>
        </table>
    </article>

    
    <article class="tarjeta">
        <h3>Método de cofactores</h3>
        <p class="regla">Este método sirve para matrices de cualquier tamaño. Eliges un renglón o una columna, multiplicas cada elemento por su cofactor y sumas los resultados. El cofactor es el determinante que queda al tachar el renglón y la columna del elemento, con el signo que le corresponde según el tablero de signos. Conviene elegir el renglón o columna con más ceros, porque cada cero ya no necesita calcularse.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Tablero de signos (3 &times; 3)</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>+</td><td>&minus;</td><td>+</td></tr>
                            <tr><td>&minus;</td><td>+</td><td>&minus;</td></tr>
                            <tr><td>+</td><td>&minus;</td><td>+</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Elegir la columna con un cero</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>2</td><td>&minus;1</td><td>3</td></tr>
                            <tr><td>1</td><td>4</td><td>&minus;2</td></tr>
                            <tr><td>0</td><td>5</td><td>1</td></tr>
                        </table>
                    </div>
                    La columna 1 tiene un cero, así que solo calculamos dos cofactores:<br>
                    1. Elemento 2 (signo +): tachamos renglón 1 y columna 1, y queda (4)(1) &minus; (&minus;2)(5) = 14<br>
                    2. Elemento 1 (signo &minus;): tachamos renglón 2 y columna 1, y queda (&minus;1)(1) &minus; (3)(5) = &minus;16<br>
                    Suma: (2)(14) + (1)(&minus;1)(&minus;16) + 0 = 28 + 16 = <b>44</b>, el mismo resultado que con Sarrus.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo: Calcular con un solo cofactor</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>3</td><td>0</td><td>2</td></tr>
                            <tr><td>2</td><td>0</td><td>&minus;2</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                        </table>
                    </div>
                    La columna 2 tiene dos ceros, así que basta con calcular el elemento de la posición (3, 2), que es 1. Su signo es &minus; porque (&minus;1)<sup>3+2</sup> = &minus;1.<br>
                    Al tachar el renglón 3 y la columna 2 queda (3)(&minus;2) &minus; (2)(2) = &minus;10. El cofactor es &minus;(&minus;10) = 10.<br>
                    Resultado: det(A) = (1)(10) = <b>10</b>
                </td>
            </tr>
        </table>
    </article>
</section>`;