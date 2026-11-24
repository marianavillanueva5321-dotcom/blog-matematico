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

  /* TABLA PRINCIPAL */
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

  /* TABLA DE COMPROBACIÓN */
  .tabla-datos table {
    border-collapse: collapse;
    margin: 4px 0;
  }

  .tabla-datos table th,
  .tabla-datos table td {
    background: transparent;
    color: #000000;
    font-weight: normal;
    text-align: center;
    border: 1px solid #b8c7d9;
    min-width: 60px;
  }
</style>

<section>

        <p>Una variedad específica de binomios, de los cuales ya tenemos una forma
    fácil de resolverlos.</p>

    <!-- 1. BINOMIO AL CUADRADO -->
    <article class="tarjeta">
        <h3>Binomio al cuadrado</h3>
        <p class="regla"> El cuadrado de la suma (o resta) de dos términos es igual al cuadrado del primer término, más (o menos) el doble del primero por el segundo, más el cuadrado del segundo término.</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(a &plusmn; b)<sup>2</sup> = a<sup>2</sup> &plusmn; 2ab + b<sup>2</sup></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">(3x + 5)<sup>2</sup> = (3x)<sup>2</sup> + 2(3x)(5) + (5)<sup>2</sup> = 9x<sup>2</sup> + 30x + 25</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación por tabla</td>
                <td onclick="resaltarElemento(this)">
                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <th>&times;</th>
                            <th>3x</th>
                            <th>+5</th>
                        </tr>
                        <tr>
                            <th>3x</th>
                            <td>9x<sup>2</sup></td>
                            <td>15x</td>
                        </tr>
                        <tr>
                            <th>+5</th>
                            <td>15x</td>
                            <td>25</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </article>

    <!-- 2. BINOMIO AL CUBO -->
    <article class="tarjeta">
        <h3>Binomio al cubo</h3>
        <p class="regla"> El cubo de la suma (o resta) de dos términos es igual al cubo del primer término, más (o menos) el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, más (o menos) el cubo del segundo término.</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(a &plusmn; b)<sup>3</sup> = a<sup>3</sup> &plusmn; 3a<sup>2</sup>b + 3ab<sup>2</sup> &plusmn; b<sup>3</sup></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">(2x &minus; 3)<sup>3</sup> = (2x)<sup>3</sup> &minus; 3(2x)<sup>2</sup>(3) + 3(2x)(3)<sup>2</sup> &minus; (3)<sup>3</sup> = 8x<sup>3</sup> &minus; 36x<sup>2</sup> + 54x &minus; 27</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación por tabla</td>
                <td onclick="resaltarElemento(this)">
                    <p>(2x &minus; 3)<sup>2</sup> &times; (2x &minus; 3), donde (2x &minus; 3)<sup>2</sup> = 4x<sup>2</sup> &minus; 12x + 9</p>
                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <th>&times;</th>
                            <th>4x<sup>2</sup></th>
                            <th>&minus;12x</th>
                            <th>+9</th>
                        </tr>
                        <tr>
                            <th>2x</th>
                            <td>8x<sup>3</sup></td>
                            <td>&minus;24x<sup>2</sup></td>
                            <td>+18x</td>
                        </tr>
                        <tr>
                            <th>&minus;3</th>
                            <td>&minus;12x<sup>2</sup></td>
                            <td>+36x</td>
                            <td>&minus;27</td>
                        </tr>
                    </table>
                    <p>Se suman los términos semejantes: 8x<sup>3</sup> &minus; 36x<sup>2</sup> + 54x &minus; 27</p>
                </td>
            </tr>
        </table>
    </article>

    <!-- 3. BINOMIOS CON TÉRMINO COMÚN -->
    <article class="tarjeta">
        <h3>Binomios con término común</h3>
        <p class="regla"> El producto de dos binomios que comparten un término en común es igual al cuadrado del término común, más la suma algebraica de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes.</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">(x + 7)(x &minus; 4) = x<sup>2</sup> + (7 &minus; 4)x + (7)(&minus;4) = x<sup>2</sup> + 3x &minus; 28</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación por tabla</td>
                <td onclick="resaltarElemento(this)">
                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <th>&times;</th>
                            <th>x</th>
                            <th>+7</th>
                        </tr>
                        <tr>
                            <th>x</th>
                            <td>x<sup>2</sup></td>
                            <td>+7x</td>
                        </tr>
                        <tr>
                            <th>&minus;4</th>
                            <td>&minus;4x</td>
                            <td>&minus;28</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </article>

    <!-- 4. BINOMIOS CONJUGADOS -->
    <article class="tarjeta">
        <h3>Binomios conjugados</h3>
        <p class="regla">El producto de dos binomios conjugados da como resultado una diferencia de cuadrados: el cuadrado del primer término menos el cuadrado del segundo término.</p>

        <table class="tabla-datos">
            <tr>
                <th>Componentes</th>
                <th>Descripción</th>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Fórmula</td>
                <td onclick="resaltarElemento(this)">(a + b)(a &minus; b) = a<sup>2</sup> &minus; b<sup>2</sup></td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Ejemplo</td>
                <td onclick="resaltarElemento(this)">(5x + 2)(5x &minus; 2) = (5x)<sup>2</sup> &minus; (2)<sup>2</sup> = 25x<sup>2</sup> &minus; 4</td>
            </tr>
            <tr>
                <td onclick="resaltarElemento(this)">Comprobación por tabla</td>
                <td onclick="resaltarElemento(this)">
                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <th>&times;</th>
                            <th>5x</th>
                            <th>+2</th>
                        </tr>
                        <tr>
                            <th>5x</th>
                            <td>25x<sup>2</sup></td>
                            <td>+10x</td>
                        </tr>
                        <tr>
                            <th>&minus;2</th>
                            <td>&minus;10x</td>
                            <td>&minus;4</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </article>

</section>`;