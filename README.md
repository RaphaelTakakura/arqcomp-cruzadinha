DISCLAIMER: Esse projeto foi feito majoritariamente com inteligência artificial para fins didáticos (revisão de conteúdo técnico conceitual).

# Arq-Comp-Time Games

Aplicação web interativa de jogos educativos voltados para a disciplina de **Arquitetura Computacional** (baseada no material *SP3 MAT3 - Tópicos de Arquitetura Computacional* — SPTech), contendo dois modos de jogo: **Palavras Cruzadas** e **Connections**.

---

## Como Jogar

### 1. Palavras Cruzadas (`01. Palavras Cruzadas`)
* **Objetivo:** Preencher corretamente todas as **16 palavras** relacionadas à arquitetura de computadores na grade $19 \times 19$.
* **Controles:**
  * **Clique em uma casa ou pista:** Seleciona a palavra correspondente. Clicar novamente em uma casa de interseção alterna entre a direção **Horizontal (H)** e **Vertical (V)**.
  * **Digitação:** Insere a letra na casa ativa e avança automaticamente para a próxima posição livre da palavra.
  * **Setas do teclado (`↑`, `↓`, `←`, `→`):** Navega livremente pelas casas abertas do tabuleiro.
  * **`Backspace`:** Apaga a letra atual ou retorna para a casa anterior.
* **Verificação:**
  * Clique em **Conferir** para validar as palavras preenchidas (palavras corretas ficam destacadas em **verde neon** e incorretas em **vermelho**).
  * Clique em **Reiniciar** para limpar o tabuleiro e começar novamente.

---

### 2. Connections (`02. Connections`)
* **Objetivo:** Agrupar os **16 componentes** em **4 categorias temáticas** contendo **4 elementos cada**.
* **Regras:**
  * Selecione **4 cartões** que compartilham uma mesma relação conceitual em arquitetura computacional e clique em **Conferir**.
  * Se a combinação estiver correta, a categoria é revelada no topo do tabuleiro.
  * Se acertar **3 de 4** itens de um grupo, o sistema exibirá o alerta *"Falta apenas 1!"*.
  * Você possui **4 tentativas (erros)** antes que as respostas sejam reveladas automaticamente.
* **Controles Auxiliares:**
  * **Embaralhar:** Reorganiza aleatoriamente os cartões restantes na grade.
  * **Desmarcar:** Limpa a seleção atual.
  * **Reiniciar:** Restaura todas as tentativas e reinicia a partida.

---

## Lista de Palavras e Pistas (Palavras Cruzadas)

### Horizontais (Across)

| Nº | Palavra | Tamanho | Pista / Definição |
| :-: | :--- | :-: | :--- |
| **3** | `EEPROM` | 6 letras | Memória não volátil pequena que guarda dados que sobrevivem ao desligamento. |
| **4** | `MICROCONTROLADOR` | 16 letras | Chip com CPU, memória e entrada e saída juntos. |
| **7** | `ULA` | 3 letras | Componente responsável por realizar as operações lógicas e que envolvem cálculo. |
| **9** | `MEMORIADEMASSA` | 14 letras | Armazenamento não volátil, guarda dados que persistem ao desligar o PC. |
| **13** | `REGISTRADORES` | 13 letras | Pequenas e rápidas memórias que guardam dados temporários. |
| **14** | `CPU` | 3 letras | Parte responsável por buscar e executar instruções. |
| **16** | `RAM` | 3 letras | Memória volátil que guarda programas que estão rodando e dados que eles usam. |

### Verticais (Down)

| Nº | Palavra | Tamanho | Pista / Definição |
| :-: | :--- | :-: | :--- |
| **1** | `DMA` | 3 letras | Um controlador copia dados entre dispositivo e RAM sem a CPU mover cada byte. |
| **2** | `ADDRESSBUS` | 10 letras | Especifica o endereço exato onde os dados estão armazenados ou para onde precisam ser enviados. |
| **5** | `CACHE` | 5 letras | Memória pequena e rápida que contém dados usados recentemente pela CPU. |
| **6** | `ROM` | 3 letras | Memória não volátil de leitura que guarda o necessário para o equipamento funcionar. |
| **8** | `DUALCORE` | 8 letras | Nome dado a uma CPU com dois núcleos independentes. |
| **10** | `DATABUS` | 7 letras | Transfere dados entre componentes dentro de um computador. |
| **11** | `FLASH` | 5 letras | Utiliza a mesma tecnologia que o pendrive e guarda o programa do Arduíno. |
| **12** | `QUADCORE` | 8 letras | Nome dado a uma CPU com quatro núcleos independentes. |
| **15** | `UC` | 2 letras | Componente responsável por coordenar as operações dentro do processador. |

---

## Categorias do Connections (4 Grupos de 4 Palavras)

1. **Memórias & Armazenamento Não Voláteis:** `ROM`, `EEPROM`, `FLASH`, `MEMORIADEMASSA`
2. **Blocos Internos do Processador:** `UC`, `ULA`, `REGISTRADORES`, `CACHE`
3. **Barramentos, Acesso Direto e Memória de Trabalho:** `ADDRESSBUS`, `DATABUS`, `DMA`, `RAM`
4. **Unidades de Processamento e Topologias Multinúcleo:** `CPU`, `MICROCONTROLADOR`, `DUALCORE`, `QUADCORE`