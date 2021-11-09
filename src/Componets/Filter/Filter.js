import PropTypes from 'prop-types';

function Filter ({value, onChange}) {
    return (
        <label>
            <span>Find contacts by name</span>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;