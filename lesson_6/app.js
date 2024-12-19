const pointsCount = 10;

// <div class="point">10</div>
function renderPoint(value) {
    const div = document.createElement('div');
    div.className = "point";
    div.textContent = value;
    return div;
}

const container = document.querySelector('.container');

for (let i = 0; i < pointsCount; i++) {
    const point = renderPoint(i + 1);
    container.appendChild(point);
}

const gradientColors = chroma
    .scale(chroma.brewer.RdYlGn.slice(1, -1))
    .colors(pointsCount);

const points =
        document.querySelectorAll(".point");
for (let i = 0; i < points.length; i++) {
    const color = gradientColors[i];
    const point = points[i];
    point.style.backgroundColor = color;
}

const text = document.querySelector('#text');

for(let point of points){
    point.onclick = function(){
        const selectedPoint = document.querySelector('.selected');
        selectedPoint?.classList.remove('selected');
        const color = point.style.backgroundColor;
        document.body.style.backgroundColor = color;
        text.textContent = point.textContent;
        point.classList.add('selected');
    }
}