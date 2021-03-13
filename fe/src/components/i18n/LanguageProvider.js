import React, {Fragment} from "react";
import { IntlProvider } from 'react-intl';
import { LANGUAGES } from'./Languages';
import messages from './messages'

const Provider = ({children, locale = LANGUAGES.ENGLISH}) => (
    
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);
export default Provider;