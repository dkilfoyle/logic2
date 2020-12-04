import {
  path   as d3_path,
  select as d3_select
} from 'd3';

const DIGIT_WIDTH   = 70;
const DIGIT_PADDING = 0.15 * DIGIT_WIDTH;
const BAR_HEIGHT    = 0.2 * (DIGIT_WIDTH - 2*DIGIT_PADDING);
const BAR_SPACE     = 0.1 * BAR_HEIGHT;
const BAR_WIDTH     = DIGIT_WIDTH - 2*DIGIT_PADDING - BAR_HEIGHT;
const DIGIT_HEIGHT  = 2*DIGIT_PADDING + 2*BAR_WIDTH + BAR_HEIGHT + 4*BAR_SPACE;
const DOT_WIDTH     = 2*DIGIT_PADDING + BAR_HEIGHT;
const DOT_SPACE     = (DIGIT_HEIGHT - 2*DIGIT_PADDING - 2*BAR_HEIGHT) / 3;
const COLOR_ON      = '#70fbfd';
const COLOR_OFF     = '#181917';


// Path string for bars.
const barPath = (() => {
  const p = d3_path();
  p.moveTo(0, BAR_HEIGHT / 2);
  p.lineTo(BAR_HEIGHT / 2, 0);
  p.lineTo(BAR_WIDTH - BAR_HEIGHT / 2, 0);
  p.lineTo(BAR_WIDTH, BAR_HEIGHT / 2);
  p.lineTo(BAR_WIDTH - BAR_HEIGHT / 2, BAR_HEIGHT);
  p.lineTo(BAR_HEIGHT / 2, BAR_HEIGHT);
  p.closePath();
  return p.toString();
})();

// Returns data for bars within digit, passed numerical value.
function barData (v) {
  return [
    { // top
      x   : BAR_HEIGHT/2,
      y   : 0,
      rot : 0,
      on  : [0, 2, 3, 5, 6, 7, 8, 9].indexOf(v) > -1
    },
    { // top left
      x   : BAR_HEIGHT - BAR_SPACE,
      y   : BAR_HEIGHT/2 + BAR_SPACE,
      rot : 90,
      on  : [0, 4, 5, 6, 8, 9].indexOf(v) > -1
    },
    { // top right
      x   : BAR_WIDTH + BAR_HEIGHT + BAR_SPACE,
      y   : BAR_HEIGHT/2 + BAR_SPACE,
      rot : 90,
      on  : [0, 1, 2, 3, 4, 7, 8, 9].indexOf(v) > -1
    },
    { // middle
      x   : BAR_HEIGHT/2,
      y   : BAR_WIDTH + 2*BAR_SPACE,
      rot : 0,
      on  : [2, 3, 4, 5, 6, 8, 9].indexOf(v) > -1
    },
    { // bottom left
      x   : BAR_HEIGHT - BAR_SPACE,
      y   : BAR_WIDTH + BAR_HEIGHT/2 + 3*BAR_SPACE,
      rot : 90,
      on  : [0, 2, 6, 8].indexOf(v) > -1
    },
    { // bottom right
      x   : BAR_WIDTH + BAR_HEIGHT + BAR_SPACE,
      y   : BAR_WIDTH + BAR_HEIGHT/2 + 3*BAR_SPACE,
      rot : 90,
      on  : [0, 1, 3, 4, 5, 6, 7, 8, 9].indexOf(v) > -1
    },
    { // bottom
      x   : BAR_HEIGHT/2,
      y   : 2*BAR_WIDTH + 4*BAR_SPACE,
      rot : 0,
      on  : [0, 2, 3, 5, 6, 8, 9].indexOf(v) > -1
    }
  ];
}

// Create main element.
const svg = d3_select('#digital-clock').append('svg')
  .attr('width', 6*DIGIT_WIDTH + 2*DOT_WIDTH)
  .attr('height', DIGIT_HEIGHT)
  .append('g');

// Create background.
svg.append('rect')
  .attr('width', 6*DIGIT_WIDTH + 2*DOT_WIDTH)
  .attr('height', DIGIT_HEIGHT)
  .attr('fill', '#000');

// Create clock.
const clock = svg.append('g')
  .attr('transform', 'translate(' + DIGIT_PADDING + ',' + DIGIT_PADDING + ')');

// Create digits.
const digits = clock.selectAll('.digit').data([1, 2, 3, 4, 5, 6])
  .enter()
  .append('g')
    .attr('class', 'digit')
    .attr('transform', (d, i) => 'translate(' + (i*DIGIT_WIDTH + Math.floor(i/2)*DOT_WIDTH) + ',0)');

// Create bars for each digit.
digits.selectAll('.bar').data(d => barData(d))
  .enter()
  .append('path')
    .attr('class', 'bar')
    .attr('d', barPath)
    .attr('fill', d => d.on ? COLOR_ON : COLOR_OFF)
    .attr('transform', d => 'translate(' + d.x + ',' + d.y + ') rotate(' + d.rot + ')');


// [x, y] positions for dots.
const dotData = [
  [2*DIGIT_WIDTH, DOT_SPACE],
  [2*DIGIT_WIDTH, 2*DOT_SPACE + BAR_HEIGHT],
  [4*DIGIT_WIDTH + DOT_WIDTH, DOT_SPACE],
  [4*DIGIT_WIDTH + DOT_WIDTH, 2*DOT_SPACE + BAR_HEIGHT]
];

// Create dots.
clock.selectAll('.dot').data(dotData)
  .enter()
  .append('rect')
    .attr('class', 'dot')
    .attr('x', d => d[0])
    .attr('y', d => d[1])
    .attr('width', BAR_HEIGHT)
    .attr('height', BAR_HEIGHT)
    .attr('fill', COLOR_ON);

function update () {

  const date = new Date();
  const h = date.getHours() % 12;
  const m = date.getMinutes();
  const s = date.getSeconds();

  svg.selectAll('.digit').data([
      h === 0 ? 1 : h > 9 ? 1 : -1,
      h === 0 ? 2 : h > 9 ? h - 10 : h,
      Math.floor(m / 10),
      m % 10,
      Math.floor(s / 10),
      s % 10
    ])
    .selectAll('.bar').data(d => barData(d))
    .attr('fill', d => d.on ? COLOR_ON : COLOR_OFF);
}

window.setInterval(update, 20);
