interface Dimensions {
  height: number;
  width: number;
}

const getOptimizedDimension = (
  {
    svgDimensions,
    maskDimensions,
    type = 'max'
  }: {
    svgDimensions: Dimensions,
    maskDimensions: Dimensions,
    type?: 'min' | 'max'
  }
) => {
  const offset = type === 'max' ? 10 : 5;

  let svgDimensionsOpt;
  let maskDimensionsOpt;
  
  if (type === 'max') {
    svgDimensionsOpt = Math.max(svgDimensions.height, svgDimensions.width);
    maskDimensionsOpt = Math.max(maskDimensions.height, maskDimensions.width);
  } else {
    svgDimensionsOpt = Math.min(svgDimensions.height, svgDimensions.width);
    maskDimensionsOpt = Math.min(maskDimensions.height, maskDimensions.width);
  }

  console.log(svgDimensions, maskDimensions);

  return Math.min(svgDimensionsOpt, maskDimensionsOpt) - offset;
};

export default getOptimizedDimension;