import { ReactComponent as FullStar } from 'assets/img/fullstar.svg';
import { ReactComponent as HalfStar } from 'assets/img/halfstar.svg';
import { ReactComponent as EmptyStar } from 'assets/img/emptystar.svg';
import './Moviestars.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
        </div>
    );
}

export default MovieStars;