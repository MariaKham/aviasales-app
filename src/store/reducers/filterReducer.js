const defaultFiltersState = {
  allChecked: false,
  filters: [
    { id: '0', label: 'Без пересадок', checked: true },
    { id: '1', label: '1 пересадка', checked: false },
    { id: '2', label: '2 пересадки', checked: false },
    { id: '3', label: '3 пересадки', checked: false },
  ],
}

const filterReducer = (state = defaultFiltersState, action) => {
  let newFilters
  switch (action.type) {
    case 'FILTER_ALL_TOGGLE':
      newFilters = state.filters.map((el) => ({ ...el, checked: !state.allChecked }))
      return { allChecked: !state.allChecked, filters: newFilters }

    case 'FILTER_TOGGLE':
      const idx = state.filters.findIndex((el) => el.id === action.id)
      const oldItem = state.filters[idx]
      const newItem = { ...oldItem, checked: !oldItem.checked }
      newFilters = [...state.filters.slice(0, idx), newItem, ...state.filters.slice(idx + 1)]
      const newAllChecked = newFilters.every((el) => el.checked)
      return { allChecked: newAllChecked, filters: newFilters }

    default:
      return state
  }
}

export default filterReducer
