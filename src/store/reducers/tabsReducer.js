const defaultTabsState = {
  tabs: [
    { id: 'cheap', label: 'Самый дешевый', active: true, style: { backgroundColor: '#2196F3', color: 'white' } },
    { id: 'fast', label: 'Самый быстрый', active: false, style: {} },
  ],
}

const tabsReducer = (state = defaultTabsState, action) => {
  switch (action.type) {
    case 'TABS_TOGGLE':
      const newTabs = state.tabs.map((tab) =>
        tab.id === action.id
          ? { ...tab, active: true, style: { backgroundColor: '#2196F3', color: 'white' } }
          : { ...tab, active: false, style: {} }
      )
      return { tabs: newTabs }
    default:
      return state
  }
}

export default tabsReducer
