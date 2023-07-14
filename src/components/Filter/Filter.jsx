// import React from 'react'
import { connect } from 'react-redux'

import { filterToggle, filterAllToggle } from '../../store/actions/actions'

import classes from './filter.module.scss'

function Filter({ allChecked, filters, onFilterChange, onFilterAllChange }) {
  return (
    <div className={classes.filters}>
      <h3 className={classes.filters__title}>Количество пересадок</h3>
      <ul className={classes.filters__list}>
        <li key="all" className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input
              onChange={onFilterAllChange}
              checked={allChecked}
              className={classes.filters__input}
              type="checkbox"
            />
            <span className={classes.filters__box} />
            Все
          </label>
        </li>
        {filters.map(({ id, label, checked }) => (
          <li key={id} className={classes.filters__item}>
            <label className={classes.filters__label}>
              <input
                onChange={() => onFilterChange(id)}
                checked={checked}
                className={classes.filters__input}
                type="checkbox"
                id={id}
              />
              <span className={classes.filters__box} />
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  allChecked: state.filters.allChecked,
  filters: state.filters.filters,
})

const mapDispatchToProps = (dispatch) => ({
  onFilterAllChange: () => dispatch(filterAllToggle()),
  onFilterChange: (id) => dispatch(filterToggle(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
