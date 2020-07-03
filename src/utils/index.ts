export const searchTextInArrOfObj = (
  array: Array<{} | any>,
  searchKey: string,
  searchValue: string,
) => array.filter((obj) => obj[searchKey].toLowerCase().match(searchValue.toLowerCase()));
