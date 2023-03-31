export const shoesSizeList: any = [];
export const clothesSizeList: any = [];

for (let i = 1; i < 21; i++) {
  const size = 215 + i * 5;
  shoesSizeList.push(size);
}

for (let i = 1; i < 6; i++) {
  const size = 85 + i * 5;
  clothesSizeList.push(size);
}
