

import "../App.css"


const backgroundAnimation = (container) => {
  
 let canvas = container.querySelector('canvas');

  if (!canvas) {
    canvas = document.createElement('canvas');
    container.appendChild(canvas);
  } else {
    // If canvas already exists, clear its content
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  }

  let particle, list, ctx, tog, man, dx, dy, mx, my, d, t, f, a, b, i, n, w, h, p;

  let ROWS;
  let COLS;
  const NUM_PARTICLES = (ROWS = 100) * (COLS = 300);
  const THICKNESS = Math.pow(80, 2);
  const SPACING = 3;
  const MARGIN = 100;
  const COLOR = 220;
  const DRAG = 0.95;
  const EASE = 0.25;

  particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
  };

  function init() {
    ctx = canvas.getContext('2d');
    man = false;
    tog = true;
    list = [];
    w = canvas.width = COLS * SPACING + MARGIN * 2;
    h = canvas.height = ROWS * SPACING + MARGIN * 2;

    for (i = 0; i < NUM_PARTICLES; i++) {
      p = Object.create(particle);
      p.x = p.ox = MARGIN + SPACING * (i % COLS);
      p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);

      list[i] = p;
    }

    // Attach event listener directly to the canvas
    canvas.addEventListener('mousemove', handleMouseMove);

    // Request focus for canvas for interactions
    canvas.setAttribute('tabindex', '0');
    canvas.focus();
  }

  function handleMouseMove(e) {
    const bounds = canvas.getBoundingClientRect();
    mx = e.clientX - bounds.left -400;
    my = e.clientY - bounds.top -150;
    man = true;
  }
    
  function step() {
 
  
    if ((tog = !tog)) {
      // Update mx and my to current cursor position if not manually controlled
      if (!man) {
        const bounds = canvas.getBoundingClientRect();
        mx = bounds.left + bounds.width / 2;
        my = bounds.top + bounds.height / 2;
      }
  
      for (i = 0; i < NUM_PARTICLES; i++) {
        p = list[i];
  
        // Calculate distance and force towards the cursor
        dx = mx - p.x;
        dy = my - p.y;
        d = Math.sqrt(dx * dx + dy * dy); // Euclidean distance
        f = THICKNESS / d;
  
        // Update particle velocity based on force
        if (d < THICKNESS) {
          t = Math.atan2(dy, dx);
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }
  
        // Update particle position with easing
        p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
        p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
      }
    } else {
      // Draw particles
      b = (a = ctx.createImageData(w, h)).data;
  
      for (i = 0; i < NUM_PARTICLES; i++) {
        p = list[i];
        b[n = (~~p.x + (~~p.y * w)) * 4] = b[n + 1] = b[n + 2] = COLOR;
        b[n + 3] = 255;
      }
  
      ctx.putImageData(a, 0, 0);
    }
  
  
  
    requestAnimationFrame(step);
  }
  
    
    init();
    step();
}
export default backgroundAnimation;

