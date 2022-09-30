function insertElement(data) {
  let xmlns = "http://www.w3.org/2000/svg";

  let element = document.createElementNS(xmlns, data.type);

  element.className.baseVal = data.className;

  if (data.attrs) {
    Object.keys(data.attrs).forEach(function(key, idx) {
      let value = data.attrs[key];
      if (key != key.toLowerCase()) {
        key = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
      }
      // SVG-specific
      element.setAttributeNS(null, key, value);
    });
  }

  //const mainNode = document.querySelector(`#${data.appendTo}`);

  data.mainNode.appendChild(element);
};

export function addBlocks(blocks, color, maxHeight, SVG) {
  const length = blocks.length;
  const barWidth = 100 / length;
  const barHeight = (value) => {
    return (value * 100) / maxHeight;
  };
  const xPos = (index) => {
    return index * barWidth;
  };
  const yPos = (value) => {
    return 100 - barHeight(value);
  };

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] <= 0) {
      continue;
    }

    insertElement({
      type: 'rect',
      class: 'block',
      attrs: {
        x: xPos(i),
        y: yPos(blocks[i]),
        width: barWidth,
        height: barHeight(blocks[i]),
        fill: color,
        stroke: 'black',
      },
      mainNode: SVG
    });
  }
}