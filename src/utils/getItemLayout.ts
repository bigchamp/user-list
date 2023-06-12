export function getItemLayout(data: any, index: number) {
  const ITEM_HEIGHT = 73; // fixed height of item component
  return {
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  };
}
