import React, { useRef, useEffect } from 'react';

const CanvasUniverse: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');

    let animationFrameId: number;
    let stars: Star[] = [];
    let supernovae: Supernova[] = [];
    let blackHoles: BlackHole[] = [];

    // Function to generate random number within a range
    const getRandomNumber = (min: number, max: number): number => {
      return Math.random() * (max - min) + min;
    };

    // Function to generate random color
    const getRandomColor = (): string => {
      const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    // Star class
    class Star {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };

      constructor(x: number, y: number, radius: number, color: string, velocity: { x: number; y: number }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
      }

      draw(): void {
        context!.beginPath();
        context!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context!.fillStyle = this.color;
        context!.fill();
        context!.closePath();
      }

      update(): void {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }
    }

    // Supernova class
    class Supernova {
      x: number;
      y: number;
      radius: number;
      color: string;
      lifespan: number;

      constructor(x: number, y: number, radius: number, color: string, lifespan: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lifespan = lifespan;
      }

      draw(): void {
        context!.beginPath();
        context!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context!.fillStyle = this.color;
        context!.fill();
        context!.closePath();
      }

      update(): void {
        this.draw();
        this.lifespan--;
      }
    }

    // BlackHole class
    class BlackHole {
      x: number;
      y: number;
      radius: number;
      color: string;

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
      }

      draw(): void {
        context!.beginPath();
        context!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context!.fillStyle = this.color;
        context!.fill();
        context!.closePath();
      }
    }

    // Animation loop
    const animate = (): void => {
      animationFrameId = requestAnimationFrame(animate);

      // Clear canvas
      context!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Update and draw stars
      stars.forEach((star, index) => {
        star.update();

        // Remove stars that go off-screen
        if (star.x + star.radius < 0 || star.x - star.radius > (canvas!.width || 0)) {
          stars.splice(index, 1);
        }
      });

      // Update and draw supernovae
      supernovae.forEach((supernova, index) => {
        supernova.update();

        // Remove supernovae after lifespan expires
        if (supernova.lifespan <= 0) {
          supernovae.splice(index, 1);
        }
      });

      // Draw black holes
      blackHoles.forEach((blackHole) => {
        blackHole.draw();
      });
    };

    // Start animation loop
    animate();

    // Generate stars at random positions
    const generateStars = (): void => {
      const x = Math.random() * (canvas!.width || 0);
      const y = Math.random() * (canvas!.height || 0);
      const radius = Math.random() * 2 + 1;
      const color = getRandomColor();
      const velocity = {
        x: getRandomNumber(-0.5, 0.5),
        y: getRandomNumber(-0.5, 0.5)
      };
      stars.push(new Star(x, y, radius, color, velocity));
    };

    // Generate supernovae at random positions
    const generateSupernovae = (): void => {
      const x = Math.random() * (canvas!.width || 0);
      const y = Math.random() * (canvas!.height || 0);
      const radius = Math.random() * 30 + 10;
      const color = getRandomColor();
      const lifespan = 100;
      supernovae.push(new Supernova(x, y, radius, color, lifespan));
    };

    // Generate black holes at random positions
    const generateBlackHoles = (): void => {
      const x = Math.random() * (canvas!.width || 0);
      const y = Math.random() * (canvas!.height || 0);
      const radius = Math.random() * 50 + 20;
      const color = 'black';
      blackHoles.push(new BlackHole(x, y, radius, color));
    };

    // Generate new stars, supernovae, and black holes at intervals
    const intervalId = setInterval(() => {
      generateStars();
      generateSupernovae();
      generateBlackHoles();
    }, 2000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="universe-container">
      <canvas ref={canvasRef} width={800} height={600} />
    </div>
  )
};

export default CanvasUniverse;
