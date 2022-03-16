import FormCard from 'components/formcard/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <div className='mt-4 mb-3 py-3'>
            <FormCard movieId={`${params.movieId}`} />
        </div>
    );
}

export default Form;