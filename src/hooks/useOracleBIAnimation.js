import { useEffect, useRef } from 'react';

export const useOracleBIAnimation = (slug) => {
  const vantaRef = useRef(null);
  const animationRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Only initialize if this is the active animation
    if (slug !== 'oracle-bi') return;

    const initAnimation = async () => {
      try {
        // Clean up any existing animation
        if (animationRef.current && animationRef.current.canvas) {
          animationRef.current.canvas.remove();
        }
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        // Wait for the ref to be attached
        if (!vantaRef.current) return;

        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        
        vantaRef.current.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
          if (!vantaRef.current) return;
          canvas.width = vantaRef.current.offsetWidth * window.devicePixelRatio;
          canvas.height = vantaRef.current.offsetHeight * window.devicePixelRatio;
          canvas.style.width = vantaRef.current.offsetWidth + 'px';
          canvas.style.height = vantaRef.current.offsetHeight + 'px';
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Professional color scheme
        const colors = {
          primary: '#00D4FF',
          secondary: '#7B2FFF',
          accent: '#FF006E',
          light: '#FFFFFF',
          grid: 'rgba(0, 212, 255, 0.1)',
          glow: 'rgba(0, 212, 255, 0.5)',
          panel: 'rgba(0, 212, 255, 0.05)',
          text: 'rgba(255, 255, 255, 0.9)'
        };

        // [Rest of your animation code remains the same...]
        // Data particles system
        class DataParticle {
          constructor(canvas) {
            this.canvas = canvas;
            this.reset();
            this.y = Math.random() * canvas.height;
          }

          reset() {
            this.x = Math.random() * this.canvas.width;
            this.y = -20;
            this.z = Math.random() * 1000;
            this.speed = Math.random() * 2 + 1;
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.5;
            this.hue = Math.random() * 60 - 30;
          }

          update() {
            this.y += this.speed;
            this.x += Math.sin(this.y * 0.01) * 0.5;
            
            if (this.y > this.canvas.height + 20) {
              this.reset();
            }
          }

          draw(ctx) {
            const perspective = 1000 / (1000 + this.z);
            const x = this.x * perspective + (this.canvas.width * (1 - perspective)) / 2;
            const size = this.size * perspective;
            
            ctx.save();
            ctx.globalAlpha = this.opacity * perspective * 0.6;
            ctx.fillStyle = `hsla(${190 + this.hue}, 100%, 50%, ${this.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = colors.glow;
            ctx.fillRect(x, this.y, size, size * 4);
            ctx.restore();
          }
        }

        // Professional Dashboard System
        class DashboardSystem {
          constructor(canvas) {
            this.canvas = canvas;
            this.centerX = canvas.width / 2;
            this.centerY = canvas.height / 2;
            this.mainDashboard = null;
            this.sidePanels = [];
            this.miniPanels = [];
            this.rotation = 0;
            this.setupLayout();
          }

          setupLayout() {
            // Main central dashboard
            this.mainDashboard = {
              x: this.centerX,
              y: this.centerY,
              width: 400,
              height: 300,
              type: 'main',
              title: 'BUSINESS INTELLIGENCE HUB',
              data: this.generateMainData(),
              opacity: 0,
              targetOpacity: 0.9,
              scale: 0.8,
              targetScale: 1
            };

            // Side panels in hexagonal arrangement
            const sideRadius = 300;
            const panelTypes = [
              { title: 'REVENUE ANALYTICS', type: 'bar' },
              { title: 'PERFORMANCE METRICS', type: 'line' },
              { title: 'MARKET SHARE', type: 'pie' },
              { title: 'GROWTH INDICATORS', type: 'area' },
              { title: 'KPI DASHBOARD', type: 'metric' },
              { title: 'PREDICTIVE MODEL', type: 'scatter' }
            ];

            panelTypes.forEach((panel, i) => {
              const angle = (i / panelTypes.length) * Math.PI * 2 - Math.PI / 2;
              this.sidePanels.push({
                x: this.centerX + Math.cos(angle) * sideRadius,
                y: this.centerY + Math.sin(angle) * sideRadius,
                width: 180,
                height: 120,
                angle: angle,
                ...panel,
                data: this.generatePanelData(panel.type),
                opacity: 0,
                targetOpacity: 0.7,
                scale: 0.5,
                targetScale: 1,
                delay: i * 100
              });
            });

            // Mini info panels
            const miniRadius = 450;
            for (let i = 0; i < 12; i++) {
              const angle = (i / 12) * Math.PI * 2;
              this.miniPanels.push({
                x: this.centerX + Math.cos(angle) * miniRadius,
                y: this.centerY + Math.sin(angle) * miniRadius,
                size: 40,
                value: Math.floor(Math.random() * 100),
                opacity: 0,
                targetOpacity: 0.5,
                delay: i * 50 + 600
              });
            }
          }

          generateMainData() {
            return {
              grid: Array.from({ length: 10 }, () => 
                Array.from({ length: 10 }, () => Math.random())
              ),
              metrics: [
                { label: 'Total Revenue', value: 2847000, change: 12.5 },
                { label: 'Active Users', value: 45823, change: 8.2 },
                { label: 'Conversion Rate', value: 3.7, change: -2.1 },
                { label: 'Data Processed', value: 1.2, change: 15.8 }
              ]
            };
          }

          generatePanelData(type) {
            switch(type) {
              case 'bar':
                return Array.from({ length: 8 }, () => Math.random());
              case 'line':
                return Array.from({ length: 12 }, () => Math.random());
              case 'pie':
                return Array.from({ length: 5 }, () => Math.random());
              case 'area':
                return Array.from({ length: 10 }, () => Math.random());
              case 'metric':
                return Array.from({ length: 4 }, () => ({
                  value: Math.floor(Math.random() * 1000),
                  label: ['CPU', 'RAM', 'DISK', 'NET'][Math.floor(Math.random() * 4)]
                }));
              case 'scatter':
                return Array.from({ length: 20 }, () => ({
                  x: Math.random(),
                  y: Math.random()
                }));
              default:
                return [];
            }
          }

          update(time) {
            this.rotation += 0.0005;

            // Update main dashboard
            if (this.mainDashboard.opacity < this.mainDashboard.targetOpacity) {
              this.mainDashboard.opacity += 0.01;
            }
            if (this.mainDashboard.scale < this.mainDashboard.targetScale) {
              this.mainDashboard.scale += 0.01;
            }

            // Update side panels with staggered animation
            this.sidePanels.forEach((panel, i) => {
              if (time > panel.delay) {
                if (panel.opacity < panel.targetOpacity) {
                  panel.opacity += 0.01;
                }
                if (panel.scale < panel.targetScale) {
                  panel.scale += 0.02;
                }
              }

              // Gentle floating motion
              panel.floatY = Math.sin(time * 0.001 + i) * 5;
            });

            // Update mini panels
            this.miniPanels.forEach((panel, i) => {
              if (time > panel.delay) {
                if (panel.opacity < panel.targetOpacity) {
                  panel.opacity += 0.01;
                }
              }
              // Update values occasionally
              if (Math.random() < 0.001) {
                panel.value = Math.floor(Math.random() * 100);
              }
            });

            // Update data
            if (Math.random() < 0.02) {
              this.updateData();
            }
          }

          updateData() {
            // Update main dashboard data
            this.mainDashboard.data.grid.forEach(row => {
              row.forEach((_, i) => {
                if (Math.random() < 0.1) {
                  row[i] = Math.random();
                }
              });
            });

            // Update panel data
            this.sidePanels.forEach(panel => {
              if (Math.random() < 0.3) {
                panel.data = this.generatePanelData(panel.type);
              }
            });
          }

          drawMainDashboard(ctx, time) {
            const { x, y, width, height, opacity, scale, data } = this.mainDashboard;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(x, y);
            ctx.scale(scale, scale);

            // Main frame with glow
            ctx.strokeStyle = colors.primary;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 30;
            ctx.shadowColor = colors.glow;
            
            // Outer frame
            ctx.strokeRect(-width/2, -height/2, width, height);
            
            // Inner panels
            ctx.fillStyle = colors.panel;
            ctx.fillRect(-width/2, -height/2, width, height);

            // Title
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 16px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(this.mainDashboard.title, 0, -height/2 + 30);

            // Data grid visualization
            const gridSize = 15;
            const gridStartX = -width/2 + 40;
            const gridStartY = -height/2 + 60;
            
            data.grid.forEach((row, i) => {
              row.forEach((value, j) => {
                ctx.fillStyle = `rgba(0, 212, 255, ${value * 0.8})`;
                ctx.fillRect(
                  gridStartX + j * gridSize,
                  gridStartY + i * gridSize,
                  gridSize - 2,
                  gridSize - 2
                );
              });
            });

            // Metrics display
            ctx.font = '12px monospace';
            data.metrics.forEach((metric, i) => {
              const metricY = gridStartY + 180 + i * 25;
              ctx.fillStyle = colors.text;
              ctx.textAlign = 'left';
              ctx.fillText(metric.label + ':', gridStartX, metricY);
              ctx.textAlign = 'right';
              ctx.fillText(metric.value.toLocaleString(), gridStartX + 200, metricY);
              
              // Change indicator
              ctx.fillStyle = metric.change > 0 ? '#00FF88' : '#FF4444';
              ctx.fillText(
                (metric.change > 0 ? '+' : '') + metric.change + '%',
                gridStartX + 280,
                metricY
              );
            });

            ctx.restore();
          }

          drawSidePanel(ctx, panel, time) {
            const { x, y, width, height, opacity, scale, floatY = 0 } = panel;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.translate(x, y + floatY);
            ctx.scale(scale, scale);

            // Panel frame
            ctx.strokeStyle = colors.secondary;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 20;
            ctx.shadowColor = colors.secondary;
            ctx.strokeRect(-width/2, -height/2, width, height);
            
            ctx.fillStyle = colors.panel;
            ctx.fillRect(-width/2, -height/2, width, height);

            // Title
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(panel.title, 0, -height/2 + 20);

            // Draw visualization based on type
            this.drawVisualization(ctx, panel);

            ctx.restore();
          }

          drawVisualization(ctx, panel) {
            const { type, data, width, height } = panel;
            const chartArea = {
              x: -width/2 + 20,
              y: -height/2 + 35,
              width: width - 40,
              height: height - 55
            };

            switch(type) {
              case 'bar':
                const barWidth = chartArea.width / data.length;
                data.forEach((value, i) => {
                  const barHeight = value * chartArea.height;
                  ctx.fillStyle = colors.primary;
                  ctx.fillRect(
                    chartArea.x + i * barWidth + barWidth * 0.2,
                    chartArea.y + chartArea.height - barHeight,
                    barWidth * 0.6,
                    barHeight
                  );
                });
                break;

              case 'line':
                ctx.strokeStyle = colors.accent;
                ctx.lineWidth = 2;
                ctx.beginPath();
                data.forEach((value, i) => {
                  const x = chartArea.x + (i / (data.length - 1)) * chartArea.width;
                                   const y = chartArea.y + chartArea.height - value * chartArea.height;
                  if (i === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                });
                ctx.stroke();
                break;

              case 'pie':
                const centerX = chartArea.x + chartArea.width / 2;
                const centerY = chartArea.y + chartArea.height / 2;
                const radius = Math.min(chartArea.width, chartArea.height) / 2 - 10;
                let currentAngle = -Math.PI / 2;
                
                data.forEach((value, i) => {
                  const sliceAngle = value * Math.PI * 2;
                  ctx.fillStyle = [colors.primary, colors.secondary, colors.accent, '#00FF88', '#FFD93D'][i % 5];
                  ctx.beginPath();
                  ctx.moveTo(centerX, centerY);
                  ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                  ctx.closePath();
                  ctx.fill();
                  currentAngle += sliceAngle;
                });
                break;

              case 'area':
                // Draw area chart with gradient
                ctx.beginPath();
                data.forEach((value, i) => {
                  const x = chartArea.x + (i / (data.length - 1)) * chartArea.width;
                  const y = chartArea.y + chartArea.height - value * chartArea.height;
                  if (i === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                });
                ctx.lineTo(chartArea.x + chartArea.width, chartArea.y + chartArea.height);
                ctx.lineTo(chartArea.x, chartArea.y + chartArea.height);
                ctx.closePath();
                
                const gradient = ctx.createLinearGradient(0, chartArea.y, 0, chartArea.y + chartArea.height);
                gradient.addColorStop(0, colors.primary);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fill();
                break;

              case 'metric':
                ctx.font = '10px monospace';
                ctx.textAlign = 'center';
                data.forEach((metric, i) => {
                  const metricX = chartArea.x + (i + 0.5) * (chartArea.width / data.length);
                  const metricY = chartArea.y + chartArea.height / 2;
                  
                  // Metric value
                  ctx.fillStyle = colors.accent;
                  ctx.font = 'bold 16px monospace';
                  ctx.fillText(metric.value, metricX, metricY);
                  
                  // Metric label
                  ctx.fillStyle = colors.text;
                  ctx.font = '9px monospace';
                  ctx.fillText(metric.label, metricX, metricY + 20);
                });
                break;

              case 'scatter':
                // Draw scatter plot points
                data.forEach(point => {
                  const x = chartArea.x + point.x * chartArea.width;
                  const y = chartArea.y + (1 - point.y) * chartArea.height;
                  
                  ctx.fillStyle = colors.primary;
                  ctx.beginPath();
                  ctx.arc(x, y, 3, 0, Math.PI * 2);
                  ctx.fill();
                });
                
                // Draw axes
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(chartArea.x, chartArea.y + chartArea.height);
                ctx.lineTo(chartArea.x + chartArea.width, chartArea.y + chartArea.height);
                ctx.moveTo(chartArea.x, chartArea.y);
                ctx.lineTo(chartArea.x, chartArea.y + chartArea.height);
                ctx.stroke();
                break;
            }
          }

          drawMiniPanel(ctx, panel) {
            const { x, y, size, value, opacity } = panel;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            
            // Mini panel background
            ctx.fillStyle = colors.panel;
            ctx.strokeStyle = colors.primary;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 10;
            ctx.shadowColor = colors.glow;
            
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Value
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value, x, y);
            
            ctx.restore();
          }

          draw(ctx, time) {
            // Draw connection lines from center to side panels
            ctx.save();
            ctx.strokeStyle = colors.grid;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 10]);
            
            this.sidePanels.forEach(panel => {
              if (panel.opacity > 0.1) {
                ctx.globalAlpha = panel.opacity * 0.3;
                ctx.beginPath();
                ctx.moveTo(this.centerX, this.centerY);
                ctx.lineTo(panel.x, panel.y);
                ctx.stroke();
              }
            });
            
            ctx.setLineDash([]);
            ctx.restore();

            // Draw mini panels
            this.miniPanels.forEach(panel => {
              this.drawMiniPanel(ctx, panel);
            });

            // Draw side panels
            this.sidePanels.forEach(panel => {
              this.drawSidePanel(ctx, panel, time);
            });

            // Draw main dashboard last (on top)
            this.drawMainDashboard(ctx, time);
          }
        }

        // Enhanced Neural Network with organized layout
        class NeuralNetwork {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.nodes = [];
            this.connections = [];
            this.dataFlows = [];
            this.setupNetwork();
          }

          setupNetwork() {
            // Create a more organized neural network layout
            const layers = [
              { count: 4, x: -200, label: 'INPUT' },
              { count: 6, x: -100, label: 'PROCESS' },
              { count: 5, x: 0, label: 'ANALYZE' },
              { count: 3, x: 100, label: 'INSIGHT' },
              { count: 2, x: 200, label: 'OUTPUT' }
            ];

            layers.forEach((layer, layerIndex) => {
              const ySpacing = 50;
              const startY = -(layer.count - 1) * ySpacing / 2;
              
              for (let i = 0; i < layer.count; i++) {
                this.nodes.push({
                  x: this.x + layer.x,
                  y: this.y + startY + i * ySpacing,
                  layer: layerIndex,
                  label: layer.label,
                  activation: 0,
                  targetActivation: Math.random() * 0.5 + 0.5
                });
              }
            });

            // Create organized connections
            for (let i = 0; i < layers.length - 1; i++) {
              const currentLayer = this.nodes.filter(n => n.layer === i);
              const nextLayer = this.nodes.filter(n => n.layer === i + 1);
              
              currentLayer.forEach(node1 => {
                nextLayer.forEach(node2 => {
                  this.connections.push({
                    from: node1,
                    to: node2,
                    strength: Math.random() * 0.5 + 0.5,
                    pulse: 0
                  });
                });
              });
            }
          }

          update(time) {
            // Update node activations
            this.nodes.forEach(node => {
              node.activation += (node.targetActivation - node.activation) * 0.05;
              if (Math.random() < 0.01) {
                node.targetActivation = Math.random() * 0.5 + 0.5;
              }
            });

            // Create data flow pulses
            if (Math.random() < 0.05 && this.dataFlows.length < 5) {
              const startNode = this.nodes.filter(n => n.layer === 0)[
                Math.floor(Math.random() * this.nodes.filter(n => n.layer === 0).length)
              ];
              this.dataFlows.push({
                path: [startNode],
                progress: 0,
                speed: 0.02
              });
            }

            // Update data flows
            this.dataFlows = this.dataFlows.filter(flow => {
              flow.progress += flow.speed;
              
              if (flow.progress >= 1) {
                const currentLayer = flow.path[flow.path.length - 1].layer;
                if (currentLayer < 4) {
                  const nextNodes = this.nodes.filter(n => n.layer === currentLayer + 1);
                  flow.path.push(nextNodes[Math.floor(Math.random() * nextNodes.length)]);
                  flow.progress = 0;
                } else {
                  return false; // Remove completed flow
                }
              }
              return true;
            });

            // Update connection pulses based on data flows
            this.connections.forEach(conn => {
              conn.pulse *= 0.95;
              
              this.dataFlows.forEach(flow => {
                if (flow.path.length > 1) {
                  const currentNode = flow.path[flow.path.length - 2];
                  const nextNode = flow.path[flow.path.length - 1];
                  if (conn.from === currentNode && conn.to === nextNode) {
                    conn.pulse = 1;
                  }
                }
              });
            });
          }

          draw(ctx) {
            // Draw layer labels
            ctx.save();
            ctx.fillStyle = colors.text;
            ctx.font = '10px monospace';
            ctx.textAlign = 'center';
            ctx.globalAlpha = 0.5;
            
            const uniqueLayers = [...new Set(this.nodes.map(n => n.layer))];
            uniqueLayers.forEach(layer => {
              const layerNodes = this.nodes.filter(n => n.layer === layer);
              if (layerNodes.length > 0) {
                const labelY = Math.min(...layerNodes.map(n => n.y)) - 30;
                ctx.fillText(layerNodes[0].label, layerNodes[0].x, labelY);
              }
            });
            ctx.restore();

            // Draw connections
            this.connections.forEach(conn => {
              ctx.save();
              ctx.globalAlpha = 0.1 + conn.pulse * 0.5;
              ctx.strokeStyle = conn.pulse > 0.5 ? colors.accent : colors.primary;
              ctx.lineWidth = 0.5 + conn.pulse * 2;
              
              if (conn.pulse > 0.1) {
                ctx.shadowBlur = 20;
                ctx.shadowColor = colors.glow;
              }
              
              ctx.beginPath();
              ctx.moveTo(conn.from.x, conn.from.y);
              ctx.lineTo(conn.to.x, conn.to.y);
              ctx.stroke();
              ctx.restore();
            });

            // Draw nodes
            this.nodes.forEach(node => {
              ctx.save();
              
              // Node glow
              const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
              gradient.addColorStop(0, `rgba(0, 212, 255, ${node.activation})`);
              gradient.addColorStop(0.5, `rgba(0, 212, 255, ${node.activation * 0.5})`);
              gradient.addColorStop(1, 'transparent');
              
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
              ctx.fill();
              
              // Node core
              ctx.fillStyle = colors.light;
              ctx.globalAlpha = 0.8 + node.activation * 0.2;
              ctx.beginPath();
              ctx.arc(node.x, node.y, 4 + node.activation * 2, 0, Math.PI * 2);
              ctx.fill();
              
              ctx.restore();
            });

            // Draw data flow particles
            this.dataFlows.forEach(flow => {
              if (flow.path.length > 1) {
                const from = flow.path[flow.path.length - 2];
                const to = flow.path[flow.path.length - 1];
                const x = from.x + (to.x - from.x) * flow.progress;
                const y = from.y + (to.y - from.y) * flow.progress;
                
                ctx.save();
                ctx.fillStyle = colors.accent;
                ctx.shadowBlur = 20;
                ctx.shadowColor = colors.accent;
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
              }
            });
          }
        }

        // Grid background
        const drawGrid = (ctx, time) => {
          ctx.strokeStyle = colors.grid;
          ctx.lineWidth = 0.5;
          
          const gridSize = 50;
          const offsetX = (time * 0.01) % gridSize;
          const offsetY = (time * 0.02) % gridSize;
          
          for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, 0);
            ctx.lineTo(x + offsetX, canvas.height);
            ctx.stroke();
          }
          
          for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y + offsetY);
            ctx.lineTo(canvas.width, y + offsetY);
            ctx.stroke();
          }
        };

        // Initialize elements
        const particles = Array.from({ length: 50 }, () => new DataParticle(canvas));
        const dashboardSystem = new DashboardSystem(canvas);
        const neuralNet = new NeuralNetwork(canvas.width / 2, canvas.height * 0.85);

        // Animation loop
        let time = 0;
        const animate = () => {
          time += 16;
          
          // Clear canvas
          ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw grid
          drawGrid(ctx, time);
          
          // Update and draw particles
          particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
          });
          
          // Update and draw dashboard system
          dashboardSystem.update(time);
          dashboardSystem.draw(ctx, time);
          
          // Update and draw neural network
          neuralNet.update(time);
          neuralNet.draw(ctx);
          
          rafRef.current = requestAnimationFrame(animate);
        };

        animate();
              animationRef.current = { canvas, resizeCanvas };

        console.log('Oracle BI animation initialized successfully');
      } catch (error) {
        console.error('Error initializing Oracle BI animation:', error);
      }
    };

    initAnimation();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (animationRef.current && animationRef.current.canvas) {
        animationRef.current.canvas.remove();
      }
      if (animationRef.current && animationRef.current.resizeCanvas) {
        window.removeEventListener('resize', animationRef.current.resizeCanvas);
      }
    };
  }, [slug]);

  return vantaRef;
};