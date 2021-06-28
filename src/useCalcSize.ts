export default function (minH: string, maxH: string, minW: string, maxW: string) {
  const units = ['px', 'rem', 'em', '%', 'vh', 'vw'];
  let minHeight = null;
  let maxHeight = null;
  let minWidth = null;
  let maxWidth = null;
  if (minH) minHeight = units.some((unit) => minH.includes(unit)) ? `min-height:${minH};` : `min-height:${minH}px;`;
  if (maxH) maxHeight = units.some((unit) => maxH.includes(unit)) ? `max-height:${maxH};` : `max-height:${maxH}px;`;
  if (minW) minWidth = units.some((unit) => minW.includes(unit)) ? `min-width:${minW};` : `min-width:${minW}px;`;
  if (maxW) maxWidth = units.some((unit) => maxW.includes(unit)) ? `max-width:${maxW};` : `max-width:${maxW}px;`;
  const arraySize = [minHeight, maxHeight, minWidth, maxWidth];
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
