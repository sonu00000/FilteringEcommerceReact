import {BsSearch} from 'react-icons/bs'
import {FaRegStar, FaStar} from 'react-icons/fa'
import './index.css'

const FiltersGroup = props => {
  const {
    searchText,
    updateSearchText,
    categoryOptions,
    updateCategoryId,
    ratingsList,
    updateRatingId,
  } = props

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      {/* Replace this element with your code */}
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={e => updateSearchText(e)}
      />

      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(eachCategory => (
          <li className="category-item" key={eachCategory.categoryId}>
            <button
              type="button"
              className="category-item-btn"
              onClick={() => updateCategoryId(eachCategory.categoryId)}
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="rating-heading">Category</h1>
      <ul className="ratings-list">
        {ratingsList.map(eachRating => (
          <li className="rating-item" key={eachRating.ratingId}>
            {Array(Number(eachRating.ratingId))
              .fill(true)
              .map((item, index) => (
                <FaStar className="star" key={index} />
              ))}
            {Array(5 - Number(eachRating.ratingId))
              .fill(true)
              .map((item, index) => (
                <FaRegStar className="star hollow" key={index} />
              ))}
            <button
              className="star-btn"
              onClick={() => updateRatingId(eachRating.ratingId)}
            >
              & up
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
