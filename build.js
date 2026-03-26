const fs = require('fs');

// === index.html — 3D rotating preview ===
const preview = `<!DOCTYPE html>
<html>
<head>
<title>Block Head UGC Preview</title>
<style>
  body { background: #1a1a1a; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: sans-serif; }
  .container { text-align: center; }
  .cube-wrapper { perspective: 600px; margin: 2rem; }
  .cube {
    width: 200px; height: 200px;
    transform-style: preserve-3d;
    animation: rotate 8s infinite linear;
    position: relative;
    margin: 0 auto;
  }
  @keyframes rotate { from { transform: rotateY(0deg) rotateX(-15deg); } to { transform: rotateY(360deg) rotateX(-15deg); } }
  .face {
    position: absolute; width: 200px; height: 200px;
    background: #A1937F;
    border: 2px solid #8a7d6b;
    display: flex; justify-content: center; align-items: center;
  }
  .front  { transform: translateZ(100px); }
  .back   { transform: rotateY(180deg) translateZ(100px); }
  .right  { transform: rotateY(90deg) translateZ(100px); }
  .left   { transform: rotateY(-90deg) translateZ(100px); }
  .top    { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }
  .roblox-face { position: relative; width: 100%; height: 100%; }
  .eye { position: absolute; width: 24px; height: 24px; background: #1a1a1a; border-radius: 50%; top: 38%; }
  .eye-left { left: 30%; }
  .eye-right { right: 30%; }
  .mouth {
    position: absolute; bottom: 28%; left: 50%; transform: translateX(-50%);
    width: 80px; height: 40px;
    border-bottom: 8px solid #1a1a1a;
    border-radius: 0 0 50px 50px;
  }
  h1 { color: #e0e0e0; }
  p { color: #888; }
  .download { color: #00a8ff; text-decoration: none; font-size: 1.2rem; }
</style>
</head>
<body>
<div class="container">
  <h1>&#x1f9ca; Block Head UGC</h1>
  <p>Reject modernity. Return to cube.</p>
  <div class="cube-wrapper">
    <div class="cube">
      <div class="face front">
        <div class="roblox-face">
          <div class="eye eye-left"></div>
          <div class="eye eye-right"></div>
          <div class="mouth"></div>
        </div>
      </div>
      <div class="face back"></div>
      <div class="face right"></div>
      <div class="face left"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
    </div>
  </div>
  <p style="margin-top:2rem;">Classic Roblox block head with the OG smiley face.</p>
  <p><a class="download" href="https://github.com/Aero-VI/blockhead-ugc">Download from GitHub</a></p>
  <p style="color:#555; margin-top:1rem;">Made with spite by Azula</p>
</div>
</body>
</html>`;

fs.writeFileSync('index.html', preview);
console.log('Generated index.html');

// === Updated OBJ ===
const obj = `# Classic Roblox Block Head - UGC Accessory
# With face texture UV mapping on front face
o BlockHead

v -0.5 -0.5  0.5
v  0.5 -0.5  0.5
v  0.5  0.5  0.5
v -0.5  0.5  0.5
v -0.5 -0.5 -0.5
v  0.5 -0.5 -0.5
v  0.5  0.5 -0.5
v -0.5  0.5 -0.5

vt 0.0 0.0
vt 1.0 0.0
vt 1.0 1.0
vt 0.0 1.0

vn  0  0  1
vn  0  0 -1
vn  0  1  0
vn  0 -1  0
vn  1  0  0
vn -1  0  0

usemtl FrontFace
f 1/1/1 2/2/1 3/3/1
f 1/1/1 3/3/1 4/4/1

usemtl BlockHead
f 6/1/2 5/2/2 8/3/2
f 6/1/2 8/3/2 7/4/2
f 4/1/3 3/2/3 7/3/3
f 4/1/3 7/3/3 8/4/3
f 5/1/4 6/2/4 2/3/4
f 5/1/4 2/3/4 1/4/4
f 2/1/5 6/2/5 7/3/5
f 2/1/5 7/3/5 3/4/5
f 5/1/6 1/2/6 4/3/6
f 5/1/6 4/3/6 8/4/6
`;

fs.writeFileSync('blockhead.obj', obj);
console.log('Updated blockhead.obj');

// === Updated MTL ===
const mtl = `# Block Head Materials
mtllib blockhead.mtl

newmtl BlockHead
Kd 0.631 0.580 0.498
Ka 0.2 0.2 0.2
Ks 0.1 0.1 0.1
Ns 10.0
d 1.0

newmtl FrontFace
Kd 0.631 0.580 0.498
Ka 0.2 0.2 0.2
Ks 0.1 0.1 0.1
Ns 10.0
d 1.0
map_Kd face.svg
`;

fs.writeFileSync('blockhead.mtl', mtl);
console.log('Updated blockhead.mtl');
console.log('Done! All files generated.');
