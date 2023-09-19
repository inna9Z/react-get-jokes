
import PropTypes from 'prop-types'
import './Joke.css'

const Joke = ({ joke }) => {
    const itsTwoParts = joke.type === 'twopart';

    return (
        <div className="joke">
            <div>
                {itsTwoParts ? (
                    <div>
                        <p>{joke.setup}</p>
                        <p>{joke.delivery}</p>
                    </div>
                ) : (
                    <p>{joke.joke}</p>
                )}
            </div>
            <div className="btn-container">
                {Object.entries(joke.flags).map(([key, value]) => (
                    <button key={key} className={value ? 'red' : 'green'}>
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
};

Joke.propTypes = {
    joke: PropTypes.shape({
        type: PropTypes.string.isRequired,
        setup: PropTypes.string,
        delivery: PropTypes.string,
        joke: PropTypes.string,
        flags: PropTypes.object.isRequired,
    }).isRequired,
};

export default Joke;
