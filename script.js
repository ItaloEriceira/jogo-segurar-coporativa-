 const questions = [
            {
                question: "Em que ano a Segurar Corporativa foi fundada?",
                options: ["2010", "2015", "2018", "2020"],
                correct: 1,
                category: "História"
            },
            {
                question: "Qual é a principal missão da Segurar Corporativa?",
                options: [
                    "Maximizar lucros a qualquer custo",
                    "Proteger patrimônios e pessoas com soluções inovadoras em seguros",
                    "Ser a maior seguradora do país",
                    "Oferecer apenas seguros automotivos"
                ],
                correct: 1,
                category: "Missão"
            },
            {
                question: "Qual dos seguintes NÃO é um valor da Segurar Corporativa?",
                options: ["Transparência", "Inovação", "Competição Desleal", "Compromisso com o Cliente"],
                correct: 2,
                category: "Valores"
            },
            {
                question: "Qual é a visão da Segurar Corporativa para 2030?",
                options: [
                    "Ser líder apenas no mercado nacional",
                    "Ser reconhecida como a seguradora mais inovadora e confiável do mercado",
                    "Focar apenas em seguros empresariais",
                    "Expandir apenas para países vizinhos"
                ],
                correct: 1,
                category: "Visão"
            },
            {
                question: "Em quantos estados do Brasil a Segurar Corporativa atua?",
                options: ["15 estados", "20 estados", "Todos os 26 estados + DF", "Apenas região Sudeste"],
                correct: 2,
                category: "Área de Atuação"
            },
            {
                question: "Qual setor NÃO faz parte do portfólio da Segurar Corporativa?",
                options: ["Seguros Automotivos", "Seguros Residenciais", "Seguros de Vida", "Seguros Espaciais"],
                correct: 3,
                category: "Setores"
            },
            {
                question: "Quantos colaboradores a Segurar Corporativa possui atualmente?",
                options: ["Mais de 500", "Mais de 1.000", "Mais de 2.500", "Mais de 5.000"],
                correct: 2,
                category: "História"
            },
            {
                question: "Qual é o diferencial competitivo da Segurar Corporativa?",
                options: [
                    "Preços mais baixos do mercado",
                    "Atendimento 24/7 e tecnologia de ponta",
                    "Apenas produtos tradicionais",
                    "Foco exclusivo em grandes empresas"
                ],
                correct: 1,
                category: "Valores"
            },
            {
                question: "A Segurar Corporativa oferece seguros para qual tipo de cliente?",
                options: [
                    "Apenas pessoas físicas",
                    "Apenas empresas",
                    "Pessoas físicas e jurídicas",
                    "Apenas multinacionais"
                ],
                correct: 2,
                category: "Área de Atuação"
            },
            {
                question: "Qual iniciativa sustentável a Segurar Corporativa implementou recentemente?",
                options: [
                    "Programa de neutralização de carbono",
                    "Uso exclusivo de papel",
                    "Eliminação de tecnologia digital",
                    "Foco apenas em lucros"
                ],
                correct: 0,
                category: "Valores"
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let selectedAnswer = null;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let gameMode = 'classic';
        let difficulty = 'easy';
        let timeLeft = 0;
        let timer = null;
        let currentGame = '';

        // Dados dos jogos
        const memoryCards = [
            { id: 1, content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=100&h=100&fit=crop', pair: 2, type: 'image' }, // RH
            { id: 2, content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=100&h=100&fit=crop', pair: 1, type: 'image' },
            { id: 3, content: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop', pair: 4, type: 'image' }, // Financeiro
            { id: 4, content: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop', pair: 3, type: 'image' },
            { id: 5, content: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop', pair: 6, type: 'image' }, // Jurídico
            { id: 6, content: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop', pair: 5, type: 'image' },
            { id: 7, content: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop', pair: 8, type: 'image' }, // TI
            { id: 8, content: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop', pair: 7, type: 'image' },
            { id: 9, content: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop', pair: 10, type: 'image' }, // Marketing
            { id: 10, content: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop', pair: 9, type: 'image' },
            { id: 11, content: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop', pair: 12, type: 'image' }, // Operações
            { id: 12, content: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop', pair: 11, type: 'image' },
            { id: 13, content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop', pair: 14, type: 'image' }, // Vendas
            { id: 14, content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop', pair: 13, type: 'image' },
            { id: 15, content: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop', pair: 16, type: 'image' }, // Administrativo
            { id: 16, content: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop', pair: 15, type: 'image' }
        ];

        const wordSearchWords = [
            'SEGURAR', 'CORPORATIVA', 'SEGURO', 'CONFIANCA', 
            'INOVACAO', 'QUALIDADE', 'TRANSPARENCIA', 'COMPROMISSO'
        ];

        const timelineEvents = [
            { year: 2015, event: 'Fundação da Segurar Corporativa', order: 1 },
            { year: 2016, event: 'Primeiro milhão em prêmios', order: 2 },
            { year: 2017, event: 'Expansão para 10 estados', order: 3 },
            { year: 2018, event: 'Lançamento do seguro residencial', order: 4 },
            { year: 2019, event: 'Certificação ISO 9001', order: 5 },
            { year: 2020, event: 'Digitalização completa dos processos', order: 6 },
            { year: 2022, event: 'Expansão nacional - todos os estados', order: 7 },
            { year: 2024, event: 'Programa de sustentabilidade', order: 8 }
        ];

        // Estados dos jogos
        let memoryState = {
            flippedCards: [],
            matchedPairs: 0,
            moves: 0,
            cards: []
        };

        let wordSearchState = {
            grid: [],
            foundWords: [],
            selectedCells: [],
            isSelecting: false,
            startCell: null,
            wordPositions: []
        };

        let timelineState = {
            events: [],
            score: 0
        };

        // Frases motivacionais do dia
        const dailyQuotes = [
            { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
            { text: "A excelência não é um ato, mas um hábito.", author: "Aristóteles" },
            { text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
            { text: "Inovação distingue um líder de um seguidor.", author: "Steve Jobs" },
            { text: "A qualidade nunca é um acidente; é sempre o resultado de um esforço inteligente.", author: "John Ruskin" },
            { text: "Juntos somos mais fortes, juntos construímos o futuro.", author: "Segurar Corporativa" }
        ];

        // Perguntas por dificuldade
        const questionsByDifficulty = {
            easy: [0, 1, 4, 5, 8], // índices das perguntas fáceis
            medium: [2, 3, 6, 7, 9], // índices das perguntas médias
            hard: [1, 2, 3, 6, 7, 9] // índices das perguntas difíceis (repetindo algumas médias)
        };

        // Inicializar frase do dia
        function initializeDailyQuote() {
            const today = new Date().getDate();
            const quote = dailyQuotes[today % dailyQuotes.length];
            document.getElementById('dailyQuoteText').textContent = `"${quote.text}"`;
            document.querySelector('.quote-author').textContent = `- ${quote.author}`;
        }

        // Navegação entre jogos
        function selectGame(game) {
            currentGame = game;
            document.querySelector('.start-screen').classList.remove('active');
            
            switch(game) {
                case 'quiz':
                    document.querySelector('.quiz-selection-screen').classList.add('active');
                    break;
                case 'memory':
                    document.querySelector('.memory-game-screen').classList.add('active');
                    initMemoryGame();
                    break;
                case 'crossword':
                    document.querySelector('.crossword-screen').classList.add('active');
                    initCrossword();
                    break;
                case 'wordSearch':
                    document.querySelector('.word-search-screen').classList.add('active');
                    initWordSearch();
                    break;
                case 'timeline':
                    document.querySelector('.timeline-screen').classList.add('active');
                    initTimeline();
                    break;
            }
        }

        function backToMenu() {
            // Esconder todas as telas
            document.querySelectorAll('.quiz-container > div').forEach(screen => {
                screen.classList.remove('active');
            });
            // Mostrar menu principal
            document.querySelector('.start-screen').classList.add('active');
            currentGame = '';
        }

        function restartCurrentGame() {
            if (currentGame === 'quiz') {
                document.querySelector('.result-screen').classList.remove('active');
                document.querySelector('.quiz-selection-screen').classList.add('active');
            } else {
                selectGame(currentGame);
            }
        }

        // Selecionar modo de jogo do quiz
        function selectGameMode(mode) {
            gameMode = mode;
            const modeCards = document.querySelectorAll('.quiz-selection-screen .mode-card');
            modeCards.forEach(card => card.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))');
            
            event.target.closest('.mode-card').style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            event.target.closest('.mode-card').style.color = 'white';
            
            const btnText = {
                'classic': 'Iniciar Quiz Clássico',
                'speed': 'Iniciar Quiz Velocidade ⚡',
                'expert': 'Iniciar Quiz Expert 🧠'
            };
            
            document.getElementById('startQuizBtn').textContent = btnText[mode];
        }

        // JOGO DA MEMÓRIA
        function initMemoryGame() {
            memoryState = {
                flippedCards: [],
                matchedPairs: 0,
                moves: 0,
                cards: [...memoryCards].slice(0, 16).sort(() => Math.random() - 0.5)
            };
            
            const grid = document.getElementById('memoryGrid');
            grid.innerHTML = '';
            
            memoryState.cards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'memory-card';
                cardElement.textContent = '?';
                cardElement.onclick = () => flipCard(index);
                grid.appendChild(cardElement);
            });
            
            updateMemoryScore();
        }

        function flipCard(index) {
            if (memoryState.flippedCards.length >= 2 || 
                memoryState.flippedCards.includes(index) ||
                document.querySelectorAll('.memory-card')[index].classList.contains('matched')) {
                return;
            }
            
            const cardElement = document.querySelectorAll('.memory-card')[index];
            cardElement.classList.add('flipped');
            
            const card = memoryState.cards[index];
            if (card.type === 'image') {
                const img = document.createElement('img');
                img.src = card.content;
                img.alt = 'Departamento';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '12px';
                cardElement.innerHTML = '';
                cardElement.appendChild(img);
            } else {
                cardElement.textContent = card.content;
            }
            
            memoryState.flippedCards.push(index);
            
            if (memoryState.flippedCards.length === 2) {
                memoryState.moves++;
                updateMemoryScore();
                
                setTimeout(() => {
                    checkMemoryMatch();
                }, 1000);
            }
        }

        function checkMemoryMatch() {
            const [first, second] = memoryState.flippedCards;
            const firstCard = memoryState.cards[first];
            const secondCard = memoryState.cards[second];
            const cardElements = document.querySelectorAll('.memory-card');
            
            if (firstCard.pair === secondCard.id || secondCard.pair === firstCard.id) {
                cardElements[first].classList.add('matched');
                cardElements[second].classList.add('matched');
                memoryState.matchedPairs++;
                
                if (memoryState.matchedPairs === 8) {
                    setTimeout(() => {
                        alert(`🎉 Parabéns! Você completou o jogo em ${memoryState.moves} movimentos!`);
                    }, 500);
                }
            } else {
                cardElements[first].classList.remove('flipped');
                cardElements[second].classList.remove('flipped');
                cardElements[first].textContent = '?';
                cardElements[second].textContent = '?';
            }
            
            memoryState.flippedCards = [];
            updateMemoryScore();
        }

        function updateMemoryScore() {
            document.getElementById('memoryMoves').textContent = memoryState.moves;
            document.getElementById('memoryPairs').textContent = memoryState.matchedPairs;
        }

        function resetMemoryGame() {
            initMemoryGame();
        }

        // PALAVRAS CRUZADAS MELHORADAS
        const crosswordData = {
            grid: [
                ['', '', '', '', '', '', '', '', '', ''],
                ['', 'S', 'E', 'G', 'U', 'R', 'A', 'R', '', ''],
                ['', '', '', '', '', '', '', 'E', '', ''],
                ['', '', 'C', 'O', 'N', 'F', 'I', 'A', 'N', 'C', 'A'],
                ['', '', '', '', '', '', '', 'L', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', ''],
                ['', 'I', 'N', 'O', 'V', 'A', 'C', 'A', 'O', '', ''],
                ['', '', '', '', 'I', '', '', '', '', '', ''],
                ['', '', '', '', 'D', '', '', '', '', '', ''],
                ['', '', '', '', 'A', '', '', '', '', '', '']
            ],
            numbers: [
                { row: 1, col: 1, number: 1 },
                { row: 1, col: 7, number: 2 },
                { row: 3, col: 2, number: 3 },
                { row: 6, col: 1, number: 4 },
                { row: 7, col: 4, number: 5 }
            ],
            words: [
                { number: 1, direction: 'horizontal', answer: 'SEGURAR', clue: 'Nome da empresa de seguros' },
                { number: 2, direction: 'vertical', answer: 'REAL', clue: 'Moeda brasileira' },
                { number: 3, direction: 'horizontal', answer: 'CONFIANCA', clue: 'Valor fundamental baseado na credibilidade' },
                { number: 4, direction: 'horizontal', answer: 'INOVACAO', clue: 'Busca constante por soluções modernas' },
                { number: 5, direction: 'vertical', answer: 'VIDA', clue: 'Tipo de seguro para proteção pessoal' }
            ]
        };

        let crosswordState = {
            completed: [],
            currentFocus: null
        };

        function initCrossword() {
            crosswordState = {
                completed: [],
                currentFocus: null
            };
            
            const grid = document.getElementById('crosswordGrid');
            grid.innerHTML = '';
            
            // Criar grid 10x10
            for (let row = 0; row < 10; row++) {
                for (let col = 0; col < 10; col++) {
                    const cell = document.createElement('div');
                    cell.className = 'crossword-cell';
                    cell.dataset.row = row;
                    cell.dataset.col = col;
                    
                    const gridValue = crosswordData.grid[row][col];
                    
                    if (gridValue === '') {
                        // Célula preta
                        cell.classList.add('black');
                    } else {
                        // Célula branca com input
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.maxLength = 1;
                        input.dataset.answer = gridValue;
                        
                        input.oninput = (e) => {
                            e.target.value = e.target.value.toUpperCase();
                            checkCrosswordProgress();
                        };
                        
                        input.onfocus = () => {
                            crosswordState.currentFocus = { row, col };
                            highlightWord(row, col);
                        };
                        
                        input.onkeydown = (e) => {
                            handleCrosswordNavigation(e, row, col);
                        };
                        
                        cell.appendChild(input);
                        
                        // Adicionar número se necessário
                        const numberData = crosswordData.numbers.find(n => n.row === row && n.col === col);
                        if (numberData) {
                            const numberSpan = document.createElement('span');
                            numberSpan.className = 'cell-number';
                            numberSpan.textContent = numberData.number;
                            cell.appendChild(numberSpan);
                        }
                    }
                    
                    grid.appendChild(cell);
                }
            }
            
            renderCrosswordClues();
        }

        function renderCrosswordClues() {
            const horizontalClues = crosswordData.words.filter(w => w.direction === 'horizontal');
            const verticalClues = crosswordData.words.filter(w => w.direction === 'vertical');
            
            document.getElementById('crosswordClues').innerHTML = `
                <div class="clues-section">
                    <div class="clues-column">
                        <h4 style="color: #667eea; margin-bottom: 15px;">🔄 HORIZONTAIS</h4>
                        ${horizontalClues.map(word => `
                            <div class="clue-item" onclick="focusWord(${word.number}, 'horizontal')">
                                <span class="clue-number">${word.number}.</span>
                                <span class="clue-text">${word.clue} (${word.answer.length} letras)</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="clues-column">
                        <h4 style="color: #667eea; margin-bottom: 15px;">⬇️ VERTICAIS</h4>
                        ${verticalClues.map(word => `
                            <div class="clue-item" onclick="focusWord(${word.number}, 'vertical')">
                                <span class="clue-number">${word.number}.</span>
                                <span class="clue-text">${word.clue} (${word.answer.length} letras)</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function focusWord(number, direction) {
            // Encontrar a posição inicial da palavra
            const numberPos = crosswordData.numbers.find(n => n.number === number);
            if (!numberPos) return;
            
            // Focar no primeiro input da palavra
            const cell = document.querySelector(`[data-row="${numberPos.row}"][data-col="${numberPos.col}"] input`);
            if (cell) {
                cell.focus();
                highlightWord(numberPos.row, numberPos.col, direction);
            }
        }

        function highlightWord(row, col, forceDirection = null) {
            // Limpar highlights anteriores
            document.querySelectorAll('.crossword-cell').forEach(cell => {
                cell.classList.remove('highlighted', 'word-start');
            });
            
            // Encontrar qual palavra está sendo editada
            const numberData = crosswordData.numbers.find(n => n.row === row && n.col === col);
            let wordData = null;
            
            if (numberData) {
                // Se é o início de uma palavra
                wordData = crosswordData.words.find(w => w.number === numberData.number && 
                    (forceDirection ? w.direction === forceDirection : true));
            } else {
                // Procurar em qual palavra esta célula está
                for (let word of crosswordData.words) {
                    const startPos = crosswordData.numbers.find(n => n.number === word.number);
                    if (!startPos) continue;
                    
                    for (let i = 0; i < word.answer.length; i++) {
                        let checkRow = startPos.row;
                        let checkCol = startPos.col;
                        
                        if (word.direction === 'horizontal') {
                            checkCol += i;
                        } else {
                            checkRow += i;
                        }
                        
                        if (checkRow === row && checkCol === col) {
                            wordData = word;
                            break;
                        }
                    }
                    if (wordData) break;
                }
            }
            
            if (!wordData) return;
            
            // Destacar a palavra inteira
            const startPos = crosswordData.numbers.find(n => n.number === wordData.number);
            for (let i = 0; i < wordData.answer.length; i++) {
                let highlightRow = startPos.row;
                let highlightCol = startPos.col;
                
                if (wordData.direction === 'horizontal') {
                    highlightCol += i;
                } else {
                    highlightRow += i;
                }
                
                const cellToHighlight = document.querySelector(`[data-row="${highlightRow}"][data-col="${highlightCol}"]`);
                if (cellToHighlight) {
                    cellToHighlight.classList.add('highlighted');
                    if (i === 0) {
                        cellToHighlight.classList.add('word-start');
                    }
                }
            }
        }

        function handleCrosswordNavigation(e, row, col) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                
                let newRow = row;
                let newCol = col;
                
                switch (e.key) {
                    case 'ArrowUp': newRow--; break;
                    case 'ArrowDown': newRow++; break;
                    case 'ArrowLeft': newCol--; break;
                    case 'ArrowRight': newCol++; break;
                }
                
                // Verificar limites e se a célula é válida
                if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10) {
                    const targetCell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"] input`);
                    if (targetCell) {
                        targetCell.focus();
                    }
                }
            }
        }

        function checkCrosswordProgress() {
            let correctWords = 0;
            let totalWords = crosswordData.words.length;
            
            crosswordData.words.forEach(word => {
                const startPos = crosswordData.numbers.find(n => n.number === word.number);
                let isCorrect = true;
                
                for (let i = 0; i < word.answer.length; i++) {
                    let checkRow = startPos.row;
                    let checkCol = startPos.col;
                    
                    if (word.direction === 'horizontal') {
                        checkCol += i;
                    } else {
                        checkRow += i;
                    }
                    
                    const input = document.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"] input`);
                    if (!input || input.value !== word.answer[i]) {
                        isCorrect = false;
                        break;
                    }
                }
                
                if (isCorrect) {
                    correctWords++;
                    // Marcar palavra como completa
                    for (let i = 0; i < word.answer.length; i++) {
                        let checkRow = startPos.row;
                        let checkCol = startPos.col;
                        
                        if (word.direction === 'horizontal') {
                            checkCol += i;
                        } else {
                            checkRow += i;
                        }
                        
                        const cell = document.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
                        if (cell) {
                            cell.classList.add('completed');
                        }
                    }
                }
            });
            
            // Verificar se completou tudo
            if (correctWords === totalWords) {
                setTimeout(() => {
                    alert('🎉 Parabéns! Você completou todas as palavras cruzadas!');
                }, 500);
            }
        }

        function checkCrossword() {
            checkCrosswordProgress();
            
            // Mostrar dicas para palavras incorretas
            crosswordData.words.forEach(word => {
                const startPos = crosswordData.numbers.find(n => n.number === word.number);
                let isCorrect = true;
                
                for (let i = 0; i < word.answer.length; i++) {
                    let checkRow = startPos.row;
                    let checkCol = startPos.col;
                    
                    if (word.direction === 'horizontal') {
                        checkCol += i;
                    } else {
                        checkRow += i;
                    }
                    
                    const input = document.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"] input`);
                    if (!input || input.value !== word.answer[i]) {
                        isCorrect = false;
                        break;
                    }
                }
                
                if (!isCorrect) {
                    // Destacar palavra incorreta
                    for (let i = 0; i < word.answer.length; i++) {
                        let checkRow = startPos.row;
                        let checkCol = startPos.col;
                        
                        if (word.direction === 'horizontal') {
                            checkCol += i;
                        } else {
                            checkRow += i;
                        }
                        
                        const cell = document.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
                        if (cell) {
                            cell.classList.add('incorrect');
                            setTimeout(() => cell.classList.remove('incorrect'), 2000);
                        }
                    }
                }
            });
        }

        function resetCrossword() {
            initCrossword();
        }

        // CAÇA-PALAVRAS MELHORADO
        function initWordSearch() {
            wordSearchState = {
                grid: generateWordSearchGrid(),
                foundWords: [],
                selectedCells: [],
                isSelecting: false,
                startCell: null,
                wordPositions: []
            };
            
            renderWordSearch();
        }

        function generateWordSearchGrid() {
            const grid = Array(12).fill().map(() => Array(12).fill(''));
            wordSearchState.wordPositions = [];
            
            // Preencher com letras aleatórias primeiro
            for (let i = 0; i < 12; i++) {
                for (let j = 0; j < 12; j++) {
                    grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }
            }
            
            // Inserir palavras específicas em posições conhecidas
            const wordsToPlace = [
                { word: 'SEGURAR', row: 0, col: 0, direction: 'horizontal' },
                { word: 'CORPORATIVA', row: 2, col: 1, direction: 'horizontal' },
                { word: 'SEGURO', row: 1, col: 2, direction: 'vertical' },
                { word: 'CONFIANCA', row: 4, col: 0, direction: 'horizontal' },
                { word: 'INOVACAO', row: 6, col: 3, direction: 'horizontal' },
                { word: 'QUALIDADE', row: 0, col: 8, direction: 'vertical' },
                { word: 'TRANSPARENCIA', row: 8, col: 0, direction: 'horizontal' },
                { word: 'COMPROMISSO', row: 3, col: 7, direction: 'vertical' }
            ];
            
            wordsToPlace.forEach(({ word, row, col, direction }) => {
                const positions = [];
                
                for (let i = 0; i < word.length; i++) {
                    let currentRow = row;
                    let currentCol = col;
                    
                    if (direction === 'horizontal') {
                        currentCol += i;
                    } else if (direction === 'vertical') {
                        currentRow += i;
                    }
                    
                    if (currentRow < 12 && currentCol < 12) {
                        grid[currentRow][currentCol] = word[i];
                        positions.push({ row: currentRow, col: currentCol });
                    }
                }
                
                wordSearchState.wordPositions.push({
                    word: word,
                    positions: positions
                });
            });
            
            return grid;
        }

        function renderWordSearch() {
            const grid = document.getElementById('wordSearchGrid');
            grid.innerHTML = '';
            
            wordSearchState.grid.forEach((row, i) => {
                row.forEach((cell, j) => {
                    const cellElement = document.createElement('div');
                    cellElement.className = 'word-search-cell';
                    cellElement.textContent = cell;
                    cellElement.dataset.row = i;
                    cellElement.dataset.col = j;
                    
                    // Verificar se a célula faz parte de uma palavra encontrada
                    const isPartOfFoundWord = wordSearchState.wordPositions.some(wordPos => {
                        return wordSearchState.foundWords.includes(wordPos.word) &&
                               wordPos.positions.some(pos => pos.row === i && pos.col === j);
                    });
                    
                    if (isPartOfFoundWord) {
                        cellElement.classList.add('found');
                    }
                    
                    // Eventos de mouse para seleção
                    cellElement.addEventListener('mousedown', (e) => startSelection(i, j, e));
                    cellElement.addEventListener('mouseenter', (e) => continueSelection(i, j, e));
                    cellElement.addEventListener('mouseup', (e) => endSelection(i, j, e));
                    
                    grid.appendChild(cellElement);
                });
            });
            
            // Renderizar lista de palavras
            const wordsList = document.getElementById('wordsList');
            wordsList.innerHTML = '';
            
            wordSearchWords.forEach(word => {
                const wordElement = document.createElement('div');
                wordElement.className = 'word-item';
                wordElement.textContent = word;
                if (wordSearchState.foundWords.includes(word)) {
                    wordElement.classList.add('found');
                }
                wordsList.appendChild(wordElement);
            });
            
            document.getElementById('wordsFound').textContent = wordSearchState.foundWords.length;
            
            // Adicionar eventos globais
            document.addEventListener('mouseup', () => {
                if (wordSearchState.isSelecting) {
                    endSelection();
                }
            });
        }

        function startSelection(row, col, event) {
            event.preventDefault();
            wordSearchState.isSelecting = true;
            wordSearchState.startCell = { row, col };
            wordSearchState.selectedCells = [{ row, col }];
            
            updateSelectedCells();
        }

        function continueSelection(row, col, event) {
            if (!wordSearchState.isSelecting || !wordSearchState.startCell) return;
            
            event.preventDefault();
            
            // Calcular células entre início e posição atual
            const cells = getCellsBetween(wordSearchState.startCell, { row, col });
            wordSearchState.selectedCells = cells;
            
            updateSelectedCells();
        }

        function endSelection(row, col, event) {
            if (!wordSearchState.isSelecting) return;
            
            event?.preventDefault();
            wordSearchState.isSelecting = false;
            
            // Verificar se a seleção forma uma palavra válida
            const selectedWord = getSelectedWord();
            const reverseWord = selectedWord.split('').reverse().join('');
            
            if ((wordSearchWords.includes(selectedWord) || wordSearchWords.includes(reverseWord)) && 
                !wordSearchState.foundWords.includes(selectedWord) && 
                !wordSearchState.foundWords.includes(reverseWord)) {
                
                // Palavra encontrada!
                const foundWord = wordSearchWords.includes(selectedWord) ? selectedWord : reverseWord;
                wordSearchState.foundWords.push(foundWord);
                
                // Marcar células como encontradas permanentemente
                wordSearchState.selectedCells.forEach(cell => {
                    const cellElement = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
                    if (cellElement) {
                        cellElement.classList.add('found');
                    }
                });
                
                // Verificar se todas as palavras foram encontradas
                if (wordSearchState.foundWords.length === wordSearchWords.length) {
                    setTimeout(() => {
                        alert('🎉 Parabéns! Você encontrou todas as palavras!');
                    }, 500);
                }
            }
            
            // Limpar seleção atual
            clearSelection();
            renderWordSearch();
        }

        function getCellsBetween(start, end) {
            const cells = [];
            const rowDiff = end.row - start.row;
            const colDiff = end.col - start.col;
            
            // Determinar direção (horizontal, vertical ou diagonal)
            let stepRow = 0, stepCol = 0;
            
            if (rowDiff === 0) {
                // Horizontal
                stepCol = colDiff > 0 ? 1 : -1;
            } else if (colDiff === 0) {
                // Vertical
                stepRow = rowDiff > 0 ? 1 : -1;
            } else if (Math.abs(rowDiff) === Math.abs(colDiff)) {
                // Diagonal
                stepRow = rowDiff > 0 ? 1 : -1;
                stepCol = colDiff > 0 ? 1 : -1;
            } else {
                // Linha não válida, retornar apenas célula inicial
                return [start];
            }
            
            let currentRow = start.row;
            let currentCol = start.col;
            
            while (true) {
                cells.push({ row: currentRow, col: currentCol });
                
                if (currentRow === end.row && currentCol === end.col) break;
                
                currentRow += stepRow;
                currentCol += stepCol;
                
                // Verificar limites
                if (currentRow < 0 || currentRow >= 12 || currentCol < 0 || currentCol >= 12) break;
            }
            
            return cells;
        }

        function getSelectedWord() {
            return wordSearchState.selectedCells
                .map(cell => wordSearchState.grid[cell.row][cell.col])
                .join('');
        }

        function updateSelectedCells() {
            // Limpar seleções anteriores
            document.querySelectorAll('.word-search-cell.selected').forEach(cell => {
                cell.classList.remove('selected');
            });
            
            // Aplicar nova seleção
            wordSearchState.selectedCells.forEach(cell => {
                const cellElement = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
                if (cellElement && !cellElement.classList.contains('found')) {
                    cellElement.classList.add('selected');
                }
            });
        }

        function clearSelection() {
            document.querySelectorAll('.word-search-cell.selected').forEach(cell => {
                cell.classList.remove('selected');
            });
            wordSearchState.selectedCells = [];
            wordSearchState.startCell = null;
        }

        function resetWordSearch() {
            initWordSearch();
        }

        // LINHA DO TEMPO
        function initTimeline() {
            timelineState = {
                events: [...timelineEvents].sort(() => Math.random() - 0.5),
                score: 0
            };
            
            renderTimeline();
        }

        function renderTimeline() {
            const container = document.getElementById('timelineEvents');
            container.innerHTML = '';
            
            timelineState.events.forEach((event, index) => {
                const eventElement = document.createElement('div');
                eventElement.className = 'timeline-event';
                eventElement.innerHTML = `
                    <div class="event-year">${event.year}</div>
                    <div class="event-description">${event.event}</div>
                `;
                eventElement.onclick = () => moveTimelineEvent(index);
                container.appendChild(eventElement);
            });
            
            document.getElementById('timelineScore').textContent = timelineState.score;
        }

        function moveTimelineEvent(index) {
            // Lógica simplificada - trocar com evento adjacente
            if (index > 0) {
                [timelineState.events[index], timelineState.events[index - 1]] = 
                [timelineState.events[index - 1], timelineState.events[index]];
                renderTimeline();
            }
        }

        function checkTimeline() {
            let correctOrder = 0;
            timelineState.events.forEach((event, index) => {
                const eventElement = document.querySelectorAll('.timeline-event')[index];
                if (event.order === index + 1) {
                    eventElement.classList.add('correct');
                    correctOrder++;
                } else {
                    eventElement.classList.add('incorrect');
                }
            });
            
            timelineState.score = correctOrder * 10;
            document.getElementById('timelineScore').textContent = timelineState.score;
            
            setTimeout(() => {
                alert(`Você acertou ${correctOrder} de ${timelineEvents.length} eventos! Pontuação: ${timelineState.score}`);
            }, 1000);
        }

        function resetTimeline() {
            initTimeline();
        }

        // Selecionar dificuldade
        function selectDifficulty(level) {
            difficulty = level;
            const difficultyBtns = document.querySelectorAll('.difficulty-btn');
            difficultyBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        function startQuiz() {
            document.querySelector('.quiz-selection-screen').classList.remove('active');
            document.querySelector('.question-screen').classList.add('active');
            currentQuestion = 0;
            score = 0;
            correctAnswers = 0;
            incorrectAnswers = 0;
            currentGame = 'quiz';
            
            // Configurar perguntas baseado na dificuldade
            if (difficulty !== 'easy') {
                // Embaralhar perguntas para dificuldades médias e difíceis
                const availableQuestions = questionsByDifficulty[difficulty];
                questions.sort(() => Math.random() - 0.5);
            }
            
            showQuestion();
        }

        function showQuestion() {
            const question = questions[currentQuestion];
            
            document.getElementById('questionCounter').textContent = `Pergunta ${currentQuestion + 1} de ${questions.length} • ${gameMode.toUpperCase()}`;
            document.getElementById('questionText').textContent = question.question;
            
            const progressPercent = ((currentQuestion) / questions.length) * 100;
            document.getElementById('progressFill').style.width = progressPercent + '%';
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(optionElement);
            });
            
            selectedAnswer = null;
            document.getElementById('nextBtn').disabled = true;
            
            // Iniciar timer para modo velocidade
            if (gameMode === 'speed') {
                startTimer();
            }
        }

        // Timer para modo velocidade
        function startTimer() {
            timeLeft = 15;
            updateTimerDisplay();
            
            timer = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    // Auto-selecionar resposta aleatória se tempo acabar
                    if (selectedAnswer === null) {
                        const randomAnswer = Math.floor(Math.random() * 4);
                        selectAnswer(randomAnswer);
                        setTimeout(() => nextQuestion(), 1000);
                    }
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const counterElement = document.getElementById('questionCounter');
            if (gameMode === 'speed') {
                counterElement.innerHTML = `Pergunta ${currentQuestion + 1} de ${questions.length} • VELOCIDADE • ⏰ ${timeLeft}s`;
                
                if (timeLeft <= 5) {
                    counterElement.style.color = '#f44336';
                    counterElement.style.fontWeight = 'bold';
                } else {
                    counterElement.style.color = '#666';
                    counterElement.style.fontWeight = '500';
                }
            }
        }

        function selectAnswer(index) {
            selectedAnswer = index;
            const options = document.querySelectorAll('.option');
            
            options.forEach((option, i) => {
                option.classList.remove('selected', 'correct', 'incorrect');
                if (i === index) {
                    option.classList.add('selected');
                }
            });
            
            document.getElementById('nextBtn').disabled = false;
        }

        function nextQuestion() {
            // Parar timer se estiver rodando
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            
            const question = questions[currentQuestion];
            const options = document.querySelectorAll('.option');
            
            // Mostrar resposta correta
            options.forEach((option, i) => {
                if (i === question.correct) {
                    option.classList.add('correct');
                } else if (i === selectedAnswer && i !== question.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            // Calcular pontuação baseada no modo de jogo
            let points = 10;
            if (gameMode === 'speed' && timeLeft > 10) {
                points = 15; // Bonus por velocidade
            } else if (gameMode === 'expert') {
                points = 15; // Mais pontos no modo expert
            }
            
            if (selectedAnswer === question.correct) {
                score += points;
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
            
            setTimeout(() => {
                currentQuestion++;
                
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            }, 1500);
        }

        function showResults() {
            document.querySelector('.question-screen').classList.remove('active');
            document.querySelector('.result-screen').classList.add('active');
            
            const percentage = (correctAnswers / questions.length) * 100;
            const maxScore = gameMode === 'expert' ? questions.length * 15 : questions.length * 10;
            
            document.getElementById('finalScore').textContent = `${score}/${maxScore}`;
            document.getElementById('correctAnswers').textContent = correctAnswers;
            document.getElementById('incorrectAnswers').textContent = incorrectAnswers;
            document.getElementById('percentage').textContent = `${percentage.toFixed(1)}%`;
            
            let emoji, message;
            
            // Mensagens personalizadas por modo de jogo
            if (gameMode === 'speed') {
                if (percentage >= 90) {
                    emoji = '⚡';
                    message = 'Incrível! Velocidade e precisão perfeitas!';
                } else if (percentage >= 70) {
                    emoji = '🚀';
                    message = 'Excelente reflexos! Você é rápido e certeiro!';
                } else {
                    emoji = '⏰';
                    message = 'Boa tentativa! A velocidade vem com a prática!';
                }
            } else if (gameMode === 'expert') {
                if (percentage >= 90) {
                    emoji = '🧠';
                    message = 'Genial! Você domina todos os aspectos da empresa!';
                } else if (percentage >= 70) {
                    emoji = '🎓';
                    message = 'Impressionante conhecimento corporativo!';
                } else {
                    emoji = '📖';
                    message = 'Continue estudando para se tornar um expert!';
                }
            } else {
                if (percentage >= 90) {
                    emoji = '🏆';
                    message = 'Excelente! Você é um expert na Segurar Corporativa!';
                } else if (percentage >= 70) {
                    emoji = '🎉';
                    message = 'Muito bem! Você conhece bem nossa empresa!';
                } else if (percentage >= 50) {
                    emoji = '👍';
                    message = 'Bom trabalho! Continue aprendendo sobre nós!';
                } else {
                    emoji = '📚';
                    message = 'Que tal conhecer mais sobre a Segurar Corporativa?';
                }
            }
            
            document.getElementById('resultEmoji').textContent = emoji;
            document.getElementById('scoreMessage').textContent = message;
        }

        function restartQuiz() {
            document.querySelector('.result-screen').classList.remove('active');
            document.querySelector('.start-screen').classList.add('active');
            
            // Resetar seleções visuais
            const modeCards = document.querySelectorAll('.mode-card');
            modeCards.forEach(card => {
                card.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))';
                card.style.color = '';
            });
            
            gameMode = 'classic';
            difficulty = 'easy';
            document.getElementById('startQuizBtn').textContent = 'Iniciar Quiz Clássico';
            
            // Resetar dificuldade
            const difficultyBtns = document.querySelectorAll('.difficulty-btn');
            difficultyBtns.forEach(btn => btn.classList.remove('active'));
            difficultyBtns[0].classList.add('active');
        }

        // Inicializar quando a página carregar
        window.onload = function() {
            initializeDailyQuote();

            // Adicionar listener para o formulário de cadastro
            const registrationForm = document.getElementById('registrationForm');
            registrationForm.addEventListener('submit', function(event) {
                event.preventDefault();

                // Validar campos
                const name = document.getElementById('playerName').value.trim();
                const email = document.getElementById('playerEmail').value.trim();
                const state = document.getElementById('playerState').value;

                if (!name || !email || !state) {
                    alert('Por favor, preencha todos os campos corretamente.');
                    return;
                }

                // Salvar dados do jogador (pode ser localStorage ou variável global)
                window.playerData = { name, email, state };

                // Navegar para a tela principal (menu)
                document.querySelector('.registration-screen').classList.remove('active');
                document.querySelector('.start-screen').classList.add('active');
            });
        };
