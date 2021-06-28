export default function (minH: string, maxH: string, minW: string, maxW: string) {
  const units = ['px', 'rem', 'em', '%', 'vh', 'vw'];
  let height = null;
  let minHeight = null;
  let maxHeight = null;
  let width = null;
  let minWidth = null;
  let maxWidth = null;

  if (minH) minHeight = units.some((unit) => minH.includes(unit)) ? `min-height:${minH};` : `min-height:${minH}px;`;
  if (maxH) maxHeight = units.some((unit) => maxH.includes(unit)) ? `max-height:${maxH};` : `max-height:${maxH}px;`;
  if (minW) minWidth = units.some((unit) => minW.includes(unit)) ? `min-width:${minW};` : `min-width:${minW}px;`;
  if (maxW) maxWidth = units.some((unit) => maxW.includes(unit)) ? `max-width:${maxW};` : `max-width:${maxW}px;`;

  if (maxH) height = units.some((unit) => maxH.includes(unit)) ? `height:${maxH};` : `height:${maxH};px`;
  if (minH) height = units.some((unit) => minH.includes(unit)) ? `height:${minH};` : `height:${minH}px;`;
  if (maxW) width = units.some((unit) => maxW.includes(unit)) ? `width:${maxW};` : `width:${maxW}px;`;
  if (minW) width = units.some((unit) => minW.includes(unit)) ? `width:${minW};` : `width:${minW}px;`;

  const arraySize = [height, minHeight, maxHeight, width, minWidth, maxWidth];
  const stringSize = arraySize.join(' ');
  return {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    arraySize,
    stringSize,
  };
}
