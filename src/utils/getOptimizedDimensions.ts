interface Dimensions {
  height: number;
  width: number;
}

const getOptimizedDimension = (
  {
    svgDimensions,
    maskDimensions
  }: {
    svgDimensions: Dimensions,
    maskDimensions: Dimensions
  }
) => {
  const svgDimensionsMax = Math.max(svgDimensions.height, svgDimensions.width);
  const maskDimensionsMax = Math.max(maskDimensions.height, maskDimensions.width);
  const offset = 10;

  return Math.min(svgDimensionsMax, maskDimensionsMax) - offset;
};

export default getOptimizedDimension;