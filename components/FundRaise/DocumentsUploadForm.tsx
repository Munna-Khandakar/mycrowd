import {Fragment} from 'react';
import {OnBehalfApplicationDocuments} from '@/components/FundRaise/OnBehalfApplicationDocuments';

const APLICATION_TYPE = 'on_behalf';

export const DocumentsUploadForm = () => {
    return (
        <Fragment>
            {
                APLICATION_TYPE === 'on_behalf' && <OnBehalfApplicationDocuments/>
            }
        </Fragment>
    );
};