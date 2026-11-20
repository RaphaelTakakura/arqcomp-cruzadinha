/**
     * =========================================================================
     * MÓDULO 0: DADOS DA CRUZADINHA (CROSSWORD_CONFIG)
     * Grade 19x19 — 16 palavras conectadas em um único grafo e interseções 100% válidas
     * =========================================================================
     */
    const CROSSWORD_CONFIG = {
      rows: 19,
      cols: 19,
      words: [
        {
          id: '1-down',
          number: 1,
          direction: 'down',
          answer: 'DMA',
          row: 6,
          col: 8,
          clue: 'Um controlador copia dados entre dispositivo e RAM sem a CPU mover cada byte.'
        },
        {
          id: '2-down',
          number: 2,
          direction: 'down',
          answer: 'ADDRESSBUS',
          row: 3,
          col: 14,
          clue: 'Especifica o endereço exato onde os dados estão armazenados ou para onde precisam ser enviados.'
        },
        {
          id: '3-across',
          number: 3,
          direction: 'across',
          answer: 'EEPROM',
          row: 6,
          col: 11,
          clue: 'Memória não volátil pequena que guarda dados que sobrevivem ao desligamento.'
        },
        {
          id: '4-across',
          number: 4,
          direction: 'across',
          answer: 'MICROCONTROLADOR',
          row: 4,
          col: 1,
          clue: 'Chip com CPU, memória e entrada e saída juntos.'
        },
        {
          id: '5-down',
          number: 5,
          direction: 'down',
          answer: 'CACHE',
          row: 4,
          col: 3,
          clue: 'Memória pequena e rápida que contém dados usados recentemente pela CPU.'
        },
        {
          id: '6-down',
          number: 6,
          direction: 'down',
          answer: 'ROM',
          row: 4,
          col: 16,
          clue: 'Memória não volátil de leitura que guarda o necessário para o equipamento funcionar.'
        },
        {
          id: '7-across',
          number: 7,
          direction: 'across',
          answer: 'ULA',
          row: 5,
          col: 1,
          clue: 'Componente responsável por realizar as operações lógicas e que envolvem cálculo.'
        },
        {
          id: '8-down',
          number: 8,
          direction: 'down',
          answer: 'DUALCORE',
          row: 8,
          col: 9,
          clue: 'Nome dado a uma CPU com dois núcleos independentes.'
        },
        {
          id: '9-across',
          number: 9,
          direction: 'across',
          answer: 'MEMORIADEMASSA',
          row: 8,
          col: 2,
          clue: 'Armazenamento não volátil, guarda dados que persistem ao desligar o PC.'
        },
        {
          id: '10-down',
          number: 10,
          direction: 'down',
          answer: 'DATABUS',
          row: 7,
          col: 12,
          clue: 'Transfere dados entre componentes dentro de um computador.'
        },
        {
          id: '11-down',
          number: 11,
          direction: 'down',
          answer: 'FLASH',
          row: 11,
          col: 7,
          clue: 'Utiliza a mesma tecnologia que o pendrive e guarda o programa do Arduíno.'
        },
        {
          id: '12-down',
          number: 12,
          direction: 'down',
          answer: 'QUADCORE',
          row: 7,
          col: 0,
          clue: 'Nome dado a uma CPU com quatro núcleos independentes.'
        },
        {
          id: '13-across',
          number: 13,
          direction: 'across',
          answer: 'REGISTRADORES',
          row: 13,
          col: 0,
          clue: 'Pequenas e rápidas memórias que guardam dados temporários.'
        },
        {
          id: '14-across',
          number: 14,
          direction: 'across',
          answer: 'CPU',
          row: 11,
          col: 0,
          clue: 'Parte responsável por buscar e executar instruções.'
        },
        {
          id: '15-down',
          number: 15,
          direction: 'down',
          answer: 'UC',
          row: 3,
          col: 6,
          clue: 'Componente responsável por coordenar as operações dentro do processador.'
        },
        {
          id: '16-across',
          number: 16,
          direction: 'across',
          answer: 'RAM',
          row: 14,
          col: 9,
          clue: 'Memória volátil que guarda programas que estão rodando e dados que eles usam.'
        }
      ]
    };

    /**
     * =========================================================================
     * MÓDULO 1: CONFIGURAÇÃO DO CONNECTIONS (CONNECTIONS_CONFIG)
     * 5 grupos de tamanhos variáveis (3, 2, 4, 4 e 3 itens) para máxima precisão conceitual
     * =========================================================================
     */
    const CONNECTIONS_CONFIG = {
      maxMistakes: 4,
      categories: [
        {
          id: 'cat-nonvolatile-memories',
          title: 'MEMÓRIAS & ARMAZENAMENTO NÃO VOLÁTEIS',
          description: 'Mantêm o conteúdo gravado mesmo sem energia elétrica (firmware, programas e arquivos)',
          items: ['ROM', 'EEPROM', 'FLASH', 'MEMORIADEMASSA'],
          accentColor: '#a855f7',
          bgStyle: 'background-color: rgba(168, 85, 247, 0.16); border-color: #a855f7; color: #e9d5ff;',
          badgeStyle: 'background-color: #a855f7; color: #ffffff;'
        },
        {
          id: 'cat-cpu-internals',
          title: 'BLOCOS INTERNOS DO PROCESSADOR',
          description: 'Componentes que ficam dentro do chip da CPU para controlar, calcular e acelerar o acesso',
          items: ['UC', 'ULA', 'REGISTRADORES', 'CACHE'],
          accentColor: '#00ff66',
          bgStyle: 'background-color: rgba(0, 255, 102, 0.14); border-color: #00ff66; color: #00ff66;',
          badgeStyle: 'background-color: #00ff66; color: #050507;'
        },
        {
          id: 'cat-data-transfer-ram',
          title: 'BARRAMENTOS, ACESSO DIRETO E MEMÓRIA DE TRABALHO',
          description: 'Vias e mecanismos que endereçam, transportam e transferem dados diretamente com a memória volátil',
          items: ['ADDRESSBUS', 'DATABUS', 'DMA', 'RAM'],
          accentColor: '#f59e0b',
          bgStyle: 'background-color: rgba(245, 158, 11, 0.15); border-color: #f59e0b; color: #fef3c7;',
          badgeStyle: 'background-color: #f59e0b; color: #050507;'
        },
        {
          id: 'cat-processors-chips',
          title: 'UNIDADES DE PROCESSAMENTO E TOPOLOGIAS MULTINÚCLEO',
          description: 'Arquiteturas de processamento central, sistemas embarcados em chip único e CPUs com múltiplos núcleos',
          items: ['CPU', 'MICROCONTROLADOR', 'DUALCORE', 'QUADCORE'],
          accentColor: '#22d3ee',
          bgStyle: 'background-color: rgba(34, 211, 238, 0.14); border-color: #22d3ee; color: #cffafe;',
          badgeStyle: 'background-color: #22d3ee; color: #050507;'
        }
      ]
    };

    /**
     * =========================================================================
     * MÓDULO 2: GERENCIADOR DE ABAS (TabManager)
     * Controla a alternância entre Palavras Cruzadas e Connections
     * =========================================================================
     */
    class TabManager {
      constructor() {
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.panels = {
          crossword: document.getElementById('panel-crossword'),
          connections: document.getElementById('panel-connections')
        };
        this.bindEvents();
      }

      bindEvents() {
        this.tabButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            this.switchTab(targetTab);
          });
        });
      }

      switchTab(tabName) {
        this.tabButtons.forEach(btn => {
          const isActive = btn.dataset.tab === tabName;
          btn.classList.toggle('active', isActive);
        });

        Object.entries(this.panels).forEach(([key, panel]) => {
          if (panel) {
            panel.classList.toggle('hidden', key !== tabName);
          }
        });
      }
    }

    /**
     * =========================================================================
     * MÓDULO 3: MOTOR DA PALAVRA CRUZADA (CrosswordGame)
     * Gerencia grade 19x19, navegação, dicas, conferência, acertos e reinício
     * =========================================================================
     */
    class CrosswordGame {
      constructor(config, domIds = {}) {
        this.rows = config.rows;
        this.cols = config.cols;
        this.words = config.words;
        this.domIds = {
          board: domIds.board || 'crossword-board',
          across: domIds.across || 'clues-across',
          down: domIds.down || 'clues-down',
          score: domIds.score || 'score-counter',
          badge: domIds.badge || 'active-clue-badge',
          preview: domIds.preview || 'active-clue-preview',
          banner: domIds.banner || 'feedback-banner',
          bannerMsg: domIds.bannerMsg || 'feedback-message',
          btnCheck: domIds.btnCheck || 'btn-check',
          btnReset: domIds.btnReset || 'btn-reset',
          btnCloseFeedback: domIds.btnCloseFeedback || 'close-feedback'
        };

        this.grid = [];
        this.activeWordId = this.words[0].id;
        this.focusedCell = { row: this.words[0].row, col: this.words[0].col };

        this.boardEl = document.getElementById(this.domIds.board);
        this.acrossListEl = document.getElementById(this.domIds.across);
        this.downListEl = document.getElementById(this.domIds.down);
        this.scoreEl = document.getElementById(this.domIds.score);
        this.badgeEl = document.getElementById(this.domIds.badge);
        this.previewEl = document.getElementById(this.domIds.preview);
        this.bannerEl = document.getElementById(this.domIds.banner);
        this.bannerMsgEl = document.getElementById(this.domIds.bannerMsg);

        this.init();
      }

      init() {
        this.buildGridMatrix();
        this.validateCrosswordIntegrity();
        this.renderBoard();
        this.renderClues();
        this.bindControlButtons();
        this.selectWord(this.words[0].id, false);
      }

      buildGridMatrix() {
        this.grid = Array.from({ length: this.rows }, (_, r) =>
          Array.from({ length: this.cols }, (_, c) => ({
            row: r,
            col: c,
            isBlocked: true,
            solution: '',
            numbers: [],
            wordIds: []
          }))
        );

        this.words.forEach(word => {
          const letters = word.answer.toUpperCase().split('');
          letters.forEach((char, index) => {
            const r = word.direction === 'across' ? word.row : word.row + index;
            const c = word.direction === 'across' ? word.col + index : word.col;

            if (r < this.rows && c < this.cols) {
              const cell = this.grid[r][c];
              cell.isBlocked = false;
              if (cell.solution && cell.solution !== char) {
                console.error(`Conflito na célula (${r},${c}): '${cell.solution}' vs '${char}'`);
              }
              cell.solution = char;
              if (!cell.wordIds.includes(word.id)) {
                cell.wordIds.push(word.id);
              }
              if (index === 0 && !cell.numbers.includes(word.number)) {
                cell.numbers.push(word.number);
              }
            }
          });
        });
      }

      validateCrosswordIntegrity() {
        const adj = new Map();
        this.words.forEach(w => adj.set(w.id, new Set()));

        for (let r = 0; r < this.rows; r++) {
          for (let c = 0; c < this.cols; c++) {
            const ids = this.grid[r][c].wordIds;
            if (ids.length > 1) {
              for (let i = 0; i < ids.length; i++) {
                for (let j = i + 1; j < ids.length; j++) {
                  adj.get(ids[i]).add(ids[j]);
                  adj.get(ids[j]).add(ids[i]);
                }
              }
            }
          }
        }

        const visited = new Set([this.words[0].id]);
        const queue = [this.words[0].id];
        while (queue.length > 0) {
          const curr = queue.shift();
          adj.get(curr).forEach(neighbor => {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          });
        }

        if (visited.size !== this.words.length) {
          console.warn(`Cruzadinha desconexa: ${visited.size}/${this.words.length} palavras conectadas.`);
        }
      }

      renderBoard() {
        this.boardEl.innerHTML = '';

        for (let r = 0; r < this.rows; r++) {
          for (let c = 0; c < this.cols; c++) {
            const cellData = this.grid[r][c];
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cw-cell';
            cellDiv.dataset.row = r;
            cellDiv.dataset.col = c;

            if (cellData.isBlocked) {
              cellDiv.classList.add('blocked');
            } else {
              if (cellData.numbers.length > 0) {
                const numSpan = document.createElement('span');
                numSpan.className = 'cw-number';
                numSpan.textContent = cellData.numbers.join('/');
                cellDiv.appendChild(numSpan);
              }

              const input = document.createElement('input');
              input.type = 'text';
              input.maxLength = 1;
              input.autocomplete = 'off';
              input.spellcheck = false;
              input.className = 'cw-input';
              input.dataset.row = r;
              input.dataset.col = c;
              input.setAttribute('aria-label', `Linha ${r + 1}, Coluna ${c + 1}`);

              input.addEventListener('click', () => this.handleCellClick(r, c));
              input.addEventListener('focus', () => this.handleCellFocus(r, c));
              input.addEventListener('input', (e) => this.handleInput(e, r, c));
              input.addEventListener('keydown', (e) => this.handleKeyDown(e, r, c));

              cellDiv.appendChild(input);
            }

            this.boardEl.appendChild(cellDiv);
          }
        }
      }

      renderClues() {
        this.acrossListEl.innerHTML = '';
        this.downListEl.innerHTML = '';

        const sortedWords = [...this.words].sort((a, b) => a.number - b.number);

        sortedWords.forEach(word => {
          const li = document.createElement('li');
          li.className = 'clue-item rounded-lg px-2.5 py-1.5 cursor-pointer text-xs sm:text-[13px] flex items-start gap-2';
          li.dataset.wordId = word.id;

          const numBadge = document.createElement('span');
          numBadge.className = 'font-mono-tech font-bold text-purple-400 shrink-0 min-w-[24px]';
          numBadge.textContent = `${word.number}.`;

          const textSpan = document.createElement('span');
          textSpan.className = 'clue-text text-zinc-200 leading-snug';
          textSpan.textContent = `${word.clue} (${word.answer.length})`;

          li.appendChild(numBadge);
          li.appendChild(textSpan);

          li.addEventListener('click', () => this.selectWord(word.id, true));

          if (word.direction === 'across') {
            this.acrossListEl.appendChild(li);
          } else {
            this.downListEl.appendChild(li);
          }
        });
      }

      getInputEl(r, c) {
        return this.boardEl.querySelector(`.cw-input[data-row="${r}"][data-col="${c}"]`);
      }

      getCellEl(r, c) {
        return this.boardEl.querySelector(`.cw-cell[data-row="${r}"][data-col="${c}"]`);
      }

      getWordCells(word) {
        const coords = [];
        for (let i = 0; i < word.answer.length; i++) {
          const r = word.direction === 'across' ? word.row : word.row + i;
          const c = word.direction === 'across' ? word.col + i : word.col;
          coords.push({ row: r, col: c });
        }
        return coords;
      }

      handleCellFocus(r, c) {
        if (this.focusedCell.row === r && this.focusedCell.col === c) return;
        const cellData = this.grid[r][c];
        if (!cellData || cellData.isBlocked) return;

        this.focusedCell = { row: r, col: c };
        if (!cellData.wordIds.includes(this.activeWordId)) {
          this.activeWordId = cellData.wordIds[0];
        }
        this.updateHighlights();
      }

      handleCellClick(r, c) {
        const cellData = this.grid[r][c];
        if (!cellData || cellData.isBlocked) return;

        const isSameCell = this.focusedCell.row === r && this.focusedCell.col === c;
        this.focusedCell = { row: r, col: c };

        if (isSameCell && cellData.wordIds.length > 1) {
          const currentIdx = cellData.wordIds.indexOf(this.activeWordId);
          const nextIdx = (currentIdx + 1) % cellData.wordIds.length;
          this.activeWordId = cellData.wordIds[nextIdx];
        } else if (!cellData.wordIds.includes(this.activeWordId)) {
          this.activeWordId = cellData.wordIds[0];
        }

        this.updateHighlights();
      }

      selectWord(wordId, shouldFocusInput = true) {
        const word = this.words.find(w => w.id === wordId);
        if (!word) return;

        this.activeWordId = word.id;
        const coords = this.getWordCells(word);
        const firstEmpty = coords.find(pt => {
          const inp = this.getInputEl(pt.row, pt.col);
          return !inp || inp.value === '';
        }) || coords[0];

        this.focusedCell = { row: firstEmpty.row, col: firstEmpty.col };
        this.updateHighlights();

        if (shouldFocusInput) {
          const input = this.getInputEl(firstEmpty.row, firstEmpty.col);
          if (input) input.focus();
        }
      }

      updateHighlights() {
        this.boardEl.querySelectorAll('.cw-cell').forEach(cell => {
          cell.classList.remove('word-highlight', 'active-cell');
        });
        [this.acrossListEl, this.downListEl].forEach(listEl => {
          listEl.querySelectorAll('.clue-item').forEach(item => {
            item.classList.remove('active-clue');
          });
        });

        const activeWord = this.words.find(w => w.id === this.activeWordId);
        if (!activeWord) return;

        this.getWordCells(activeWord).forEach(({ row, col }) => {
          const cellEl = this.getCellEl(row, col);
          if (cellEl) cellEl.classList.add('word-highlight');
        });

        const focusedEl = this.getCellEl(this.focusedCell.row, this.focusedCell.col);
        if (focusedEl) focusedEl.classList.add('active-cell');

        const activeClueEl =
          this.acrossListEl.querySelector(`.clue-item[data-word-id="${activeWord.id}"]`) ||
          this.downListEl.querySelector(`.clue-item[data-word-id="${activeWord.id}"]`);
        if (activeClueEl) {
          activeClueEl.classList.add('active-clue');
          activeClueEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }

        const dirLabel = activeWord.direction === 'across' ? 'H' : 'V';
        this.badgeEl.textContent = `[${activeWord.number}${dirLabel}]`;
        this.previewEl.textContent = activeWord.clue;
      }

      handleInput(e, r, c) {
        const input = e.target;
        const rawVal = input.value.replace(/[^a-zA-ZÀ-ÿ]/g, '').toUpperCase();
        const cleanChar = rawVal ? rawVal.normalize('NFD').replace(/[̀-ͯ]/g, '').slice(-1) : '';
        input.value = cleanChar;

        const cellEl = this.getCellEl(r, c);
        if (cellEl) cellEl.classList.remove('word-correct', 'word-wrong');

        if (cleanChar) {
          this.moveWithinActiveWord(r, c, 1);
        }
      }

      handleKeyDown(e, r, c) {
        if (e.key === 'Backspace') {
          const input = this.getInputEl(r, c);
          if (input && input.value === '') {
            e.preventDefault();
            this.moveWithinActiveWord(r, c, -1, true);
          } else if (input) {
            const cellEl = this.getCellEl(r, c);
            if (cellEl) cellEl.classList.remove('word-correct', 'word-wrong');
          }
          return;
        }

        const arrowOffsets = {
          ArrowRight: { dr: 0, dc: 1 },
          ArrowLeft: { dr: 0, dc: -1 },
          ArrowDown: { dr: 1, dc: 0 },
          ArrowUp: { dr: -1, dc: 0 }
        };

        if (arrowOffsets[e.key]) {
          e.preventDefault();
          const { dr, dc } = arrowOffsets[e.key];
          let nr = r + dr;
          let nc = c + dc;

          while (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
            if (!this.grid[nr][nc].isBlocked) {
              this.focusedCell = { row: nr, col: nc };
              const targetCell = this.grid[nr][nc];
              if (!targetCell.wordIds.includes(this.activeWordId)) {
                this.activeWordId = targetCell.wordIds[0];
              }
              this.updateHighlights();
              const nextInput = this.getInputEl(nr, nc);
              if (nextInput) nextInput.focus();
              break;
            }
            nr += dr;
            nc += dc;
          }
        }
      }

      moveWithinActiveWord(r, c, step, clearTarget = false) {
        const activeWord = this.words.find(w => w.id === this.activeWordId);
        if (!activeWord) return;

        const coords = this.getWordCells(activeWord);
        const currentIndex = coords.findIndex(pt => pt.row === r && pt.col === c);
        let nextIndex = currentIndex + step;

        if (step > 0) {
          while (nextIndex < coords.length) {
            const candidate = coords[nextIndex];
            const candidateInput = this.getInputEl(candidate.row, candidate.col);
            if (!candidateInput || candidateInput.value === '') {
              break;
            }
            nextIndex += step;
          }
        }

        if (nextIndex >= 0 && nextIndex < coords.length) {
          const target = coords[nextIndex];
          this.focusedCell = { row: target.row, col: target.col };
          this.updateHighlights();
          const targetInput = this.getInputEl(target.row, target.col);
          if (targetInput) {
            targetInput.focus();
            if (clearTarget) targetInput.value = '';
          }
        }
      }

      bindControlButtons() {
        document.getElementById(this.domIds.btnCheck).addEventListener('click', () => this.checkAnswers());
        document.getElementById(this.domIds.btnReset).addEventListener('click', () => this.resetBoard());
        document.getElementById(this.domIds.btnCloseFeedback).addEventListener('click', () => {
          this.bannerEl.classList.add('hidden');
        });
      }

      checkAnswers() {
        let correctWordsCount = 0;
        let attemptedWordsCount = 0;

        this.boardEl.querySelectorAll('.cw-cell').forEach(cell => {
          cell.classList.remove('word-correct', 'word-wrong');
        });
        [this.acrossListEl, this.downListEl].forEach(listEl => {
          listEl.querySelectorAll('.clue-item').forEach(item => {
            item.classList.remove('clue-solved');
          });
        });

        const correctCells = new Set();
        const wrongCells = new Set();

        this.words.forEach(word => {
          const coords = this.getWordCells(word);
          let userWord = '';
          let hasAnyLetter = false;

          coords.forEach(({ row, col }) => {
            const val = (this.getInputEl(row, col)?.value || '').toUpperCase();
            if (val) hasAnyLetter = true;
            userWord += val;
          });

          if (!hasAnyLetter) return;
          attemptedWordsCount++;

          if (userWord === word.answer) {
            correctWordsCount++;
            coords.forEach(({ row, col }) => correctCells.add(`${row},${col}`));
            const clueEl = this.acrossListEl.querySelector(`.clue-item[data-word-id="${word.id}"]`) || this.downListEl.querySelector(`.clue-item[data-word-id="${word.id}"]`);
            if (clueEl) clueEl.classList.add('clue-solved');
          } else {
            coords.forEach(({ row, col }) => wrongCells.add(`${row},${col}`));
          }
        });

        wrongCells.forEach(key => {
          const [r, c] = key.split(',').map(Number);
          const cellEl = this.getCellEl(r, c);
          if (cellEl) cellEl.classList.add('word-wrong');
        });

        correctCells.forEach(key => {
          const [r, c] = key.split(',').map(Number);
          const cellEl = this.getCellEl(r, c);
          if (cellEl) {
            cellEl.classList.remove('word-wrong');
            cellEl.classList.add('word-correct');
          }
        });

        this.scoreEl.textContent = `${correctWordsCount} / ${this.words.length}`;
        this.showFeedback(correctWordsCount, attemptedWordsCount);
      }

      showFeedback(correctCount, attemptedCount) {
        this.bannerEl.classList.remove('hidden');

        if (correctCount === this.words.length) {
          this.bannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-[#00ff66] bg-[#00ff66]/15 text-[#00ff66] flex items-center justify-between';
          this.bannerMsgEl.textContent = `PARABÉNS: Todas as ${this.words.length} palavras de Arquitetura Computacional foram resolvidas!`;
        } else if (attemptedCount === 0) {
          this.bannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-purple-500 bg-purple-950/50 text-purple-200 flex items-center justify-between';
          this.bannerMsgEl.textContent = 'Tabuleiro vazio! Digite nas casas antes de clicar em Conferir.';
        } else {
          const wrongCount = attemptedCount - correctCount;
          this.bannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-purple-500 bg-purple-950/50 text-purple-200 flex items-center justify-between';
          this.bannerMsgEl.textContent = `STATUS DA VERIFICAÇÃO: ${correctCount} correta(s) em verde neon • ${wrongCount} incorreta(s) ou incompleta(s) em vermelho.`;
        }
      }

      resetBoard() {
        this.boardEl.querySelectorAll('.cw-input').forEach(input => {
          input.value = '';
        });

        this.boardEl.querySelectorAll('.cw-cell').forEach(cell => {
          cell.classList.remove('word-correct', 'word-wrong');
        });

        [this.acrossListEl, this.downListEl].forEach(listEl => {
          listEl.querySelectorAll('.clue-item').forEach(item => {
            item.classList.remove('clue-solved');
          });
        });

        this.scoreEl.textContent = `0 / ${this.words.length}`;
        this.bannerEl.classList.add('hidden');
        this.selectWord(this.words[0].id, true);
      }
    }

    /**
     * =========================================================================
     * MÓDULO 4: JOGO CONNECTIONS (ConnectionsGame)
     * Agrupamento dos 16 componentes em conexões de tamanhos variáveis (2 a 4 itens)
     * =========================================================================
     */
    class ConnectionsGame {
      constructor(config) {
        this.config = config;
        this.maxMistakes = config.maxMistakes;
        this.categories = config.categories;
        this.maxGroupSize = Math.max(...this.categories.map(cat => cat.items.length));

        this.remainingItems = [];
        this.selectedItems = new Set();
        this.solvedCategories = [];
        this.mistakesLeft = this.maxMistakes;
        this.isGameOver = false;

        this.gridEl = document.getElementById('conn-grid');
        this.solvedContainerEl = document.getElementById('conn-solved-container');
        this.toastBannerEl = document.getElementById('conn-toast-banner');
        this.toastMsgEl = document.getElementById('conn-toast-message');
        this.attemptsTextEl = document.getElementById('conn-attempts-text');
        this.dotsContainerEl = document.getElementById('conn-mistakes-dots');
        this.selectedCountEl = document.getElementById('conn-selected-count');

        this.btnShuffle = document.getElementById('btn-conn-shuffle');
        this.btnDeselect = document.getElementById('btn-conn-deselect');
        this.btnSubmit = document.getElementById('btn-conn-submit');
        this.btnReset = document.getElementById('btn-conn-reset');

        this.init();
      }

      init() {
        this.bindControls();
        this.resetGame();
      }

      bindControls() {
        this.btnShuffle.addEventListener('click', () => this.shuffleRemaining());
        this.btnDeselect.addEventListener('click', () => this.deselectAll());
        this.btnSubmit.addEventListener('click', () => this.submitGuess());
        this.btnReset.addEventListener('click', () => this.resetGame());
      }

      resetGame() {
        this.solvedCategories = [];
        this.selectedItems.clear();
        this.mistakesLeft = this.maxMistakes;
        this.isGameOver = false;

        const allWords = this.categories.flatMap(cat => cat.items);
        this.remainingItems = this.shuffleArray([...allWords]);

        this.solvedContainerEl.innerHTML = '';
        this.hideToast();
        this.updateMistakesUI();
        this.renderGrid();
        this.updateButtonsUI();
      }

      shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      shuffleRemaining() {
        if (this.isGameOver) return;
        this.remainingItems = this.shuffleArray([...this.remainingItems]);
        this.renderGrid();
      }

      deselectAll() {
        this.selectedItems.clear();
        this.renderGrid();
        this.updateButtonsUI();
      }

      toggleSelect(item) {
        if (this.isGameOver) return;

        if (this.selectedItems.has(item)) {
          this.selectedItems.delete(item);
        } else {
          if (this.selectedItems.size >= this.maxGroupSize) return;
          this.selectedItems.add(item);
        }

        this.renderGrid();
        this.updateButtonsUI();
      }

      renderGrid() {
        this.gridEl.innerHTML = '';
        this.remainingItems.forEach(item => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'conn-tile rounded-xl py-4 px-2 text-center cursor-pointer flex items-center justify-center min-h-[64px]';
          if (this.selectedItems.has(item)) {
            btn.classList.add('selected');
          }
          btn.textContent = item;
          btn.dataset.word = item;
          btn.addEventListener('click', () => this.toggleSelect(item));
          this.gridEl.appendChild(btn);
        });
      }

      updateButtonsUI() {
        const count = this.selectedItems.size;
        this.selectedCountEl.textContent = count;
        this.btnDeselect.disabled = count === 0 || this.isGameOver;
        this.btnSubmit.disabled = count !== this.maxGroupSize || this.isGameOver;
        this.btnShuffle.disabled = this.isGameOver || this.remainingItems.length === 0;
      }

      updateMistakesUI() {
        this.attemptsTextEl.textContent = `${this.mistakesLeft} / ${this.maxMistakes}`;
        const dots = this.dotsContainerEl.querySelectorAll('.mistake-dot');
        dots.forEach((dot, index) => {
          if (index < this.mistakesLeft) {
            dot.classList.add('active');
            dot.classList.remove('spent');
          } else {
            dot.classList.remove('active');
            dot.classList.add('spent');
          }
        });
      }

      showToast(message, type = 'info') {
        this.toastBannerEl.classList.remove('hidden');
        this.toastMsgEl.textContent = message;

        if (type === 'success') {
          this.toastBannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-[#00ff66] bg-[#00ff66]/15 text-[#00ff66] text-center';
        } else if (type === 'warning') {
          this.toastBannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-amber-400 bg-amber-950/60 text-amber-200 text-center';
        } else {
          this.toastBannerEl.className = 'rounded-xl px-4 py-3 font-mono-tech text-xs sm:text-sm border border-[#ff2a6d] bg-[#ff2a6d]/15 text-[#ff85ad] text-center';
        }
      }

      hideToast() {
        this.toastBannerEl.classList.add('hidden');
      }

      appendSolvedBanner(category) {
        const banner = document.createElement('div');
        banner.className = 'conn-solved-banner rounded-xl border-2 p-4 text-center shadow-lg';
        banner.setAttribute('style', category.bgStyle);

        const titleEl = document.createElement('div');
        titleEl.className = 'font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-wider mb-1';
        titleEl.textContent = category.title;

        const descEl = document.createElement('div');
        descEl.className = 'text-xs opacity-90 mb-2';
        descEl.textContent = category.description;

        const itemsRow = document.createElement('div');
        itemsRow.className = 'flex flex-wrap justify-center gap-2';
        category.items.forEach(word => {
          const chip = document.createElement('span');
          chip.className = 'font-mono-tech text-xs font-bold px-2.5 py-1 rounded-md';
          chip.setAttribute('style', category.badgeStyle);
          chip.textContent = word;
          itemsRow.appendChild(chip);
        });

        banner.appendChild(titleEl);
        banner.appendChild(descEl);
        banner.appendChild(itemsRow);
        this.solvedContainerEl.appendChild(banner);
      }

      submitGuess() {
        if (this.selectedItems.size !== this.maxGroupSize || this.isGameOver) return;

        const guess = Array.from(this.selectedItems);
        let matchedCategory = null;
        let isAlmostMatch = false;

        for (const cat of this.categories) {
          if (this.solvedCategories.includes(cat.id)) continue;
          const overlap = guess.filter(word => cat.items.includes(word)).length;

          if (guess.length === cat.items.length && overlap === cat.items.length) {
            matchedCategory = cat;
            break;
          }

          if (
            (overlap === guess.length && cat.items.length - overlap === 1) ||
            (guess.length === cat.items.length && overlap === cat.items.length - 1)
          ) {
            isAlmostMatch = true;
          }
        }

        if (matchedCategory) {
          this.solvedCategories.push(matchedCategory.id);
          this.remainingItems = this.remainingItems.filter(w => !matchedCategory.items.includes(w));
          this.selectedItems.clear();
          this.appendSolvedBanner(matchedCategory);
          this.renderGrid();
          this.updateButtonsUI();

          if (this.solvedCategories.length === this.categories.length) {
            this.isGameOver = true;
            this.updateButtonsUI();
            this.showToast('CONEXÃO COMPLETA: Você agrupou todos os 16 componentes nas 4 categorias!', 'success');
          } else {
            this.showToast(`Grupo encontrado (${matchedCategory.items.length} itens): ${matchedCategory.title}`, 'success');
          }
        } else {
          this.mistakesLeft = Math.max(0, this.mistakesLeft - 1);
          this.updateMistakesUI();

          document.querySelectorAll('.conn-tile.selected').forEach(tile => {
            tile.classList.add('shake-error');
            setTimeout(() => tile.classList.remove('shake-error'), 450);
          });

          if (this.mistakesLeft === 0) {
            this.isGameOver = true;
            this.selectedItems.clear();
            this.remainingItems = [];
            this.renderGrid();
            this.updateButtonsUI();

            this.categories.forEach(cat => {
              if (!this.solvedCategories.includes(cat.id)) {
                this.solvedCategories.push(cat.id);
                this.appendSolvedBanner(cat);
              }
            });

            this.showToast('Tentativas esgotadas! Confira os 4 grupos arquiteturais revelados acima.', 'error');
          } else if (isAlmostMatch) {
            this.showToast('Falta apenas 1! Você acertou 3 dos 4 componentes de uma conexão.', 'warning');
          } else {
            this.showToast('Combinação incorreta. Tente selecionar outro grupo de 4 componentes!', 'error');
          }
        }
      }
    }

    /**
     * =========================================================================
     * INICIALIZAÇÃO DA APLICAÇÃO
     * =========================================================================
     */
    window.addEventListener('DOMContentLoaded', () => {
      window.tabManager = new TabManager();
      window.crosswordGame = new CrosswordGame(CROSSWORD_CONFIG);
      window.connectionsGame = new ConnectionsGame(CONNECTIONS_CONFIG);
    });
