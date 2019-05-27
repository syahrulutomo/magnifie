export const SORT_BY_TITLE = 'SORT BY TITLE';
export const SORT_BY_PRICE = 'SORT BY PRICE';
export const SORT_BY_RATE = 'SORT BY RATE';

export const sortByTitle = () => {
  return {
      type: SORT_BY_TITLE,
  }
}

export const sortByPrice = () => {
  return {
    type: SORT_BY_PRICE,
  }
}

export const sortByRate = () => {
  return {
    type: SORT_BY_RATE,
  }
}

