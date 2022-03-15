import { ReactComponent as FullStar } from 'assets/img/fullstar.svg';
import { ReactComponent as HalfStar } from 'assets/img/halfstar.svg';
import { ReactComponent as EmptyStar } from 'assets/img/emptystar.svg';
import './Moviestars.css';
import { type } from '@testing-library/user-event/dist/type';

type Props = {
    score: number
}

type StarProps = {
    fill: number
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star( {fill} : StarProps) {
    if (fill === 0) {
        return <EmptyStar />
    } else if (fill === 1) {
        return <FullStar />
    } else {
        return <HalfStar />
    }
}

function MovieStars( {score} : Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]}/>
            <Star fill={fills[1]}/>
            <Star fill={fills[2]}/>
            <Star fill={fills[3]}/>
            <Star fill={fills[4]}/>
        </div>
    );
}

export default MovieStars;