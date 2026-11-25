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

    <p>Un sistema de ecuaciones lineales son varias ecuaciones que deben cumplirse al mismo tiempo. Cada incógnita aparece solo a la primera potencia. En esta entrada aprenderás a organizar esos sistemas con matrices y a resolverlos con el método de Gauss y el método de Gauss-Jordan.</p>

    <article class="tarjeta">
        <h3>Soluciones que puede tener</h3>
        <p class="regla">Cada ecuación con tres incógnitas representa un plano en el espacio. La solución está en el punto donde se cruzan todos. Según el caso, puede haber una sola solución, infinitas o ninguna.</p>

        <table class="tabla-datos">
            <tr>
                <th>Tipo de sistema</th>
                <th>Soluciones</th>
                <th>Cómo se ve al resolverlo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Compatible determinado</td>
                <td onclick="resaltarElemento(this)">Una sola</td>
                <td onclick="resaltarElemento(this)">Llegas a valores concretos para cada incógnita.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Compatible indeterminado</td>
                <td onclick="resaltarElemento(this)">Infinitas</td>
                <td onclick="resaltarElemento(this)">Aparece un renglón de la forma 0 = 0.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Incompatible</td>
                <td onclick="resaltarElemento(this)">Ninguna</td>
                <td onclick="resaltarElemento(this)">Aparece un renglón imposible, como 0 = 3.</td>
            </tr>
        </table>
        <p class="regla">El determinante ayuda a predecir el caso. Si det(A) es distinto de cero, hay una sola solución. Si det(A) es cero, puede haber infinitas o ninguna.</p>
    </article>

    <article class="tarjeta">
        <h3>Matriz de coeficientes y aumentada</h3>
        <p class="regla">Un sistema se puede escribir como A &middot; X = B. A es la matriz de coeficientes, X es el vector de incógnitas y B es el vector de constantes. La matriz aumentada pega B a la derecha de A, separada por una línea.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Desarrollo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Forma AX = B</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        A =
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                            <tr><td>2</td><td>&minus;1</td><td>1</td></tr>
                            <tr><td>1</td><td>2</td><td>&minus;1</td></tr>
                        </table>
                        X =
                        <table class="mat">
                            <tr><td>x</td></tr>
                            <tr><td>y</td></tr>
                            <tr><td>z</td></tr>
                        </table>
                        B =
                        <table class="mat">
                            <tr><td>6</td></tr>
                            <tr><td>3</td></tr>
                            <tr><td>2</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Matriz aumentada [A | B]</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td><td>6</td></tr>
                            <tr><td>2</td><td>&minus;1</td><td>1</td><td>3</td></tr>
                            <tr><td>1</td><td>2</td><td>&minus;1</td><td>2</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </article>
    <article class="tarjeta">
        <h3>Puntos importantes antes de comenzar</h3>
        <p class="regla">Antes de llenar la matriz, revisa estos cuatro puntos para no cometer errores.</p>

        <table class="tabla-datos">
            <tr>
                <th>Regla</th>
                <th>Qué significa</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Mismo orden</td>
                <td onclick="resaltarElemento(this)">Ordena las incógnitas igual en todas las ecuaciones: x, y, z.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Incógnita que falta</td>
                <td onclick="resaltarElemento(this)">Su coeficiente es 0. No la saltes.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Incógnita sola</td>
                <td onclick="resaltarElemento(this)">Su coeficiente es 1, o &minus;1 si tiene signo menos.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Constantes</td>
                <td onclick="resaltarElemento(this)">Van del lado derecho del igual, en la última columna.</td>
            </tr>
        </table>

        <p class="regla"><b>Ejemplo: Armar la aumentada de un sistema</b><br>
        2x + 3z = 7, y &minus; z = 1, x + y = 4. Como y no aparece en la primera ecuación, su coeficiente es 0. Como x no aparece en la segunda, también es 0.</p>

        <div class="fila-mat">
            <table class="mat">
                <tr><td>2</td><td>0</td><td>3</td><td>7</td></tr>
                <tr><td>0</td><td>1</td><td>&minus;1</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>4</td></tr>
            </table>
        </div>
    </article>

    <article class="tarjeta">
        <h3>Operaciones elementales de renglón</h3>
        <p class="regla">Hay tres movimientos permitidos sobre los renglones de la aumentada. Ninguno cambia la solución del sistema. Son lo mismo que hacías en secundaria al sumar o restar ecuaciones, pero sin escribir las incógnitas.</p>

        <table class="tabla-datos">
            <tr>
                <th>Operación</th>
                <th>Notación</th>
                <th>Ejemplo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Intercambiar dos renglones</td>
                <td onclick="resaltarElemento(this)">R<sub>1</sub> &harr; R<sub>2</sub></td>
                <td onclick="resaltarElemento(this)">Poner arriba el renglón que empieza con 1.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Multiplicar un renglón por k, con k distinto de 0</td>
                <td onclick="resaltarElemento(this)">R<sub>2</sub> &rarr; (1/3) R<sub>2</sub></td>
                <td onclick="resaltarElemento(this)">Convertir un 3 en 1.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Sumar a un renglón un múltiplo de otro</td>
                <td onclick="resaltarElemento(this)">R<sub>2</sub> &rarr; R<sub>2</sub> &minus; 2R<sub>1</sub></td>
                <td onclick="resaltarElemento(this)">Hacer un cero en la posición que quieras.</td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Método de Gauss</h3>
        <p class="regla">Con operaciones de renglón se hacen ceros debajo de la diagonal, hasta dejar la matriz en forma escalonada. Después se resuelve de abajo hacia arriba, que se llama sustitución hacia atrás.</p>

        <table class="tabla-datos">
            <tr>
                <th>Paso</th>
                <th>Qué haces</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Paso 1</td>
                <td onclick="resaltarElemento(this)">Usa el renglón 1 para hacer ceros en la columna 1.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Paso 2</td>
                <td onclick="resaltarElemento(this)">Usa el renglón 2 para hacer cero en la columna 2.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Paso 3</td>
                <td onclick="resaltarElemento(this)">El último renglón da el valor de z. Sustituye hacia arriba para encontrar y y x.</td>
            </tr>
        </table>
    </article>
    <article class="tarjeta">
        <h3>Ejemplo: Sistema resuelto por Gauss</h3>
        <p class="regla">Tomamos el sistema x + y + z = 6, 2x &minus; y + z = 3, x + 2y &minus; z = 2.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Desarrollo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Eliminación</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td><td>6</td></tr>
                            <tr><td>2</td><td>&minus;1</td><td>1</td><td>3</td></tr>
                            <tr><td>1</td><td>2</td><td>&minus;1</td><td>2</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td><td>6</td></tr>
                            <tr><td>0</td><td>&minus;3</td><td>&minus;1</td><td>&minus;9</td></tr>
                            <tr><td>0</td><td>1</td><td>&minus;2</td><td>&minus;4</td></tr>
                        </table>
                    </div>
                    R<sub>2</sub> &rarr; R<sub>2</sub> &minus; 2R<sub>1</sub> y R<sub>3</sub> &rarr; R<sub>3</sub> &minus; R<sub>1</sub>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Segunda eliminación</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td><td>6</td></tr>
                            <tr><td>0</td><td>&minus;3</td><td>&minus;1</td><td>&minus;9</td></tr>
                            <tr><td>0</td><td>1</td><td>&minus;2</td><td>&minus;4</td></tr>
                        </table>
                        <span class="op">&rarr;</span>
                        <table class="mat">
                            <tr><td>1</td><td>1</td><td>1</td><td>6</td></tr>
                            <tr><td>0</td><td>&minus;3</td><td>&minus;1</td><td>&minus;9</td></tr>
                            <tr><td>0</td><td>0</td><td>&minus;7</td><td>&minus;21</td></tr>
                        </table>
                    </div>
                    R<sub>3</sub> &rarr; 3R<sub>3</sub> + R<sub>2</sub>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Sustitución hacia atrás</td>
                <td onclick="resaltarElemento(this)">
                    Renglón 3: &minus;7z = &minus;21 &rarr; <b>z = 3</b><br>
                    Renglón 2: &minus;3y &minus; 3 = &minus;9 &rarr; y = 2<br>
                    Renglón 1: x + 2 + 3 = 6 &rarr; <b>x = 1</b>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Resultado</td>
                <td onclick="resaltarElemento(this)"><b>(x, y, z) = (1, 2, 3)</b></td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Ejemplo: Gauss evitando fracciones</h3>
        <p class="regla">Tomamos el sistema 2x + y &minus; z = 8, &minus;3x &minus; y + 2z = &minus;11, &minus;2x + y + 2z = &minus;3. Conviene combinar renglones para que el número a eliminar se cancele sin usar fracciones.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Desarrollo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Aumentada inicial</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>2</td><td>1</td><td>&minus;1</td><td>8</td></tr>
                            <tr><td>&minus;3</td><td>&minus;1</td><td>2</td><td>&minus;11</td></tr>
                            <tr><td>&minus;2</td><td>1</td><td>2</td><td>&minus;3</td></tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Eliminación</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>2</td><td>1</td><td>&minus;1</td><td>8</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>2</td></tr>
                            <tr><td>0</td><td>2</td><td>1</td><td>5</td></tr>
                        </table>
                    </div>
                    R<sub>2</sub> &rarr; 2R<sub>2</sub> + 3R<sub>1</sub> y R<sub>3</sub> &rarr; R<sub>3</sub> + R<sub>1</sub>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Último cero</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>2</td><td>1</td><td>&minus;1</td><td>8</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>2</td></tr>
                            <tr><td>0</td><td>0</td><td>&minus;1</td><td>1</td></tr>
                        </table>
                    </div>
                    R<sub>3</sub> &rarr; R<sub>3</sub> &minus; 2R<sub>2</sub>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Sustitución hacia atrás</td>
                <td onclick="resaltarElemento(this)">
                    Renglón 3: &minus;z = 1 &rarr; <b>z = &minus;1</b><br>
                    Renglón 2: y + (&minus;1) = 2 &rarr; <b>y = 3</b><br>
                    Renglón 1: 2x + 3 &minus; (&minus;1) = 8 &rarr; 2x = 4 &rarr; <b>x = 2</b>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Resultado</td>
                <td onclick="resaltarElemento(this)"><b>(x, y, z) = (2, 3, &minus;1)</b></td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Método de Gauss-Jordan</h3>
        <p class="regla">Gauss-Jordan continúa el proceso. Además de hacer ceros debajo de la diagonal, también los hace arriba, y convierte cada pivote en 1. Al final, la parte izquierda queda como la matriz identidad y la columna derecha es la solución. No hace falta sustituir.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Forma final</td>
                <td onclick="resaltarElemento(this)">Escalonada reducida: la identidad a la izquierda y la solución a la derecha.</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Último paso</td>
                <td onclick="resaltarElemento(this)">Leer directamente la última columna.</td>
            </tr>
        </table>
    </article>

    <article class="tarjeta">
        <h3>Ejemplo: Sistema resuelto por Gauss-Jordan</h3>
        <p class="regla">Tomamos el sistema x &minus; y + 2z = 9, 2x + y &minus; z = 0, 3x + 2y + z = 7.</p>

        <table class="tabla-datos">
            <tr>
                <th>Concepto</th>
                <th>Desarrollo</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ceros debajo del pivote 1</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>&minus;1</td><td>2</td><td>9</td></tr>
                            <tr><td>0</td><td>3</td><td>&minus;5</td><td>&minus;18</td></tr>
                            <tr><td>0</td><td>5</td><td>&minus;5</td><td>&minus;20</td></tr>
                        </table>
                    </div>
                    R<sub>2</sub> &rarr; R<sub>2</sub> &minus; 2R<sub>1</sub> y R<sub>3</sub> &rarr; R<sub>3</sub> &minus; 3R<sub>1</sub>
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Pivote 1 en el segundo renglón</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>&minus;1</td><td>2</td><td>9</td></tr>
                            <tr><td>0</td><td>1</td><td>&minus;1</td><td>&minus;4</td></tr>
                            <tr><td>0</td><td>3</td><td>&minus;5</td><td>&minus;18</td></tr>
                        </table>
                    </div>
                    Se intercambian R<sub>2</sub> y R<sub>3</sub>, después R<sub>3</sub> &rarr; (1/5) R<sub>3</sub> y finalmente se vuelve a intercambiar para colocar el pivote adecuado.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ceros arriba y en la diagonal</td>
                <td onclick="resaltarElemento(this)">
                    <div class="fila-mat">
                        <table class="mat">
                            <tr><td>1</td><td>0</td><td>1</td><td>5</td></tr>
                            <tr><td>0</td><td>1</td><td>&minus;1</td><td>&minus;4</td></tr>
                            <tr><td>0</td><td>0</td><td>1</td><td>3</td></tr>
                        </table>
                    </div>
                    Después de los ceros arriba y abajo de cada pivote, la forma queda escalonada reducida.
                </td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Resultado</td>
                <td onclick="resaltarElemento(this)">
                    Leyendo la última columna: <b>(x, y, z) = (2, &minus;1, 3)</b>.<br>
                    Comprobación: 2 &minus; (&minus;1) + 2(3) = 9 &check;, y también 2(2) + (&minus;1) &minus; 3 = 0 &check;.
                </td>
            </tr>
        </table>
    </article>

</section>`;