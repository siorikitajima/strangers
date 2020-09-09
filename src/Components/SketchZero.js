    export default function SketchZero (p) {
        let angle = 1;
      
        p.setup = function () {
          p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        };
      
        p.draw = function () {
          p.background(255, 53, 98);

          if(p.windowWidth>600){
            p.camera(130, 130, 20 + p.sin(p.frameCount * 0.001) * 400, 0, 0, 0, 0, 1, 0);
            } else {
            p.camera(80, 80, 20 + p.sin(p.frameCount * 0.001) * 400, 0, 0, 0, 0, 1, 0);
            }

            p.rotateX(angle * 0.01);
            p.rotateY(angle * 0.005);

            for (let petals = 0; petals < 30; petals++) {
                let zAngle = 1;
                p.rotateZ(zAngle);
                p.push();
                    let a = 0.0;
                    let inc = p.TWO_PI / 25.0;
                    p.fill(100);
                    p.noStroke();
                    for (let i = 0; i < 30; i++) {
                    p.translate(i * 2, i * p.sin(a));
                    p.noStroke();
                    p.fill(34, 34, 34);
                    p.cylinder(1, p.sin(a) * 150);
                    a = a + inc;
                    }
                p.pop();
                p.rotateX(angle * 0.01);
                p.fill(255, 53, 98);
                p.stroke(34, 34, 34);
                p.box(50);
                angle = angle + 0.002;
              }
              p.translate(150, 180);
              p.noStroke();
              p.fill(34, 34, 34);
              p.sphere(100);
            
              p.translate(300, 200);
              p.noStroke();
              p.fill(239, 160, 11);
              p.sphere(150);
              
              p.translate(-500, -500);
              p.noStroke();
              p.fill(239, 160, 11);
              p.sphere(50);
        };
      };