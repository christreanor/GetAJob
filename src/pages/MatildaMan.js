import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const CELL_SIZE = 20;
const PLAYER_SIZE = 30;
const GAME_WIDTH = 560;
const GAME_HEIGHT = 400;

function MatildaMan() {
    const canvasRef = useRef(null);
    const theme = useSelector((state) => state.app.theme);
    
    // Game state
    const gameState = useRef({
        player: {
            x: CELL_SIZE * 2,
            y: CELL_SIZE * 2,
            direction: 'right',
            speed: 2
        },
        dots: [],
        score: 0,
        isGameOver: false
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let lastTime = 0;

        // Initialize dots
        initializeDots();

        function initializeDots() {
            const dots = [];
            for (let x = CELL_SIZE * 2; x < GAME_WIDTH - CELL_SIZE * 2; x += CELL_SIZE * 2) {
                for (let y = CELL_SIZE * 2; y < GAME_HEIGHT - CELL_SIZE * 2; y += CELL_SIZE * 2) {
                    dots.push({ x, y, isEaten: false });
                }
            }
            gameState.current.dots = dots;
        }

        function drawPlayer(ctx) {
            const { player } = gameState.current;
            ctx.beginPath();
            ctx.arc(player.x, player.y, PLAYER_SIZE / 2, 0, Math.PI * 2);
            ctx.fillStyle = theme === 'light' ? '#FFD700' : '#FFA500';
            ctx.fill();
            ctx.closePath();
        }

        function drawDots(ctx) {
            const { dots } = gameState.current;
            dots.forEach(dot => {
                if (!dot.isEaten) {
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = theme === 'light' ? '#000' : '#fff';
                    ctx.fill();
                    ctx.closePath();
                }
            });
        }

        function handleKeyDown(e) {
            const { player } = gameState.current;
            switch(e.key) {
                case 'ArrowUp':
                    player.direction = 'up';
                    break;
                case 'ArrowDown':
                    player.direction = 'down';
                    break;
                case 'ArrowLeft':
                    player.direction = 'left';
                    break;
                case 'ArrowRight':
                    player.direction = 'right';
                    break;
                default:
                    break;
            }
        }

        function updatePlayerPosition() {
            const { player } = gameState.current;
            switch(player.direction) {
                case 'up':
                    if (player.y > CELL_SIZE) player.y -= player.speed;
                    break;
                case 'down':
                    if (player.y < GAME_HEIGHT - CELL_SIZE) player.y += player.speed;
                    break;
                case 'left':
                    if (player.x > CELL_SIZE) player.x -= player.speed;
                    break;
                case 'right':
                    if (player.x < GAME_WIDTH - CELL_SIZE) player.x += player.speed;
                    break;
            }
        }

        function checkCollisions() {
            const { player, dots } = gameState.current;
            dots.forEach(dot => {
                if (!dot.isEaten && 
                    Math.abs(player.x - dot.x) < PLAYER_SIZE / 2 && 
                    Math.abs(player.y - dot.y) < PLAYER_SIZE / 2) {
                    dot.isEaten = true;
                    gameState.current.score += 10;
                }
            });
        }

        function gameLoop(timestamp) {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = timestamp - lastTime;

            // Clear canvas
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            // Draw game border
            ctx.strokeStyle = theme === 'light' ? '#000' : '#fff';
            ctx.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            // Update game state
            updatePlayerPosition();
            checkCollisions();

            // Draw game elements
            drawDots(ctx);
            drawPlayer(ctx);

            // Draw score
            ctx.fillStyle = theme === 'light' ? '#000' : '#fff';
            ctx.font = '20px Arial';
            ctx.fillText('Score: ' + gameState.current.score, 10, 30);

            lastTime = timestamp;
            animationFrameId = window.requestAnimationFrame(gameLoop);
        }

        // Set up event listeners
        window.addEventListener('keydown', handleKeyDown);

        // Start game loop
        animationFrameId = window.requestAnimationFrame(gameLoop);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <div className="game-container">
            <h1>Matilda Man</h1>
            <canvas 
                ref={canvasRef}
                width={GAME_WIDTH}
                height={GAME_HEIGHT}
                style={{ 
                    border: '2px solid',
                    borderColor: theme === 'light' ? '#000' : '#fff',
                    backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a'
                }}
            />
            <div className="game-instructions">
                <h3>How to Play:</h3>
                <p>Use arrow keys to move Matilda Man and collect all the dots!</p>
            </div>
        </div>
    );
}

export default MatildaMan;