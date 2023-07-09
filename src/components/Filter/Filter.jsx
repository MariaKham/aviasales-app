// import React from 'react'
import classes from './filter.module.scss'

function Filter() {
  return (
    <div className={classes.filters}>
      <h3 className={classes.filters__title}>Количество пересадок</h3>
      <ul className={classes.filters__list}>
        <li key="all" className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input />
            <span className={classes.filters__box} />
            Все
          </label>
        </li>
        {/* {filters.map(({ id, label, isChecked }) => {
                    return (
                        <li key={id} className={classes['filters__item']}>
                            <label className={classes['filters__label']}>
                                <input
                                />
                                <span className={classes['filters__box']}></span>
                                {label}
                            </label>
                        </li>
                    );
                })} */}
      </ul>
    </div>
  )
}

export default Filter
